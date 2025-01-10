import Header from './components/Header';
import TodoList from './components/ToDoList.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;