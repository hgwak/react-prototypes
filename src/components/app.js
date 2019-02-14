import React, {Component} from 'react';
import ContactList from './contact-list';
import ContactForm from './contact_form'
import contactData from '../data/contacts'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            contacts:contactData
        }
    }
    addContact=(contact)=>{
        console.log(contact);
        this.setState({contacts:[contact, ...this.state.contacts]});
        console.log(this.state);
    }
    render(){
        return(
            <div className="container">
                <h1 className="text-center my-3">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact}/>
                    </div>
                    <ContactList contacts={this.state.contacts}/>
                </div>
            </div>
        );
    }  
}

export default App;
