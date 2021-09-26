import React, { useState } from "react";

import InputGroup from "components/InputGroup";
import List from "components/List";
import Footer from "components/Footer";

import ItemType from "types/ToDoItemType";
import "./Form.css";

const Form: React.FC = () => {
  const [list, setList] = useState<ItemType[]>([]);

  const handleChange = (newItem: ItemType) => {
    setList([...list, newItem]);
  };

  const toggleItemDone = (id: string, checked: boolean): void => {
    const updatesItemsList = list.map((item) => {
      return item.id === id ? { ...item, done: checked } : item;
    });

    setList(updatesItemsList);
  };

  return (
    <div className="Form">
      <InputGroup onSubmit={handleChange} />
      <List list={list} toggleItemDone={toggleItemDone} />
      <Footer items={list} />
    </div>
  );
};

export default Form;
