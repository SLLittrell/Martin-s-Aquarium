export const Quote = (quotes) => {
    return `
    <div class="quoteCard">
    <img class="quote__img" src="${quotes.image}" alt="waterfall in surrey England">
    <p class="quoteCard__text"><q>${quotes.quote}</q></p>
    <p class="quoteCard__location">${quotes.location}</p>
    <p class="quoteCard__date">${quotes.date}</p> 
</div>
    `
}