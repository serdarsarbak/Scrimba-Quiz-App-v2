import React from "react"
import { Form, Link } from "react-router-dom"


export default function Home () {


    const [numQuestions, setNumQuestions] = React.useState(5);
    const [difficulty, setDifficulty] = React.useState('medium')
    
  

    return (
    <>
    
        <h1>QUIZZICAL </h1>
            <label>
                Number of Questions: <input type='number' name='numQuestions' value={numQuestions}
            onChange={e => setNumQuestions(e.target.value)} />
            </label>
            <br/>
            <br/>
          

            <label>
                Difficulty Level:  <select onChange={e => setDifficulty(e.target.value)}>
                                        <option value="hard">Hard</option>
                                        <option selected value="medium">Medium</option>
                                        <option value="easy">Easy</option>
                                    </select>
            </label>
        <br/>
        <br/>

        <Link to={'quiz'} 
                state={{ num: numQuestions, difficulty: difficulty}}>Start quiz</Link>

        
    </>


    )
    
}