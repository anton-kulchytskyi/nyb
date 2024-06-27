import { Dropdown, Form } from "react-bootstrap";

import classNames from "classnames";
import classes from './dropdown.module.scss';

type DropDownType = {
  options?: string[],
  title: string,
  active?: string,
  selectItem?: (value: string) => void,
}

export const DropDown = ({
  options = ['No options'],
  title,
  active,
  selectItem = () => {},
} : DropDownType) => {
  return (
    <Form.Group className={classes.group}>
      <p className={classes.title}>{title}</p>

      <Dropdown className={classes.dropdown}>
        <Dropdown.Toggle as='div' className={classes.button}>
          {active || options[0]}
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes.menu}>
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => selectItem(option)}
              className={classNames(
                classes.item,
                { [classes['item--active']]: active === option },
              )}
            >
              {option}
            </Dropdown.Item>
          ))}

        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
}
