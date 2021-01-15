const fishCollection = [
    {   
        image:"https://i.ebayimg.com/images/g/2TMAAOSwO8Vfl3i2/s-l300.jpg",
        name: "Squishy",
        species:"Cuttle fish ",
        length:12,
        location: "Mediterranean",
        food: "fish"
    }
    ,{   
        image:"https://www.theolivepress.es/wp-content/uploads/2020/03/cuttlefish.jpg",
        name: "Robin Hood",
        species:"Silver Arrowona",
        location: "Southeast Asia",
        length:36,
        food: "fish"
    }
    ,{  
        image:"https://piranhaguide.com/wp-content/uploads/2019/03/red-bellied-piranha-1-e1552727879587-750x480.jpg",
        name: "yum-yum",
        species:"Red-Bellied Piranha (Pygocentrus nattereri) ",
        location: "Amazon River, Paraguay",
        length:5,
        food: "Fish, aquatic invertibrates,crustaceans"
    },
    {  
        image:"https://piranhaguide.com/wp-content/uploads/2019/03/red-bellied-piranha-1-e1552727879587-750x480.jpg",
        name: "yum-yum",
        species:"Red-Bellied Piranha (Pygocentrus nattereri) ",
        location: "Amazon River, Paraguay",
        length: 17,
        food: "Fish, aquatic invertibrates,crustaceans"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if ( fish.length % 3 === 0)
         holyFish.push(fish)
    } 
    
    return holyFish
}
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishCollection) {
    if ( fish.length % 5 === 0)
         soldiers.push(fish)
    } 
    return soldiers
}
export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish= []
    for (const fish of fishCollection) {
        if ( fish.length % 5 !== 0 && fish.length % 3 !== 0 )
             regularFish.push(fish)
        } 
    return regularFish
}