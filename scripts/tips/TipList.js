import {useTip} from './TipDataProvider.js'
import {Tip} from './Tip.js'

// exporting function to main.js and looping through array in LocationDAtaProvider 
export const TipList = () => {
    const contentElement = document.querySelector (".containerRight")
    const tips = useTip ()
    let tipHTMLRep = ""
    for (const tip of tips) {
        tipHTMLRep += Tip(tip)
    }
// conent Element
    contentElement.innerHTML +=
        `
        <div class="tipList">
            ${tipHTMLRep}
        </div>
    `

}