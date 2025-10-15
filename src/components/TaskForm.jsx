import React, { useState, useEffect } from 'react';

function TaskForm({ onSave, onCancel, taskToEdit }) {
  // Estados internos para controlar os campos do formulário
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Baixa');
  const [status, setStatus] = useState('Pendente');

  // useEffect é acionado quando o componente é montado ou quando 'taskToEdit' muda.
  // Ele serve para preencher o formulário com os dados da tarefa que será editada.
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setPriority(taskToEdit.priority);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // BUG-08: Nenhuma validação aqui. O formulário permite salvar com o título vazio.
    onSave({ title, priority, status });

    // BUG-04: Após salvar, os estados internos do formulário não são limpos.
    // Se o usuário clicar em "Nova Tarefa" de novo, os dados antigos ainda estarão lá.
    // O código para limpar, como o abaixo, está intencionalmente ausente:
    // setTitle('');
    // setPriority('Baixa');
    // setStatus('Pendente');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          {/* O título do modal muda se estivermos editando ou criando */}
          <h2>{taskToEdit ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>

          <div className="input-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="priority">Prioridade</label>
            <select
              id="priority"
              value={priority}
              onChange={e => setPriority(e.target.value)}
            >
              <option>Baixa</option>
              <option>Média</option>
              <option>Alta</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option>Pendente</option>
              <option>Concluída</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel}>Cancelar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;