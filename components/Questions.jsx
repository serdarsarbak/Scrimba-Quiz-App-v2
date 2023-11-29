import React from 'react'


export default function Questions ({data, correctanswers}) {
  
    const [answers, setAnswers] = React.useState([])

    // function that makes an array randomly sorted
    
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
        })
    }, [data])



    const render = data.map(data=>{
        return(
             <>
                <h1>{data.question}</h1>
                <p>{data.correct_answer}</p>
            </>

    )})

    return (
        <>
            <p>myComponents</p>
            {render}
        
        </>

    )

}