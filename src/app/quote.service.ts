import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Quote } from './quote';

@Injectable()
export class QuoteService {
  private url: string = 'https://random-quote-generator.herokuapp.com/api/quotes/random';
  constructor(private _http: Http) { }
  getQuote() {
    return this._http.get(this.url)
      .map(response => <Quote> response.json());
  }
}