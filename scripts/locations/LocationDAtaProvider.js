const harvestLocations = [
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Zx2CWCYnQM1EjcRrLEaQ_N70RdBqMZVc6g&usqp=CAU  alt='Amazon River'",
        city: "Rio",
        country: "Brazil",
        waterBody: "Amazon River"
   },
   {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUEErZQ32vgFG12PnjpJH8FYcchasVdeYPg&usqp=CAU alt='mediterranean coast'",
        city: "Athens",
        country: "Greece",
        waterBody: "Mediterranean"
    }
]
export const useLocation = () => {
    return harvestLocations.slice ()
}