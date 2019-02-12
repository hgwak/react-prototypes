import React, {Component} from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            form:{
                firstName:'',
                lastName:''
            }
        }
    }
    handleInputChange=(event)=>{
        const {value, name}=event.target;
        const {form}=this.state;
        form[name] = value;
        this.setState({form:{...form}})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.form)
    }
    render(){
        const {firstName, lastName}=this.state.form;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input value={firstName} onChange={this.handleInputChange} type="text" name="firstName" type='text' className="form-control"/>
                    <label>Last Name</label>
                    <input value={lastName} onChange={this.handleInputChange} type="text" name="lastName" type='text' className="form-control"/>
                </div>
                <button>Add Contact</button>
            </form>
        );
    }
}
export default ContactForm;