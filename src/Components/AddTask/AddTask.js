import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/Actions/actions'

const AddTask = () => {
  const [task, setTask] = useState('')
  // console.log(task)
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault()
    task
      ? dispatch(addTask({ id: Math.random(), caption: task, isDone: false }))
      : alert("Task can't be ampty")
    setTask('')
  }
  return (
    <div>
      <Form onSubmit={handleClick}>
        <Form.Control
          type="text"
          placeholder="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="info" type="submit">
          Add
        </Button>
      </Form>
    </div>
  )
}
export default AddTask
