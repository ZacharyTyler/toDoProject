import ImageService from "../services/image-service.js";

const _is = new ImageService()

//NOTE  Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)

function _drawImage(url) {
  document.getElementById("bg-image").style.backgroundImage = `url("${url}")`
}

export default class ImageController {
  constructor() {
    _is.getImgApi(_drawImage)
  }

}

