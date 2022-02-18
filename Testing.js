'use strict'

// var xhr = new XMLHttpRequest(),
//     method = "GET",
//     url = "https://developer.mozilla.org/ ";

// xhr.open(method, url, true);
// xhr.onreadystatechange = function () {
//         if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             console.log(xhr.responseText);
//         };
//     };
// xhr.send();




// fetch('https://developer.mozilla.org/allow-cors')
// .then(response => {
//     if (response.status >= 200 && response.status < 400) {
//         return response.json();
//       } else {
//         return Promise.reject();
//       }
// })
// .then()

// fetch('http://127.0.0.1:5500/Testing.html')
// .then(response => {
//     console.log(response)
// })

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function summer(salaries) {
    //   let sum=0
      for (let key of Object.entries(salaries)) {
        //   sum += key
          console.log(key)
      }
  }
