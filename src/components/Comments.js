import React, { useState } from 'react'

function Comments() {
    const [comments,setComments] = useState([])
    const [newcomment,setNewcomment] = useState("")
    const handleChange = (p) => {
        setNewcomment(p.target.value)
    }
    const addComment = ()=>{
        setComments(
            [...comments,{id:comments.length+1,text:newcomment}]
        )
        setNewcomment("")
    }

  return (
    <div>
        {
            comments.map((commentObj)=>{
                const {id,text}  = commentObj
                return (
                    <ul key={id}>
                        <h1>{text}</h1>
                    </ul>

                )
            })
        }

        <input 
            type='text'
            placeholder='add comment'
            name='comment'
            value={newcomment}
            onChange={handleChange}
        />
        <button onClick={addComment} id='btn'> Add </button>
    </div>
  )
}

export default Comments