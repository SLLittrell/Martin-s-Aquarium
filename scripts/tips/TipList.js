import {useTip} from './TipDataProvider.js'
import {Tip} from './Tip.js'

// exporting function to main.js and looping through array in LocationDAtaProvider 
export const TList = () => {
    const contentElement = document.querySelector (".containerRight")
    const locations = useLocation ()
    let localHTMLRep = ""
    for (const location of locations) {
        localHTMLRep += Location(location)
        
    }
// conent Element
    contentElement.innerHTML +=
        `
        <article class="containerLeft__travelLocations containerArticle">
            ${localHTMLRep}
        </article>
    `

}