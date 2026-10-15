import imageUrl from "./image-url";

const heroPhoto = (width, height, sepia,saturation, description) =>{
    const src = imageUrl(width, height, sepia, saturation)
    const alt = description
        return [src,alt]
    
}

export default heroPhoto