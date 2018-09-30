# npm-package-tool
一个常用工具函数整理后的npm工具包


## 当前版本v1.0.1


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

### 判断类
|函数名| 参数 | 参数说明 | 函数说明|示例|
| --------   | -----:   | :----: |:----: |:----: |
|_isObject | （param） | 任何参数 | 判断是否为对象|$._isObject(1)|
|_isMobile | （param） | 任何参数 | 判断是否为合法手机号码|$._isMobile('13800138000')|


### 格式类
|函数名| 参数 | 参数说明 | 函数说明| 示例|
| --------   | -----:   | :----: |:----: |:----: |
|_formateTime | （time, formateStr） | time 时间对象， formateStr为格式化规则| 将时间格式化为指定格式表达|$._formateTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s} 星期{a}')|

### 基础类
|函数名| 参数 | 参数说明 | 函数说明| 示例|
| --------   | -----:   | :----: |:----: |:----: |
|_getVersion | （） | | 获取库版本|$._getVersion()|

### 目的类
|函数名| 参数 | 参数说明 | 函数说明| 示例|
| --------   | -----:   | :----: |:----: |:----: |
|_deepCopy | （obj） | obj为要深度拷贝的对象| 对象深拷贝|$._deepCopy({a:1})|



##  一些扩展功能
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
