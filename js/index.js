var container = document.querySelector('#container') , 
    C = 2;
    // try change C to 10 , C should be even like 2,4,6 ...

for (var i=0; i<C-1; i+=10){
  var SVG = document.getElementById("svg");
  var nSVG = document.getElementById("svg").cloneNode(true) ;
  nSVG.setAttribute("class",i&1?'R-T0':'R-D0');
  if(i&1){container.insertBefore(nSVG,SVG)}else{container.appendChild(nSVG);};
};

TweenLite.set(container,{perspective:300});
TweenMax.staggerTo('.R-D0,.R-T0',1,{rotationX:180,repeat:-1,ease:Linear.easeNone,delay:-C/2},1/(C/2));
TweenMax.to('.R-D0,.R-T0',40,{rotation:360,repeat:-1,ease:Linear.easeNone});
TweenMax.to('#core',1.5,{scale:0.95,backgroundColor:'hsl(+=20,+=0%,-=10%)',repeat:-1,yoyo:true,ease:Sine.easeInOut});


var container1 = document.querySelector('#container1') , 
    C = 2;
    // try change C to 10 , C should be even like 2,4,6 ...

for (var i=0; i<C-1; i++){
  var SVG = document.getElementById("svg");
  var nSVG = document.getElementById("svg").cloneNode(true) ;
  nSVG.setAttribute("class",i&1?'R-T1':'R-D1');
  if(i&1){container1.insertBefore(nSVG,SVG)}else{container1.appendChild(nSVG);};
};

TweenLite.set(container1,{perspective:300});
TweenMax.staggerTo('.R-D1,.R-T1',1,{rotationX:180,repeat:-1,ease:Linear.easeNone,delay:-C/2},1/(C/2));
TweenMax.to('.R-D1,.R-T1',40,{rotation:360,repeat:-1,ease:Linear.easeNone});
TweenMax.to('#core1',1.5,{scale:0.95,backgroundColor:'hsl(+=20,+=0%,-=10%)',repeat:-1,yoyo:true,ease:Sine.easeInOut});



var container2 = document.querySelector('#container2') , 
    C = 2;
    // try change C to 10 , C should be even like 2,4,6 ...

for (var i=0; i<C-1; i++){
  var SVG = document.getElementById("svg");
  var nSVG = document.getElementById("svg").cloneNode(true) ;
  nSVG.setAttribute("class",i&1?'R-T2':'R-D2');
  if(i&1){container2.insertBefore(nSVG,SVG)}else{container2.appendChild(nSVG);};
};

TweenLite.set(container2,{perspective:300});
TweenMax.staggerTo('.R-D2,.R-T2',1,{rotationX:180,repeat:-1,ease:Linear.easeNone,delay:-C/2},1/(C/2));
TweenMax.to('.R-D2,.R-T2',40,{rotation:360,repeat:-1,ease:Linear.easeNone});
TweenMax.to('#core2',1.5,{scale:0.95,backgroundColor:'hsl(+=20,+=0%,-=10%)',repeat:-1,yoyo:true,ease:Sine.easeInOut});