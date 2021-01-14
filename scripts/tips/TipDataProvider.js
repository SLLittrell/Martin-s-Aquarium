const tipCollection = [
    {
        tip1:"Clean your tank!",
        tip2:"Don't harvest Endangered Species",
        tip3:"Have fun!"
    },
    {
        tip1:"Change water often",
        tip2:"Don't kill the fish",
        tip3:"Check salinity every day"
    }
]

export const useTip = () => {
    return tipCollection.slice()
}