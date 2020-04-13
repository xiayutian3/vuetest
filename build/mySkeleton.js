// 对new vue 的进行骨架屏的一个操作（自定义）在html-webpack-plugin之后经行
let MySkeleton = function (options){
  this.test = options.test
}
MySkeleton.prototype.apply = function (compiler){
  // console.log('我的插件被执行了')
  // console.log(this.test)
  // console.log(compiler)
  //先指定自己怎么编译，根据别人的编译结果操作
  compiler.plugin('compilation',compilation => {
    
    //可以直接操作自己的文件或者使用传进来options


    //别人编译的入口
    // compilation.plugin('html-webpack-plugin-before-html-processing',(htmlDtata,callback)=>{
    //   //html-webpack-plugin中间插入行为的地方
    //   htmlDtata.html = htmlDtata.html.replace(`<div id="app"></div>`,`<div id="app">
    //   <div style="height:500px;background:red;">自定义骨架屏</div>
    // </div>`)



// (多个骨架屏的配置)
    //别人编译的入口
    compilation.plugin('html-webpack-plugin-before-html-processing',(htmlDtata,callback)=>{
      //html-webpack-plugin中间插入行为的地方
      htmlDtata.html = htmlDtata.html.replace(`<div id="app"></div>`,`<div id="app">
      <div style="height:500px;background:red;display:none;" id="usera">自定义骨架屏A</div>
      <div style="height:500px;background:yellow;display:none;" id="userb">自定义骨架屏B</div>
    </div>
    <script>
    // window.onload = function (){
      //hash模式或者history模式
      var hashPath = location.hash;  // #/usera  || #/userb
      var hPath = location.pathname;  // /usera  || /userb
      if(hashPath === '#/usera' || hPath === '/usera'){
        document.getElementById('usera').style.display = 'block'
      }else if(hashPath === '#/userb' || hPath === '/userb'){
        document.getElementById('userb').style.display = 'block'
      }
    // }
    </script>

    `)






    //更改了其中的html，未来生成的html就是以上的内容
    callback(null,htmlDtata)
    })
  })

}
//导出插件
module.exports = MySkeleton 