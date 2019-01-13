import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  ngOnInit(): void {

  } 
  
  quotes = [
    new Quote(1, "lorem ipsum is real", "Ivy", "Dami", new Date(2011, 3, 4)),
    new Quote(2, "lorem ipsum is no lie", "Ivy", "Dami", new Date(2012, 3, 4)),
    new Quote(3, "lorem ipsum is lit", "Ivy", "Dami", new Date(2013, 3, 4)),
  ]

  showDescription = false;

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
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
