/* eslint-disable import/no-anonymous-default-export */
import Markdown from "./createMarkDown"
import { Table } from 'antd'
import React from "react"
import './index.less'
export default function ({ content }) {
  switch(content.type) {
    case 'title':
      return (<h2 id = { content.elementId } style = {{ fontStyle: 'italic' }}> { content.text } </h2>)
    case 'desc':
      return (
        <div id = { content.elementId }>
          <h3 className = 'detailTitle'> 描述 </h3>
          <div className = 'descTextBlock'>
            &nbsp;&nbsp;{ content.text }
          </div>
        </div>
      )
    case 'table':
      return (
        <div id = { content.elementId }>
          <h3 className = 'detailTitle'> 参数说明 </h3>
          <Table className = { 'argsTable' } dataSource = { content.dataSource } columns = { content.columns } />
        </div>
      )
    case 'code':
      return (
        <div id = { content.elementId }>
          <h3 className = 'detailTitle'> 手写 api </h3>
          <Markdown content = { content.code }/>
        </div>
      )
    case 'tips':
      return (
        <div id = { content.elementId }>
          <h3 className = 'detailTitle'> Tips </h3>
          <Markdown content = { content.code }/>
        </div>
      )
    default:
      return
  }
}