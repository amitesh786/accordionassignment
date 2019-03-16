import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import GetDataFromJson from './data.json';

@Injectable()
export class ServiceAccordion {
    
    // source for input file
    apiUrl = 'http://localhost:4200/src/app/services/serviceCustom.json';
    
    // using constructor, injecting http of type HttpClient
    constructor(private http: HttpClient) {}

    // Get the data from input json file
    getDataFromJson(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    // Get the data from import data json file
    getDataJson(): Observable<any> {
        return GetDataFromJson;
    }
}
