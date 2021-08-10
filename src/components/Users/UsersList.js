import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (probs) => {

    return (
    <Card className={classes.users}>
     <ul>
        {probs.users.map((user) => (
          <li key={user.id}>
             {user.name} ({user.age} years old ) 
          </li>
        
        ))}
      </ul>
    </Card>
    );
};

export default UsersList;