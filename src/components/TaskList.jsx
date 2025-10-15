import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit }) {
  // Se não houver tarefas, exibe uma mensagem amigável
  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center', color: '#9B9B9B', marginTop: '2rem' }}>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <div className="task-list">
      {/* Mapeia cada tarefa para um componente TaskItem */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;