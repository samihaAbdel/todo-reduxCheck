import React, { useState } from 'react'
import Task from '../Task/Task'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

const TaskList = () => {
  const tasks = useSelector((state) => state.taskReducer.listTasks)
  const [flag, setFlag] = useState('all')
  // console.log(tasks)
  return (
    <div style={{ margin: '5%' }}>
      <Button onClick={() => setFlag('all')}>All</Button>
      <Button onClick={() => setFlag('done')}>Done</Button>
      <Button onClick={() => setFlag('unDone')}>UnDone</Button>
      {flag === 'done'
        ? tasks
            .filter((elt) => elt.isDone === true)
            .map((elt, key) => <Task task={elt} key={elt.id} />)
        : flag === 'unDone'
        ? tasks
            .filter((elt) => elt.isDone === false)
            .map((elt, key) => <Task task={elt} key={elt.id} />)
        : tasks.map((elt, key) => <Task task={elt} key={elt.id} />)}
    </div>
  )
}

export default TaskList
