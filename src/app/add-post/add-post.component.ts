import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostPayload } from '../dto/post-payload';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  newPostForm: FormGroup;
  newPostPayload: PostPayload

  constructor(private postService: PostService,
    private router: Router) {
    this.newPostForm = new FormGroup({
      'title': new FormControl,
      'body': new FormControl
    });

    this.newPostPayload = new PostPayload;
   }

  ngOnInit(): void {
  }

  onSubmit(){

    this.newPostPayload.title = this.newPostForm.get('title')?.value;
    this.newPostPayload.content = this.newPostForm.get('body')?.value;
    this.newPostPayload.username = localStorage.getItem("username");

    this.postService.addPost(this.newPostPayload).subscribe(data=>{
      this.router.navigateByUrl("/home");
    }, error=>{
      alert("Error!!")
    })
  }

}
