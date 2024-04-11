import logo from './logo.svg';
import './App.css';
import TestComponent from "./TestComponent";
import TestClassComponent from "./TestClassComponent";
import api from './api/axiosConfig';


function App() {

  const getUsers = async () => {
    const response = await api.get("/api/v1/users")
    return response.data;
  }

   console.log(getUsers());

  return (
    <div className="App">
      <header className="App-header">
        <TestComponent/>
        <TestClassComponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
