import React from 'react';


function UserDetail(props){
        return (
            <div  id={props.name}  className="border 
                                                border-top-0
                                                pr-1 
                                                d-flex 
                                                align-items-center 
                                                justify-content-between">
              
                    <img src={props.src} alt={props.name} /> {props.name} {' ' }{props.last} 
                
                    

                    {props.isSelected ? (
                        <button id={props.uid} onClick={props.handleClick} 
                        className="btn btn-primary pr-1" disabled>
                            ADDED
                        </button>
                    ) : (
                        <button id={props.uid} onClick={props.handleClick} 
                        className="btn btn-primary" >
                            ADD
                        </button>
                    )}
               
                
            </div>
        )
    
    
}

export default UserDetail;