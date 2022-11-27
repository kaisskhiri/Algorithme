import './App.css';
import React from 'react';
import './form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstImage from './Profilephoto';
import BasicExample from './Form';
import FullName from './Profile/FullName';
import Adress from './Profile/Adress';
function App() {

  return (
   
    <section>
         
          <FirstImage/>
          <FullName />
          <Adress />
    </section>

)
}

export default App;
