import { useState } from "react"

function Data() {
  const name = "Homeschool Project"
  const description = "A project that discusses and provides homeschooling resources."
  const liveUrl = "https://kimberly-brisby.github.io/Capstone-level-2/"
  const repoUrl = "https://github.com/kimberly-brisby/Capstone-level-2.git"

   const [likes, setLikes] = useState(0)
    const addLike = () => {
          setLikes(likes +1)
      }
  
      const removeLike = () => {
          setLikes(0)
      }

  return (
    <article className="card-azure">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a role="button" href={liveUrl}>See it live</a>   <a role="button" href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like: {likes}</button>
      &nbsp;
      <button onClick={removeLike}>Reset</button>
    </article>
  )
}

export default Data
