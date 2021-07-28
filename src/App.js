import './App.css';
import { 
  Route,
  Switch,
  withRouter 
} from 'react-router-dom'
import React from 'react';
import { routerMap } from './routerMap/index'
import { 
  Layout, 
  Menu, 
  Row, 
  Col, 
  Alert, 
  Spin,
  Input 
} from 'antd';
import logo from './images/logo.jpeg'
import { useState, useEffect  } from 'react'
import { connect } from 'react-redux'
import { setLoading, setLoadingAsync, routerPush } from '../src/store/actionsCreater'
const { Header, Content } = Layout;
const { Search } = Input

function App(props) {
  const { setLoading, setLoadingAsync, routerPush } = props
  const [ showHeaderFlag ] = useState(true)
  const [ showAlert, setAlert ] = useState({ display: 'none' })
  const toSomeWhere = (path) => {
    setTimeout(() => props.history.push(path))
    setLoading(true) && setLoadingAsync(false, 2000)
  }
  useEffect(() => {
    routerPush(props.history.push)
  })
  return (  
      <Layout className="layout">
        {
          props.loading && <div 
            className = 'loadingContainer' 
            style = {{ overflow: props.loading ? 'hidden' : '' }}>
            <Spin size="large" className = 'loading'/>
          </div>
        }
        <Alert
          message = {
            Math.random() > 0.5 ? '跟我默念 ... LXG 万岁 !!!' : Math.random() > 0.5 ? '别看了,看了也不会,回家种地去吧' : '能看懂吗 ? '
          }
          type="info"
          style = {{ ...showAlert , width: '300px',position: 'absolute',zIndex: 2,left: '50%',transform: 'translateX(-50%)' }}
        />
        {
          showHeaderFlag && <Header className="app-header">
            <Row>
              <Col span = { 2 }>
                <img
                  onClick = { () => showAlert.display && (setAlert({ display: '' }) || setTimeout(() => setAlert({ display: 'none' }),3000))}
                  alt = 'noImg' 
                  style = {{ height: '64px', width: '64px',borderRadius: '50%' }}
                  src = { logo }/>
              </Col>
              <Col span = { 18 }>
                <Menu 
                  mode="horizontal" 
                  defaultSelectedKeys={[props.history.location.pathname]}
                  className = 'headMenu'>
                  {
                    routerMap.map(item => {
                      return (
                        <Menu.Item     
                          key = { item.path }
                          onClick = { _ => toSomeWhere(item.path) }>
                            { item.desc }
                        </Menu.Item>
                      )
                    })   
                  }
                </Menu>
              </Col>
              <Col span = { 4 }>
                <Search 
                  className = 'searchInput'
                  placeholder="输入感兴趣的文章"
                />
              </Col>
            </Row>
          </Header>
        }
        <Content>
          {
            routerMap.map(route => {
              return (
                <React.Fragment key = { route.name }>
                  <Switch>
                    <Route
                      name = { route.component }
                      component = { route.component } 
                      path = { route.path }/>
                  </Switch>
                </React.Fragment>
              )
            })
          }
        </Content>
      </Layout>
  );
}

export default connect(
  state => ({...state}),{
    setLoading,
    setLoadingAsync,
    routerPush
  }
)(withRouter(App))
