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
import { authenticateSession } from 'testing-with-authentication/tests/helpers/ember-simple-auth';


describe('Acceptance: PrivateTesting', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    authenticateSession(application);
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /private-testing', function() {
    visit('/private-testing');

    andThen(function() {
      expect(currentPath()).to.equal('private-testing');
    });
  });

  it('has the right title', function() {
    visit('/private-testing');

    andThen(function() {
      expect(find('h1').text()).to.equal('Private Testing');
    });
  });
});
