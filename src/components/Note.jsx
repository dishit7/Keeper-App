import React from "react";

function Note(props) {
  function handleClick(e){
  props.onDeleteNote(props.id)
  }
  return (
    
    <div className="note">
      <h1>{props.title}</h1>
      {console.log(props.title)}
      <p>{props.content}</p>
      <button name="delete" onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
