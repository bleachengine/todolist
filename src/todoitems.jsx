import { useState } from 'react'
import { toast } from 'react-toastify';
const Todoitems = ({arrayState, id, data, Checkstatus, Deletetodo}) => {

  const {todoarray , setTodoarray} = arrayState;
  const [update, setUpdate] = useState(false)
  let [editText, setEditText] = useState('');


  function updatetodo() {

    let newtodoarray = todoarray.map((values, i)=>{
       if (i === id-1){
        values.title = editText
         return values;
      }
      else
        return values;
    })
    console.log(newtodoarray);
    setTodoarray(newtodoarray)

    let dataString = JSON.stringify(newtodoarray);
    localStorage.setItem('access', dataString);
    toast.info('todo updated successfully', { position: 'top-center', autoClose: 800 });
  }



  function textChange(id, text) {
    setUpdate(!update);
    console.log(id);
    setEditText(text);

  }

  return (

    <div className={`w-[90%] h-9 rounded-[8px] ${data.status === "done" ? 'bg-green-400' : update ? 'bg-teal-200' : 'bg-purple-400'} flex justify-between px-2 mt-3 py-[6px]`} >

      <div className='flex items-center'>
        <span className='text-base mr-2'>{id}.</span>

        {update ? <input className='bg-transparent text-xl text-gray-900 outline-none ' type="text" value={editText}  onChange={(e) => { setEditText(e.target.value) }} />
        : <span className='text-xl text-white'>{data.title}</span> }

        {/* onKeyDown={(e) => { if (e.key === 'Enter') {updateDone(data.id) } }} */}
      </div>

      <div>
        

        { data.status !== "done" && (!update ? <button title="Edit" onClick={() => { textChange(id, data.title); }} className='px-2 rounded bg-sky-300 border border-zinc-950 mr-[2px]'>
          {"\uD83D\uDD89"}
        </button> : 
        <button title="Update" onClick={()=>{updatetodo(); setUpdate(!update);}} className='px-[10.5px] rounded bg-pink-300 border border-slate-900 mr-[2px] font-black'>{'\u23CE'}</button>)
        } 


      
        <button title="Done" onClick={() => Checkstatus(id)} className={`${data.status === "done" ? 'bg-cyan-200' : 'bg-pink-200'} px-2 text-purple-700 font-black rounded border border-zinc-950 mr-[3px]`}>

          {'\u2713'}

        </button>



        <button title="Delete" onClick={() => { Deletetodo(id); }} className='bg-orange-300 text-rose-700 px-2 rounded border border-zinc-950'>
          {"\u2718"}
        </button>
      </div>

    </div>

  )
}

export default Todoitems
