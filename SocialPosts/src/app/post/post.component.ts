import { Component, OnInit } from '@angular/core';


export interface Post{
  title: string;
  thought: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
