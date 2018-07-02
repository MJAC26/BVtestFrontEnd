import DS from 'ember-data';

export default DS.Model.extend({
	report_info: DS.hasMany('report_info'),
	names: DS.hasMany('name'),
	addresses: DS.hasMany('address'),
	emails: DS.hasMany('email'),
	dob: DS.attr('date'),
	gender: DS.attr('string')
});