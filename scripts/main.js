// import { useFish } from './FishDataProvider.js'
import {FishList} from './fish/FishList.js' 
// import {useQuote} from './quotes/QuoteDAtaProvider.js'
import { QuoteList } from './quotes/QuoteList.js'
import {useLocation} from './locations/LocationDAtaProvider.js'
// const allTheFish = useFish()

// for (const fish of allTheFish) {
//     console.log(fish)
// }

FishList()

// 
QuoteList()

const allLocations = useLocation()

for (const location of allLocations) {
    console.log(location)
}