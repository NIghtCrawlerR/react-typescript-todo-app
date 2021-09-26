import ToDoItemType from "types/ToDoItemType";

export const getTotalItemsAmount = (items: ToDoItemType[]): number => {
  return items.length
}

export const getDoneItemsAmount = (items: ToDoItemType[]): number => {
  const doneItems = items.filter(({ done }) => !!done).length
  return doneItems
}
