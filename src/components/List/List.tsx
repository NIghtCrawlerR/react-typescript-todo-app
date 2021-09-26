import React from "react";

import ListItem from "./ListItem";
import ItemType from "types/ToDoItemType";

import "./List.css";

interface ListProps {
  list: Array<ItemType>;
  toggleItemDone: (id: string, checked: boolean) => void;
}

const List: React.FC<ListProps> = ({ list, toggleItemDone }) => {
  return (
    <div className="List">
      {!!list.length
        ? list.map((item, i) => (
            <ListItem
              key={item.text + i}
              {...item}
              index={i}
              toggleItemDone={toggleItemDone}
            />
          ))
        : "No items"}
    </div>
  );
};

export default List;
