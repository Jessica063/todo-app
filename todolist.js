function saveTask() {
    var taskInput = document.getElementById('taskInput').value;
    var categoryDropdown = document.getElementById('categoryDropdown');
    var selectedCategory = categoryDropdown.options[categoryDropdown.selectedIndex].value;


    console.log(`Task: ${taskInput}, Category: ${selectedCategory}`);

   
    var tasks = JSON.parse(localStorage.getItem(selectedCategory)) || [];
    tasks.push(taskInput);
    localStorage.setItem(selectedCategory, JSON.stringify(tasks));

  
    document.getElementById('taskInput').value = '';
    toggleTaskForm();
}

function openCategory(category) {
    window.location.href = `${category}.html`;
}



