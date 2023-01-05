

const inputText = document.getElementsByClassName('form-control')[0]
const inputNumb = document.getElementsByClassName('form-control')[1]
const forma = document.getElementsByTagName('form')[0]

forma.addEventListener('submit', ee => {
   ee.preventDefault()
   const value = ee.target[0].value
   const number = ee.target[1].value

   chrome.storage.local.set({text1: value, period: number})
})
chrome.storage.local.get(['text1', 'period']).then(result => {
   inputText.value = result.text1 ?? 'IC Deis'
   inputNumb.value = result.period ?? 50
})