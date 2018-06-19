import DS from 'ember-data';

export default DS.Model.extend({
	report_id: DS.attr('string'),
	response_time: DS.attr('number'),
	query_id: DS.attr()
});
