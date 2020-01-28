import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  @Input() title: string;
  @Input() thought: string;


  posts = [
    {title: "Saw a dog today", thought: "It was super neat."},
    {title: "I bought a coffee", thought: "I had a hard day and I wanted to. Treat. My. Self."},
    {title: "Did you know", thought: "That celery is super, super gross."},
    {title: "What's the deal??", thought: "Pants are weird. What's up with that?"},
    {title: "Just noticed", thought: "My hair kind of smells like strawberries."},
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(title: string, thought: string){

  }

  onDeleted(index: number){
    this.posts.splice(index, 1);
  }

}
