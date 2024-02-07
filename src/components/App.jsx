import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [notes,setNotes]=useState([{
  title:"Note title",
  content:"Note content"
},
{
  title:"secondNote title",
  content:"secondNote content"
}
])
function addNote(title,content){
  const newNote={
    title:title,
    content:content

  }
   setNotes( prevValue=>(
  [...prevValue,newNote]
   )) 
}
function deleteNote(key){
 setNotes(notes.filter((note,index)=>index!==key))
}
  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} />
 <div>{notes.map((note,index)=>{ return(
  <Note  id={index} key={index} title={note.title} content={note.content}  onDeleteNote={deleteNote}/>)})}</div>
      <Footer />
    </div>
  );
}

export default App;
