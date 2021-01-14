//import { useFish } from './FishDataProvider.js'
import {FishList} from './fish/FishList.js' 
// import {useQuote} from './quotes/QuoteDAtaProvider.js'
import { QuoteList } from './quotes/QuoteList.js'
// import {useLocation} from './locations/LocationDAtaProvider.js'
import { LocationList } from './locations/LocaionList.js'
import { TipList } from './tips/TipList.js'
import { mostHolyFish, nonHolyFish } from './fish/FishDataProvider.js'
import {soldierFish} from './fish/FishDataProvider.js'
// const allTheFish = useFish()

// for (const fish of allTheFish) {
//     console.log(fish)
// }

FishList()

// 
QuoteList()

// 
LocationList()

TipList()

mostHolyFish()

soldierFish()

nonHolyFish()

