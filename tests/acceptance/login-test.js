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

describe('Acceptance: Login', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /login', function() {
    visit('/login');
    fillIn('#email', 'good@email.com');
    fillIn('#password', '123456');
    click('button.submit');

    andThen(function() {
      expect(currentPath()).to.equal('login');
    });
  });
});
