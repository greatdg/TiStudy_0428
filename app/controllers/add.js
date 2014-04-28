function addItem() {
    var todos = Alloy.Collections.todo;

    // Create a new model for the todo collection
    var task = Alloy.createModel('Todo', {
        item : $.itemField.value,
        done : 0
    });
    if( task.validate() ) {
        
        // add new model to the global collection
        todos.add(task);    
        
        // save the model to persistent storage    
        task.save();

        // reload the tasks
        todos.fetch();

        closeWindow();
    } else {
        alert('empty todo');
    }
    
}

function focusTextField() {
    $.itemField.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}

function closeWindow() {
    $.addWin.close();
}