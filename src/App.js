
import './App.css';
import {NavBar} from './components/NavBar/NavBar.jsx';
import {Slice}  from './components/Slice/Slice.jsx';
import {SectionUmbrella}  from './components/SectionUmbrella/SectionUmbrella.jsx';
import {SectionPuff}  from './components/SectionPuff/SectionPuff.jsx';
import {SectionCart} from './components/SectionCart/SectionCart.jsx';
import {SectionNap}  from './components/SectionNap/SectionNap.jsx';
import {Form}  from './components/Form/Form.jsx';
import {Footer} from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Slice/>
     <SectionUmbrella/>
     <SectionPuff/>
     <SectionCart/>
     <SectionNap/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
