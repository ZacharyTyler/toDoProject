import QuoteService from "../services/quote-service.js";

let _qs = new QuoteService()


//NOTE  Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
function _drawQuote(quote) {
  document.getElementById("quote").innerHTML = `<div><h5>"${quote.body}"</h5><p>-${quote.author}-</p></div>`
}
export default class QuoteController {
  constructor() {
    _qs.getQuoteApi(_drawQuote)
  }
}
