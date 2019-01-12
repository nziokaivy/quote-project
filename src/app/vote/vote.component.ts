import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Output () isComplete = new EventEmitter<boolean>();

  upVotes=0;
  downVotes=0;

  UpVote() {
    this.upVotes = this.upVotes + 1; 
  }
  DownVote() {
    this.downVotes = this.downVotes + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
