import { Fragment } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = (props: {
    items: IRegion[];
    changeRegion: (newRegion: string) => void;
}): JSX.Element => {
    const dropdownChangedHandler = (e: any): void => {
        e.preventDefault();
        e.target.value === "DEFAULT"
            ? props.changeRegion("")
            : props.changeRegion(e.target.value);
    };

    return (
        <Fragment>
            <select
                className={classes.input}
                name="regions"
                onChange={dropdownChangedHandler}
            >
                <option value="DEFAULT" className={classes.option }>Select an region</option>
                {props.items.map((region: IRegion) => (
                    <option key={region.id} value={region.name}>
                        {region.name}
                    </option>
                ))}
            </select>
        </Fragment>
    );
};

export default Dropdown;