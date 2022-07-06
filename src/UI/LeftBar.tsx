import classes from './LeftBar.module.css';

const LeftBar = (props: any): JSX.Element => {
    return <div className={classes.left}>{props.children}</div>;
};

export default LeftBar;