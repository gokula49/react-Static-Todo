import React,{useState} from 'react';
import './App.css';
import Adduser from './components/Users/Adduser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList ,setUsersList ] = useState([]);
  
  const AdduserHandler = (uName,uAge) => {
    setUsersList((prevUsersList)=> {
      return [...prevUsersList,{name:uName,age:uAge,id : Math.random.toString()}];
    });
  };
  
  return (
    <div> 
      <Adduser onAddUser={AdduserHandler}/>
      <UsersList users={usersList}/>
    </div>
     
  );
}

export default App;
