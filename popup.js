let myButton = document.getElementById("myButton");

myButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: selectElement,
  });
});

function selectElement() {
  const numRaw = document.getElementsByClassName("displaying-num");
  let num = Number(numRaw.valueOf()[0].innerText.split(" ")[0]);

  document.getElementById("cb-select-all-1").click();
  document.getElementById("bulk-action-selector-top").value = "delete";
  document.getElementById("doaction").click();

  setTimeout(function(){ 
    console.log('va')
    document.getSelection.click() }, 5000);



}
