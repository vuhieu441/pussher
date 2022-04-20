let swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
const swDev = () => {
    navigator.serviceWorker.register(swUrl).then((data) => console.log(data));

}
export default swDev;