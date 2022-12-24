
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Login from "./components/Login"
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" >
            <Login />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
