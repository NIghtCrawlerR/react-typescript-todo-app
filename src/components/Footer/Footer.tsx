import React, { useMemo } from "react";

import ToDoItemType from "types/ToDoItemType";
import { getTotalItemsAmount, getDoneItemsAmount } from "utils";

import "./Footer.css";

interface Items {
  items: Array<ToDoItemType>;
}

const Footer: React.FC<Items> = ({ items }) => {
  const totalItemsCount = useMemo<number>(
    () => getTotalItemsAmount(items),
    [items]
  );
  const doneItemsCount = useMemo<number>(
    () => getDoneItemsAmount(items),
    [items]
  );

  return (
    <div className="Footer">
      <div className="Footer__item">
        Total items: <b>{totalItemsCount}</b>
      </div>
      <div className="Footer__item">
        Items done: <b>{doneItemsCount}</b>
      </div>
    </div>
  );
};

export default Footer;
