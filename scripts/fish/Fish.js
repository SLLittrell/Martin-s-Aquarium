export const Fish = (fish) => {
    return `
        <div class="fishCard">
            <img class="fishCard__img" src="${fish.image}">
            <p class="fishCard__name">Name: ${fish.name}</p>
            <p class="fishCard__species">Species: ${fish.species}</p>
            <p class="fishCard__location">Length: ${fish.length} inches</p>
            <p class="fishCard__length">Length: ${fish.location}</p>
            <p class="fishCard__diet">Diet:${fish.food}</p>
        </div>
    `
}