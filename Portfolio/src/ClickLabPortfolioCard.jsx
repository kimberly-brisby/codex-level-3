import { useState } from "react"

function Links() {
    let githubLink = <a href='https://github.com/kimberly-brisby'>GitHub</a>

    const [likes, setLikes] = useState(0)
    const addLike = () => {
        setLikes(likes +1)
    }

    return (
        <div>
            <h2>Links</h2>
            <p>{ githubLink }</p>
            <button onClick={addLike}>Like: {likes}</button> 
        </div>

    )
}       

export default Links