import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar';
// import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <button className="btn btn-danger">red button</button>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius officia quia at? Harum aliquid expedita doloremque natus possimus nemo eveniet!</div>
          
          <div className="col-md-6 mb-3 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum ducimus eveniet nemo eos, consequatur eum mollitia molestias molestiae sunt id eligendi soluta obcaecati quibusdam officia ea, vel nihil necessitatibus?</div>
        </div>
      </div>
        
    </div>
  );
}

export default App;
