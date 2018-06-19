import DS from 'ember-data';

export default DS.Model.extend({
	report_info: DS.attr(),
	names: DS.attr(),
	addresses: DS.attr(),
	emails: DS.attr(),
	dob: DS.attr(),
	gender: DS.attr()
});
