window.addEventListener('load', () => {
  const form = document.querySelector('#newTaskForm');
  const input = document.querySelector('#newTaskInput');
  const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;

    if (!task) {
      alert('Please fill out some value');
      return;
    }
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.value = task;
    task_input_el.type = 'text';
    task_input_el.setAttribute('readonly', 'readonly');

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    const task_edit = document.createElement('button');
    task_edit.classList.add('edit');
    task_edit.innerText = 'Edit';

    const task_delete = document.createElement('button');
    task_delete.classList.add('delete');
    task_delete.innerText = 'Delete';

    task_content_el.appendChild(task_input_el);
    task_actions_el.appendChild(task_edit);
    task_actions_el.appendChild(task_delete);
    task_el.appendChild(task_content_el);
    task_el.appendChild(task_actions_el);
    list_el.appendChild(task_el);

    input.value = '';

    task_edit.addEventListener('click', (e) => {
      if (task_edit.innerText.toLowerCase() == 'edit') {
        task_edit.innerText = 'Save';
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
      } else {
        task_edit.innerText = 'Edit';
        task_input_el.setAttribute('readonly', 'readonly');
      }
    });

    task_delete.addEventListener('click', (e) => {
      list_el.removeChild(task_el);
    });
  });
});
