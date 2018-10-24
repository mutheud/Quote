import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(null, '', '', null, null);
  @Output() formQuote = new EventEmitter<Quote>();
  constructor() { }

  ngOnInit() {
  }
  addQuote() {
   this.formQuote.emit(this.newQuote);
  }
}
