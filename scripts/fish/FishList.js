import { useFish } from './FishDataProvider'
import { Fish } from './Fish'


export const FishList = () => {
    const contentElement = document.querySelector(".containerLeft__fishList")
    const fishes = useFish()
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
       fishHTMLRepresentations += Fish(fish)
    }
    
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}
