
import './App.css';
import Main from './components/main/Main';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function App() {
  const test = () =>{
    toast('hello');
  }
  return (
    <div className="container">
     <Main toast={test}></Main>
    </div>
  );
}

export default App;
