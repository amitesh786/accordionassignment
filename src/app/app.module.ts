import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
    imports: [BrowserModule, HttpModule, HttpClientModule],
    declarations: [AppComponent, HeaderComponent, ContainerComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }
