import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Form from './component/Form';
import Address from './component/profil/Address';
import FullName from './component/profil/fullname';
import ProfilePhoto from './component/profil/profilphoto';


function App() {
  return (
   <>

  <FullName name='Wassim hassayoune'/>
  <ProfilePhoto/>
  <Address address='Ariana'/>
  

   </>
   
  );
}

export default App;
