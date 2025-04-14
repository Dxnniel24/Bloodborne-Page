document.querySelectorAll(".bar_nav .ul_links .li_links a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("menu_burger").checked = false;
    });
  });
  
  const tasks = [
    { text: "Subir nivel en el Sueño del Cazador", completed: false },
    { text: "Elegir un arma inicial (Hacha, Bastón o Sierra)", completed: false },
    { text: "Hablar con Gehrman", completed: false },
    { text: "Obtener la linterna (punto de guardado)", completed: false },
    { text: "Comprar viales de sangre y balas", completed: false },
    { text: "Leer los mensajes del Sueño del Cazador", completed: false },
    { text: "Equipar tu arma de fuego", completed: false },
    { text: "Activar atajos en Yharnam Central", completed: false }
  ];
  
  function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
  
    const incompletas = tasks.filter(task => !task.completed);
    const completadas = tasks.filter(task => task.completed);
    const ordenadas = [...incompletas, ...completadas];
  
    ordenadas.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.text;
      li.className = "bloodborne-task" + (task.completed ? " completed" : "");
  
      li.addEventListener("click", () => {
        task.completed = !task.completed;
        renderTasks();
      });
  
      const btn = document.createElement("button");
      btn.textContent = "X";
      btn.className = "bloodborne-task-button";
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const realIndex = tasks.indexOf(task);
        tasks.splice(realIndex, 1);
        renderTasks();
      });
  
      li.appendChild(btn);
      list.appendChild(li);
    });
  }
  
  function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
  
    if (text !== "") {
      tasks.push({ text, completed: false });
      input.value = "";
      renderTasks();
    }
  }
  
  renderTasks();
  