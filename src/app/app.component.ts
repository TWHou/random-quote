import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote = {};
  tweetUrl: string = '#';
  constructor(private quoteService: QuoteService) { }
  getQuote(): void {
    this.quoteService.getQuote()
      .subscribe(quote => {
        this.quote = quote;
        this.tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(`${quote.quote} -- ${quote.author}`);
      });
  }
  ngOnInit(): void {
    this.getQuote();
  }
}
