import Controller from '@ember/controller';
import { storageFor } from 'ember-local-storage';
import {computed} from '@ember/object'

export default Controller.extend({
	emailinp: '',
	localdata: storageFor('reports'),
	reportData: computed('localdata.[]', function(){
		if(this.get('localdata.lenght') == 0){
			return [];
		} else {
			return this.get('localdata.content');
		}
	}),

	init() {
		this._super(...arguments);
	},

	actions: {
		genReport() {
			let emaildata = this.get('emailinp');
			this.get('store').queryRecord('email', {
				email: emaildata
			}).then(function(){
				this.transitionTo('report');
			}).catch(function(){
				alert('No records found');
			})
		}
	}
});
