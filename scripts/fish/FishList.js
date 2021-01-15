import {mostHolyFish,soldierFish,nonHolyFish} from './FishDataProvider.js'
import {Fish} from './Fish.js'

const buildFishListHTML = (fishArray, heading) => {
    let fishHTMLRepresentations = `<h3>${heading}</h3>`
    for (const fishobject of fishArray) {
        fishHTMLRepresentations += Fish(fishobject)
    }
    return fishHTMLRepresentations
}


export const FishList = () => {
    const contentElement = document.querySelector(".containerLeft__fishList")
    
    const holyFishArray = mostHolyFish()
    // console.log (holyfishArray)
    const holyFishHTMLRepresentations = buildFishListHTML(holyFishArray, "Holy Fish")
    
    const soldierFishArray = soldierFish()
    // console.log (holyfishArray)
    const soldierFishHTMLRepresentations = buildFishListHTML(soldierFishArray, "Soldier Fish")

    const nonHolyFishArray = nonHolyFish()
    // console.log (holyfishArray)
    const nonHolyFishHTMLRepresentations = buildFishListHTML(nonHolyFishArray, "Regular Fish")
    
    

    contentElement.innerHTML += `
        <article class="fishList">
            ${holyFishHTMLRepresentations}
            ${soldierFishHTMLRepresentations}
            ${nonHolyFishHTMLRepresentations}
        </article>
    `
}
