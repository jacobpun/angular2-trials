import { PersonInformationPage } from './app.po';

describe('person-information App', function() {
  let page: PersonInformationPage;

  beforeEach(() => {
    page = new PersonInformationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pi works!');
  });
});
