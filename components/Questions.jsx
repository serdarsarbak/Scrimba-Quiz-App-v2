import React from 'react'
import Answers from './Answers'


export default function Questions ({data, correctanswers}) {

    const [answers, setAnswers] = React.useState([])
    const [countAns, setCountAns] = React.useState([])
    const [tr, setTr] = React.useState(false)

 
    
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

    console.log(answers)
 

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
        
        const myAnswers = answers.map((answer, index)=>{
            return (answer[countAns[index]])
        })

        console.log('correctanswers', correctanswers)
        console.log('myAnswers', myAnswers)
    }


    return (
        <>
            <p>myComponents</p>
            {data.map((data, index)=>{
        return(
             <>
                <h1>{data.question}</h1>
                <div><Answers answer={answers[index]} clicked={clicked} questionNum={index} logAns={countAns[index]}  /></div>
                    
            </>

    )})}
            <br></br>
            <button onClick={()=>{checkAns()}}>Check my answers</button>
        </>
    )
}