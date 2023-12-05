import React from 'react'


export default function Questions ({data, correctanswers}) {
  
    const [answers, setAnswers] = React.useState([])


    // function that makes array randomly sorted
    function shuffle(array) {                               
        return array.sort(() => Math.random() - 0.5);
      }

    React.useEffect(()=>{

        data.forEach((item)=>{
            let answersArr = []
            answersArr.push(item.correct_answer)
            answersArr.push(item.incorrect_answers)
            answersArr = answersArr.flat()
            answersArr = shuffle(answersArr)
            console.log(answersArr)
            setAnswers(answersArr)
        })}, [data])
    
  
   

    return (
        <>
            <p>myComponents</p>
            {data.map(data=>{
        return(
             <>
                <h1>{data.question}</h1>
                <p>{data.correct_answer}</p>
            </>

    )})}
        
        </>
    )
}