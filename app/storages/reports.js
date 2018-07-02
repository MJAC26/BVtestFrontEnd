import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

// Uncomment if you would like to set initialState
// Storage.reopenClass({
//   initialState() {
//     return { email: '', data: {} };
//   }
// });

export default Storage;