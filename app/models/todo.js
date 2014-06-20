// models/todo.js
var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
  {
    id: "1",
    title: 'Teach Slightly Ember...',
    isCompleted: true
  }, {
    id: "2",
    title: 'For real this time!',
    isCompleted: true
  }, {
    id: "3",
    title: 'Profit!',
    isCompleted: false
  }
]});

export default Todo;