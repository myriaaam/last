import'.//App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Acceuil from'./pages/Acceuil';




function App() {
return (
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Acceuil/>}/>




 </Routes>
 </BrowserRouter> 


);
}
export default App;


