// Docs: https://prettier.io/docs/en/options.html
module.exports = {
  useTabs: false,
  printWidth: 200, // 行宽
  tabWidth: 2, // 缩进字节数
  semi: true, // 句尾添加分号
  singleQuote: true, // 单引号
  jsxSingleQuote: true, // jsx 单引号
  quoteProps: 'consistent', //对象字面量中的属性名是否强制双引号
  arrowParens: 'avoid', //箭头函数一个参数省略括号
  vueIndentScriptAndStyle: false, //缩进 Vue 的 <script> 和 <style> 标签
};
