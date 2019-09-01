// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});


//NOTE  create methods to retrieve data trigger the update window when it is complete
export default class ImageService {

	getImgApi(draw) {
		imgApi.get()
			.then(res => {
				draw(res.data.url)
			})
	}

}
