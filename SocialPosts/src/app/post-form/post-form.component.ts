import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Post } from '../post/post.component';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  isModalOpen: boolean;
 

@Input() title: string;
@Input() thought: string;
 newPost: string;
 newTitle: string;
@Input() posts = [];


@Output() closed = new EventEmitter();
@Output() newThought = new EventEmitter <Post>();
  constructor() { }

  ngOnInit() {
}

submitPost(){
  
  this.closed.emit();
  console.log("HEY");
  
  this.newThought.emit({title: this.newTitle, thought: this.newPost});
}

closeModal() {
  this.closed.emit();
  } 

}
