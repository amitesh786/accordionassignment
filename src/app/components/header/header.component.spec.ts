import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ]
        }).compileComponents(); // complier css and test case
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should be truthy header component', () => {
        expect(HeaderComponent).toBeTruthy();
    });

    it('should be defined header component', () => {
        expect(HeaderComponent).toBeDefined();
    });

    it('should check the title', () => {
        const result = component.title;
        expect(result).toBe('Accordion');
    });

    it('title should not be null', () => {
        const result = component.title;
        expect(result).not.toBeNull();
    });
});
