import DS from 'ember-data';

export default DS.Model.extend({
	full: DS.attr('string'),
	parts: DS.attr(),
	first_seen: DS.attr('date'),
	last_seen: DS.attr('date')
});
