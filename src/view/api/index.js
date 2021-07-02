import React, { useEffect,useState } from 'react'
import { Steps, Card, Layout, Row, Col, Menu, Space } from 'antd'
import { apis } from '../../staticMap/apis'
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import styles from  './index.less';

const { Step } = Steps
const { SubMenu } = Menu;
const $ = content => document.querySelector(content)
console.log(styles, 434)
function beforNumber(code) {
  if (!code.trim()) {
    return code;
  }
  const list = code.split('\n');
  const spanList = ['<span aria-hidden="true" line-row>'];
  list.forEach(() => {
    spanList.push('<span></span>');
  });
  spanList.push('</span>');
  list.push(spanList.join(''));
  return list.join('\n');
}

function Markdown({ content }) {
  const [html, setHtml] = useState();
  useEffect(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      smartLists: true,
      smartypants: false,
      highlight(code) {
        return beforNumber(hljs.highlightAuto(code).value);
      },
    });

    setHtml(content ? marked(content) : null);
  }, [content]);

  return (
    <div className = { styles.content }>
      <div
        id="content"
        className="article-detail"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}
export default function Api() {
  const [ contentMinHeight, setHeight ] = useState(0)
  useEffect(() => {
    setHeight($('body').clientHeight - $('.app-header').clientHeight - 20)
  }, [])
  return (
    <React.Fragment>
      <div style = {{ height: '20px' }}></div>
      <Layout style={{ minHeight: contentMinHeight + 'px' }}>
        <Row style={{ height: '100%' }}>
          <Col span={4}>
            <Menu
              defaultSelectedKeys={['array']}
              defaultOpenKeys={['array']}
              mode="inline">
              {
                apis.map(api => {
                  return (
                    <SubMenu
                      key={ api.name }
                      title={ api.name }>
                      {
                        api.items.map(item => {
                          return (
                            <Menu.Item key = { item }>
                              {item}
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
          <Col span={1}></Col>
          <Col span={14}>
            <Card stlye={{ height: '100%' }}>
              <Markdown content = {
                'let a = 2\n' +
                'a = 5\n'
              }> </Markdown>
              <Steps direction="vertical" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </Card>
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  )
}