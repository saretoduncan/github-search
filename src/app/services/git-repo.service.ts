import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Irepo } from "../interfaces/repoInterface";
import { Repositories } from "../models/repositories";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class GitRepoService {
  repo: any;
  repoArr: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}
  getRepoDetails(user: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<Irepo[]>(`https://api.github.com/users/${user}/repos`)
        .toPromise()
        .then(
          (response) => {
            response.forEach((response) => {
              this.repo = new Repositories(
                response.name,
                response.html_url,
                new Date(response.created_at),
                response.clone_url,
                response.forks_count,
                response.homepage,
                response.description,
                response.stargazers_count
              );
              if (response.name !== "") {
                this.repoArr.push(this.repo);
              }
            });

            resolve(response);
          },
          (error) => {
            if ((error.status = 404)) {
              this.router.navigate(["/err"]);
            }
            reject(error);
          }
        );
    });
    return promise;
  }
}
