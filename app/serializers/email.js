import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	/* attrs: { report_info: {key: 'report_info' },
	// 		name: {key: 'name'},
	// 		address: {key: 'address'},
	// 		email: {key: 'email'},
	// 		dob: {key: 'dob'},
	// 		gender: {key: 'gender'}
	 }, */
	normalizeResponse (store, primaryModelClass, payload, id, requestType){
        payload = {
            report_info: payload.report_info,
            name: payload.names,
            address: payload.addresses,
            email: payload.emails,
            dob: payload.dob,
            gender: payload.gender
        };
        // payload.id = payload.report_info.report_id
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
	// primaryKey: 'id'
});
