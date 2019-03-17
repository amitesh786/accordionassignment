import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import GetDataFromJson from '../../services/data.json';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnDestroy, OnInit {
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    dtOptions: DataTables.Settings = {};

    dtTrigger: Subject<any> = new Subject();

    ngOnInit(): void {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 2,
            serverSide: false,
            processing: true,

            data: GetDataFromJson,
            columns: [
                { title: 'ID', data: 'id' },
                { title: 'Sex', data: 'sex' },
                { title: 'FirstName', data: 'firstName' },
                { title: 'LastName', data: 'lastName' },
                { title: 'City', data: 'city' },
                { title: 'Wage', data: 'wage' },
                { title: 'Phone', data: 'phone' },
                { title: 'Date', data: 'date' },
                { title: 'children', data: 'children' }
            ]
        };
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();
    }

    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }
}
