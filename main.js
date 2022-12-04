chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getdata
  });
});

const url = 'https://script.google.com/macros/s/AKfycbyFebjTqREMB1N-Nx-5LJ1yWDI0cKW17Os_R8hWBa1UGjswxM1Wd8Ro46S38sa7b-z1/exec'
function getdata() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((json) => {
      console.log(json)
      document.getElementById('a').innerHTML = "<div>"+json[0]+"</div><div>"+json[1]+"</div>"
    })
    .catch((reason) => {
      // エラー
      console.log(reason)
    });
}

//document.getElementById("bt").onclick = getdata

window.onload=function(){getdata()}