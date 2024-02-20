document.getElementById('taskForm').addEventListener('submit', function(event) {
    const title = document.getElementById('taskTitle').value;
    const priority = document.getElementById('taskPriority').value;
    const month = parseInt(document.getElementById('taskMonth').value);
    const currentMonth = new Date().getMonth() + 1;

    if (title && priority && month >= 1 && month <= 12) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = `${title} - Priorita: ${priority} - Měsíc: ${month}`;
        if (month <= currentMonth) {
            li.classList.add('task-due');
        }

        taskList.appendChild(li);
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskPriority').value = '';
        document.getElementById('taskMonth').value = '';
        event.preventDefault();
    } else {
        alert('Prosím, zkontrolujte vstupní data.');
    }
});