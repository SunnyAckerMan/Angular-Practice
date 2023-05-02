import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'List of Post';
  messagePost = 'Message Post';
  postParentMessage = 'I Hate C';
  childMessage = 'From Child Component';
  outputChildMessage = 'Message from Child component via Output';
  @Input() fromParent!: string; //@Input is for parent to child only!
  @Output() messageEvent = new EventEmitter<string>();
  posts: any[];
  ngOnInit(): void {}
  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
constructor(private postService:PostService)
{
  this.posts = postService.postList;
}
  addNew() {
    let newPost = { id: 7, postTitle: 'post 7' };
     this.postService.addPost(newPost);
  }
 
}
