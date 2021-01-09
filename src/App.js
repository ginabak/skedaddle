import { Carousel } from './components/Carousel';
import { Header } from './components/Header'; 
import { ModalComponent } from './components/ModalComponent'; 
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <ModalComponent/>
        <Carousel/>
    </div>
  );
}

export default App;
