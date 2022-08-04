import http from 'k6/http'

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 2,
    duration: '1s'
}

export default () => {
    let date = new Date();
    let s = date.getTime()
    let k=s.toString()
    const url = 'http://localhost:3000';
    const payload = JSON.stringify([{
      "Name": "Gokul",
      "id"  :  22323,
      "hash": k
  }]);
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    http.post(url, payload, params);
  }