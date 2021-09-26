import React from "react";
import classNames from "classnames";

import ToDoItemType from "types/ToDoItemType";
import PriorityEnum from "types/PriorityEnum";

import "./ListItem.css";

interface ItemProps extends ToDoItemType {
  index: number;
  toggleItemDone: (id: string, checked: boolean) => void;
}

const ListItem: React.FC<ItemProps> = ({
  index,
  text,
  priority,
  id,
  toggleItemDone,
}) => {
  const handleChange = (event: any) => {
    const {
      target: { checked },
    } = event;
    toggleItemDone(id, checked);
  };

  return (
    <div
      className={classNames("ListItem", {
        low: priority === PriorityEnum.Low,
        mid: priority === PriorityEnum.Medium,
        high: priority === PriorityEnum.High,
      })}
    >
      <div className="ListItem__value">
        <div className="ListItem__index">{index}.</div> {text}
      </div>

      <input type="checkbox" onChange={handleChange} />
    </div>
  );
};

export default ListItem;
