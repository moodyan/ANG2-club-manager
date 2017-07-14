import { ClubManagerPage } from './app.po';

describe('club-manager App', () => {
  let page: ClubManagerPage;

  beforeEach(() => {
    page = new ClubManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
