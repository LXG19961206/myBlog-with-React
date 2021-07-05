import React, { useEffect,useState } from 'react'
import { Card, Layout, Row, Col, Menu ,Affix , Anchor } from 'antd'
import { apis } from '../../staticMap/apis'
import ContentDetail from '../../compontent/detailContent'
import { apiDocs } from '../../mock/api'
import Logo from '../../images/logo.jpeg'
import './api.less'
import { connect } from 'react-redux'
import { setLoading, setLoadingAsync } from '../../store/actionsCreater'
const { SubMenu } = Menu;
const { Link } = Anchor
const $ = content => document.querySelector(content)
const $$ = (content) => Array.from(document.querySelectorAll(content))


const Api = props => {
  const { setLoading, setLoadingAsync } = props
  const [ contentMinHeight, setHeight ] = useState(0)
  const [ showAnchor, setAnchorOpa ] = useState(0)
  const [ source,setSource ] = useState(apiDocs['forEach'])
  const [ target,setTarget ] = useState('forEach')
  const [ heightList, setHeightList ] = useState([])
  const setCurrentSumHeightFn = () => {
    const headerHeight = $('.app-header').clientHeight
    setTimeout(() => {
      setHeightList(
        $$('.contentDetail').map((item, i ,arr) => [ 
          i === 0 ? item.clientHeight : arr.slice(0,i + 1).map(el => el.clientHeight).reduce((prev, current) => prev + current), 
          source[i].name
        ])
      )
      $('body').onscroll = function () {
        const scrollTop = document.documentElement.scrollTop || $('body').scrollTop
        console.log(heightList.find(item => item[0] + headerHeight > scrollTop))
      }
      console.log(heightList)
    })
  }
  useEffect(() => {
    setHeight($('body').clientHeight - $('.app-header').clientHeight - 20)
  }, [])
  useEffect(() => {
    setCurrentSumHeightFn()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[target,source])
  return (
    <React.Fragment>
      <div style = {{ height: '20px' }}></div>
      <Layout 
        style={{ minHeight: contentMinHeight + 'px' }} 
        className = 'outerContent'>
        <Row style={{ height: '100%' }}>
          <Col span={4}>
            <Menu
              defaultSelectedKeys={['Array']}
              defaultOpenKeys={['Array']}
              mode="inline">
              {
                apis.map(api => {
                  return (
                    <SubMenu
                      key = { api.name }
                      title = { api.name }>
                      {
                        api.items.map(item => {
                          return (
                            <Menu.Item 
                              onClick = { _ =>  {
                                setLoading(true) && setLoadingAsync(false, 500);
                                (`${item}` in apiDocs && setSource(apiDocs[item])) || setTarget(item)
                              }}
                              key = { item }>
                              { item }
                            </Menu.Item>
                          )
                        })
                      }
                    </SubMenu>
                  )
                })
              }
            </Menu>
          </Col>
          <Col span = { 1 }></Col>
          <Col span = { 14 }>
            {
              `${target}` in apiDocs && <Card stlye={{ height: '100%' }}>
              {
                source.map((item,index) => {
                  return (
                    <div
                      key = { index } 
                      className = { 'contentDetail' }>
                      <ContentDetail content = {{ ...item }} />
                    </div>
                  )
                })
              }
          </Card>
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
            <Affix 
              offsetTop = { 170 } onChange={ affixed => console.log(affixed)}>
              <Anchor 
                style = {{ opacity: showAnchor }}
                onChange = { str => setAnchorOpa(str ? 1 : 0) || setSource(apiDocs[target]) }
                target = { $('.outerContent') }
                getCurrentAnchor = { $(`#${target}title`) }
                affix = { false } >
                {
                  source.map(item => {
                    return (
                      <Link href={`/api/${'#' + item.elementId}`} title = { item.name } key = { item.elementId }/>
                    )
                  })
                }
              </Anchor>
            </Affix>
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  )
}

export default connect(
  state => ({ ...state }),{
    setLoading,
    setLoadingAsync
  }
)(Api) 