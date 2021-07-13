!(function (e) {
  console.log("verify script");
  // Check whether id exist or not in dom.
  if (!document.getElementById(e)) {
    // Decode the NTY3NDcxMDc4MTI3MzkyLWRldg==.
    let d = decodeURIComponent("NTY3NDcxMDc4MTI3MzkyLWRldg==");
    let r = window.atob(d);
    window._pushfcm = {
      location: r.split("-")[1],
    };
    window._push = {
      apiKey: r.split("-")[0],
    };
    var c = document.createElement("script");
    (c.src = "https://infinity-public-js.500apps.com/push/push.min.js"),
      (c.type = "text/javascript"),
      (c.id = e);
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(c, n);
  }
})("pushninja_sript");
