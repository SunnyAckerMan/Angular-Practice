import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postList: Array<any> = [
    { id: 1, PostTitle: 'post 1' },
    { id: 2, PostTitle: 'post 2' },
    { id: 3, PostTitle: 'post 3' },
    { id: 4, PostTitle: 'post 4' },
    { id: 5, PostTitle: 'post 5' },
  ];

  addPost(data: any) {
    this.postList.push(data);
  }

  constructor() {}
}
