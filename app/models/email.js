import DS from 'ember-data';

export default DS.Model.extend({
	address_md5: DS.attr('string'),
	email_address: DS.attr('string'),
	first_seen: DS.attr('string'),
	is_disposable: DS.attr('boolean'),
	is_public_provider: DS.attr('boolean'),
	last_seen: DS.attr('date'),
	type: DS.attr('string')
});
