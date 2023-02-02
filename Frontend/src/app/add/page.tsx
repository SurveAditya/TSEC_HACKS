'use client';
import React from 'react'
import { useState } from 'react'

type Props = {}

const Add = (props: Props) => {

  return (
    <form className='add-form'>
          <div>
              <label><span className='block'>Task</span>
          <input className='form-input' type="text" placeholder='Add Task' />
          </label>
          </div> 
          <div className='form-control'>
        <label> <span className='block'> Day & Time</span>
          </label>
              <input className='form-input' type="text" placeholder='Add Day & Time' />
      </div> 
      <div className='form-control'>
        <label> <span className='block'> Day & Time</span>
          </label>
              <input className='form-input' type="text" placeholder='Add Day & Time' />
          </div> 
          <input type="submit" value='Save Task'/>
    </form>
  )
}

export default Add