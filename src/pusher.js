// import './service-worker'
// importScripts("https://js.pusher.com/beams/service-worker.js")
// import * as PusherPushNotifications from "@pusher/push-notifications-web";

// const pusher = function () {
//     PusherPushNotifications.onNotificationReceived = ({ pushEvent, payload }) => {
//         debugger
//         // NOTE: Overriding this method will disable the default notification
//         // handling logic offered by Pusher Beams. You MUST display a notification
//         // in this callback unless your site is currently in focus
//         // https://developers.google.com/web/fundamentals/push-notifications/subscribing-a-user#uservisibleonly_options

//         // Your custom notification handling logic here 🛠️
//         // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
//         pushEvent.waitUntil(
//             window.registration.showNotification(payload.notification.title, {
//                 body: payload.notification.body,
//                 icon: payload.notification.icon,
//                 data: payload.data,
//             })
//         );
//         { console.log(payload.notification) }
//     };
// }
// export default pusher;