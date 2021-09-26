import PriorityEnum from './PriorityEnum'

interface ToDoItemType {
  id: string,
  text: string,
  priority: PriorityEnum,
  done: boolean
}

export default ToDoItemType
