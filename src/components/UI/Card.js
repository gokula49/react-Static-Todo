import react from 'react';
import classes from './card.module.css';

const Card = (probs) => {
     return(
         <div className={`${classes.card} ${probs.className} `}>{probs.children}</div>
     );
};

export default Card;