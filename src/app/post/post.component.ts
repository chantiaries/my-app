import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private _postservice:PostService) {
    this._postservice.getitems().subscribe(
     (data:any)=>{ 
      this.posts=data;   
  },
  (err: any)=>{
          alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}
}
