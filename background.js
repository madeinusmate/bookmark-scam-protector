chrome.bookmarks.onCreated.addListener((id, bookmark) => {
  // Check for suspicious bookmark URL patterns
  const suspiciousPatterns = [
    /^javascript:/i,  // javascript: protocol
    /^data:/i,       // data: URLs that could contain JavaScript
    /^vbscript:/i,   // vbscript: protocol
    /<script/i,      // Embedded script tags
    /\bon\w+\s*=/i   // onclick and other event handlers
  ];

  const isUrlSuspicious = suspiciousPatterns.some(pattern => 
    pattern.test(bookmark.url)
  );

  if (isUrlSuspicious) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          func: (bookmarkUrl) => {
            alert('⚠️ Warning: Potentially malicious bookmark detected! This bookmark contains JavaScript code that could be harmful.\n\nSuspicious URL: ' + bookmarkUrl);
          },
          args: [bookmark.url]
        });
      }
    });
  } else {
    console.log('Bookmark appears safe:', bookmark.url);
  }
}); 