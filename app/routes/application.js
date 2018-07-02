import Route from '@ember/routing/route';
// import RSVP from 'rsvp';

export default Route.extend({
	model(){
		/*let reportdata = this.get('store').queryRecord('email', {
			email: 'skip.suva@gmail.com'
		});
		console.log(reportdata);
		console.log(reportdata.get('report'));
		// console.log(reportdata.get('report'));
		// console.log(reportdata.get('reports'));
		// console.log(reportdata.keys);

		return RSVP.hash({
			emails: reportdata.get('gender'),
			names: reportdata.get.names
		});*/
		// let store = this.get('store');
		return this.get('store').queryRecord('email', {
			email: 'skip.suva@gmail.com'
		})
		// .then( function(result) {
			// let x = result.get('gender');
			// console.log(result);
			// store.pushPayload(result);
			// return store.findAll('email');
			// return result;
		// });
		/*this.get('store').queryRecord('email', {
			email: 'skip.suva@gmail.com',
			exporttype: 'jsonp'
		}).then((result) => {
			console.log(result);
			if (result === null) {
				console.log('dato nulo');
				let algo = RSVP.hash({
					gender: 'male',
					names: ['no name']
				});
				console.log(algo);
				return algo;
			} else {
				console.log(result.get('emails'));
				console.log(result.get('report'));
				return RSVP.hash({
					gender: result.get('gender'),
					names: result.get.names
				});
			}
		}).catch(function(info){
			console.log(info)
			return RSVP.hash({
				emails: ['abc', 'dec'],
				names: ['abc', 'dec']
			});
		});*/
	}
});
