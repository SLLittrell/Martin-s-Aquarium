import {useQuote} from './QuoteDAtaProvider.js'
import {Quote} from './Quote.js'

export const QuoteList = () => {
    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const quotes = useQuote()
    let quoteHTMLRep =""
    for (const quote of quotes) {
        quoteHTMLRep += Quote(quote)   
    }
    contentElement.innerHTML += `
        <article class="quoteCard">
            ${quoteHTMLRep}
        </article>
    `
}