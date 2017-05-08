import { NgDirectivesPage } from './app.po';

describe('ng-directives App', () => {
  let page: NgDirectivesPage;

  beforeEach(() => {
    page = new NgDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
