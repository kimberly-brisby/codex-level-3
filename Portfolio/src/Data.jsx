function DataPlaylistPortfolioCard() {
  let name = "Homeschool Project"
  let description = "A few homeschool resources from my data API."
  let liveUrl = "https://kimberly-brisby.github.io/Capstone-level-2/"
  let repoUrl = "https://github.com/kimberly-brisby/Capstone-level-2.git"
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default DataPlaylistPortfolioCard
