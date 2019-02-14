import React from 'react';

export default ((props)=>{
    /*props = {
        name: 'Sky',
        age: 43,
        label: 'woohoo'
    }*/
    return(
        <div className="form-group">
            <label htmlFor="">{props.label}</label>
            <input {...props} className="form-control" type="text"/>
        </div>
    );
});