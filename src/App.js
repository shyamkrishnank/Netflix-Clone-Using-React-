
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import RowPost from './components/RowPost/RowPost.js';
import NavBar from './components/navbar/NavBar';
import {original,action,animation,comady, horrer} from './urls'


function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <RowPost url={original} title='Netflix Originals' />
       <RowPost url={action} title='Actions' isSmall />
       <RowPost url={animation} title='Animation' isSmall /> 
       <RowPost url={horrer} title='Horror' isSmall /> 
       <RowPost url={comady} title='Comady' isSmall /> 
       <Footer />
       
       </div>
  );
}


export default App;
