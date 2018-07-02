import DS from 'ember-data';
import { storageFor } from 'ember-local-storage';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
	localdata: storageFor('reports'),
	normalizeResponse (store, primaryModelClass, payload, id, requestType){
		payload = {
			'report': {
				id: payload.report_info.report_id,
				report_info: payload.report_info,
				names: payload.names,
				addresses: payload.addresses,
				emails: payload.emails,
				dob: payload.dob,
				gender: payload.gender
			}, 
			'id': payload.report_info.report_id
		};
        // payload.id = payload.report_info.report_id
        console.log(payload);
        this.get('localdata').addObject(payload);
        // console.log(this.get('localdata'));
        // store.pushPayload(payload);
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
 //    normalizePayload: function(payload) {
	// 	return {
	// 		'email': {
	// 			id: payload.report_info.report_id,
	// 			report_info: payload.report_info,
	// 			name: payload.names,
	// 			address: payload.addresses,
	// 			email: payload.emails,
	// 			dob: payload.dob,
	// 			gender: payload.gender
	// 		}
	// 	};
	// },
	// attrs: {
	// 	report_info: { embedded: 'always'},
	// 	name: { embedded: 'always'},
	// 	address: { embedded: 'always'},
	// 	email: { embedded: 'always'},
	// 	dob: { embedded: 'always'},
	// 	gender: { embedded: 'always'}
	// },
	// primaryKey: 'gender'
});
