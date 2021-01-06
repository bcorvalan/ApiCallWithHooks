import React from 'react';


function UserDetailSelected(props){
    
    return (
        <div  id={props.name}  className="border pr-1 d-flex align-items-center justify-content-between">
           
                <img src={props.src} alt={props.name} /> 
                <div>
                    {props.name} {' ' }{props.last}
                </div> 
                <button id={props.uid} onClick={props.removeUser} className="btn btn-danger ">REMOVE</button>
             
            
        </div>
    )
}
    
export default UserDetailSelected;
