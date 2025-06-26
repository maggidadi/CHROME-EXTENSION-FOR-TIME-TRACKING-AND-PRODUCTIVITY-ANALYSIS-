const productiveSites = ["leetcode.com", "github.com", "stackoverflow.com", "w3schools.com"];
const unproductiveSites = ["youtube.com", "facebook.com", "instagram.com", "tiktok.com"];

chrome.storage.local.get(null, function(data) {
    let output = document.getElementById("output");
    let productiveTime = 0;
    let unproductiveTime = 0;

    output.innerHTML += "<h4>🟢 Productive</h4>";
    productiveSites.forEach(site => {
        if (data[site]) {
            output.innerHTML += `${site} → ${data[site]} minutes<br>`;
            productiveTime += data[site];
        }
    });

    output.innerHTML += "<hr><h4>🔴 Unproductive</h4>";
    unproductiveSites.forEach(site => {
        if (data[site]) {
            output.innerHTML += `${site} → ${data[site]} minutes<br>`;
            unproductiveTime += data[site];
        }
    });

    output.innerHTML += `<hr><b>Total Productive Time:</b> ${productiveTime} minutes<br>`;
    output.innerHTML += `<b>Total Unproductive Time:</b> ${unproductiveTime} minutes`;
});