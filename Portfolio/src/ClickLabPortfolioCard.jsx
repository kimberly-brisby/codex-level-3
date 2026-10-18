import { useState } from "react"

let name = "Click Lab"
let description = "A page of buttons that count, change, and react to click."
let details = "I built it in Level 2 to practice click listeners."
let repoUrl = "https://github.com/kimberly-brisby"
let liveUrl = "https://kimberly-brisby.github.io/Capstone-level-2/"

function Links() {
    

    const [likes, setLikes] = useState(0)
    const [open, setOpen] = useState(0)

    const addLike = () => {
        setLikes(likes +1)
    }

    const toggleOpen = () => {
        setOpen(!open)
    }

    let text = description
    if(open){
        text = description + "" + details
    }

    let label = "Show More"
    if(open){
        label = "Show Less"
    }


    return (
        <article>
            <h2>{name}</h2>
            <p>{text}</p>
            <button onClick={addLike}>Like: {likes}</button>
            &nbsp;
            <button onClick={toggleOpen}>{label}</button>
            &nbsp;
            <a href="{liveUrl}">See it live</a>.<a href="{repoUrl}">Read the code</a>
        </article>

    )
}       

export default Links