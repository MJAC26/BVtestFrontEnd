import DS from 'ember-data';

export default DS.Model.extend({
	names: DS.attr(),
	addresses: DS.attr(),
	emails: DS.attr(),
});
