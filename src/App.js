import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import List from './components/List';
import ListUsersSelected from './components/ListUsersSelected'
import Searchbox from './components/Searchbox'
function App() {
  // Store the users in a state variable. An empty array as the default value.
 // const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [usersSelected, setUsersSelected] = useState([]);
  const [usersFiltered, setusersFiltered] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10&seed=a30fc14314ff6e77")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //API call without Axios
  /*
  useEffect(() => {
  fetch ('https://randomuser.me/api/')
  .then((res) => res.json())
  .then((res) => {
        setUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
*/
  const handleInput = (e) => {
    if (e.target.value !== "") {
      document.getElementById("userList").classList.remove("d-none");
      setSearchTerm(e.target.value);
      let filteredUsers = users.filter((user) => {
        return (
          user.name.first
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) ||
          user.name.last.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
      });
      setusersFiltered(filteredUsers);
    } else {
      document.getElementById("userList").classList.add("d-none");
    }
  };
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      if (usersFiltered.length > 0) {
        let userToadd = {
          target: { id: usersFiltered[0].login.uuid },
        };
       handleClick(userToadd);
      }
    }
  };
  const handleClick = (e) => {
    const uid = e.target.id
    let userSelected;

    if(usersSelected.length > 0){
      userSelected = usersSelected.find((user)=>{
        return user.login.uuid === uid;
      })
      if (userSelected) return;
    }
    userSelected = users.find((user)=>{
      return user.login.uuid === uid;
    })

    setUsersSelected([...usersSelected, userSelected] )
  }
  const removeUser = (e) => {
    const uid = e.target.id;
    let userToRemove = usersSelected.find((user)=>{
      return user.login.uuid === uid;
    })
  
    const index = usersSelected.indexOf(userToRemove)

    usersSelected.splice(index,1);
    setUsersSelected([...usersSelected])
 
  }; 

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6">
          <Searchbox
            handleInput={handleInput}
            handleKeyUp={handleKeyUp}
          />
          <div className="d-none" id="userList">
            <List
            users={usersFiltered}
            handleClick={handleClick}
            usersSelected={usersSelected}
            />
          </div>
        </div>
        <div className="col-md-6">
          <ListUsersSelected
          usersSelected={usersSelected}
          handleClick={removeUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
