import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rage-event-detector', 'Integration | Component | rage event detector', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rage-event-detector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rage-event-detector}}
      template block text
    {{/rage-event-detector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
