// add import -> add it to import(class) or @NgModule(component). For interfaces - nothing.
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Dynamic forms
import {FormsModule} from '@angular/forms';
// Routing
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NotesComponent} from './components/notes/notes.component';

const appRoutes: Routes = [
  {path: '', component: NotesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
