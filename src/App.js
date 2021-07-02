import './App.css';
import { Route,Switch,withRouter,Link } from 'react-router-dom'
import { routerMap } from './routerMap/index'
import { Layout, Menu, Row, Col } from 'antd';
import logo from './images/logo.jpeg'
import { useState  } from 'react'
const { Header, Content } = Layout;

function App(props) {
  const [ showHeaderFlag, setHeaderFlag ] = useState(true)
  const toSomeWhere = (path) => {
    props.history.push(path)
    setHeaderFlag(path.indexOf('index') === -1)
  }
  return (  
      <Layout className="layout">
        {
          showHeaderFlag && <Header className="app-header">
            <Row>
              <Col span = { 2 }>
                <img
                  alt = 'noImg' 
                  style = {{ height: '64px', width: '64px' }}
                  src = { logo }/>
              </Col>
              <Col span = { 22 }>
                <Menu 
                  mode="horizontal" 
                  defaultSelectedKeys={['index']} 
                  className = 'headMenu'>
                  {
                    routerMap.map(item => {
                      return (
                        <Menu.Item 
                          key = { item.name }
                          onClick = { _ => toSomeWhere(item.path) }
                          >{ item.desc }
                        </Menu.Item>
                      )
                    })   
                  }
                </Menu>
              </Col>
            </Row>
          </Header>
        }
        <Content>
          {
            routerMap.map(route => {
              return (
                <Switch key = { route.name }>
                  <Route
                    name = { route.component }
                    component = { route.component } 
                    path = { route.path }/>
                </Switch>
              )
            })
          }
        </Content>
      </Layout>
  );
}

export default withRouter(App);
