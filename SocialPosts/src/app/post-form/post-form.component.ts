import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  isModalOpen: boolean;
  
  
@Output() closed = new EventEmitter();
  constructor() { }

  ngOnInit() {
}

closeModal() {
  this.closed.emit();
  }


submitPost(post: string){
    this.posts.push({title: string, thought: string});
  } 

}
