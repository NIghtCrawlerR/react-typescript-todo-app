import React, { useMemo } from "react";

import ToDoItemType from "types/ToDoItemType";
import { getTotalItemsAmount, getDoneItemsAmount } from "utils";

import "./Footer.css";

interface FooterProps {
  items: Array<ToDoItemType>;
}

const Footer: React.FC<FooterProps> = ({ items }) => {
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
      <div data-testid="totalItems" className="Footer__item">
        Total items: <b>{totalItemsCount}</b>
      </div>
      <div data-testid="doneItems" className="Footer__item">
        Items done: <b>{doneItemsCount}</b>
      </div>
    </div>
  );
};

export default Footer;
