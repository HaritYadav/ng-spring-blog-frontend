import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from '../dto/post-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "http://localhost:8080/api/posts";

  constructor(private httpClient: HttpClient) { }

  addPost(newPostPayload: PostPayload): Observable<any> {
    return this.httpClient.post(this.url + "/createPost", newPostPayload, 
      {headers: {"Authorization" : "Bearer " + localStorage.getItem("authenticationToken")}}
    );
  }

  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>(this.url + "/all", 
      {headers: {"Authorization" : "Bearer " + localStorage.getItem("authenticationToken")}}
    );
  }

  getPost(permaLink: Number): Observable<PostPayload>{
    return this.httpClient.get<PostPayload>(this.url + "/getById/" + permaLink, 
      {headers: {"Authorization" : "Bearer " + localStorage.getItem("authenticationToken")}}
    );
  }

}
