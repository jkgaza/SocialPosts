import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() title: string;
  @Input() thought: string;
  // title = 'SocialPosts';

  posts = [
    {title: "Saw a dog today", thought: "It was super neat."},
    {title: "I bought a coffee", thought: "I had a hard day and I wanted to. Treat. My. Self."},
    {title: "Did you know", thought: "That celery is super, super gross."},
    {title: "What's the deal??", thought: "Pants are weird. What's up with that?"},
    {title: "Just noticed", thought: "My hair kind of smells bad."},
  ];

  constructor(){

  }

  ngOnInit(){

  }

  onDeleted(index: number){
    this.posts.splice(index, 1);
  }
}
