import DS from 'ember-data';

export default DS.Model.extend({
	email_address: DS.attr('string'),
	type: DS.attr('string'),
	address_md5: DS.attr('string'),
	is_disposable: DS.attr('boolean'),
	is_public_provider: DS.attr('boolean'),
	first_seen: DS.attr('date'),
	last_seen: DS.attr('date')
});
