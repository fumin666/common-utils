/**
 * Created by alex on 2017/5/20.
 */

/* 对象交集 */
export function intersectObj(sourceObj, targetObj, tostring) {
  var flag = tostring || false
  var res = {};
  for (let key in targetObj) {
    if (sourceObj.hasOwnProperty(key) && (targetObj.hasOwnProperty(key))) {
      res[key] = targetObj[key]
      if (flag && res[key] !== null && res[key] !== undefined && typeof (res[key]) === 'number') {
        res[key] = res[key].toString()
      }
    }
  }
  return res;
}
/* 批量操作时候获取UUID */
export function batchUuid(uuid, arr) {
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      if (key === uuid) {
        res.push(arr[i][key])
      }
    }
  }
  return res;
}
/* 删除数组中指定的值 */
export function removeByValue(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
/**
 *
 * @param arr 原数组
 * @param arrkey 原数组中的key
 * @param reskey 输出结果的key
 * @returns {Array}
 */
export function batchUuids(arr, arrkey, reskey) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][arrkey]) {
      res.push({});
      res[i][reskey] = arr[i][arrkey];
    }
  }
  return res;
}
/**
 * 告警新增-删除客户端引用
 * @param arr 数据列表的数组
 * @param uuidarr 要删除的uuid数组
 * @param uuid 匹配uuid删除
 */
export function delArray(arr, uuidarr, uuid) {
  if (arr.length > 0 && uuidarr.length > 0 && uuid) {
    for (let i = 0; i < uuidarr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j][uuid] === uuidarr[i][uuid]) {
          arr.splice(j, 1);
          break;
        }
      }
    }
  }
}

export function delDiffArray(arr, delarr) {
  for (let i = 0; i < delarr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (delarr[i].tmp && arr[j].tmp && delarr[i].userRealName === arr[j].userRealName) {
        arr.splice(j, 1);
        break;
      } else {
        if (delarr[i].uuid && arr[j].uuid && delarr[i].uuid === arr[j].uuid) {
          arr.splice(j, 1);
          break;
        }
      }
    }
  }
}

/**
 * 事件中心-规则部分-数字转为对应的label
 * @param arr 存有key和label的数组
 * @param string  key的字符串
 * @param key key名
 * @returns {Array}
 */
export function numTransToArr(arr, string, key) {
  if (!key) {
    key = 'id';
  }
  let res = [];
  let sArr = string.split(',');
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Number(sArr[i]) === arr[j][key]) {
        res.push(arr[j]);
        break;
      }
    }
  }
  return res;
}

export function numTransToString(arr, num, key1, key2) {
  if (num || num === 0) {
    num = Number(num);
    if (!key1) {
      key1 = 'id';
    }
    if (!key2) {
      key2 = 'name';
    }
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i][key1] || arr[i][key1] === 0) && arr[i][key1] === num) {
        if (arr[i][key2] || arr[i][key2] === 0) {
          return ' ' + arr[i][key2] + ' ';
        } else {
          return '';
        }
      }
    }
  } else {
    return '';
  }
}

/**
 * 把java接口返回的Map转化为数组
 * @param Map {4: '重大发布', 5: '常规发布'}
 * @returns Array [{label: '重大发布', value: 4}, {label: '常规发布', value: 5}]
 */
export function map2Arr(map) {
  let list = [];
  for (let key in map) {
    list.push({label: map[key], value: key});
  }
  return list;
}

// 权限判断
export function getPrivilege(arr, privilegeList) {
  if (!(arr instanceof Array) || !(privilegeList instanceof Array)) return false;
  var aStr = privilegeList.toString();
  for (var i = 0, len = arr.length; i < len; i++) {
    if (aStr.indexOf(arr[i]) === -1) return false;
  }
  return true;
}

// 深拷贝
export function deepClone(obj) {
    if (!obj && typeof obj !== 'object') {
        return;
    }
    var newObj = obj.constructor === Array ? [] : {};
    for (var key in obj) {
        if (obj[key]) {
            if (obj[key] && typeof obj[key] === 'object') {
                newObj[key] = obj[key].constructor === Array ? [] : {};
                // 递归
                newObj[key] = deepClone(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

/*
 * JSON数组去重
 * @param: [array] json Array
 * @param: [string] 唯一的key名，根据此键名进行去重
 */
export function uniqueArray(array, key) {
    var result = [array[0]];
    for (var i = 1; i < array.length; i++) {
        var item = array[i];
        var repeat = false;
        for (var j = 0; j < result.length; j++) {
            if (item[key] === result[j][key]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            result.push(item);
        }
    }
    return result;
}

/*
 * 对象倒序排列
 * @param: [array] obj
 * @param: 思路：先转成了数组，对数组进行reverse排序操作，再赋值给对象返回
 */
export function reverseObj(obj) {
  var arr = [];
  for (var i in obj) {
    arr.push([obj[i], i]);
  };
  arr.reverse();
  var len = arr.length;
  var newObj = {};
  for (var m = 0; m < len; m++) {
    newObj[arr[m][1]] = arr[m][0];
  }
  return newObj;
}

/*
 * 通过字符串路径获取数组或者对象中嵌套的值
 * @param: [array] obj
 */
export function getPathVal(obj, path) {
  let SEP = /^([^\.\[\]]+)|(?:\[)([^\.\[\]]+)(?:\])|(?:\.)([^\.\[\]]+)/g;
  let tmp;
  // eslint-disable-next-line no-cond-assign
  while (tmp = SEP.exec(path)) {
    for (var i = 1; i < tmp.length; ++i) {
      var prop = tmp[i];
      if (prop != null) {
        if (prop in obj) {
            obj = obj[prop];
            break;
        } else {
          return null;
        }
      }
    }
  }
  return obj;
}

/**
 * 树转数组扁平化结构
 * 深度优先遍历  递归
 */
export function deepTraversal(data) {
  const result = [];
  data.forEach(item => {
    const loop = data => {
      result.push({
        controlAdderss: data.controlAdderss,
        checked: data.checked,
        itcompName: data.itcompName
      });
      let child = data.children
      if (child) {
        for (let i = 0; i < child.length; i++) {
          loop(child[i])
        }
      }
    }
    loop(item);
  })
  return result;
}

/* ES6数组对象去重 */
export function removeDuplicate (arr) {
  let temp = arr.map((item) => {
    return JSON.stringify(item);
  });
  temp = Array.from(new Set(temp));
  return temp.map((item) => {
    return JSON.parse(item);
  });
}
