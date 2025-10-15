import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

// Dados iniciais para o estado das tarefas
const initialTasks = [
  {
    id: 1,
    title: 'Analisar requisitos do novo projeto',
    priority: 'Alta',
    status: 'Concluída',
  },
  {
    id: 2,
    title: 'Configurar ambiente de teste para a API',
    priority: 'Alta',
    status: 'Concluída',
  },
  {
    id: 3,
    title: 'Escrever casos de teste para a tela de login',
    priority: 'Média',
    status: 'Pendente',
  },
  {
    id: 4,
    title: 'Executar testes de regressão no Módulo X',
    priority: 'Baixa',
    status: 'Pendente',
  },
  {
    id: 5,
    title: 'Reportar bug #1024 no Jira',
    priority: 'Média',
    status: 'Pendente',
  },
];

function Dashboard({ onLogout }) {
  // --- ESTADOS DO COMPONENTE ---
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // --- FUNÇÕES DE MANIPULAÇÃO (HANDLERS) ---

  const handleAddTask = (newTaskData) => {
    const newTask = {
      ...newTaskData,
      id: Date.now(), // Gera um ID único baseado no tempo
    };
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (updatedTaskData) => {
    // BUG-07: A lógica de atualização intencionalmente ignora o campo 'status'.
    setTasks(
      tasks.map((task) =>
        task.id === updatedTaskData.id
          ? {
              ...task,
              title: updatedTaskData.title,
              priority: updatedTaskData.priority,
            } // O status não é atualizado
          : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  // --- CONTROLE DO MODAL ---

  const openModalForCreate = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const handleSaveTask = (taskData) => {
    if (taskToEdit) {
      handleUpdateTask({ ...taskData, id: taskToEdit.id });
    } else {
      handleAddTask(taskData);
    }
    closeModal();
  };

  // --- LÓGICA DE FILTRAGEM ---

  const filteredTasks = tasks.filter((task) => {
    const matchesSearchTerm = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // BUG-05: A lógica do filtro de prioridade "Média" está incorreta.
    const matchesPriority =
      priorityFilter === 'all' ||
      (priorityFilter === 'Média' &&
        (task.priority === 'Média' || task.priority === 'Baixa')) || (priorityFilter !== 'Média' && task.priority === priorityFilter);

    return matchesSearchTerm && matchesPriority;
  });

  // --- RENDERIZAÇÃO DO COMPONENTE ---

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Painel de Tarefas</h1>
        {/* BUG-09: O botão Sair não faz nada. */}
        <button className="logout-btn" onClick={() => {}}>
          Sair
        </button>
      </header>

      <main className="dashboard-content">
        <div className="task-controls">
          <input
            type="text"
            placeholder="Buscar por título..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="priority-filter"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">Todas as Prioridades</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
          <button className="create-task-btn" onClick={openModalForCreate}>
            + Nova Tarefa
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onDelete={handleDeleteTask}
          onEdit={openModalForEdit}
        />
      </main>

      {isModalOpen && (
        <TaskForm
          onSave={handleSaveTask}
          onCancel={closeModal}
          taskToEdit={taskToEdit}
        />
      )}
    </div>
  );
}

export default Dashboard;
