import React from 'react'
import ITask from '../interfaces/iTask';

interface Props {
    tasks: ITask;
  }
  

export default function TaskCard({tasks}: Props) {
  return (
    <div className='card card-body'>
        <h1>{tasks.name}</h1>
        <p>{tasks.description}</p>
    </div>
  )
}
