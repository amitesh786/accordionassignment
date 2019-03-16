import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AccordionComponent } from './components/Accordion/accordion.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
 
const appRoutes: Routes = [
    { path: 'app-accordion', component: AccordionComponent },
    { path: '', redirectTo: '/app-table', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
