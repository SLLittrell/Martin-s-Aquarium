imconst quoteCollection = [
    {   
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jpdlA8YcBOTuAvXc_Yb1JvM2fVggjBpHtg&usqp=CAU",
        quote: "This place is great!",
        location: "Surrey, England",
        date: "June 8th, 1990"
    }
    ,{   
        image:"https://cdn.thecrazytourist.com/wp-content/uploads/2018/11/ccimage-shutterstock_491960866.jpg",
        quote: "This place is great!",
        location: "Iguazu Falls, Brazil",
        date: "August 4th, 1999"
    }
    ,{  
        image:"https://image.arrivalguides.com/415x300/10/ba24253d8a7a04e55a8339419fd11907.jpg",
        quote: "This place is great!",
        location: "Corfu, Greece",
        date: "July 10th, 2005"
    }
]
export const useQuote = () => {
    return quoteCollection.slice()
}