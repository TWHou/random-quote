import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class QuoteService {
  private url: string = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=JSONP_CALLBACK';
  constructor(private _jsonp: Jsonp) { }
  getQuote() {
    return this._jsonp.get(this.url)
      .map(response => <string[]> response.json());
  }
}