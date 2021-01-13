import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'


export const FishList = () => {
    const contentElement = document.querySelector(".containerLeft__travelQuotes containerArticle")
    const fishes = useFish()
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
       return fishHTMLRepresentations += Fish(fishes)
    }
    
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}
