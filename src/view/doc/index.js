import React,{ useState,useEffect } from 'react'
import Markdown from '../../compontent/createMarkDown'
export default function Index(props) {
  const [ val,setVal ] = useState('')
  const [ pos,setPos ] = useState(0)
  const [ colum ] = useState(100)
  const [ row ] = useState(9)
  let textarea = null
  const handleInput = evt => {
    setPos(evt.target.selectionStart) || setVal(evt.target.value)
    console.log({...val})
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    textarea = document.querySelector('.textarea') 
    onkeydown = (e) => {
      setPos(textarea.selectionStart)
      if (e.keyCode === 9 || e.code === 'Tab') {
        e.returnValue = false
        // if(textarea.value.length === pos) return
        setVal(
          textarea.value.slice(0, pos - 1)
          + '  ' +
          textarea.value.slice(pos - 1)
        )
        textarea.selectionStart = textarea.selectionEnd = pos + 1
        setTimeout(() => setPos(textarea.selectionStart))
      }
    }
  })
  return (
    <div>
      <textarea 
        value = { val }
        className = 'textarea'
        onChange = { handleInput } 
        cols = { colum }
        rows = { row }>
      </textarea>
      <Markdown content = { val }/>
    </div>
  )
}
