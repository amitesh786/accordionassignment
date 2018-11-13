import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceAccordion {
    
    // source for input file
    apiUrl = 'http://localhost:4200/src/app/services/service.json';
    
    // using constructor, injecting http of type HttpClient
    constructor(private http: HttpClient) {}

    // Get the data from input json file
    getDataFromJson(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}
