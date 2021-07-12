
const api_url = 
"https://script.google.com/macros/s/AKfycbxvaAZ2fnWlizBRQBBeo6Kv03m4yYuKaAzdwM0c5kEQ5SKZV4oRju3X7vr5lrLpGjJY/exec?q=xx";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.text();
    console.log(data);
    
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.remove(tab.id);
        });
    window.open(data);
}
// Calling that async function
getapi(api_url);
  
