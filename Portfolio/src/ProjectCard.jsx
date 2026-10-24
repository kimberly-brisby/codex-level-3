import { useState } from "react"


function ProjectCard({project}) {
    

    const [likes, setLikes] = useState(0)
    const [open, setOpen] = useState(0)

    const addLike = () => {
        setLikes(likes +1)
    }

    const removeLike = () => {
        setLikes(0)
    }

    const toggleOpen = () => {
        setOpen(!open)
    }

    let text = project.description
    if(open){
        text = project.description + "" + project.details
    }

    let label = "Show More"
    if(open){
        label = "Show Less"
    }


    return (
        <article>
            <h2>{project.name}</h2>
            <p>{text}</p>
            <button onClick={addLike}>Like: {likes}</button>
            &nbsp;
            <button onClick={removeLike}>Reset</button>
            &nbsp;
            <button onClick={toggleOpen}>{label}</button>
            &nbsp;
            <a href="{project.liveUrl}">See it live</a>.<a href="{project.repoUrl}">Read the code</a>
        </article>

    )
}       

export default ProjectCard 