import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ToastContainer, ToastPosition, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './service-worker';
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import {
  useEffect
} from "react"
function App() {
  useEffect(() => {
    console.log("push")

    window.addEventListener("push", () => {
      console.log("push")
    })
  }, [])

  // const beamsClient = new PusherPushNotifications.Client({
  //   instanceId: '2c238d95-f1a0-42a4-85d0-442cb3bcd26e',

  // });

  // beamsClient.start()
  //   .then((beamsClient) => beamsClient.getDeviceId())
  //   .then((deviceId) =>
  //     console.log("Successfully registered with Beams. Device ID:", deviceId)
  //   )
  //   .then(() => beamsClient.addDeviceInterest("hello"))
  //   .then(() => beamsClient.getDeviceInterests())
  //   .then((interests) => console.log("Current interests:", interests))
  //   .catch(console.error);

  // React.useEffect(() => {

  //   window.addEventListener('push', event => {
  //     const title = event.data.text();
  //     event.waitUntil(window.registration.showNotification(title))
  //     console.log(title)
  //   })
  //   navigator.serviceWorker.addEventListener('push', (e) => console.log(e))
  // })
  const notify = () => {
    toast();

  }
  return (
    <div className="App">

      <ToastContainer />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={notify}
        >
          Learn React
        </button>

      </header>
    </div>
  );
}

export default App;
