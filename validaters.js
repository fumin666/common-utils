/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-11 09:10:13
 * @LastEditTime: 2019-11-26 13:22:35
 * @LastEditors: 高建鹏, songyf
 */
/**
 * Created by tang on 2017/5/11.
 */
import {ipv4Range, ipv6Range} from './ipRange.js'

function validatorNotNull(rule, value, callback) {
  if (value || value === 0) {
    if (typeof value === 'string' && !value.trim()) {
      callback(new Error('不能为空'));
    } else {
      callback();
    }
  } else {
    callback(new Error('不能为空'));
  }
};
function validatorSelectNotNull(rule, value, callback) {
  if (value && value.length) {
    callback();
  } else {
    callback(new Error('不能为空'));
  }
};
function validatorSelectNumNotNull(rule, value, callback) {
  if (value !== '') {
    callback();
  } else {
    callback(new Error('不能为空'));
  }
};
function validatorIP(rule, value, callback) {
  if (!value) {
    callback();
    return;
  };
  let regIpv4 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  var regIpv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  if (value.indexOf(',') !== -1) {
    let arr = value.split(',');
    for (let i = 0; i < arr.length; i++) {
      if (!regIpv4.test(arr[i]) && !regIpv6.test(arr[i])) {
        callback(new Error(`第${i + 1}个ip格式不正确`));
      }
    }
  } else {
    if (!regIpv4.test(value) && !regIpv6.test(value)) {
      callback(new Error('ip格式不正确'));
    }
  }
  callback();
};
function validatorIPV6(rule, value, callback) {
  if (!value) {
    callback();
    return;
  };
  if (value === '*') {
    callback();
    return;
  };
  var regIpv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  if (value.indexOf(',') !== -1) {
    let arr = value.split(',');
    for (let i = 0; i < arr.length; i++) {
      if (!regIpv6.test(arr[i])) {
        callback(new Error(`第${i + 1}个ip格式不正确`));
      }
    }
  } else if(value.indexOf('-') !== -1) {
    let arr = value.split('-');
    for (let i = 0; i < arr.length; i++) {
      if (!regIpv6.test(arr[i])) {
        callback(new Error(`第${i + 1}个ip格式不正确`));
      }
    }
  } else {
    if (!regIpv6.test(value)) {
      callback(new Error('ip格式不正确'));
    }
  }
  callback();
};
function validatorEdit(value) {
  if (!value) {
    return true;
  };
  let regIpv4 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  var regIpv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  if (value.indexOf(',') !== -1) {
    let arr = value.split(',');
    for (let i = 0; i < arr.length; i++) {
      if (!regIpv4.test(arr[i]) && !regIpv6.test(arr[i])) {
        return false
        // callback(new Error(`第${i + 1}个ip格式不正确`));
      } else {
        return true
      }
    }
  } else {
    if (!regIpv4.test(value) && !regIpv6.test(value)) {
      return false
    } else {
      return true
    }
  }
};
// 单个校验ipv4
function ValidatorIPv4(rule, value, callback) {
  if (!value) {
    callback();
    return;
  };
  let regIpv4 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  if (!regIpv4.test(value)) {
    callback(new Error('ipv4格式不正确'));
  }
  callback();
};
// 单个校验ipv6
function ValidatorIPv6(rule, value, callback) {
  if (!value) {
    callback();
    return;
  };
  var regIpv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  if (!regIpv6.test(value)) {
    callback(new Error('ipv6格式不正确'));
  }
  callback();
};
function oneValidatorIP(rule, value, callback) {
  if (!value) {
    callback();
    return;
  };
  let regIpv4 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  var regIpv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  if (value.indexOf(',') !== -1) {
    callback(new Error(`只能输入一个IP地址`));
  } else {
    if (!regIpv4.test(value) && !regIpv6.test(value)) {
      callback(new Error('ip格式不正确'));
    }
  }
  callback();
};

function isIpv4(value) {
  let flag = true;
  let reg = /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/;
  if (value.indexOf(',') !== -1) {
    let arr = value.split(',');
    for (let i = 0; i < arr.length; i++) {
      if (!reg.test(arr[i])) {
        flag = false;
      }
    }
  } else {
    if (!reg.test(value)) {
      flag = false;
    }
  }
  return flag;
}
function isIpv6(ip){
  var str = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^:((:[0-9a-fA-F]{1,4}){1,6}|:)$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,5}|:)$|^([0-9a-fA-F]{1,4}:){2}((:[0-9a-fA-F]{1,4}){1,4}|:)$|^([0-9a-fA-F]{1,4}:){3}((:[0-9a-fA-F]{1,4}){1,3}|:)$|^([0-9a-fA-F]{1,4}:){4}((:[0-9a-fA-F]{1,4}){1,2}|:)$|^([0-9a-fA-F]{1,4}:){5}:([0-9a-fA-F]{1,4})?$|^([0-9a-fA-F]{1,4}:){6}:$/;
  if( str.test(ip) ){
    return true;
  }else{
    return false;
  }
}
function isIp(value) {
  if (!value) return true;
  if (isIpv4(value) || isIpv6(value)) {
    return true;
  }
  return false;
}

