import { Index } from "../view/Index"
import Api from "../view/api"
import Doc from "../view/doc"


export const routerMap = [
  {
    name: 'index',
    path: '/index',
    component: Index,
    desc: '首页'
  },
  {
    name: 'api',
    path: '/api',
    component: Api,
    desc: 'JavaScriptApi手册'
  },
  {
    name: 'doc',
    path: '/doc',
    component: Doc,
    desc: '技术相关文档'
  }
]