// document.addEventListener("selectionchange", function () {
//   var selectedText = window.getSelection().toString();

//   // Kiểm tra nếu có văn bản được bôi đen
//   if (selectedText) {
//     // Gửi selectedText tới Chrome extension
//     chrome.runtime.sendMessage({ selectedText: selectedText });
//   }
// });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   var selectedText = message.selectedText;
//   console.log("Selected text:", selectedText);
// });
