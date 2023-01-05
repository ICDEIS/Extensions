

chrome.alarms.create({
   periodInMinutes: 1 / 60
})
chrome.alarms.onAlarm.addListener(result => {
   chrome.storage.local.get(['counter', 'counting']).then(result => {
      const count = result.counter ?? 0
      const counting = result.counting
      
      chrome.storage.local.set({ counter: count + counting })
      chrome.action.setBadgeText({
         text: `${count + counting}`
      })
      chrome.storage.local.get(['period']).then(result => {
         const period = result.period ?? 50
         if (count % period === 0 && counting === 1) {
            this.registration.showNotification("Notification", {
               body: `${period} seconds passed`,
               icon: 'renn.png'
            })
         }
      })
   })
})