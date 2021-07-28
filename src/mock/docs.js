export const docs = {
  "Promise": 
  "class Promise {\n"+
  "  constructor (fn) {\n"+
  "    const resolve = (res) => {\n"+
  "      this.thenFn(res)\n"+
  "    }\n"+
  "    this.execFn = _ => fn(resolve)\n"+
  "  }\n"+
  "  then(fn){\n"+
  "    this.thenFn = fn\n"+
  "    this.execFn()\n"+
  "  }\n"+
  "}\n"+

  "new Promise(resolve => {\n"+
  "  console.log(1)\n"+
  "  setTimeout(() => {\n"+
  "    resolve(2)\n"+
  "  },3000)\n"+
  "}).then(res => {\n"+
  "  return new Promise((resolve) => {\n"+
  "    console.log(res)\n"+
  "    setTimeout(() => {\n"+
  "      resolve(3)\n"+
  "    },3000)\n"+
  "  }).then(res => {\n"+
  "    console.log(res)\n"+
  "  })\n"+
  "})\n"
}