function DataPlaylistPortfolioCard() {
  let name = "Data Playlist"
  let description = "A playlist page that loads its songs from my own data API."
  let liveUrl = "https://github.com/kimberly-brisby/Capstone-level-2.git"
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
