

const time = document.getElementsByClassName('time')[0];
const text = document.getElementsByClassName('text')[0]
const counter = document.getElementsByClassName('counter')[0]
const btns = document.getElementsByClassName('btns')[0]

function updateWindow() {
   chrome.storage.local.get(['counter']).then(result => {
      const count = result.counter ?? 0
      counter.innerHTML = `The Counter: ${count}`
   })
   time.textContent = new Date().toLocaleTimeString();
}
updateWindow()
setInterval(() => updateWindow(), 1000)

chrome.storage.local.get(['text1']).then(result => {
   const text1 = result.text1 ?? 'IC Deis'
   text.textContent = `Text: ${text1}`
})
btns.addEventListener('click', ee => {
   if(ee.target.classList.contains('start')) {
      chrome.storage.local.set({counting: 1})
   }
   if(ee.target.classList.contains('stop')) {
      chrome.storage.local.set({counting: 0})
   }
   if(ee.target.classList.contains('reset')) {
      chrome.storage.local.set({counting: 0, counter: 0,})
   }
})