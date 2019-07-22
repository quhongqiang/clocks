
/**
 * [description]
 * 使用过create-react-app（以下简称cra）的朋友都知道，这是react官方的一款脚手架工具，
 * 使用过内部集成了使用react-app-rewired,使用此插件可以暴露出webpack
 * 但是！react-app-rewired2.x以后，不再支持injectBabelPlugin的方式，需要安装customize-cra。
 * npm install customize-cra --save-dev 或者  yarn add customize-cra --dev
 * 所以新建config-overrides.js可以读取到该文件
 */
const { override, fixBabelImports,addPostcssPlugins } = require('customize-cra');

/**
 * [关闭打包后的sourcemap description]
 * [打包后我们会发现静态文件夹中会有很多的css和js的map文件，关闭sourcemap]
 */
process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
                               rootValue: 16,
                               propList: ['*']
                               // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
                               // propWhiteList: []
                            }),])

    /**
     * [安装less]
     * npm i less
     * npm i -D less-loader
     */
    // addLessLoader({
    //   javascriptEnabled: true,
    //   modifyVars: { '@primary-color': '#1DA57A' },
    // }),

    /**
     * [remUnit description]
     * npm install lib-flexible --save
     * flexible会为页面根据屏幕自动添加<meta name='viewport' >标签，
     * 动态控制initial-scale，maximum-scale，minimum-scale等属性的值。
     * 安装完成之后再入口index.js页面 import lib-flexible
     * 注意事项（important）: 由于flexible会动态给页面header中添加<meta name='viewport' >标签，
     * 所以务必请把目录 public/index.html 中的这个标签删除！！！
     */

     /**
      * [postcss-px2rem]
      * npm install postcss-px2rem --save
      * postcss-px2rem会将px转换为rem，rem单位用于适配不同宽度的屏幕，
      * 根据<html>标签的font-size值来计算出结果，1rem=html标签的font-size值。
      */

    // addPostcssPlugins([
    //   require("postcss-px2rem")({ remUnit: 37.5 })
    // ])

    /**
     * [description]
     * 温馨提示： remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
     * 假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
     * 那为什么你在这里写成了37.5呢？？？那我们后面专门来讲！
     * 之所以设为37.5，是为了引用像mint-ui这样的第三方UI框架，因为第三方框架没有兼容px2rem ，
     * 将remUnit的值设置为设计图宽度（这里为750px）75的一半，即可以1:1还原mint-ui的组件，否则会样式会有变化，例如按钮会变小。
     * 既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。
     */
 );

