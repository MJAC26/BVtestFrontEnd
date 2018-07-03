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
				gender: payload.gender,
				email: payload.emails[0].email_address,
				image: payload.images[0].thumb,
				phones: payload.phones,
				jobs: payload.jobs
			}, 
			'id': payload.report_info.report_id
		};
        this.get('localdata').addObject(payload);
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
