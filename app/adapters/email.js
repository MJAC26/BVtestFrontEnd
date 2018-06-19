import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'hk/dd',
	host: 'https://www.beenverified.com/',
	// headers: computed(function() {
	// 	return{
	// 		'Access-Control-Allow-Origin': '*'
	// 	};
	// })
	ajaxOptions: function(url, type, options) {
        var hash = this._super(url, type, options);
        hash.dataType = "jsonp";
        return hash;
    }
});
