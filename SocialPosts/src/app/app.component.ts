import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @Input() title: string;
  @Input() thought: string;
  // title = 'SocialPosts';

 

  constructor() {}

  ngOnInit() {}

 
}
