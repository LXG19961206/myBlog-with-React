import React, { useEffect,useState } from 'react'

import Markdown from './createMarkDown'
export const Code = ({ code = '',autoPlay, interval = 75 }) => {
  const [ val,setVal ] = useState( autoPlay ? '' : code )
  useEffect(() => {
    autoPlay && (async ()=>{
      for(let i =0 ;i < code.length ; i ++) {
        await new Promise(resolve => {
          setTimeout(() => {
            setVal(val + code.slice(0,i))
            resolve()
          }, interval)
        })
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <React.Fragment>
      <Markdown content = { '```' + 'javascript\n' + val + '\n' + '```' }/>
    </React.Fragment>
  )
}