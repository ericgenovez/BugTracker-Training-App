#  Gabarito de Bugs - BugTracker Training App

**⚠️ ATENÇÃO: Este arquivo contém a lista de todos os bugs intencionalmente inseridos no sistema. Não compartilhe com o trainee antes do final do treinamento.**

## Lista de Bugs Conhecidos

| ID do Bug | Localização | Tipo de Bug  | Descrição Detalhada                                                              |
| :-------- | :---------- | :----------- | :-------------------------------------------------------------------------------- |
| **BUG-01** | Login       | Funcional    | O sistema permite o login com o e-mail correto, independentemente da senha digitada. |
| **BUG-02** | Login       | UI / Texto   | A mensagem de erro para credenciais inválidas é exibida em inglês.                |
| **BUG-03** | Login       | Usabilidade  | O campo de senha exibe os caracteres em texto plano em vez de mascará-los.         |
| **BUG-04** | Dashboard   | Funcional    | Após criar uma tarefa, os campos do formulário não são limpos.                    |
| **BUG-05** | Dashboard   | Lógica       | O filtro de prioridade "Média" exibe incorretamente tarefas de prioridade "Baixa" também. |
| **BUG-06** | Dashboard   | UI / Layout  | Os botões de ação "Editar" e "Excluir" em cada tarefa possuem um espaçamento inconsistente. |
| **BUG-07** | Dashboard   | Lógica       | Ao editar uma tarefa e alterar seu status (ex: de "Pendente" para "Concluída"), a alteração não é salva. |
| **BUG-08** | Dashboard   | Validação    | O sistema permite a criação de uma nova tarefa com o campo "Título" em branco.    |
| **BUG-09** | Dashboard   | Funcional    | O botão "Sair" (Logout) no cabeçalho da dashboard não possui nenhuma ação.         |