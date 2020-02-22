import { JobtrackerPage } from './app.po';

describe('jobtracker App', function() {
  let page: JobtrackerPage;

  beforeEach(() => {
    page = new JobtrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
