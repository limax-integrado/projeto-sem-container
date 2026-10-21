import { useEffect, useState } from 'react';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Faz a chamada relativa para passar pelo proxy Nginx
    fetch('/api/usuarios')
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error('Erro ao buscar dados:', err));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.nome}</li>
        ))}
      </ul>
    </div>
  );
}