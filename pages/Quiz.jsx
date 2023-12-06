import React from 'react'
import {Link} from 'react-router-dom'
import Questions from '../components/Questions'

export default function Quiz () {


    const [loading, setLoading] = React.useState(true)
    const [alldata, setAlldata] = React.useState([])
    const [correctAnswers, setCorrectAnswers] = React.useState([])
    const [newGame, setNewGame] = React.useState(false)

    React.useEffect(()=>{
        fetch ('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
            .then (res=>res.json())
            .then (data=>{
                setAlldata(data.results)
                const correctAnswersArray = data.results.map ((data)=>{
                    return (
                        data.correct_answer
                    )
                })
                setCorrectAnswers(correctAnswersArray)
            })
            setLoading(false)
           
    },[])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    function startAgain () {
        setNewGame (!newGame)
        console.log('newgame')
        console.log(newGame)
    }

    return (
        <>

            <Link to='/'>Home page</Link>
            <h1>Quiz page</h1>
            <Questions 
                data={alldata}
                correctanswers = {correctAnswers}
                startAgain = {startAgain}
            />
            
    
        </>
    )
}



