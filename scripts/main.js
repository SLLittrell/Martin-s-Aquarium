// import { useFish } from './FishDataProvider.js'
import {FishList} from './fish/FishList.js' 
import {useQuote} from './quotes/QuoteDAtaProvider.js'

// const allTheFish = useFish()

// for (const fish of allTheFish) {
//     console.log(fish)
// }

FishList()

const allTheQuotes = useQuote()

for (const quote of allTheQuotes) {
    console.log(quote)
}