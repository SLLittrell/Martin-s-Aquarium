export const Location = (local) => {
    return `
        <div class="location">
            <img class="locationCard__image" src="${local.image}">
            <p class="locationCard__city">${local.city}</p>
            <p class="locationCard__country">${local.country}</p>
            <p class="quoteCard__waterBody">${local.waterBody}</p>
        </div>
    `
}