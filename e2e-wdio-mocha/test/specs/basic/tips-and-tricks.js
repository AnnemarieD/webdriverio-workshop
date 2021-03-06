const TipsAndTricksPage = require('../../pages/tips-and-tricks.page');

const tipsAndTricksPage = new TipsAndTricksPage();

describe('tips and tricks page', () => {
  beforeEach(() => {
    tipsAndTricksPage.navigateTo();
    tipsAndTricksPage.card.title.waitForVisible();
  });

  describe('get attributes and css properties', () => {
    it('should get the classes from the card title element', () => {
      const classlist = tipsAndTricksPage.card.title.getAttribute('class');
      expect(classlist).to.equal('mat-card-title');
    });

    it('should get the color value from the card title element', () => {
      const color = tipsAndTricksPage.card.title.getCssProperty('color');
      expect(color.value).to.equal('rgba(0,0,0,0.87)');
    });
  });

  describe('search content by text in title', () => {
    it('should filter by "cat"', () => {
      tipsAndTricksPage.search.bar.setValue('cat');
      browser.waitUntil(() => tipsAndTricksPage.card.title.getText() === 'Yellow cat');
    });

    it('should filter by "pup"', () => {
      tipsAndTricksPage.search.bar.setValue('pup');
      browser.waitUntil(() => tipsAndTricksPage.card.title.getText() === 'Playing puppies');
    });
  });

  describe('text', () => {
    it('should assert all text content of the cards', () => {
      const first = tipsAndTricksPage.getCardByTitle('Golden Retriever');
      const second = tipsAndTricksPage.getCardByTitle('Yellow cat');
      const third = tipsAndTricksPage.getCardByTitle('Shiba');
      const fourth = tipsAndTricksPage.getCardByTitle('Playing puppies');

      expect(first.getText('.mat-card-content')).to.equal(loremIpsum);
      expect(second.getText('.mat-card-content')).to.equal(loremIpsum);
      expect(third.getText('.mat-card-content')).to.equal(loremIpsum);
      expect(fourth.getText('.mat-card-content')).to.equal(loremIpsum);
    });
  });
});

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus vehicula, mattis lorem non, fringilla lorem. Suspendisse potenti. Nullam sed sagittis sem. Mauris at faucibus nisi. In hac habitasse platea dictumst. Duis non tincidunt nunc, vitae pharetra lacus. Nulla neque eros, iaculis eget sagittis eget, sagittis ut dolor. Vestibulum vel auctor mi. Duis commodo, purus sed pharetra porttitor, libero ante tempus lorem, eget volutpat ligula dolor ac nisl. In maximus libero id tellus lacinia, quis iaculis mauris porttitor. Etiam ultricies, risus ultrices laoreet aliquam, mi nisl maximus quam, at malesuada nisl nisl quis libero. Donec in lacus nec nulla pulvinar pulvinar vel eu ex. Aliquam et neque nulla. In facilisis consectetur commodo. Donec varius placerat risus. Ut arcu erat, efficitur non ipsum fringilla, commodo semper dolor. Nam porta purus at ex dictum, id egestas ex laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a mi bibendum, vestibulum nisl a, bibendum urna. Donec ullamcorper, nulla ac interdum eleifend, risus arcu ultrices ligula, vel tristique dui nibh quis mauris. Maecenas imperdiet nunc lorem, vel interdum neque molestie id. Curabitur et ipsum consequat, condimentum metus quis, vehicula nisl. Nulla dapibus urna sed lacinia scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In nec lectus ex. Sed gravida sagittis elit, viverra bibendum justo suscipit mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean auctor vitae nulla dapibus ullamcorper. Morbi pretium, est a dapibus faucibus, ante eros bibendum lorem, ac fermentum dolor nulla non nibh. Mauris nec sapien nec sapien viverra feugiat ac sit amet felis. Phasellus et metus condimentum, imperdiet mi vitae, venenatis metus. Mauris bibendum, lorem at pretium sagittis, dui risus ultricies ante, laoreet ultricies erat diam vel mauris. Praesent vel magna mauris. Etiam non libero eros. Nam vitae orci dictum urna pharetra mattis. Nullam est ante, bibendum sit amet rhoncus at, porta sed erat. Mauris sit amet lacus interdum, placerat enim vel, condimentum ligula. Curabitur varius faucibus arcu, et ornare leo bibendum in. Fusce non lacus venenatis, malesuada nunc vitae, sagittis leo. Pellentesque et nibh quis nibh ullamcorper sollicitudin ac at mi. Integer volutpat mauris vitae lacus blandit hendrerit. Duis vehicula justo sed sem commodo sodales. Proin vehicula feugiat mi, at blandit purus fermentum ac. Nunc maximus, leo condimentum cursus luctus, urna odio viverra magna, at dignissim metus purus luctus arcu. Pellentesque gravida mauris sit amet dictum condimentum. Aenean quis faucibus risus. Mauris a arcu pulvinar, dapibus nisi eget, maximus mauris. Quisque venenatis molestie elit et blandit. Donec auctor dui ex, a elementum lorem luctus et. Maecenas faucibus urna in risus maximus cursus. Mauris tempus vulputate nisi, vel sollicitudin magna venenatis eu. Nunc mauris arcu, tempor at dolor ac, pulvinar sagittis mauris. Nullam ullamcorper arcu ipsum, ac vestibulum ligula congue et.';
