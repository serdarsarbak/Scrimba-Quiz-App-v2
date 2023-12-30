import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import Questions from '../components/Questions'
import {decode}  from 'html-entities';

export default function Quiz ({}) {
    let location = useLocation();

    const [loading, setLoading] = React.useState(true)
    const [alldata, setAlldata] = React.useState([])
    const [correctAnswers, setCorrectAnswers] = React.useState([])
    const [newGame, setNewGame] = React.useState(false)

    React.useEffect(()=>{
   
        fetch (`https://opentdb.com/api.php?amount=${location.state.num}&category=9&difficulty=${location.state.difficulty}&type=multiple`)
            .then (res=>res.json())
            .then (data=>{
                setAlldata(data.results)
                const correctAnswersArray = data.results.map ((data)=>{
                    return (
                        decode(data.correct_answer)
                    )
                })
                setCorrectAnswers(correctAnswersArray)
            })
            setLoading(false)
           
    },[newGame])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    function startAgain () {
        setNewGame (!newGame)   
        setAlldata([])
        setLoading(true)
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



