domReady(function () {
    // Non-minified paths || switch with below's array
    // const stylesheets = [
    //     '/src/css/result.css',
    // ];
    const stylesheets = [
        '/src/css/result.min.css',
    ];
    const scripts = [
        '/src/js/script.js',
        '/src/js/search_email.js',
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