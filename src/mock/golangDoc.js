export const golangDoc = [
  {
    name: 'golang ?',
    element: 'golang ?',
    markdown: "#### golan自学笔记\n"+

    "###### golan ？\n"+
    
    "* 编译型语言 \n"+
    
    "  * 与解释型的区别\n"+
    
    "    > 解释型语言: 人类可读的代码 => 虚拟机(解释器) => 处理器\n"+
    
    "    > 编译型语言: 人类可读的代码 => 处理器\n"+
    
    "  * 编译型语言不需要一个中间的解释器,运行起来性能更高\n"+
    
    "* 21世纪的`c语言`\n"+
    
    "  > 1.支持交叉编译,编译快速\n"+
    "  >\n"+
    "  > 2.开发效率高 (自带垃圾回收机制)\n"+
    "  >\n"+
    "  > 3.执行性能好 \n"+
    "  >\n"+
    "  > 4.能最大限度地发挥出硬件的性能(天生支持并发)\n"+
    "  >\n"+
    "  > 5.语法简洁\n"+
    "  >\n"+
    "  > 6.企业级的编程语言\n"
  }, {
    name: '开发环境搭建',
    id: 'devConfig',
    markdown: "###### 开发环境搭建\n"+

    "* 编译器 : \n"+
    
    "  * go语言采用的是`utf-8`编码\n"+
    
    "  * 可以使用`vscode`,因为免费\n"+
    "    * 下载安装包\n"+
    "    * 一路下一步\n"+
    "    * 安装插件`chinese`,`go`\n"+
    "  * 也可以使用官方编译器,但是比较贵\n"+
    
    "* 安装开发环境包\n"+
    
    "  ```go\n"+
    "  https://golang.google.cn/dl/\n"+
    "  ```\n"+
    
    "* 查看版本\n"+
    
    "  ```go\n"+
    "  go version\n"+
    "  ```\n"+
    
    "* 配置GOPATH\n"+
    
    "  ```shell\n"+
    "   1 export GOROOT=/usr/local/go\n"+
    "   2 export GOPATH=/Users/apple/Desktop/golearn\n"+
    // eslint-disable-next-line no-template-curly-in-string
    "   3 export PATH=$PATH:${GOPATH//://bin:}/bin\n"+
    "  ```\n"+
    
    "  ```jsx\n"+
    "  go env    //查看go环境配置\n"+
    "  ```\n"+
    
    "  \n"+
    
    "  \n"+
    
    "  \n"
  },{
    name: '第一个 GO 程序',
    id: 'firstCode',
    markdown: "###### 第一个go程序\n"+

    "* 创建一个`demo.go`文件\n"+
    
    "  ```go\n"+
    "  package main //声明main包,表明当前是一个可执行程序\n"+
    "  package xxx  //如果不是main包,那就不会生成一份可执行文件\n"+
    "  import 'fmt' //引入内置的fmt包\n"+
    "  func main(){\n"+
    "    // 主函数,是程序的执行入口,go程序默认从main入口函数开始执行\n"+
    "    fmt.Println('hello world')\n"+
    "  }\n"+
    "  ```\n"+
    
    "* 编译\n"+
    
    "  * 使用 `go build`\n"+
    
    "    > 1.cd到 go文件所在的目录\n"+
    "    >\n"+
    "    > 2.使用 go build\n"+
    "    >\n"+
    "    > 3.会将go文件进行编译\n"+
    
    "  * 如果是在其他路径里,写入该文件在 `src`往后的路径,生成可执行文件在你打开终端的路径\n"+
    
    "    ```shell\n"+
    "    go build github.com/LXG19961206/demo01\n"+
    "    ```\n"+
    
    "  * 如果想要规定输入的文件的文件名\n"+
    
    "    ```\n"+
    "    go build -o demo\n"+
    "    ```\n"+
    
    "  * 使用 `go run`\n"+
    
    "    > 1.像执行脚本文件一样执行go代码\n"+
    
    "  * 使用`go install`\n"+
    
    "    > 1.先编译得到一个可执行文件\n"+
    "    >\n"+
    "    > 2.会将这个可执行文件拷贝到 `GOPATH\bin`目录\n"+
    
    "  * 如果有跨平台编译(交叉编译),请详见相关文档教程\n"
  },{
    name: '变量的声明',
    id: 'var',
    markdown: 
    "* 变量的声明\n"+
    
    "  * 在函数外只能放置 标识符 的声明,不能放置一些逻辑语句\n"+
    
    "    > 何为标识符 ?\n"+
    "    >\n"+
    "    > * 所谓标识符,就是程序员的具有特殊意义的词,比如\n"+
    "    >   * 变量\n"+
    "    >   * 常量\n"+
    "    >   * 函数\n"+
    "    >   * 类型\n"+
    "    >   * ...\n"+
    "    > * go语言中标识符由字母和下划线组成,并且只能以字母或者`_`开头,比如\n"+
    "    >   * abc\n"+
    "    >   * _\n"+
    "    >   * _123\n"+
    "    >   * a123\n"+
    
    "  * golan中的关键字\n"+
    
    "    | break    | default     | func   | interface | select |\n"+
    "    | -------- | ----------- | ------ | --------- | ------ |\n"+
    "    | case     | defer       | go     | map       | struct |\n"+
    "    | chan     | else        | goto   | package   | switch |\n"+
    "    | const    | fallthrough | if     | range     | type   |\n"+
    "    | continue | for         | import | return    | var    |\n"+
    
    
    "###### 变量和常量\n"+
    
    "* 变量\n"+
    
    "  * 为何出现变量\n"+
    
    "    > 程序运行需要的数据都保存在内存里,但是如果我们通过内存地址操作这个数据的话,代码可读性很差\n"+
    "    >\n"+
    "    > 因此出现了变量,方便我们通过变量去找到内存里对应的地址\n"+
    
    "  * go中的变量\n"+
    
    "    * 需要使用`var`关键字,先声明然后再去使用\n"+
    
    "    * 是一种静态语言,声明时必须标明类型\n"+
    
    "      > string\n"+
    "      >\n"+
    "      > int\n"+
    "      >\n"+
    "      > bool\n"+
    "      >\n"+
    "      > ...\n"+
    
    "      ```go\n"+
    "      var person string\n"+
    "      var age int\n"+
    "      ```\n"+
    
    "    * 可以使用批量声明法\n"+
    
    "      ```go\n"+
    "      var (\n"+
    "      	person string\n"+
    "      	age int\n"+
    "      )\n"+
    "      ```\n"+
    
    "    * 声明了变量如果没有赋值,值为对应类型的空值\n"+
    
    "      ```go\n"+
    "      var (\n"+
    "      	person string // ''\n"+
    "      	age    int    // 0\n"+
    "      	isOk   bool   // false\n"+
    "      )\n"+
    "      ```\n"+
    
    "    * 变量赋值,直接可以使用`=`就可以进行赋值\n"+
    
    "      ```go\n"+
    "      var (\n"+
    "      	person string // ''\n"+
    "      	age    int    // 0\n"+
    "      	isOk   bool   // false\n"+
    "      )\n"+
    "      func main(){\n"+
    "        person = 'tom'\n"+
    "        fmt.Println('hello'+' '+person)\n"+
    "      }\n"+
    "      ```\n"+
    
    "      * 可以在声明 的同时进行赋值\n"+
    
    "        ```go\n"+
    "        var (\n"+
    "        	person string = 'tom'\n"+
    "        	age int = 23\n"+
    "        )\n"+
    "        ```\n"+
    
    "        \n"+
    
    "      * 几种打印方式\n"+
    
    "        ```go\n"+
    "        func main(){\n"+
    "          fmt.print('hello world')  //直接打印出指定的内容\n"+
    "        }\n"+
    "        ```\n"+
    
    "        ```go\n"+
    "        func main(){\n"+
    "        	fmt.Printf('name:%s',person)\n"+
    "        }\n"+
    "        // %s其实就是占位符\n"+
    "        // 之后会采用person的值来替代的这个占位符 \n"+
    "        ```\n"+
    
    "        ```go\n"+
    "        func main(){\n"+
    "        	fmt.Println(person)  //会在终端中打印出相应的内容后在后面添加一个换行符\n"+
    "          fmt.Prinitln()       //可以用于快速打印出一个空行\n"+
    "        }\n"+
    "        ```\n"+
    
    "        \n"+
    
    "    * 但是,在`go`语言之中,在函数中变量的声明了必须要使用,不然无法编译\n"+
    
    "      * 出于减少无效变量出现的所占用的内存的需求,减少性能消耗\n"+
    "      * 在全局里声明的变量可以不使用\n"+
    
    "    * go语言推荐使用驼峰式的命名法\n"+
    
    "      * 小驼峰 firstSecond\n"+
    "      * 大驼峰 FirstSecond\n"+
    
    "    * 类型推导\n"+
    
    "      > 会根据值判断变量是什么类型,因此可在声明的时候不去写类型,但是这种方式必须在声明的时候赋值\n"+
    "      >\n"+
    "      > ```go\n"+
    "      > func main(){\n"+
    "      > 	var name = 'tom'\n"+
    "      > 	fmt.print(name)\n"+
    "      > }\n"+
    "      > ```\n"+
    
    "    * 短变量声明\n"+
    
    "      > 简短变量声明法,只能在函数里面使用\n"+
    "      >\n"+
    "      > ```go\n"+
    "      > func main(){\n"+
    "      > 	name := 'tom'     //其实就是 var name = 'tom' 的简写,一样必须在声明的时候就赋值\n"+
    "      > 	fmt.Print(name)\n"+
    "      > }\n"+
    "      > ```\n"+
    
    "    * 匿名变量\n"+
    
    "      > 在使用多重赋值时候,如果想要忽略某个值,可以使用匿名变量\n"+
    "      >\n"+
    "      > ```go\n"+
    "      > func foo(number int,name string)(int,string){\n"+
    "      >   return number,name  //比如是这种可以一次返回多个值的函数\n"+
    "      > }\n"+
    "      > func main(){\n"+
    "      > 	first,_ :=foo(10,'tom')		//匿名变量可以选择忽略某个值\n"+
    "      > 	_,second :=foo(20,'lily')  \n"+
    "      > 	fmt.Print(first)\n"+
    "      > 	fmt.Print(second)\n"+
    "      > }\n"+
    "      > ```\n"+
    
    "    * 其他注意\n"+
    
    "      > * 函数外的每个语句都必须以关键字开始\n"+
    "      >   * var\n"+
    "      >   * const\n"+
    "      >   * func\n"+
    "      >   * ...\n"+
    "      > * := 不能用在函数外\n"+
    "      > * _多用于占位,表示忽略值\n"+
    "      > * 同一个作用域中变量不可以重复声明\n"
  },{
    name: '常量的声明',
    id: 'const',
    markdown: "* 常量的声明\n"+

    "  * 何为常量 ?\n"+
    
    "    > 在程序运行中恒定不变的量\n"+
    
    "  * 特性\n"+
    
    "    > * 恒定不变\n"+
    "    > * 必须在声明的时候就赋值\n"+
    "    > * 赋值之后不可改变\n"+
    "    > * 不可重复声明\n"+
    
    "  * 批量声明\n"+
    
    "    >  ```go\n"+
    "    > const(\n"+
    "    > 	STATUSOK = 200\n"+
    "    > 	notFound = 404\n"+
    "    > )\n"+
    "    >  ```\n"+
    "    >\n"+
    "    > * 在批量声明中,如果某一行没有写值,就代表它的值和上面的是一样的\n"+
    "    >\n"+
    "    >   ```go\n"+
    "    >   const (\n"+
    "    >   	a = 100\n"+
    "    >   	b\n"+
    "    >   	c\n"+
    "    >   )\n"+
    "    >   // 则a、b、c都为100\n"+
    "    >   ```\n"+
    
    "  * 常量计数器\n"+
    
    "    > * `iota`是go语言的常量计数器,只能在常量的表达式里使用\n"+
    "    >\n"+
    "    > * 在`const`关键字出现时被重置为0\n"+
    "    >\n"+
    "    > * `const`每次新增一行常量声明都会使`iota`计数一次\n"+
    "    >\n"+
    "    > * 使用`iota`可以简化定义,在定义枚举的时候很有用\n"+
    "    >\n"+
    "    >   ```go\n"+
    "    >   const (\n"+
    "    >   	a = iota  //0\n"+
    "    >   	b					//1\n"+
    "    >   	c         //2\n"+
    "    >   	d         //3\n"+
    "    >   	e         //4\n"+
    "    >   )\n"+
    "    >   ```\n"+
    "    >\n"+
    "    > * 一道面试题\n"+
    "    >\n"+
    "    >   ```go\n"+
    "    >   const (\n"+
    "    >   	a = iota\n"+
    "    >   	b\n"+
    "    >   	_\n"+
    "    >   	c\n"+
    "    >   )\n"+
    "    >   ```\n"+
    "    >\n"+
    "    >   * 分析执行过程\n"+
    "    >     * a = 0\n"+
    "    >     * b = 1\n"+
    "    >     * _ = 2  \n"+
    "    >       * 因为是匿名变量因此被抛弃\n"+
    "    >     * c = 3\n"+
    "    >   * 因此结果是 0 ,1 ,3\n"+
    "    >\n"+
    "    > * 面试题 2\n"+
    "    >\n"+
    "    >   ```go\n"+
    "    >   const (\n"+
    "    >   	a = iota\n"+
    "    >   	b = 100\n"+
    "    >   	c \n"+
    "    >   	d\n"+
    "    >   )\n"+
    "    >   ```\n"+
    "    >\n"+
    "    >   * 分析执行过程\n"+
    "    >     * a = 0\n"+
    "    >     * b = 100\n"+
    "    >     * c没赋值和上面的一样 为100\n"+
    "    >     * d同理\n"+
    "    >   * 结果是 0 ,100 ,100 ,100\n"+
    "    >\n"+
    "    > * 面试题 3\n"+
    "    >\n"+
    "    >   ```go\n"+
    "    >   const (\n"+
    "    >   	a iota\n"+
    "    >     b 100\n"+
    "    >     c \n"+
    "    >     d iota\n"+
    "    >     e \n"+
    "    >   )\n"+
    "    >   ```\n"+
    "    >\n"+
    "    >   * 分析执行过程\n"+
    "    >     * a = 0\n"+
    "    >     * b = 100 , const每次新增一行常量声明,iota都会++,因此iota=1\n"+
    "    >     * c = 100 , 没写就和上面一致 , 同理iota ++ 为2\n"+
    "    >     * d = 3\n"+
    "    >     * e = 4\n"+
    "    >   * 因此结果是 0 ,100 ,100 ,3 , 4\n"+
    "    >\n"+
    "    > * 面试题 4\n"+
    "    >\n"+
    "    >   ```go\n"+
    "    >   cosnt (\n"+
    "    >   	a,b = iota,iota\n"+
    "    >   	c,d = iota,iota\n"+
    "    >   )\n"+
    "    >   ```\n"+
    "    >\n"+
    "    >   * 分析执行过程\n"+
    "    >     * 因为 a和b的声明在一行\n"+
    "    >     * 每声明一行 ,iota才会++\n"+
    "    >     * 因此a,b是相等的,都是0\n"+
    "    >     * 此行执行完毕后iota++,因此c,d都是1\n"+
    "    >\n"+
    "    > * 定义数量级(了解)\n"+
    "    >\n"+
    "    >   ```go\n"+
    "    >   const (\n"+
    "    >   	_  = iota\n"+
    "    >     KB = 1 << (10*iota)\n"+
    "    >     MB = 1 << (10*iota)\n"+
    "    >     GB = 1 << (10*iota)\n"+
    "    >     TB = 1 << (10*iota)\n"+
    "    >     PB = 1 << (10*iota)\n"+
    "    >   )\n"+
    "    >   ```\n"
  }, {
    name: '基本数据类型',
    id: 'dataType',
    markdown: 
    "###### 基本数据类型\n"+
    
    "* 整形\n"+
    
    "  * 有符号(负号)\n"+
    
    "    > int8\n"+
    "    >\n"+
    "    > int16\n"+
    "    >\n"+
    "    > int32\n"+
    "    >\n"+
    "    > Int64\n"+
    
    "  * 无符号\n"+
    
    "    > uint8\n"+
    "    >\n"+
    "    > uint16\n"+
    "    >\n"+
    "    > uint32\n"+
    "    >\n"+
    "    > uint64\n"+
    
    "  * 架构特定(取决于系统位数)\n"+
    
    "    > uint\n"+
    "    >\n"+
    "    > int\n"+
    
    "  * 类型别名\n"+
    
    "    > Unicode中的rune等价于int32\n"+
    "    >\n"+
    "    > byte等价于 uint8\n"+
    
    "  * 特殊类型\n"+
    
    "    > uintptr (无符号整形)\n"+
    "    >\n"+
    "    > 由系统决定占用位大小，足够存放指针即可，和C库或者系统接口交互\n"+
    
    "    取值范围\n"+
    
    "    | 具体类型 | 取值范围                                  |\n"+
    "    | -------- | ----------------------------------------- |\n"+
    "    | int8     | -128到127                                 |\n"+
    "    | uint8    | 0到255                                    |\n"+
    "    | int16    | -32768到32767                             |\n"+
    "    | uint16   | 0到65535                                  |\n"+
    "    | int32    | -2147483648到2147483647                   |\n"+
    "    | uint32   | 0到4294967295                             |\n"+
    "    | int64    | -9223372036854775808到9223372036854775807 |\n"+
    "    | uint64   | 0到18446744073709551615                   |\n"
  },{
    name: '数值型',
    id: 'numberType',
    markdown: "* 八进制&十六进制\n"+
    "  ```go\n"+
    "  package main\n"+
    "  import 'fmt'\n"+
    "  func main(){\n"+
    "    //10进制\n"+
    "    var a int =10\n"+
    "    fmt.Printf('%d \n',a)  //10    占位符%d 表示的是10进制的数\n"+
    "    fmt.Printf('%b \n',a)  //1010  占位符%b 表示的是2进制的数\n"+
    "    //8进制\n"+
    "    var b int = 077\n"+
    "    fmt.Printf('%o\n',b)  //77     占位符%o 表示的是8进制的数\n"+
    "    fmt.Printf('%d\n',b)  //63     %d转为十进制的数\n"+
    "    //16进制\n"+
    "    var c int = 0xff\n"+
    "    fmt.Printf('%x\n',c) //ff      占位符%x 表示的是16进制的数\n"+
    "    fmt.Printf('%d\n',c) //255     转为10进制的数\n"+
    "  }\n"+
    "  ```\n"+
    
    "* 如何参看变量的类型\n"+
    
    "  > ```go\n"+
    "  > var d int = 0x1234\n"+
    "  > fmt.Prinf('%T\n',d)   // int\n"+
    "  > ```\n"+
    
    "* 浮点型\n"+
    
    "  > ```go\n"+
    "  > package main\n"+
    "  > import 'math'\n"+
    "  > import 'fmt'\n"+
    "  > func main(){\n"+
    "  >   fmt.Print('%f\n',math.Pi)\n"+
    "  >   fmt.Print('%2f\n',math.Pi)\n"+
    "  >   f1 := 1.2345\n"+
    "  >   fmt.Printf('%T\n',f1) //go语言默认小数都是float64类型\n"+
    "  >   f2 :=float32(1.23456)\n"+
    "  >   fmt.Printf('%T\n',f2) //显示声明float32类型\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 因为float64和float32不是一个数据类型,go语言是一个静态类型的语言,因此两者不能相互赋值\n"+
    
    "* 复数型(忽略)\n"+
    
    "* 布尔值\n"+
    
    "  > 1.布尔类型的变量默认为`false`\n"+
    "  >\n"+
    "  > 2.go语言中不允许将整形强制转为布尔型\n"+
    "  >\n"+
    "  > 3.布尔型无法参与数值运算,也无法和其他的语言进行转换\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test4(){\n"+
    "  > 	a := true   \n"+
    "  > 	var b bool \n"+
    "  > 	fmt.Printf('%T\n',a)  //bool\n"+
    "  > 	fmt.Print(b)          //false\n"+
    "  > }\n"+
    "  > ```\n"
  },{
    name: '字符串',
    id: 'stringType',
    markdown: "* 字符串\n"+

    "  > * go语言中的字符串必须是双引号包裹的\n"+
    "  >\n"+
    "  > * 单引号只能包裹字符\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   str1 := 'hello world'\n"+
    "  >   str2 := 'h'   //单独的字母、汉字、符号表示一个字符\n"+
    "  >   ```\n"+
    "  >   \n"+
    "  > * 字符和字节\n"+
    "  >\n"+
    "  >   字节:         一个字节=8bit ( 8个二进制位 )\n"+
    "  >\n"+
    "  >   1个字符:  'A'=1个字节\n"+
    "  >\n"+
    "  >   1个汉字:  一般占3个字节\n"+
    "  >\n"+
    "  > * 常见的转义符\n"+
    "  >\n"+
    "  >   | 转义符 | 含义   |\n"+
    "  >   | ------ | ------ |\n"+
    "  >   | \r     | 回车符 |\n"+
    "  >   | \n     | 换行符 |\n"+
    "  >   | \t     | 制表符 |\n"+
    "  >   | \\'    | 单引号 |\n"+
    "  >   | \\'    | 双引号 |\n"+
    "  >   | \\\    | 反斜杠 |\n"+
    "  >\n"+
    "  >   * 比如我们打印一个路径,因为会默认被认为是转义字符,因此如果想要打出一个反斜杠 ,可以连续打两个\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     fmt.Print('c:\\window\\system32\\xxx')\n"+
    "  >     fmt.Print('我们把go语言称为\'golang\'')  //打印双引号同理\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * 多行的字符串\n"+
    "  >\n"+
    "  >   * 定义多行的字符串需要使用反引号\n"+
    "  >\n"+
    "  >   * 反引号中的内容会原样输出\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var str string = `\n"+
    "  >     	弃我去者,昨日之日不可留\n"+
    "  >     	乱我心者,今日之日多烦忧\n"+
    "  >     `\n"+
    "  >     //反引号的话就无须使用转义了,因为回原样输出\n"+
    "  >     fmt.Print(str)\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * 获取字符串长度\n"+
    "  >\n"+
    "  >   * 使用`len()`函数获取\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var str string = 'hello world'\n"+
    "  >     fmt.Print(len(str))\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * 字符串的拼接\n"+
    "  >\n"+
    "  >   * 字符串拼接(使用加号)\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     say := 'hello'\n"+
    "  >     hi := 'world'\n"+
    "  >     sayhi := say+hi\n"+
    "  >     fmt.Print(say+hi)\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >   * 字符串拼接(使用%s占位符),就可以使用多个占位符\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     say := 'hello'\n"+
    "  >     hi := 'world'\n"+
    "  >     var str = fmt.Sprintf('%s%s',say,hi)   //Sprintf不会执行打印,而是返回拼接结果\n"+
    "  >     fmt.Println(str)\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * 字符串分割\n"+
    "  >\n"+
    "  >   * 需要引入strings包\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     import 'strings'\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >   * 使用 `stings.Splits`来进行分割\n"+
    "  >\n"+
    "  >     * 第一个参数是要分割哪个字符串\n"+
    "  >     * 第二个参数是以何为界进行分割\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var path string = 'c:\\windows\\system\\user\\xxx'\n"+
    "  >     var str = strings.Split(path,'\\')\n"+
    "  >     fmt.Println(str)   // [c: windows system user xxx]  返回类似一个列表或者是说是数组\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * 判断是否包含\n"+
    "  >\n"+
    "  >   * `strings.Contains()`函数\n"+
    "  >\n"+
    "  >     * 第一个参数是要判断哪个字符串\n"+
    "  >     * 第二个参数是包含什么内容\n"+
    "  >     * 最后返回一个bool\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var str string = '123456'\n"+
    "  >     fmt.Print(strings.Contains(str,'1'))\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * 判断前缀 / 后缀\n"+
    "  >\n"+
    "  >   * 前缀 (是否以...开头)\n"+
    "  >     * 使用`strings.HasPrefix(str,'123')`\n"+
    "  >     * 依旧返回一个boo\n"+
    "  >   * 后缀(是否以...结尾)\n"+
    "  >     * 使用`strings.HasSuffix(str,'123')`\n"+
    "  >     * 依旧返回一个boo\n"+
    "  >\n"+
    "  > * 返回字符串里包含...的位置\n"+
    "  >\n"+
    "  >   * 使用`strings.Index(str,'2')`\n"+
    "  >   * 返回的是该字符(子字符串)出现的位置\n"+
    "  >\n"+
    "  > * 返回最后一处包含...的位置\n"+
    "  >\n"+
    "  >   * 使用`strings.LastIndex(str,'2')`\n"+
    "  >\n"+
    "  > * 将数组或者是列表拼接起来\n"+
    "  >\n"+
    "  >   * 使用`strings.Join(str,'')`函数\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var str = 'c:\\windows\\system\\user\\index'\n"+
    "  >     var str2 = strings.Split(str,'\\')\n"+
    "  >     fmt.Print(strings.Join(str2,'+'))\n"+
    "  >     //c:+windows+system+user+index\n"+
    "  >     fmt.Printf('$T,%d\n',str2,str2) // 打印出类型和编码好\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * 基本类型之间的转换\n"+
    "  >\n"+
    "  >   * go语言是一个静态类型语言,定义/赋值/运算时候类型必须一致\n"+
    "  >\n"+
    "  >   * 但是允许我们去手动转换,但是必须是兼容类型,比如布尔不能转为整形\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var a int8 \n"+
    "  >     a = 10\n"+
    "  >     var b int16\n"+
    "  >     b = int16(a)               // 这一步相当于先将int8类型的a转为int16类型,再把值赋给b\n"+
    "  >     fmt.Printf('%T,%s\n',b,b)\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var a = 3.14\n"+
    "  >     var b int \n"+
    "  >     b = int(a)   // 浮点型转为整形会直接舍弃小数部分\n"+
    "  >     fmt.Println(b)\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var b = true\n"+
    "  >     a = int8(b)   // 在golang中,布尔类型的值不能转为数值型\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >   * 常数会在有需要的时候自动转换\n"+
    "  >\n"+
    "  >   * 变量需要我们手动转型\n"+
    "  >\n"+
    "  >   \n"
  },{
    name: '运算符',
    id: 'operateCode',
    markdown: "###### 运算符\n"+

    "* 算术运算符\n"+
    
    "  ```go\n"+
    "  + - * / % ++ --\n"+
    "  ```\n"+
    
    "  ```go\n"+
    "  func main(){\n"+
    "  	a := 10\n"+
    "  	b := 3\n"+
    "  	sum := a+b\n"+
    "  	fmt.Printf('%d,%d = %d\n',a,b,sum)   // 10+3=13\n"+
    "      sub := a-b\n"+
    "      fmt.Printf('%d,%d = %d\n',a,b,sub)   // 10-3=7\n"+
    "  }\n"+
    "  ```\n"+
    
    "  * 在go语言中,因为是一个静态类型语言,也就是等号两边的值应该是一个类型的,因此在除法时候有些例外\n"+
    
    "    * 假如等号左边都是整数\n"+
    "    * 返回值也会是整数,因此会舍弃小数部分\n"+
    
    "    ```go\n"+
    "    func main(){\n"+
    "    	a := 10\n"+
    "    	b := 3\n"+
    "    	res := a/b\n"+
    "    	fmt.Printf('%d,%d = %d\n',a,b,res)   // 10/3=3\n"+
    "        res2 := a%b\n"+
    "        fmt.Printf('%d,%d = %d\n',a,b,res2)   // 10%3=1\n"+
    "    }\n"+
    "    ```\n"+
    
    "  * ++ 和 -- 不能和其他语言一样参与运算 \n"+
    
    "    ```go\n"+
    "    var a int = 2\n"+
    "    a++\n"+
    "    fmt.Println(a)\n"+
    "    ```\n"+
    
    "    * 出于精简语言的需要\n"+
    
    "* 关系运算符\n"+
    
    "  * 关系运算符的返回结果都是布尔值\n"+
    
    "  ```go\n"+
    "  < > <= >= == !=\n"+
    "  ```\n"+
    
    "  ```go\n"+
    "  package main\n"+
    "  func main(){\n"+
    "      a := 3\n"+
    "      b := 5\n"+
    "      c := 3\n"+
    "      res1 := a<b           //true\n"+
    "      res2 := a>b           //fasle\n"+
    "      res3 := a==b          //false\n"+
    "      res4 := a!=b          //true\n"+
    "      fmt.Printf('%T,%t\n',res1,res1)           //%t是布尔值的占位符\n"+
    "      fmt.Printf('%T,%t\n',res2,res2)\n"+
    "      fmt.Printf('%T,%t\n',res3,res3)\n"+
    "      fmt.Printf('%T,%t\n',res4,res4)\n"+
    "  }\n"+
    "  ```\n"+
    
    "* 逻辑运算符\n"+
    
    "  ```go\n"+
    "  && || !\n"+
    "  ```\n"+
    
    "  > &&  '与'\n"+
    "  >\n"+
    "  > 只有所有的操作数都为真,返回结果才是真,有一个是假的,结果就是假\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > a := true\n"+
    "  > b := true\n"+
    "  > c := false\n"+
    "  > res := a&&b&&c\n"+
    "  > fmt.Printf('%T,%t\n',res,res)   //false\n"+
    "  > ```\n"+
    
    "  > ||  '或'\n"+
    "  >\n"+
    "  > 只要有一个是真的,结果就为真,如果所有的操作数都是假,那么结果就为假\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > a := true\n"+
    "  > b := true\n"+
    "  > c := false\n"+
    "  > res := a||b||c\n"+
    "  > fmt.Printf('%T,%t\n',res,res)   //true\n"+
    "  > ```\n"+
    
    "  > !  '非'\n"+
    "  >\n"+
    "  > 会反转操作数的逻辑状态 \n"+
    "  >\n"+
    "  > ```go\n"+
    "  > a := true\n"+
    "  > b := true\n"+
    "  > fmt.Print(a==b)   //true\n"+
    "  > fmt.Print(a==!b)  //false\n"+
    "  > ```\n"+
    
    "  > 练习题\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > a := 3\n"+
    "  > b := 2\n"+
    "  > c := 5\n"+
    "  > res := a>b && c%a==b && a<(c/b)  //false\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * go语言的`&&`只要是遇到一个`false`就会停止继续运算\n"+
    "  > * go语言的`||`只要是遇到一个`true`就会停止继续运算\n"+
    
    "* 位运算符\n"+
    
    "  * 何为位运算: 将数值转为二进制后,按位操作\n"+
    
    "  * 按位&\n"+
    
    "    > 对应位的值如果都为1才为1,有一个为0就为0\n"+
    
    "  * 按位|\n"+
    
    "    > 对应位的值如果都是0才为0,有一个为1就为1\n"+
    
    "  * 异或^\n"+
    
    "    > 二元: a^b\n"+
    "    >\n"+
    "    > ​	对应的值不同为1,相同为0\n"+
    "    >\n"+
    "    > 一元: ^a\n"+
    "    >\n"+
    "    > ​	按位取反 \n"+
    "    >\n"+
    "    > ​			1--->0\n"+
    "    >\n"+
    "    > ​			0--->1\n"+
    
    "  * 位清空 &^\n"+
    
    "    > * 对于 a &^ b\n"+
    "    > * 对于 b 上的每个数值\n"+
    "    >\n"+
    "    > * 如果为0,则取a对应位上的数值\n"+
    "    >\n"+
    "    > * 如果为1,则结果位就取0\n"+
    
    "  ```go\n"+
    "  a := 60\n"+
    "  b := 13\n"+
    "  // a: 0011 1100\n"+
    "  // b: 0000 1101\n"+
    "  // &  0000 1100\n"+
    "  // |  0011 1101\n"+
    "  // ^  0011 0001\n"+
    "  // &^ 0011 0000\n"+
    "  res1 := a&b\n"+
    "  fmt.Printf('%d\n',res1)\n"+
    "  res2 := a|b\n"+
    "  fmt.Printf('%d\n',res2)\n"+
    "  res3 := a^b\n"+
    "  fmt.Printf('%d\n',res3)\n"+
    "  res4 := a&^b\n"+
    "  fmt.Printf('%d\n',res4)\n"+
    "  ```\n"+
    
    "  * 按位左移 <<\n"+
    
    "    > 左边的操作数的值向左移动由右操作数指定的位数\n"+
    "    >\n"+
    "    > * 其实就是把 a 转为二进制,向左移动 n 位 ,其实就是放大 2的n次幂\n"+
    "    >\n"+
    "    >   ```go\n"+
    "    >   var a = 4\n"+
    "    >   var b = a >> 2 // 1\n"+
    "    >   var c = a << 2 // 16\n"+
    "    >   ```\n"+
    "    >\n"+
    "    >   \n"+
    
    "  * 按位右移 >>\n"+
    
    "    > 左边的操作数的值向右移动由右操作数指定的位数\n"+
    "    >\n"+
    "    > * 其实就是把 a 转为二进制,向右移动 n 位 ,其实就是缩小 2的n次幂\n"+
    "    > * 代码示例同上\n"+
    
    "* 赋值运算符\n"+
    
    "  ```go\n"+
    "  = += -= *= /= %= <<= >>= $= ^= |= ^= ...\n"+
    "  ```\n"+
    
    "  > a +=b   \n"+
    "  >\n"+
    "  > 其实就是 a = a+b\n"+
    "  >\n"+
    "  > a -=b\n"+
    "  >\n"+
    "  > 其实就是 a= a-b\n"+
    "  >\n"+
    "  > ...以此类推 \n"
  },{
    name: "输入和输出",
    id: 'inputAndOutput',
    markdown: "###### 键盘输入和打印输出\n"+

    "* fmt打印输入\n"+
    
    "  > * fmt.Print\n"+
    "  >\n"+
    "  > * fmt.Println\n"+
    "  >\n"+
    "  > * fmt.Printf(' ') ,也叫做格式化输出,也就是可以使用各种占位符\n"+
    "  >\n"+
    "  >   | 占位符 |                   含义                   |\n"+
    "  >   | :----: | :--------------------------------------: |\n"+
    "  >   |   %v   |                 原值输出                 |\n"+
    "  >   |   %%   |               单纯的百分号               |\n"+
    "  >   |   %T   |               输出数据类型               |\n"+
    "  >   |   %t   |                 输出bool                 |\n"+
    "  >   |   %b   |                  二进制                  |\n"+
    "  >   |   %c   |           打印数值所对应的字符           |\n"+
    "  >   |   %d   |                  十进制                  |\n"+
    "  >   |   %o   |                  八进制                  |\n"+
    "  >   |   %x   |                 十六进制                 |\n"+
    "  >   |   %X   |            十六进制  大写A-F             |\n"+
    "  >   |   %s   |                  字符串                  |\n"+
    "  >   |   %q   | 该值对应的单引号括起来的go语法字符字面值 |\n"+
    "  >   |  ...   |                   ...                    |\n"+
    
    "* 键盘输入\n"+
    
    "  > * fmt.Scanln(&x)\n"+
    "  >\n"+
    "  >   * 会阻塞程序执行\n"+
    "  >   * 之后我们键盘输入的值 ,会被赋值给x\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var x int \n"+
    "  >   var y float64\n"+
    "  >   fmt.Println('请输入一个整数类型,一个浮点类型')\n"+
    "  >   fmt.Scanln(&x,&y)\n"+
    "  >   // fmt.Scanf('%d,%f',&x,&y)也可以\n"+
    "  >   ```\n"
  },{
    name: 'if语句',
    id: 'ifSen',
    markdown: "###### if分支语句\n"+

    "* 程序的流程控制\n"+
    
    "  * 顺序结构:从上而下,依次执行\n"+
    "  * 选择结构:满足条件,条件才会执行\n"+
    
    "  * 循环结构:满足条件,代码会被执行多次\n"+
    
    "* 语法格式\n"+
    
    "  > if(bool条件的表达式){\n"+
    "  >\n"+
    "  > ​	代码体,当bool表达式的返回值是true的时候会执行\n"+
    "  >\n"+
    "  > }else{\n"+
    "  >\n"+
    "  > ​	代码体,当bool表达式的返回值是false的时候会执行\n"+
    "  >\n"+
    "  > ​	所以如果if中的代码体没有执行,就回去执行else的代码体\n"+
    "  >\n"+
    "  > ​	如果if中的条件满足了,就不会去执行else中的语句\n"+
    "  >\n"+
    "  > }\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > package main\n"+
    "  > \n"+
    "  > import 'fmt'\n"+
    "  > \n"+
    "  > func main() {\n"+
    "  > 	num := 20\n"+
    "  > 	if num > 16 {\n"+
    "  > 		fmt.Printf('num大于16')\n"+
    "  > 	} else {\n"+
    "  > 		fmt.Printf('num小于16')\n"+
    "  > 	}\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func main(){\n"+
    "  > 	var num int \n"+
    "  >   fmt.Print('请输入一个数字')\n"+
    "  >   fmt.Scanln(&num)  // 会监控读取我们键盘输入行为,把我们输入的数赋值给num\n"+
    "  >   if(num>60){\n"+
    "  >     fmt.Print('及格')\n"+
    "  >   }else{\n"+
    "  >     fmt.Print('没及格')\n"+
    "  >   }\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > if(bool条件表达式1){\n"+
    "  >\n"+
    "  > ​	如果bool表达式1的结果是true,那就执行代码体\n"+
    "  >\n"+
    "  > }else if(bool条件表达式2){\n"+
    "  >\n"+
    "  > ​	如果bool表达式2的结果是true,那就执行代码体\n"+
    "  >\n"+
    "  > }else if(bool表达式3){\n"+
    "  >\n"+
    "  > ​	如果bool表达式3的结果是true,那就执行代码体\n"+
    "  >\n"+
    "  > }else{\n"+
    "  >\n"+
    "  > ​	如果所有的 if 和 else if 都不满足,就会执行最后的else\n"+
    "  >\n"+
    "  > }\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test2(){\n"+
    "  > 	var num int \n"+
    "  > 	fmt.Println('请输入一串数字')\n"+
    "  > 	fmt.Scanln(&num)\n"+
    "  > 	if(num<60){\n"+
    "  > 		fmt.Println('不及格')\n"+
    "  > 	}else if(num<70){\n"+
    "  > 		fmt.Println('良好')\n"+
    "  > 	}else if(num<80){\n"+
    "  > 		fmt.Println('优秀')\n"+
    "  > 	}else if(num<90){\n"+
    "  > 		fmt.Println('good')\n"+
    "  > 	}else{\n"+
    "  > 		fmt.Println('极佳')\n"+
    "  > 	}\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 当第一个if没有成立的时候 ,证明整形num >= 60的,因此之后的else if没有考虑到60以下的情况\n"+
    "  > * 同样第二个else if没有考虑到num<70的情况,因为程序如果能够执行到这里,证明其必大于等于70\n"+
    "  > * ...\n"+
    "  > * 依次类推,可以用来精简代码\n"+
    
    "* if语句其他写法\n"+
    
    "  > ```go\n"+
    "  > func main(){\n"+
    "  >   if num:=4;num>0{\n"+
    "  >     fmt.Println('正数')\n"+
    "  >     fmt.Println(num)\n"+
    "  >   }else{\n"+
    "  >     fmt.Println('负数')\n"+
    "  >   }\n"+
    "  >   fmt.Println(num)\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 在写if语句的时候声明一个变量 \n"+
    "  >   * if分号前是我们声明的变量,分号后是判断的条件\n"+
    "  >   * 程序体是一样的\n"+
    "  > * 此变量只能在if语句里才能访问,也就是作用域只在if语句中\n"+
    "  > * 出了if语句就无从访问\n"
  },{
    name: 'switch语句',
    id: "switchSenc",
    markdown: "###### switch语句\n"+

    "* 语法\n"+
    
    "  > * 使用switch后的变量名和每个case的数值一一对比\n"+
    "  >\n"+
    "  > * 如果满足条件,就执行case后的代码体\n"+
    "  >\n"+
    "  > * 如果不满足继续往下找\n"+
    "  >\n"+
    "  > * 如果都不满足,就执行default里的代码体\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func test4() {\n"+
    "  >   	var num int\n"+
    "  >   	fmt.Println('please input a number')\n"+
    "  >   	fmt.Scanln(&num)\n"+
    "  >   	switch num {\n"+
    "  >   	case 6:\n"+
    "  >   		fmt.Println('不及格')\n"+
    "  >   	case 7:\n"+
    "  >   		fmt.Println('及格')\n"+
    "  >   	case 8:\n"+
    "  >   		fmt.Println('还可以')\n"+
    "  >   	case 9:\n"+
    "  >   		fmt.Println('良好')\n"+
    "  >   	case 10:\n"+
    "  >   		fmt.Println('优秀')\n"+
    "  >   	default:\n"+
    "  >   		fmt.Println('未知的分数')\n"+
    "  >   	}\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * switch可以作用于其他类型上,但是case后的数值类型必须和switch保持一致\n"+
    "  >\n"+
    "  >   * Test 模拟实现了一个计算器\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     func test5() {\n"+
    "  >     	var (\n"+
    "  >     		num1 int\n"+
    "  >     		num2 int\n"+
    "  >     		opa  string\n"+
    "  >     	)\n"+
    "  >     	fmt.Println('请输入两个数,一个运算符号')\n"+
    "  >     	fmt.Scanln(&num1, &num2, &opa)\n"+
    "  >     	switch opa {\n"+
    "  >     	case '+':\n"+
    "  >     		fmt.Print(num1 + num2)\n"+
    "  >     	case '-':\n"+
    "  >     		fmt.Print(num1 - num2)\n"+
    "  >     	case '*':\n"+
    "  >     		fmt.Print(num1 * num2)\n"+
    "  >     	case '/':\n"+
    "  >     		fmt.Print(num1 / num2)\n"+
    "  >     	}\n"+
    "  >     }\n"+
    "  >     ```\n"+
    
    "* switch的其他写法\n"+
    
    "  > 可以省略省略switch后面的变量,相当于直接作用在true上\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > switch{\n"+
    "  > 	case true:\n"+
    "  > 	 	fmt.Println('true')\n"+
    "  > 	case false:\n"+
    "  > 		fmt.Println('false')\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > 因此可以这样写\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test6(){\n"+
    "  >   var num int\n"+
    "  >   fmt.Println('请输入一个分数')\n"+
    "  >   switch{\n"+
    "  >     case num<60:\n"+
    "  >     fmt.Println('没及格')\n"+
    "  >     case num<70:\n"+
    "  >     fmt.Println('刚及格')\n"+
    "  >     case num<80:\n"+
    "  >     fmt.Println('还可以')\n"+
    "  >     case num<90:\n"+
    "  >     fmt.Println('良好')\n"+
    "  >     case num<100:\n"+
    "  >     fmt.Println('优秀')\n"+
    "  >     default:\n"+
    "  >     fmt.Println('满分')\n"+
    "  >   }\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > 此外,case后可以同时写多个数值\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test7(){\n"+
    "  > 	var month int\n"+
    "  >   fmt.Println('请输入1-12中的任意一个整数')\n"+
    "  >   fmt.Scanln(&month)\n"+
    "  >   switch(month){\n"+
    "  >     case 1,2,3:\n"+
    "  >     fmt.Println('一季度')\n"+
    "  >     case 4,5,6:\n"+
    "  >     fmt.Println('二季度')\n"+
    "  >     case 7,8,9:\n"+
    "  >     fmt.Println('三季度')\n"+
    "  >     case 10,11,12:\n"+
    "  >     fmt.Println('四季度')\n"+
    "  >   }\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > switch后可以多一个初始化语句,类似if的用法,定义一个只能在switch结构体里用的变量\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test8(){\n"+
    "  >   switch lang:=20,lang{\n"+
    "  >    ....  //同理,这个lang变量只能在此switch分支里才可以用\n"+
    "  >   }\n"+
    "  > 	// 出了这个作用域访问lang,就得到undefined\n"+
    "  > }\n"+
    "  > ```\n"+
    
    "* switch中的break 和 fallthrough\n"+
    
    "  > break可以使用在switch之中,也可以使用在for循环里,可以强行退出结构体\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test9(){\n"+
    "  > 	n:=2\n"+
    "  > 	switch n {\n"+
    "  >     case 1:\n"+
    "  >     fmt.Println('1')\n"+
    "  >     break\n"+
    "  >     fmt.Println('1')\n"+
    "  >     fmt.Println('1')\n"+
    "  >     fmt.Println('1')\n"+
    "  >   	case 2:\n"+
    "  >     fmt.Println(2)\n"+
    "  >     fmt.Println(2)\n"+
    "  >     fmt.Println(2)\n"+
    "  >     fmt.Println(2)\n"+
    "  > 	}\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 在每个case语句上 其实有自动补上一个break\n"+
    "  > * 但是如果我们在某处手动加上break的话,可以强制退出switch case结构体\n"+
    
    "  \n"+
    
    "  >fallthrough 当满足某个case后不但会执行自己,也会无视条件执行下一个case\n"+
    "  >\n"+
    "  >```go\n"+
    "  >func test10(){\n"+
    "  >	n:=1\n"+
    "  >	switch n {\n"+
    "  >    case 1:\n"+
    "  >    fmt.Println('1')\n"+
    "  >		fallthrough\n"+
    "  >  	case 2:\n"+
    "  >    fmt.Println(2)\n"+
    "  >	}\n"+
    "  >}\n"+
    "  >//结果是 1,2\n"+
    "  >```\n"
  },{
    name: 'for循环',
    id: 'forSen',
    markdown: "###### for循环\n"+

    "* 何为\n"+
    
    "  > 循环就是在条件满足的前提下,不断执行一段相同或者相似的代码\n"+
    
    "* 语法\n"+
    
    "  > * 结构\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func main(){\n"+
    "  >     for 循环变量;循环条件;循环变量的变化{\n"+
    "  >       //循环执行的代码\n"+
    "  >     }\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  > * 例子,打印五次 helloworld\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func main(){\n"+
    "  >     for i := 1;i<=5;i++{\n"+
    "  >   		fmt.Println('hello world')\n"+
    "  >   	}\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 在for循环里的循环变量 i 作用域是当前这个for循环,出了循环外部不能使用\n"+
    "  >   * 只是使用`i:=1`,不能使用`var i=1`,同样在`if`和`switch`语句之中也是这样\n"+
    
    "* 其他写法\n"+
    
    "  > * 虽然是有三个循环表达式,但是可根据情况进行省略\n"+
    "  >\n"+
    "  >   * 可以同时省略循环变量声明以及循环变量的变化,只写循环条件\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     i:=5\n"+
    "  >     for i<5 {\n"+
    "  >     	fmt.Println('hello world')\n"+
    "  >     }\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >   * 可以省略三个循环条件,循环体代码就会无条件地不断得到执行,相当于其他语言的`while true`\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     for {\n"+
    "  >       fmt.Println('hello world') //会无条件地一直执行打印\n"+
    "  >     }\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * domo\n"+
    "  >\n"+
    "  >   * 打印从 58 - 23 的数字\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     for i:=58;i<=23;i--{\n"+
    "  >     	fmt.Println(i)\n"+
    "  >     }\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >   * 累加1-100的和\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var sum int = 0\n"+
    "  >     for i:=1 ; i<=100 ; i++{\n"+
    "  >     	sum += i\n"+
    "  >     }\n"+
    "  >     fmt.Println(sum)\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >   * 打印 1-100 内,能够被3整除,但是不能被 5 整除的数 ,统计被打印的数字的个数, 每行打印五个\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     for i, sum := 1, 0; i <= 100; i++ {\n"+
    "  >     		if i%3 == 0 && i%5 != 0 {\n"+
    "  >     			fmt.Print(i,'\t')\n"+
    "  >     			sum++\n"+
    "  >     			if sum%5 == 0 && sum != 0 {\n"+
    "  >     				fmt.Println()\n"+
    "  >     			}\n"+
    "  >     		}\n"+
    "  >     	}\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     * 使用 := 声明多个变量要这么写  变量1,变量2,变量3 := 值1,值2,值3\n"+
    "  >     * 5个一行,一次只要个数取余5为0的话,就代表已经满一行,因此就可以换行了\n"+
    "  >\n"+
    "  >   * 求 100 - 999 之间所有的水仙花数\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     // 也就是 个位 十位 百位 三位数之和 等于其本身的数字\n"+
    "  >     for i := 100; i <= 999; i++ {\n"+
    "  >     		var temp1 int = i / 100\n"+
    "  >     		var temp2 int = (i - (temp1 * 100)) / 10\n"+
    "  >     		var temp3 int = i % 10\n"+
    "  >     		if temp1*temp1*temp1+temp2*temp2*temp2+temp3*temp3*temp3 == i {\n"+
    "  >     			fmt.Printf('%d,是水仙花数', i)\n"+
    "  >     			fmt.Println()\n"+
    "  >     		}\n"+
    "  >     	}\n"+
    "  >         \n"+
    "  >     // 出于简便,我们可以使用math包里的Pow函数 ,不过要将数值转为 float64才可以使用\n"+
    "  >     for i := 100; i <= 999; i++ {\n"+
    "  >     		var temp1 int = i / 100\n"+
    "  >     		var temp2 int = (i - (temp1 * 100)) / 10\n"+
    "  >     		var temp3 int = i % 10\n"+
    "  >     		if math.Pow(float64(temp1), 3)+math.Pow(float64(temp2), 3)+math.Pow(float64(temp3), 3) == float64(i) {\n"+
    "  >     			fmt.Printf('%d,是水仙花数', i)\n"+
    "  >     			fmt.Println()\n"+
    "  >     		}\n"+
    "  >     	}\n"+
    "  >         \n"+
    "  >     // 当然还有一个更容易理解的方法\n"+
    "  >     for x := 1 ; x<=9 ; x++{\n"+
    "  >       for y :=0 ; y<=9 ; y++ {\n"+
    "  >         for z :=0 ;z<=9 ; z++ {\n"+
    "  >           var temp = 100*x + 10*y + z\n"+
    "  >           if(x*x*x + y*y*y + z*z*z == temp){\n"+
    "  >             fmt.Printf('%d,是水仙花数', temp)\n"+
    "  >     				fmt.Println()\n"+
    "  >           }\n"+
    "  >         }\n"+
    "  >       }\n"+
    "  >     }\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     \n"+
    "  >\n"+
    "  >   * 打印2-100之内所有的素数\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     func test8() {\n"+
    "  >     	for i := 2; i <= 100; i++ {\n"+
    "  >     		var isAnswer bool = true\n"+
    "  >     		for j := 2; j <= 100; j++ {\n"+
    "  >     			if j > i {\n"+
    "  >     				break\n"+
    "  >     			}\n"+
    "  >     			if i%j == 0 && i != j {\n"+
    "  >     				isAnswer = false\n"+
    "  >     			}\n"+
    "  >     		}\n"+
    "  >     		if isAnswer == true {\n"+
    "  >     			fmt.Printf('%d是素数', i)\n"+
    "  >     			fmt.Println()\n"+
    "  >     		}\n"+
    "  >     	}\n"+
    "  >     }\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     * 外层函数每次循环都会有一个变量记录这个数是否是素数\n"+
    "  >     * 内层函数判断\n"+
    "  >       * 如果被除数大于除数,直接break\n"+
    "  >       * 如果这个数是质数,那就把记录是否为素数的变量更改为false\n"+
    "  >     * 如果执行了内层循环,isAnswer还是true的话,证明当前的这个数就是素数\n"+
    "  >\n"+
    "  >     \n"+
    
    "* 多层for循环\n"+
    
    "  > * 绘制乘法口诀表\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func main() {\n"+
    "  >   	fmt.Println('开始')\n"+
    "  >   	for i := 1; i <= 9; i++ {\n"+
    "  >   		for j := 1; j <= i; j++ {\n"+
    "  >   			fmt.Printf('%d*%d=%d', i, j, i*j)\n"+
    "  >   		}\n"+
    "  >   		fmt.Println()\n"+
    "  >   	}\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 因为内层循环的 j 是 <= i , 因此刚开始 j只能执行一次\n"+
    "  >   * 随着 i 的不断增加 , j <=i 的情况也在增加 , 因此列数增加\n"+
    "  >   * 外层循环控制行数\n"+
    "  >\n"+
    "  > * 绘制出一个正三角形状\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func test3() {\n"+
    "  >   	fmt.Println()\n"+
    "  >   	for i := 5; i >= 0; i-- {\n"+
    "  >   		for j := 4; j >= i-1; j-- {\n"+
    "  >   			fmt.Printf('* ')\n"+
    "  >   		}\n"+
    "  >   		fmt.Println()\n"+
    "  >   	}\n"+
    "  >   }\n"+
    "  >   ```\n"+
    
    "* break 和 continue\n"+
    
    "  > break会强行退出循环,会彻底退出循环,哪怕我们的循环条件是满足的\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > for i:=0 ; true ; i++{\n"+
    "  >   fmt.Println(i)\n"+
    "  >   if i == 20 {\n"+
    "  >     break\n"+
    "  >   }\n"+
    "  > } \n"+
    "  > ```\n"+
    
    "  > continue 会跳出本次循环,继续执行下一次循环\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > for i:=0 ; i<=100 ; i++{\n"+
    "  >   if i%5 == 0{\n"+
    "  >     continue\n"+
    "  >   }\n"+
    "  > }\n"+
    "  > // 因此结果里只要是 5 的倍数,就不被打印\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 如果涉及到多层的循环嵌套, break和continue结束的是它所在的那层循环,不会渗透到外层\n"+
    "  >\n"+
    "  > * 但是如果想要结束外层循环,可以给外层 循环起一个名字 ,通过`break外层循环名`来结束\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   name:for ... {\n"+
    "  >   	for ...{\n"+
    "  >   		if ...{\n"+
    "  >   		  break name\n"+
    "  >   		}\n"+
    "  >   	}\n"+
    "  >   }\n"+
    "  >   ```\n"    
  },{
    name: 'goto语句',
    id: 'gotoSenc',
    markdown: "* goto\n"+

    "  > 可以无条件地将代码跳转到某处\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test9(){\n"+
    "  >   LOOP:\n"+
    "  >   fmt.Printf('1')\n"+
    "  >   fmt.Printf('2')\n"+
    "  >   fmt.Printf('3')\n"+
    "  >   fmt.Printf('4')\n"+
    "  >   goto LOOP\n"+
    "  >   fmt.Printf('5')\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 当代码执行完毕打印'4'后,遇到goto,回到了LOOP所在的位置\n"+
    "  >\n"+
    "  > * 因此此段代码会循环往复地执行打印 1,2,3,4\n"+
    "  >\n"+
    "  > * goto一定慎用,并且得配合一些条件来使用,不然会出问题\n"+
    "  >\n"+
    "  >   \n"+
    "  >\n"+
    "  > goto可多用于错误的处理,一般如果捕获到错误,可以使用goto跳到错误处理\n"
  },{
    name: '随机数',
    id: 'randNum',
    markdown: "###### 生成随机数\n"+

    "* 随机数\n"+
    
    "  > * 其实本没有随机数,所谓的随机数都是根据算法算出来的(伪随机)\n"+
    "  >\n"+
    "  > * 随机数在math包里\n"+
    "  >\n"+
    "  >   * ```go\n"+
    "  >     import 'math/rand'\n"+
    "  >     ```\n"+
    "  >\n"+
    "  > * 函数名\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func main(){\n"+
    "  >   	var num1 = rand.Int()\n"+
    "  >   	fmt.Println(num1)\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  > * 生成固定范围的随机数\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func main(){\n"+
    "  >   	for i:=0;i<10;i++{\n"+
    "  >   		var num = rand.Intn(10)\n"+
    "  >   		fmt.Println(num)\n"+
    "  >   	}\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 使用rand.Intn(int),可生成固定范围的随机数 \n"+
    "  >     * 假如想获取到 0-45(是不包括45的),可以 rand.Intn(45)\n"+
    "  >     * 假如想获取到 20-45,需要写成 rand.Intn(25)+20 , 实际的范围就是 20-45\n"+
    "  >\n"+
    "  > * 可为随机数设置种子数\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func main(){\n"+
    "  >   	rand.Seed(1)\n"+
    "  >   	var num = rand.Intn(10)\n"+
    "  >   	fmt.Print(num)\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  > * 配合时间包来获取,可每次获取到不同的随机数\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   // 时间包简单用法\n"+
    "  >   func main(){\n"+
    "  >   	var time = time.Now()\n"+
    "  >   	fmt.Printf('%T\n',time)\n"+
    "  >   	//时间戳:指定时间,距离1970计算机元年之间时间的差值\n"+
    "  >   	timeStamp:=time.Unix()\n"+
    "  >   	fmt.Println(timeStamp)\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 设置种子数,可以设置成时间戳\n"+
    "  >   * 调用生成随机数的函数\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   func main(){\n"+
    "  >     rand.Seed(time.now().UnixNano())  //给种子数设置为时间戳\n"+
    "  >     for i:=0 ; i<10 ; i++{\n"+
    "  >       fmt.Println(rand.Intn(20)) \n"+
    "  >     }\n"+
    "  >   }\n"+
    "  >   ```\n"
  },{
    name: '数组数据类型',
    id: 'arrayType',
    markdown:  "###### 数组初步\n"+

    "* 回顾(两大数据类型)\n"+
    
    "  > 基本类型: 整形 浮点型 布尔型 字符串\n"+
    
    "  > 复合类型: 数组,切片,map,strict,pointer,function,channel...\n"+
    
    "* 数组\n"+
    
    "  > * 数组就是存储一组相同数据类型的数据结构\n"+
    "  >\n"+
    "  >   * 可以理解为,存储一组数据的容器\n"+
    "  >\n"+
    "  > * 可以通过下标访问和修改\n"+
    "  >\n"+
    "  > * 长度和容量(数组,切片,map,字符串都有这个属性)\n"+
    "  >\n"+
    "  >   * 长度,也就是数组中实际存储的数据量\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     len(arr)\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >   * 容量,也就是容器中能够存储的最大数据量\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     cap(arr)\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >   * 因为数组是一个定长的容器 ,因此其len和cap是相等的\n"+
    "  >\n"+
    "  > * 语法\n"+
    "  >\n"+
    "  >   * 创建\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var arr [4] int\n"+
    "  >     arr[0]=1\n"+
    "  >     arr[1]=2\n"+
    "  >     arr[2]=3\n"+
    "  >     arr[3]=4\n"+
    "  >     fmt.Println(arr)\n"+
    "  >     fmt.Println(arr[2]) // 也可以根据下标访问\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     // 还可以声明的时候就初始化数组\n"+
    "  >     var arr = [4] int{1,2,3,4}\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     // 还可以给指定的地方初始化\n"+
    "  >     var arr = [4] int {1:2,3:3}  //如果是数值型,其他没有初始化的地方最终会被0值代替\n"+
    "  >     var arr = [5] string {'tom','lily'} //如果是字符串类型,其他没有初始化的 地方最终会被''代替\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     // 创建数组的时候,可以不写长度,根据我们的赋值内容,自动得到长度\n"+
    "  >     var arr = [...] int {1,2,3,4,5}\n"+
    "  >     ```\n"+
    "  >\n"+
    "  >     * 可以采用 var arr [长度] 数据类型\n"+
    "  >     * 可以采用 var arr = [长度] 数据类型 {值1,值2,值3}\n"+
    "  >     * 可以采用 var arr = [...] 数据类型 {值1,值2,值3}\n"+
    "  >\n"+
    "  >   * 访问\n"+
    "  >\n"+
    "  >     * 通过下标进行访问\n"+
    "  >       * 下标是默认从0开始的整数,直到长度-1\n"+
    "  >       * 不能越界\n"+
    "  >       * 数组的最后一位其实就是 arr(len(arr)-1)\n"+
    
    "###### 数组的内存分析\n"+
    
    "* 内存分析\n"+
    
    "  > * 数组作为一种存储相同数据类型的容器,在内存中开辟的空间是连续\n"+
    "  >\n"+
    "  > * 而数组的地址其实是数组的首地址值,也即是第一个元素的位置\n"+
    "  >\n"+
    "  > * 变量的内存地址\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var num int =200\n"+
    "  >   fmt.Printf('%p\n',&num)  //在fmt中,%p用于打印地址的占位符,&是取地址符号\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 创建变量本身其实就是开辟内存\n"+
    "  >     * 变量的数据类型 : 会根据变量的类型创建相应大小的内存空间\n"+
    "  >     * 变量名 : 我们通过变量名来访问这块内存空间\n"+
    "  >     * 变量值 : 变量值也就是这块内存空间之中存储的内容 \n"+
    "  >     * 访问 : 当我们访问变量的值的时候,就是访问这块内存空间之中存储的内容的值\n"+
    "  >\n"+
    "  > * 相应地,比如我们创建一个数组 var arr [4] int\n"+
    "  >\n"+
    "  >   * 在内存中开辟一块空间\n"+
    "  >   * 空间大小就是4个int类型所占的空间\n"+
    "  >   * 数组的地址就是首元所在的地址\n"+
    "  >     * 因为数组元素的数据结构相同\n"+
    "  >     * 因此只要我们有了第一个元素的地址\n"+
    "  >     * 因为数组开辟的空间是连续的,并且相同数据类型所占的空间都是相等的\n"+
    "  >     * 因此我们很容易计算出剩下元素的地址,只要计算n个相应类型元素所占的空间大小即可\n"+
    "  >     * 因此数组的执行效率很高\n"+
    "  >   * 我们通过数组名,来访问保存在内存中的这块空间\n"+
    "  >\n"+
    "  > * 当数组不再使用的时候,无需程序员手动清除\n"+
    "  >\n"+
    "  >   * go语言中存在GC(垃圾回收机制)\n"+
    
    "###### 数组的遍历\n"+
    
    "* 遍历\n"+
    
    "  > 手动通过下标访问数组中的每一个元素\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var arr = [4] int {1,2,3,4}\n"+
    "  > arr[0]\n"+
    "  > arr[1]\n"+
    "  > arr[2]\n"+
    "  > arr[3]\n"+
    "  > ```\n"+
    
    "  > 通过循环进行遍历\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var arr = [5] int {1,2,3,4,5}\n"+
    "  > for i:=0 ; i<len(arr) ; i++ {\n"+
    "  > 	fmt.Println(arr[i])\n"+
    "  > }\n"+
    "  > ```\n"+
    
    "  > 通过range遍历数组(有点像forEach)\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var arr = [5] int {1,2,3,4,5}\n"+
    "  > for i,item := range arr1 {\n"+
    "  > 	fmt.Printf('我是第%d个,我是$d',i,item)\n"+
    "  >   fmt.Println()\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 执行原理\n"+
    "  >\n"+
    "  >   * range会在每次循环时,取出相应的下标和值\n"+
    "  >   * 每次循环其实取出的是一对数据\n"+
    "  >\n"+
    "  > * 如果不需要下标,可以使用下划线省略掉\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   for _,item := range arr\n"+
    "  >   ```\n"+
    
    "* 数组是值类型\n"+
    
    "  \n"+
    
    "  > 值类型:储存的是数据的值本身,如果把这个值赋值给其他变量,赋值的其实是这个数据的备份\n"+
    "  >\n"+
    "  > 引用类型:存储的是数据的引用地址,传递的时候传递的也是地址,这个会在后续详细说明\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > arr := [4] int {1,2,3,4}  //[4] int\n"+
    "  > arr := [4] float {1.23,2.23,3.34,5.5} //[4] float\n"+
    "  > arr := [2] int {2,2} //[2] int\n"+
    "  > arr := [2] string {'tom','lily'} //[2] string\n"+
    "  > \n"+
    "  > // 返回的类型是 [长度]类型\n"+
    "  > ```\n"+
    
    "  > 基础类型是按值传递的\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var num = 10\n"+
    "  > var num2 = num\n"+
    "  > num2 = 20\n"+
    "  > fmt.Print(num,num2)  // 10,20\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 在赋值的时候,其实传递不是地址\n"+
    "  > * 而是将地址中的值复制了一份,交给另一个\n"+
    "  > * 所以两者各自修改的时候,不会影响到彼此\n"+
    "  >\n"+
    "  > 在go中,数组也是按值传递(这一点和JavaScript等语言正好相反)\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var arr = [4] int {1,2,3,4}\n"+
    "  > var arr2 = arr \n"+
    "  > var arr2[0] = 100\n"+
    "  > fmt.Print(arr,arr2)\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 分析一下执行过程\n"+
    "  >   * 首先在内存开辟一块空间,空间大小是4个int的大小 ,我们使用 arr 数组名来访问这个空间\n"+
    "  >   * 我们声明了变量 arr2\n"+
    "  >     * 使用arr来赋值arr2\n"+
    "  >     * 因为在go语言中,数组是按值传递的\n"+
    "  >     * 因此\n"+
    "  >       * 会把arr地址里保存的内容复制一份\n"+
    "  >       * 传递给arr2\n"+
    "  >     * 所以\n"+
    "  >       * arr和arr2两者指向的地址其实并不是一个\n"+
    "  >     * 因此\n"+
    "  >       * 两者各自修改的时候,不会对彼此造成影响\n"+
    "  >\n"+
    "  > 同理,我们进行比较数组的时候,比较的也是数组的值,而非地址(又和js等完全相反)\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var arr = [4] int {1,2,3,4}\n"+
    "  > var arr2 = [4] int {1,2,3,4}\n"+
    "  > fmt.Print(arr == arr2)  //true\n"+
    "  > ```\n"+
    
    "###### 数组的排序\n"+
    
    "* 冒泡排序\n"+
    
    "  > 思想:\n"+
    "  >\n"+
    "  > * 遍历数组,用每一项和其后一项比,如果比后一项大,就把两者进行换位,经此一轮,就可得到最大的数\n"+
    "  > * 但是仅仅这样还是不够的,这样只能把最大的数放在数组末尾\n"+
    "  > * 所以这样的过程要循环多次,但是区别在于\n"+
    "  >   * 当我们完成第二轮循环后,就已经选出第二大的数\n"+
    "  >   * 当我们完成第三轮循环后,选出了第三大的数 \n"+
    "  >   * ...\n"+
    "  > * 因此,总体循环i次,数组的后i位就不需得到遍历\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func sort() {\n"+
    "  > 	var arr = [7]int{23, 42, 1, 25, 15, 88, 12}\n"+
    "  > 	for i := 0; i < len(arr)-1; i++ {\n"+
    "  > 		for k := 0; k < len(arr)-i-1; k++ {\n"+
    "  > 			if arr[k] > arr[k+1] {\n"+
    "  > 				var temp = arr[k]\n"+
    "  > 				arr[k] = arr[k+1]\n"+
    "  > 				arr[k+1] = temp\n"+
    "  > 			}\n"+
    "  > 		}\n"+
    "  > 	}\n"+
    "  > 	fmt.Println(arr)\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > //其实go语言交换两个变量的值,没必要声明第三个变量,巧妙运用 ','\n"+
    "  > func sort() {\n"+
    "  > 	var arr = [7]int{23, 42, 1, 25, 15, 88, 12}\n"+
    "  > 	for i := 0; i < len(arr)-1; i++ {\n"+
    "  > 		for k := 0; k < len(arr)-i-1; k++ {\n"+
    "  > 			if arr[k] > arr[k+1] {\n"+
    "  > 				arr[k],arr[k+1] = arr[k+1],arr[k]\n"+
    "  > 			}\n"+
    "  > 		}\n"+
    "  > 	}\n"+
    "  > 	fmt.Println(arr)\n"+
    "  > }\n"+
    "  > ```\n"+
    
    "###### 多维数组\n"+
    
    "* 二维数组\n"+
    
    "  > 二维数组:可以理解为二维数组的元素都是一个一维数组\n"+
    "  >\n"+
    "  > 语法:\n"+
    "  >\n"+
    "  > * ```go\n"+
    "  >   var arr = [3][4]int{{1, 2, 3, 4}, {5, 6, 7, 8}, {2, 3, 4, 6}}\n"+
    "  >   fmt.Println(arr)\n"+
    "  >   ```\n"+
    "  >\n"+
    "  > * 表示arr是由三个一维数组组成的,每个一位数组的长度是4\n"+
    "  >\n"+
    "  > 注意:\n"+
    "  >\n"+
    "  > * 二维数组的长度指的是 其中包含一维数组的个数\n"+
    "  >\n"+
    "  > * 如果想要访问或者是要操作二维数组的内容\n"+
    "  >\n"+
    "  >   * 需要使用二维下标 `arr[0][1]`\n"+
    "  >     * 代表 arr这个二维数组的第一个一维数组中的第二个元素\n"+
    "  >\n"+
    "  > * 二维数组的遍历\n"+
    "  >\n"+
    "  >   * 使用上边的例子\n"+
    "  >\n"+
    "  >     ```go\n"+
    "  >     var arr = [3][4]int{{1, 2, 3, 4}, {5, 6, 7, 8}, {2, 3, 4, 6}}\n"+
    "  >     	fmt.Println(arr)\n"+
    "  >     	for i := 0; i < len(arr); i++ {\n"+
    "  >     		for j := 0; j < len(arr[i]); j++ {\n"+
    "  >     			fmt.Println(arr[i][j])\n"+
    "  >     		}\n"+
    "  >     	}\n"+
    "  >     ```\n"
  },{
    name: '切片数据类型',
    id: 'sliceType',
    markdown: "###### Slice\n"+

    "* 切片与数组\n"+
    
    "  > 数组\n"+
    "  >\n"+
    "  > * 存储一组相同数据类型的数据结构\n"+
    "  > * 特点\n"+
    "  >   * 定长\n"+
    "  >   * 数据结构相同\n"+
    "  >   * 值类型\n"+
    
    "  > 切片\n"+
    "  >\n"+
    "  > * 同数组类似是存储相同数据类型的数据结构,但是长度可变\n"+
    "  >   * 变长(动态长度)\n"+
    "  >   * 引用类型,指向一个底层数组\n"+
    
    "* 语法\n"+
    
    "  > 定义切片\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var slice [] 数据类型\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 与数组不同的是,在'[]'中是无需写长度的\n"+
    
    "  > 赋值切片\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var slice = []int{1, 2, 3, 4}\n"+
    "  > ```\n"+
    
    "  > 使用make来创建切片\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var slice = make([]int,3,8)\n"+
    "  > fmt.Println(slice)\n"+
    "  > fmt.Printf('长度:%d,容量:%d',len(slice),cap(slice))\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 使用make创建切片时\n"+
    "  >   * 第一个参数,`[]数据类型`,这是创建切片的固有方法,因为make不仅仅可以创建切片\n"+
    "  >   * 第二个参数,代表切片的长度\n"+
    "  >     * 我们在后面赋值的时候,长度可以超过len\n"+
    "  >   * 第三个参数,代表切片的容量\n"+
    "  >     * 当超过这个容量后,切片会自动扩容\n"+
    "  >   * 和数组一样,我们只交代了交代了他是什么类型,但是并没有给值\n"+
    "  >     * int 会自动为0\n"+
    "  >     * string 会自动为 ''\n"+
    "  >     * bool 会自动为false\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var slice = make([]int,3,8)\n"+
    "  > slice[0],slice[1],slice[2] = 1,2,3\n"+
    "  > fmt.Println(slice)\n"+
    "  > fmt.Printf('长度:%d,容量:%d',len(slice),cap(slice))\n"+
    "  > ```\n"+
    
    "  > append 追加函数\n"+
    "  >\n"+
    "  > * 当切片中的内容已经达到len了,此时我们并不是直接采用赋值的方法向里面添加元素\n"+
    "  > * 需要使用append函数,向切片末尾添加内容\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var slice = make([]int,3,8)\n"+
    "  > slice[0],slice[1],slice[2] = 1,2,3\n"+
    "  > slice = append(slice,1,2)\n"+
    "  > fmt.Println(slice)\n"+
    "  > fmt.Printf('长度:%d,容量:%d',len(slice),cap(slice))\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 第一个参数代表要向哪个切片添加内容\n"+
    "  >\n"+
    "  > * 后面的参数,是添加的内容是什么\n"+
    "  >\n"+
    "  > * 为什么`slice = append(slice,1,2)`\n"+
    "  >\n"+
    "  >   * 因为 如果仅仅是`append(slice,1,2)`,我们在向切片末尾添加元素的时候会指向一个新的地址\n"+
    "  >   * 所以我们需要把这个地址重新赋值给我们的切片\n"+
    "  >\n"+
    "  > * 切片还有一种类似`js`里展开运算符的语法\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var slice = make([]int,3,8)\n"+
    "  >   slice[0],slice[1],slice[2] = 1,2,3\n"+
    "  >   var slice2 = [] int {5,6,7,8}\n"+
    "  >   slice = append(slice,slice2...)\n"+
    "  >   fmt.Println(slice)\n"+
    "  >   fmt.Printf('长度:%d,容量:%d',len(slice),cap(slice))\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * append(slice,slice2...)相当于\n"+
    "  >     * 把slice2展开\n"+
    "  >     * 把其中的元素,append进slice中\n"+
    "  >     * ...不能对数组使用,切片还得append切片\n"+
    
    "* 切片的遍历\n"+
    
    "  > 遍历和数组类似,但是注意一定是 切片的长度而非容量\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var slice = [] int {1,2,3,4}\n"+
    "  > for i:=0 ; i < len(slice) ; i++ {\n"+
    "  >   fmt.Println(slice[i])\n"+
    "  > }\n"+
    "  > for i,value := range slice {\n"+
    "  >   fmt.Printf('序号:%d,值:%d',i,value)\n"+
    "  > }\n"+
    "  > ```\n"+
    
    "###### slice在内存中\n"+
    
    "* 切片实际上是一个动态数组\n"+
    
    "* 切片是引用类型 \n"+
    
    "  > ?\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test(){\n"+
    "  > 	var slice = [] int {1,2,3}\n"+
    "  > 	var slice2 = slice \n"+
    "  > 	slice2[0] = 2\n"+
    "  > 	fmt.Println(slice)  // 2,2,3\n"+
    "  > 	fmt.Println(slice2) // 2,2,3\n"+
    "  >   fmt.Printf('%p,%p',slice,slice)  // 就引用类型而言,%p可取其在内存中的地址\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 在如上例子上,我们将slice的数据传给slice2\n"+
    "  > * 然后我们修改slice2的值\n"+
    "  > * 最后发现,slice也被修改了\n"+
    "  > * 因为引用类型指向的是内存中的地址,我们当时传给slice2的其实是slice的地址\n"+
    "  > * 因此两者在内存中的指向是一致的,修改其一另一者也会受到牵连\n"+
    "  >   * 打印两者在内存中的地址,发现是一样的 (0xc00011c000,0xc00011c000)\n"+
    
    "* 切片的底层原理\n"+
    
    "  > * 每一个切片在底层都是一个数组\n"+
    "  > * 切片本身不会存储任何内容,都是这个底层数组来存储\n"+
    "  >   * 所以修改切片也是在修改这个底层数组\n"+
    "  > * 当我们向这个切片中添加新的内容时候\n"+
    "  >   * 如果没有超过容量,只会直接添加\n"+
    "  >   * 如果超过这个容量 ,就会自动扩容(成倍增长容量)\n"+
    "  >     * 一旦扩容,指向的就是容量翻倍后的新的底层数组\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > func test2(){\n"+
    "  > 	var slice = make([]int, 3, 3)\n"+
    "  > 	fmt.Printf('%p', slice)\n"+
    "  > 	fmt.Println()\n"+
    "  > 	slice = []int{1, 2, 3}\n"+
    "  > 	slice = append(slice, 4)\n"+
    "  > 	fmt.Printf('%d,%d', len(slice), cap(slice))\n"+
    "  > 	fmt.Printf('%p', slice)\n"+
    "  > }\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 原本这个切片的长度和容量都是3\n"+
    "  >   * 但是向其中append内容,并且超过了自身容量限制时\n"+
    "  >     * 容量大小会翻倍\n"+
    "  >     * 长度会正常增加,增加几个元素,长度就加几\n"+
    "  >     * 内存中的地址会变化\n"+
    "  >       * 因为实际上他指向的是一个底层的数组\n"+
    "  >       * 数组的长度和容量是固定的,不可变的,已经不能装下超出部分的内容\n"+
    "  >       * 所以超过容量后它会重新去指向一个底层的数组\n"+
    "  >         * 出于性能方面的考虑,旧的底层数组如果没有被其他引用,会被 go 的`GC`(垃圾回收机制)处理掉\n"+
    
    "######  根据已有数组创建slice\n"+
    
    "* 根据数组创建切片\n"+
    
    "  > ```go\n"+
    "  > var arr = [10] int {1,2,3,4,5,6,7,8,9,0}\n"+
    "  > var slice = arr[:10]\n"+
    "  > fmt.Println(slice)\n"+
    "  > var slice2 = arr[0:10]\n"+
    "  > fmt.Println(slice2)\n"+
    "  > var slice3 = arr[:]\n"+
    "  > fmt.Println(slice3)\n"+
    "  > fmt.Printf('%p,%p', &arr, slice)\n"+
    "  > fmt.Printf('%d\n,%d\n',len(slice),cap(slice))\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 使用 `数组名[开始index:结束index]`来根据数组直接创建一个切片\n"+
    "  >\n"+
    "  >   * 如果是从头开始 ,开始index可以省略\n"+
    "  >\n"+
    "  >   * 如果截取到末尾,结束index可以不写\n"+
    "  >\n"+
    "  >   * 结束index表示截取到某一位 , 可以理解为是一个左闭右开的区间\n"+
    "  >\n"+
    "  >     * 但是不包括那一位本身\n"+
    "  >     * 所以 slice = arr[0:10] 取的其实是 arr[0]-arr[9]的元素\n"+
    "  >\n"+
    "  >   * 如果这个数组没有被扩容,那应该和使用其创建的切片内存中指向的地址是一致的\n"+
    "  >\n"+
    "  >     * 关于 `%p`取地址\n"+
    "  >       * 如果是引用类型的话,无需使用`&`取地址符\n"+
    "  >       * 如果是普通类型的话,需要使用`&`取地址符\n"+
    "  >\n"+
    "  >   * 根据数组创建的切片的 len 和 cap\n"+
    "  >\n"+
    "  >     * 切片的长度是你截取内容的长度\n"+
    "  >\n"+
    "  >     * 切片的容量\n"+
    "  >\n"+
    "  >       * 就是从你开始截取那位开始算起,到数组末尾的容量大小,和你截取是否真的有截取到末尾无关\n"+
    "  >\n"+
    "  >         ```go\n"+
    "  >         var arr = [10] int {1,2,3,4,5,6,7,8,9,0}\n"+
    "  >         var slice = arr[3:7] \n"+
    "  >         fmt.Printf('%d,%d',len(slice),cap(slice))   // 4,7\n"+
    "  >         var slice = arr[3:10] \n"+
    "  >         fmt.Printf('%d,%d',len(slice2),cap(slice2)) // 7,7\n"+
    "  >         ```\n"+
    "  >\n"+
    "  >       * 从代码示例上我们可以看到,无论是否有截取到末尾,切片的容量都是7\n"+
    "  >\n"+
    "  >   * 因为切片引用的是一个底层的数组\n"+
    "  >\n"+
    "  >     * 因此当这个底层数组被修改了,切片也会受到牵连 \n"+
    "  >\n"+
    "  >     * 同样,我们修改这个切片本身就是在修改这个底层数组\n"+
    "  >\n"+
    "  >       * 同理,当我们修改切片时,因为底层数组修改了\n"+
    "  >       * 那么同样引用着这个底层数组的另一个切片也会受到影响\n"+
    "  >\n"+
    "  >     * 当然,当我们对切片的修改超过了原数组的容量限制\n"+
    "  >\n"+
    "  >       * 那么这次修改就不会影响到原数组\n"+
    "  >\n"+
    "  >       * 我们会把原数组的内容拷贝到一个容量翻倍的新数组里 \n"+
    "  >\n"+
    "  >       * 切片会指向这个新的底层数组,并且向其后添加内容\n"+
    "  >\n"+
    "  >         \n"+
    
    "###### 切片是引用类型\n"+
    
    "* 数据的分类\n"+
    
    "  > 按照类型划分\n"+
    "  >\n"+
    "  > 基本类型: int float string bool\n"+
    "  >\n"+
    "  > 符合类型: array slice map struct function pointer chan\n"+
    
    "  > 按照特点来分\n"+
    "  >\n"+
    "  > 值类型: int float bool string array\n"+
    "  >\n"+
    "  > 引用类型: slice\n"+
    
    "* 详细模拟一下引用类型和值类型\n"+
    
    "  > ```go\n"+
    "  > var arr = [4] int {1,2,3,4}\n"+
    "  > var arr2 = arr\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 值类型在进行赋值传递的时候 \n"+
    "  >   * arr会将自己的值复制一份\n"+
    "  >   * 将复制的值 赋值 给arr2\n"+
    "  > * 两者在完成赋值这个行为之后,再无联系\n"+
    "  >   * 无论如何操作两者其一\n"+
    "  >   * 都不会对另一方产生影响\n"+
    
    "  > ```go\n"+
    "  > var arr = [4] int {1,2,3,4}\n"+
    "  > var slice = arr[:]\n"+
    "  > var slice2 = slice\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 引用类型在进行赋值的时候\n"+
    "  >   * 其本身没有值\n"+
    "  >   * 就将自己在内存中的地址赋值给另一方\n"+
    "  >   * 导致另一方也牵引着同样的地址\n"+
    "  > * 因此操作一方,会对另一方产生牵连\n"+
    "  > * 而直接修改这两者所引用内存中地址所对应的数据\n"+
    "  >   * 两者都会受到影响\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var slice = make([]int,8,8)\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 如果是使用直接声明创建的切片\n"+
    "  >   * 会根据条件,创建一个数组\n"+
    "  >   * 再将这个数组在内存中的地址交给这个切片来引用\n"+
    "  >   * 这就是所谓的引用类型,其本身并不保存数组,保存的是地址\n"+
    
    "###### 深拷贝和浅拷贝\n"+
    
    "* 深拷贝\n"+
    
    "  > 深拷贝复制的是数据本身\n"+
    "  >\n"+
    "  > 值类型的数据,传递默认使用的就是深拷贝\n"+
    "  >\n"+
    "  > * 使用for循环创建简单的深拷贝\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   s1 := []int {1,2,3,4}\n"+
    "  >   s2 := make([]int,0)\n"+
    "  >   for i:0;i<len(s1);i++{\n"+
    "  >   	s2 = append(s2,s1[i])\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 根据s1深拷贝出s2\n"+
    "  >     * 创建出一个切片\n"+
    "  >     * 使用循环,不断地向这个切片中添加元素\n"+
    "  >       * 因为这个切片在不断地扩容\n"+
    "  >       * 导致其在内存中所引用的底层数组也在不断地变化\n"+
    "  >       * 因此这个副本切片对应的地址和原本切片所对应的地址毫无关系\n"+
    "  >\n"+
    "  > * 当然也可以使用go语言内置的函数\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var slice = []int{1, 2, 3, 4}\n"+
    "  >   	var slice2 = make([]int, 5, 5)\n"+
    "  >   	slice2[0] = 0\n"+
    "  >   	var slice3 = make([]int, 4)\n"+
    "  >   	copy(slice2, slice)\n"+
    "  >   	copy(slice3, slice)\n"+
    "  >   	fmt.Println(slice2)\n"+
    "  >   	fmt.Println(slice3)\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * copy函数\n"+
    "  >\n"+
    "  >     * 第一个参数是目标切片\n"+
    "  >\n"+
    "  >     * 带二个参数是被拷贝的切片\n"+
    "  >\n"+
    "  >     * 意思就是,把切片2 拷贝进 切片1里\n"+
    "  >\n"+
    "  >     * 执行拷贝,会把切片2的内容,拷贝进切片1的开头\n"+
    "  >\n"+
    "  >       * 不是末尾\n"+
    "  >\n"+
    "  >     * 如果并不是完全从头拷贝到末尾可以使用\n"+
    "  >\n"+
    "  >       ```go\n"+
    "  >       copy(slice2, slice[x:x])\n"+
    "  >       ```\n"+
    "  >\n"+
    "  >     * 默认来说,被拷贝的切片会粘贴到目标切片的开头,当然也可以改变\n"+
    "  >\n"+
    "  >       ```go\n"+
    "  >       copy(slice2[x:x], slice)\n"+
    "  >       ```\n"+
    "  >\n"+
    "  >       * 代表从该区间内接受拷贝\n"+
    
    "  \n"+
    "  \n"+
    "  > 浅拷贝复制的是数据的地址\n"+
    "  >\n"+
    "  > 引用类型的数据,默认都是浅拷贝:slice,map 因此可能导致多个变量引用着同一块内存\n"
  },{
    name: 'Map数据类型',
    id: 'MapType',
    markdown: "###### Map(集合)\n"+

    "* 什么是\n"+
    
    "  > map是go语言中的内置类型\n"+
    "  >\n"+
    "  > * 以键值对方式来存储数据\n"+
    "  >   * 键值对是无序的,每次打印出来的map都不一样\n"+
    "  >   * 根据键名来对map进行操作\n"+
    "  >   * len函数同样可以作用于map,返回的是map拥有的key的数量\n"+
    "  >   * map的key是所有的可以比较的类型\n"+
    "  >     * 布尔\n"+
    "  >     * 整形\n"+
    "  >     * 浮点型\n"+
    "  >     * 复杂型\n"+
    "  >     * 字符串型\n"+
    "  >     * 键\n"+
    "  >     * ...\n"+
    "  >\n"+
    "  > * 将一个值和一个键名关联起来,可以使用键名来检索值\n"+
    
    "* 如何定义map\n"+
    
    "  > 直接使用var来定义map\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var map1 map[int]string  // 只是声明但是没有初始化,是一个nil的map\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * map关键字表示声明的变量是map类型\n"+
    "  > * int关键字表示,键的类型是int\n"+
    "  > * string表示,值的类型是string\n"+
    "  > * 这种方式声明的map\n"+
    "  >   * 定义时候因为没有去出初始化,因此是一个`nil`map,无法直接使用,也无法存储数值\n"+
    "  >   * 通过这种方式声明的map,要`make(map[type]type)`才可以使用\n"+
    
    "  > 使用make函数来定义map\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var map1 = make(map[int]string)  \n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 一样,make的map表示我们声明的是一个map类型\n"+
    "  > * int表示键名是int类型\n"+
    "  > * string表示键值是string\n"+
    
    "  > 在声明的时候直接进行赋值\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var map1 = map[string]int{'chinese':99,'math':98,'english':'97'}\n"+
    "  > fmt.Println(map1)\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 每组键之间使用逗号分隔\n"+
    "  > * 键名和键值之间使用冒号分隔\n"+
    "  > * 键名和键值要符合声明定义时候的规定\n"+
    
    "  \n"+
    
    "###### map的使用\n"+
    
    "* 使用\n"+
    
    "  \n"+
    
    "  > 赋值\n"+
    "  >\n"+
    "  > * 首先是一个不为nil的map才可以进行使用,否则需要使用make函数\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var map1 = make(map[string]int)  //首先得是一个不为nil的map\n"+
    "  >   map1['语文']=99\n"+
    "  >   fmt.Println(map1)  // [语文:99]\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 直接使用 map名[键名] = 值 的方式进行赋值\n"+
    "  >   * 但是要注意,键和值都要符合我们在创建map时设定的类型\n"+
    "  >\n"+
    "  > 访问\n"+
    "  >\n"+
    "  > * 通过键名来获取键值\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var map1 = make(map[string]int)  //首先得是一个不为nil的map\n"+
    "  >   map1['语文']=99\n"+
    "  >   fmt.Println(map1['语文'])  // 99\n"+
    "  >   ```\n"+
    "  >\n"+
    "  > * 但是如果访问的是一个不存在的键名,不会报错,返回的值就是\n"+
    "  >\n"+
    "  >   * 该值类型所对应的空值\n"+
    "  >\n"+
    "  >     * int     0\n"+
    "  >     * string  ''\n"+
    "  >     * bool    false\n"+
    "  >\n"+
    "  >     ...\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var map1 = make(map[string]int)  //首先得是一个不为nil的map\n"+
    "  >   map1['语文']=99\n"+
    "  >   fmt.Println(map1['数学'])  // 0\n"+
    "  >   ```\n"+
    
    "  > 我们知道当我们访问一个不存在的key时,会返回一个其对应值类型的空值\n"+
    "  >\n"+
    "  > * 比如字符串会返回一个 ''\n"+
    "  > * 数字会返回一个0\n"+
    "  > * 但是...\n"+
    "  >   * 如果我们恰好存储的数据就是 0 或者 '' ...等\n"+
    "  >   * 又该如何判断呢\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var map1 = map[string]int{'语文': 99, '数学': 99}\n"+
    "  > if _, ok := map1['英语']; ok == true {\n"+
    "  > 	fmt.Println('key值存在')\n"+
    "  > } else {\n"+
    "  > 	fmt.Println('key值不存在')\n"+
    "  > }\n"+
    "  > ```\n"+
    
    "  > 修改值\n"+
    "  >\n"+
    "  > * 其实方式和添加key的时候一样\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var map1 = make(map[string]int)\n"+
    "  >   // 判断不存在,会创建chinese这个key名,并且添加值为99\n"+
    "  >   map1['chinese'] = 99\n"+
    "  >   // 判断已经存在这个key名,会覆盖原值\n"+
    "  >   map1['chinese'] = 20\n"+
    "  >   ```\n"+
    
    "  > 删除\n"+
    "  >\n"+
    "  > * 直接使用内置方法 delete\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var map1 = make(map[string]int)\n"+
    "  >   // 判断不存在,会创建chinese这个key名,并且添加值为99\n"+
    "  >   map1['chinese'] = 99\n"+
    "  >   delete(map1,'chinese')\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 第一个参数是要被删除的map名\n"+
    "  >   * 第二个参数是要被删除的key名\n"+
    "  >\n"+
    "  > * 如果删除不存在的key值,会静默失效\n"+
    
    "###### map的遍历\n"+
    
    "* for range 遍历\n"+
    
    "  > * 我们知道,对于数组和切片,使用for range方法获取到的是 i(索引号) , item(值)\n"+
    "  >\n"+
    "  > * 而因为map本身是无序的,并无索引号的概念 \n"+
    "  >\n"+
    "  >   * for range 获取到的是 key 和 value\n"+
    "  >     * 也就是键名和键值\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var map1 = map[string]int{'语文':99,'数学':90,'英语':100}\n"+
    "  >   for key,value = range map1 {\n"+
    "  >     fmt.Println(map[key])\n"+
    "  >     fmt.Println(value)\n"+
    "  >     fmt.Println(map[key]==value)\n"+
    "  >   }\n"+
    "  >     \n"+
    "  >   //99\n"+
    "  >   //99\n"+
    "  >   //true\n"+
    "  >   //90\n"+
    "  >   //90\n"+
    "  >   //true\n"+
    "  >   //100\n"+
    "  >   //100\n"+
    "  >   //true\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 可知\n"+
    "  >\n"+
    "  >     * 其实for range每次循环,得到的value 就是 map[key]\n"+
    "  >\n"+
    "  >   * 多次运行后发现,打印出的内容是无序的,因为map本身并无索引和顺序的概念\n"+
    "  >\n"+
    "  >     * 如果key名是一些有规律的数字,那么可以使用一些原生或者手写的排序方式有顺序地打印出这些值\n"+
    "  >\n"+
    "  >       ```go\n"+
    "  >       var map1 = map[int]string{1: '孙悟空', 2: '猪八戒', 3: '唐僧', 4: '比克大魔王'}\n"+
    "  >       for i := 1; i <= 4; i++ {\n"+
    "  >       	fmt.Printf('%d:%s\n', i, map1[i])\n"+
    "  >       }\n"+
    "  >       ```\n"+
    "  >\n"+
    "  >       * 总之办法很多\n"+
    
    
    "###### map结合slice来使用\n"+
    
    "* 例子\n"+
    
    "  > 1.创建map用于储存人的信息 name,age,sex,adress\n"+
    "  >\n"+
    "  > 2.每个map储存一个人的信息\n"+
    "  >\n"+
    "  > 3.将这些信息存到slice中\n"+
    "  >\n"+
    "  > 4.打印遍历输出\n"+
    "  >\n"+
    "  > * 如果使用`fmt.Printf()`来打印`map`的话,使用`%T`占位符\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > map1 := make(map[string]string)\n"+
    "  > 	map1['name'] = 'TOM'\n"+
    "  > 	map1['gender'] = 'male'\n"+
    "  > 	map1['address'] = 'xxx'\n"+
    "  > \n"+
    "  > 	map2 := make(map[string]string)\n"+
    "  > 	map2['name'] = 'jenny'\n"+
    "  > 	map2['gender'] = 'female'\n"+
    "  > 	map2['address'] = 'xxx'\n"+
    "  > \n"+
    "  > 	map3 := map[string]string{'name': 'lalla', 'age': '12', 'adress': 'bj'}\n"+
    "  > 	// 如何用一个切片来存储map\n"+
    "  > 	slice := make([]map[string]string, 0, 3)\n"+
    "  > 	slice = append(slice, map1)\n"+
    "  > 	slice = append(slice, map2)\n"+
    "  > 	slice = append(slice, map3)\n"+
    "  > 	for _, item := range slice {\n"+
    "  > 		fmt.Println(item)\n"+
    "  > 	}\n"+
    "  > ```\n"+
    
    "###### map的类型\n"+
    
    "* map是引用类型\n"+
    
    "  >```go\n"+
    "  >map1 := map[string]string{'age': '12', 'gender': '0'}\n"+
    "  >	// map2表示这个map的key是字符串,值还是一个map\n"+
    "  >	map2 := make(map[string]map[string]string)\n"+
    "  >	map2['prop'] = map1\n"+
    "  >	map2['info'] = map[string]string{'地址': '万寿路', '爱好': '唱跳rap'}\n"+
    "  >	// fmt.Printf('%T', map2)\n"+
    "  >	fmt.Println(map2)\n"+
    "  >```\n"+
    "  >\n"+
    "  >* 同样map是引用类型\n"+
    "  >  * 上述为例,加入map1发生了变化\n"+
    "  >  * 那么以map1的为键值的map2一定也会相应地变化\n"+
    "  >  * ...\n"    
  },{
    name: '字符串高阶',
    id: 'stringCore',
    markdown: "###### 字符串的使用\n"+

    "* 定义\n"+
    
    "  >* 字符串包裹在`''`内,如果是单个字节,可以使用`''`\n"+
    "  >\n"+
    "  >* 也可以使用` `` ` 反引号,反引号的内容都不会被转义\n"+
    "  >\n"+
    "  >  ```go\n"+
    "  >  var string1 = 'hello'\n"+
    "  >  var string2 = 'a'\n"+
    "  >  var string3 = '中国'\n"+
    "  >  ```\n"+
    "  >\n"+
    "  >* 字符串可以理解为是一些字节的集合\n"+
    "  >\n"+
    "  >  * 理解为一个字符的序列\n"+
    "  >  * 每个字符都有一个固定的位置(索引,下标等)\n"+
    "  >\n"+
    "  >  ```go\n"+
    "  >  fmt.Println(len(string1))\n"+
    "  >  fmt.Println(len(string2))\n"+
    "  >  fmt.Println(len(string3))\n"+
    "  >  ```\n"+
    "  >\n"+
    "  >  * 获取字符串的长度时,打印出的结果并不是字符的个数,而是字节的个数\n"+
    "  >    * 一个英文字母占1个字节\n"+
    "  >    * 中文会占3个字节\n"+
    "  >\n"+
    "  >  * 获取字符串的某个字节\n"+
    "  >\n"+
    "  >    ```go\n"+
    "  >    fmt.Println(string1[0]) // 获取字符串中的第一个字节\n"+
    "  >    ```\n"+
    "  >\n"+
    "  >    * 以这种方式进行获取,打印出的并不是字节本身,而是其所对应的编码\n"+
    "  >\n"+
    "  >    ```go\n"+
    "  >    fmt.Printf('%c',string[0])\n"+
    "  >    ```\n"+
    "  >\n"+
    "  >    * 可以使用`%c`获取其所对应的字节\n"+
    
    "* 遍历\n"+
    
    "  > * 使用for循环遍历字符串,如果只是数字或者字母的字符串是可以的\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   for i,string1:=0,'helloworld' ; i < len(string1) ; i++ {\n"+
    "  >     fmt.Printf('%c\n',string1[i])\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 同理,也可以使用`forRange`来遍历字符串\n"+
    "  >\n"+
    "  > * 但是如果遍历带有汉字或者其他种类的、占用字节不为1的字符,会出现一些问题\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   for i,string1:=0,'中国' ; i < len(string1) ; i++ {\n"+
    "  >     fmt.Printf('%c\n',string1[i])  // 结果是乱码\n"+
    "  >   }\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 因为像中文这样的复杂字符,每个汉字都要占用3个字节,而循环每次打印出的只是一个字节,因此不能简单使用这种方式来操作\n"+
    "  >\n"+
    "  > * 字符串是字节的集合\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   slice1 := []byte{65,66,67,68,69}\n"+
    "  >   var string1 = string(slice1)\n"+
    "  >   fmt.Println(string1)  // ABCDE\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 在这里,把切片的每一项所对应的字节获取出来,并且生成了一个字符串\n"+
    "  >\n"+
    "  >   ```go\n"+
    "  >   var string1 = 'abcde'\n"+
    "  >   var slice1 = []byte(string1)\n"+
    "  >   fmt.Println(slice1)\n"+
    "  >   ```\n"+
    "  >\n"+
    "  >   * 同理,可以根据一串字符生成每个字节所对应的编码的切片\n"+
    
    "* 修改\n"+
    
    "  > 字符串不可修改 !!!\n"+
    
    "###### strings 包\n"+
    
    "* 是什么\n"+
    
    "  > 专门为utf-8编码的字符串封装的一些基本的方法\n"+
    
    "* 常用的函数\n"+
    
    "  > `Contains`:判断字符串里是否包含`xxx`内容\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var s1 = 'hello world'\n"+
    "  > fmt.Println(strings.Contains(s1,'h'))\n"+
    "  > // 判断 s1字符串里面是否有 h 字符 , 返回结果是true或者false\n"+
    "  > ```\n"+
    "  >\n"+
    "  > `ContainsAny`:是否包含`xxx`中任意一个字符\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var s1 = 'hello world'\n"+
    "  > fmt.Println(strings.ContainsAny(s1,'ho'))  //true\n"+
    "  > // 判断 s1字符串里面是否有 h或者o 字符 , 返回结果是true或者false ,只要有一个就会返回true\n"+
    "  > ```\n"+
    
    "  > `Count`:判断出现次数\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var s1 = 'hello world'\n"+
    "  > fmt.Println(strings.Count(s1,'o')) \n"+
    "  > // 判断字符在字符串里出现的次数,返回的结果是一个int\n"+
    "  > ```\n"+
    
    "  > `HasPrefix`:判断字符串是否以`xxx`开头\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var  s1 = 'hello world'\n"+
    "  > fmt.Println(strings.HasPrefix('he'))  // true\n"+
    "  > ```\n"+
    "  >\n"+
    "  > `HasSuffix`:判断字符是否以`xxx`结尾\n"+
    
    "  > `Index`:获取字符在字符串首次出现的索引位置,如果不出现,返回-1\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var s1 = 'hello world'\n"+
    "  > fmt.Println(strings.Index(s1,'o'))\n"+
    "  > ```\n"+
    "  >\n"+
    "  > `Index`:参考`ContainsAny`\n"+
    "  >\n"+
    "  > `LastIndex`:返回的是最后一次出现的位置\n"+
    
    "  > `Join`:可以将字符类型的切片拼接为一个字符串\n"+
    "  >\n"+
    "  > * 第二个参数是以何为界进行拼接\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var slice1 = []string{'tom','is','winner'}\n"+
    "  > var s2 = strings.Join(slice1,'*')\n"+
    "  > ```\n"+
    
    "  > `Split`:可以把字符串打散成为字符切片\n"+
    "  >\n"+
    "  > * 同样第二个参数也是以何为界进行切割\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var string1 = '123,232,2323,232'\n"+
    "  > var slice1 = strings.Split(string1,',')\n"+
    "  > ```\n"+
    "  >\n"+
    "  > * 会把字符串打散成为 {123,232,2323,232}这样的切片\n"+
    
    "  > `Repeat`:可以让某段字符,重复拼接自己\n"+
    "  >\n"+
    "  > * 第二个参数是重复拼接几次\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var string1 = '1'\n"+
    "  > var string2 = strings.Repeat(string1,3) // 111\n"+
    "  > ```\n"+
    
    "  > `Replace`:可以替换字符串的内容\n"+
    "  >\n"+
    "  > * 第二个参数是要被替换的旧值\n"+
    "  > * 第三个参数是新值\n"+
    "  > * 最后一个参数是要替换几个,如果是-1,代表全部替换\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var string1 = 'hello world'\n"+
    "  > var string2 = strings.Replace(string1,'hello','hi',-1) \n"+
    "  > ```\n"+
    
    "  >`ToLower`:转小写,`ToUpper`转大写\n"+
    "  >\n"+
    "  >```go\n"+
    "  >var string1 = 'hello world'\n"+
    "  >var string2 = strings.ToLower(string1) \n"+
    "  >```\n"+
    
    "  > 字符串的截取 , 没有专门的函数,但是操作起来很简单,和切片的截取类似\n"+
    "  >\n"+
    "  > * `[开始:结束]`\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > var str = 'hello'\n"+
    "  > var str2 = str[2:]\n"+
    "  > ```\n"+
    
    "  \n"+
    
    "###### 字符串和基本类型的转换\n"+
    
    "* strconv 包\n"+
    
    "  \n"+
    
    "  >在go语言中,`+`并不能将字符串和类型不同的数据类型进行拼接生成新串\n"+
    "  >\n"+
    "  >```go\n"+
    "  >fmt.Println('aa'+100) // 这么写不行\n"+
    "  >```\n"+
    
    "  > 整形和字符串之间的转换\n"+
    "  >\n"+
    "  > `Atoi`:会将字符串类型的数据类型转为整形\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > i , err := strconv.Atoi('42')\n"+
    "  > ```\n"+
    "  >\n"+
    "  > `Itoa`:会将整形类型的数据类型转为字符串\n"+
    
    "  > 将字符串转为其他类型\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > value,err := strconv.ParseBool('true')\n"+
    "  > value,err := strconv.ParseFloat('3.14',64)\n"+
    "  > value,err := strconv.ParseInt('42',10,64)\n"+
    "  > value,err := strconv.ParseUint('42',10,64)\n"+
    "  > ```\n"+
    "  >\n"+
    "  > 将其他类型转为字符串\n"+
    "  >\n"+
    "  > ```go\n"+
    "  > value,err := strconv.FormatBool(true)\n"+
    "  > value,err := strconv.FormatFloat(3.14)\n"+
    "  > value,err := strconv.FormatInt(42,10,64)\n"+
    "  > ```\n"
  }
]






































