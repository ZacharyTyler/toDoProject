// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

//NOTE  create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {

	getQuoteApi(draw) {
		_quoteApi.get()
			.then(res => {
				draw(res.data.quote)
			})
	}
}
