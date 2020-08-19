import cloneDeep from 'clone-deep'
import empty from 'is-empty'

export default function multiSearch(multiObj, data) {
  if (!empty(multiObj)) {
    let newData = cloneDeep(data);
    let queryFilter = function (prop, key, arr) {
      // none query string
      // 修复key为0搜索bug
      if (!key && key !== 0) {
        return arr
      }
      // filtering
      arr = arr.filter((item) => {
        // 跳过null undefined
        if (item[prop] === null) {
          return false
        }
        if (Array.isArray(key) && key.length > 1) {
          if (key.indexOf(item[prop]) !== -1) {
            return true
          }
        } else {
          if (item[prop].toString().toLowerCase().indexOf((key + '').toLowerCase()) !== -1) {
            return true
          }
        }
      })
      return arr
    }
    // 时间段过滤函数
    let timeSegmentQueryFilter = function (prop, key, arr) {
      // none query string
      if (!key) {
        return arr
      }
      arr = arr.filter((item) => {
        if ((!key.value[0] || key.value[0] && Date.parse(key.value[0]) <= Date.parse(item[prop])) && (!key.value[1] || key.value[1] && Date.parse(key.value[1]) >= Date.parse(item[prop]))) {
          return true
        }
      })
      return arr
    }
    for (let key in multiObj) {
      if (multiObj[key] !== '' && !multiObj[key].type) {
        newData = queryFilter(key, multiObj[key], newData)
      } else if (multiObj[key].type && multiObj[key].type === 'datetimerange' && multiObj[key].value && multiObj[key].value.length && multiObj[key].value.length === 2) {
        newData = timeSegmentQueryFilter(key, multiObj[key], newData)
      }
    }
    return newData;
  }
};
