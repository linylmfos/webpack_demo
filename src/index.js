/* 
    index.js: webpack入口起点文件

    1. 运行指令：
      开发环境： webpack  ./src/index.js -o ./build/built.js --mode=development
      webpack 会以 ./src/index.js 为入口文件开始打包， 打包后输出到 ./built/built.js
      整体打包环境， 开发环境
      生成环境
*/

function add(x,y) {
    return x + y;
}

console.log(add(1, 2));