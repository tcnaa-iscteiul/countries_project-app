import classes from './MainDiv.module.css';

const MainDiv = (props: any): JSX.Element => {
    return <div className={classes.MainDiv }>{props.children}</div>;
};

export default MainDiv;