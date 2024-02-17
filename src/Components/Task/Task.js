import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Actions/actions'
import './task.css'
import EditTask from '../EditTask/EditTask'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h3 className={task.isDone ? 'done' : 'undone'}>{task.caption}</h3>
      <EditTask task={task} />
      <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </Button>
      <Button onClick={() => dispatch(doneTask(task.id))}>
        {task.isDone ? 'UnDone' : 'Done'}
      </Button>
    </div>
  )
}

export default Task
