import React from 'react'
import ITask from '../interfaces/iTask';

interface Props {
    tasks: ITask;
    removeTasks: (id: number) => void;
  }
  

export default function TaskCard({tasks, removeTasks}: Props) {
  return (
    <div className='card card-body'>
        <h1>{tasks.name}</h1>
        <p>{tasks.description}</p>
        <button className='btn btn-danger' onClick={() => tasks.id && removeTasks(tasks.id)}>Delete</button>
    </div>
  )
}
