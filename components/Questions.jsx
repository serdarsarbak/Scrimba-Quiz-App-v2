import React from 'react'
import Answers from './Answers'
import {Link} from 'react-router-dom'
import {decode}  from 'html-entities';

export default function Questions ({data, correctanswers, startAgain}) {

    const [answers, setAnswers] = React.useState([])
    const [countAns, setCountAns] = React.useState([])
    const [checkResult, setCheckResult] = React.useState(false)
    const [tr, setTr] = React.useState(false)
    const [numCorrect, setNumCorrect] = React.useState()

    // function that makes array randomly sorted
    function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
    }
    
    React.useEffect(()=>{
        const newArr = data.map((item)=>{
        let answersArr = []
        answersArr.push(item.correct_answer)
        answersArr.push(item.incorrect_answers)
        answersArr = answersArr.flat()
        answersArr = shuffle(answersArr)
        return answersArr
        })
        
        setAnswers (newArr)
        const logData = data.map(()=>([]))
        setCountAns (logData)

    }, [data])

    function clicked (index, questionNum) {
        
        setCountAns((oldData)=>{
            oldData[questionNum] = index
            console.log('clicked')
            return (oldData)
        })

        setTr((old)=>{
            return (!tr)})
    }

    function checkAns () {
        setCheckResult(true)
        const myAnswers = answers.map((answer, index)=>{
            return (answer[countAns[index]])
        })

        let correctAns = 0
        myAnswers.forEach((answer,index)=>{
            if (answer===correctanswers[index]) {
               correctAns ++
            }
            setNumCorrect (correctAns)
        })
    }

    return (
        <>
            {data.map((data, index)=>{
        return(
             <>
                <h1>{decode(data.question)}</h1>
                <div><Answers answer={answers[index]} clicked={clicked} questionNum={index} logAns={countAns[index]} checkResult={checkResult} correctanswers={correctanswers}  /></div>   
            </>
    )})}
            <br></br>
            {!checkResult? <button onClick={()=>{checkAns()}}>Check my answers</button> : ''}
            {checkResult? <p>You have {numCorrect}/{data.length} correct answers</p> : ''}
            {checkResult? <Link to='/'><button onClick={()=>{startAgain()}}>New Quiz</button></Link> : ''}
        </>
    )
}