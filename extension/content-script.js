chrome.runtime.sendMessage(
    JSON.stringify({
        left: window.screenLeft + window.outerWidth,
        top: window.screenTop,
    }),
    (response) => {}
);

// chrome.runtime.sendMessage(
//     "gojpafhhdaeeplechbdkclfnebecigmc",
//     { popup: "open" },
//     function (response) {
//         console.log(response);
//     }
// );
