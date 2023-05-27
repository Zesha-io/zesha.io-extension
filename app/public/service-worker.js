chrome.runtime.onInstalled.addListener(async () => {
    // const extensionId = chrome.runtime.id;
    // chrome.tabs.create({
    //     url: "http://localhost:3000/welcome?extensionId=" + extensionId,
    // });
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// console.log(request, sender);
// if (request.popup === "open") {
//     sendResponse({ popup: "opened" });
// }
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   
});
