import { Component, OnInit } from "@angular/core";
import { GitSearchService } from "../services/git-search.service";
import { GitRepoService } from "../services/git-repo.service";
import { User } from "../models/user";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.css"],
})
export class RepositoriesComponent implements OnInit {
  userProfile!: User;
  rep: any[] = [];
  constructor(
    private gitService: GitSearchService,
    private gitRepoService: GitRepoService
  ) {}

  ngOnInit(): void {
    this.userProfile = this.gitService.userProfile;
    this.rep = this.gitRepoService.repoArr;
  }
}
