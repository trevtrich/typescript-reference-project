import {assert} from 'chai';
import {getId, getName, User} from '.';

suite('canary test', () => {
  test('that the user name is returned', () => {
    const name = 'Trev';
    const id = 2;
    const user = {name, id};

    assert.equal(getName(user), name);
  });

  test('that the user id is returned', () => {
    const name = 'Trev';
    const id = 2;
    const user = {name, id};

    assert.equal(getId(user), id);
  });
});
