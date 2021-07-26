import { Component, OnInit } from "@angular/core";
import { GitSearchService } from "../services/git-search.service";
import { GitRepoService } from "../services/git-repo.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-comp",
  templateUrl: "./search-comp.component.html",
  styleUrls: ["./search-comp.component.css"],
})
export class SearchCompComponent implements OnInit {
  constructor(
    private gitService: GitSearchService,
    private gitRepo: GitRepoService,
    private router: Router
  ) {}
  onSubmit(val: any) {
    if (val.search != "") {
      this.gitRepo.repoArr = [];
      this.gitService.getSearchResults(val.search);
      this.gitRepo.getRepoDetails(val.search);
      this.router.navigate(["/repos"]);
    }
  }

  ngOnInit(): void {}
}
