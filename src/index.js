import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    let randomNumber = Math.floor(Math.random()*1000)+1;
    return randomNumber;
}

function greeting(userObject){
    return(
        <div className="container">
            <h1>Hello, welcome {userObject.name}</h1>
            <h2 className="text-muted">Your lucky number is {userObject.luckyNumber}</h2>
        </div>
    );
}

class User {
    name='Sky';
    luckyNumber=luckyNumber();
}


ReactDOM.render(
    greeting(new User),//why doesn't this need to be set to a new variable?, is es6 the reason why I didn't have to use this.name?
    document.getElementById('root')
);
