import React from 'react';

function TaskItem({ task, onDelete, onEdit }) {
  // Lógica para aplicar a classe CSS correta baseada na prioridade da tarefa.
  // A conversão para minúsculas e o replace('é', 'e') garantem que a classe
  // seja 'priority-media' para corresponder ao nosso CSS.
  const priorityClass = `priority-${task.priority.toLowerCase().replace('é', 'e')}`;

  return (
    <div className="task-item">
      <div className="task-info">
        <h3>{task.title || '(Tarefa sem título)'}</h3>
        <p>Status: {task.status}</p>
      </div>

      <div className="task-meta">
        <span className={`task-priority ${priorityClass}`}>{task.priority}</span>

        <div className="task-actions">
          <button className="btn-edit" onClick={() => onEdit(task)} title="Editar Tarefa">
            {/* Ícone SVG para Editar */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>
          </button>

          {/* BUG-06: O bug de desalinhamento agora é mais sutil, causado pelo CSS
          e pela ausência de um wrapper consistente, algo que um QA atento notaria. */}
          <button className="btn-delete" onClick={() => onDelete(task.id)} title="Excluir Tarefa">
            {/* Ícone SVG para Excluir */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;