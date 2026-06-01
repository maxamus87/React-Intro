import {useState} from "react";
Math.floor(Math.random() * 10)

export default function FruitArray(){
    const fruitsArray = ["apples", "oranges", "mangoes", "pineapples", "kiwi", "strawberry"]
    const randomFruit = fruitssArray[randomIndex]
    const [fruits, setFruits] = useState(
        [
            "apple",
            "oranges"
        ]
    )
    return (
        <div>
            <button onClick = {()=> setFruits([...fruits, randomFruit])}>Add Fruit</button>

            
        </div>
    )
}