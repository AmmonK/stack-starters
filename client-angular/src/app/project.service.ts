import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Project } from "./models/project";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  // Java Spring Boot uses port 8080
  //apiUrl: string = "http://localhost:8080/api/project";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/project";

  // Express will use port 3000
  apiUrl: string = "http://localhost:3000/api/project";

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
