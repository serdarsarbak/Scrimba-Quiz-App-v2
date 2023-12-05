import React from 'react'


export default function Questions ([data, correctanswers]) {
  
    const [answers, setAnswers] = React.useState([])


    // function that makes array randomly sorted
    function shuffle(array) {                               
        return array.sort(() => Math.random() - 0.5);
      }

    React.useEffect(()=>{

        const answersArr = data.map((item)=>{
            let emptyArr = []
            emptyArr.push(item.correct_answer)
            emptyArr.push(item.incorrect_answers)
            emptyArr = answersArr.flat()
            emptyArr = shuffle(answersArr)
            return emptyArr
           
            
        })
            
        setAnswers (answersArr)
   
    }, [data])
    
  
    console.log(answers)

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