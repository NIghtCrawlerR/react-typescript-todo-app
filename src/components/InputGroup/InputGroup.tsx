import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import cx from 'classnames'

import Button from '../Button'

import ToDoItemType from 'types/ToDoItemType'
import PriorityEnum from 'types/PriorityEnum'

import './InputGroup.css'

interface InputGroupProps {
  onSubmit: (values: ToDoItemType) => void
}

const InputGroup: React.FC<InputGroupProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [priority, setPriority] = useState<PriorityEnum>(PriorityEnum.Low)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = event

    setValue(value)
  }

  const handlePriorityChange = (event: any): void => {
    const {
      target: { value },
    } = event

    setPriority(value)
  }

  const handleSubmit = (): void => {
    if (!value) {
      return setError('Enter value')
    }

    onSubmit({ text: value, priority, done: false, id: uuidv4() })
    setValue('')
    setError('')
  }

  const handleKeyDown = ({
    key,
  }: React.KeyboardEvent<HTMLInputElement>): void => {
    setError('')

    if (key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className='InputGroup'>
      <div className='InputGroup__input-wrap'>
        <input
          type="text"
          name="todoItem"
          className={cx('InputGroup__input', {
            error: !!error,
          })}
          placeholder='Enter smth...'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
        />
        {error && <p className='InputGroup__input-error'>{error}</p>}
      </div>
      <select
        className='InputGroup__select'
        placeholder='priority'
        name='priority'
        onChange={handlePriorityChange}
      >
        <option value={PriorityEnum.Low}>Low</option>
        <option value={PriorityEnum.Medium}>Mid</option>
        <option value={PriorityEnum.High}>High</option>
      </select>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default InputGroup
