import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  } 
  
  quotes = [
    new Quote(1, "lorem ipsum is real", "Ivy", "Dami"),
    new Quote(2, "lorem ipsum is no lie", "Ivy", "Dami"),
    new Quote(3, "lorem ipsum is lit", "Ivy", "Dami"),
  ]

  showDescription = false;

  addNewQuote(quote) {
    this.quotes.push(quote);
  }

  toggleQuote() {
    this.showDescription =! this.showDescription;
  }

  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
    }

  

  this.ngOnInit(), {

  }

  }
}
