import React,{useState} from "react";

function CreateArea(props) {
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
 function handleChange(e){
  if((e.target.name)==="title")
{  setTitle(e.target.value)
  console.log(`in set title`)
}  
else
{setContent(e.target.value)
console.log(`in set content`)}
  }
  function handleClick(e){
  e.preventDefault()
  props.onAddNote(title,content)
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title"  onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button  onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
