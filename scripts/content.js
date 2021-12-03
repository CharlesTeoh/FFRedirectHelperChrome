(async () => {
    const src = chrome.extension.getURL('./globals.mjs');
    const contentScript = await import(src);
    contentScript.main();
  }
)();