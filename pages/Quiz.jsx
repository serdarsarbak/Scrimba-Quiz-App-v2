import React from 'react'

export default function Quiz () {


    const [questions, setQuestions] = React.useState({})

    React.useEffect(()=>{
        fetch ('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
            .then (res=>res.json())
            .then (data=>setQuestions(data.results))
    },[])
    console.log(questions)

    return (
        <>
            <h1>Quiz page</h1>
        </>
    )
}



