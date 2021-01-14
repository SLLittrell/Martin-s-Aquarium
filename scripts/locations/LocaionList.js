import {useLocation} from './LocationDAtaProvider.js'
import {Location} from './Location.js'

// exporting function to main.js and looping through array in LocationDAtaProvider 
export const LocationList = () => {
    const contentElement = document.querySelector (".containerLeft")
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
