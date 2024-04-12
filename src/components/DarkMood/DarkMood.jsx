import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {faMoon} from "@fortawesome/free-solid-svg-icons";


function DarkMood() {
const [ theme , setTheme] = useState(false);

const handleMood = ()=>{
    setTheme(!theme)
    }

useEffect(()=>{
    if (theme == true) {
        document.body.classList.add("DarkMood")
    } else {
        document.body.classList.remove("DarkMood")
    }
})

    return (
    <>
    <Button 
    style={{border:"none"}}
    variant='transparent'
    onClick={handleMood}>
    { theme?
    <FontAwesomeIcon 
    icon={faSun} 
    spin
    spinReverse
    size="2xl" 
    style=
    {{
    color: "#ffd43b",
    cursor:"pointer",
    }} 
    /> 
    :
    <FontAwesomeIcon 
    icon={faMoon} 
    bounce size="2xl"
    spin
    spinReverse 
    style=
    {{
    color: "#000",
    cursor:"pointer",
    }}
    />
    }
    </Button>
    </>
)
}

export default DarkMood;