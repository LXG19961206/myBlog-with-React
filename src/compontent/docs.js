import React, { useEffect,useState } from 'react'
import { Card, Layout, Row, Col, Menu } from 'antd'
import Markdown from './createMarkDown'
import Logo from '../../src/images/logo.jpeg'
import './docs.less'
const $ = content => document.querySelector(content)
const $$ = (content,cb) => document.querySelectorAll(content).forEach(el => cb(el))


export default function Docs({ source }) {
  const [ contentMinHeight, setHeight ] = useState(0)
  const [currentDoc,setDoc] = useState('')
  useEffect(() => {
    setHeight($('body').clientHeight - $('.app-header').clientHeight - 20)
  }, [])
  return (
    <React.Fragment>
      <div style = {{ height: '20px' }}></div>
      <Layout 
        style={{ minHeight: contentMinHeight + 'px' }} 
        className = 'outerContent'>
        <Row style={{ height: '100%' }}>
          <Col span={4}>
            <Menu>
              {
                source.map((item,index) => {
                  return (
                    <Menu.Item 
                      key = { item.name } 
                      onClick = { _ => setDoc(source[index].markdown) }
                      children = { item.name } />
                  )
                })
              }
            </Menu>
          </Col>
          <Col span = { 1 } ></Col>
          <Col span = { 14 } > {
            <Markdown content = { currentDoc || source[0].markdown }/> 
          }
          </Col>
          <Col span = { 4 } style = {{ marginLeft: '20px' }}>
            <Card 
              className = 'aboutme'
              title = "关于作者" 
              bordered = {false} 
              style = {{ width: 240 }}>
              <div className = 'headerContainer'>
                <img src = { Logo } alt="" />
                <div>
                  <span> LXG </span>
                  <span> React工程师 </span>
                </div>  
              </div>
              <div className = 'infoContainer'>
                {
                  [['浏览','10'],['点赞',20],['收藏',40]].map(item => {
                    return (
                      <div key = { item[0] }>
                        <p> { item[1] } </p>
                        <p> { item[0] } </p>
                      </div>
                    )
                  })
                }
              </div>
            </Card>
          </Col>    
        </Row>
      </Layout>
    </React.Fragment>
  )
}


