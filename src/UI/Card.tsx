import classes from './Card.module.css';

const Card = (props: any): JSX.Element => {
    return <div className={classes.Card} style={props.style }>
            {props.children }
        </div>;
};

export default Card;