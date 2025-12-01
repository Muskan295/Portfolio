import {useState,useEffect} from 'react'
import React from 'react'

function SkillForm() {
    const[form,setForm]=useState({
        category:'',
        name:'',
        percent:'',
        years:'',
        description:''
    });

    const addChange=(event)=>{
        setForm({...form,[event.target.name]:event.target.value});
    };

    const Submit=(event)=>{
        event.preventDefault();
        fetch('http://localhost:5000/api/skills/add',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(form),
        })
        .then((res)=>res.json())
        .then((data)=>{alert("Skill added Successfully✅")})
        .catch((error)=>{console.log(error)});
    };
  return (
    <div>
      <h1 className='text-4xl font-bold mb-10'>Add Skill</h1>
      <form onSubmit={Submit} className='space-y-5 max-w-xl'>
        <input name="category" placeholder="Enter Category" onChange={addChange}/>
        <input name="name" placeholder="Enter Skill name" onChange={addChange}/>
        <input name="percent" placeholder="Enter percent" onChange={addChange}/>
        <input name="years" placeholder="Enter Experience" onChange={addChange}/>
        <textarea name="description" placeholder="Description" onChange={addChange}/>
        <button>Add Skill</button>
      </form>
    </div>
  )
}

export default SkillForm
