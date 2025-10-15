import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  // Estado para controlar se o usuário está logado
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função que será chamada pelo componente Login em caso de sucesso
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Função que será passada para a Dashboard para fazer logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {/* Renderização condicional: mostra Dashboard se logado, senão, mostra Login */}
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;