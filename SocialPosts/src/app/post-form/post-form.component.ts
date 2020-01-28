import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { stringify } from 'querystring';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  isModalOpen: boolean;

@Input() title: string;
@Input() thought: string; 
@Input() posts = [];


@Output() closed = new EventEmitter();
  constructor() { }

  ngOnInit() {
}

submitPost(newPost){
  this.posts.push({title: this.title, thought: this.thought});
  console.log("HEY");
}

closeModal() {
  this.closed.emit();
  } 

}
