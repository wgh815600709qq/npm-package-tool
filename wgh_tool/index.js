;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : global.moduleName = factory()
}
  (this,
  (function () {
    var wgh_tool = {
      /*********************** 判断类 *******************************/
      _isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]'
      },

      _isMobile(str) {
        return /^1[34578]\d{9}$/.test(str)
      },

      _isEqual(a, b) {
        if (a === b) { // 全等判断0 与 -0
          return a !== 0 || 1 / a === 1 / b
        }
        // `null` or `undefined` only equal to itself (strict comparison).
        if (a == null || b == null) return false;

        // `NaN`s are equivalent, but non-reflexive.
        if (a !== a) return b !== b;

        // 判断类型
        var _typeOfA = Object.prototype.toString.call(a)
        var _typeOfB = Object.prototype.toString.call(b)
        if (_typeOfA != _typeOfB) {
          return false
        } else { // TODO 可能存在性能问题
          return JSON.stringify(a) === JSON.stringify(b)
        }
      },

      // 类数组判断
      _isArrayLike(o) {
        if (o &&                                // o is not null, undefined, etc.        
          typeof o === 'object' &&            // o is an object        
          isFinite(o.length) &&               // o.length is a finite number      
          o.length >= 0 &&                    // o.length is non-negative    
          o.length === Math.floor(o.length) &&  // o.length is an integer       
          o.length < 4294967296)              // o.length < 2^32        
          return true;                        // Then o is array-like   

        else return false;                       // Otherwise it is not
      },

      /*********************** 格式类 *******************************/
      _parseTime(time, cFormat) {
        if (arguments.length === 0) {
          return null
        }
        const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
        var date
        if (typeof time === 'object') {
          date = time
        } else {
          if (new Date(time) + '' === 'Invalid Date') {
            date = new Date(time.substr(0, 10) + 'T' + time.substr(11, 8)) // 兼容safari写法
          } else {
            date = new Date(time)
          }
        }
        const formatObj = {
          y: date.getFullYear(),
          m: date.getMonth() + 1,
          d: date.getDate(),
          h: date.getHours(),
          i: date.getMinutes(),
          s: date.getSeconds(),
          a: date.getDay()
        }
        const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
          let value = formatObj[key]
          if (key === 'a') return ['日', '一', '二', '三', '四', '五', '六'][value]
          if (result.length > 0 && value < 10) {
            value = '0' + value
          }
          return value || 0
        })
        return timeStr
      },

      _formatTime(time, option) {
        const d = new Date(time)
        const now = Date.now()
        const diff = (now - d) / 1000
        if (diff < 30) {
          return '刚刚'
        } else if (diff < 3600) { // less 1 hour
          return Math.ceil(diff / 60) + '分钟前'
        } else if (diff < 3600 * 24) {
          return Math.ceil(diff / 3600) + '小时前'
        } else if (diff < 3600 * 24 * 2) {
          return '1天前'
        }
        if (option) {
          return this.parseTime(time, option)
        } else {
          return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
        }
      },

      _formatMoney(str) { // 标准返回2位小数, 带逗号间隔
        if (Number(str).toString() == 'NaN') {
          throw new Error('不合适数字')
        }
        /**
         * 
         *  前瞻：
            exp1(?=exp2) 查找exp2前面的exp1
            后顾：
            (?<=exp2)exp1 查找exp2后面的exp1
            负前瞻：
            exp1(?!exp2) 查找后面不是exp2的exp1
            负后顾：
            (?<!=exp2)exp1 查找前面不是exp2的exp1
            ()表示捕获分组，()会把每个分组里的匹配的值保存起来，使用$n(n是一个数字，表示第n个捕获组的内容)
            (?:)表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来
         */
        /**
         * part1 = (?:\d{3}) 匹配3个连续整数，非捕获
         * part2 = (?!\d)查找后面不是整数
         * part3 = \B(?= )查找符合后面条件的非单词边界
         * 
         * 整合的意思是， 找到符合“后面不是整数,连续3个整数”条件的前面那个非单词边界
         */
        str = Number(str).toFixed(2)
        return str.replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
      },
      /*********************** 基础类 *******************************/
      _getVersion() {
        return 'v1.0.2'
      },

      _throttle(method, time, context) {
        clearTimeout(method.tId)
        method.tId = setTimeout(function () {
          method.call(context)
        }, time)
      },

      _max(arguments) {
        return Math.max.apply(this, arguments)
      },

      _min(arguments) {
        return Math.min.apply(this, arguments)
      },

      _getStrictType(obj) {
        return Object.prototype.toString.call(obj)
      },
      /*********************** 目的类 *******************************/
      _deepCopy(obj) {
        return JSON.parse(JSON.stringify(obj))
      },

      _toArray(arguments) {
        return [].slice.call(arguments)
      }
    };
    return wgh_tool
  })
  )
);
