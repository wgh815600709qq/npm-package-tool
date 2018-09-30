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

## api
函数名| 参数 | 参数说明 | 函数说明
_isObject| param | 任何参数 | 判断是否为对象


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
