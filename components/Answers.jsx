import React from 'react'
import {decode}  from 'html-entities';

export default function Answers ({answer, clicked, questionNum, logAns, checkResult, correctanswers }) {

    const [loading, setLoading] = React.useState(true)  
    const [click, setClick] = React.useState({}) 

    React.useEffect(()=>{
        if (answer) {
            setLoading (false)
        }
    }, [answer])

    if (loading) {
        return null
    }

 
   
    function styleButton (index) {
        if (!checkResult) {
            if (logAns===index) {

            return (
                {
                    backgroundColor: "#59E391"
                }
            )
        }}
        if (checkResult) {
            if (index === answer.indexOf(correctanswers[questionNum])) {
                return (
                    {
                        fontWeight : "bold",
                        backgroundColor: "#59E391",
                        disabled: 'false'
                    })}

            if (logAns===index) {
                if (index === answer.indexOf(correctanswers[questionNum])) {
                    return (
                        {
                            backgroundColor: "#59E391"
                        }
                    )} else {
                            return (
                                {
                                    backgroundColor: "red"
                                }
                            )  
                    }
    }}}   
    
    return (
        <>
            <div>
                {answer.map((singleAns, index)=>{
                    return (
                        <button disabled={checkResult} style = {styleButton(index)} onClick={()=>{clicked(index, questionNum)}}>{decode(singleAns)}</button>
                    )
                })}
               
            </div>
        </>
    )
    
}