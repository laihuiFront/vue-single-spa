import {registerApplication, start} from 'single-spa'
const appConfig = require('./appConfig.json')

const runScript = async (url) => {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = url
      script.onload = resolve
      script.onerror = reject
      const firstScript = document.getElementsByTagName('script')[0]
      firstScript.parentNode.insertBefore(script, firstScript)
      console.log(firstScript)
  })
}

appConfig.forEach((app) => {
  registerApplication(app.appName,
    // import(app.appLoadUrl),
    async () => {
      await runScript(app.appLoadUrl + 'app.js')
      console.log(window[app.appName])
      return window[app.appName]
    },
    location => location.pathname.startsWith(`/${app.appName}`))
})

start()