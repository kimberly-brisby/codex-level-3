function Data() {
  let name = "Homeschool Project"
  let description = "A project that discusses and provides homeschooling resources."
  let liveUrl = "https://kimberly-brisby.github.io/Capstone-level-2/"
  let repoUrl = "https://github.com/kimberly-brisby/Capstone-level-2.git"
  return (
    <article className="card-azure">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default Data
