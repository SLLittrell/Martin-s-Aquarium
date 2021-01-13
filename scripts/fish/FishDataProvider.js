const fishCollection = [
    {   
        image:"https://i.ebayimg.com/images/g/2TMAAOSwO8Vfl3i2/s-l300.jpg",
        name: "Squishy",
        species:"Cuttle fish ",
        length:"1 ft",
        location: "Mediterranean",
        food: "fish"
    }
    ,{   
        image:"https://www.theolivepress.es/wp-content/uploads/2020/03/cuttlefish.jpg",
        name: "Robin Hood",
        species:"Silver Arrowona",
        location: "Southeast Asia",
        length:"3+ ft",
        food: "fish"
    }
    ,{  
        image:"https://piranhaguide.com/wp-content/uploads/2019/03/red-bellied-piranha-1-e1552727879587-750x480.jpg",
        name: "yum-yum",
        species:"Red-Bellied Piranha (Pygocentrus nattereri) ",
        location: "Amazon River, Paraguay",
        length:"5-10 inches",
        food: "Fish, aquatic invertibrates,crustaceans"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}