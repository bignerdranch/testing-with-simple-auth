/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: TestingPage', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /testing-page', function() {
    visit('/testing-page');

    andThen(function() {
      expect(currentPath()).to.equal('testing-page');
    });
  });

  it('has the correct heading', function() {
    visit('/testing-page');

    andThen(function() {
      expect(find('h1').text()).to.equal('Testing Page');
    });
  });
});