function isMac(value) {
  if (!value) return true;
  let flag = true;
  let reg = /^[0-9a-fA-F]{2}((:[0-9a-fA-F]{2}){5}|(\-[0-9a-fA-F]{2}){5})$/;
  if (value.indexOf(',') !== -1) {
    let arr = value.split(',');
    for (let i = 0; i < arr.length; i++) {
      if (!reg.test(arr[i])) {
        flag = false;
      }
    }
  } else {
    if (!reg.test(value)) {
      flag = false;
    }
  }
  return flag;
}

function validatorIsNumber(rule, value, callback) {
  if (!value) {
    callback();
    return;
  }
  let reg = /^\d+$/;
  if (!reg.test(value)) {
    callback(new Error(`请输入整数`));
  }
  callback();
}

function validatorIntegerNum(rule, value, callback) {
  if (!value) {
    callback();
    return;
  }
  let reg = /^[1-9]\d*$/
  if (value) {
    if (!reg.test(value)) {
      callback(new Error('请输入正整数'))
    }
  }
  callback();
}

function isNum(value) {
  if (!value) return true;
  let reg = /^\d+$/;
  if (!reg.test(value)) {
    return false;
  }
  return true;
}

function validatorMaxNum(num) {
  return function (rule, value, callback) {
    if (!value) {
      callback();
      return;
    }
    if (value - 0 > num) {
      callback(new Error(`最大值为${num}`));
    } else {
      callback();
    }
  }
}

function validatorMinNum(num) {
  return function (rule, value, callback) {
    if (!value) {
      callback();
      return;
    }
    if (value - 0 < num) {
      callback(new Error(`最小值为${num}`));
    } else {
      callback();
    }
  }
}
function validatorLargerNowDate(rule, value, callback) {
    if (value && new Date(value) - new Date().getTime() < 0) {
      callback(new Error('请选择当前时间之后的日期时间'));
    } else {
      callback();
    }
}
function isOmaIpScope(rule, who, callback) {
  var scope = who.replace('/\s/g', '');
  var valid = who.replace('/\s/g', '');
  if (isOMAIp(scope)) {
    callback()
    return
  }
  var bIsExtString = false;
  var strWords = '';
  for (let i = 0; i < scope.length; i++) {
    if (scope.charAt(i) !== '*' && scope.charAt(i) !== '-' && scope.charAt(i) !== '[' && scope.charAt(i) !== ']' && scope.charAt(i) !== ',' && scope.charAt(i) !== '.' && isNaN(scope.charAt(i))) {
      callback(new Error('IPv4格式错误'))
    }
    switch (scope.charAt(i)) {
      case '[':
        if (bIsExtString) {
          return false
        }
        bIsExtString = true;
        break;
      case ']':
        bIsExtString = false;
        break;
      case '\r':
      case '\n':
      case ',':
        if (bIsExtString) break;
        strWords += ';';
        continue;
      default:
        break;
    }
    strWords += scope.charAt(i);
  }
  var ips = []
  var subIps = []
  ips = strWords.split(';')
  var isint = /^\d+$/;
  for (let i = 0; i < ips.length; i++) {
    if (ips[i] === '*') { continue }
    if (isOMAIp(ips[i])) { continue }
    if (ips[i].split('.').length !== 4) {
      callback(new Error('IPv4格式错误'))
    }
    subIps = ips[i].split('.');
    if (!isint.test(subIps[0])) {
      callback(new Error('IPv4格式错误'))
    }
    if (!isint.test(subIps[1])) {
      callback(new Error('IPv4格式错误'))
    }
    if (subIps[0] === 0 || subIps[0] > 255 || subIps[1] > 255) {
      callback(new Error('IPv4格式错误'))
    }
    for (let j = 2; j < subIps.length; j++) {
      if (subIps[j] === '*') { continue }
      if (isint.test(subIps[j]) && subIps[j] > 255) {
        callback(new Error('IPv4格式错误'))
      } else if (!isint.test(subIps[j])) {
        if (subIps[j].split('[').length !== 2 || subIps[j].split(']').length !== 2) {
          callback(new Error('IPv4格式错误'))
        }
        var tmp = subIps[j].split('[')[1].split(']')[0];
        for (let k = 0; k < tmp.split(',').length; k++) {
          var v1 = tmp.split(',')[k];
          if (isint.test(v1) && v1 > 255) {
            callback(new Error('IPv4格式错误'))
          } else if (!isint.test(v1)) {
            var v2 = v1.split('-')
            if (v2.length !== 2) {
              callback(new Error('IPv4格式错误'))
            }
            if (parseInt(v2[0]) >= parseInt(v2[1]) || v2[0] > 255 || v2[1] > 255) {
              callback(new Error('IPv4格式错误'))
            }
          }
        }
      }
    }
  }
  callback()
}
/**
 * ip 混合验证
 * author: songyf
 * ipv4 参照 isOmaIpScope方法
 * str value 传入需要验证的字段，可以为*，或单个IPV6地址，或多个IPV6地址，或单个IPV6段地址，或多个IPV6段地址，或IPV6地址和多个IPV6段地址
 * example 2018::,2019::6-2019::9,2200::3-2200::8,2020::5854:1
 */
