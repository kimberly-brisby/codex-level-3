import imageUrl from "./image-url";

const heroPhoto = (photo, width, height, saturation, description) => {
  const src = imageUrl(photo, width, height, saturation)
  const alt = description
  return [src, alt]
}


export default heroPhoto