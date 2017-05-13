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
      .subscribe(quotes => {
        this.quote = quotes[0];
        this.tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(`${quotes[0].quote} -- ${quotes[0].author}`);
      });
  }
  ngOnInit(): void {
    this.getQuote();
  }
}
