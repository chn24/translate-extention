const translateInput = document.getElementById("translateInput");
const translateBtn = document.getElementById("translateBtn");
const translatedText = document.getElementById("translatedText");
let selectedText;

// chrome.storage.sync.get(["selectedText"]).then((result) => {
//   if (result?.key) {
//     console.log(result);
//     selectedText = result.key;
//     translateInput.value = selectedText;
//   }
// });

const text = window.getSelection();

if (text) {
  translateInput.value = text;
}

const url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
const api_key =
  "trnsl.1.1.20230517T084448Z.12fec51609cc9583.a4f9488df9e3184cdcdc2f083fb2b00d33fe6065";

const translate = async (text) => {
  const target_language = "vi";
  const payload = new URLSearchParams();
  payload.append("key", api_key);
  payload.append("text", text);
  payload.append("lang", target_language);

  fetch(url, {
    method: "POST",
    body: payload,
  })
    .then((response) => response.json())
    .then((data) => {
      // Trích xuất kết quả dịch thuật từ data
      const translation = data.text[0];
      console.log("Translation:", translation);
      translatedText.value = translation;
      //   //   console.log(selectedText);
      //   alert("ok");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

translateBtn.addEventListener("click", () => {
  let textInput = translateInput.value;
  console.log(textInput);
  translate(textInput);
});
