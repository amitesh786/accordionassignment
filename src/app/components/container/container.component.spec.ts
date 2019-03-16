import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ContainerComponent } from './container.component';
import { ServiceAccordion } from '../../services/ServiceAccordion';
import { HttpClientModule } from '@angular/common/http';

describe('ContainerComponent', () => {

    let component: ContainerComponent;
    let fixture: ComponentFixture<ContainerComponent>;
    let de: DebugElement;
    let serviceAccordion: ServiceAccordion;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [
                ContainerComponent
            ],
            providers: [ServiceAccordion]            
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
        serviceAccordion = TestBed.get(ServiceAccordion);
        
    });

    it('should be truthy conatiner component', () => {
        expect(ContainerComponent).toBeTruthy();
    });

    it('should be defined conatiner component', () => {
        expect(ContainerComponent).toBeDefined();
    });

    it('Service injectes via inject and Testbed.get should be the same instance', ()=> {
        inject([ServiceAccordion], (injectService: ServiceAccordion) =>{
            expect(injectService).toBe(serviceAccordion);
        });
    });

    it('Service to check api url', () => {
        expect(serviceAccordion.apiUrl).toBe("http://localhost:4200/src/app/services/serviceCustom.json");
    });

    it('Service to check get data from json', () => {
        let body;
        let getJson = serviceAccordion.getDataFromJson().subscribe((res) => {
            body = JSON.stringify(res);
        })
        expect(getJson).not.toBeNull();
        expect(body).not.toBeNull();
    });
});
