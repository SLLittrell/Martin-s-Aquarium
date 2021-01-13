const fishCollection = [
    {   
        image:"",
        name: "Squishy",
        species:"Cuttle fish ",
        length:"1 ft",
        location: "Mediterranean",
        food: "fish"
    }
    ,{   
        image:"",
        name: "Robin Hood",
        species:"Silver Arrowona",
        location: "Southeast Asia",
        length:"3+ ft",
        food: "fish"
    }
    ,{  
        image:"",
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