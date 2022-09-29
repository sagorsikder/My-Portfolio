
import './App.css';
import Main from './components/main/Main';



function App() {
  const test = () =>{
    alert('Successfully done')
  }
  return (
    <div className="container">
     <Main toast={test}></Main>
    </div>
  );
}

export default App;
