import React, {useState, useEffect} from 'react'
import Header from './Header'
import "./App.css";
import AddContact from './AddContact'
import Contactlist from './Contactlist'

function App() {
  const LOCAL_STORAGE_KEY ="contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact)=>{
    console.log(contacts);
    setContacts([...contacts, contact]);
  };

  const removeContactHandler = (id)=>{
  const newContactList = contacts.filter((contacts)=>{
    return contacts.id !==id;
  })  ;
  setContacts(newContactList);
  };

  useEffect(()=>{
 const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
 if(retrieveContacts) setContacts(retrieveContacts);
  },[]);
  
  
useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
},[contacts]);
  return (
    <div className='ui container'>
     
     <Header/>
     <AddContact addContactHandler = {addContactHandler}/>
      <Contactlist contacts={contacts} getContactId ={removeContactHandler}/>
    </div>
  );
}

export default App;
