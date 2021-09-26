import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../Button";

import ToDoItemType from "types/ToDoItemType";
import PriorityEnum from "types/PriorityEnum";

import "./InputGroup.css";

interface InputGroupType {
  onSubmit: (values: ToDoItemType) => void;
}

const InputGroup: React.FC<InputGroupType> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<PriorityEnum>(PriorityEnum.Low);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = event;

    setValue(value);
  };

  const handlePriorityChange = (event: any): void => {
    const {
      target: { value },
    } = event;

    setPriority(value);
  };

  const handleSubmit = (): void => {
    onSubmit({ text: value, priority, done: false, id: uuidv4() });
    setValue("");
  };

  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="InputGroup">
      <input
        className="InputGroup__input"
        placeholder="Enter smth..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <select
        className="InputGroup__select"
        placeholder="priority"
        name="priority"
        onChange={handlePriorityChange}
      >
        <option value={PriorityEnum.Low}>Low</option>
        <option value={PriorityEnum.Medium}>Mid</option>
        <option value={PriorityEnum.High}>High</option>
      </select>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default InputGroup;
