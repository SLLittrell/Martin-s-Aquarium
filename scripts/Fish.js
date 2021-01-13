export const Fish = (fish) => {
    return `
        <div class="fishCard">
            <img class="fishCard__img" src="https://piranhaguide.com/wp-content/uploads/2019/03/red-bellied-piranha-1-e1552727879587-750x480.jpg" alt="Red-Bellied Piranha">
            <p class="fishCard__name">Name: ${fish.name}</p>
            <p class="fishCard__species">Species: ${fish.species}</p>
            <p class="fishCard__location">Length: ${fish.length}</p>
            <p class="fishCard__length">Length: ${fish.location}</p>
            <p class="fishCard__diet">Diet:${fish.food}</p>
        </div>
    `
}