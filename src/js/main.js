const domReady = function (callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    const stylesheets = [
        '/src/css/style.css',
    ];
    const scripts = [
        '/src/js/script.js',
    ];
    stylesheets.forEach(function(src) {
        let asset = document.createElement('link');
        asset.type = "text/css";
        asset.rel = "stylesheet";
        asset.href = src;
        document.head.appendChild(asset);
    });
    scripts.forEach(function(src) {
        let asset = document.createElement('script');
        asset.src = src;
        document.head.appendChild(asset);
    });
});