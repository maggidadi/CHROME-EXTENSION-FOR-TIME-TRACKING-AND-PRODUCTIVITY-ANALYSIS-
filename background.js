chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.startsWith('http')) {
        const domain = new URL(tab.url).hostname;
        const now = Date.now();

        chrome.storage.local.get([domain], function(result) {
            let time = result[domain] || 0;
            chrome.storage.local.set({ [domain]: time + 1 });
        });
    }
});