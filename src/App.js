//import logo from './logo.svg';
import './App.css';
import { Textfrom } from './Textfrom'; 
// In src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div className='container my-3' >
    <Textfrom heading="Enter the text to analyse"/> 
    </div>
    
    </>
  );
}

export default App;
