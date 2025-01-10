function Header() {
  return (
    <header style={headerStyle}>
      <h1>Lista de Tareas</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
};

export default Header;