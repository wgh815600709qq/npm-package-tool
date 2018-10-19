# npm-package-tool
一个常用工具函数整理后的npm工具包


## 当前版本v1.0.2


## 快速使用
```
    npm install wgh_tool
```

## 使用示例
```
    const $ = require('wgh_tool')
    $._isObject(1) // false
```

## Api文档

```
* 判断类
```

|函数名| 参数 | 参数说明 | 函数说明|示例|
| --------   | -----:   | :----: |:----: |:----: |
|_isObject | （param） | 任何参数 | 判断是否为对象|$._isObject(1)|
|_isMobile | （param） | 任何参数 | 判断是否为合法手机号码|$._isMobile('13800138000')|
|_isEqual  | （a, b） | 两个要比较的参数|判断两个参数是否严格相等|$_equal({a:1}, {a:1})|
|_isArrayLike| (object)|任何参数|传入对象是否为类数组|$_isArrayLike([1])|

```
* 格式类
```

|函数名| 参数 | 参数说明 | 函数说明| 示例|
| --------   | -----:   | :----: |:----: |:----: |
|_parseTime | （time, formatStr） | time 时间对象， formatStr为格式化规则| 将时间格式化为指定格式表达|$._parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s} 星期{a}')|
|_formatMoney| (str) | 合法字符串、数字|变成合法金钱,如123,456.00|$_.formatMoney('123')|

```
* 基础类
```

|函数名| 参数 | 参数说明 | 函数说明| 示例|
| --------   | -----:   | :----: |:----: |:----: |
|_getVersion | （） | | 获取库版本|$._getVersion()|
|_throttle| (method, time, context)|method调用的方法;time节流时间;context上下文|函数节流|$_throttle(function() {}, 2000, this)|
|_max|(array)|比较的数组| 子项为数字的数组求最大值|$._max([1,2])|
|_min|(array)|比较的数组| 子项为数字的数组求最小值|$._min([1,2])|
|_deepCopy| (obj)| 任意参数| 深度拷贝, 避免内存引用问题|$.deepCopy({a:1})|


```
* 目的类
```
|函数名| 参数 | 参数说明 | 函数说明| 示例|
| --------   | -----:   | :----: |:----: |:----: |
|_deepCopy | （obj） | obj为要深度拷贝的对象| 对象深拷贝|$._deepCopy({a:1})|
|_toArray| (arguments)| 类数组、数组| 转变成数组|$_toArray({a:1,b:2,length:2})|




##  包内一些扩展功能
1、集成压缩
``` 
    npm run build
```
2、集成全部函数单元测试、
```  
   npm run test-all    
```
    
3、部分函数单元测试
    
 ```
    1、将需要测试的函数名写入unit-testing/test-task.js数组内
    2、npm run test-task
```
