let injectFile = document.getElementById('inject-file');
let injectFunction = document.getElementById('Scan Now');
var queue = [document.body].innerText;
setTimeout(function(){ alert(queue);alert("hi"); }, 12000);

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

injectFile.addEventListener('click', async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content-script.js']
  });
});

function showAlert(givenName) {
	var el = document.createElement( 'html' );
el.innerHTML =[document.body];
  alert(`Hello, ${givenName}`);
//var queue =[document.body];
alert(document.URL);
alert(el.innerText);
// alert(document.querySelector("#Display_Container-r > div > div:nth-child(6) > p > span:nth-child(3) > a").innerText);
alert(document.querySelector(el)).innerText;
}

injectFunction.addEventListener('click', async () => {
  let tab = await getCurrentTab();

  let name = 'World';
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: showAlert,
    args: [name]
  });
});
