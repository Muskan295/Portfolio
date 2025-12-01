import React from 'react'
import {useState} from 'react';

function ProjectForm() {
  const[form,setForm]=useState({
    title:'',
    description:'',
    image:'',
    tech:'',
    link:''
  });
  const addChange=(event)=>{
    setForm({...form,[event.target.name]:event.target.value});
  };

  const Submit=(event)=>{
    event.preventDefault();
    fetch('http://localhost:5000/api/projects/add',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        ...form,
        tech:form.tech.split(",")
      })
    })
    .then((res)=>res.json())
    .then((data)=>{
      alert("Project added✅");
    })
    .catch((err)=>console.log(err));
  };
  return (
    <div>
      <h1>Add Project</h1>
      <form onSubmit={Submit}>
        <input name="title" placeholder="Project Title" onChange={addChange}
        />
        <textarea name="description" placeholder="Description" onChange={addChange}/>
        <input name="link" placeholder="GitHub Link" onChange={addChange}/>
        <input name="image" placeholder="Image URL" onChange={addChange}/>
         <input name="tech" placeholder="Tech" onChange={addChange}/>
         <button>Add Project</button>
      </form>
    </div>
  )
}

export default ProjectForm
