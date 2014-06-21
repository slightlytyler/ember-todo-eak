// controllers/todos.js

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the newTodo text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the newTodo text field
      this.set('newTitle', '');

      // Save the model
      todo.save();
    }
  }
});