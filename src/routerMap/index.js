import { Index } from "../view/Index"
import Api from "../view/api"
import Doc from "../view/doc"
import Golang from '../view/golang'
import Jsbase from '../view/jsbase'

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
    desc: 'JavaScript手册'
  },
  {
    name: 'doc',
    path: '/doc',
    component: Doc,
    desc: '技术文档和杂文'
  },
  {
    name: 'jsbase',
    path: '/jsbase',
    component: Jsbase,
    desc: 'JavaScript入门'
  },
  {
    name: 'golang',
    path: '/golang',
    component: Golang,
    desc: 'GO语言手册'
  }
]