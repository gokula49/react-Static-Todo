import React, {useState}from 'react';
import Card from '../UI/Card';
import classes from './Adduser.module.css';

const Adduser = (props) => {

   
    const [changeName , setName] = useState('');
    const [changeage , setage] = useState('');



    const changeNameHandler= props=> {
        setName(props.target.value);

    };

    const changeageHandler= props=> {
        setage(props.target.value);
    };
    const AdduserHandler = (event) => {
        event.preventDefault();
        console.log(changeage,changeName);

         props.onAddUser(changeName,changeage);

        setage('');
        setName('');
    };



    return (
        <Card className = {classes.input}>
            <form onSubmit={AdduserHandler}>
                <label>User Name</label>
                <input id="uname" type="text" value={changeName} onChange={changeNameHandler} />
                <label >Your Age</label>
                <input id="age" type="number" value={changeage} onChange={changeageHandler}/>
                <button type="submit">Button</button>
            </form>
        </Card>
    );
};



export default Adduser;
