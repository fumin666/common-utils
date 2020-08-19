function addZero(str) {
  return str > 9 ? str : '0' + str;
}

/**
 * parse HH:mm:ss to HHmm
 * @param date 格式为 HH:mm:ss 或 HH-mm-ss
 * @returns {*}
 */
export function parseHHmm(date) {
  return date.slice(0, 2) + date.slice(3, 5);
}

/**
 *
 * @param {Date}
 * @return {yyyy-MM-dd}
 */
export function parseDate(date) {
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
};

/**
 *
 * @param {Date}
 * @return {HH:mm:ss}
 */
export function parseTime(date) {
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
};

/**
 *
 * @param 时间戳-秒
 * @return {yyyy-MM-dd}
 */
export function parseNumTime(num) {
  let date = new Date(num * 1000);
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
};

/**
 *
 * @param 时间戳-秒
 * @return {yyyy-MM-dd HH:mm:ss}
 */
export function parseNumAllTime(num) {
  if (num !== null) {
    let date = new Date(num * 1000);
    return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
  }
};

/**
 *
 * @param 时间戳-秒
 * @return {number}
 */
export function timeStamp(date) {
  if (typeof date === 'string') {
    date = new Date(date);
    return Math.round(date.getTime() / 1000);
  }
  return date
}

export function getTime() {
  let time = new Date()
  return `${time.getFullYear()}-${addZero(time.getMonth() + 1)}-${addZero(time.getDate())} ${addZero(time.getHours())}:${addZero(time.getMinutes())}:${addZero(time.getSeconds())}`
}