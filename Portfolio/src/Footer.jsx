
function Footer() {
  let year = new Date().getFullYear()
  let githubLink = <a href='https://github.com/kimberly-brisby'>GitHub</a>
  return (
     <div>
    <p>&copy; {year} Kimberly Brisby</p>
    <p>{ githubLink }</p>
  </div>
  )
   

}

export default Footer