import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | getconfig', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:getconfig');
    assert.ok(route);
  });
});
