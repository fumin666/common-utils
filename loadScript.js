/**
 * Created by dingyf on 2017/6/30.
 */
export default function loadScript (url, callback) {
  let script = document.createElement('script');
  let id = url.split('/').reverse()[0].split('.')[0];
  if (document.getElementById('sicap_srcipt_' + id) !== null) {
    callback();
    return;
  }
  script.type = 'text/javascript';
  if (script.readyState) {  // IE
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Others
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  script.id = 'sicap_srcipt_' + id;
  document.body.appendChild(script);
}
