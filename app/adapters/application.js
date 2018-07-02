import DS from 'ember-data';
// import $ from 'jquery';

export default DS.RESTAdapter.extend({
	namespace: 'hk/dd',
	host: 'https://www.beenverified.com',
	ajaxOptions: function(url, type, options) {
        var hash = this._super(url, type, options);
        hash.dataType = "jsonp";
        return hash;
    }
 //    ,
	// queryRecord(store, type, query) {
	// 	// console.log(query);
	// 	// return $.getJSON('https://www.beenverified.com/hk/dd');
	// 	var hash = this._super('https://www.beenverified.com/hk/dd', type, query);
 //        hash.dataType = "jsonp";
 //        console.log(hash);
 //        return hash;
	// }
});
