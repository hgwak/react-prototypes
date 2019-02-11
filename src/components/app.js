import React, {Component} from 'react';
import Table from './table'


const students = [
    {
        name: 'Sky',
        course: 'Math',
        grade:50
    },
    {
        name: 'Brunce Banner',
        course:'Anger Management',
        grade:25
    },
    {
        name: 'Clark Kent',
        course: 'Journalism',
        grade:100
    }
];


class App extends Component{
    render(){
        return(
            <div className="container">
                <h1>Student Grade Table</h1>
                <Table data={students} />
            </div>
        );
    };
}

export default App;
