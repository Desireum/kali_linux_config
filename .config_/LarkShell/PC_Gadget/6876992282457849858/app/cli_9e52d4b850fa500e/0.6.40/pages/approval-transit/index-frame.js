
window.__pageEnterTime__ = Date.now();


var generateFunc = window.app['pages/approval-transit/index'];

location.hash = "pages/approval-transit/index";

document.dispatchEvent(new CustomEvent('generateFuncReady', {
    detail: { generateFunc: generateFunc },
}));

