domReady(function () {
    // Non-minified paths || switch with below's array
    // const stylesheets = [
    //     '/src/css/result.css',
    // ];
    const stylesheets = [
        '/src/css/result.min.css?v1.0',
    ];
    const scripts = [
        '/src/js/search_email.min.js?v1.0',
    ];
    stylesheets.forEach(function (src) {
        let asset = document.createElement('link');
        asset.type = "text/css";
        asset.rel = "stylesheet";
        asset.href = src;
        document.head.appendChild(asset);
    });
    scripts.forEach(function (src) {
        let asset = document.createElement('script');
        asset.src = src;
        document.head.appendChild(asset);
    });
});