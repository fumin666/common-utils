/*
 * @Description: 单独把ip段混合验证的方法列出来
 * @Author: songyf
 * @Date: 2020-0814 11:11:11
 * @LastEditTime:
 * @LastEditors: LanMando
 */

// ipv4范围校验
export function ipv4Range(value) {
  let flag = true
  var scope = value.replace('/\s/g', '');
  var bIsExtString = false;
  var strWords = '';
  for (let i = 0; i < scope.length; i++) {
    if (scope.charAt(i) !== '*' && scope.charAt(i) !== '-' && scope.charAt(i) !== '[' && scope.charAt(i) !== ']' && scope.charAt(i) !== ',' && scope.charAt(i) !== '.' && isNaN(scope.charAt(i))) {
      flag = false
      return flag
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
      flag = false
      return flag
    }
    subIps = ips[i].split('.');
    if (!isint.test(subIps[0])) {
      flag = false
      return flag
    }
    if (!isint.test(subIps[1])) {
      flag = false
      return flag
    }
    if (subIps[0] === 0 || subIps[0] > 255 || subIps[1] > 255) {
      flag = false
      return flag
    }
    for (let j = 2; j < subIps.length; j++) {
      if (subIps[j] === '*') { continue }
      if (isint.test(subIps[j]) && subIps[j] > 255) {
        flag = false
        return flag
      } else if (!isint.test(subIps[j])) {
        if (subIps[j].split('[').length !== 2 || subIps[j].split(']').length !== 2) {
          flag = false
          return flag
        }
        var tmp = subIps[j].split('[')[1].split(']')[0];
        for (let k = 0; k < tmp.split(',').length; k++) {
          var v1 = tmp.split(',')[k];
          if (isint.test(v1) && v1 > 255) {
            flag = false
            return flag
          } else if (!isint.test(v1)) {
            var v2 = v1.split('-')
            if (v2.length !== 2) {
              flag = false
              return flag
            }
            if (parseInt(v2[0]) >= parseInt(v2[1]) || v2[0] > 255 || v2[1] > 255) {
              flag = false
              return flag
            }
          }
        }
      }
    }
  }
  return flag
}
// ipv6范围校验
export function ipv6Range(value) {
  let flag = true
  var scope = value.replace('/\s/g', '');
  var bIsExtString = false;
  var strWords = '';
  for (let i = 0; i < scope.length; i++) {
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
    if (ips[i].indexOf('-') !== -1) {
      if (!moreSegment(ips[i])) {
        flag = false
        return flag
      }
    } else {
      if (!isIpv6(ips[i])) {
        flag = false
        return flag
      }
    }
  }
  return flag
}
export function moreSegment(st){//段处理
  var flag = true;
  var strAarrySub = st.split("-");//多个IP段
  if(strAarrySub.length>2){flag = false;}
  if(strAarrySub.length>0){//先验证IPV6正确性
    var st_reg = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^:((:[0-9a-fA-F]{1,4}){1,6}|:)$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,5}|:)$|^([0-9a-fA-F]{1,4}:){2}((:[0-9a-fA-F]{1,4}){1,4}|:)$|^([0-9a-fA-F]{1,4}:){3}((:[0-9a-fA-F]{1,4}){1,3}|:)$|^([0-9a-fA-F]{1,4}:){4}((:[0-9a-fA-F]{1,4}){1,2}|:)$|^([0-9a-fA-F]{1,4}:){5}:([0-9a-fA-F]{1,4})?$|^([0-9a-fA-F]{1,4}:){6}:$/;
    for(var ii=0;ii<strAarrySub.length;ii++){
      if( st_reg.test(strAarrySub[ii]) ){//比较段大小，后边大于前边
        var ip1 = strAarrySub[0];
        var ip2 = strAarrySub[1];
        var splited1 = ip1.split(":");
        if (splited1.length < 8) {
          //将""替换成对应数量的"0000"
          var index = splited1.indexOf("");
          var temp = splited1.slice(index + 1, splited1.length);
          var zero1 = [];
          for (var i = 0; i < (8 - splited1.length + 1); i++) {
            //8-去掉""之后的长度,得到需要补齐的元素数量
            zero1.push("0000");
          }
          splited1 = splited1.slice(0, index).concat(zero1).concat(temp);//空间复杂度比较大了,
        }
        var splited2 = ip2.split(":");
        if (splited2.length < 8) {
          //将""替换成对应数量的"0000"
          var index = splited2.indexOf("");
          var temp = splited2.slice(index + 1, splited2.length);
          var zero2 = [];
          for (var i = 0; i < (8 - splited2.length + 1); i++) {//8-去掉""之后的长度,得到需要补齐的元素数量
            zero2.push("0000");
          }
          splited2 = splited2.slice(0, index).concat(zero2).concat(temp);//空间复杂度比较大了,
        }
        for(var li=0;li<8;li++){
          if(parseInt(splited1[li],16)>parseInt(splited2[li],16)){
            flag = false;
          }
        }
      }else{
        flag = false;
      }
    }
  }
  return flag;
}
function isOMAIp(data) {
  if (/^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$/.test(data)) {
    return true
  } else {
    return false
  }
}
function isIpv6(ip){
  var str = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^:((:[0-9a-fA-F]{1,4}){1,6}|:)$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,5}|:)$|^([0-9a-fA-F]{1,4}:){2}((:[0-9a-fA-F]{1,4}){1,4}|:)$|^([0-9a-fA-F]{1,4}:){3}((:[0-9a-fA-F]{1,4}){1,3}|:)$|^([0-9a-fA-F]{1,4}:){4}((:[0-9a-fA-F]{1,4}){1,2}|:)$|^([0-9a-fA-F]{1,4}:){5}:([0-9a-fA-F]{1,4})?$|^([0-9a-fA-F]{1,4}:){6}:$/;
  if( str.test(ip) ){
    return true;
  }else{
    return false;
  }
}
