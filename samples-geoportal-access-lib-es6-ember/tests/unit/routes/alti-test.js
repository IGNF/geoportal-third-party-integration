import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alti', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alti');
    assert.ok(route);
  });
});
