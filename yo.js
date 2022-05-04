var users = ['xqcow', 'avoidingthepuddle'];

var categories = ['favz'];



// var xpathExpression = "//div[contains(@aria-label, 'Followed Channels')]";

// var xpathResult = new XPathEvaluator()
//     .createExpression(xpathExpression)
//     .evaluate(document, XPathResult.FIRST_ORDERED_NODE_TYPE)
//     .singleNodeValue;

// console.log(xpathResult);

// const x = document.querySelector('[aria-label="Followed Channels"]')
// x = document.getElementsByTagName('div')
// const sideNav = document.querySelector('[id="sideNav"]');

// let selectFunc = async () => {
//     let sideNav = document.querySelector('div[aria-label="Followed Channels"]');;
//     do {
//         setTimeout(() => {
//             sideNav = document.querySelector('div[aria-label="Followed Channels"]');
//         }, 250);
//     } while (!sideNav);
// };

// selectFunc();

// console.log(sideNav)

// let followedChannelsPromise;
// intervalId = setInterval(() => {
//     followedChannelsPromise = new Promise((resolve, reject) => {
//         let followedChannelsDiv = document.querySelector('div[aria-label="Followed Channels"]');
//         if (followedChannelsDiv) {
//             clearInterval(intervalId);
//             resolve(followedChannelsDiv);
//         } else {
//             reject();
//         }
//     });
// }, 500);

// (async () => {
//     await 
// })()




// let followedChannelsDiv;
// intervalId = setInterval(() => {
//     followedChannelsDiv = document.querySelector('div[aria-label="Followed Channels"]');
//     if (followedChannelsDiv) {
//         clearInterval(intervalId);
//     }
// }, 500);

window.onload = () => {
    followedChannelsDiv = document.querySelector('div[aria-label="Followed Channels"]');
    console.log(followedChannelsDiv)
}