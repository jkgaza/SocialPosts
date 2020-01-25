import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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

  @Input() post : Post;

  @Output() deleted = new EventEmitter();
  
  constructor() { }

  deletePost(){
    this.deleted.emit();
  }

  ngOnInit() {
  }

}
