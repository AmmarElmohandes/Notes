import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
const [expanded,setExpanded]=useState(false)
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpanded(false)
    event.preventDefault();
  }
function expand(){
  setExpanded(true);
}
  return (
    <div>
      <form className="create-note">
        <input
          onClick={expand}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {expanded &&
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."

          rows={expanded?"3":"1"}
        />
        }
        <button onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
