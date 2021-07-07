! function(e) {
    if (!document.getElementById(e)) {
        var c = document.createElement("script");
        c.src = "https://infinity-public-js.500apps.com/push/push.min.js",
            c.type = "text/javascript",
            c.id = e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(c, n)
    }
}('pushninja_sript');
