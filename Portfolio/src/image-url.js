const imageUrl = (photo, width, height, saturation) => {
  return "https://images.unsplash.com/" + photo + "?w=" + width + "&h=" + height + "&fit=crop&auto=format&sat=" + saturation

}
export default imageUrl
