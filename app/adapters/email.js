import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
	host: 'https://www.beenverified.com/hk/dd',
	// headers: computed(function() {
	// 	return{
	// 		'Access-Control-Allow-Origin': '*'
	// 	};
	// })
});
