export const apiDocs = {
  forEach: [
    { type: 'title',text: 'Array.prototype.forEach', name: 'Array.prototype.forEach', elementId: 'forEachtitle'},
    { elementId: 'forEachDesc',type: 'desc',name: '描述',text: '数组原型上的方法, 迭代数组每一项, 操作原数组.本质上将目标数组进行遍历, 每次循环将所传回调执行一次. 循环一旦执行,使用正常方式无法中断' },
    { type: 'table',
      elementId: 'forEachTable',
      name: '参数列表',
      columns: [
        {
          title: '参数',
          dataIndex: 'arg',
          key: 'arg',
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '是否必须',
          dataIndex: 'isMust',
          key: 'isMust',
        },
        {
          title: '说明',
          dataIndex: 'explain',
          key: 'explain',
        },
      ],
      dataSource :[
        {
          arg: 'item',
          type: 'any',
          key: '0',
          isMust: 'true',
          explain: '可以获取到每次迭代时候的循环当前项',
        },
        {
          arg: 'index',
          type: 'number',
          isMust: 'false',
          key: '1',
          explain: '获取到当前循环次的索引值',
        },
        {
          arg: 'array',
          type: 'array',
          key: '2',
          isMust: 'false',
          explain: '获取到当前操作的数组本身',
        },
      ]
    },
    {
      name: '代码实现',
      elementId: 'mapCode',
      type: 'code',
      code: "```javascript\n"+
      "Array.prototype._forEach = function (callback) {\n"+
      "  for(let i = 0; i < this.length ; i++) {\n"+
      "    callback(this[i], i, this)\n"+
      "  }\n"+
      "}\n"+
      "```\n"+

      "- 其实很简单 , 数组在数组的原型上扩展 一个 `forEach` 方法 , 这个方法接收一个回调\n"+
      "- 循环这个数组, 因为这个方法挂在了数组的原型上, 必然是通过数组才能调用的,因此此处指向调用它的数组实例\n"+
      "  - 每次循环调用一个回调,并且把 `item index array`作为参数\n"+
      "  - 这个回调通过这个参数进行了对原数组的操作\n"
    },
    {
      name: 'Tips',
      elementId: 'forEachTips',
      type: 'tips',
      code: "* `forEach` 属于高阶函数, 相当于是迭代目标数组,每次循环时候将我们传入的回调执行一次, 因此使用 `return` 并不能终止 整个 `forEach`,他终止的是本次循环本应执行的回调\n"+
      "* 可 手动 抛出一个异常 , 搭配 `try catch` ,可以手动退出 `forEach`, 如下为改良版 `forEach` \n"+
      "```javascript\n"+
      "Array.prototype._forEach = function (cb) {\n"+
      "    const stop = val => {\n"+
      "      throw val\n"+
      "    }\n"+
      "    try {\n"+
      "      for (let i = 0 ; i < this.length ; i ++) {\n"+
      "        // 多传递一个参数, 是一个函数 , 用于终止 forEach\n"+
      "        // 这个参数调用时候会手动抛出一个错误\n"+
      "        // js代码执行遇到错误,会停止执行,如果外部被 try catch 包住, 会进入 catch 语句块\n"+
      "        // 借助这个特性我们可以实现 return\n"+
      "        cb(this[i],i,this,stop)\n"+
      "      }\n"+
      "    } catch (val) {\n"+
      "      return val\n"+
      "    } \n"+
      "}\n"+
      "[12,22,33,4]._forEach((item,i,arr,stop) => i == 2 && stop(item))\n"+
      "// 33\n"+
      "```\n" +
      "* 可搭配 `Object.keys(someObject)`,对 `Object` 数据类型进行迭代\n"+
      "  ```javascript\n"+
      "  let obj = {\n"+
      "  	a: 1,\n"+
      "  	b: 2,\n"+
      "  	c: 3\n"+
      "  }\n"+
      "  Object.keys(obj).forEach(item => alert(item))\n"+
      "  ```\n"
    }
  ],
  map: [
    { type: 'title',text: 'Array.prototype.map', name: 'Array.prototype.map', elementId: 'maptitle'},
    { elementId: 'mapDesc',type: 'desc',name: '描述',text: '数组原型上的方法, ES6 提出提出的最重要的声明式 api 之一 .之所以这么说是因为 map 是一个纯函数( 函数式概念,会在其他文档里详细说明 ), 能够在不改变原数组的前提下, 根据原数组映射( 注意这个词是 “ 映射 ”  ) . 在 React 开发中,我们会大量使用这个 api .' },
    { type: 'table',
      elementId: 'mapTable',
      name: '参数列表',
      columns: [
        {
          title: '参数',
          dataIndex: 'arg',
          key: 'arg',
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '是否必须',
          dataIndex: 'isMust',
          key: 'isMust',
        },
        {
          title: '说明',
          dataIndex: 'explain',
          key: 'explain',
        },
      ],
      dataSource :[
        {
          arg: 'item',
          type: 'any',
          isMust: 'true',
          key: '0',
          explain: '可以获取到每次迭代时候的循环当前项',
        },
        {
          arg: 'index',
          type: 'number',
          isMust: 'false',
          key: '1',
          explain: '获取到当前循环次的索引值',
        },
        {
          arg: 'array',
          type: 'array',
          key: '2',
          isMust: 'false',
          explain: '获取到当前操作的数组本身',
        },
      ]
    },
    {
      name: '代码实现',
      elementId: 'mapCode',
      type: 'code',
      code: "```javascript\n"+
      "Array.prototype._map = function (callback) {\n"+
      "   let res = [] \n"+
      "   for(let index = 0 ; index < this.length ; index ++) { \n"+
      "     res.push(callback(this[index], index , this))\n"+
      "   }\n"+
      "   return res\n"+
      "}\n"+
      "```\n"+
      
      "* 你传进 `map` 里的回调必须是一个有返回值的函数\n"+
      "* 声明一个空数组 res\n"+
      "  * 遍历数组, 将每一项的 内容、索引、以及数组 本身依次传给回调 , 将回调的执行结果依次 推进 空数组里\n"+
      "  * 最终返回 res 数组 ,就是一个根据 旧数组 映射而成的新数组\n"
    },
    {
      name: 'Tips',
      elementId: 'mapTips',
      type: 'tips',
      code: 
      "* `map` 这个高阶函数 , 相当于是在每次循环时候利用 你所传 *回调* 的执行结果来映射旧 `list`的\n"+
      "  * 请确保你所传的是一个有返回值的函数\n"+
      "* 通过`map`的第三个参数可以获取旧数组本身, 当然可以在函数执行过程中进行修改 , 但这是一个很危险的行为\n"+
      "  *  实际上 `map`函数的使用初衷是保持原数据不变, 映射出一个新数据\n"+
      "  * 在使用 `map` 时尽量保证调用过程是无 *副作用* ( 不对外部状态产生影响,执行结果也不该受外部状态影响 ) 的\n"+
      "  * 如果确实要修改原数组 , 在语义上讲更推荐 使用 `forEach` \n"+
      "* 让自己的代码更加 *精简* 、更加 *高级*、更加 *声明式* \n"+
      "  * 其中之一就是 多多使用一些 *声明式 api* 来代替之前的控制流语句 (`if else for switch while`) 等\n"+
      "    * 比如 `map`, `filter`,`reduce`,`some`,`every`,`find`等等\n"
    }
  ]
}