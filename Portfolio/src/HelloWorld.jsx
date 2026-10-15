import { useState } from "react"

function HelloWorld() {
  const name = "Hello world Project"
  const description = "An introduction about myself."
  const liveUrl = "https://kimberly-brisby.github.io/hello-world-2026/"
  const repoUrl = "https://github.com/kimberly-brisby/hello-world-2026.git"
  return (
    <article className="card-jade">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a role="button"href={liveUrl}>"See it live</a>   <a role="button" href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default HelloWorld
