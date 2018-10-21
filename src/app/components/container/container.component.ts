import { Component, OnInit } from '@angular/core';
import { ServiceAccordion } from '../../services/ServiceAccordion';

@Component({
    selector: 'container-accordion',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    providers: [ServiceAccordion]
})
export class ContainerComponent implements OnInit {

    panels: Array<any>;
    mainTitle: any;
    collectInfo: any;

    constructor(private serviceAccordion: ServiceAccordion) { }

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
