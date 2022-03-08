import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostPayload } from '../dto/post-payload';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts!: Observable<Array<PostPayload>>;

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

}
