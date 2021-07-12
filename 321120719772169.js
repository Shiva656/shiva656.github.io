! function(e) {
    console.log('aaa', window)
    if (!document.getElementById(e)) {
        if (window._pushninja = '') {
            let r = window.atob(window._pushninja)
            window._pushfcm = {
                location: r.split('-')[1]
            };
            window._push = {
                apiKey: r.split('-')[0]
            };
        }
        var c = document.createElement("script");
        c.src = "https://infinity-public-js.500apps.com/push/push.min.js",
            c.type = "text/javascript",
            c.id = e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(c, n)
    }
}('pushninja_sript');
