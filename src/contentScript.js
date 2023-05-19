// alert("ok");
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   var selectedText = message.selectedText;
//   alert("ok");
//   chrome.storage.sync.set({ selectedText: selectedText });
//   //   console.log("Selected text:", selectedText);
//   //   alert("ok");
// });

chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  if (request.method == "getSelection")
    sendResponse({ data: window.getSelection().toString() });
  else sendResponse({}); // snub them.
});