function ipHybridRange(rule, value, callback) {
  if (value !== '') {
    let newValue = value.split(',')
    for(var i=0;i<newValue.length;i++){
      if(newValue[i].indexOf('::') !== -1) { // ipv6
        if (!ipv6Range(newValue[i])) {
          callback(new Error('ipv6格式不正确'));
        }
      
      } else {
        if (!ipv4Range(newValue[i])) {
          callback(new Error('ipv4格式不正确'));
        }
      }
    }
  }
  callback()
}
function isOMAIp(data) {
  if (/^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$/.test(data)) {
    return true
  } else {
    return false
  }
}

function validHasPort(rule, value, callback) {
  let reg = /(^[0-9]\d{0,3}$)|(^[1-5]\d{4}$)|(^6[0-4]\d{3}$)|(^65[0-4]\d{2}$)|(^655[0-2]\d$)|(^6553[0-5]$)/;
  if (!reg.test(value)) {
    callback(new Error(`请输入0-65535的整数`));
  }
  callback();
}

function validateSpace(rule, value, callback) { // 空格验证
  var space = /\s/;
  if (space.test(value)) {
    callback(new Error('不能含有空格'));
  } else {
    callback();
  }
}

function isPosInt(num) {
  let reg = new RegExp(/^[1-9][0-9]*$/);
  return reg.test(num);
}

/**
 *  方法属性以is开头，可供外部直接使用方法
 *  注意： Max、Min是检测字符串长度，MaxNum、MinNum是检测数值大小
 */
export default {
  NotNull: { required: true, validator: validatorNotNull, trigger: 'blur' },
  SelectValNotNull: { required: true, validator: validatorNotNull, trigger: 'change' },
  SelectArrNotNull: { required: true, validator: validatorSelectNotNull, trigger: 'change' },
  SelectNumNotNull: { required: true, validator: validatorSelectNumNotNull, trigger: 'change' },
  NotSpace: { validator: validateSpace, trigger: 'blur' },
  // NotNull: { required: true, message: '不能为空', trigger: 'blur' },
  IP: { validator: validatorIP, trigger: 'blur' },
  IPv4: { validator: ValidatorIPv4, trigger: 'blur' },
  IPv6: { validator: ValidatorIPv6, trigger: 'blur' },
  omaIPV6: { validator: validatorIPV6, trigger: 'blur' },
  oneIP: { validator: oneValidatorIP, trigger: 'blur' },
  Mac: {pattern: /^[0-9a-fA-F]{2}((:[0-9a-fA-F]{2}){5}|(\-[0-9a-fA-F]{2}){5})$/, message: 'mac地址格式不对', trigger: 'blur'},
  Number: { validator: validatorIsNumber, trigger: 'blur' },
  integerNum: { validator: validatorIntegerNum, trigger: 'blur' },
  Name: { pattern: /^[\u4e00-\u9fa5|\w|\-|\.]+$/, message: '由中文、字母、数字、符号[_-.]组成', trigger: 'blur' },
  Tel: { pattern: /^[0-9][0-9-]+$/, message: '电话号码格式不对', trigger: 'blur' },
  Max(num) {
    return { max: num, message: `最大长度为${num}`, trigger: 'blur' };
  },
  Min(num) {
    return { min: num, message: `最小字节数为${num}`, trigger: 'blur' };
  },
  MaxNum(num) {
    return { validator: validatorMaxNum(num), trigger: 'blur' }
  },
  MinNum(num) {
    return { validator: validatorMinNum(num), trigger: 'blur' }
  },
  LargerNowDate: {validator: validatorLargerNowDate, trigger: 'blur'},
  // 国内移动电话
  MobilePhone: { pattern: /^\d+$/, message: '电话号码格式不对', trigger: 'blur' },
  // 国内固定电话
  TelePhone: { pattern: /^0\d{2,3}-\d{7,8}$|\d{7,8}$/, message: '电话号码格式不对', trigger: 'blur' },
  Email: { pattern: /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/, message: 'email格式不对', trigger: 'blur' },
  IdCard: { pattern: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, message: '身份证号格式不对', trigger: 'blur' },
  isIpv4: isIpv4,
  isIpv6: isIpv6,
  isIp: isIp,
  isMac: isMac,
  isPosInt: isPosInt,
  isNum: isNum,
  OMAIP: { validator: isOmaIpScope, trigger: 'blur' },
  OMAIPv6: { validator: ipv6Range, trigger: 'blur' },
  IpHybridRange: { validator: ipHybridRange, trigger: 'blur' },
  // 端口0-65535 的数字校验
  Port: {validator: validHasPort, trigger: 'blur'}
}
