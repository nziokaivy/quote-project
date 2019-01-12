import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit { 
  quotes = [
    new Quote(1, "lorem ipsum is real", "Ivy", "Dami"),
    new Quote(2, "lorem ipsum is no lie", "Ivy", "Dami"),
    new Quote(3, "lorem ipsum is lit", "Ivy", "Dami"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
