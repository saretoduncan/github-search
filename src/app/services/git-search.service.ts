import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { IuserProfile } from "../interfaces/userInterface";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class GitSearchService {
  userProfile: User;
  constructor(private http: HttpClient, private router: Router) {
    this.userProfile = new User("", "", "", "", 0, 0, 0, "", "", 0, "");
  }
  getSearchResults(user: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<IuserProfile>(`https://api.github.com/users/${user}`)
        .toPromise()
        .then(
          (response) => {
            this.userProfile.userName = response.login;
            this.userProfile.name = response.name;
            this.userProfile.bio = response.bio;
            this.userProfile.followers = response.followers;
            this.userProfile.following = response.following;
            this.userProfile.location = response.location;
            this.userProfile.socialMedia = response.twitter_username;
            this.userProfile.repositories = response.public_repos;
            this.userProfile.avatarUrl = response.avatar_url;
            this.userProfile.repo_url = response.repos_url;

            resolve(response);
          },

          (error) => {
            if (error.status) {
              this.router.navigate(["/err"]);
            }
            reject(error);
          }
        );
    });
    return promise;
  }
}
