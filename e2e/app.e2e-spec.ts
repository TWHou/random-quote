import { RandomQuotePage } from './app.po';

describe('random-quote App', function() {
  let page: RandomQuotePage;

  beforeEach(() => {
    page = new RandomQuotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
