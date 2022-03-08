import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPayload } from '../dto/post-payload';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  permaLink: Number = 0;
  post!: PostPayload;

  constructor(private router: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=> {
      this.permaLink = params["id"];
    });

    this.postService.getPost(this.permaLink).subscribe(
      (data:PostPayload) => {
        this.post = data;
      }, error=>{
        alert("Error!!");
      }
    )
    
  }

}
