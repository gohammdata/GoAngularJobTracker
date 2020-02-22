import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from './app.component';
import { MainComponent } from "./main/main.component";

export const AvailableRoutes: any = [
    { path: "main", component: MainComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    MainComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }