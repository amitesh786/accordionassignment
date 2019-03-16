import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AccordionComponent } from './components/Accordion/accordion.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule, 
        HttpClientModule,
        DataTablesModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AccordionComponent,
        HeaderComponent,
        ContainerComponent,
        PageNotFoundComponent,
        TableComponent
    ],
    bootstrap: [AppComponent],
    providers: []
})

export class AppModule { }
