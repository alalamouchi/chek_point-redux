import "./App.css";
import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <ToDoList />
        </div>
    );
}

export default App;
