import DS from 'ember-data';

export default DS.Model.extend({
	latitude: DS.attr('number'),
	longitude: DS.attr('number'),
	precision: DS.attr('string'),
	full: DS.attr('string'),
	parts: DS.attr(),
	type: DS.attr('string'),
	first_seen: DS.attr('date'),
	last_seen: DS.attr('date')
});
