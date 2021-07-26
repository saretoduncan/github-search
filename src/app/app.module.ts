import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RepositoriesComponent } from "./repositories/repositories.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { SearchCompComponent } from "./search-comp/search-comp.component";
import { NavComponent } from "./nav/nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpClientModule } from "@ngx-progressbar/http-client";
import { AgoPipe } from './pipes/ago.pipe';
import { HiglightDirective } from './directives/higlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    NotfoundComponent,
    SearchCompComponent,
    NavComponent,
    AgoPipe,
    HiglightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
