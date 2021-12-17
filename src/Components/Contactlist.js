import React from "react";
import ContactCard from "./ContactCard";

const Contactlist = (props) => {
    console.log(props);

    const deleteContactHandler = (id) =>{
        props.getContactId(id)
    };
    const renderContactList = props.contacts.map((contacts) =>{
        return(
           <ContactCard contacts={contacts} clickHandler = {deleteContactHandler} key ={contacts.id}/>
        );
    });
    
    return(
        
        <div className="ui celled list">
            <h2>Contact List</h2>
        {renderContactList}
    </div>
    );
    
    

};
export default Contactlist
