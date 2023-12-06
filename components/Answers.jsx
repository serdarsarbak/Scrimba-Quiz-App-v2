import React from 'react'

export default function Answers ({answer, clicked, questionNum, logAns}) {

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

    // function styleFunction () {
    //     if (countAns[questionNum]) {
          
    //         return ({
                
    //             backgroundColor: "#59E391"}
    //         ) 
    //     } 
        
    // }

  


    function styleButton (index) {
        console.log('button clicked')
        if (logAns===index) {

            return (
                {
    
                    backgroundColor: "#59E391"
                }
            )

        }
    }

    
    
    return (
        <>
            <div>
                {answer.map((singleAns, index)=>{
                    return (
                        <button disabled={false} style = {styleButton(index)} onClick={()=>{clicked(index, questionNum)}}>{singleAns}</button>
                    )
                })}
               
            </div>
                
            
        </>
    )
    
}