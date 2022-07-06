import React from 'react';
import classes from './CardItem.module.css';

const CardItem = (props: any): JSX.Element => {

    return <button className={classes.CardItem}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onDoubleClick={props.onDoubleClick }
        onClick={props.onClick}>{props.children}</button>;
};

export default CardItem;