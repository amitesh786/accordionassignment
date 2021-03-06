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
    dtOptions: any = {}; //DataTables.Settings = {};

    dtTrigger: Subject<any> = new Subject();

    ngOnInit(): void {

        this.dtOptions = {
            dom: 'l<"p-3">Bfrtip',
            pagingType: 'full_numbers',
            pageLength: 2,
            serverSide: false,
            processing: true,
            data: GetDataFromJson,
            responsive: true,
            buttons: [
                'columnsToggle', // All columns are present
                {
                    extend: 'colvis', // Column visibility
                    className: 'btn-outline-success'
                },
                'copy',
                'print',
                'excel',
                // {
                //     text: 'Custom button',
                //     key: '1',
                //     action: function (e, dt, node, config) {
                //         alert('Button activated');
                //     }
                // }
            ],
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
            ],
            colReorder: {
                order: [0,1,2,3,4,5,6,7,8]
            }
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
