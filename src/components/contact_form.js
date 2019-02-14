import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            form:{
                firstName:'',
                lastName:'',
                phone:'',
                email:''
            }
        }
    }
    reset=()=>{
        this.setState({
            form:{
                firstName:'',
                lastName:'',
                phone:'',
                email:''
            }
        });
    }
    handleInputChange=(event)=>{
        const {value, name}=event.target;
        const {form}=this.state;
        form[name] = value;
        this.setState({form:{...form}})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.add(this.state.form);
        this.reset();
    }
    render(){
        const {firstName, lastName,phone,email}=this.state.form;
        return(
            <form onSubmit={this.handleSubmit}>
                <Field onChange={this.handleInputChange} name="firstName" label="First Name" type='text' value={firstName}/>
                <Field onChange={this.handleInputChange} name="lastName" label="Last Name" type='text' value={lastName}/>
                <Field onChange={this.handleInputChange} name="phone" label="Phone Number" type='tel' value={phone}/>
                <Field onChange={this.handleInputChange} name="email" label="Email" type='email' value={email}/>
                <button>Add Contact</button>
                <button type="button" onClick={this.reset}>Reset</button>
            </form>
        );
    }
}
export default ContactForm;