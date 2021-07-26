import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchCompComponent } from './search-comp/search-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    NotfoundComponent,
    SearchCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
