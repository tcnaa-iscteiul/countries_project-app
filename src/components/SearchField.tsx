import React from "react";
import classes from "../UI/InputSearchField.module.css";

const SearchField = (props: {
    style: {};
    changeSearch: (newSearch: string) => void;
}): JSX.Element => {
    const valueChangeHandler = (event: any): void => {
        props.changeSearch(event.target.value);
    };

    return (
        <React.Fragment>
            <input
                className={classes.box}
                style={props.style}
                type="search"
                onChange={valueChangeHandler}
                placeholder="Type to search"
            />
        </React.Fragment>
    );
};

export default SearchField;
