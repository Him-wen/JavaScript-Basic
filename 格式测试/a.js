//ajax使用promise包装
function Ajax({ method, url, params, contentType }) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    Object.keys(params).forEach((key) => {
      formData.append(key, params[key]);// 键值
    });
    return new Promise((resolve, reject) => {
      try {
        xhr.open(method, url, false);
        xhr.setRequestHeader("Content-Type", contentType);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
              // 这里我们使用200-400来判断
              resolve(xhr.responseText);
            } else {
              // 返回请求信息
              reject(xhr);
            }
          }
        };
        xhr.send(formData);
      } catch (err) {
        reject(err);
      }
    });
  }