import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  React,{ useState } from "react";
import '../css/tag.css'

function Tag({value, onClick}) {

  let [active,setActive] = useState(false)

  const onTouch = () => {
    setActive(!active)
    onClick(value);
  }
  
  return (
    <button 
      className={`tag ${active ? 'enabled' : 'disabled'}`}
      onClick={onTouch}
    >
      {value}
      <FontAwesomeIcon
        color="#EF863F"
        icon={faXmark}
      />
    </button>
  );
}



export default Tag;
