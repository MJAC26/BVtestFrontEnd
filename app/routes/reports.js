import Route from '@ember/routing/route';
import { get } from "@ember/object";

export default Route.extend({
	model(){
		return this.get('store').query('email', {
			email: 'skip.suva@gmail.com'
		})
		
	}
});
