import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    // tslint:disable-next-line:max-line-length
    new Quote(
      1,
      'The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart',
      'Diana Paul',
      0,
      0
    ),
    // tslint:disable-next-line:max-line-length
    new Quote(
      2,
      // tslint:disable-next-line:max-line-length
      'I love things that age well - things that dont date, that stand the test of time and that become living examples of the absolute best',
      'Giorgio Armani',
      0,
      0
    ),
    // tslint:disable-next-line:max-line-length
    new Quote(
      3,
      // tslint:disable-next-line:max-line-length
      'There are many, many examples of people who have strived to succeed over and over again but always seemed to hit the proverbial brick wall. Nevertheless, the beauty of a lot of these stories, real people stories, is that they continued to prevail where perseverance prevailed over resistance',
      'Catherine Pulsifer',
      0,
      0
    ),
    // tslint:disable-next-line:max-line-length
    new Quote(
      4,
      // tslint:disable-next-line:max-line-length
      'Whether you realize it or not, people are watching your life. Even those who belittle you are watching how you live. How you live your life around those people is how you set an example for them.',
      'Heidi Kreider',
      0,
      0
    ),
    new Quote(
      5,
      // tslint:disable-next-line:max-line-length
      'The legacy of heroes is the memory of a great name and the inheritance of a great example.',
      'Benjamin Disraeli ',
      0,
      0
    )
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isTobeDeleted, index) {
    if (isTobeDeleted) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}

  addNewQuote(quote: Quote) {
    this.quotes.unshift(quote);
  }
  upVote(i) {
    this.quotes[i].upVote += 1;
  }
  downVote(i) {
    this.quotes[i].downVote += 1;
  }
}
