import { LetsflamePage } from './app.po';

describe('letsflame App', () => {
  let page: LetsflamePage;

  beforeEach(() => {
    page = new LetsflamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
