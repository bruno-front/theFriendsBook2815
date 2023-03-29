import './App.css';
import Header from './modules/header/Header';
import Sidebar from './modules/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <div className="App-content">
        <div className="App-sidebar">
          <Sidebar/>
        </div>
        <div className="App-view">
          Тут основное содержимое
        </div>
      </div>
    </div>
  );
}

export default App;
