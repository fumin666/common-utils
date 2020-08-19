/**
 * Created by dgunzi on 2017/5/11.
 */
import $axios from 'sunflower-ajax'

export default function Download(url, options) {
  if (arguments.length < 2) {
    getDownload(url);
  } else {
    if (options.type && options.type.toLowerCase() === 'post') {
      postDownload(url, options.data);
    } else if (options.type && options.type.toLowerCase() === 'get') {
      getDownload(url);
    } else if (options.type && options.type.toLowerCase() === 'checkpost') {
      checkPostDownload(url, options.data);
    } else if (options.logTemplate) {
      getDownload(url, options);
    } else {
      getDownload(url);
    }
  }
}
function getDownload(url, data) {
  if (data) {
    $axios.log(data, 'download', '成功');
  }
  var downloadIframe = document.createElement('iframe');
  downloadIframe.style.display = 'none';
  downloadIframe.src = $axios.basePath() + url;
  document.body.appendChild(downloadIframe);
}

function postDownload(url, data) {
  $axios.post(url, data).then(function (response) {
    let url = response.url;
    if (typeof response.data !== 'undefined') {
      for (let i = 0, length = response.data.length; i < length; i++) {
        url += data[i];
      }
    }
    getDownload(url, data);
  }).catch(function (error) {
    if (error) {
      $axios.log(data, 'download', '失败')
    }
  });
}

function checkPostDownload(url, data) {
  $axios.post(url, data).then(function (response) {
    getDownload(response.data[0]);
  }).catch(function (error) {
    if (error) {
      $axios.log(data, 'download', '失败')
    }
  });
}

