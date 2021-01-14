const tipCollection = [
    {
        tip1: "Clean your tank!",
        tip2:"Don't harvest Endangered Species",
        tip3:"Have fun!"
    }
]

export const useTip = () => {
    return tipCollection.slice()
}