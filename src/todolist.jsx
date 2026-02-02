import React, { useState } from 'react'
import Todoitems from './todoitems'
import items from './tododata'
import { toast } from 'react-toastify';

const Todolist = () => {
  const [todoarray, setTodoarray] = useState(JSON.parse(localStorage.getItem('access')) || items);
  const [text, setText] = useState('')

  let dataString;
  function Addtodo() {

    let data = { 
      title: text,
      status: 'pending'
    }

    setTodoarray([...todoarray, data])
    

    setText('');
    toast.success('todo added successfully', { position: 'top-center', autoClose: 800 });
    dataString = JSON.stringify([...todoarray, data]);
    localStorage.setItem('access', dataString);
  }


  function Checkstatus(id) {
    let newtodoarray = todoarray.map((values, i) => {
      if (i === id-1) {
        values.status = 'done'
        return values;
      }
      else
        return values;
    })

    setTodoarray(newtodoarray);
    dataString = JSON.stringify(newtodoarray);
    localStorage.setItem('access', dataString);
    toast.success('todo Done', { position: 'top-center', autoClose: 800 }); 
  }

  function Deletetodo(id) {
    let newtodoarray = [];

    todoarray.map((values, i) => {
      if (i!== id-1) {
        newtodoarray.push(values);
      }

    })

    setTodoarray(newtodoarray);

    dataString = JSON.stringify(newtodoarray)
    localStorage.setItem('access', dataString);
    toast.warning('todo deleted successfully', { position: 'top-left', autoClose: 800 });

  }

  return (
    <div className='flex flex-col items-center h-auto w-[600px] bg-yellow-200 border rounded mx-auto py-[12px]'>
      <div className='flex items-center w-[90%] h-10 rounded-[8px] justify-between bg-slate-400 mt-2 py-1 px-1'>
        <input onKeyDown={(e) => { if (e.key === 'Enter') Addtodo(); }} className='h-[32px] w-[90%] rounded-l px-[6px] bg-gray-200 outline-none'
          type="text" placeholder='Add Todo' value={text} onChange={(e) => setText(e.target.value)} />

        <button onClick={Addtodo} className='bg-gray-200 px-3 h-[32px] rounded-r font-medium'>ADD</button>
      </div>

      {
        todoarray.map((values, i) => {
          return <Todoitems key={i} arrayState={{todoarray, setTodoarray}} id ={i+1} data={values} Checkstatus={Checkstatus} Deletetodo={Deletetodo} />;
        })
      }
    </div>
  )
}

export default Todolist;
