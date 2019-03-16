import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import GetDataFromJson from '../../services/data.json';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    dtOptions: DataTables.Settings = {};

    constructor(private http: HttpClient) { }

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
}
