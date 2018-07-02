import Controller from '@ember/controller';
import { storageFor } from 'ember-local-storage';

export default Controller.extend({
	emailinp: '',
	localdata: storageFor('reports'),

	init() {
		this._super(...arguments);
	},

	actions: {
		genReport() {
			let emaildata = this.get('emailinp');
			let store = this.get('store');
			console.log(emaildata);
			this.get('store').queryRecord('email', {
				email: emaildata
			}).then( function(result) {
				console.log(result);
				let tmp = this.get('localdata');
				console.log(tmp);
				let x = result.get('gender');
				console.log(x);
				store.pushPayload(result);
			});
		}
	}
});
