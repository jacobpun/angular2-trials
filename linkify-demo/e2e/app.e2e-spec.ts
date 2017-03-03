import { LinkifyDemoPage } from './app.po';

describe('linkify-demo App', function() {
  let page: LinkifyDemoPage;

  beforeEach(() => {
    page = new LinkifyDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
