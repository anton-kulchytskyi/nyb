import { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";

import classNames from "classnames";
import classes from './dropdown.module.scss'

type DropDownType = {
  options: string[],
  title: string,
  active?: string,
}

export const DropDown = ({ options, title, active = options[0] }: DropDownType) => {
  const [value, setValue] = useState(options[0])

  const handleDropdownChange = (option: string) => {
    setValue(option);
  }

  return (
    <Form.Group className={classes.group}>
      <p className={classes.title}>{title}</p>

      <Dropdown className={classes.dropdown}>
        <Dropdown.Toggle as='div' className={classes.button}>
          {value}
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes.menu}>
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleDropdownChange(option)}
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
