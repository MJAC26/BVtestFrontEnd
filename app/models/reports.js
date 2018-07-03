import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  report: belongsTo('report', { async: true, autoSave: true })
});