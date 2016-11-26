import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

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
        this.tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(`${quote.quoteText} -- ${quote.quoteAuthor}`);
      });
  }
  ngOnInit(): void {
    this.getQuote();
  }
}
