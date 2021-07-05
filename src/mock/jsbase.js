export const jsbase = [
  {
    name: '前言',
    id: 'frontMsg',
    markdown: "##### 前言\n"+
    "*这些文档大多数写于我参与工作之前 , 讲述的内容很浅显 , 适合刚入门的新手看*\n"+
    "\n"+
    "*说实话,现在再来看这些东西会感觉很low*\n" +
    "\n"+
    "*但是呢, 帮你拿个万把块的工资没啥问题*\n" +
    "\n"+
    "*想要更多你就得研究些深的了*\n"+
    "\n"+
    "*要是你都工作一两年还看起来很费劲, 那你也确实够菜的了, 别看了,回家种地吧 !*"
  },
  {
    name: 'let和for循环',
    id: 'letAndFor',
    markdown: "##### let和for循环\n"+

    "* 创建一个`for`循环,假如我们用`var`\n"+
    
    "  * 循环变量`i`,,每次`i++`\n"+
    
    "  * 循环条件`i<3`\n"+
    
    "  * 循环体,设置一定定时器,打印`i`的值\n"+
    
    "    ```javascript\n"+
    "    for(var i=0;i<3;i++){\n"+
    "      setTimeout(function(){\n"+
    "        console.log(i)\n"+
    "      },50)\n"+
    "    }\n"+
    "    //3 \n"+
    "    //3\n"+
    "    //3\n"+
    "    ```\n"+
    
    "* 我们发现结果是三个`3`\n"+
    
    "* ?\n"+
    
    "  * 分析一下代码的执行过程\n"+
    "    * 在`js`中,定时器里面的回调函数是异步执行的\n"+
    "      * 异步事件会放在事件队列中\n"+
    "      * 等待主程序全部执行完毕了\n"+
    "      * 才会去执行\n"+
    "      * 所以说\n"+
    "        * 即便定时器的时间是`0`,这个函数也不是立刻执行的\n"+
    "    * 而`for`循环是主程序内容,会先执行\n"+
    "    * 每次遇到设置定时器,都会将其中的回调函数放在事件队列中等待执行\n"+
    "    * `for`循环执行完毕了,此时的`i`已经是`3`了\n"+
    "    * 这个时候,定时器里面的回调函数执行,访问变量`i`,然而此时只有一个全局的`i为3`,打印出来全部都是`3`\n"+
    
    "* 但是,假如我们使用`let`代替`var`,结果就会有大不同\n"+
    
    "  ```javascript\n"+
    "  for(let i=0;i<3;i++){\n"+
    "    setTimeout(function(){\n"+
    "      console.log(i)\n"+
    "    },50)\n"+
    "  }\n"+
    "  //0\n"+
    "  //1\n"+
    "  //2\n"+
    "  ```\n"+
    
    "  * `let`的本身相当于匿名函数自调用\n"+
    
    "  * `let`遇到`for`循环后,会和`for`循环形成闭包\n"+
    
    "    * 这一点跟`var`很不同,`var`在`for`循环里,会不断刷新循环变量的值\n"+
    
    "    * 准确来说\n"+
    
    "      * let把每次循环变量`i`以及循环体都封装进一个闭包里面\n"+
    
    "        * 把循环体封装进匿名函数自调用里面\n"+
    "        * 然后把本次循环变量`i`,当做参数传进来\n"+
    
    "      * 所以实际上,这段代码的执行过程其实就相当于\n"+
    
    "        ```javascript\n"+
    "        for(var i=0;i<3;i++){\n"+
    "        	(function(i){\n"+
    "        		setTimeout(function(){\n"+
    "            console.log(i)\n"+
    "          },50)\n"+
    "        	})(i)\n"+
    "        }\n"+
    "        //0\n"+
    "        //1\n"+
    "        //2\n"+
    "        ```\n"+
    
    "      * 所以当我们的主程序执行完毕后,定时器的回调函数使用的`i`都被装进了那次循环形成的闭包中,成为局部变量\n"+
    
    "      * 因为在每次循环生成的闭包里,存在`i`,这个回调函数会直接使用这个`i`\n"+
    
    "      * 因此最终的答案是`0,1,2`\n"+
    
    "* 与之类似的,还有一个经典的问题\n"+
    
    "  * 通过循环,给页面上的5个`button`绑定点击事件,触发后分别打印`0,1,2,3,4`\n"+
    
    "    ```javascript\n"+
    "    <button onclick='fn()'></button>\n"+
    "    <button onclick='fn()'></button>\n"+
    "    <button onclick='fn()'></button>\n"+
    "    <button onclick='fn()'></button>\n"+
    "    <button onclick='fn()'></button>\n"+
    "    \n"+
    "    \n"+
    "    var btns=document.querySelectorAll('button')\n"+
    "    for(var i=0;i<btns.length;i++){\n"+
    "      btns[i].onclick=function(){\n"+
    "        console.log(i)\n"+
    "      }\n"+
    "    }\n"+
    "    ```\n"+
    
    "    - 原理类似,如果我们使用`var`创建这个循环\n"+
    
    "    - 每次循环,都会为当前`btn`绑定事件,但是因为这个事件函数还没有得到触发,因此根本不会管函数体里的内容\n"+
    
    "    - 实际上,`for`循环生成的`i`,是一个全局变量,在循环外的全局都能访问得到\n"+
    
    "    - `for`循环会瞬间完成,此时循环变量`i`已经是5\n"+
    
    "      \n"+
    
    "    - `button`触发事件函数访问的是全局变量`i`,因此5个`button`打印结果都是5\n"+
    
    "  * 但是,如果我们通过匿名函数或者`let`的方式来改造这个循环,就能得到`1,2,3,4`\n"+
    
    "    ```javascript\n"+
    "    var btns=document.querySelectorAll('button')\n"+
    "    for(let i=0;i<btns.length;i++){\n"+
    "      btns[i].onclick=function(){\n"+
    "        console.log(i)\n"+
    "      }\n"+
    "    }\n"+
    "    ```\n"+
    
    "    * 分析一下原理\n"+
    "      * let相当于匿名函数自调用,会把每次的循环体和循环变量都装进来,形成闭包\n"+
    "      * 因为在每次循环生成的闭包里,存在`i`,这个点击事件函数会直接使用这个`i`来进行打印\n"+
    
    "* 除此以外,`let`的其他特性\n"+
    "  * 不会声明提前\n"+
    "  * 块级作用域,形成声明死区\n"+
    "  * 和`var`一样可以只声明,不赋值,且可以重复赋值\n"+
    "  * 但是`let`不可反复声明,已经用`let`声明的变量,不可再次声明\n"+
    
    "* 与`let`同时提出的`const`的特性\n"+
    "  * 不会声明提前\n"+
    "  * 声明时必须进行初始化(也就是说必须赋值)\n"+
    "  * `const`,声明的是常量,所谓常量一经声明就不可以发生变化\n"+
    "    * 不可再次声明\n"+
    "    * 不可再次赋值\n"+
    "  * 习惯上,常量名大写\n"
  },{
    name: '对象的深浅拷贝',
    id: 'copyAndDeepCopy',
    markdown: "##### 对象的深浅拷贝\n"+

    "* 何时\n"+
    
    "  * 有时候我们需要创建一个引用类型对象的副本\n"+
    "  * 二者结构应完全相同\n"+
    "  * 副本和原件相互独立,改动其中之一时,另一个不受影响\n"+
    
    "* 难点\n"+
    
    "  * 在`js`中原始类型赋值按值传递,但是引用类型赋值是**按其在内存里的地址**传递的\n"+
    
    "    * 所以直接赋值的话,不叫拷贝\n"+
    "    * 因为这样的话,二者指向同一个地址\n"+
    "    * 只要二者其一发生改变,另一个也会跟着变\n"+
    "    * 比如\n"+
    
    "    ```javascript\n"+
    "    let obj={\n"+
    "      uname:'tom'\n"+
    "      age:4\n"+
    "    }\n"+
    "    let obj2=obj\n"+
    "    obj2.age=3\n"+
    "    console.log(obj)  //uname:'tom' age:3\n"+
    "    ```\n"+
    
    "    * 实际上`obj`和`obj2`只不过都是同一个内存地址的**两个别名**罢了\n"+
    
    "  * 因此不能采用这个方式进行拷贝\n"+
    
    "* 浅拷贝\n"+
    
    "  * 适用于那种简单的对象,也就是每一项都是原始类型,不涉及到数组或对象嵌套的那种\n"+
    
    "  * 遍历对象,把对象的每一项,交给一个新对象\n"+
    
    "    ```javascript\n"+
    "    let obj={\n"+
    "      uname:'tom',\n"+
    "      age:4\n"+
    "    }\n"+
    "    let obj2={}\n"+
    "    for(let key in obj){\n"+
    "      obj2[key]=obj[key]\n"+
    "    }\n"+
    "    obj2.age=3\n"+
    "    console.log(obj) //{uname: 'tom', age: 4}\n"+
    "    ```\n"+
    
    "    * 拷贝成功,此时两者其一修改了,另一方不会受到影响\n"+
    
    "    * 但是,这样依旧存在问题\n"+
    
    "      * 但是如果我们拷贝的对象是包含 **数组或者对象嵌套** 的复杂对象的话,这个方法就不管用了\n"+
    "      * 因为即使是**对象** 内层的 **子对象** 也是一个引用类型 ,采用`obj2[key]=obj[key]`这种赋值的方式,依旧会导致二者互相影响\n"+
    "      * 比如,浅拷贝之后修改`obj2`的某个子对象后`obj`本身也会受到影响\n"+
    
    "      ```javascript\n"+
    "      let obj={\n"+
    "        uname:'tom',\n"+
    "       	msg:{\n"+
    "          age:4,\n"+
    "          gender:0\n"+
    "        }\n"+
    "      }\n"+
    "      let obj2={}\n"+
    "      for(let key in obj){\n"+
    "        obj2[key]=obj[key]\n"+
    "      }\n"+
    "      obj2.msg.age=3\n"+
    "      console.log(obj)  //uname: 'tom'  msg: {age: 3, gender: 0}\n"+
    "      ```\n"+
    
    "    * 所以,只要对象的某个属性还是一个 **引用类型** 的话,就需要使用 **深拷贝**\n"+
    
    "* 深拷贝\n"+
    
    "  * 何时 : 如果对象的某个属性还是 **引用类型** 时,**浅拷贝**显然已经无法满足需求,需要采用**深拷贝**的方式\n"+
    
    "  * 原理\n"+
    
    "    * 和浅拷贝类似\n"+
    
    "    * 只是多了一个环节\n"+
    
    "      * 判断对象每个属性是引用类型还是原始类型\n"+
    
    "        * 原始类型直接赋值,按值传递\n"+
    "        * 引用类型就 **递归** 调用这个方法\n"+
    
    "        \n"+
    
    "        ```javascript\n"+
    "        let obj={\n"+
    "          uname:'tom',\n"+
    "         	msg:{\n"+
    "            age:4,\n"+
    "            gender:0\n"+
    "          }\n"+
    "        }\n"+
    "        \n"+
    "        function clone(obj){\n"+
    "          var obj2={}\n"+
    "          for(var key in obj){\n"+
    "            if(typeof(obj[key])!=='object'){\n"+
    "              obj2[key]=obj[key]\n"+
    "            }else{\n"+
    "              obj2[key]=clone(obj[key])\n"+
    "            }\n"+
    "          }\n"+
    "          return obj2\n"+
    "        }\n"+
    "        var obj2=clone(obj)\n"+
    "        obj2.msg.age=2\n"+
    "        console.log(obj)\n"+
    "        ```\n"+
    
    "        * 但是,单单做到这样是不够的\n"+
    
    "          * 数组也是**引用类型**,但是数组不应该通过`for in`的形式进行遍历,否则不能达成我们的效果\n"+
    "          * 可能会遇到`null`等情况\n"+
    
    "        * 所以在执行之前还需进行一步判断\n"+
    
    "          * 如果是数组,则调用克隆数组的方式\n"+
    
    "            ```javascript\n"+
    "            {}.toString.call(要判断的内容)  //可判断传入内容的类型\n"+
    "            ```\n"+
    
    "          * 如果是`null`,直接`return null`\n"+
    
    "            ```javascript\n"+
    "            let obj={\n"+
    "              uname:'tom',\n"+
    "              family:[2,3,5],\n"+
    "             	msg:{\n"+
    "                age:4,\n"+
    "                gender:0\n"+
    "              }\n"+
    "            }\n"+
    "            \n"+
    "            function clone(obj){\n"+
    "              if(obj==null){\n"+
    "                return null\n"+
    "              }\n"+
    "              if({}.toString.call(obj)=='[Object Array]'){\n"+
    "                return obj.slice()  //slice不写参数代表从开头到最后\n"+
    "              }\n"+
    "              var obj2={}\n"+
    "              for(var key in obj){\n"+
    "                if(typeof(obj[key])!=='object'){\n"+
    "                  obj2[key]=obj[key]\n"+
    "                }else{\n"+
    "                  obj2[key]=clone(obj[key])\n"+
    "                }\n"+
    "              }\n"+
    "              return obj2\n"+
    "            }\n"+
    "            var obj2=clone(obj)\n"+
    "            obj2.msg.age=2\n"+
    "            obj2.family[2]='232'\n"+
    "            console.log(obj)\n"+
    "            ```\n"+
    
    "  * 这种深拷贝采用 **递归** 方式达成条件\n"+
    
    "  * 但是递归比较消耗性能,对于涉及多层嵌套的对象,可能会导致**栈溢出**的问题\n"+
    
    "  * 了解\n"+
    
    "    * 沙雕网友的写法,过程比较复杂,原理是用循环来写\n"+
    
    "      ```javascript\n"+
    "      function cloneForce(x) {\n"+
    "        //拷贝对象记录\n"+
    "        const uniqueList = []; \n"+
    "       \n"+
    "        let root = {};\n"+
    "       \n"+
    "        // 循环数组\n"+
    "        const loopList = [{\n"+
    "          parent: root,\n"+
    "          key: undefined,\n"+
    "          data: x,\n"+
    "        }];\n"+
    "       \n"+
    "        while (loopList.length) {\n"+
    "          //深拷贝，元素出栈\n"+
    "          const node = loopList.pop();\n"+
    "          const parent = node.parent;\n"+
    "          const key = node.key;\n"+
    "          const data = node.data;\n"+
    "       \n"+
    "          let res = parent;\n"+
    "          if (typeof key !== 'undefined') {\n"+
    "            res = parent[key] = {};\n"+
    "          }\n"+
    "       \n"+
    "          // 判断数据是否存在\n"+
    "          let uniqueData = find(uniqueList, data);、\n"+
    "          //数据存在\n"+
    "          if (uniqueData) {\n"+
    "            parent[key] = uniqueData.target;\n"+
    "            break; // 中断本次循环\n"+
    "          }\n"+
    "       \n"+
    "          //数据不存在，将其放入数组\n"+
    "          uniqueList.push({\n"+
    "            source: data,\n"+
    "            target: res,\n"+
    "          });\n"+
    "       \n"+
    "          for (let k in data) {\n"+
    "            if (data.hasOwnProperty(k)) {\n"+
    "              if (typeof data[k] === 'object') {\n"+
    "                // 下一次循环\n"+
    "                loopList.push({\n"+
    "                  parent: res,\n"+
    "                  key: k,\n"+
    "                  data: data[k],\n"+
    "                });\n"+
    "              } else {\n"+
    "                res[k] = data[k];\n"+
    "              }\n"+
    "            }\n"+
    "          }\n"+
    "        }\n"+
    "       \n"+
    "        return root;\n"+
    "      }\n"+
    "       \n"+
    "      function find(arr, item) {\n"+
    "        for (let i = 0; i < arr.length; i++) {\n"+
    "          if (arr[i].source === item) {\n"+
    "            return arr[i];\n"+
    "          }\n"+
    "        }\n"+
    "       \n"+
    "        return null;\n"+
    "      }\n"+
    "      \n"+
    "      ```\n"+
    
    "  * 如果是数组的拷贝\n"+
    
    "    * 其实更简单\n"+
    "    * 上面提到过,使用`slice()`进行切割,会返回一个全新地址的新数组\n"+
    "    * 深拷贝的话,判断数组的内容,再执行响应的操作即可\n"
  },{
    name: '数组降维',
    id: 'arrayFlat',
    markdown: "##### 数组的扁平化(降维)\n"+

    "* 存在一个多维嵌套的数组,把这个数组打散为一维数组\n"+
    
    "* 最简单办法\n"+
    
    "  * `toString()`方法\n"+
    
    "    * `toString`对数组使用,会把数组打散为一维数组字符串\n"+
    "    * 然后再使用`split`把这个字符串改为数组即可\n"+
    
    "    ```javascript\n"+
    "    let arr=[1,2,3,[4,5,[6,7]],8,9]\n"+
    "    let newArr=arr.toString().split(',')\n"+
    "    console.log(newArr)\n"+
    "    ```\n"+
    
    "    * 但是得到的是一个字符数组\n"+
    "      * 虽然可以遍历每一项将其转为`Number`\n"+
    "      * 但是原数组如果是 **普通数字** 和 **字符数字** 混用的话, 我们将其`toString()`后就无从判断了\n"+
    
    "* ES6办法\n"+
    
    "  * `ES6`有提供专门用于处理数组降维的`api`\n"+
    
    "    ```javascript\n"+
    "    arr.flat('数组深度')\n"+
    "    ```\n"+
    
    "    * 假如数组是三维数组,深度就写`2`,以此类推\n"+
    
    "    * 如果不知道深度多少,或者懒得自己算了,直接写`Infinity`\n"+
    
    "      ```javascript\n"+
    "      let arr=[1,2,3,[4,5,[6,7]],8,9].flat(Infinity)\n"+
    "      ```\n"+
    
    "* 最经典、最传统办法 ( 其实就是手写flat方法 )\n"+
    
    "  * 原理\n"+
    
    "    * 声明一个新数组\n"+
    "    * 写一个方法\n"+
    "      * 遍历原数组的每一项\n"+
    "      * 如果不是数组,直接放进新数组里\n"+
    "      * 如果是数组,就对这个子数组 **递归 **地调用这个方法,直到不是数组为止\n"+
    
    "    ```javascript\n"+
    "    let arr=[1,2,3,[4,5,[6,7]],8,9],arr2=[]\n"+
    "    function myFlat(arr){\n"+
    "      arr.forEach(item=>{\n"+
    "        ({}.toString).call(item)=='[object Array]'?myFlat(item):arr2.push(item)\n"+
    "      })\n"+
    "    }\n"+
    "    myFlat(arr)\n"+
    "    console.log(arr2)\n"+
    "    ```\n"+
    
    "* 其他方法\n"+
    
    "  * 使用`some`配合`isArray`方法\n"+
    
    "  * 原理和上面类似\n"+
    
    "    * 遍历数组\n"+
    "    * 只要该数组的某个元素还是数组\n"+
    "    * 就对当前数组展开一次\n"+
    "      * `...arr`会把`arr`数组进行打散\n"+
    "      * `[]+...arr` 会把`arr`打散的新数组拼接为一个新数组\n"+
    
    "    ```javascript\n"+
    "    let arr=[1,2,3,[4,5,[6,7]],8,9]\n"+
    "    while(arr.some(item=>Array.isArray(item))){\n"+
    "      arr=[].concat(...arr)\n"+
    "    }\n"+
    "    console.log(arr)\n"+
    "    ```\n"    
  },{
    name: '模拟 vue 的双向绑定',
    id: 'vue_model',
    markdown:  "##### 模拟实现Vue的双向绑定\n"+
    
    "* vue数据绑定原理\n"+
    
    "  * 改造`data`中对象的属性,并且保护每个属性\n"+
    
    "    * 将`data`中的数据隐姓埋名半隐藏\n"+
    "    * 为每个属性提供一对`get`,`set`方法进来属性保护\n"+
    
    "    ```javascript\n"+
    "    //改造data\n"+
    "    var data={\n"+
    "      uname:'tom',\n"+
    "      upwd:'123456',\n"+
    "      gender:0\n"+
    "    }\n"+
    "    //拿到data中的所有的key值\n"+
    "    var keys=Object.keys(data)\n"+
    "    //此时要使用let 或者自己封装一个匿名函数,用var会不断刷新key的值\n"+
    "    for(var key in keys){\n"+
    "      ~function(key){\n"+
    "        Object.defineProperties(data,{\n"+
    "        //动态生成的属性名,要写在[]里,直接拼接字符串是不能用的\n"+
    "        [`_`+key]:{\n"+
    "          value:data[key],\n"+
    "          writable:true,\n"+
    "          enumerable:false\n"+
    "        },\n"+
    "        [key]:{\n"+
    "          get(){return this[`_`+key]},\n"+
    "          set(value){\n"+
    "            this[`_`+key]=value\n"+
    // eslint-disable-next-line no-template-curly-in-string
    "            console.log(`${key}的属性值变了`)\n"+
    "            //只要发生变化,就自动调用这个change()方法\n"+
    "            change(key)\n"+
    "          }\n"+
    "        },\n"+
    "        enumerable:true\n"+
    "      })\n"+
    "      }(key)\n"+
    "    }\n"+
    "    //将我们的数据密封起来\n"+
    "    Object.seal(data)\n"+
    "    console.log(data)\n"+
    "    ```\n"+
    
    "    \n"+
    
    "  * 扫描真实`DOM`树,把有`{{}}`的地方和`data`中的数据对应,构建`虚拟DOM`树\n"+
    
    "    * 构建虚拟`DOM`树,并完成首次绑定内容\n"+
    "    * 准备数组保存所有可能变化的元素\n"+
    "    * 扫描父元素下是否还有其他子元素\n"+
    "    * 如果有,就递归执行这个方法\n"+
    "    * 否则,就说明当前元素只有内容,并没有嵌套其他的元素节点\n"+
    "    * 每遍历一次,就用当前元素的内容和`data`中的属性名比较\n"+
    "    * 如果`data`中有这个内容,才有必要将这个元素添加到虚拟`DOM`树的数组里\n"+
    "      * 虚拟`DOM`中的每个元素,不但要记录`DOM`的地址\n"+
    "      * 还要记录这个`DOM`元素哪个属性发生了变化,打算变成哪个变量的值\n"+
    
    "    ```javascript\n"+
    "    var arr=[]\n"+
    "    function getChildren(parent){\n"+
    "      var children=parent.children\n"+
    "      for(var child of children){\n"+
    "        if(child.children.length>c){\n"+
    "          arguments.callee(child)\n"+
    "        }else{\n"+
    "          for(var key of keys){\n"+
    // eslint-disable-next-line no-template-curly-in-string
    "            if(child.innerHTML==`{{${key}}}`)\n"+
    "              arr.push({\n"+
    "                elem:child,\n"+
    "                innerHTML:child.innerHTML\n"+
    "              })\n"+
    "          }\n"+
    "        }\n"+
    "      }\n"+
    "    }\n"+
    "    getChildren(document.body)\n"+
    "    ```\n"+
    
    "    * 除此以外,还需要根据本次变化的属性,查找`虚拟DOM`中受到影响的节点,更新真实`DOM`树中该节点的内容\n"+
    "      * 每次调用`set`函数时候,触发这个方法\n"+
    "      * 判断在不在虚拟`DOM树`上\n"+
    "      * 为对应的真实`DOM`更新值\n"+
    
    "    ```javascript\n"+
    "    function change(){\n"+
    "      for(var obj of arr){\n"+
    // eslint-disable-next-line no-template-curly-in-string
    "        if(obj.innerHTMl==`{{${key}}}`){\n"+
    "          obj.elem.innerHTML=data[key]\n"+
    "        }\n"+
    "      }\n"+
    "    }\n"+
    "    ```\n"+
    
    "  \n"+
    
    "  \n"
  },{
    name: '节流和防抖',
    id: "debounce",
    markdown: "##### 节流和防抖\n"+

    "* 防抖\n"+
    
    "  * 是什么\n"+
    
    "    * 事件在`n`秒内连续触发,就不能得到执行的操作\n"+
    
    "  * 原理\n"+
    
    "    * 事件发动时,先不触发函数,而是先读定时器\n"+
    "    * 事件每次触发时,都会不断地刷新重置定时器\n"+
    "    * 因为定时器被不断重置,因此函数也不会得到执行\n"+
    "    * 直到用户停止了操作,在一个定时器的时间后,这个方法就会得到执行\n"+
    
    "  * 何时使用\n"+
    
    "    * 比如一个购物车商品数量的加减按钮，用户修改数量后，这个数据要同步给后台。但是于此同时，如果用户每次点击这个按钮都发送一次请求的话，就没有必要了，这种情况就可以利用这个技术\n"+
    "    * 与上面类似的，假如实现一个类似百度的输入框输入功能，会监控我们的输入行为，每次输入都会根据我们输入的关键词，给予提示但是不能每输一个字就不断地调用这个函数发送请求，所以也要使用这个技术，只有用户暂停输入了，才会发送请求\n"+
    
    "  * 如何\n"+
    
    "    ```javascript\n"+
    "    function fun(){\n"+
    "    	let foo=function(){\n"+
    "    		console.log('防抖')\n"+
    "    	}\n"+
    "    	let timer=null\n"+
    "    	return ~function(){\n"+
    "    	clearTimeout(timer)\n"+
    "    	timer=setTimeout(()=>{\n"+
    "    	foo().call();\n"+
    "    	},2000)\n"+
    "    }()\n"+
    "    }\n"+
    "    ```\n"+
    
    "    * 利用闭包机制,声明一个`timer`来控制定时器\n"+
    "    * 事件每次执行都会先清除定时器\n"+
    "    * 然后再重设这个定时器\n"+
    "    * 如果用户短时间内不断地执行这个函数,定时器就会被不断地**清除和重设**\n"+
    "    * 只有用户停止操作了,经一个定时器单位的时长后,事件可以被触发\n"+
    "    * `call和apply`不但能改变`this`指向跟传参,还能让函数立刻执行\n"+
    "      * 与之相对应的还有`bind`,`bind`是一种函数预处理机制\n"+
    "        * 可以永久替换`this`指向\n"+
    "        * 可以传参\n"+
    "        * 同时不调用这个函数\n"+
    
    "* 节流\n"+
    
    "  * 是什么\n"+
    
    "    * 事件在`n`秒内,只能触发一次,会稀释这个函数的执行频率\n"+
    
    "  * 原理以及使用方法\n"+
    
    "    * 通过闭包保存一个控制函数是否可以执行的状态`bool`变量\n"+
    "    * 第一次时,我们的函数执行完毕,并且把`bool`修改为`false`\n"+
    "    * 此时`bool`会在`3s`内一直都是`false`\n"+
    "    * 期间,我们每次调用这个方法,都会被直接`return`,不会执行\n"+
    "    * 直到`3s`到了,这个`bool`会被重新定义为`true`\n"+
    "    * 此时才可以再次触发这个函数\n"+
    
    "    ```javascript\n"+
    "    function fun(){\n"+
    "    	let foo=function(){\n"+
    "    		console.log('节流')\n"+
    "    	}\n"+
    "    	let bool=true\n"+
    "    	return ~function(){\n"+
    "    		if(!bool)return\n"+
    "    		bool=false\n"+
    "    		timer=setTimeout(()=>{\n"+
    "    		foo().call()\n"+
    "    		bool=true\n"+
    "    		},500)\n"+
    "    		}()\n"+
    "    }\n"+
    "    ```\n"+
    
    "    * 同样,需要使用`call()`,这里并不是为了改变`this`指向,而是单纯让函数立刻执行 \n"
  },{
    name: '满足 a == 1 && a == 2 && a == 3',
    id: 'aEqual1And2And3',
    markdown: "##### 满足a==1&&a==2&&a==3同时成立\n"+

    "* 方法一\n"+
    
    "  * 利用和数值型进行 **比较判断** 时候的原理\n"+
    
    "    * 引用类型和数值型进行比较的时候，会调用其原型上的`toString()`方法，将引用类型先转为字符串，然后再和数字型比较\n"+
    "    * 根据原型链的原理\n"+
    "      * 访问某个对象的成员时,会优先查找这个对象的自有成员\n"+
    "      * 自有成员中没有这个方法,会去自己的原型`__proto__`上面找\n"+
    "      * 如果在没有会沿着原型链,去上级原型上找\n"+
    "      * 以此类推,直至顶层还没有,返回`null`\n"+
    "    * `toString`方法本应在一个对象的原型上,但是如果我们把它写为这个对象的自有方法,那么在尽心调用时,它就会优先访问这个自有方法\n"+
    
    "    ```javascript\n"+
    "    let a={\n"+
    "      a:0,\n"+
    "      toString(){\n"+
    "       return ++this.a\n"+
    "      }\n"+
    "    }\n"+
    "    a==1&&a==2&&a==3\n"+
    "    ```\n"+
    
    "    * 我们来分析一下这段代码的执行过程\n"+
    "      * 首先会判断`a==1`\n"+
    "        * 因为我们的`a`是一个对象,不能直接做比较\n"+
    "        * 会调用`a`的`toSting`\n"+
    "        * 因为我们手写了一个`a`的该方法,有了自有方法,不再会去原型上找默认方法\n"+
    "        * 因此,这次执行结果我们返回了 `0++`,也就是`1`\n"+
    "      * 同理,我们又先后两次调用了`toString`方法\n"+
    "        * 分别返回了`1++,和2++`\n"+
    "      * 因此最终的结果才能为`true`\n"+
    
    "* 与之同理的还有第二个方法\n"+
    
    "  * 与对象同理,数组在和数值类进行比较的时候,也会调用`toString`方法,先转为字符串\n"+
    
    "  * 我们给数组写一个自有方法`toString`,这样调用数组的`toString`时,就会优先使用自有方法\n"+
    
    "    ```javascript\n"+
    "    let a=[1,2,3]\n"+
    "    a.toString=a.shift\n"+
    "    a==1&&a==2&&a==3\n"+
    "    ```\n"+
    
    "    * 数组的`shift`方法是操作原数组,移除数组**首位元素**,并且将删除的那位返回出来\n"+
    
    "    * 基于此,我们分析一下代码的执行过程\n"+
    
    "      * 先会判断`a==1`,调用`toString`,但是因为我们用`shift`方法赋值了`toString`,实际上相当于\n"+
    
    "        ```javascript\n"+
    "        [1,2,3].shift==1\n"+
    "        ```\n"+
    
    "        ```javascript\n"+
    "        //也就是\n"+
    "        '1'==1\n"+
    "        ```\n"+
    
    "      * 之后判断,`a==2和a==3`时候,也是这个原理\n"+
    
    "        ```javascript\n"+
    "        true&&'2'==2\n"+
    "        ```\n"+
    
    "        ```javascript\n"+
    "        true&&true&&'3'==3\n"+
    "        ```\n"+
    
    "      * 因此最终结果是`true`\n"+
    
    "* 我们还可以通过访问器属性来实现这个需求\n"+
    
    "  * 如果我们给一个对象进行`defineProperty`属性保护\n"+
    
    "  * 每次我们访问这个属性时,都会调用其`get`方法\n"+
    
    "  * 每次我们修改这个属性时,都会调用其`set`方法\n"+
    
    "    ```javascript\n"+
    "    Object.defineProperty(window,'a',{\n"+
    "      get(){\n"+
    "        this.value?this.value++:this.value=1\n"+
    "        return this.value\n"+
    "      }\n"+
    "    })\n"+
    "    a==1&&a==2&&a==3\n"+
    "    ```\n"+
    
    "    * 分析这段代码的执行过程\n"+
    "      * 首先因为进行判断的`a`是全局变量,其实也就是`window.a`\n"+
    "      * 所以我们给`window.a`设置属性保护\n"+
    "      * 当我们访问这个`a`时候,触发内置的`get`方法\n"+
    "        * 如果存在`value`值,就让`value++`\n"+
    "        * 不存在,就让`value=1`\n"+
    "        * 把`value`返回出去\n"+
    "      * 我们每次进行比较的时候,都会访问`a`,从而触发访问器属性的`get`方法\n"+
    "        * `get`方法三次分别返回出`1,2,3`\n"+
    "      * 因此结果为`true`\n"
  },{
    name: '作用域',
    id: 'scope',
    markdown: 
    "##### 作用域、作用域链和hoist\n"+

    "* 作用域?\n"+
    "  * 作用域其实就是一个 **变量** 的有效使用范围\n"+
    "  * 分为\n"+
    "    * 函数作用域\n"+
    "      * 函数的私有变量,只能在函数里才能访问得到\n"+
    "      * 函数在调用时,会临时生成**函数作用域对象**,保存这次函数调用里面的**私有变量**\n"+
    "        * 形参\n"+
    "        * 函数内声明的变量\n"+
    "      * 函数访问某个变量时,只要函数作用域对象里有相应的私有变量,就不会沿着作用域链去上层找\n"+
    "      * 函数调用后,本次调用所形成的作用域对象就被销毁,不复存在\n"+
    "      * 每次函数调用形成的作用域对象,互相独立,互不干扰\n"+
    "    * 全局作用域\n"+
    "      * 在全局声明的变量\n"+
    "      * 一次声明,全局可用,随时可用\n"+
    "      * 但是容易出现全局污染\n"+
    "  \n"+
    "* 作用域链\n"+
    "  * 控制当我们访问一个变量时顺序的链状结构\n"+
    "  \n"+
    "  * 在一个函数内\n"+
    "    * 优先访问私有变量,只要有私有变量就不会访问外部的\n"+
    "      * 就一个函数而言,私有变量就是 **在函数内声明** 的变量,以及**形参**\n"+
    "    * 如果没有沿着作用域链往上找\n"+
    "    * 直到找到`window`都没有,返回`undefined`\n"+
    "    \n"+
    "  * 如果在一个函数内,既有形参`a`,又有用`var`声明的变量`a`,究竟用哪个\n"+
    "  \n"+
    "    ```jsx\n"+
    "    var a=5\n"+
    "    function fn(a){\n"+
    "      var a=10;\n"+
    "      a+=20\n"+
    "      console.log(a)\n"+
    "    }\n"+
    "    fn(a)\n"+
    "    console.log(a)\n"+
    "    ```\n"+
    "  \n"+
    "    * 模拟一下这个函数的执行过程\n"+
    "      * 调用函数,并且传入**实参**`5`\n"+
    "        * 原始类型,按值传递,只是用了外部的`a`赋值了函数内部的形参`a`\n"+
    "        * 无论函数内对`a`进行了怎样的操作,都和外部的`a`无关\n"+
    "      * 因为在函数内,已经存在私有变量`a`(形参)\n"+
    "      * 因此`var a`不会生效\n"+
    "        * `js`不会重复声明当前作用域已经存在的变量\n"+
    "      * 但是赋值`a=10`保留\n"+
    "      * 随后`a+=20`\n"+
    "      * 所以最后的答案是`30和5`\n"+
    "  \n"+
    "* 一些例题以及代码分析\n"+

    "  ```jsx\n"+
    "  var b=10\n"+
    "  function fn(){\n"+
    "    b+=1\n"+
    "    var b=100\n"+
    "  }\n"+
    "  fn()\n"+
    "  console.log(b)\n"+
    "  ```\n"+

    "  * 分析一下代码的执行过程\n"+

    "    * 在全局声明变量`b`,声明提前,赋值留在原地\n"+

    "    * 在函数内,`var`声明的变量,会提升到当前作用域最前面,赋值留在原地,函数的执行过程相当于\n"+

    "      ```jsx\n"+
    "      function(){\n"+
    "      	var b   \n"+
    "        b+=1\n"+
    "        b=100\n"+
    "      }\n"+
    "      ```\n"+

    "      * 先是声明一`b`,但是没赋值,所以值是`undefined`\n"+
    "      * `b+=1`,因为在函数作用域内存在`b`私有变量,所以不会使用全局的变量,未定义的值`+1`,是`NaN`\n"+
    "      * 最后给`b`赋值100\n"+
    "      * 从始到终,函数内部的操作都和外部`b`无关,因此外部的值为`10`\n"+

    "  ```jsx\n"+
    "  var c=10\n"+
    "  function fun(c){\n"+
    "    c=100\n"+
    "    c+=1\n"+
    "  }\n"+
    "  fun(c)\n"+
    "  console.log(c)\n"+
    "  ```\n"+

    "  * 分析代码的执行过程\n"+

    "    * 在全局中声明变量`c`,声明提前,赋值留在原地\n"+

    "    * 经声明提前处理后的整个代码\n"+

    "      ```jsx\n"+
    "      var c\n"+
    "      function fun(c){\n"+
    "        c=100\n"+
    "        c+=1\n"+
    "      }\n"+
    "      c=10\n"+
    "      fun(c)\n"+
    "      console.log(c)\n"+
    "      ```\n"+

    "      * 我们将外部全局的`c`传入其中,按值传递,相当于给形参`c`赋值为`10`\n"+
    "      * 在函数内,因为存在私有变量`c`,因此任何操作都和外部的`c`无关\n"+
    "      * 所以外部的`c`最终还是10\n"+
    "\n" +
    "  ```" + 
    " jsx\n"+
    "  function fn(){\n"+
    "    console.log(1)\n"+
    "  }\n"+
    "  fn()\n"+
    "  \n"+
    "  \n"+
    "  function fn(){\n"+
    "    console.log(2)\n"+
    "  }\n"+
    "  fn()\n"+
    "  \n"+
    "  \n"+
    "  var fn=100\n"+
    "  fn()\n"+
    "  ```\n"+

    "  * 分析这段代码的执行过程\n"+

    "    * 函数声明和`var`声明都会在编译时提升到作用域最前面\n"+
    "    * 于是这段代码其实相当于\n"+

    "    ```jsx\n"+
    "    function fn(){\n"+
    "      console.log(1)\n"+
    "    }\n"+
    "    function fn(){\n"+
    "      console.log(2)\n"+
    "    }\n"+
    "    var fn\n"+
    "    fn()\n"+
    "    fn()\n"+
    "    fn=100\n"+
    "    fn()\n"+
    "    ```\n"+

    "    * 函数其实也是对象,函数名其实就是一个普通的变量名\n"+
    "    * `function`关键字其实就是创建一个函数对象,并把对象的地址交给`fn`来保存\n"+
    "    * 之后我们又声明了一个同名函数对象,因为内存中已经存在了`fn`,不会再次声明,但是会用新函数对象的地址覆盖旧的值\n"+
    "    * `var fn`时,因为已经存在`fn`了,不会再重复创建,此代码相当于无效\n"+
    "    * `fn()`执行,此时`fn`保存的是我们第二次声明的函数对象,所以结果是`2`\n"+
    "    * `fn()`执行,此时`fn`保存的依旧是我们第二次声明的函数对象,没有变化,所以结果是`2`\n"+
    "    * 之后我们给`fn`赋值为`100`,覆盖了原先的函数对象\n"+
    "    * 再次调用`fn`,此时`fn`只是一个数值,而不是函数,因此会报错,提示`fn不是一个方法`\n"+
    "\n"+
    "  ```jsx\n"+
    "	// 把3改为如下,分析结果\n"+
    "  var fn=function(){\n"+
    "    console.log(1)\n"+
    "  }\n"+
    "  fn()\n"+
    "  \n"+
    "  \n"+
    "  var fn=function(){\n"+
    "    console.log(2)\n"+
    "  }\n"+
    "  fn()\n"+
    "  \n"+
    "  \n"+
    "  var fn=100\n"+
    "  fn()\n"+
    "  ```\n"+

    "  * 分析代码执行过程\n"+

    "    * 先是处理声明提前机制,代码相当于\n"+

    "    ```jsx\n"+
    "    var fn\n"+
    "    var fn \n"+
    "    var fn\n"+
    "    fn=function(){console.log(1)}\n"+
    "    fn()\n"+
    "    fn=function(){console.log(2)}\n"+
    "    fn()\n"+
    "    fn=100\n"+
    "    fn()\n"+
    "    ```\n"+

    "    * 首先声明了一个`fn`\n"+
    "    * 因为已经存在了一个`fn`了,所以后两个`var`无效\n"+
    "    * 接着给`fn`赋值一个函数的地址\n"+
    "      * 当使用`var`声明函数时,只有函数名会提前,函数本身并不提前\n"+
    "    * 此时调用函数,结果就是`1`\n"+
    "    * 再给`fn`赋值一个函数对象的地址,覆盖了之前的\n"+
    "    * 此时调用函数,结果就是`2`\n"+
    "    * 给`fn`赋值`100`\n"+
    "    * 此时`fn`已经不再指向一个函数对象,而是普通的数值\n"+
    "    * 因此没办法被当成函数来调用\n"+
    "    * 报错`fn is not a function`\n"+

    "  ```jsx\n"+
    "  var a=10\n"+
    "  function fun(){\n"+
    "    a=100\n"+
    "    a+=1\n"+
    "    console.log(a)\n"+
    "  }\n"+
    "  fun();\n"+
    "  console.log(a)\n"+
    "  ```\n"+

    "  * 详细分析代码执行\n"+
    "    * 在全局声明一个变量`a`\n"+
    "    * 我们调用函数`fun`,此时就会生成一个函数作用域对象\n"+
    "    * 但是因为函数内没有一个形参`a`或者声明的变量`a`\n"+
    "    * 所以函数作用域对象是空的\n"+
    "    * 此时我们在函数里,访问`a`,会沿着作用域链向上找\n"+
    "    * 找到了全局的`a`\n"+
    "    * 全局的`a`最终被修改为了`101`\n"+
    "    * 无论函数内外,`a`的打印都是`101`\n"
  },
  {
    name: '闭包',
    id: "closure",
    markdown: 
    "##### 闭包\n"+
    
    "* 是什么\n"+
    
    "  * 外层函数的作用域对象，因为被内层函数引用着，而无法的得到释放,我们把这个无法得到释放的作用域对象称为闭包\n"+
    
    "* 作用\n"+
    
    "  * 在`js`中，全局变量虽然一次声明全局可用，但是极容易被污染；\n"+
    "  * 而函数内的变量，虽然不会被污染，但是几乎不可复用，函数一经调用完毕，就会被垃圾回收\n"+
    "  * 闭包就是这样一种机制\n"+
    "    * 既保护变量不受到污染,闭包对象在全局无从篡改\n"+
    "    * 同时又可让这个变量得到复用\n"+
    
    "* 原理\n"+
    
    "  * 外层函数调用后,会形成自己的作用域对象\n"+
    "  * 这个作用域对象因为被内层函数引用着,无法释放,形成闭包\n"+
    "  * 内层函数调用时,会优先使用自己的变量,自己没有,才去外层的作用域对象里找\n"+
    "  * 内层函数在调用后,只会释放自己,但是无法释放外层的作用域对象,使得外部作用域对象一直存在\n"+
    "  * 因为外部函数的变量并没有保存在全局,所以在函数外绝无篡改可能 ! \n"+
    
    "* 缺陷\n"+
    
    "  * 消耗性能,比普通函数多占用一块内存空间\n"+
    
    "* 分析一段代码\n"+
    
    "  ```javascript\n"+
    "  function parent(){\n"+
    "    var total=1000\n"+
    "    return function(money){\n"+
    "      total-=money\n"+
    "      console.log(total)\n"+
    "    }\n"+
    "  }\n"+
    "  var pay=parent()\n"+
    "  pay(100)\n"+
    "  total=0\n"+
    "  pay(100)\n"+
    "  pay(100)\n"+
    "  ```\n"+
    
    "  * `parent`调用时,临时创建 作用域对象 , 保存这个函数的私有变量\n"+
    "  * 首先我们把`parent()`的执行结果(也就是`return`出来的那部分),交给`pay`来保存\n"+
    "  * 一般来说,函数在调用一次后就被释放,作用域对象也会被释放,但是因为内层函数引用着外层函数的变量`total`,因此外层函数并没有得到释放\n"+
    "  * 调用`pay()`函数的时候,用到了变量`total`\n"+
    "    * 先在自有的作用域对象里查找`total`\n"+
    "    * 发现没有,沿着作用域链去外层函数的作用域对象里找\n"+
    "    * 对外层函数的变量`total`进行了修改操作\n"+
    "      * 假如,我是说假如外层函数的作用域对象也没有这个变量,才会去`window`中找\n"+
    "    * 而`total=0`是针对全局变量`total`进行的操作,和函数内的`total`无关,闭包里的变量从全局无从篡改\n"+
    "  * 因此得到结果`900 800 700`\n"+
    "  * 这样一来,既保证了变量的复用,又使得变量在函数里,不会受到全局污染\n"+
    "  \n"+
    "* 闭包习题\n"+
    
    "  ```javascript\n"+
    "  var number=2\n"+
    "  var obj={\n"+
    "    number:4,\n"+
    "    fn:(function(){\n"+
    "      this.number*=2;\n"+
    "      number*=2;\n"+
    "      var number=3;\n"+
    "      return function(){\n"+
    "        this.number*=2\n"+
    "        number*=3\n"+
    "        console.log(number)\n"+
    "      }\n"+
    "    })()\n"+
    "  }\n"+
    "  var fn=obj.fn\n"+
    "  console.log(number)\n"+
    "  fn()\n"+
    "  obj.fn()\n"+
    "  console.log(number)\n"+
    "  console.log(obj.number)\n"+
    "  ```\n"+
    
    "  * 分析代码执行\n"+
    
    "    * `obj.fn`存储的只是一个 **自调用的匿名函数的地址** ,这个函数会在自动调用后,将返回结果交于`obj.fn`保存\n"+
    
    "    * 首先分析这个匿名函数自调用\n"+
    
    "      * 首先`var number`,声明提前,赋值留在原地\n"+
    
    "      * `this.number*=2`\n"+
    
    "        * 匿名函数的`this`指向`window`,因此全局的`number`修改为`4`\n"+
    
    "      * `number*=2 num=3`\n"+
    
    "        * 最终函数内的`number`被赋值为`3`\n"+
    
    "      * 我们把函数`return`的部分交给`obj:fn保存`\n"+
    
    "        ```javascript\n"+
    "        obj:{\n"+
    "          number:4,\n"+
    "        	fn: function(){\n"+
    "              this.number*=2\n"+
    "              number*=3\n"+
    "              console.log(number)\n"+
    "            }\n"+
    "        }\n"+
    "        ```\n"+
    
    "      * 但是外层函数的作用域对象因为被`obj.fn`牵引着,并没有得到释放\n"+
    
    "    * `var fn=obj.fn`,实际上就相当于\n"+
    
    "      * 函数是引用类型,传值传的是在内存中的地址\n"+
    "      * 因此`fn`和`obj.fn`其实是一个地址\n"+
    
    "      ```javascript\n"+
    "      var fn=function(){\n"+
    "            this.number*=2\n"+
    "            number*=3\n"+
    "            console.log(number)\n"+
    "          }\n"+
    "      ```\n"+
    
    "    * `console.log(number)`\n"+
    
    "      * 在匿名函数自调用的时候,全局的`number`已经被修改为`4`\n"+
    
    "    * `fn()`\n"+
    
    "      * `fn`其实就相当于`window.fn`,此次调用`this`为`window`\n"+
    
    "        * 因此全局的`number`被改为`8`\n"+
    
    "        * 但是`number*=3`时\n"+
    
    "          * 因为`fn`和`obj.fn`引用的是同一个地址的同一个函数\n"+
    
    "          * 使用的`number`是当时因为闭包而没有被释放的`number`\n"+
    "          * 因此闭包内的`number`被改为`9`\n"+
    "          * 打印结果是`9`\n"+
    
    "    * `obj.fn()`\n"+
    
    "      * `obj.fn`调用时,`this`为点前对象`obj`\n"+
    "      * 因此`obj.number`被修改为8\n"+
    "      * 但是`number*=3`时\n"+
    "        - 使用的`number`依旧是当时因为闭包而没有被释放的`number`\n"+
    "        - 因此闭包内的`number`被改为`27`\n"+
    "        - 打印结果是`27`\n"+
    
    "    * 最后全局下的`number`刚才被改为`8`\n"+
    
    "    * `obj`下的`number`刚才也被修改为`8`\n"+
    
    "    * 结果`4 9 27 8 8`\n"+
    
    "##### 多态\n"+
    
    "- **同一方法**在不同情况下,表现出不同的样式\n"+
    
    "- 比如\n"+
    
    "  * 如下实例的基类都是`Object`,但是他们的`toString`方法各不相同\n"+
    
    "  ```javascript\n"+
    "  对象.toString()             //[Object object]\n"+
    "  数组.toString()             //会把数组降维且打散为字符串\n"+
    "  数字.toString()             //数字字符\n"+
    "  bool.toString()            //字符串true或者false\n"+
    "  date.toString()            //日期字符串\n"+
    "  ```\n"+
    
    "  * 因此,虽然同是`toString`方法,但是在不同情况下,也表现出不同的样式\n"+
    "  * 实际上是因为`Array,Number,Bool,Date`等如果使用 基类`Object`上的`toString`方法是不能完全满足需求的\n"+
    "    * 因此各自在其原型上重写了`toString`方法\n"+
    
    "- 如果子对象觉得父对象的成员不好用,可在本地定义同名自有成员,来覆盖父对象中的成员\n"
  },{
    name: '关于闭包和作用域的习题',
    id: 'testAboutClosure',
    markdown: 
    "##### Foo.a\n"+
    
    "```javascript\n"+
    "function Foo(){\n"+
    "  Foo.a=function(){\n"+
    "    console.log(1)\n"+
    "  }\n"+
    "  this.a=function(){\n"+
    "    console.log(2)\n"+
    "  }\n"+
    "}\n"+
    "Foo.prototype.a=function(){\n"+
    "  console.log(3)\n"+
    "}\n"+
    "Foo.a=function(){\n"+
    "  console.log(4)\n"+
    "}\n"+
    
    "Foo.a()\n"+
    "let obj=new Foo()\n"+
    "obj.a()\n"+
    "Foo.a()\n"+
    "```\n"+
    
    "* 首先我们分析代码的执行过程\n"+
    
    "  * 首先函数声明提前(没什么卵用,本身就在最前面),这个函数暂时没有得到调用,里面是什么不要管\n"+
    
    "  * `Foo.prototype.a=function(){...}`\n"+
    
    "    * 其实函数也是个对象\n"+
    "    * 因此会给`Foo`函数对象的原型对象强行赋值一个方法\n"+
    "    * 现在全局`Foo`原型上的`a`方法是打印`3`\n"+
    
    "  * `Foo.a=function(){...}`\n"+
    
    "    * 会给`Foo`函数对象强行添加自有方法`a`,该方法为打印`4`\n"+
    
    "  * 然后我们调用`Foo.a()`\n"+
    
    "    * 根据原型链使用规则\n"+
    "      * 优先访问自有成员,自有成员找不到时,才去访问原型\n"+
    "      * 自有成员有`a`这个方法,所以先会打印`4`\n"+
    
    "  * 然后我们把`Foo()`当成构造函数函数,创建一个其实例`obj`,同时调用`Foo`\n"+
    
    "    * `Foo.a=function(){console.log(1)}`\n"+
    
    "      * 因为函数作用域对象内找不到一个叫做`Foo`的变量,于是只能沿着作用域链去`winoow`下找全局的\n"+
    "      * 导致全局的`Foo`(其实也就是函数本身)的`a`被篡改为打印1\n"+
    
    "    * 同时构造函数实例化时,`new`关键词会进行四部操作\n"+
    
    "      * 创建一个新的空的对象\n"+
    
    "      * 用这个新对象调用构造函数,将构造函数中的`this`指向这个新对象,因此对这个对象中的属性进行强行赋值\n"+
    
    "        * `js`中给不存在的变量或者属性赋值,会强行创建该属性,然后强行赋值\n"+
    
    "      * 同时让新对象的`__proto__`指向构造函数的`prototype`\n"+
    
    "      * 将这个新对象返回,并且赋值给我们声明的`obj`\n"+
    
    "      * 因此`obj`现状\n"+
    
    "        ```javascript\n"+
    "        obj:{\n"+
    "        	a=function(){\n"+
    "            console.log(2)\n"+
    "          }\n"+
    "        }\n"+
    "        ```\n"+
    
    "  * 所以我们调用`obj.a()`时候,结果是`2`\n"+
    
    "  * 因为刚开`Foo()`函数调用时,已经把的`Foo.a`方法篡改\n"+
    
    "  * 因此现在访问时,结果是`1`\n"+
    
    "  * 结果`4 2 1`\n"+
    
    "##### foo.x\n"+
    
    "```javascript\n"+
    "var x=0\n"+
    "var foo={\n"+
    "  x:1,\n"+
    "  bar:function(){\n"+
    "    console.log(this.x)\n"+
    "    var that=this\n"+
    "    return function(){\n"+
    "      console.log(this.x)\n"+
    "      console.log(that.x)\n"+
    "    }\n"+
    "  }\n"+
    "}\n"+
    "foo.bar()\n"+
    "foo.bar()()\n"+
    "```\n"+
    
    "* 分析代码执行过程\n"+
    "  * 声明提前\n"+
    "    * 在本题意义不大,不着重考虑\n"+
    "  * 调用`foo.bar()`\n"+
    "    * `console.log(this.x)`,在对象内,`this`指向本对象,结果是`1`\n"+
    "    * `var that=this`,声明了一个`that`保存了`this`指向`foo`\n"+
    "    * 返回一个`方法`,但是这个没有既变量接住,也没有执行,所以不考虑\n"+
    "  * 调用`foo.bar()()`\n"+
    "    - console.log(this.x)`,在对象内,`this`指向本对象,结果是``1`\n"+
    "    - `var that=this`,声明了一个`that`保存了`this`指向`obj`\n"+
    "    - 返回一个`方法`,并且调用了这个方法\n"+
    "      * 外层函数的作用域对象,因为被内层函数牵引着无法释放,形成闭包\n"+
    "      * 此时`that`保存刚才的`this`指向`foo`,因此`that.x`是`1`\n"+
    "      * 而`return`出来的函数被执行,相当于函数自调用,因此`this`指向`window`\n"
  },{
    name: 'querySelector vs getElementByxxx',
    id: 'newVsOld',
    markdown: "##### querySelector vs getElement\n"+

    "```javascript\n"+
    "<div id='d1' class='content'></div>\n"+
    "<div id='d2' class='content'></div>\n"+
    "<div id='d3' class='content'></div>\n"+
    
    "var divs=document.getElementsByClassName('content')\n"+
    "console.log(divs.length)    //3\n"+
    "d2.className='main'\n"+
    "console.log(divs.length)   //2\n"+
    "```\n"+
    
    "* ?\n"+
    "  * 因为`getElement`返回的是一个动态集合\n"+
    "    * 不实际存储数据\n"+
    "    * 每次访问集合时,都会重新扫描`DOM`树\n"+
    "    * 因为每次都不实际存储数据,所以单次查找速度快\n"+
    "* querySelectorAll\n"+
    "  * 返回的是一个非动态集合\n"+
    "    * 集合中实际存储查找的所有数据,会储存起来\n"+
    "    * 重新访问时,直接使用之前储存起来的值,不会重复查找\n"+
    "    * 但是如果`DOM`结构发生变化,我们的 非动态集合 也无从获知\n"+
    "    * 所以在本题目中,如果一直使用它,结果会一直是`3`\n"+
    
    "* 何时使用\n"+
    "  * `getElement`首次查找快,但是每次都会重新查找\n"+
    "    * 所以查找条件简单时\n"+
    "  * `querySelectorAll`首次查找慢,但是后续操作方便\n"+
    "    * 查找条件复杂时,可以使用这个\n"    
  },{
    name: '包装类型',
    id: 'fakeObject',
    markdown: "##### 包装类型\n"+

    "* 是什么\n"+
    
    "  * 专门封装一个原始类型的值\n"+
    "  * 并提供对原始类型值执行操作的函数的对象\n"+
    
    "* 为什么\n"+
    
    "  * 原始类型的值,只是单纯的一个值而已,没有任何的自带功能\n"+
    
    "* 何时\n"+
    
    "  * 只要试图对原始类型的值调用函数或访问属性时,都会自动创建该类型的包装类型对象\n"+
    "  * 我们访问的函数或者属性,其实都是包装类型对象提供的\n"+
    
    "* 比如\n"+
    
    "  ```javascript\n"+
    "  var str='hello'\n"+
    "  str.toUpperCase()\n"+
    "  ```\n"+
    
    "  * `str`本身只是一串字符,当我当我们对其调用`toUpperCase()`方法时\n"+
    
    "    ```javascript\n"+
    "    //先判断 str 具体是什么类型\n"+
    "    typeof str  //String\n"+
    "    //于是 创建一个实例对象\n"+
    "    str=new String('hello')\n"+
    "    //于是就会去String的原型对象里找 toUpperCase这个方法,加以调用\n"+
    "    str.toUpperCase()\n"+
    "    ```\n"+
    
    "* 例题\n"+
    
    "  * 一串字符串`hello`,如何给其创建`money`属性,并且赋值为`10`\n"+
    
    "    ```javascript\n"+
    "    var str='hello'\n"+
    "    str.money=10\n"+
    "    console.log(str.money)  //undefined\n"+
    "    ```\n"+
    
    "    * 上面的方法是不行的\n"+
    "    * 需要这样\n"+
    
    "    ```javascript\n"+
    "    var str=new String('hello')\n"+
    "    str.money=10\n"+
    "    console.log(str)\n"+
    "    //String {'hello', money: 10}\n"+
    "    ```\n"
  },{
    name: 'Promise , async await',
    id: "promise",
    markdown: "##### promise和async、await\n"+

    "* 比如\n"+
    
    "  * 服务端有三接口\n"+
    
    "    ```javascript\n"+
    "    //127.0.0.1:8080/#/goods?type=a\n"+
    "    \n"+
    "    {'type':'a','count':'40'}\n"+
    "    ```\n"+
    
    "    ```javascript\n"+
    "    //127.0.0.1:8080/#/goods?type=b\n"+
    "    \n"+
    "    {'type':'b','count':'30'}\n"+
    "    ```\n"+
    
    "    ```javascript\n"+
    "    //127.0.0.1:8080/#/goods?type=c\n"+
    "    \n"+
    "    {'type':'c','count':'20'}\n"+
    "    ```\n"+
    
    "    \n"+
    
    "  * 我们想分别发送三次`axios`请求，计算三次`count`的累加值\n"+
    
    "  * 于是\n"+
    
    "    ```javascript\n"+
    "    var count=0\n"+
    "    axios.get('127.0.0.1:8080/#/goods?type=a').then(res=>{\n"+
    "      count+=res.count\n"+
    "    })\n"+
    "    axios.get('127.0.0.1:8080/#/goods?type=b').then(res=>{\n"+
    "      count+=res.count\n"+
    "    })\n"+
    "    axios.get('127.0.0.1:8080/#/goods?type=c').then(res=>{\n"+
    "      count+=res.count\n"+
    "    })\n"+
    "    console.log(count)  //0\n"+
    "    ```\n"+
    
    "  * 结果发现 `count为0`\n"+
    
    "  * ?\n"+
    
    "    * 发送`ajax`请求是异步操作\n"+
    "    * 会先在事件队列里等待\n"+
    "    * 等我们同步操作执行完了,才去执行异步的\n"+
    "    * 所以实际上\n"+
    "      * 请求还没发\n"+
    "      * 就已经打印结果了\n"+
    
    "* 如何解决?\n"+
    
    "  * 让异步操作有顺序地执行?\n"+
    
    "  * 笨方法\n"+
    
    "    * 回调嵌套方式\n"+
    
    "      ```javascript\n"+
    "      var count=0\n"+
    "      axios.get('127.0.0.1:8080/#/goods?type=a').then(res=>{\n"+
    "        count+=res.count\n"+
    "        axios.get('127.0.0.1:8080/#/goods?type=b').then(res=>{\n"+
    "       		count+=res.count\n"+
    "      		axios.get('127.0.0.1:8080/#/goods?type=c').then(res=>{\n"+
    "        		count+=res.count\n"+
    "            console.log(count) //90 \n"+
    "      		})\n"+
    "        })\n"+
    "      })\n"+
    "      ```\n"+
    
    "      * 回调函数原理\n"+
    "        * 函数执行时先去执行主函数\n"+
    "        * 主函数执行完了,才去执行回调函数的内容\n"+
    "        * 基于此,使得异步操作可以有序化\n"+
    
    "  * 缺陷\n"+
    
    "    * 嵌套层数多了,代码可读性差\n"+
    "    * 容易造成视觉混乱\n"+
    
    "* promise(承诺)\n"+
    
    "  * 专门解决回调地狱问题\n"+
    "  * 既可以保证减少代码深层嵌套结构\n"+
    "  * 又可以保证多个异步任务顺序执行\n"+
    
    "  ```javascript\n"+
    "  var total=0\n"+
    "  function getCount(type){\n"+
    "    return new Promise(\n"+
    "      function(resolve,reject){\n"+
    "      	axios.get(`127.0.0.1:8080/#/goods?type=${type}`).then(res=>{\n"+
    "    			resolve(res.data.count)  //相当于开门,把参数传给后面的then\n"+
    "  			})\n"+
    "    })\n"+
    "  }\n"+
    "  //链式操作,每次都把下一步执行的方法 给return出去,方便下一个then来接住\n"+
    "  getCount('a').then(count=>{\n"+
    "    total+=count\n"+
    "    return getCount('b')\n"+
    "  })\n"+
    "  .then(count=>{\n"+
    "    total+=count\n"+
    "    return getCount('c')\n"+
    "  })\n"+
    "  .then(count=>{\n"+
    "    total+=count\n"+
    "   	console.log(total) //90\n"+
    "  })\n"+
    "  ```\n"+
    
    "  * 原理\n"+
    
    "    * `resolve()`调用,代码当前这步 异步操作已经完成,可以进行下一步操作\n"+
    "      * `resolve()`调用时还可以传参\n"+
    "    * 参数会被后面的`then(...)`的形参来接住\n"+
    "    * `promise`函数里不能写`return`\n"+
    
    "    * 链式操作\n"+
    "      * 每次都把下一步操作调用并且`return`出去\n"+
    "      * 由下一次的`then()`来接住\n"+
    
    "  * 但是如上代码,其实完全没有必要这样麻烦,因为`a,b,c`并没有一个固定的顺序\n"+
    
    "  * 只要请求的发送是在打印行为之前的就可以\n"+
    
    "  * 所以可以简化为两步\n"+
    
    "    * 发送`a b c` 请求,但是顺序无关紧要\n"+
    "    * 请求完成了,获取到结果了,再进行打印\n"+
    
    "    ```javascript\n"+
    "    //三个请求并行,等所有的请求都执行完,才执行总数\n"+
    "    var total=0\n"+
    "    function getCount(type){\n"+
    "      return new Promise(\n"+
    "        function(resolve,reject){\n"+
    "        	axios.get(`127.0.0.1:8080/#/goods?type=${type}`).then(res=>{\n"+
    "      			total+=count  //相当于开门,把参数传给后面的then\n"+
    "            resolve(res.data.count)\n"+
    "    			})\n"+
    "      })\n"+
    "    }\n"+
    "    Promise.all([\n"+
    "      getCount('a'),\n"+
    "      getCount('b'),\n"+
    "      getCount('c')\n"+
    "    ]).then(res=>{\n"+
    "      total=result.reduce((prev,elem)=>prev+elem) //res会被Primise.all每次的执行结果都放进来,是一个数组,把他们累加起来就是最终的结果90\n"+
    "    })\n"+
    "    ```\n"+
    
    "    * `promise.all`数组里的操作,并没有一个必要的先后顺序\n"+
    "    * `promise.all`数组里的都应是`new Promise`对象\n"+
    
    "* async,await\n"+
    
    "  * 方法\n"+
    
    "    ```javascript\n"+
    "    (async function(){\n"+
    "      var count=await getCount('a')\n"+
    "      total+=count;\n"+
    "      await getCount('b')\n"+
    "      total+=count;\n"+
    "      await getCount('c')\n"+
    "      total+=count;\n"+
    "    })()\n"+
    "    ```\n"+
    
    "  * 原理\n"+
    
    "    * 加了`await`的代码都会被挂起\n"+
    "    * 前面的代码执行完了,才会得到执行\n"+
    "    * 把每一个代码都加上`await`相当于变成了同步\n"+
    "    * `await`要配合`new Promise()`来进行使用\n"+
    "      * 它的作用是代替的是`then()`\n"+
    "      * 但是必须要有`promise`\n"+
    
    "  * 实现并行\n"+
    
    "    ```javascript\n"+
    "    \n"+
    "    (async function(){\n"+
    "      var result=await Promise.all([\n"+
    "      getCount('a'),\n"+
    "      getCount('b'),\n"+
    "      getCount('c')\n"+
    "    ]) \n"+
    "      total=result.reduce((prev,elem)=>prev+elem)\n"+
    "    })()\n"+
    "    ```\n"
  },
  {
    name: '微信小程序',
    id: 'wechatProgram',
    markdown: 
    "##### 微信小程序的重点汇总\n"+
    
    "* 项目结构\n"+
    
    "  | WXML | 微信小程序框架设计的一套标记语言<br />结合基础组件和事件系统，配合`wxss`绘制页面 |\n"+
    "  | ---- | ------------------------------------------------------------ |\n"+
    "  | WXSS | 微信小程序框架设计的一套样式文件<br />用法和`css`类似<br />但是提供了`rpx`单位,响应式像素单位 |\n"+
    "  | js   | 小程序的逻辑文件,或者发送请求,发送云函数<br />配合`wxml`完成事件的绑定,以及数据的渲染<br />但是不能执行`DOM`操作 |\n"+
    "  | json | 小程序设置，如页面注册，页面标题及`tabBar`                   |\n"+
    
    "* 原理和本质\n"+
    
    "  * 类似于`vue`,本质还是一个单页面应用\n"+
    "    * 所有的所谓的`页面`,其实都是组件\n"+
    "  * 视图层和数据层分离\n"+
    "    * 任何`ui`界面的变化都是基于数据的变化\n"+
    
    "* 如何使用双向绑定\n"+
    
    "  * 单向绑定\n"+
    
    "    * 使用`{{ }}`差值表达式给页面元素绑定数据\n"+
    
    "  * 双向数据绑定\n"+
    
    "    * 微信小程序不直接支持双向绑定\n"+
    "    * 如果想要实现数据的双向绑定,需要自己手写方法\n"+
    "      * 双向绑定用于表单元素\n"+
    "      * 表单内的数据变动也将同步到数据层\n"+
    "      * 所以给表单元素创建输入事件,监控我们每次的输入行为\n"+
    "      * 通过事件对象,获取表单内的`value`,然后通过`this.setData`反作用于数据层\n"+
    
    "    ```javascript\n"+
    "    <input  placeholder='输入关键字' bindinput='change'></input>\n"+
    "    change: function(e){\n"+
    "        this.setData({\n"+
    "          msg:e.detail.value,\n"+
    "        })\n"+
    "      }\n"+
    "    ```\n"+
    
    "* this.setData()\n"+
    
    "  * 是什么\n"+
    
    "    * 小程序提供的修改组件内`data`变量的方法\n"+
    
    "    * 原理\n"+
    
    "      * 访问器属性的`set`方法\n"+
    
    "    * 注意什么\n"+
    
    "      ```javascript\n"+
    "      this.setData({\n"+
    "        msg:'2',\n"+
    "        msg2:'23'\n"+
    "      })\n"+
    "      ```\n"+
    
    "      * 要把修改的变量写在这个对象里\n"+
    
    "      * 如果要修改的属性名是动态拼接而成的,要在外边加`[ ]`,不能直接拼接字符串,不然会报错\n"+
    
    "        ```javascript\n"+
    "        this.setData({\n"+
    "          [`msg${index}`]:2\n"+
    "        })\n"+
    "        ```\n"+
    
    "* 全局变量\n"+
    
    "  * 全局变量一般存储在`app.js`中\n"+
    
    "    * 和`vue`一样,小程序框架也是单页面应用\n"+
    "    * `app.js`中的数据从小程序各组件都能访问的到\n"+
    
    "  * 如何\n"+
    
    "    * 定义\n"+
    
    "      * 在`app.js`中的`APP({})`巨大对象里创建一个`globalDate`来专门保存\n"+
    
    "        ```javascript\n"+
    "        //app.js\n"+
    "        APP({\n"+
    "          globalData:{\n"+
    "            msg:2\n"+
    "          }\n"+
    "        })\n"+
    "        ```\n"+
    
    "    * 使用\n"+
    
    "      ```javascript\n"+
    "      console.log(getApp().globalData.msg)\n"+
    "      ```\n"+
    
    "    * 修改\n"+
    "    \n"+
    "      ```javascript\n"+
    "      getApp().globalData.msg=3\n"+
    "      ```\n"+
    "  \n"+
    "  \n"+
    "  \n"+
    "* 调用页面绑定事件时如何传参\n"+
    
    "  * 不能直接在方法名后的`( )`里写 , 否则在`js`会获取不到\n"+
    
    "  * 需要通过自定义属性`data-xxx`的方法\n"+
    
    "    ```javascript\n"+
    "    <view data-url='baidu.com' bindtap='goSomewhere'></view>\n"+
    "    \n"+
    "    taskDetail(e){\n"+
    "    	var url = e.currentTarget.dataset.url;\n"+
    "    	wx.navigateTo({\n"+
    "        url: `http://www.${url}`\n"+
    "      })\n"+
    "    \n"+
    "    ```\n"+
    "  \n"+
    "* 小程序的路由跳转\n"+
    
    "  | 方式                          | 是否可以跳转到tabBar | 特性                                                         |\n"+
    "  | ----------------------------- | -------------------- | ------------------------------------------------------------ |\n"+
    "  | wx.navigateTo( 打开新页面 )   | 否                   | 保留当前页面<br />跳转到应用的某个界面<br />路径之后可以带参数 |\n"+
    "  | wx.redirectTo ( 页面重定向 )  | 否                   | 关闭当前页面<br />跳转到应用内的某个页面<br />可带参         |\n"+
    "  | wx.navigateBack  ( 返回页面 ) | 否                   | 关闭当前页面<br />返回之前上一个页面<br />或者上几个页面     |\n"+
    "  | wx.switchTab ( tabBar跳转 )   | 是                   | 只能跳转到`tabBar`页面<br />不能跳转到其他页面<br />调用时会关闭所有非`tabBar`页面<br />之后进行切换,不可带参数 |\n"+
    "  | wx.reLaunch ( 重启 )          | 是                   | 关闭所有页面<br />然后跳转到指定页面<br />是否为`tabBar`页面皆可,<br />但是如果是`tabBar`的话,不能携带参数 |\n"+
    
    "* 小程序的生命周期\n"+
    
    "  * 是整个小程序的生命周期,而不是单个页面的\n"+
    "* 写在`app.js`中\n"+
    "  \n"+
    "  | 声明周期 |                             特性                             |\n"+
    "  | -------- | :----------------------------------------------------------: |\n"+
    "  | onLaunch |      用户首次打开小程序，会触发onLauch(全局只触发一次);      |\n"+
    "  | onShow   | 小程序初始化完成后，触发onShow方法，监听小程序显示；<br />小程序从后台进入前台显示，触发onShow方法 |\n"+
    "  | onHide   |            小程序从前台进入后台，触发onHide方法；            |\n"+
    "  | onError  |     小程序后台运行一定时间，或系统资源占用过高，会被销毁     |\n"+
    "  \n"+
    "  \n"+
    
    "* 页面的生命周期\n"+
    
    "  ![img](https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png)\n"+
    
    "  | 周期              |                    特性                     |\n"+
    "  | ----------------- | :-----------------------------------------: |\n"+
    "  | onLoad            |   用户首次打开小程序时触发,全局只触发一次   |\n"+
    "  | onReady           |             页面初次渲染时触发              |\n"+
    "  | onShow            | 页面显示时触发,或者是页面从后台切换到前台时 |\n"+
    "  | onHide            |          页面从前台切往后台时触发           |\n"+
    "  | onUnload          |               页面卸载时触发                |\n"+
    "  | onPullDownRefresh |           用户触发下拉事件时调用            |\n"+
    "  | onReachBottom     |         用户触发上拉触底事件时调用          |\n"+
    
    "  \n"+
    
    "* 如何实现下拉刷新\n"+
    "  * 首先在全局 `config` 中的 `window` 配置 `enablePullDownRefresh`\n"+
    "  * 在 `Page` 中定义 `onPullDownRefresh` 钩子函数,到达下拉刷新条件后，该钩子函数执行，发起请求方法\n"+
    "  * 请求返回后，调用 `wx.stopPullDownRefresh` 停止下拉刷新\n"+
    
    "*  bindtap和catchtap的区别是什么\n"+
    "  * 相同点：\n"+
    "    * 首先他们都是作为点击事件函数，就是点击时触发。在这个作用上他们是一样的，可以不做区分\n"+
    "  * 不同点：\n"+
    "    * 他们的不同点主要是`bindtap`是不会阻止冒泡事件的，`catchtap`是阻值冒泡的\n"
  },{
    name: '普通函数和箭头函数',
    id: 'lambda',
    markdown: "##### 普通函数和箭头函数\n"+

    "* 首先分析箭头函数\n"+
    
    "  * 相比于普通函数更加简洁\n"+
    
    "    * 省略`function()`关键词,用`()=>`代替\n"+
    "    * 如果有且只有一个参数,小括号可以不写\n"+
    "    * 如果函数体只有一行代码,大括号可以不写\n"+
    "    * 如果这一行代码还是`return`出来的 , 省略`return`\n"+
    
    "  * 箭头函数没有自己的`this`指向\n"+
    
    "    * 箭头函数中的`this`和其上下文对象指向一致\n"+
    "      * 也可以说箭头函数`this`内外指向一致\n"+
    "    * 因为没有自己的`this`指向,所以即便使用`call apply bind`等也无法修改\n"+
    
    "  * 箭头函数没有`arguments`类数组对象\n"+
    
    "    * 以往为了函数重用 , 有时候我们不确定函数到底要定义多少个形参\n"+
    
    "      * 于是形参那里直接不写\n"+
    "      * 然后在函数体内通过`arguments`类数组对象来获取咱们的传入所有参数\n"+
    
    "    * 但是箭头函数不能这样\n"+
    
    "    * 可以使用展开运算符`...arg`来代替\n"+
    
    "      ```javascript\n"+
    "      var fn=(...arg)=>{\n"+
    "      	console.log(arg)  //[1,2,3]\n"+
    "      }\n"+
    "      fn(1,2,3)\n"+
    "      ```\n"+
    
    "      * `arg`会把咱们传进去的所有参数,装进一个数组里,方便操作\n"+
    
    "  * 箭头函数不能作为构造函数\n"+
    
    "    * 因为没有自己的`this`指向\n"+
    "      * 实例化对象`new`其实就是创建一个新对象,然后把构造函数的`this`指向这个新对象强行赋值的过程\n"+
    "      * 但是箭头函数没有自己的`this`\n"+
    "      * 因此不能\n"+
    
    "* 普通函数的`this`\n"+
    
    "  * 一般指向函数调用者,也就是点前的对象\n"+
    
    "    * `obj.fn( )`那么`this`就指向`obj`\n"+
    "    * 直接`fn()`,就指向`window`\n"+
    
    "  * 自执行函数`this`指向`window`\n"+
    
    "  * `return`出来的函数被执行也指向`window`\n"+
    
    "    ```javascript\n"+
    "    var obj={\n"+
    "      fn(){\n"+
    "        return function(){\n"+
    "          console.log(this)\n"+
    "        }\n"+
    "      }\n"+
    "    }\n"+
    "    obj.fn()()\n"+
    "    ```\n"+
    
    "    * 以这个为例\n"+
    "    * `obj.fn()`这个函数被执行得到的结果是`function(){console.log(this)}`\n"+
    "    * 因此`obj.fn()()`,其实就相当于`function(){console.log(this)}()`\n"+
    "      * 类似于自调用函数\n"+
    "      * 所以指向`window`\n"+
    
    "  * 如果这个函数是通过`DOM`元素触发事件而执行的,`this`指向那个`DOM`元素\n"+
    
    "  * 定时器里的`this`默认指向`window`\n"+
    
    "  * 可以使用`call apply bind`等修改`this`\n"+
    
    "    * `call apply`是修改本次`this`并且立刻调用函数\n"+
    "    * `bind`是永久替换`this`,但是暂不调用函数\n"+
    
    "  * 可以在函数外声明一个`that=this`来保存函数外的`this`指向\n"
  },{
    name: "组件传值",
    id: 'componentsChat',
    markdown: 
    "##### Vue组件之间传值\n"+
    
    "* 父传给子\n"+
    
    "  * 方法\n"+
    
    "    * 在父组件上给所引用的子组件定义一个 **自定义属性**\n"+
    "    * 把想要传的值绑在这个自定义属性上\n"+
    "    * 在子组件中的`props`中,加入这个自定义属性名\n"+
    "    * 此时父组件穿件来的变量就会称为子组件的自有变量\n"+
    "    * 和使用`data`里面的数据一样访问这个变量\n"+
    
    "    ```javascript\n"+
    "    //在父组件里\n"+
    "    <template>\n"+
    "      <child :自定义属性名='msg'></child>\n"+
    "    </template>\n"+
    "    \n"+
    "    <script>\n"+
    "    export default{\n"+
    "     data(){\n"+
    "       return {\n"+
    "         msg:'123'\n"+
    "       }\n"+
    "     }    \n"+
    "    }\n"+
    "    </script>\n"+
    "    ```\n"+
    
    "    ```javascript\n"+
    "    //在子组件里\n"+
    "    <template>\n"+
    "      <div>{{自定义属性名}}</div>\n"+
    "    </template>\n"+
    "    \n"+
    "    <script>\n"+
    "    export default{\n"+
    "     props:{\n"+
    "       //props也可以写成数组,把每个属性名当成字符串写进来就好\n"+
    "       //但是如果写成数组了,就不能写类型了\n"+
    "       自定义属性名:String //类型也可以写其他\n"+
    "     }   \n"+
    "    }\n"+
    "    </script>\n"+
    "    ```\n"+
    
    "    * 注意\n"+
    "      * 如果传的值是 **原始类型** 的话,按值传递 , 子组件里无论对其进行怎样的操作都不会影响到父组件\n"+
    "      * 但是如果传的是 **引用类型** 的话,传过来的是地址 \n"+
    "        * 因此无论父组件还是子组件的这个值变了\n"+
    "        * 都会牵连对方\n"+
    "    * 原理\n"+
    "      * `vue`在每次加载一个组件时,都会扫描组件元素标签上是否存在自定义属性\n"+
    "        * 也就是非原生`HTML`属性\n"+
    "        * 也不是`vue`自己十几个属性\n"+
    "      * 如果发现确实有 , 就回去对自己的`props`对象或者数组进行遍历\n"+
    "        * 找是否有和这个自定义属性同名的内容\n"+
    "      * 如果有,就让其称为子组件的自有属性\n"+
    "      * 并且把父组件里这个自定义属性对应的数据赋值过来\n"+
    
    "* 子传给父\n"+
    
    "  * 通过给子组件绑定事件的方式\n"+
    
    "  * 事件触发时, 通过 使用`this.$emit('父组件方法名',传递的参数)`给父组件传值\n"+
    
    "    * 当父组件相应的方法调用时 \n"+
    "    * 会通过形参获取子组件传过来的参数\n"+
    
    "    ```javascript\n"+
    "    //子组件里\n"+
    "    <template>\n"+
    "    	<div>\n"+
    "        <button @click='setData'>向父组件传参</button>\n"+
    "      </div>\n"+
    "    </template>\n"+
    "    \n"+
    "    <script>\n"+
    "    export default{\n"+
    "     data(){\n"+
    "       return{\n"+
    "         msg:2\n"+
    "       }\n"+
    "     },\n"+
    "     methods:{\n"+
    "       setData(){\n"+
    "         //这样的话,当父组件的toFather方法调时,就能获取到子组件的msg参数\n"+
    "         this.$emit('toFather',this.msg)\n"+
    "       }\n"+
    "     }\n"+
    "    }\n"+
    "    </script>\n"+
    "    ```\n"+
    
    "    ```javascript\n"+
    "    //父组件里\n"+
    "    <script>\n"+
    "    export default{\n"+
    "     data(){\n"+
    "       return{\n"+
    "         sonMsg:''\n"+
    "       }\n"+
    "     },\n"+
    "     created(){\n"+
    "       toFather(data){\n"+
    "         //当父组件的相应方法调用时,就会通过形参获取到子组件里传来的数据\n"+
    "         console.log(data)\n"+
    "         this.sonMsg=data\n"+
    "       }\n"+
    "     }\n"+
    "    }\n"+
    "    </script>\n"+
    "    ```\n"+
    
    "* 兄弟组件之间\n"+
    
    "  * 如何\n"+
    
    "    * 借助中央事件总线 , 两组件外部建立一个`Bus.js`文件,将自己`export`\n"+
    
    "      ```javascript\n"+
    "      import Vue from 'Vue'\n"+
    "      export default new Vue\n"+
    "      ```\n"+
    
    "      \n"+
    
    "    * 两兄弟组件被同一父组件引用着\n"+
    
    "    * 给`组件1` 绑定事件\n"+
    
    "    * 通过`Bus.$emit`传递过去一个方法名和参数\n"+
    
    "      ```javascript\n"+
    "      //组件1\n"+
    "      <template>\n"+
    "      	<button @click='sendMsg'></button>\n"+
    "      </template>\n"+
    "      \n"+
    "      <script>\n"+
    "      export default{\n"+
    "      	methods:{\n"+
    "          sendMsg(){\n"+
    "            Bus.$emit('send',2)\n"+
    "          }\n"+
    "        }    \n"+
    "      }\n"+
    "      </script>\n"+
    "      ```\n"+
    
    "    * 在兄弟组件那里使用`Bus.$on`来进行接收\n"+
    
    "      ```javascript\n"+
    "      //组件2\n"+
    "      <script>\n"+
    "      export default{\n"+
    "      	created(){\n"+
    "          Bus.$On('send',function(val){\n"+
    "            console.log('从兄弟组件那里拿来的参数是'+val)\n"+
    "          })\n"+
    "        }\n"+
    "      }\n"+
    "      </script>\n"+
    "      ```\n"+
    
    "      \n"
  },{
    name: '单页面应用 vs 多页面应用',
    id: 'spaVsMpa',
    markdown: "##### 单页面应用 vs 多页面应用\n"+
    "|              | 单页面应用                                                   | 多页面应用                                   |\n"+
    "| ------------ | ------------------------------------------------------------ | -------------------------------------------- |\n"+
    "| 组成         | 只有唯一完整的`html`文件<br />每个所谓的`页面`,其实都是组件<br />切换`页面`其实就是<br />拿走之前的组件,换成其他组件 | 每个`页面`都是真实而完整的`html`文件         |\n"+
    "| 公共资源     | 资源公用<br />实质上只在唯一完整的`html`中引用一次           | 每个`页面`都需要加载一次,页面间不共用        |\n"+
    "| url模式      | abc.com/#/index                                              | abc.com/index.html                           |\n"+
    "| 用户体验     | 页面间切换快,用户体验良好<br />虽然首屏加载速度较慢,<br />但是可以使用路由懒加载等方式进行优化 | 页面切换加载缓慢，流畅度不够，用户体验比较差 |\n"+
    "| 动画         | 因为都在一个页面里,所以可以实现                              | 实现不能                                     |\n"+
    "| 数据传递     | 组件传值<br />vuex<br />cookie session localStroage<br />url | cookie , session, localStroage<br />url      |\n"+
    "| 搜索引擎优化 | 需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化 | 简单                                         |\n"+
    "| 适用范围     | 高要求的体验度、追求界面流畅的应用                           | 适用于追求高度支持搜索引擎的应用             |\n"
  },{
    name: 'vue组件懒加载',
    id: 'lazyLoad',
    markdown: "##### Vue路由懒加载\n"+

    "* 什么是\n"+
    
    "  * 懒加载就是只去加载用户可能访问的到的 **资源**\n"+
    "    * 提高的页面加载速度\n"+
    "    * 节省用户流量\n"+
    
    "* 为什么\n"+
    
    "  * Vue\n"+
    "    * 单页面应用 , 所有的 **页面** 都不过是一个 **组件**\n"+
    "    * `webpack`进行打包时,会把咱们所有的`vue`组件,打包成巨大的`js`文件\n"+
    "    * 导致首屏加载很慢\n"+
    "      * 但是很多时候,这种行为是没有必要的\n"+
    "      * 因为很多页面,用户可能根本不会去访问,因此根本就没有加载的必要\n"+
    
    "* 如何\n"+
    
    "  * 方法一\n"+
    
    "    * 在引用路由时,先不要进行`import`进行引入\n"+
    
    "    * 然后在相对应 **路由字典** 里的`component`里用`require`代替`import`\n"+
    
    "      ```javascript\n"+
    "      // import HelloWorld from '@/components/HelloWorld'  这步就不写了\n"+
    "      routes: [\n"+
    "              {\n"+
    "                path: '/',\n"+
    "                name: 'HelloWorld',\n"+
    "                component: resolve => require(['@/components/HelloWorld'], resolve)\n"+
    "              }\n"+
    "      ]\n"+
    "      ```\n"+
    
    "  * 方法二\n"+
    
    "    - 其实和上面的原理类似\n"+
    
    "    - 不要先`import`\n"+
    
    "      ```javascript\n"+
    "      // import HelloWorld from '@/components/HelloWorld'  这步就不写了\n"+
    "      routes: [\n"+
    "              {\n"+
    "                path: '/',\n"+
    "                name: 'HelloWorld',\n"+
    "                component: () => import('@/components/HelloWorld.vue')\n"+
    "              }\n"+
    "      ]\n"+
    "      ```\n"+
    
    "  * `ChunkName`注释法( `Vue`和`Webpack`官方推荐 )\n"+
    
    "    * 这种方法 , 同样先不要进行`import`\n"+
    
    "    * 先在`webpack.base.config.js`中配置 `ChunkFileName`\n"+
    
    "      ```javascript\n"+
    "      output: {\n"+
    "      path: config.build.assetsRoot,\n"+
    "      filename: '[name].js',\n"+
    "      chunkFilename: '[name].js',\n"+
    "      publicPath: process.env.NODE_ENV === 'production'\n"+
    "        ? config.build.assetsPublicPath\n"+
    "        : config.dev.assetsPublicPath\n"+
    "      },\n"+
    "      ```\n"+
    
    "    * 然后在需要进行懒加载的路由字典里这么写\n"+
    
    "      ```javascript\n"+
    "      {\n"+
    "        path: '/home/user',\n"+
    "        name: 'user',\n"+
    "        component: () =&gt; import(/* webpackChunkName:'user'*/ '../view/User.vue')\n"+
    "      }\n"+
    "      ```\n"
  },{
    name: 'keepAlive',
    id: 'keepAlive',
    markdown: "##### Vue keepAlive\n"+

    "* 是什么\n"+
    
    "  * 用于缓存之前加载的组件\n"+
    
    "* 作用\n"+
    
    "  * 组件切换时 让其保持之前的加载状态\n"+
    "  * 避免反复渲染影响性能\n"+
    "  * 同时减少请求次数,缓解服务器压力\n"+
    
    "* 如何 ?\n"+
    
    "  * 在需要 `keepAlive` 进行缓存的 路由字典里进行配置\n"+
    
    "    * 为其添加`mata`属性( 不可改名 )\n"+
    "    * 在`meta`中给`keepAlive`配置为`true`\n"+
    
    "    ```javascript\n"+
    "    {\n"+
    "      path:'/index',\n"+
    "      name:'index',\n"+
    "      component:Index,\n"+
    "      meta:{\n"+
    "        keepAlive:true\n"+
    "      }\n"+
    "    }\n"+
    "    ```\n"+
    
    "  * 在`app.vue中`的`templa`里\n"+
    
    "    ```javascript\n"+
    "    <keep-alive>\n"+
    "    	<router-view v-if='$route.meta.keepAlive'/>\n"+
    "    </keep-alive>\n"+
    "    <router-view v-if='!$route.meta.keepAlive'/>	\n"+
    "    ```\n"+
    
    "    * 包在`keep-alive`标签里的内容是使用缓存的\n"+
    "      * `v-if`会进行判断,如果这个路由的`keepAlive`是`true`的话就使用缓存\n"+
    "    * 不然的话,就使用不带缓存的普通`router-view`\n"
  },{
    name: '路由守卫',
    id: 'route-keeper',
    markdown: 
    "##### 路由守卫\n"+
    
    "* 是什么\n"+
    
    "  * 我们之前每个`vue`组件都有四组生命周期**钩子函数**,分别在组件`创建`,`挂载`,`更新`以及`销毁`的时候触发\n"+
    "  * 路由守卫其实是关于路由的一组**钩子函数**\n"+
    "  * 实现在 **进入 / 离开** 一个路由时,进行的操作\n"+
    
    "* 有什么作用\n"+
    
    "  * 有时候 , 我们需要对用户的跳转行为进行一些限制\n"+
    "    * 比如说\n"+
    "      * 我们希望用户只能在登录状态下才能 跳转到购物车\n"+
    "      * 通过直接输入`url`或者其他手段想要进入商品购物车页的,就应该给予拦截,阻止页面进行跳转\n"+
    
    "  * 有些时候 , `keepAlive`是不能写死的,要根据用户的实际操作而动态变化\n"+
    "    * 比如说 , 在一个商城项目里\n"+
    "      * 我们每次从首页跳转到商品列表页的时候\n"+
    "      * 假如我第一次是通过`手机`关键子进入的商品列表页\n"+
    "      * 但是以后访问的可能不是`手机`了,那就没必要对商品列表页的内容进行缓存\n"+
    "    * 但是,如果是从详情页跳转到商品页就不同了\n"+
    "      * 因为我们之所以进入了详情页\n"+
    "      * 肯定是之前已经在商品页选好了商品\n"+
    "      * 这时候我们进行再进行后退 , 就应该回退到之前选的 那类商品那里\n"+
    
    "* 如何使用( 组件路由守卫 )\n"+
    
    "  * 就一个组件而言,使用最多的路由钩子函数是`beforeRouteLeave` 和`beforeRouteEnter`\n"+
    
    "  * 路由守卫钩子函数有三个参数\n"+
    
    "    * to\n"+
    "      * 表示你要去哪\n"+
    "    * from\n"+
    "      * 表示你从哪里来\n"+
    "    * next\n"+
    "      * `next()`\n"+
    "        * 直接往下执行,不进行干预\n"+
    "        * 如果不阻止或者修改之前的路由跳转行为,这个`next( )`必须写\n"+
    "      * `next(false)`\n"+
    "        * 中断当前导航\n"+
    "      * `next('/')`/`next( { path : '/' } )`\n"+
    "        * 跳转到其他地址\n"+
    
    "  * 比如实现刚才的需求\n"+
    
    "    ```javascript\n"+
    "    //home.vue\n"+
    "    beforeRouteLeave(to,from,next){\n"+
    "      console.log('路由离开home页');\n"+
    "      if(to.name=='products'){\n"+
    "        //如果是从首页跳到商品页,不缓存\n"+
    "        to.meta.keepAlive=false\n"+
    "      }\n"+
    "      next()\n"+
    "    }\n"+
    "    ```\n"+
    
    "    * 当路由即将离开首页时触发\n"+
    "    * 判定我们是否要去商品页\n"+
    "    * 确实是要去商品页\n"+
    "    * 经过我们刚才的分析,不应该缓存\n"+
    "    * 于是把`to`(即我们要去的商品页)的`keepAlive`改为`fasle`,让它不再进行缓存\n"+
    
    "* 如何使用( 全局路由守卫 )\n"+
    
    "  * 实际上,完整的路由守卫钩子函数是这样的\n"+
    
    "    | 导航被触发                                                   |\n"+
    "    | ------------------------------------------------------------ |\n"+
    "    | 在`失活`的组件里调用离开守卫`beforeRouteLeave`               |\n"+
    "    | 调用全局的`beforeEach`守卫                                   |\n"+
    "    | 在重用的组件里调用`beforeRouteUpdate守卫(2.2+)`              |\n"+
    "    | 在路由配置里调用`beforeEnter`                                |\n"+
    "    | 解析异步路由组件                                             |\n"+
    "    | 在被激活的组件里调用`beforeRouterEnter`                      |\n"+
    "    | 调用全局的`beforeResolve守卫(2.5+)`                          |\n"+
    "    | 导航被确认                                                   |\n"+
    "    | 调用全局的`afterEach`钩子                                    |\n"+
    "    | 触发`DOM`更新                                                |\n"+
    "    | 用创建好的实例调用`beforeRouteEnter`守卫中传给`next`的回调函数 |\n"+
    
    "  * 根据这个流程,我们可以发现,每次我们进行路由跳转的时候,全局的**路由钩子函数**都会被触发\n"+
    
    "  * 全局的路由钩子函数也有两个比较重要\n"+
    
    "    \n"+
    
    "  * 假如一个需求,用户从任何界面跳往购物车时候,都会进行验证\n"+
    
    "    * 查看用户是否登录\n"+
    "    * 如果用户没有登录\n"+
    "    * 就阻止用户跳转 ,并自动将路由切换到登录页面\n"+
    
    "    ```javascript\n"+
    "    router.beforeEach((to, from, next) => {\n"+
    "      console.log(to)\n"+
    "      if(to.name=='cart'){\n"+
    "        //如果vuex中没有保存用户登录的数据,证明用户没有登录\n"+
    "        this.$store.state.uid?next():next({path:'/login'})\n"+
    "      }\n"+
    "    }\n"+
    "    ```\n"
  },{
    name: 'webpack初步',
    id: 'webpackbase',
    markdown: 
    "##### webpack 4.X 打包机制基本\n"+
    
    "* 是什么\n"+
    
    "  * 前端资源 **加载/打包** 工具\n"+
    "  * 静态分析`js`之间存在怎么样的关系\n"+
    "  * 最终合并成生产环境需要的代码\n"+
    
    "* 前提\n"+
    
    "  * 全局安装\n"+
    
    "    * `webpack4`需要`NodeJS V9`以上\n"+
    "    * `npm i webpack webpack-cli -g`\n"+
    
    "  * 局部安装\n"+
    
    "    ```javascript\n"+
    "    npm i webpack webpack-cli -S\n"+
    "    ```\n"+
    
    "    \n"+
    
    "* 基本使用\n"+
    
    "  * 生成`package.json`\n"+
    
    "    ```javascript\n"+
    "    npm init\n"+
    "    ```\n"+
    
    "  * 打包\n"+
    
    "    - 默认入口文件 `src / index.js`\n"+
    "    - 默认出口文件`dist / main.js`\n"+
    
    "    ```javascript\n"+
    "    //默认情况下是生产环境 也就是一行代码 可读性极差的的模式\n"+
    "    webpack 输入文件.js -o 输出文件.js\n"+
    "    ```\n"+
    
    "    ```javascript\n"+
    "    webpack --mode development 输入文件.js -o 输出文件.js\n"+
    "    ```\n"+
    
    "  - 如果只写`webpack`或者`webpack --mode development` \n"+
    
    "    - 会将入口文件以及其依赖的文件\n"+
    "    - 打包到`dist`文件夹下\n"+
    
    "    \n"+
    
    "* 配置\n"+
    
    "  * 为什么\n"+
    
    "    - `webpack`本身是打包`js`文件的\n"+
    "    - 如果想要打包其他文件,必须进行相关配置\n"+
    
    "  * 如何\n"+
    
    "    - 在当前目录下新建一个`webpack.config.js`\n"+
    
    "    - `npm init`\n"+
    
    "    - 先在`webpack.config.js`中配置**入口和出口**文件\n"+
    
    "      ```javascript\n"+
    "      const path=require('path')\n"+
    "      module.exports={\n"+
    "        //入口\n"+
    "      	entry:'./src/index.js'  //入口文件可以自行修改,\n"+
    "        //出口\n"+
    "        output:{\n"+
    "        //最后会打包成dist文件夹的一个build.js\n"+
    "         path:path.resolve(_dirname,'dist'),\n"+
    "         filename:'build.js'\n"+
    "      	}\n"+
    "      }\n"+
    "      ```\n"+
    
    "  * loader\n"+
    
    "    - 能让`webpack`打包其他非`js`文件\n"+
    
    "  * plugins\n"+
    
    "    - 有效地打包或者压缩文件\n"+
    
    "* dev-server ( 本地服务 )\n"+
    
    "  * 安装\n"+
    
    "    ```javascript\n"+
    "    npm i webpack-dev-server -S\n"+
    "    ```\n"+
    
    "  * 配置\n"+
    
    "    ```javascript\n"+
    "    //webpack.config.js中\n"+
    "    const path=require('path')\n"+
    "    module.exports={\n"+
    "      //入口\n"+
    "    	entry:'./src/index.js'  //入口文件可以自行修改,\n"+
    "      //出口\n"+
    "      output:{\n"+
    "      //最后会打包成dist文件夹的一个build.js\n"+
    "       path:path.resolve(_dirname,'dist'),\n"+
    "       filename:'build.js'\n"+
    "    	},\n"+
    "      devServe:{\n"+
    "        contentBase:'./src', //配置路径\n"+
    "        port:'8080',  //配置端口号\n"+
    "        inline:true //实时刷新\n"+
    "      }\n"+
    "    }\n"+
    "    ```\n"+
    
    "    ```javascript\n"+
    "    //package.json中scripts里\n"+
    "    'dev':'webpack-dev-serve --open --inline'\n"+
    "    ```\n"+
    
    "* loader ( 加载程序 )\n"+
    
    "  * 不同文件的`loader`\n"+
    
    "    | 扩展名                    | 语义                                                | loader举例                                                   |\n"+
    "    | ------------------------- | --------------------------------------------------- | ------------------------------------------------------------ |\n"+
    "    | .js                       | returns module exports                              | babel-loader                                                 |\n"+
    "    | .ts                       | returns module exports                              | ts-loader                                                    |\n"+
    "    | .coffee                   | returns module exports                              | coffee-loader coffee-redux-loader                            |\n"+
    "    | .javascript                      | returns module exports (react component)            | javascript-loader react-hot-loader!javascript-loader                       |\n"+
    "    | .json .json5              | returns json value                                  | json-loader json5-loader                                     |\n"+
    "    | .txt                      | return string value                                 | raw-loader                                                   |\n"+
    "    | .css                      | returns nothing, side effect of adding style to DOM | style-loader!css-loader style-loader!css-loader!autoprefixer-loader |\n"+
    "    | .less                     | returns nothing, side effect of adding style to DOM | style-loader!css-loader!less-loader                          |\n"+
    "    | .scss                     | returns nothing, side effect of adding style to DOM | style-loader!css-loader!scss-loader                          |\n"+
    "    | .styl                     | returns nothing, side effect of adding style to DOM | style-loader!css-loader!stylus-loader                        |\n"+
    "    | .png .jpg .jpeg .gif .svg | returns url to image                                | file-loader url-loader                                       |\n"+
    "    | .woff .ttf                | returns url to font                                 | file-loader url-loader                                       |\n"+
    "    | .wav .mp3                 | returns url to audio                                | file-loader url-loader                                       |\n"+
    "    | .mpeg .mp4 .webm .ogv     | returns url to video                                | file-loader                                                  |\n"+
    "    | .html                     | returns HTML as string                              | html-loader                                                  |\n"+
    "    | .md .markdown             | returns HTML as string                              | html-loader!markdown-loader                                  |\n"+
    "    | .jade                     | returns template function                           | jade-loader                                                  |\n"+
    "    | .hbs .handlebars          | returns template function                           | handlebars-loader                                            |\n"+
    
    "  * 以`css`为例\n"+
    
    "    * 需要先\n"+
    
    "      ```javascript\n"+
    "      npm install style-loader css-loader -S\n"+
    "      ```\n"+
    
    "    * 如何配置\n"+
    
    "      ```javascript\n"+
    "      //在 webpack.config.js中配置\n"+
    "      module:{\n"+
    "        rules:[\n"+
    "          {\n"+
    "            test:/\.css$/,  //以.css结尾\n"+
    "            use:['css-loader','style-loader']\n"+
    "          },\n"+
    "          {\n"+
    "            test:/\.(jpg|jpeg|gif|png)$/,  //以.css结尾\n"+
    "            use:['file.loader']\n"+
    "          }\n"+
    "        ]\n"+
    "      }\n"+
    "      ```\n"+
    
    "      * 假如引用了`background-image`还需要配置图片`loader`,过程同`css`一样\n"+
    
    "* plugins\n"+
    
    "  * `html-webpack-plugin`插件\n"+
    
    "  * 使用\n"+
    
    "    * 安装\n"+
    
    "      ```javascript\n"+
    "      npm i html-webpack-plugin -S\n"+
    "      ```\n"+
    
    "    * 配置\n"+
    
    "      ```javascript\n"+
    "      //webpack.config.js\n"+
    "      const HtmlWebpackPlugin=require('html-webpack-plugin')\n"+
    "      \n"+
    "      ...\n"+
    "      module.exports={\n"+
    "        ...\n"+
    "        plugins:[\n"+
    "          //会自动去找\n"+
    "          new HtmlWebpackPlugin({\n"+
    "            template:'./src/index.html',\n"+
    "            //默认是html , 也可以自动为其命名\n"+
    "            fileName:'a.html',\n"+
    "            minify:{\n"+
    "              removeAttributeQuotes:true,//去除引号\n"+
    "              removeComments:true, //去除注释\n"+
    "              removeEmptyAttributes:true,//去除空属性\n"+
    "              collaspseWhitesapace:true//去除空格回车\n"+
    "            }\n"+
    "          })\n"+
    "        ]\n"+
    "      }\n"+
    "      ```\n"
  },{
    name: 'vuex',
    id: 'vuex',
    markdown: "##### Vuex\n"+

    "- 回顾 : 组件间数据共享\n"+
    
    "  - 父=>子\n"+
    "    - 自定义属性\n"+
    "  - 子=>父\n"+
    "    - $emit\n"+
    "  - 兄弟间\n"+
    "    - EventBus\n"+
    
    "- Vuex是什么\n"+
    
    "  - `Vuex` 是一个实现组件全局状态(`数据`)管理的一种机制,可以方便的管理组件之间数据的共享\n"+
    
    "  - 它采用`集中式存储`管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化\n"+
    
    "  - 关系复杂之间的组件传参,可能会很麻烦\n"+
    
    "    - 比如两个组件不是同属一个父组件的情况,数据想要实现共享,需要传来传去,很麻烦!\n"+
    
    "    - 但是如果使用`Vuex`就比较容易实现,`Vuex`适合这种**大范围 复杂或者比较频繁的数据共享**\n"+
    
    "    - 如下图\n"+
    
    "      ![1584491434588](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images.png)\n"+
    
    "- 使用`Vuex`的优点\n"+
    
    "  - 共享**数据集中**管理,易于开发和维护\n"+
    "  - 高效地实现组件之间的数据共享,**提高开发效率**\n"+
    "  - 存储在`Vuex`里的数据是**响应式的**,能够实时保持**数据和页面的同步**\n"+
    
    "- 什么数据适合存储在`Vuex`中\n"+
    
    "  - 组件中共享的数据,一般才有必要存在`vuex`中,对于组件的私有数据,依旧存在组件的自身的`data`里即可\n"+
    
    "- 安装和配置\n"+
    
    "  - 安装`vuex依赖包`\n"+
    
    "  ```cmd\n"+
    "  npm install vuex --save\n"+
    "  ```\n"+
    
    "  - 创建`store.js`\n"+
    "    - 引入`vuex`\n"+
    "    - 创建`vuex实例`,并且**暴露**出去\n"+
    
    "  ```javascript\n"+
    "  import Vue from 'vue'\n"+
    "  import Vuex from 'vuex'\n"+
    "  Vue.use(Vuex)\n"+
    "  export default new Vue.store({\n"+
    "    state:{},\n"+
    "    mutations:{},\n"+
    "    action:{}\n"+
    "  })\n"+
    "  ```\n"+
    
    "  - 在`main.js`中\n"+
    "    - 引入刚才的`store.js`\n"+
    "    - 挂载在`new Vue()`上\n"+
    
    "  ```javascript\n"+
    "  import store from './store'\n"+
    "  new Vue({\n"+
    "    store  //把store挂载上来\n"+
    "    ...\n"+
    "  }).$mount('#app')\n"+
    "  ```\n"+
    
    "  \n"+
    
    "- 核心概念\n"+
    
    "  - State\n"+
    
    "    - 提供**唯一的公共数据源**,所有的共享数据都要统一放在`store`中的`State`中存储\n"+
    
    "    - 比如,在`store.js`里保存一个全局数据`count`\n"+
    
    "      ```javascript\n"+
    "      export default new Vue.store({\n"+
    "        state : { count:0 }\n"+
    "      })\n"+
    "      ```\n"+
    
    "    - 在组件里访问这个数据的第一种方式\n"+
    
    "      ```javascript\n"+
    "      this.$store.state.count        //js中\n"+
    "      ```\n"+
    
    "      - 如果是在`<template></template>`标签中使用插值表达式时,this可以省略\n"+
    
    "      ```html\n"+
    "      <template>\n"+
    "        <div>\n"+
    "          <p>{{$store.state.count}}</p>\n"+
    "        </div>\n"+
    "      </template>            <!--template标签里-->\n"+
    "      ```\n"+
    
    "    - 在组件里访问这个数据的第二种方式\n"+
    
    "      - 在`vuex`中导入`mapState`函数\n"+
    
    "        ```javascript\n"+
    "        import {mapState} from 'vuex'\n"+
    "        ```\n"+
    
    "      - 把刚才导入的`mapState`函数,将当前组件需要的全局数据,映射为当前组件的`computed`计算属性,之后就可以像使用普通`computed`属性一样使用这个全局属性\n"+
    
    "        ```javascript\n"+
    "        computed:{\n"+
    "          ...mapState(['数据1','数据2','数据3'])   //注意要使用'...'展开运算符,因为mapState匹配的是一个数组\n"+
    "        }\n"+
    "        ```\n"+
    
    "    - 在组件里修改这个全局数据\n"+
    
    "      ```javascript\n"+
    "      this.$store.state.count=1        //js中\n"+
    "      ```\n"+
    
    "      - 这么写确实让全局的`count`数据得到了修改,但是禁止这么写\n"+
    
    "  - 要通过`Mutation`进行进行`Store`中的数据变更\n"+
    
    "  - Mutation\n"+
    
    "    - 禁止直接修改`Store`中的数据\n"+
    
    "      - 直接修改的方式**无法监控**数据的变化,极**不利于后期维护**\n"+
    
    "    - 只能通过`mutation`修改`Store`中的数据\n"+
    
    "    - 因为通过这种方式的操作**虽然稍微繁琐一些**,但是**便于集中监控**所有的数据变化\n"+
    
    "    - **Mutation**使用的第一种方式\n"+
    
    "      - 在`Store.js`定义`Mutation`函数\n"+
    
    "        ```javascript\n"+
    "        export default new Vue.store({\n"+
    "          state:{\n"+
    "            num:0\n"+
    "          },\n"+
    "          mutations:{\n"+
    "            calc(state){\n"+
    "              state.num++\n"+
    "            }\n"+
    "          },\n"+
    "          action:{}\n"+
    "        })\n"+
    "        ```\n"+
    
    "        - 定义需写在`new Vue.store()`里面\n"+
    
    "      - 在`mutations`对象里存放着修改`state`中数据的方法\n"+
    
    "        - 每个方法都有一个`state`(形参)\n"+
    "        - 要修改哪个属性,就在方法内对`state.属性名`进行相应的操作\n"+
    
    "      - 如何在组件内通过`Mutation`修改数据\n"+
    
    "        - 通过`this.$store.commit('方法名')`\n"+
    
    "      - `commit('xxx')`的作用就是调用`Mutation`中的`xxx`方法\n"+
    
    "        ```html\n"+
    "        <button @click='add'></button>\n"+
    "        <script>\n"+
    "        export default{\n"+
    "         methods:{\n"+
    "           add(){\n"+
    "             this.$store.commit('calc')  \n"+
    "           }\n"+
    "         } \n"+
    "        }\n"+
    "        </script>\n"+
    "        ```\n"+
    
    "      - 如何在调用`Mutation`时传参\n"+
    
    "        - 直接把想要其他形参写在`state`后面即可\n"+
    
    "      - 但是`state`必须是第一个,这些形参不能写在它前面\n"+
    
    "        ```javascript\n"+
    "        export default new Vue.store({\n"+
    "          state:{\n"+
    "            num:0\n"+
    "          },\n"+
    "          mutations:{\n"+
    "            calc(state,形参1,形参2){\n"+
    "              state.num+=形参1\n"+
    "              console.log(形参2)\n"+
    "            }\n"+
    "          },\n"+
    "          action:{}\n"+
    "        })\n"+
    "        ```\n"+
    
    "        ```html\n"+
    "        <button @click='add'></button>\n"+
    "        <script>\n"+
    "        export default{\n"+
    "         methods:{\n"+
    "           add(){\n"+
    "             this.$store.commit('calc',4,5)  \n"+
    "           }\n"+
    "         } \n"+
    "        }\n"+
    "        </script>\n"+
    "        ```\n"+
    
    "    - **Mutation**使用的第二种方式\n"+
    
    "      - 通过`mapMutation`函数\n"+
    
    "        - 从`vuex`中引入该函数\n"+
    
    "          ```javascript\n"+
    "          import {mapMutation} from 'vuex'\n"+
    "          ```\n"+
    
    "        - 通过刚才的函数,将需要的`Mutation`函数,映射为当前组件的`methods`方法\n"+
    
    "          ```javascript\n"+
    "          export default{\n"+
    "            methods:{\n"+
    "              ...mapMutation(['calc'])  //使用...展开运算符,把数组里的所有方法都映射进来\n"+
    "            \n"+
    "          }\n"+
    "          ```\n"+
    
    "    - 在`Mutation`函数里不能直接执行`异步`操作\n"+
    
    "    - 想要在`Vuex`中执行异步操作,要通过`Action`处理异步任务\n"+
    
    "  - Action\n"+
    
    "    - 何时\n"+
    
    "      - 如果需要通过异步操作变更数据,必须通过`Action`,不能通过`Mutation`\n"+
    "      - 原理是在`Action`的方法里**异步地**触发`Mutation`方法,但是也不能执行修改\n"+
    
    "      ```JavaScript\n"+
    "      export default new Vue.store({\n"+
    "        state:{\n"+
    "          num:0\n"+
    "        },\n"+
    "        mutations:{\n"+
    "          calc(state){\n"+
    "            state.num++\n"+
    "          }\n"+
    "        },\n"+
    "        actions:{\n"+
    "          calcAnyc(content){\n"+
    "            setTimeout(()=>{\n"+
    "               content.commit('calc')   //如果有异步操作,先触发action中的方法,再通过这个方法触发Mutation里的方法\n"+
    "            },1000)\n"+
    "          }\n"+
    "        }\n"+
    "      })\n"+
    "      ```\n"+
    
    "      ```html\n"+
    "      <button @click='addAnyc'></button>\n"+
    "      <script>\n"+
    "      export default{\n"+
    "       methods:{\n"+
    "         addAnyc(){\n"+
    "           this.$store.dispatch('calcAnyc')  \n"+
    "         }\n"+
    "       } \n"+
    "      }\n"+
    "      </script>\n"+
    "      ```\n"+
    
    "    - 如何带参传入\n"+
    
    "      - 和上面`Mutation`类似,把形参写在后面\n"+
    
    "      ```javascript\n"+
    "      export default new Vue.store({\n"+
    "        state:{\n"+
    "          num:0\n"+
    "        },\n"+
    "        mutations:{\n"+
    "          calc(state,形参1){\n"+
    "            state.num+=形参\n"+
    "          }\n"+
    "        },\n"+
    "        actions:{\n"+
    "          calcAnyc(content,形参1){\n"+
    "            setTimeout(()=>{\n"+
    "               content.commit('calc',形参1)   //如果有异步操作,先触发action中的方法,再通过这个方法触发Mutation里的方法\n"+
    "            },1000)\n"+
    "          }\n"+
    "        }\n"+
    "      })\n"+
    "      ```\n"+
    
    "      ```html\n"+
    "      <button @click='addAnyc'></button>\n"+
    "      <script>\n"+
    "      export default{\n"+
    "       methods:{\n"+
    "         addAnyc(){\n"+
    "           this.$store.dispatch('calcAnyc',形参1)  \n"+
    "         }\n"+
    "       } \n"+
    "      }\n"+
    "      </script>\n"+
    "      ```\n"+
    
    "      - `this.$store.dispatch('calcAnyc',形参)  `会先把形参传给`Action`中的方法,`Action`中的方法在异步调用`Mutation`中的方法时,会把自己接收到的形参再传过去\n"+
    
    "    - 触发Action的另一种方式\n"+
    
    "      - 从`Vuex`中导入`mapActions`函数\n"+
    
    "        ```javascript\n"+
    "        import {mapActions} from 'vuex'\n"+
    "        ```\n"+
    
    "      - 将指定的`action`函数,映射为当前组件的`methods`方法\n"+
    
    "        ```javascript\n"+
    "        methods:{\n"+
    "          ...mapActions(['calcAnyc'])\n"+
    "        }\n"+
    "        ```\n"+
    
    "      - 像使用`methods`里的方法一样使用`action`函数,传参也一样\n"+
    
    "        ```html\n"+
    "        <button @click='calcAnyc'></button>\n"+
    "        <script>\n"+
    "        export default{\n"+
    "         methods:{\n"+
    "            ...mapActions(['calcAnyc']) ,\n"+
    "         } \n"+
    "        }\n"+
    "        </script>\n"+
    "        ```\n"+
    
    "  - Getter\n"+
    
    "    - 什么是\n"+
    "      - 会对`Store`里的数据进行加工生成新的数据,类似`vue`的计算属性\n"+
    "    - `Store`中的数据发生变化,`Getter`里的数据也会变化\n"+
    
    "- 不会修改`Store`里的原数据\n"+
    "      \n"+
    
    "  - 如何\n"+
    
    "  - 如何定义\n"+
    
    "    ```javascript\n"+
    "    export default new Vue.store({\n"+
    "        state:{\n"+
    "        num:0\n"+
    "        },\n"+
    "        getters:{\n"+
    "          getNum(state){\n"+
    "            return '现在数字是'+state.num\n"+
    "          }\n"+
    "        }\n"+
    "      })\n"+
    "    ```\n"+
    
    "    - 如何使用\n"+
    
    "      ```javascript\n"+
    "      export default{\n"+
    "       methods:{\n"+
    "       showNum(){\n"+
    "           this.$store.getters('getNum')  \n"+
    "         }\n"+
    "       } \n"+
    "      } //js\n"+
    "      ```\n"+
    
    "      ```javascript\n"+
    "      html\n"+
    "      <p>{{$store.getters.getNum}}</p>  <!--html-->\n"+
    "      ```\n"+
    
    "      - 第二种方法\n"+
    
    "      - 引入`mapGetters`\n"+
    
    "        ```javascript\n"+
    "        import { mapGetters } from 'vuex'\n"+
    "        ```\n"+
    
    "      - 使用展开运算符放在`computed`属性里,当做普通`computed`属性来用\n"+
    
    "        ```JavaScript\n"+
    "        computed:{\n"+
    "          ...mapGetters(['getNum'])\n"+
    "        }\n"+
    "        ```\n"
  },{
    name: 'v-if vs v-show',
    id: 'vif_vshow',
    markdown: "##### v-if和v-show区别\n"+

    "* 相同\n"+
    "  * 都是控制元素显示和隐藏\n"+
    "  * 都是通过一个布尔判断的返回值空值\n"+
    
    "* v-show\n"+
    "  * 控制的原理是`display:none`\n"+
    "  * 控制单个元素显示或者隐藏\n"+
    "  * 适合那种根据条件变化可以不断切换`显示 / 隐藏`状态的元素\n"+
    "* v-if\n"+
    "  * 控制的原理是删除布尔判定值为`false`的元素\n"+
    "  * 除此之外,可以配合`v-else`,`v-else-if`使用\n"+
    "    * 可以控制元素多选一显示\n"+
    "    * 假如`v-if`条件不满足,那就进而判定`v-else-if`,都不满足就会显示`v-else`,并且把不满足的元素节点删去\n"+
    "  * 适合那种组件渲染之初就已经决定显示或者隐藏的情况 ,不会再反复横跳, 这种元素一旦 `显示 / 隐藏` 了基本就不再变化\n"
  },{
    name: 'computed vs Watch',
    id: 'computedAndWatch',
    markdown: 
    "##### computed  vs watch\n"+
    
    "* computed\n"+
    
    "  * 只要某个变量是根据其他变量计算而得到的,就应该写在`computed`里面\n"+
    "  * 访问和使用时,和访问普通`data(){ }`里面的数据方法一样\n"+
    "  * `computed`里的内容不实际被存储\n"+
    "  * 因为其内容是根据其他数据计算而得到的\n"+
    "    * 因此其他相关的数据发生改变时\n"+
    "    * `computed`里的内容也会改变\n"+
    "  * 比如\n"+
    
    "  ```javascript\n"+
    "  export default{\n"+
    "    data(){\n"+
    "      return{\n"+
    "        num1:2,\n"+
    "        num2:3\n"+
    "      }\n"+
    "    },\n"+
    "    computed:{\n"+
    "      num3(){\n"+
    "        this.num1*this.num2\n"+
    "      }\n"+
    "    }\n"+
    "  }\n"+
    "  ```\n"+
    
    "  ```javascript\n"+
    "  <div>{{num3}}</div>\n"+
    "  \n"+
    "  //如果num1或者num2发生了改变  ,那么 num3 也就发生了变化\n"+
    "  ```\n"+
    
    "* watch\n"+
    
    "  * 监控一个属性\n"+
    "  * 只要这个属性发生了变化,就会立即调动`watch`里面的同名方法\n"+
    "  * 比如\n"+
    
    "  ```javascript\n"+
    "  \n"+
    "  export default{\n"+
    "    data(){\n"+
    "      return{\n"+
    "        num:2\n"+
    "       \n"+
    "      }\n"+
    "    },\n"+
    "    watch:{\n"+
    "      num(){\n"+
    "        console.log('num发生了变化')\n"+
    "      }\n"+
    "    }\n"+
    "  }\n"+
    "  ```\n"+
    
    "* 区别\n"+
    
    "  * `watch`监控的是一个已经存在的属性,每当这个属性发生了改变,就调用相应的方法\n"+
    "  * `computed`是根据其他属性,计算得到另一个属性,这个属性是动态计算而成,并不会实际存储\n"
  },{
    name: "beforeMount 和 created 的区别",
    id: 'vue_life_circle',
    markdown: "##### beforeMount 和 created 的区别\n"+
    "* 相同点\n"+
    "  * 两者能做的事情基本一样\n"+
    "    * 都可以发送请求\n"+
    "    * 操作`data`\n"+
    "    * 或者是调用`methods`中的一些方法\n"+
    "    * 但是因为此时页面并没有渲染完成,并不能对页面数据绑定的内容进行`DOM`操作\n"+
    "* 不同点\n"+
    "  * `created`阶段中中的`el`并没有得到初始化\n"+
    "    * `el`就是`new Vue`对象监控的容器\n"+
    "  * `beforeMount`阶段中,`el`已经得到了初始化\n"+
    "    * 但是因为页面渲染还没有完成\n"+
    "    * 页面上还是`{{ }}`占位符\n"+
    
    "##### vue生命周期函数\n"+
    
    "| 阶段          | 特点                                                         | 能干啥                                                       |\n"+
    "| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |\n"+
    "| beforeCreate  | data中的数据没有得到初始化<br />el也没有的到初始化<br />     | 不能访问数据,也不能调用方法<br />不能DOM操作                 |\n"+
    "| created       | data里面的数据得到了初始化<br />el没有得到初始化<br />页面没有渲染完成 | 操作数据,手动调用方法<br />发送请求<br />但是不能DOM操作     |\n"+
    "| beforeMount   | data里面的数据得到初始化<br />el已经得到了初始化<br />但是页面还是用`{{ }}`插值表达式占位 | 操作数据,手动调用方法,<br />发送请求<br />此时依旧不能进行操作 |\n"+
    "| Mounted       | data,el得到了初始化,<br />页面也渲染完成                     | 操作数据,手动调动方法,<br />发送请求,DOM操作                 |\n"+
    "| beforeUpdate  | `view`层的数据发生了改变,会触发这个声明周期函数<br />如果仅仅是`data`层的数据发生了变化并不会触发这个钩子函数<br />在此完成数据被改变之前最后进行的操作 |                                                              |\n"+
    "| updated       | `view`层的数据发生了改变,会触发这个声明周期函数<br />如果仅仅是`data`层的数据发生了变化并不会触发这个钩子函数<br /> |                                                              |\n"+
    "| beforeDestroy | 销毁前执行                                                   | 清除定时器,解绑数据 方法等                                   |\n"+
    "| destoryed     | DOM元素依旧存在,只是不再会受到`new Vue`的监控                |                                                              |\n"
  },{
    name: '介绍原型链',
    id: 'prototypeAnd__proto__',
    markdown: "##### 介绍原型链\n"+

    "* 原型链其实就是控制访问对象属性和方法的一种链式关系逻辑\n"+
    
    "  * 当我们访问一个对象的成员时\n"+
    "    * 会优先去这个对象的自有成员中查找这个方法\n"+
    "    * 如果没有,就会去其`__proto__`原型上面找\n"+
    "    * 还没有,就去原型的原型`obj.__proto__.__proto__`上面找\n"+
    "    * 直到找到顶层都没有\n"+
    "    * 才返回`undefined`\n"+
    
    "* 提到原型就不得不提到构造函数\n"+
    
    "  * 构造函数其实就是一种创建其类型 实例对象 的模板函数\n"+
    "  * 上面储存着描述这类对象特征的 属性 \n"+
    "  * 虽然构造函数上面也可以存储方法\n"+
    "  * 但是如果在构造函数上存储方法\n"+
    "    * 这个构造函数每次被实例化一次,都重新创建这个方法一次\n"+
    "    * 浪费性能\n"+
    "    * 况且 **代码重用** 本身就是函数设定的初衷 , 这一行为有违这个初衷\n"+
    "  * 于是,我们使用原型对象来保存一类对象 **共有** 的方法\n"+
    
    "* 还不得不提到面向对象的多态特征\n"+
    
    "  * 我们知道在`js`中,万物皆对象\n"+
    
    "  * 最顶层的基类叫做`Object` , 任何其他的 类 其实都是`Object`的子类\n"+
    
    "    * 比如`String , Number , Array ,Date ...`等等\n"+
    
    "  * 有时候 , 我们想用一个方法 , 但是从父类那里继承得来的方法并非那么好用 , 不能完全满足我们的需要\n"+
    
    "  * 我们可以利用 原型链 的成员访问优先级 原理重写这个方法\n"+
    
    "    * 把同名方法重写为自有方法,或者是保存在原型上的方法,让它不再从更高的父级那里继承而来\n"+
    "      *  有自有方法,就绝对不会去原型上找\n"+
    "      * 原型上有,就绝对不会再沿着原型链再往上找\n"+
    "      * 总之...\n"+
    "      * 就近原则\n"+
    
    "  * 也正是因此,同样是一个`toString( )`方法,在不同情况下的结果不一样 , 就是因为在设计时 , 针对不同的情况,做了不同的重写,而不是一味的继承\n"+
    
    "    ```javascript\n"+
    "    对象.toString()   //[Object object]\n"+
    "    数组.toString()   //把数组打散,并且扁平化为一段字符\n"+
    "    数字.toString()   //字符数字\n"+
    "    ...\n"+
    "    ```\n"
  },{
    name: '定时器',
    id: 'timerType',
    markdown: 
    "##### setTimeout 和 setInterval\n"+
    
    "* 相同\n"+
    "  * 都是定时器\n"+
    "  * 定时器里的`this`一般指向`window`\n"+
    "  * 定时器里面的回调函数是异步执行的	    \n"+
    
    "* 不同\n"+
    
    "  * `setTimeout` 定时器里的函数 ,  只执行一次\n"+
    "  * 而`setInterval`里的函数 , 会每隔一个时间周期就执行一次\n"+
    
    "* 引出同步和异步的概念\n"+
    
    "  * 同步操作 \n"+
    
    "    * 前面的操作没有执行完毕 , 后续代码就不能执行\n"+
    
    "  * 异步操作\n"+
    
    "    * 在 编译 `js`代码时候,会把异步进行放在事件队列里\n"+
    
    "    * 等主进程的同步任务执行完了,就会去执行异步任务\n"+
    
    "    * 异步操作是无序的\n"+
    
    "      * 比如我们发送两条`ajax`请求\n"+
    "      * 先写的那句`ajax`未必能比后写的先得到返回结果\n"+
    
    "    * 使得很多操作失控\n"+
    
    "    * 如何解决\n"+
    
    "      * 旧方法 \n"+
    
    "        * 回调嵌套\n"+
    
    "      * 新方法\n"+
    
    "        * `Promise then` / `Promise (async function(){ await... })`\n"+
    
    "        * 比如\n"+
    
    "          ```javascript\n"+
    "          //es6\n"+
    "          var total=0\n"+
    "          var add=function(num){\n"+
    "            return new Promise(function(resolve,reject){\n"+
    "              setTimeout(function(){\n"+
    "                resolve(num)\n"+
    "              },200)\n"+
    "            })\n"+
    "          }\n"+
    "          add(2).then(res=>{\n"+
    "            total+=res;\n"+
    "            return add(3)\n"+
    "          }).then(res=>{\n"+
    "            total+=res;\n"+
    "            return add(4)\n"+
    "          }).then(res=>{\n"+
    "            total+=res;\n"+
    "            console.log(total)\n"+
    "          })\n"+
    "          //因为几个操作可以是并行的无必然的顺序,还可以使用Promise.all进行进一步简化\n"+
    "          Promise.all([\n"+
    "            add(2),add(3),add(4)\n"+
    "          ]).then(res=>{\n"+
    "           total=res.reduce((prev,next)=>prev+next)\n"+
    "          })\n"+
    "          ```\n"+
    
    "          ```javascript\n"+
    "          //es7\n"+
    "          \n"+
    "          var total=0\n"+
    "          var add=function(num){\n"+
    "            return new Promise(function(resolve,reject){\n"+
    "              setTimeout(function(){\n"+
    "                resolve(num)\n"+
    "              },200)\n"+
    "            })\n"+
    "          }\n"+
    "          (async function(){\n"+
    "            var res=await Promise.all([add(2),add(3),add(4)])\n"+
    "            total=res.reduce((prev,next)=>prev+next)\n"+
    "            console.log(total)\n"+
    "          })()\n"+
    "          ```\n"+
    
    "          \n"
  },{
    name: '前端性能优化',
    id: 'wfePre',
    markdown: "##### 前端性能优化\n"+

    "* 优化发送`ajax`请求\n"+
    
    "  * 使用 **节流** 或 **防抖** 等技术\n"+
    "    *  节流\n"+
    "      * 在一段时间内 , 只能发送一次请求,稀释事件的触发频率\n"+
    "    *  防抖\n"+
    "      * 在一段时间里 , 多次触发会阻止事件触发\n"+
    
    "* 优化静态资源\n"+
    
    "  * 小图或者icon 采用`精灵图 + 定位` 的方式实现加载\n"+
    
    "  * 懒加载\n"+
    "    * 给`图片 / 视频 `等`src`设置为空\n"+
    "    * 将路径写在一个自定义属性里\n"+
    "    * 每次页面加载或者`onscrll`(也就是滚动时候) 都会进行判断\n"+
    "    * 根据 用户设备 **一屏的高度** 和 **图片出现距屏幕上边沿的** 距离 判断图片是否已经进入用户视野\n"+
    "    * 进入用户视野的图片,再把自定义事件里的路径赋值给`src`\n"+
    
    "* 使用`webpack`打包工具,把众多`css js` 文件进行打包 ,缩小项目体积\n"+
    
    "* `js`文件引用放在`css`后\n"+
    
    "  * 浏览器会根据`css`和`html`代码生成`Render Tree`来渲染页面\n"+
    "  * 但是遇到`<script></script>`就会阻塞页面渲染\n"+
    
    "* 别用`table`布局\n"+
    
    "  * 否则很小的`DOM`操作,就可能导致页面的重排重绘\n"+
    
    "* 使用事件委托\n"+
    
    "  * 如果一系列平级的`DOM`元素都可以触发事件\n"+
    "  * 不要给他们每个都绑定事件\n"+
    "  * 而是给它们的 **父级元素** 绑定事件\n"+
    "    * 到时候根据事件对象判断 触发事件的元素是哪一个\n"+
    "    * 再执行相应操作\n"+
    
    "* 优化`DOM`操作\n"+
    
    "  * 比如有些时候,我们进行一系列增加页面元素的`DOM`操作\n"+
    "  * 如果每次让他们一个一个执行\n"+
    "  * 每次新增一个`DOM`元素,页面就会重排重绘一次\n"+
    "  * 可以把这些新增的元素统一写在一个 **数组**里\n"+
    "  * 增加完成后, 打散这个数组, 一次性渲染到页面上\n"+
    
    "* 组件化开发中\n"+
    
    "  * 组件模块化 按需引入\n"+
    
    "    - 比如我们只想用`MintUI`的提示框功能\n"+
    
    "    - 就不要整个引入`MintUI`\n"+
    
    "    - 而是按需引入\n"+
    
    "      ```javascript\n"+
    "      //举个例子\n"+
    "      import { toast } from './MintUI'\n"+
    "      ```\n"+
    
    "  * 组件开发中,组件也使用懒加载进行优化\n"+
    
    "* 递归比较消耗性能 , 如果一个功能可以使用循环完成,就不要使用递归\n"
  },{
    name: '前端安全优化',
    id: 'wfeSec',
    markdown: "##### 前端安全优化\n"+

    "* 使用`post`发送请求\n"+
    "* 输入合法性验证\n"+
    "  * 判定用户输入的内容是否符合预期的格式\n"+
    "* 对服务器端输出到浏览器的数据进行编码或转义\n"+
    "  * 相应的`JavaScript`的编码方式可以使用`JavascriptEncode`\n"+
    "* `Web`应用程序在设置`cookie`时，将其属性设为`HttpOnly`\n"+
    "  * 涉及到重要信息的数据,不要保存在`cookie`里\n"+
    "* 适当使用**验证码**\n"+
    "* 使用拦截器验证权限\n"
  },{
    name: '前端布局',
    id: 'layout',
    markdown: "##### 主流布局方式\n"+
    "* 流式布局\n"+
    
    "  * 特点\n"+
    "    * 给定义一个高度\n"+
    "    * 宽度采用百分比的方式\n"+
    "    * 但是因为还是有给定的高度和文字大小\n"+
    "      * 导致在一些比较极端的设备下,显示效果不尽人意\n"+
    
    "* 瀑布流式布局\n"+
    
    "  * 特点\n"+
    
    "    * 不定高\n"+
    
    "    * 内容多的容器就高度就大 , 否则就小\n"+
    
    "    * 因此就形成了参差不齐,类似瀑布状的结构\n"+
    
    "      ![1585789986822](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images.png)\n"+
    
    "    * 实现方式\n"+
    
    "      ```css\n"+
    "      .container{\n"+
    "      	width: 1200px;\n"+
    "      	margin:20px auto;\n"+
    "      	columns: 4;\n"+
    "      	column-gap:40px;\n"+
    "      	height: 100%;\n"+
    "      }\n"+
    "      .container>.box{\n"+
    "      	width:100%;\n"+
    "      	margin:0 0 20px;\n"+
    "      	padding: 10px;\n"+
    "      	background-color: #fff;\n"+
    "      	break-inside:avoid;\n"+
    "      }\n"+
    "      ```\n"+
    
    "* 响应式布局\n"+
    
    "  * 特性\n"+
    
    "    * 根据设备的不同,给予不同的样式和 布局 方式\n"+
    
    "  * 如何实现\n"+
    
    "    * 可以手写媒体查询\n"+
    
    "      ```css\n"+
    "      @media (max-width: 1200px){\n"+
    "      		.container{\n"+
    "      		columns: 3;\n"+
    "      		width:calc(100%-40px);\n"+
    "      		box-sizing: border-box;\n"+
    "      		padding: 10px;}\n"+
    "      }\n"+
    "      @media (max-width: 768px){\n"+
    "      		.container{\n"+
    "      		columns: 2;\n"+
    "      		}\n"+
    "      }\n"+
    "      @media (max-width: 448px){\n"+
    "      		.container{\n"+
    "      		columns: 1;\n"+
    "      		}\n"+
    "      }\n"+
    "      ```\n"+
    
    "    * 或者使用`bootStrap`等已经写好了媒体查询的样式库\n"+
    
    "      ```javascript\n"+
    "      <div class='col-md-4 col-lg-3'></div>\n"+
    "      ```\n"
  },{
    name: '事件循环机制',
    id: 'eventLoop',
    markdown: "##### 事件循环和事件队列(event loop)\n"+

    "* `JavaScript`是**单线程**的\n"+
    "  * 前一个任务完成 , 才会去执行后一个任务\n"+
    "  * 如果前一个任务很耗时 , 那么后一个任务就不能得到执行\n"+
    "* 为了解决这个问题 , 在`js`出现了**同步操作**和**异步操作**\n"+
    "  * 同步操作\n"+
    "    * 在主线程( `stack` )上顺次执行的操作,只有前一项任务执行完毕了,后一项任务才会去执行\n"+
    "  * 异步操作\n"+
    "    * 不进入主线程\n"+
    "    * 进入 **任务队列** 中等待\n"+
    "    * 只有 **任务队列** 通知主线程 这个任务可以执行了\n"+
    "      * 这个任务才会去进入主线程执行\n"+
    
    "![img](https://upload-images.jianshu.io/upload_images/9418222-3ee70117afb9a5d1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1148/format/webp)\n"+
    
    "* 结合这张图,我们总体梳理一下流程\n"+
    
    "  * 所有的 同步任务 都在**主线程** 执行 , 形成一个执行栈\n"+
    "    * 同步任务 入栈\n"+
    "    * 同步任务 得到执行\n"+
    "    * 同步任务 出栈\n"+
    "  * 在 **主线程** 之外 , 还有一个 **任务队列** (`task queue`)\n"+
    "    * 只要 **异步任务** 有了执行结果 ,先不入栈\n"+
    "    * 在 **任务队列** 中 放置一个事件 \n"+
    "  * 当 **主线程** 中所有的同步任务执行完了\n"+
    "    * 就会去读取 **任务队列**\n"+
    "    * 查看 刚才注册的 **事件**\n"+
    "    * 那些 **事件** 对应的 **异步任务** 结束等待状态 , **入栈** 执行\n"+
    "  * 主线程会不断地 重复上述 **三步操作**\n"+
    "    * 主线程从 **任务队列** 中读取事件,这个过程是不断循环的\n"+
    "    * 因此整个运行机制称为 **事件循环** (`event loop`)\n"+
    
    "* 关于 **宏任务** 和 **微任务**\n"+
    
    "  * 宏任务\n"+
    
    "    * 每次在 **栈**  中执行的任务\n"+
    "    * 每次会把 **任务代码** 从头到尾执行完毕\n"+
    "    * 期间不会去执行其他任务\n"+
    "    * 包括`script,setTimeout,setInterval` \n"+
    
    "  * 微任务\n"+
    
    "    * 当前 任务 执行完毕后 **立刻执行** 的函数\n"+
    "    * 包括`promise中的then(),process.nextTick `\n"+
    
    "  * 执行过程\n"+
    
    "    * 执行 整体代码( **宏任务** )后，开始第一次循环\n"+
    "    * 接着执行所有的 **微任务**\n"+
    "    * 然后再次从**宏任务**开始，找到其中一个任务队列执行完毕\n"+
    "    * 再执行所有的**微任务**\n"+
    "    * ...\n"+
    "    * 循环往复\n"+
    
    "    ![img](https://user-gold-cdn.xitu.io/2017/11/21/15fdcea13361a1ec?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)\n"+
    
    "* 以一道例题来分析说明\n"+
    
    "  ```javascript\n"+
    "  \n"+
    "  setTimeout(function(){\n"+
    "  	console.log('1')\n"+
    "  });\n"+
    "   \n"+
    "  new Promise(function(resolve){\n"+
    "  	console.log('2');\n"+
    "    resolve();\n"+
    "  }).then(function(){\n"+
    "  	console.log('3')\n"+
    "  });\n"+
    "   \n"+
    "  console.log('4')\n"+
    "  \n"+
    "  ```\n"+
    
    "  * 分析这段代码\n"+
    "    * 我们这段代码整体是个 **宏任务**\n"+
    "      * 把这个任务 **从头到尾** 执行完毕\n"+
    "        * 到了`setTimeout(function(){console.log('1')})`时,发现是异步任务,暂不入栈,放到任务队列里等待\n"+
    "        * 到了`new Promise`,同步任务,立刻执行 ,打印`2`\n"+
    "          * `promise`是为了解决异步任务无序调用而生的,其本身是**同步**的\n"+
    "        * 到了`then( )`加入 **微任务** 队列 ,等待本次宏任务执行完毕后 立刻执行\n"+
    "        * 到了`console.log(4)` ,同步任务,立刻执行\n"+
    "    * 第一次 **宏任务** 执行完毕\n"+
    "    * 会去执行所有的**微任务**\n"+
    "      *  因此执行刚才的微任务`then()`任务,打印`3`\n"+
    "    * 微任务执行完毕后,刚才任务队里的定时器 **入栈**\n"+
    "    * 执行,结果是打印`1`\n"+
    
    "* 分析一道更难的题\n"+
    
    "  ```javascript\n"+
    "  console.log(1);\n"+
    "  \n"+
    "  setTimeout(() => {\n"+
    "    console.log(2);\n"+
    "    Promise.resolve().then(() => {\n"+
    "      console.log(3)\n"+
    "    });\n"+
    "  });\n"+
    "  \n"+
    "  new Promise((resolve, reject) => {\n"+
    "    console.log(4)\n"+
    "    resolve(5)\n"+
    "  }).then((data) => {\n"+
    "    console.log(data);\n"+
    "  })\n"+
    "  \n"+
    "  setTimeout(() => {\n"+
    "    console.log(6);\n"+
    "  })\n"+
    "  \n"+
    "  console.log(7);\n"+
    "  ```\n"+
    
    "  * 分析这段代码\n"+
    "    * 代码整体是 **宏任务**\n"+
    "      * **从头到尾**执行完毕\n"+
    "        * 到了`console.log(1)`,同步任务,立刻执行 ,打印`1`\n"+
    "        * 到了`setTimeout()`这里 , 异步任务先加入任务队列里等待执行\n"+
    "        * 到了`promise`这里 ,同步任务,立刻执行,打印`4`\n"+
    "        * 到了`then( )`这里,将`then`加入微任务队列,等待本次宏任务执行完了,会立刻执行\n"+
    "        * 到了`setTimeout()`这里,继续加入任务队里,等待\n"+
    "        * 到了`console.log(7)`,直接打印`7`\n"+
    "    * 本次**宏任务**结束了,会立刻执行所有**微任务**\n"+
    "    * 所以会执行刚才的`then`,打印`promise`传来的`5`\n"+
    "    * 之后 **事件队列** 里的宏任务依次 **入栈**\n"+
    "    * 先是之前第一个定时器里的函数\n"+
    "      * `console.log(2)`,会立刻打印`2`\n"+
    "      * 然后会将`then(console.log(3))`加入**微任务** 中,等待本次宏任务结束了,立刻执行\n"+
    "      * 本次宏任务至此完毕\n"+
    "    * 立刻执行所有 **微任务** ,打印`3`\n"+
    "    * 队列里下一个宏任务入栈执行 ,也就是我们第二个定时器,打印`6`\n"+
    
    "  \n"+
    
    "  \n"
  },{
    name: '跨域问题',
    id: 'cors',
    markdown: "##### 解决跨域问题\n"+

    "* 同源策略\n"+
    "  * 浏览器 **最核心**,**最基本**的安全功能\n"+
    "  * 所谓的同源\n"+
    "    * 协议\n"+
    "    * 域名\n"+
    "    * 端口\n"+
    "    * 三者必须相同 ,否则就是跨域\n"+
    "  * 同源策略限制以下行为\n"+
    "    * `ajax`发送\n"+
    "    * `Cookie`,`localStroage`,`IndexDB`读取不能\n"+
    "    * `DOM`和`js`对象无法发送\n"+
    
    "* 跨域的方式\n"+
    
    "  * 跨域资源共享( **CORS** )\n"+
    
    "    * 目前的主流方式\n"+
    
    "    * 假如不带`cookie`,前端不需要管\n"+
    
    "    * 后端 ( `Node.JS`写法,其他语法各有各的写法 )\n"+
    
    "      ```javascript\n"+
    "      var http = require('http');\n"+
    "      var server = http.createServer();\n"+
    "      var qs = require('querystring');\n"+
    "      \n"+
    "      server.on('request', function(req, res) {\n"+
    "          var postData = '';\n"+
    "      \n"+
    "          // 数据块接收中\n"+
    "          req.addListener('data', function(chunk) {\n"+
    "              postData += chunk;\n"+
    "          });\n"+
    "      \n"+
    "          // 数据接收完毕\n"+
    "          req.addListener('end', function() {\n"+
    "              postData = qs.parse(postData);\n"+
    "      \n"+
    "              // 跨域后台设置\n"+
    "              res.writeHead(200, {\n"+
    "                  'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie\n"+
    "                  'Access-Control-Allow-Origin': 'http://www.domain1.com',    // 允许访问的域（协议+域名+端口）\n"+
    "                  /* \n"+
    "                   * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，\n"+
    "                   * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问\n"+
    "                   */\n"+
    "                  'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'  // HttpOnly的作用是让js无法读取cookie\n"+
    "              });\n"+
    "      \n"+
    "              res.write(JSON.stringify(postData));\n"+
    "              res.end();\n"+
    "          });\n"+
    "      });\n"+
    "      \n"+
    "      server.listen('8080');\n"+
    "      console.log('Server is running at port 8080...');\n"+
    "      ```\n"+
    
    "    * 假如需要带`cookie`,前端也需要设置一下\n"+
    
    "      ```javascript\n"+
    "      //原生ajax 发请求时加上\n"+
    "      xhr.withCredentials = true;\n"+
    "      \n"+
    "      //jq ajax\n"+
    "      $.ajax({\n"+
    "          ...\n"+
    "         xhrFields: {\n"+
    "             withCredentials: true    // 前端设置是否带cookie\n"+
    "         },\n"+
    "         crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie\n"+
    "          ...\n"+
    "      });\n"+
    "        \n"+
    "      //axios\n"+
    "      axios.defaults.withCredentials = true\n"+
    "      ```\n"+
    
    "      \n"+
    
    "  * jsonp 方式\n"+
    
    "    * 特点 \n"+
    
    "      * **前后端** 均需配置\n"+
    "      * 只能用于`get`请求\n"+
    
    "    * 原理\n"+
    
    "      * 把`js`,`css`,`img`等 **静态资源** 分离到一台 独立域名的 服务器上\n"+
    "      * 在`html`页面中再通过相应的标签从不同域名下加载静态资源 , 而被浏览器允许\n"+
    "      * 因此可以通过动态创建`script`，再请求一个带参网址实现跨域通信\n"+
    
    "    * 如何\n"+
    
    "      * 前端\n"+
    
    "        ```javascript\n"+
    "        //原生\n"+
    "         var script = document.createElement('script');\n"+
    "            script.type = 'text/javascript';\n"+
    "        \n"+
    "            // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数\n"+
    "            script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';\n"+
    "            document.head.appendChild(script);\n"+
    "        \n"+
    "            // 回调执行函数\n"+
    "            function handleCallback(res) {\n"+
    "                alert(JSON.stringify(res));\n"+
    "            }\n"+
    "        \n"+
    "        //jq\n"+
    "        $.ajax({\n"+
    "            url: 'http://www.domain2.com:8080/login',\n"+
    "            type: 'get',\n"+
    "            dataType: 'jsonp',  // 请求方式为jsonp\n"+
    "            jsonpCallback: 'handleCallback',    // 自定义回调函数名\n"+
    "            data: {}\n"+
    "        });\n"+
    "        \n"+
    "        //vue\n"+
    "        this.$http.jsonp('http://www.domain2.com:8080/login', {\n"+
    "            params: {},\n"+
    "            jsonp: 'handleCallback'\n"+
    "        }).then((res) => {\n"+
    "            console.log(res); \n"+
    "        })\n"+
    "        ```\n"+
    
    "      * 后端 ( `Node.JS` )\n"+
    
    "        ```javascript\n"+
    "        var querystring = require('querystring');\n"+
    "        var http = require('http');\n"+
    "        var server = http.createServer();\n"+
    "        \n"+
    "        server.on('request', function(req, res) {\n"+
    "            var params = qs.parse(req.url.split('?')[1]);\n"+
    "            var fn = params.callback;\n"+
    "        \n"+
    "            // jsonp返回设置\n"+
    "            res.writeHead(200, { 'Content-Type': 'text/javascript' });\n"+
    "            res.write(fn + '(' + JSON.stringify(params) + ')');\n"+
    "        \n"+
    "            res.end();\n"+
    "        });\n"+
    "        \n"+
    "        server.listen('8080');\n"+
    "        console.log('Server is running at port 8080...');\n"+
    "        ```\n"
  },{
    name: 'call apply 以及 bind',
    id: 'callApplyBind',
    markdown: "##### call、apply和bind\n"+

    "* call 和 apply\n"+
    
    "  * 相同点\n"+
    
    "    * 都是可以临时改变函数`this`指向 \n"+
    "      * 也就是说只在使用`apply / call`的这次调用时更改\n"+
    "    * 同时可以传入参数\n"+
    "    * 都会立刻调用函数\n"+
    
    "  * 不同点\n"+
    
    "    * `call`传入是一个一个独立的\n"+
    "    * `apply`以数组的方式进行传入\n"+
    
    "  * 性能\n"+
    
    "    * 当传入的参数个数较少时,两者性能相差无几\n"+
    "    * 当传入的参数个数较多时,`call`的性能更好些\n"+
    
    "  * `call`如何传数组\n"+
    
    "    ```javascript\n"+
    "    let arr=[2,3,4,5]\n"+
    "    function fn(){\n"+
    "      console.log(this)\n"+
    "      console.log(arguments)\n"+
    "    }\n"+
    "    fn.call(arr,...arr)\n"+
    "    ```\n"+
    
    "    * 使用展开运算符传参,会把数组打散,并且把每一项单独传入\n"+
    
    "* bind\n"+
    
    "  * 和`apply / call`的共同点\n"+
    "    * 都是可以更改函数的`this`指向\n"+
    "    * 也可以传参\n"+
    "  * 不同点\n"+
    "    * `bind`其实可以理解成是一个函数的预处理机制 \n"+
    "    * 也就是说在函数调用前 , 就把函数里的`this`,以及参数问题处理好\n"+
    "      * 永久替换`this`指向\n"+
    "      * 使用`bind`不会调用函数\n"+
    "  * 何时使用\n"+
    "    * 需要更改`this`但是不能调用函数的情况\n"+
    "    * 需用永久替换`this`的情况\n"
  },{
    name: "cookie和storage",
    id: 'cookieAndStorage',
    markdown: "##### localStorage 和 cookie\n"+

    "* cookie\n"+
    
    "  * `cookie`的特性\n"+
    "    - 存储在浏览器中,方便用户和程序员操作\n"+
    "    - 但是也因为存在客户端中,导致容易被恶意截取,夺取用户信息 ,不安全\n"+
    "    - 大小有限制\n"+
    "      - `cookie`文本的大小一般为`4kb`\n"+
    "      - 每个站点只能容纳`20`个`cookie`\n"+
    
    "  * 添加\n"+
    
    "    ```javascript\n"+
    "    //把cookie保存 封装为一个函数\n"+
    "    function setCookie (name, value) {\n"+
    "    if(!name||!value)return\n"+
    "    var days = 1; //定义一天\n"+
    "    var exp = new Date();\n"+
    "    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);\n"+
    "    // 写入Cookie, toGMTString将时间转换成字符串\n"+
    "    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString;\n"+
    "    };\n"+
    "    \n"+
    "    //每次获取时,直接调用这个函数\n"+
    "    setCookie('uname','tom')\n"+
    "    \n"+
    "    ```\n"+
    
    "  * 获取\n"+
    
    "    ```javascript\n"+
    "    //把cookie读取 封装为一个函数\n"+
    "    function getCookie (name) {\n"+
    "    var arr,reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)'); //匹配字段\n"+
    "    if (arr = document.cookie.match(reg)) {\n"+
    "    return unescape(arr[2]);\n"+
    "    } else {\n"+
    "    return null;\n"+
    "    }\n"+
    "    }\n"+
    "    //每次读取时,直接调用这个函数\n"+
    "    getCookie('uname')\n"+
    "    ```\n"+
    
    "* localStroage\n"+
    
    "  * 特性\n"+
    
    "    * 储存和读取的方法比`cookie`还要简单\n"+
    "    * 永久存储,只要不手动去删,就不会丢失\n"+
    "    * 大小限制为`5M`,这对信息数据来说,是相当大的空间了,但是也更加消耗性能\n"+
    "    * 属于`HTML5`的新特性 , `IE8`以下不能用\n"+
    "    * 如果浏览器处于 **隐私模式** 时,不能获取 , 同时也不会被 **爬虫** 抓取到\n"+
    
    "  * 使用\n"+
    
    "    * 增 , 改\n"+
    
    "      ```javascript\n"+
    "      //在写入时要 标注键名和键值\n"+
    "      localStorage.setItem('键名',键值)\n"+
    "      ```\n"+
    
    "    * 查\n"+
    
    "      ```javascript\n"+
    "      console.log(localStorage.getItem('键名'))\n"+
    "      ```\n"+
    
    "    * 删\n"+
    
    "      ```javascript\n"+
    "      localStorage.removeItem('键名');\n"+
    "      ```\n"+
    
    "* session\n"+
    
    "  * 特性\n"+
    "    * 保存在服务器里\n"+
    "    * 安全性相对高一些\n"+
    "    * 常用于保存 **用户名** 等信息\n"+
    "    * 保存的信息是跨页面全局性的\n"+
    "    * 能够存储任何类型,包括自定义对象,每个客户端的`session`都是独立存储的\n"+
    "    * 当会话结束时, 服务器就会清除`session`\n"+
    
    "##### js执行和页面渲染是否可以同时运行\n"+
    
    "* 浏览器渲染页面的过程\n"+
    "  * 根据`HTML`结构生成`DOM树`\n"+
    "  * 根据`CSS`生成`CSS对象模型`\n"+
    "  * 把两者结合生成`Render Tree`\n"+
    "  * 浏览器会根据`RenderTree`进行绘制\n"+
    "  * 但是遇到`<script></script>`时\n"+
    "    * 执行里面内容\n"+
    "    * 阻塞页面渲染\n"+
    "* 可对前端性能进行优化\n"+
    "  * 详见 ***前端性能优化*** 篇\n"
  }, {
    name: '重排重绘',
    id: 'reflow',
    markdown: "##### 重排重绘\n"+

    "* reflow ( 重排 )\n"+
    
    "  * 是什么\n"+
    
    "    * 浏览器为了重新渲染部分或整个页面\n"+
    "    * 重新计算页面元素位置和几何结构的进程叫做`reflow`.\n"+
    
    "  * 有何影响\n"+
    
    "    * `reflow`是导致`DOM`脚本执行效率低的关键因素之一\n"+
    "    * 页面上任何一个节点触发了`reflow`会导致它的子节点及祖先节点重新渲染。\n"+
    
    "    | 何时触发重排                             |\n"+
    "    | ---------------------------------------- |\n"+
    "    | 改变窗口大小                             |\n"+
    "    | 改变文字大小                             |\n"+
    "    | 添加/删除样式表                          |\n"+
    "    | 内容的改变，(用户在输入框中写入内容也会) |\n"+
    "    | 激活伪类，如:hover                       |\n"+
    "    | 操作class属性                            |\n"+
    "    | 脚本操作DOM                              |\n"+
    "    | 计算offsetWidth和offsetHeight            |\n"+
    "    | 设置style属性                            |\n"+
    
    "  * 如何优化\n"+
    
    "    * 如果是添加多个`DOM`节点 , 不要一条一条的添加\n"+
    "      * 把他们装进一个数组里 , 将数组打散一次性添加进去 , 这样页面就只重排一次\n"+
    "    * 如果一个`DOM`节点的样式可能会变化很多 , 也不要使用`style`属性一个一个地修改\n"+
    "      * 事先定义好一个样式`class` , 使用时直接切换`className`\n"+
    "    * 不要把`DOM`元素的属性放在循环里作为循环变量\n"+
    "    * 不要使用`table`布局 \n"+
    "      * 很小的改动 , 可能就会导致重排\n"+
    "      * 而且也难看呀\n"+
    "    * 如果一个`DOM`元素确实需要很复杂的操作\n"+
    "      * 可以先把它`display:none`\n"+
    "      * 修改完毕后\n"+
    "      * 再显示到页面上\n"+
    
    "* repaints ( 重绘 )\n"+
    
    "  * 是什么\n"+
    
    "    * 元素的`background-color`,`opacity`,`color`等属性发生变化了\n"+
    "    * 不会影响其在页面的位置和页面的结构\n"+
    "    * 浏览器只会用新的样式来绘制这个元素\n"+
    "    * 这个过程叫做`repaints`\n"+
    
    "    | 常见的重绘元素  |                  |                     |                   |\n"+
    "    | --------------- | ---------------- | ------------------- | ----------------- |\n"+
    "    | color           | border-style     | visibility          | background        |\n"+
    "    | text-decoration | background-image | background-position | background-repeat |\n"+
    "    | outline-color   | outline          | outline-style       | border-radius     |\n"+
    "    | outline-width   | box-shadow       | background-size     |                   |\n"+
    
    "##### 盒子模型\n"+
    
    "* W3C盒子模型\n"+
    
    "  ![https://img4.sycdn.imooc.com/5b73f51e00015f7907740523.jpg](https://img4.sycdn.imooc.com/5b73f51e00015f7907740523.jpg)\n"+
    
    "  * 如何计算\n"+
    "    * 根据` W3C`的规范，元素内容占据的空间是由 `width` 属性设置的\n"+
    "    * 而内容周围的 `padding `和 `border` 值是另外计算的；\n"+
    "    * 即在标准模式下的盒模型\n"+
    "      * 盒子实际内容（content）的width/height以内容为标准\n"+
    "        * 等于我们设置的width/height\n"+
    "      * 盒子总宽度/高度=width/height+padding+border+margin\n"
  },{
    name: '盒模型差异',
    id: 'ieBox',
    markdown: 
    "* IE盒子模型\n"+
    
    "  ![https://img1.sycdn.imooc.com/5b73f53f0001a7ec07610507.jpg](https://img1.sycdn.imooc.com/5b73f53f0001a7ec07610507.jpg)\n"+
    
    "  * 如何计算\n"+
    "    * 在该模式下，浏览器的` width` 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和\n"+
    "    * 我们设置的`width`(height也是如此)以边框为标准\n"+
    "      * 等于盒子的内容宽度/高度+内边距padding+边框border宽度/高度\n"+
    "    * 盒子总宽度/高度=width/height + margin = 内容区宽度/高度 + padding + border + margin\n"+
    
    "* 如何相互转换\n"+
    
    "  ```javascript\n"+
    "  box-sizing:border-box/content-box\n"+
    "  ```\n"+
    
    "  \n"
  },{
    name: 'git',
    id: 'gitBase',
    markdown: "##### GIT基础速查\n"+

    "* 什么是\n"+
    "  * 一个版本控制工具\n"+
    "  * 一个面向开源以及私有的项目托管平台\n"+
    "* 前提\n"+
    "  * 安装\n"+
    "    - git 官方软件\n"+
    "    - 一路下一步\n"+
    "  * 启动\n"+
    "    - git bash \n"+
    "      - 支持`linux`命令的控制台 , 一般我们使用这个\n"+
    "    - git CMD\n"+
    "      - 支持`windows`命令的控制台\n"+
    "    - git gui\n"+
    "      - `git`的可视化界面\n"+
    "  * 可在`vs code `安装`git`插件\n"+
    "  * 需要在`git`官网注册一个账号\n"+
    "  * 需要一个密钥,不然不能从暂存区提交到`gitHub`仓库\n"+
    "    * 如果想从暂存区提交内容到`git`仓库,需要`git`授权的`shh`密钥\n"+
    "      - 输入`ssh-keygen -t rsa -C '你git的邮箱地址'`\n"+
    "    * 去如下目录结构里找密匙 \n"+
    "      - 我的电脑 \n"+
    "        - 用户 / `user`\n"+
    "          - 用户名文件夹\n"+
    "            -  `.ssh`(隐藏文件夹)\n"+
    "              -  `xxx.pub` (存有密钥)\n"+
    "    * 用编译器打开密匙文件,复制\n"+
    "    * 在`gitHub`网站里的`setting`中\n"+
    "    * 选择`SSH and GPG keys`新增一个密匙\n"+
    
    "* 具体操作\n"+
    
    "  * 创建一个文件夹\n"+
    
    "  * 通过`cd`或者其他方式进入当前文件夹\n"+
    
    "  * 配置`git`的基础信息 ( 前提是你得有账号[手动滑稽~] )\n"+
    
    "    ```cmd\n"+
    "    git config --global user.name '你的用户名'\n"+
    "    ```\n"+
    
    "    ```cmd\n"+
    "    git config --global user.email '你的邮箱'\n"+
    "    ```\n"+
    
    "    * 一般来说 , 会没有消息提示\n"+
    "      * 在`git`中,没有消息就是好消息\n"+
    
    "  * 将工作区的内容先存在暂存区\n"+
    
    "    * 暂存区?\n"+
    "      * 一个虚拟的仓库\n"+
    "    * 如何创建暂存区\n"+
    "      * 进入要操作的文件夹\n"+
    "      * `git init`初始化当前操作\n"+
    "      * 会发现当前文件夹下多了一个`.git`文件夹\n"+
    "        * 这个文件夹存储的就是当前项目文件夹下所有的版本信息\n"+
    "    * 如何从工作区到暂存区\n"+
    "      * 首先`git add`\n"+
    "        * `git add 文件名`是只提交一个文件\n"+
    "        * `git add *`是提交当前目录下所有文件\n"+
    "      * 然后再`git commit -m '对这一次提交的描述'`\n"+
    "    * 其他操作\n"+
    "      * 查看当前工作区的状态\n"+
    "        - `git status`\n"+
    "        - 如果确实成功提交的话,会提示`nothing to commit `\n"+
    "      * 如何将工作区的文件恢复至暂存区保存的状态\n"+
    "        - `git checkout`\n"+
    "      * 每次发生变化时,如何判断是工作区的哪个文件相对于暂存区被修改了\n"+
    "        - `git diff`\n"+
    "        - 会告诉你具体改变了什么\n"+
    "      * 查看每次我们提交的历史版本\n"+
    "        * `git log`\n"+
    "        * 恢复到某个具体版本\n"+
    "          * `git reset --hard HEAD^`回退一个版本\n"+
    "          * `git reset --hard HEAD^^`回退两个版本\n"+
    "          * `git reset --hard 版本号`回退到某一具体版本\n"+
    "            * 版本号可在`git log`里面去查\n"+
    "      * 清屏操作\n"+
    "        - `clear`\n"+
    "      * 从远程仓库克隆项目到本地\n"+
    "        * `git clone 仓库地址`\n"+
    "      * 从远程仓库更新项目到本地\n"+
    "        * `git pull`\n"+
    
    "  * 再把暂存区的内容存放在`gitHub`远程仓库\n"+
    
    "    * 创建远程仓库\n"+
    "      * 在`git`官网,右上角有一个加号`+`\n"+
    "      * 点击加号`+`后选择 `create a new repository`\n"+
    "        * 输入远程仓库的名称\n"+
    "        * `description` (描述)\n"+
    "        * `public / private` (公开/私有)\n"+
    "          * 鼓励开源\n"+
    "          * 希望私有的话 , 要收费\n"+
    "    * 进入刚才创建的远程仓库,**拷贝** `git`给出的当前仓库的地址\n"+
    "    * 输入`git remote add origin 刚才复制的仓库地址`\n"+
    "    * 输入`git push -u origin master`进行提交\n"+
    "      * 在提交过程中可能要求输入用户名和密码\n"+
    "    * 提交成功\n"+
    "    * 刷新远程仓库,发现已经提交成功\n"+
    "    * 如果当前提交文件夹下有一个`readme.md`自述文件的话,还会被当成`html`片段显示在当前仓库中予以说明\n"
  }
] 












































