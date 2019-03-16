import { Component, OnInit } from '@angular/core';
import { ServiceAccordion } from '../../services/ServiceAccordion';

@Component({
    selector: 'container-accordion',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    providers: [ServiceAccordion]
})

export class ContainerComponent implements OnInit {

    // inferred as panels: any[]
    panels: Array<any>;

    // inferred as mainTitle: any( should be String)
    mainTitle: any;

    // inferred as collectInfo: any( should be object contains collection)
    collectInfo: any;

    // using constructor, injecting serviceAccordion of type ServiceAccordion
    constructor(private serviceAccordion: ServiceAccordion) { }

    // using ngOnInit, to subscribe the service and get data
    ngOnInit() {

        this.serviceAccordion.getDataFromJson().subscribe(
            res => {
                this.collectInfo = res;
                this.mainTitle = res.mainTitle;
                this.panels = this.collectInfo.panels;
            },
            err => {
                console.error("Error : " + err);
            }
        );
    }
}
