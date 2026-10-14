import imageUrl from "./image-url";

const heroPhoto = (width = 1200, height = 500, description = "cherry blossoms and volcano") =>{
    const src = imageUrl(width, height)
    const alt = description
        return [src,alt]
    
}

const [bigSrc, bigAlt] = heroPhoto()
const [smallSrc,smallAlt] = heroPhoto(600)

console.log(bigSrc)
console.log(bigAlt)
console.log(smallSrc)
console.log(smallAlt)

export default heroPhoto