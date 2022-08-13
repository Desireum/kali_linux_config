
window.__pageEnterTime__ = Date.now();


var generateFunc = window.app['pages/recommend-detail/pc/index'];

location.hash = "pages/recommend-detail/pc/index";

document.dispatchEvent(new CustomEvent('generateFuncReady', {
    detail: { generateFunc: generateFunc },
}));

