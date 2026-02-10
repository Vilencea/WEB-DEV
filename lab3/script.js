const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const addTask = () => {
  const text = inp.value.trim();
  if (text === "") return;

  const li = document.createElement('li');
  const check = document.createElement('input');
  check.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  const del = document.createElement('button');
  del.textContent = '🗑️';
  del.className = 'del';

  check.addEventListener('change', () => {
    span.classList.toggle('done', check.checked);
  });

  del.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);

  inp.value = "";
};

btn.addEventListener('click', addTask);

inp.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});