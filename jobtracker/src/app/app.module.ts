import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    { path: 'main', component: Main }

]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true} // <-- Debugging purposes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
