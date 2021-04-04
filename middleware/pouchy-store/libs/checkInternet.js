const TIMEOUT_INTERNET_CHECK = 5; // seconds
const fetchData = require('node-fetch');

const checkInternet = (url) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('No internet connection'));
    }, TIMEOUT_INTERNET_CHECK*1000);

    fetchData(url, { method: 'HEAD' }).then(() => {
      clearTimeout(timer);
      resolve(true);
    }).catch(() => {
      clearTimeout(timer);
      reject(new Error('No internet connection'));
    });
  });
}

module.exports = checkInternet;
