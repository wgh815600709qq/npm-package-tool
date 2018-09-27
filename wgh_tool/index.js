; (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      global.moduleName = factory()
}(this, (function () {
  var toolMap = {

    _getVersion() {
      return 'v1.0.0'
    },

 
    /*
     * 判断对象
     */
    _isObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]'
    },

    /**
       * [parseTime description]  时间格式化函数
       * @param  {[type]} time    [时间对象]
       * @param  {[type]} cFormat [格式]
       * @return {[type]} timeStr [格式化后时间]
       */
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
    /**
       * [formatTime description] 时间展示函数
       * @param  {[type]} time   [时间戳]
       * @param  {[type]} option [参数]
       * @return {[type]}        [格式化后时间]
       */
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
    /** 操作类 **/
    /*
     *  深拷贝
     */
    _deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj))
    },

    /**
     * [throttle description] 函数节流
     * @param  {[type]} method  [description] 要执行节流的函数
     * @param  {[type]} time    [description] 节流的时间(单位毫秒)
     * @param  {[type]} context [description] 执行域
     * @return {[type]}         [description]
     */
    _throttle(method, time, context) {
      clearTimeout(method.tId)
      method.tId = setTimeout(function () {
        method.call(context)
      }, time)
    },

  };
  return toolMap
})))
