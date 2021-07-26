import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { SearchCompComponent } from "./search-comp/search-comp.component";
import { RepositoriesComponent } from "./repositories/repositories.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
  { path: "search", component: SearchCompComponent },
  { path: "repos", component: RepositoriesComponent },
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "err", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
