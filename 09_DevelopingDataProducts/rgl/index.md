---
title       : rgl
subtitle    : Building Data Products
author      : Brian Caffo, Jeff Leek, Roger Peng
job         : Johns Hopkins Bloomberg School of Public Health
logo        : bloomberg_shield.png
framework   : io2012
highlighter : highlight.js  
hitheme     : tomorrow       
url:
    lib: ../../librariesNew #Remove new if using old slidify
    assets: ../../assets
widgets     : [mathjax, quiz, bootstrap]
mode        : selfcontained # {standalone, draft}
---


## About rgl
- rgl is R's interface to opengl (the popular graphics library)
- With rgl you can
  - Create interactive 3D visualizations easily
- It's still up in the air, but you can embed them into slidify and shiny
- rgl can export to webgl

---
### Example


```r
x <- sort(rnorm(1000))
y <- rnorm(1000)
z <- rnorm(1000) + atan2(x,y)
plot3d(x, y, z, col=rainbow(1000))
```

<script src="CanvasMatrix.js" type="text/javascript"></script>
<canvas id="testgltextureCanvas" style="display: none;" width="256" height="256">
<img src="testglsnapshot.png" alt="testglsnapshot" width=701/><br>
	Your browser does not support the HTML5 canvas element.</canvas>
<!-- ****** points object 6 ****** -->
<script id="testglvshader6" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	void main(void) {
	  vPosition = mvMatrix * vec4(aPos, 1.);
	  gl_Position = prMatrix * vPosition;
	  gl_PointSize = 3.;
	  vCol = aCol;
	}
</script>
<script id="testglfshader6" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  gl_FragColor = lighteffect;
	}
</script> 
<!-- ****** text object 8 ****** -->
<script id="testglvshader8" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	attribute vec2 aTexcoord;
	varying vec2 vTexcoord;
	attribute vec2 aOfs;
	void main(void) {
	  vCol = aCol;
	  vTexcoord = aTexcoord;
	  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
	  pos = pos/pos.w;
	  gl_Position = pos + vec4(aOfs, 0.,0.);
	}
</script>
<script id="testglfshader8" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	varying vec2 vTexcoord;
	uniform sampler2D uSampler;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
	  if (textureColor.a < 0.1)
	    discard;
	  else
	    gl_FragColor = textureColor;
	}
</script> 
<!-- ****** text object 9 ****** -->
<script id="testglvshader9" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	attribute vec2 aTexcoord;
	varying vec2 vTexcoord;
	attribute vec2 aOfs;
	void main(void) {
	  vCol = aCol;
	  vTexcoord = aTexcoord;
	  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
	  pos = pos/pos.w;
	  gl_Position = pos + vec4(aOfs, 0.,0.);
	}
</script>
<script id="testglfshader9" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	varying vec2 vTexcoord;
	uniform sampler2D uSampler;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
	  if (textureColor.a < 0.1)
	    discard;
	  else
	    gl_FragColor = textureColor;
	}
</script> 
<!-- ****** text object 10 ****** -->
<script id="testglvshader10" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	attribute vec2 aTexcoord;
	varying vec2 vTexcoord;
	attribute vec2 aOfs;
	void main(void) {
	  vCol = aCol;
	  vTexcoord = aTexcoord;
	  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
	  pos = pos/pos.w;
	  gl_Position = pos + vec4(aOfs, 0.,0.);
	}
</script>
<script id="testglfshader10" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	varying vec2 vTexcoord;
	uniform sampler2D uSampler;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
	  if (textureColor.a < 0.1)
	    discard;
	  else
	    gl_FragColor = textureColor;
	}
</script> 
<!-- ****** lines object 11 ****** -->
<script id="testglvshader11" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	void main(void) {
	  vPosition = mvMatrix * vec4(aPos, 1.);
	  gl_Position = prMatrix * vPosition;
	  vCol = aCol;
	}
</script>
<script id="testglfshader11" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  gl_FragColor = lighteffect;
	}
</script> 
<!-- ****** text object 12 ****** -->
<script id="testglvshader12" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	attribute vec2 aTexcoord;
	varying vec2 vTexcoord;
	attribute vec2 aOfs;
	void main(void) {
	  vCol = aCol;
	  vTexcoord = aTexcoord;
	  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
	  pos = pos/pos.w;
	  gl_Position = pos + vec4(aOfs, 0.,0.);
	}
</script>
<script id="testglfshader12" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	varying vec2 vTexcoord;
	uniform sampler2D uSampler;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
	  if (textureColor.a < 0.1)
	    discard;
	  else
	    gl_FragColor = textureColor;
	}
</script> 
<!-- ****** lines object 13 ****** -->
<script id="testglvshader13" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	void main(void) {
	  vPosition = mvMatrix * vec4(aPos, 1.);
	  gl_Position = prMatrix * vPosition;
	  vCol = aCol;
	}
</script>
<script id="testglfshader13" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  gl_FragColor = lighteffect;
	}
</script> 
<!-- ****** text object 14 ****** -->
<script id="testglvshader14" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	attribute vec2 aTexcoord;
	varying vec2 vTexcoord;
	attribute vec2 aOfs;
	void main(void) {
	  vCol = aCol;
	  vTexcoord = aTexcoord;
	  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
	  pos = pos/pos.w;
	  gl_Position = pos + vec4(aOfs, 0.,0.);
	}
</script>
<script id="testglfshader14" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	varying vec2 vTexcoord;
	uniform sampler2D uSampler;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
	  if (textureColor.a < 0.1)
	    discard;
	  else
	    gl_FragColor = textureColor;
	}
</script> 
<!-- ****** lines object 15 ****** -->
<script id="testglvshader15" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	void main(void) {
	  vPosition = mvMatrix * vec4(aPos, 1.);
	  gl_Position = prMatrix * vPosition;
	  vCol = aCol;
	}
</script>
<script id="testglfshader15" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  gl_FragColor = lighteffect;
	}
</script> 
<!-- ****** text object 16 ****** -->
<script id="testglvshader16" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	attribute vec2 aTexcoord;
	varying vec2 vTexcoord;
	attribute vec2 aOfs;
	void main(void) {
	  vCol = aCol;
	  vTexcoord = aTexcoord;
	  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
	  pos = pos/pos.w;
	  gl_Position = pos + vec4(aOfs, 0.,0.);
	}
</script>
<script id="testglfshader16" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	varying vec2 vTexcoord;
	uniform sampler2D uSampler;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
	  if (textureColor.a < 0.1)
	    discard;
	  else
	    gl_FragColor = textureColor;
	}
</script> 
<!-- ****** lines object 17 ****** -->
<script id="testglvshader17" type="x-shader/x-vertex">
	attribute vec3 aPos;
	attribute vec4 aCol;
	uniform mat4 mvMatrix;
	uniform mat4 prMatrix;
	varying vec4 vCol;
	varying vec4 vPosition;
	void main(void) {
	  vPosition = mvMatrix * vec4(aPos, 1.);
	  gl_Position = prMatrix * vPosition;
	  vCol = aCol;
	}
</script>
<script id="testglfshader17" type="x-shader/x-fragment"> 
	#ifdef GL_ES
	precision highp float;
	#endif
	varying vec4 vCol; // carries alpha
	varying vec4 vPosition;
	void main(void) {
      vec4 colDiff = vCol;
	  vec4 lighteffect = colDiff;
	  gl_FragColor = lighteffect;
	}
</script> 
<script type="text/javascript"> 
	function getShader ( gl, id ){
	   var shaderScript = document.getElementById ( id );
	   var str = "";
	   var k = shaderScript.firstChild;
	   while ( k ){
	     if ( k.nodeType == 3 ) str += k.textContent;
	     k = k.nextSibling;
	   }
	   var shader;
	   if ( shaderScript.type == "x-shader/x-fragment" )
             shader = gl.createShader ( gl.FRAGMENT_SHADER );
	   else if ( shaderScript.type == "x-shader/x-vertex" )
             shader = gl.createShader(gl.VERTEX_SHADER);
	   else return null;
	   gl.shaderSource(shader, str);
	   gl.compileShader(shader);
	   if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) == 0)
	     alert(gl.getShaderInfoLog(shader));
	   return shader;
	}
	var min = Math.min;
	var max = Math.max;
	var sqrt = Math.sqrt;
	var sin = Math.sin;
	var acos = Math.acos;
	var tan = Math.tan;
	var SQRT2 = Math.SQRT2;
	var PI = Math.PI;
	var log = Math.log;
	var exp = Math.exp;
	function testglwebGLStart() {
	   var debug = function(msg) {
	     document.getElementById("testgldebug").innerHTML = msg;
	   }
	   debug("");
	   var canvas = document.getElementById("testglcanvas");
	   if (!window.WebGLRenderingContext){
	     debug("<img src=\"testglsnapshot.png\" alt=\"testglsnapshot\" width=701/><br> Your browser does not support WebGL. See <a href=\"http://get.webgl.org\">http://get.webgl.org</a>");
	     return;
	   }
	   var gl;
	   try {
	     // Try to grab the standard context. If it fails, fallback to experimental.
	     gl = canvas.getContext("webgl") 
	       || canvas.getContext("experimental-webgl");
	   }
	   catch(e) {}
	   if ( !gl ) {
	     debug("<img src=\"testglsnapshot.png\" alt=\"testglsnapshot\" width=701/><br> Your browser appears to support WebGL, but did not create a WebGL context.  See <a href=\"http://get.webgl.org\">http://get.webgl.org</a>");
	     return;
	   }
	   var width = 701;  var height = 696;
	   canvas.width = width;   canvas.height = height;
	   gl.viewport(0, 0, width, height);
	   var prMatrix = new CanvasMatrix4();
	   var mvMatrix = new CanvasMatrix4();
	   var normMatrix = new CanvasMatrix4();
	   var saveMat = new CanvasMatrix4();
	   saveMat.makeIdentity();
	   var distance;
	   var posLoc = 0;
	   var colLoc = 1;
	   var zoom = 1;
	   var fov = 30;
	   var userMatrix = new CanvasMatrix4();
	   userMatrix.load([
	    1, 0, 0, 0,
	    0, 0.3420201, -0.9396926, 0,
	    0, 0.9396926, 0.3420201, 0,
	    0, 0, 0, 1
		]);
	   function getPowerOfTwo(value) {
	     var pow = 1;
	     while(pow<value) {
	       pow *= 2;
	     }
	     return pow;
	   }
	   function handleLoadedTexture(texture, textureCanvas) {
	     gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	     gl.bindTexture(gl.TEXTURE_2D, texture);
	     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
	     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
	     gl.generateMipmap(gl.TEXTURE_2D);
	     gl.bindTexture(gl.TEXTURE_2D, null);
	   }
	   function loadImageToTexture(filename, texture) {   
	     var canvas = document.getElementById("testgltextureCanvas");
	     var ctx = canvas.getContext("2d");
	     var image = new Image();
	     image.onload = function() {
	       var w = image.width;
	       var h = image.height;
	       var canvasX = getPowerOfTwo(w);
	       var canvasY = getPowerOfTwo(h);
	       canvas.width = canvasX;
	       canvas.height = canvasY;
	       ctx.imageSmoothingEnabled = true;
	       ctx.drawImage(image, 0, 0, canvasX, canvasY);
	       handleLoadedTexture(texture, canvas);
   	       drawScene();
	     }
	     image.src = filename;
	   }  	   
	   function drawTextToCanvas(text, cex) {
	     var canvasX, canvasY;
	     var textX, textY;
	     var textHeight = 20 * cex;
	     var textColour = "white";
	     var fontFamily = "Arial";
	     var backgroundColour = "rgba(0,0,0,0)";
	     var canvas = document.getElementById("testgltextureCanvas");
	     var ctx = canvas.getContext("2d");
	     ctx.font = textHeight+"px "+fontFamily;
             canvasX = 1;
             var widths = [];
	     for (var i = 0; i < text.length; i++)  {
	       widths[i] = ctx.measureText(text[i]).width;
	       canvasX = (widths[i] > canvasX) ? widths[i] : canvasX;
	     }	  
	     canvasX = getPowerOfTwo(canvasX);
	     var offset = 2*textHeight; // offset to first baseline
	     var skip = 2*textHeight;   // skip between baselines	  
	     canvasY = getPowerOfTwo(offset + text.length*skip);
	     canvas.width = canvasX;
	     canvas.height = canvasY;
	     ctx.fillStyle = backgroundColour;
	     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	     ctx.fillStyle = textColour;
	     ctx.textAlign = "left";
	     ctx.textBaseline = "alphabetic";
	     ctx.font = textHeight+"px "+fontFamily;
	     for(var i = 0; i < text.length; i++) {
	       textY = i*skip + offset;
	       ctx.fillText(text[i], 0,  textY);
	     }
	     return {canvasX:canvasX, canvasY:canvasY,
	             widths:widths, textHeight:textHeight,
	             offset:offset, skip:skip};
	   }
	   // ****** points object 6 ******
	   var prog6  = gl.createProgram();
	   gl.attachShader(prog6, getShader( gl, "testglvshader6" ));
	   gl.attachShader(prog6, getShader( gl, "testglfshader6" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog6, 0, "aPos");
	   gl.bindAttribLocation(prog6, 1, "aCol");
	   gl.linkProgram(prog6);
	   var v=new Float32Array([
	    -3.998835, 0.4756167, -1.50384, 1, 0, 0, 1,
	    -3.354356, 0.4627886, -1.891131, 1, 0.007843138, 0, 1,
	    -3.233011, -0.9120067, -2.456015, 1, 0.01176471, 0, 1,
	    -2.699109, 1.159742, 0.3272295, 1, 0.01960784, 0, 1,
	    -2.57738, 1.904449, -0.4486269, 1, 0.02352941, 0, 1,
	    -2.521095, 0.6483721, -1.040742, 1, 0.03137255, 0, 1,
	    -2.507653, 0.8636339, -0.1189681, 1, 0.03529412, 0, 1,
	    -2.411099, 1.053252, -1.709367, 1, 0.04313726, 0, 1,
	    -2.3729, -1.33397, -2.188672, 1, 0.04705882, 0, 1,
	    -2.308217, 1.508924, -0.8153713, 1, 0.05490196, 0, 1,
	    -2.288406, -1.490022, -2.817659, 1, 0.05882353, 0, 1,
	    -2.274192, 0.9729351, -1.823353, 1, 0.06666667, 0, 1,
	    -2.199142, 0.6957989, 0.1609983, 1, 0.07058824, 0, 1,
	    -2.154921, -0.8483132, -1.060351, 1, 0.07843138, 0, 1,
	    -2.141973, 1.296765, -2.436279, 1, 0.08235294, 0, 1,
	    -2.135422, 1.235178, -1.682524, 1, 0.09019608, 0, 1,
	    -2.124817, -1.329175, -3.426006, 1, 0.09411765, 0, 1,
	    -2.122883, 1.197425, 0.1838792, 1, 0.1019608, 0, 1,
	    -2.117996, -1.092068, -3.41262, 1, 0.1098039, 0, 1,
	    -2.094806, 0.7043624, -1.529737, 1, 0.1137255, 0, 1,
	    -2.080141, -0.9586543, -1.872499, 1, 0.1215686, 0, 1,
	    -2.041946, 1.738261, -1.586786, 1, 0.1254902, 0, 1,
	    -2.028774, 0.9170233, -2.215281, 1, 0.1333333, 0, 1,
	    -2.028688, 0.3004223, -2.224553, 1, 0.1372549, 0, 1,
	    -2.026391, -0.3335257, -1.578184, 1, 0.145098, 0, 1,
	    -2.02069, 1.703732, -2.759213, 1, 0.1490196, 0, 1,
	    -2.000593, -0.345854, -1.224546, 1, 0.1568628, 0, 1,
	    -1.96079, -1.435091, -2.412371, 1, 0.1607843, 0, 1,
	    -1.950521, -0.6017769, -1.322202, 1, 0.1686275, 0, 1,
	    -1.948586, -0.9790844, -1.965003, 1, 0.172549, 0, 1,
	    -1.940476, 0.7813404, 0.3605189, 1, 0.1803922, 0, 1,
	    -1.934352, -0.3770698, -1.729502, 1, 0.1843137, 0, 1,
	    -1.932542, 0.4892179, -0.2767436, 1, 0.1921569, 0, 1,
	    -1.92305, -0.1806518, -0.494186, 1, 0.1960784, 0, 1,
	    -1.916848, 1.161833, 1.613326, 1, 0.2039216, 0, 1,
	    -1.887522, 0.1565817, -0.1335474, 1, 0.2117647, 0, 1,
	    -1.878998, -1.348702, -1.653696, 1, 0.2156863, 0, 1,
	    -1.772487, 0.1443207, -1.513854, 1, 0.2235294, 0, 1,
	    -1.763277, 0.09042832, -1.865484, 1, 0.227451, 0, 1,
	    -1.752275, 0.6954814, -1.220656, 1, 0.2352941, 0, 1,
	    -1.740047, 0.8670046, 0.07479614, 1, 0.2392157, 0, 1,
	    -1.723856, 0.09598137, -1.925191, 1, 0.2470588, 0, 1,
	    -1.713123, 0.6887092, -1.189538, 1, 0.2509804, 0, 1,
	    -1.704101, -1.551939, -1.404377, 1, 0.2588235, 0, 1,
	    -1.690211, -0.04448744, -2.213013, 1, 0.2627451, 0, 1,
	    -1.678473, -0.3078732, -0.2015445, 1, 0.2705882, 0, 1,
	    -1.654984, -0.6495697, -1.498259, 1, 0.2745098, 0, 1,
	    -1.648595, 1.433706, 0.3133396, 1, 0.282353, 0, 1,
	    -1.642846, 1.479145, -1.752013, 1, 0.2862745, 0, 1,
	    -1.63939, -1.629681, -2.474679, 1, 0.2941177, 0, 1,
	    -1.637486, 2.197849, -0.04047839, 1, 0.3019608, 0, 1,
	    -1.636202, 1.238331, -0.3923968, 1, 0.3058824, 0, 1,
	    -1.626578, 1.865847, 0.6099989, 1, 0.3137255, 0, 1,
	    -1.60295, -1.459284, -2.959229, 1, 0.3176471, 0, 1,
	    -1.593554, 0.4819564, -2.348176, 1, 0.3254902, 0, 1,
	    -1.568217, -0.578196, -1.533682, 1, 0.3294118, 0, 1,
	    -1.563041, 0.7572918, -1.881217, 1, 0.3372549, 0, 1,
	    -1.550833, 0.4728961, -1.81657, 1, 0.3411765, 0, 1,
	    -1.543043, 2.665935, -0.6587059, 1, 0.3490196, 0, 1,
	    -1.540008, 0.6874573, -1.34557, 1, 0.3529412, 0, 1,
	    -1.531785, -0.960382, -0.9039752, 1, 0.3607843, 0, 1,
	    -1.528818, 0.4505369, -0.8078592, 1, 0.3647059, 0, 1,
	    -1.518337, -0.8778914, -1.231327, 1, 0.372549, 0, 1,
	    -1.506673, 1.060888, -0.6386978, 1, 0.3764706, 0, 1,
	    -1.502993, 0.5303551, -0.8683051, 1, 0.3843137, 0, 1,
	    -1.49875, 0.7109267, -1.053558, 1, 0.3882353, 0, 1,
	    -1.497463, 0.3971699, -1.874771, 1, 0.3960784, 0, 1,
	    -1.49525, -0.8873225, -4.429776, 1, 0.4039216, 0, 1,
	    -1.487223, -0.7007358, -0.4382137, 1, 0.4078431, 0, 1,
	    -1.48516, 0.08796857, -1.609408, 1, 0.4156863, 0, 1,
	    -1.480575, -0.798444, -1.139596, 1, 0.4196078, 0, 1,
	    -1.459476, -1.253435, -3.831606, 1, 0.427451, 0, 1,
	    -1.452152, 1.557685, -1.719964, 1, 0.4313726, 0, 1,
	    -1.451858, 0.6294629, -0.8524933, 1, 0.4392157, 0, 1,
	    -1.449287, -0.9291465, -3.193822, 1, 0.4431373, 0, 1,
	    -1.447995, 0.6912465, 0.05401697, 1, 0.4509804, 0, 1,
	    -1.438952, 0.1656222, -2.857564, 1, 0.454902, 0, 1,
	    -1.421019, 0.2842275, -2.467238, 1, 0.4627451, 0, 1,
	    -1.415723, 1.039105, -0.742302, 1, 0.4666667, 0, 1,
	    -1.408373, 0.4867861, -0.169513, 1, 0.4745098, 0, 1,
	    -1.406428, 0.02088465, -2.129964, 1, 0.4784314, 0, 1,
	    -1.380804, -0.6831181, -2.061788, 1, 0.4862745, 0, 1,
	    -1.37486, -0.2166876, -1.044428, 1, 0.4901961, 0, 1,
	    -1.355543, -0.1862369, -1.82261, 1, 0.4980392, 0, 1,
	    -1.349855, -0.1734984, -2.737685, 1, 0.5058824, 0, 1,
	    -1.347283, 1.864082, 1.245974, 1, 0.509804, 0, 1,
	    -1.334099, -1.954541, -2.71737, 1, 0.5176471, 0, 1,
	    -1.330988, -1.389412, -2.604285, 1, 0.5215687, 0, 1,
	    -1.326446, 0.4301161, -2.186925, 1, 0.5294118, 0, 1,
	    -1.322852, 1.403253, -0.1323654, 1, 0.5333334, 0, 1,
	    -1.322758, 0.762037, -0.3064892, 1, 0.5411765, 0, 1,
	    -1.321034, -0.218222, -1.185691, 1, 0.5450981, 0, 1,
	    -1.320175, 0.9315469, -1.194399, 1, 0.5529412, 0, 1,
	    -1.317192, -3.558195, -2.939775, 1, 0.5568628, 0, 1,
	    -1.316037, 0.917637, -1.657318, 1, 0.5647059, 0, 1,
	    -1.314264, -1.374013, -4.497545, 1, 0.5686275, 0, 1,
	    -1.313808, 0.8910202, -2.482777, 1, 0.5764706, 0, 1,
	    -1.307347, -1.64786, -3.553313, 1, 0.5803922, 0, 1,
	    -1.30469, 0.36357, 0.2587533, 1, 0.5882353, 0, 1,
	    -1.288425, 0.6072425, -3.406284, 1, 0.5921569, 0, 1,
	    -1.276085, 0.4507999, 0.00102098, 1, 0.6, 0, 1,
	    -1.269214, 0.1318085, -1.530034, 1, 0.6078432, 0, 1,
	    -1.263513, -0.9553311, 0.4874185, 1, 0.6117647, 0, 1,
	    -1.259142, -0.01253031, 0.05014843, 1, 0.6196079, 0, 1,
	    -1.244649, -0.4101463, -1.679445, 1, 0.6235294, 0, 1,
	    -1.228696, -2.197662, -1.230536, 1, 0.6313726, 0, 1,
	    -1.22493, -0.751036, -1.403822, 1, 0.6352941, 0, 1,
	    -1.22401, 1.987626, 0.9666376, 1, 0.6431373, 0, 1,
	    -1.205426, -0.2699268, -2.182466, 1, 0.6470588, 0, 1,
	    -1.201416, 1.179686, -1.004395, 1, 0.654902, 0, 1,
	    -1.199716, -1.73612, -2.146112, 1, 0.6588235, 0, 1,
	    -1.197829, -0.002593753, -1.002904, 1, 0.6666667, 0, 1,
	    -1.188653, -0.8934964, -3.020125, 1, 0.6705883, 0, 1,
	    -1.184635, -0.07772129, 0.06274313, 1, 0.6784314, 0, 1,
	    -1.181354, -0.9867287, -1.46991, 1, 0.682353, 0, 1,
	    -1.178375, 0.8397238, -0.09136966, 1, 0.6901961, 0, 1,
	    -1.177171, 0.09717114, -0.9683872, 1, 0.6941177, 0, 1,
	    -1.175338, 0.790859, -0.4394424, 1, 0.7019608, 0, 1,
	    -1.173188, -1.221048, -0.287413, 1, 0.7098039, 0, 1,
	    -1.172238, 0.599445, -0.8461707, 1, 0.7137255, 0, 1,
	    -1.167562, -0.9413049, -3.746622, 1, 0.7215686, 0, 1,
	    -1.161791, 0.9714082, -0.7057688, 1, 0.7254902, 0, 1,
	    -1.157306, 0.1287532, -1.681274, 1, 0.7333333, 0, 1,
	    -1.152307, -0.4766769, -0.4816996, 1, 0.7372549, 0, 1,
	    -1.143906, -0.8976873, -2.4177, 1, 0.7450981, 0, 1,
	    -1.131371, 1.527055, -0.1141944, 1, 0.7490196, 0, 1,
	    -1.122717, -0.9453217, -3.288082, 1, 0.7568628, 0, 1,
	    -1.122006, 0.008549911, -2.09114, 1, 0.7607843, 0, 1,
	    -1.118144, 0.09611966, -0.3477979, 1, 0.7686275, 0, 1,
	    -1.116406, -0.1329922, -1.982611, 1, 0.772549, 0, 1,
	    -1.113651, -0.2026039, -2.348398, 1, 0.7803922, 0, 1,
	    -1.111524, 0.3140027, -3.130098, 1, 0.7843137, 0, 1,
	    -1.09812, 0.277678, -1.765961, 1, 0.7921569, 0, 1,
	    -1.093205, 0.3504685, -0.05497474, 1, 0.7960784, 0, 1,
	    -1.091088, 2.025728, -2.016317, 1, 0.8039216, 0, 1,
	    -1.088801, -1.575434, -1.020176, 1, 0.8117647, 0, 1,
	    -1.087187, -1.800555, -2.070439, 1, 0.8156863, 0, 1,
	    -1.084765, -1.379164, -1.622736, 1, 0.8235294, 0, 1,
	    -1.079157, -1.221346, -1.210442, 1, 0.827451, 0, 1,
	    -1.077926, -0.1309151, 0.1890512, 1, 0.8352941, 0, 1,
	    -1.07478, 0.5444211, -1.296288, 1, 0.8392157, 0, 1,
	    -1.066349, -1.328429, -2.079794, 1, 0.8470588, 0, 1,
	    -1.065925, -0.4866812, -2.643435, 1, 0.8509804, 0, 1,
	    -1.06204, 0.4596364, -1.067024, 1, 0.8588235, 0, 1,
	    -1.060477, 0.381119, -1.694866, 1, 0.8627451, 0, 1,
	    -1.054147, 0.1247424, 0.1469987, 1, 0.8705882, 0, 1,
	    -1.039459, -0.3844717, -2.036429, 1, 0.8745098, 0, 1,
	    -1.038477, 0.323154, -1.770998, 1, 0.8823529, 0, 1,
	    -1.037858, -1.934829, -4.09031, 1, 0.8862745, 0, 1,
	    -1.034517, 2.223986, -1.020246, 1, 0.8941177, 0, 1,
	    -1.032244, 0.1530689, -2.946604, 1, 0.8980392, 0, 1,
	    -1.030946, -0.8109283, -2.131781, 1, 0.9058824, 0, 1,
	    -1.030484, -1.831033, -0.6899591, 1, 0.9137255, 0, 1,
	    -1.030242, 1.002549, -0.1688416, 1, 0.9176471, 0, 1,
	    -1.028799, 0.2687712, -1.549581, 1, 0.9254902, 0, 1,
	    -1.020347, -0.8055138, -3.191567, 1, 0.9294118, 0, 1,
	    -1.016025, -0.5879369, -3.647283, 1, 0.9372549, 0, 1,
	    -1.01107, -0.4759359, -0.6605713, 1, 0.9411765, 0, 1,
	    -1.00923, -0.1683166, -1.160419, 1, 0.9490196, 0, 1,
	    -1.003527, 1.546084, -0.3638849, 1, 0.9529412, 0, 1,
	    -1.000768, 0.5099978, -2.603241, 1, 0.9607843, 0, 1,
	    -0.996049, -0.1087225, -0.6469148, 1, 0.9647059, 0, 1,
	    -0.9959191, -0.5135876, -1.863195, 1, 0.972549, 0, 1,
	    -0.989854, -0.9208605, -0.8732362, 1, 0.9764706, 0, 1,
	    -0.9862458, -1.606634, -2.147396, 1, 0.9843137, 0, 1,
	    -0.9846926, 1.138272, -1.213996, 1, 0.9882353, 0, 1,
	    -0.9839639, -0.1886105, -1.645326, 1, 0.9960784, 0, 1,
	    -0.9835212, -0.4015582, -2.193764, 0.9960784, 1, 0, 1,
	    -0.9764088, 0.5685756, -0.8302209, 0.9921569, 1, 0, 1,
	    -0.9748778, 0.3962319, -0.6713296, 0.9843137, 1, 0, 1,
	    -0.9743022, -1.350578, -1.704342, 0.9803922, 1, 0, 1,
	    -0.9652081, 0.0009229609, 0.1458832, 0.972549, 1, 0, 1,
	    -0.9613363, -0.7209201, -4.694839, 0.9686275, 1, 0, 1,
	    -0.9603637, -1.5114, -2.027161, 0.9607843, 1, 0, 1,
	    -0.9512272, -1.23619, -2.646053, 0.9568627, 1, 0, 1,
	    -0.9491221, -0.852038, -1.194076, 0.9490196, 1, 0, 1,
	    -0.9463066, 1.219077, -0.009565559, 0.945098, 1, 0, 1,
	    -0.9405649, 2.118021, 1.015286, 0.9372549, 1, 0, 1,
	    -0.9402155, 0.8249346, 0.9559093, 0.9333333, 1, 0, 1,
	    -0.9399787, 0.6505096, -0.2965903, 0.9254902, 1, 0, 1,
	    -0.9339921, 0.5110308, -4.326585, 0.9215686, 1, 0, 1,
	    -0.9333223, 1.787659, -0.2857049, 0.9137255, 1, 0, 1,
	    -0.9277675, 0.6323192, -1.18223, 0.9098039, 1, 0, 1,
	    -0.9186523, -0.1226973, -0.8460397, 0.9019608, 1, 0, 1,
	    -0.9170706, 0.7006359, 0.3306482, 0.8941177, 1, 0, 1,
	    -0.9164705, -0.81158, -2.467406, 0.8901961, 1, 0, 1,
	    -0.9119927, -0.7663493, -2.603815, 0.8823529, 1, 0, 1,
	    -0.9094052, -1.274137, -2.981443, 0.8784314, 1, 0, 1,
	    -0.9073469, -1.17153, -3.322323, 0.8705882, 1, 0, 1,
	    -0.9042126, 0.4016511, -0.9590843, 0.8666667, 1, 0, 1,
	    -0.8956966, 1.247754, -1.324734, 0.8588235, 1, 0, 1,
	    -0.88037, -1.504874, -4.657992, 0.854902, 1, 0, 1,
	    -0.8795739, 0.9138488, -1.772453, 0.8470588, 1, 0, 1,
	    -0.8770367, 1.454251, -0.5909192, 0.8431373, 1, 0, 1,
	    -0.8726424, 1.06614, -1.495066, 0.8352941, 1, 0, 1,
	    -0.867512, 0.549584, -1.127467, 0.8313726, 1, 0, 1,
	    -0.8638681, -1.163498, -1.03228, 0.8235294, 1, 0, 1,
	    -0.860034, -0.324535, -0.8848693, 0.8196079, 1, 0, 1,
	    -0.8596072, 0.6917596, -2.118155, 0.8117647, 1, 0, 1,
	    -0.8553898, 0.8040431, -0.4158687, 0.8078431, 1, 0, 1,
	    -0.8269675, 0.3234172, -1.066473, 0.8, 1, 0, 1,
	    -0.8250843, -0.3982288, -2.333805, 0.7921569, 1, 0, 1,
	    -0.8227994, -0.2982476, -2.230341, 0.7882353, 1, 0, 1,
	    -0.8207939, -0.7284874, -3.14122, 0.7803922, 1, 0, 1,
	    -0.8197035, -0.08883875, -0.1784009, 0.7764706, 1, 0, 1,
	    -0.819111, 0.5799074, -0.2634768, 0.7686275, 1, 0, 1,
	    -0.8088806, -0.2132251, -1.870861, 0.7647059, 1, 0, 1,
	    -0.8065533, -2.123044, -4.555886, 0.7568628, 1, 0, 1,
	    -0.8036991, 1.004338, -0.5378065, 0.7529412, 1, 0, 1,
	    -0.8004137, 0.454262, -0.2017106, 0.7450981, 1, 0, 1,
	    -0.796899, 0.7806376, 0.6937068, 0.7411765, 1, 0, 1,
	    -0.7941675, -0.4814875, -0.9134848, 0.7333333, 1, 0, 1,
	    -0.7903945, -0.7706606, -2.79083, 0.7294118, 1, 0, 1,
	    -0.7875563, 1.23105, -1.69242, 0.7215686, 1, 0, 1,
	    -0.7858244, -0.7795281, -2.79431, 0.7176471, 1, 0, 1,
	    -0.7853712, 0.6438236, -2.353543, 0.7098039, 1, 0, 1,
	    -0.7801105, 1.115193, 0.2199519, 0.7058824, 1, 0, 1,
	    -0.776193, 0.2948093, -1.470455, 0.6980392, 1, 0, 1,
	    -0.7742149, -1.546315, -2.711502, 0.6901961, 1, 0, 1,
	    -0.7642192, 0.8275118, -1.604838, 0.6862745, 1, 0, 1,
	    -0.7639898, 0.1872303, -0.6833903, 0.6784314, 1, 0, 1,
	    -0.7592869, 0.1592351, -2.434427, 0.6745098, 1, 0, 1,
	    -0.7590082, -0.3797653, -1.782009, 0.6666667, 1, 0, 1,
	    -0.7517895, -0.67701, -3.115098, 0.6627451, 1, 0, 1,
	    -0.7508768, 0.9917659, -0.9425829, 0.654902, 1, 0, 1,
	    -0.7485377, -0.8482654, -3.459503, 0.6509804, 1, 0, 1,
	    -0.7475539, -0.9423962, -3.52657, 0.6431373, 1, 0, 1,
	    -0.7447414, 0.5480802, -0.7119114, 0.6392157, 1, 0, 1,
	    -0.7444093, 0.7570661, 0.2591296, 0.6313726, 1, 0, 1,
	    -0.7439023, 0.8375726, -0.9629917, 0.627451, 1, 0, 1,
	    -0.732082, 1.955986, 0.7039273, 0.6196079, 1, 0, 1,
	    -0.729252, -1.174315, -4.294713, 0.6156863, 1, 0, 1,
	    -0.7271827, 0.2209511, -1.287532, 0.6078432, 1, 0, 1,
	    -0.7257335, -0.4663037, -3.569146, 0.6039216, 1, 0, 1,
	    -0.719505, -2.465167, -3.004272, 0.5960785, 1, 0, 1,
	    -0.7115883, 0.0121034, -1.741121, 0.5882353, 1, 0, 1,
	    -0.7089936, 0.8059649, -1.208316, 0.5843138, 1, 0, 1,
	    -0.7086752, 0.1035428, -1.222803, 0.5764706, 1, 0, 1,
	    -0.7025085, -0.1904677, -0.9527082, 0.572549, 1, 0, 1,
	    -0.6985832, -0.9134817, -2.541515, 0.5647059, 1, 0, 1,
	    -0.6952058, -1.165843, -2.882282, 0.5607843, 1, 0, 1,
	    -0.6879643, -0.6183936, -2.132524, 0.5529412, 1, 0, 1,
	    -0.6871287, -0.141582, -2.487363, 0.5490196, 1, 0, 1,
	    -0.6854135, 0.4646075, -2.916882, 0.5411765, 1, 0, 1,
	    -0.680598, 1.653983, -0.205442, 0.5372549, 1, 0, 1,
	    -0.6786178, -0.8673857, -2.188015, 0.5294118, 1, 0, 1,
	    -0.669386, -0.08602196, -1.415374, 0.5254902, 1, 0, 1,
	    -0.6670601, 0.1888685, -2.268064, 0.5176471, 1, 0, 1,
	    -0.6647519, 0.4723102, 0.696201, 0.5137255, 1, 0, 1,
	    -0.6619662, -0.7661017, 0.7337879, 0.5058824, 1, 0, 1,
	    -0.6602999, -1.998287, -3.87491, 0.5019608, 1, 0, 1,
	    -0.6529552, -2.108835, -4.207005, 0.4941176, 1, 0, 1,
	    -0.6489205, -0.8975639, -3.633098, 0.4862745, 1, 0, 1,
	    -0.6473718, 0.401383, -1.990044, 0.4823529, 1, 0, 1,
	    -0.6473056, 0.6428311, 0.6552591, 0.4745098, 1, 0, 1,
	    -0.6393318, -0.5542089, -1.63749, 0.4705882, 1, 0, 1,
	    -0.6352159, 1.82085, -0.1011766, 0.4627451, 1, 0, 1,
	    -0.6302297, -0.1423256, -0.6403371, 0.4588235, 1, 0, 1,
	    -0.6290426, -1.175153, -2.714886, 0.4509804, 1, 0, 1,
	    -0.6282862, -0.9946584, -1.996767, 0.4470588, 1, 0, 1,
	    -0.6277494, -1.036496, -3.599461, 0.4392157, 1, 0, 1,
	    -0.6266406, 1.589767, -1.60613, 0.4352941, 1, 0, 1,
	    -0.6231254, -0.688656, 0.09539011, 0.427451, 1, 0, 1,
	    -0.6198435, -0.6366067, -1.498967, 0.4235294, 1, 0, 1,
	    -0.6187819, 1.232849, -0.1346661, 0.4156863, 1, 0, 1,
	    -0.6186821, -1.36923, -2.323916, 0.4117647, 1, 0, 1,
	    -0.615525, -1.014391, -1.628151, 0.4039216, 1, 0, 1,
	    -0.6141177, -0.1875093, -1.701566, 0.3960784, 1, 0, 1,
	    -0.6069927, 0.3343116, -1.089324, 0.3921569, 1, 0, 1,
	    -0.599117, 0.4558233, -0.3793316, 0.3843137, 1, 0, 1,
	    -0.5967429, -0.6605514, -1.600045, 0.3803922, 1, 0, 1,
	    -0.5942642, 0.8458008, -0.6321215, 0.372549, 1, 0, 1,
	    -0.5886121, -0.4907069, -1.00199, 0.3686275, 1, 0, 1,
	    -0.5837278, -0.05947755, -0.9005325, 0.3607843, 1, 0, 1,
	    -0.5818227, -0.7481401, -1.332311, 0.3568628, 1, 0, 1,
	    -0.5775156, 0.2410055, -0.5554855, 0.3490196, 1, 0, 1,
	    -0.5769553, -0.1428218, -0.9558637, 0.345098, 1, 0, 1,
	    -0.5739721, 0.3893194, -1.901956, 0.3372549, 1, 0, 1,
	    -0.5720251, -0.2228541, -1.805908, 0.3333333, 1, 0, 1,
	    -0.5712969, 0.3367197, -2.646838, 0.3254902, 1, 0, 1,
	    -0.5660688, -1.904454, -2.112878, 0.3215686, 1, 0, 1,
	    -0.5588049, -0.2906063, -1.574418, 0.3137255, 1, 0, 1,
	    -0.5569629, 0.2987385, -2.88856, 0.3098039, 1, 0, 1,
	    -0.5562127, -1.7625, -3.603632, 0.3019608, 1, 0, 1,
	    -0.5550241, -1.593255, -1.88848, 0.2941177, 1, 0, 1,
	    -0.5542552, -0.8870599, -3.683763, 0.2901961, 1, 0, 1,
	    -0.5523621, 0.2879641, -1.644262, 0.282353, 1, 0, 1,
	    -0.5505449, 0.1679339, -0.3128994, 0.2784314, 1, 0, 1,
	    -0.54692, -1.068165, -3.773215, 0.2705882, 1, 0, 1,
	    -0.5442773, 0.8289842, -0.2724817, 0.2666667, 1, 0, 1,
	    -0.5406191, 0.9748931, -1.725624, 0.2588235, 1, 0, 1,
	    -0.5368227, 0.7237511, -1.448854, 0.254902, 1, 0, 1,
	    -0.5354574, -0.3675443, -1.806172, 0.2470588, 1, 0, 1,
	    -0.5342658, -0.432002, -2.542818, 0.2431373, 1, 0, 1,
	    -0.5302213, 0.3527345, -0.6617643, 0.2352941, 1, 0, 1,
	    -0.5295048, 1.3882, -1.234919, 0.2313726, 1, 0, 1,
	    -0.5285372, -0.8159202, -3.262075, 0.2235294, 1, 0, 1,
	    -0.527608, 0.6178858, 0.6411727, 0.2196078, 1, 0, 1,
	    -0.526206, 1.51526, -0.8574557, 0.2117647, 1, 0, 1,
	    -0.5244328, 0.6215577, -2.046153, 0.2078431, 1, 0, 1,
	    -0.5200266, 0.4280475, 1.744906, 0.2, 1, 0, 1,
	    -0.5143743, 0.2446206, 0.4136126, 0.1921569, 1, 0, 1,
	    -0.5121067, -0.3615655, -3.648298, 0.1882353, 1, 0, 1,
	    -0.510183, -0.9820456, -0.7600933, 0.1803922, 1, 0, 1,
	    -0.509786, 0.3384334, -2.48261, 0.1764706, 1, 0, 1,
	    -0.5042343, 0.2267041, -2.044887, 0.1686275, 1, 0, 1,
	    -0.5010273, -0.1473849, -1.112886, 0.1647059, 1, 0, 1,
	    -0.4985382, -2.251644, -2.952203, 0.1568628, 1, 0, 1,
	    -0.495776, -0.07504328, -1.680456, 0.1529412, 1, 0, 1,
	    -0.4949656, -0.1244584, -1.341469, 0.145098, 1, 0, 1,
	    -0.4949268, 0.3666735, 0.1241892, 0.1411765, 1, 0, 1,
	    -0.4940062, -0.8157191, -4.469174, 0.1333333, 1, 0, 1,
	    -0.4912581, -0.837175, -2.409386, 0.1294118, 1, 0, 1,
	    -0.4908692, 1.061699, -2.070864, 0.1215686, 1, 0, 1,
	    -0.4908051, 0.6252994, -0.6425754, 0.1176471, 1, 0, 1,
	    -0.4899113, 0.5868403, -0.855705, 0.1098039, 1, 0, 1,
	    -0.4897639, 0.04803325, -2.501627, 0.1058824, 1, 0, 1,
	    -0.4875941, 1.333361, -0.5008529, 0.09803922, 1, 0, 1,
	    -0.4872982, 0.6151235, 0.2778874, 0.09019608, 1, 0, 1,
	    -0.4872461, 0.1744729, -2.130831, 0.08627451, 1, 0, 1,
	    -0.484473, 1.452458, 0.1773628, 0.07843138, 1, 0, 1,
	    -0.4745723, 0.8840692, 0.08532446, 0.07450981, 1, 0, 1,
	    -0.4738092, -0.8671426, -2.921862, 0.06666667, 1, 0, 1,
	    -0.4732464, 0.03097159, -0.9389396, 0.0627451, 1, 0, 1,
	    -0.4718792, 0.1057235, -1.965338, 0.05490196, 1, 0, 1,
	    -0.4715121, 0.7903696, -1.579156, 0.05098039, 1, 0, 1,
	    -0.470228, 1.098666, -0.2263256, 0.04313726, 1, 0, 1,
	    -0.4688603, 0.05469823, 0.4965163, 0.03921569, 1, 0, 1,
	    -0.4672154, 1.064859, -0.7461706, 0.03137255, 1, 0, 1,
	    -0.4565254, -0.3615422, -1.623689, 0.02745098, 1, 0, 1,
	    -0.4552798, -0.7660054, -1.196327, 0.01960784, 1, 0, 1,
	    -0.4495531, -0.3524749, -1.447433, 0.01568628, 1, 0, 1,
	    -0.4476558, -0.669669, -2.125457, 0.007843138, 1, 0, 1,
	    -0.4469181, 0.4210316, -1.18593, 0.003921569, 1, 0, 1,
	    -0.4445488, 0.7028476, 0.6367318, 0, 1, 0.003921569, 1,
	    -0.4436289, 0.595564, -1.586359, 0, 1, 0.01176471, 1,
	    -0.4415309, -0.2581432, -0.8033014, 0, 1, 0.01568628, 1,
	    -0.440173, -0.4604675, -2.244442, 0, 1, 0.02352941, 1,
	    -0.4354132, -1.002864, -3.141145, 0, 1, 0.02745098, 1,
	    -0.4298713, -0.7611892, -4.06063, 0, 1, 0.03529412, 1,
	    -0.4289533, 0.06350171, -1.139268, 0, 1, 0.03921569, 1,
	    -0.423632, 0.971817, -0.3083318, 0, 1, 0.04705882, 1,
	    -0.4234539, -0.1276914, -0.1939295, 0, 1, 0.05098039, 1,
	    -0.4188428, -0.7120697, -3.979908, 0, 1, 0.05882353, 1,
	    -0.4188265, -0.08402806, -0.2571514, 0, 1, 0.0627451, 1,
	    -0.4127265, -0.3353742, -1.811244, 0, 1, 0.07058824, 1,
	    -0.4112833, -0.3916791, -2.369393, 0, 1, 0.07450981, 1,
	    -0.4099962, 1.753677, 1.402998, 0, 1, 0.08235294, 1,
	    -0.4077229, 0.1886121, -1.000848, 0, 1, 0.08627451, 1,
	    -0.4022694, -0.200195, -3.123958, 0, 1, 0.09411765, 1,
	    -0.4019508, -1.14848, -2.318368, 0, 1, 0.1019608, 1,
	    -0.3957047, 0.7707826, -0.7977277, 0, 1, 0.1058824, 1,
	    -0.3916101, 0.3018366, 0.3579727, 0, 1, 0.1137255, 1,
	    -0.3884273, -0.006201713, -2.298599, 0, 1, 0.1176471, 1,
	    -0.3870682, -1.076433, -3.113979, 0, 1, 0.1254902, 1,
	    -0.3847983, -0.4665345, -2.570143, 0, 1, 0.1294118, 1,
	    -0.3800504, 0.125704, -0.3203058, 0, 1, 0.1372549, 1,
	    -0.3799453, 0.3025299, -0.1456982, 0, 1, 0.1411765, 1,
	    -0.3736986, 0.6380935, 0.5664689, 0, 1, 0.1490196, 1,
	    -0.3720388, 0.4251644, 0.4441125, 0, 1, 0.1529412, 1,
	    -0.3659797, 0.5180696, 0.6149483, 0, 1, 0.1607843, 1,
	    -0.3616273, 0.1926391, -0.195354, 0, 1, 0.1647059, 1,
	    -0.3614116, 0.04783201, -0.6609454, 0, 1, 0.172549, 1,
	    -0.3607921, -0.7824535, -1.183194, 0, 1, 0.1764706, 1,
	    -0.3568718, -0.09046271, -2.697585, 0, 1, 0.1843137, 1,
	    -0.3564464, -0.1551652, -2.815573, 0, 1, 0.1882353, 1,
	    -0.3547733, 0.400111, 0.4876467, 0, 1, 0.1960784, 1,
	    -0.3527346, 0.2633501, -3.393657, 0, 1, 0.2039216, 1,
	    -0.3516744, -0.8243738, -3.688858, 0, 1, 0.2078431, 1,
	    -0.3515448, -0.5009212, -3.249027, 0, 1, 0.2156863, 1,
	    -0.349083, -1.139351, -1.580135, 0, 1, 0.2196078, 1,
	    -0.3469609, -0.1251066, -1.199831, 0, 1, 0.227451, 1,
	    -0.3408698, 0.6190875, -2.928519, 0, 1, 0.2313726, 1,
	    -0.340611, 0.05650184, -3.036892, 0, 1, 0.2392157, 1,
	    -0.3394032, 0.9634237, -0.3056039, 0, 1, 0.2431373, 1,
	    -0.3349442, -0.3708959, -1.867971, 0, 1, 0.2509804, 1,
	    -0.3311256, 0.02048614, -1.078071, 0, 1, 0.254902, 1,
	    -0.327833, -1.27944, -2.079478, 0, 1, 0.2627451, 1,
	    -0.3257235, -1.372307, -1.160021, 0, 1, 0.2666667, 1,
	    -0.3242637, 0.05566801, -1.800986, 0, 1, 0.2745098, 1,
	    -0.3205704, -1.067291, -2.683579, 0, 1, 0.2784314, 1,
	    -0.3193965, -1.314306, -0.8212696, 0, 1, 0.2862745, 1,
	    -0.3167508, -0.0506472, -0.2647827, 0, 1, 0.2901961, 1,
	    -0.3121367, 0.4741966, -0.386714, 0, 1, 0.2980392, 1,
	    -0.3089236, -1.216996, -2.300539, 0, 1, 0.3058824, 1,
	    -0.3035719, -0.3049635, -2.902063, 0, 1, 0.3098039, 1,
	    -0.3016445, -0.9232988, -2.88688, 0, 1, 0.3176471, 1,
	    -0.2983687, -2.283927, -3.554035, 0, 1, 0.3215686, 1,
	    -0.2971923, -0.7864445, -2.760582, 0, 1, 0.3294118, 1,
	    -0.2947074, 0.9409314, 0.7036923, 0, 1, 0.3333333, 1,
	    -0.2929698, 0.3536821, -2.518805, 0, 1, 0.3411765, 1,
	    -0.2923041, 0.3932557, 1.137437, 0, 1, 0.345098, 1,
	    -0.2916176, 0.5760255, -0.8576292, 0, 1, 0.3529412, 1,
	    -0.2910749, 0.281027, -0.5167827, 0, 1, 0.3568628, 1,
	    -0.2902738, -1.818429, -2.627692, 0, 1, 0.3647059, 1,
	    -0.2898569, -0.4773148, -3.362383, 0, 1, 0.3686275, 1,
	    -0.2881632, 0.4507442, -1.472263, 0, 1, 0.3764706, 1,
	    -0.2880477, 0.5902357, -0.1695667, 0, 1, 0.3803922, 1,
	    -0.2788271, -1.081571, -2.540785, 0, 1, 0.3882353, 1,
	    -0.2754551, 1.07548, -0.5204577, 0, 1, 0.3921569, 1,
	    -0.2688498, 0.2070604, -0.75927, 0, 1, 0.4, 1,
	    -0.2684231, -0.5775607, -2.64278, 0, 1, 0.4078431, 1,
	    -0.2663451, -0.7517116, -3.033278, 0, 1, 0.4117647, 1,
	    -0.2610216, 0.2532382, -0.3478899, 0, 1, 0.4196078, 1,
	    -0.2609205, -0.568789, -1.752228, 0, 1, 0.4235294, 1,
	    -0.2570906, -0.4370929, -0.6480781, 0, 1, 0.4313726, 1,
	    -0.2545815, -0.7437309, -1.860377, 0, 1, 0.4352941, 1,
	    -0.2535372, 0.1883706, 0.4365857, 0, 1, 0.4431373, 1,
	    -0.2514817, 0.606079, 0.02656757, 0, 1, 0.4470588, 1,
	    -0.2512981, -1.029439, -3.934783, 0, 1, 0.454902, 1,
	    -0.2452401, -2.661159, -2.591077, 0, 1, 0.4588235, 1,
	    -0.2445733, 1.496552, -0.4729926, 0, 1, 0.4666667, 1,
	    -0.2429502, -0.2070664, -2.350818, 0, 1, 0.4705882, 1,
	    -0.2420499, -0.7523535, -2.424015, 0, 1, 0.4784314, 1,
	    -0.2407864, 1.181005, -2.066747, 0, 1, 0.4823529, 1,
	    -0.2399978, 0.3277731, -1.052885, 0, 1, 0.4901961, 1,
	    -0.2390267, -0.8078415, -3.38439, 0, 1, 0.4941176, 1,
	    -0.2383353, -0.9584705, -2.236512, 0, 1, 0.5019608, 1,
	    -0.2301135, 1.878803, 1.598122, 0, 1, 0.509804, 1,
	    -0.2289865, 0.3487904, -0.1180261, 0, 1, 0.5137255, 1,
	    -0.2238225, -1.25248, -2.192066, 0, 1, 0.5215687, 1,
	    -0.2225662, 1.243979, -0.7763209, 0, 1, 0.5254902, 1,
	    -0.2050494, 0.6861752, -0.7650554, 0, 1, 0.5333334, 1,
	    -0.20389, 1.331261, -0.4753955, 0, 1, 0.5372549, 1,
	    -0.2036275, 0.2891712, 1.215314, 0, 1, 0.5450981, 1,
	    -0.198788, -0.8590751, -3.551712, 0, 1, 0.5490196, 1,
	    -0.1980611, 0.1732231, -0.614825, 0, 1, 0.5568628, 1,
	    -0.1943984, -1.763501, -3.983979, 0, 1, 0.5607843, 1,
	    -0.1938298, -1.660468, -3.346689, 0, 1, 0.5686275, 1,
	    -0.1925604, 0.5082006, -0.1432102, 0, 1, 0.572549, 1,
	    -0.1899963, 0.04823166, -2.965636, 0, 1, 0.5803922, 1,
	    -0.1898337, -0.4888049, -3.963883, 0, 1, 0.5843138, 1,
	    -0.1875064, 0.0575327, -1.853058, 0, 1, 0.5921569, 1,
	    -0.1873664, -0.2966177, -3.579492, 0, 1, 0.5960785, 1,
	    -0.1824637, -0.377754, -2.830799, 0, 1, 0.6039216, 1,
	    -0.1819371, 0.7569812, 0.658546, 0, 1, 0.6117647, 1,
	    -0.181788, -0.04043304, -1.332926, 0, 1, 0.6156863, 1,
	    -0.1816759, -0.2304395, -2.517892, 0, 1, 0.6235294, 1,
	    -0.1718594, -2.246135, -3.819527, 0, 1, 0.627451, 1,
	    -0.1679303, 0.5625443, -0.4684216, 0, 1, 0.6352941, 1,
	    -0.1624351, -0.2968321, -2.572887, 0, 1, 0.6392157, 1,
	    -0.1620965, -0.2972088, -2.901297, 0, 1, 0.6470588, 1,
	    -0.1604911, 1.15406, 0.330713, 0, 1, 0.6509804, 1,
	    -0.160479, 1.58685, -0.8960556, 0, 1, 0.6588235, 1,
	    -0.1547304, -0.3801995, -1.755657, 0, 1, 0.6627451, 1,
	    -0.1518512, -1.065371, -3.222351, 0, 1, 0.6705883, 1,
	    -0.1507942, 0.1902918, 0.6403812, 0, 1, 0.6745098, 1,
	    -0.1468825, -0.8615491, -4.621433, 0, 1, 0.682353, 1,
	    -0.1459237, 0.5223686, 0.1357112, 0, 1, 0.6862745, 1,
	    -0.1428797, 0.4407686, -0.11834, 0, 1, 0.6941177, 1,
	    -0.1414293, 0.1738721, -1.673045, 0, 1, 0.7019608, 1,
	    -0.1412773, -0.326283, -1.331649, 0, 1, 0.7058824, 1,
	    -0.1407757, -0.2191799, -2.587632, 0, 1, 0.7137255, 1,
	    -0.1396704, 0.2211823, -0.1628376, 0, 1, 0.7176471, 1,
	    -0.1394563, 1.033605, 0.1783913, 0, 1, 0.7254902, 1,
	    -0.1373091, 0.1646, -1.344405, 0, 1, 0.7294118, 1,
	    -0.1358061, 2.445069, 1.083586, 0, 1, 0.7372549, 1,
	    -0.1343645, -0.2231711, -2.270866, 0, 1, 0.7411765, 1,
	    -0.1334692, 0.3716847, 1.09723, 0, 1, 0.7490196, 1,
	    -0.132082, -0.4241348, -2.052153, 0, 1, 0.7529412, 1,
	    -0.1297411, -0.8291817, -3.307062, 0, 1, 0.7607843, 1,
	    -0.125715, -0.03882347, -2.179362, 0, 1, 0.7647059, 1,
	    -0.1234543, -0.6393053, -2.841505, 0, 1, 0.772549, 1,
	    -0.1226742, -0.4160726, -1.43618, 0, 1, 0.7764706, 1,
	    -0.1212438, 0.10204, 0.2081393, 0, 1, 0.7843137, 1,
	    -0.1198901, 0.07863542, -0.2738501, 0, 1, 0.7882353, 1,
	    -0.1190033, 1.973771, 0.4113823, 0, 1, 0.7960784, 1,
	    -0.1169872, 0.6126502, 0.9123923, 0, 1, 0.8039216, 1,
	    -0.1162532, 1.638234, 1.181936, 0, 1, 0.8078431, 1,
	    -0.1149191, -0.2867657, -3.013209, 0, 1, 0.8156863, 1,
	    -0.1090632, -0.03447727, -2.544782, 0, 1, 0.8196079, 1,
	    -0.1074785, -0.9935797, -3.100522, 0, 1, 0.827451, 1,
	    -0.1061524, -0.5953528, -2.21782, 0, 1, 0.8313726, 1,
	    -0.105753, -0.4587476, -3.052068, 0, 1, 0.8392157, 1,
	    -0.1004055, -1.246785, -3.691644, 0, 1, 0.8431373, 1,
	    -0.09687849, -0.8671921, -2.879574, 0, 1, 0.8509804, 1,
	    -0.09374351, 0.9258891, 0.7028379, 0, 1, 0.854902, 1,
	    -0.09348737, -0.308759, -3.821288, 0, 1, 0.8627451, 1,
	    -0.09339567, -0.1439703, -4.541443, 0, 1, 0.8666667, 1,
	    -0.09076899, -0.8227425, -4.314393, 0, 1, 0.8745098, 1,
	    -0.08857731, 0.4326437, -0.01612325, 0, 1, 0.8784314, 1,
	    -0.0814992, 2.521581, -0.09336483, 0, 1, 0.8862745, 1,
	    -0.07977479, -0.9761323, -1.193697, 0, 1, 0.8901961, 1,
	    -0.07885272, 1.776551, -1.868937, 0, 1, 0.8980392, 1,
	    -0.0753233, 0.4299689, 0.2576518, 0, 1, 0.9058824, 1,
	    -0.07481346, 1.390401, -0.7201103, 0, 1, 0.9098039, 1,
	    -0.07175596, 0.5667062, 0.5171503, 0, 1, 0.9176471, 1,
	    -0.07030001, -0.6224939, -3.77989, 0, 1, 0.9215686, 1,
	    -0.0679475, -1.00071, -3.058771, 0, 1, 0.9294118, 1,
	    -0.0659917, 1.590033, 0.5510191, 0, 1, 0.9333333, 1,
	    -0.06548626, -1.384027, -1.706358, 0, 1, 0.9411765, 1,
	    -0.06426627, -2.12262, -4.714455, 0, 1, 0.945098, 1,
	    -0.06396454, 1.399688, -0.03657382, 0, 1, 0.9529412, 1,
	    -0.06311785, 0.6374504, -0.4369481, 0, 1, 0.9568627, 1,
	    -0.05966827, -0.2053916, -2.726631, 0, 1, 0.9647059, 1,
	    -0.05904575, 1.613509, -1.86992, 0, 1, 0.9686275, 1,
	    -0.05645837, 1.940326, 0.5827479, 0, 1, 0.9764706, 1,
	    -0.05538879, -0.3131399, -2.887522, 0, 1, 0.9803922, 1,
	    -0.0552155, 1.026806, 1.714554, 0, 1, 0.9882353, 1,
	    -0.05250217, -0.5915078, -3.059032, 0, 1, 0.9921569, 1,
	    -0.05025564, -0.8650759, -4.324478, 0, 1, 1, 1,
	    -0.04503326, -0.3206886, -2.759331, 0, 0.9921569, 1, 1,
	    -0.04061237, 0.3033975, -0.4707761, 0, 0.9882353, 1, 1,
	    -0.03957047, -0.3597743, -2.724754, 0, 0.9803922, 1, 1,
	    -0.03501554, -0.2059992, -2.634249, 0, 0.9764706, 1, 1,
	    -0.03267621, -1.048808, -4.991176, 0, 0.9686275, 1, 1,
	    -0.02174625, 1.237596, -0.2612084, 0, 0.9647059, 1, 1,
	    -0.01976701, -1.752075, -2.663816, 0, 0.9568627, 1, 1,
	    -0.01717979, 1.795461, 0.006542206, 0, 0.9529412, 1, 1,
	    -0.01697046, 0.140597, 1.793074, 0, 0.945098, 1, 1,
	    -0.01529772, -0.5743828, -3.276433, 0, 0.9411765, 1, 1,
	    -0.007245257, 0.551379, -0.5155928, 0, 0.9333333, 1, 1,
	    -0.005782667, 0.5262322, -1.042586, 0, 0.9294118, 1, 1,
	    -0.003040353, 0.5628079, 1.422405, 0, 0.9215686, 1, 1,
	    -0.002142744, -1.181828, -3.494091, 0, 0.9176471, 1, 1,
	    -0.001541656, 1.262116, -0.4394333, 0, 0.9098039, 1, 1,
	    0.005009254, -1.275972, 4.403273, 0, 0.9058824, 1, 1,
	    0.007652478, -0.3711606, 3.377738, 0, 0.8980392, 1, 1,
	    0.007988831, 0.2361674, 0.6515017, 0, 0.8901961, 1, 1,
	    0.009830674, 0.1162045, -0.7481293, 0, 0.8862745, 1, 1,
	    0.01662314, 0.5564957, 1.459184, 0, 0.8784314, 1, 1,
	    0.01745096, 1.294071, 0.951364, 0, 0.8745098, 1, 1,
	    0.01809894, 0.1238911, -1.480837, 0, 0.8666667, 1, 1,
	    0.02136844, 0.9607835, 0.9952886, 0, 0.8627451, 1, 1,
	    0.02523702, -1.010808, 3.534244, 0, 0.854902, 1, 1,
	    0.02938387, -0.8811823, 2.644184, 0, 0.8509804, 1, 1,
	    0.03174688, -1.450284, 3.438396, 0, 0.8431373, 1, 1,
	    0.03583021, 0.07721636, -1.017668, 0, 0.8392157, 1, 1,
	    0.03693986, -0.6079612, 3.365865, 0, 0.8313726, 1, 1,
	    0.03722774, -1.46816, 3.258696, 0, 0.827451, 1, 1,
	    0.0430055, 0.9361801, 1.464213, 0, 0.8196079, 1, 1,
	    0.05607637, 2.253305, -0.1537804, 0, 0.8156863, 1, 1,
	    0.05684977, -0.9079648, 1.255359, 0, 0.8078431, 1, 1,
	    0.05930739, 0.0341027, 1.235516, 0, 0.8039216, 1, 1,
	    0.06418134, -0.04574206, 2.064312, 0, 0.7960784, 1, 1,
	    0.06859617, 0.2167643, 0.06190769, 0, 0.7882353, 1, 1,
	    0.07048857, 1.019704, 1.202277, 0, 0.7843137, 1, 1,
	    0.07361509, -0.445902, 2.346889, 0, 0.7764706, 1, 1,
	    0.08193184, -1.997582, 4.723483, 0, 0.772549, 1, 1,
	    0.0823429, -0.2859987, 3.724787, 0, 0.7647059, 1, 1,
	    0.08277977, -0.4308493, 2.912383, 0, 0.7607843, 1, 1,
	    0.08317873, 0.7102396, -0.5246876, 0, 0.7529412, 1, 1,
	    0.08620121, -0.2615497, 0.2822394, 0, 0.7490196, 1, 1,
	    0.08752272, -1.071907, 2.823097, 0, 0.7411765, 1, 1,
	    0.0885137, 0.1240329, 0.7507915, 0, 0.7372549, 1, 1,
	    0.09143793, -0.8862687, 3.63475, 0, 0.7294118, 1, 1,
	    0.09877416, -1.091099, 3.303291, 0, 0.7254902, 1, 1,
	    0.1009104, -0.6394328, 2.678334, 0, 0.7176471, 1, 1,
	    0.1014586, 0.3193609, -0.2112945, 0, 0.7137255, 1, 1,
	    0.1062127, -2.062894, 2.982055, 0, 0.7058824, 1, 1,
	    0.1069307, 2.213657, 0.5976412, 0, 0.6980392, 1, 1,
	    0.1072714, 0.8739986, 0.3713494, 0, 0.6941177, 1, 1,
	    0.1086352, -0.5296345, 1.777619, 0, 0.6862745, 1, 1,
	    0.1175144, -1.049302, 3.041463, 0, 0.682353, 1, 1,
	    0.1181667, 1.148649, -1.308114, 0, 0.6745098, 1, 1,
	    0.1196718, -1.850292, 3.474305, 0, 0.6705883, 1, 1,
	    0.1237652, -0.304509, 2.973044, 0, 0.6627451, 1, 1,
	    0.1256646, 0.2959132, 0.9043145, 0, 0.6588235, 1, 1,
	    0.1272304, 0.44136, 0.4098749, 0, 0.6509804, 1, 1,
	    0.1305581, -0.2906688, 1.225304, 0, 0.6470588, 1, 1,
	    0.136652, -0.6191372, 4.244399, 0, 0.6392157, 1, 1,
	    0.1384566, -1.695461, 2.980651, 0, 0.6352941, 1, 1,
	    0.1392456, 0.4534185, 0.6119745, 0, 0.627451, 1, 1,
	    0.1407143, 0.7279412, -1.101962, 0, 0.6235294, 1, 1,
	    0.1414195, -1.020974, 3.134645, 0, 0.6156863, 1, 1,
	    0.1422603, 1.339288, -0.817419, 0, 0.6117647, 1, 1,
	    0.1461586, -1.087928, 1.901361, 0, 0.6039216, 1, 1,
	    0.1467438, -0.07259023, 3.142415, 0, 0.5960785, 1, 1,
	    0.1480929, -0.8301325, 1.800932, 0, 0.5921569, 1, 1,
	    0.1498509, -2.456095, 3.483951, 0, 0.5843138, 1, 1,
	    0.150647, -0.6180661, 1.734589, 0, 0.5803922, 1, 1,
	    0.1535529, -0.3877103, 2.299596, 0, 0.572549, 1, 1,
	    0.1537073, 0.0371928, 0.5020992, 0, 0.5686275, 1, 1,
	    0.1555192, 0.9750088, 1.825178, 0, 0.5607843, 1, 1,
	    0.1559099, 1.033981, 2.163945, 0, 0.5568628, 1, 1,
	    0.1594155, 0.8863648, -1.301406, 0, 0.5490196, 1, 1,
	    0.1602131, -0.4651787, 2.064093, 0, 0.5450981, 1, 1,
	    0.1640002, -1.221838, 1.346864, 0, 0.5372549, 1, 1,
	    0.1643639, 0.3782846, -0.5096468, 0, 0.5333334, 1, 1,
	    0.1678113, -1.86407, 4.852579, 0, 0.5254902, 1, 1,
	    0.1684151, 1.928379, -0.4974021, 0, 0.5215687, 1, 1,
	    0.1697867, -0.4589571, 1.833284, 0, 0.5137255, 1, 1,
	    0.1756498, -1.249504, 3.130716, 0, 0.509804, 1, 1,
	    0.1756552, -0.6575771, 2.738659, 0, 0.5019608, 1, 1,
	    0.1781859, 1.345568, -0.7866151, 0, 0.4941176, 1, 1,
	    0.1804828, 2.028613, 0.5050203, 0, 0.4901961, 1, 1,
	    0.1840572, -0.7366859, 5.03946, 0, 0.4823529, 1, 1,
	    0.1873497, 1.226965, 0.2978634, 0, 0.4784314, 1, 1,
	    0.1976677, -0.0605627, 1.484917, 0, 0.4705882, 1, 1,
	    0.2005992, -0.1348951, 3.490189, 0, 0.4666667, 1, 1,
	    0.2013451, 0.2660116, -0.0772127, 0, 0.4588235, 1, 1,
	    0.2026503, 1.020722, -0.4219937, 0, 0.454902, 1, 1,
	    0.2053936, 0.5336689, 1.320609, 0, 0.4470588, 1, 1,
	    0.2073506, 0.6671523, 1.993633, 0, 0.4431373, 1, 1,
	    0.2100282, -1.491528, 4.304352, 0, 0.4352941, 1, 1,
	    0.2109517, -0.5070684, 4.50585, 0, 0.4313726, 1, 1,
	    0.2159325, 0.9744656, 1.980327, 0, 0.4235294, 1, 1,
	    0.2176364, 0.8840459, 0.2868518, 0, 0.4196078, 1, 1,
	    0.2185594, -0.6960758, 4.597087, 0, 0.4117647, 1, 1,
	    0.2208684, -0.1030598, 3.711242, 0, 0.4078431, 1, 1,
	    0.2216067, -0.9664368, 1.851887, 0, 0.4, 1, 1,
	    0.2257089, 0.4508068, -0.1415499, 0, 0.3921569, 1, 1,
	    0.2257232, -0.1906585, 2.156029, 0, 0.3882353, 1, 1,
	    0.2288747, -0.08616196, 2.286791, 0, 0.3803922, 1, 1,
	    0.2293178, 0.7613361, -1.031632, 0, 0.3764706, 1, 1,
	    0.2322689, 0.3346943, 2.010217, 0, 0.3686275, 1, 1,
	    0.2345193, 0.1826824, 3.396511, 0, 0.3647059, 1, 1,
	    0.2359094, -0.7181873, 2.295732, 0, 0.3568628, 1, 1,
	    0.2474682, -0.553786, 2.491484, 0, 0.3529412, 1, 1,
	    0.2494874, 0.5046219, -0.6297817, 0, 0.345098, 1, 1,
	    0.2501128, 0.5391586, -0.1649133, 0, 0.3411765, 1, 1,
	    0.2540326, 0.6536853, 0.140113, 0, 0.3333333, 1, 1,
	    0.255868, 1.356918, 1.250125, 0, 0.3294118, 1, 1,
	    0.2577258, -1.626507, 3.859723, 0, 0.3215686, 1, 1,
	    0.2580737, 0.516429, -0.07060334, 0, 0.3176471, 1, 1,
	    0.2589182, -0.05033816, 2.556573, 0, 0.3098039, 1, 1,
	    0.2642071, -0.3102965, 2.250572, 0, 0.3058824, 1, 1,
	    0.2651487, 1.560936, 0.4108747, 0, 0.2980392, 1, 1,
	    0.2674464, -1.061339, 3.350983, 0, 0.2901961, 1, 1,
	    0.2700371, -0.2242566, 2.656496, 0, 0.2862745, 1, 1,
	    0.2723188, 0.2146991, 0.7590533, 0, 0.2784314, 1, 1,
	    0.2726648, -1.497986, 3.209047, 0, 0.2745098, 1, 1,
	    0.2727955, 0.3243451, 0.9340193, 0, 0.2666667, 1, 1,
	    0.2732735, -0.5363845, 2.430723, 0, 0.2627451, 1, 1,
	    0.2765895, 0.1479073, 2.401407, 0, 0.254902, 1, 1,
	    0.2769246, -0.391403, 2.487615, 0, 0.2509804, 1, 1,
	    0.2773858, -0.3962231, 1.993525, 0, 0.2431373, 1, 1,
	    0.2787569, 0.4871674, -0.4349826, 0, 0.2392157, 1, 1,
	    0.2800173, -0.5639167, 1.42925, 0, 0.2313726, 1, 1,
	    0.2822858, -1.600418, 3.396686, 0, 0.227451, 1, 1,
	    0.2828974, 1.918957, -0.7411522, 0, 0.2196078, 1, 1,
	    0.2843847, -0.4850634, 0.6321345, 0, 0.2156863, 1, 1,
	    0.2844456, 1.180139, 0.0524847, 0, 0.2078431, 1, 1,
	    0.2863168, -0.1009115, 0.4439414, 0, 0.2039216, 1, 1,
	    0.2865435, 0.9270963, 1.074617, 0, 0.1960784, 1, 1,
	    0.2869899, -1.460527, 3.889482, 0, 0.1882353, 1, 1,
	    0.2881636, -0.03486713, 2.730094, 0, 0.1843137, 1, 1,
	    0.2887218, 0.08534848, 1.937707, 0, 0.1764706, 1, 1,
	    0.2892939, -0.05926139, -0.004972152, 0, 0.172549, 1, 1,
	    0.294581, -0.5571779, 3.89461, 0, 0.1647059, 1, 1,
	    0.2964803, -1.632603, 4.80089, 0, 0.1607843, 1, 1,
	    0.2972667, 0.5980377, 1.113354, 0, 0.1529412, 1, 1,
	    0.2976735, 1.049113, 1.083823, 0, 0.1490196, 1, 1,
	    0.2977018, -1.531611, 2.202801, 0, 0.1411765, 1, 1,
	    0.2980084, -0.6041617, 2.53359, 0, 0.1372549, 1, 1,
	    0.2986861, 0.4019823, 1.111022, 0, 0.1294118, 1, 1,
	    0.2997657, -0.2773419, 3.630213, 0, 0.1254902, 1, 1,
	    0.3002684, -0.6594018, 1.853534, 0, 0.1176471, 1, 1,
	    0.3039248, -0.8174927, 2.924093, 0, 0.1137255, 1, 1,
	    0.3118824, -0.2103112, 1.710221, 0, 0.1058824, 1, 1,
	    0.313224, 0.3776606, -0.1904374, 0, 0.09803922, 1, 1,
	    0.3182295, 0.1582084, 0.5913842, 0, 0.09411765, 1, 1,
	    0.319181, 0.5127144, 1.609931, 0, 0.08627451, 1, 1,
	    0.322863, -0.05114459, 2.914829, 0, 0.08235294, 1, 1,
	    0.3430594, -0.3694037, 2.831609, 0, 0.07450981, 1, 1,
	    0.3461453, -2.136928, 2.841336, 0, 0.07058824, 1, 1,
	    0.3475072, -1.216826, 2.390996, 0, 0.0627451, 1, 1,
	    0.3560298, 1.879514, -0.02940057, 0, 0.05882353, 1, 1,
	    0.3647561, -0.1914723, 1.581786, 0, 0.05098039, 1, 1,
	    0.3661874, -2.669496, 5.346996, 0, 0.04705882, 1, 1,
	    0.3671302, 0.8891677, 1.581655, 0, 0.03921569, 1, 1,
	    0.3680348, 0.7706262, 1.582111, 0, 0.03529412, 1, 1,
	    0.3697558, -0.6185432, 3.167802, 0, 0.02745098, 1, 1,
	    0.3712116, -0.0760228, 2.000584, 0, 0.02352941, 1, 1,
	    0.3724301, -0.6732672, 3.349574, 0, 0.01568628, 1, 1,
	    0.3744387, 1.530065, -0.7641223, 0, 0.01176471, 1, 1,
	    0.380154, 1.215132, -1.089728, 0, 0.003921569, 1, 1,
	    0.3819374, 1.874731, 0.3227318, 0.003921569, 0, 1, 1,
	    0.3826497, 1.739924, 0.9943954, 0.007843138, 0, 1, 1,
	    0.3837189, 1.102488, 1.284895, 0.01568628, 0, 1, 1,
	    0.384359, -1.457705, 3.987477, 0.01960784, 0, 1, 1,
	    0.3846104, -0.4713116, 3.479168, 0.02745098, 0, 1, 1,
	    0.3855498, -0.4254299, 2.081897, 0.03137255, 0, 1, 1,
	    0.3863097, 0.1764868, 0.5202493, 0.03921569, 0, 1, 1,
	    0.3867765, -0.4079694, 1.362616, 0.04313726, 0, 1, 1,
	    0.3876168, 0.6492196, 0.7682841, 0.05098039, 0, 1, 1,
	    0.3940979, -1.761873, 3.646281, 0.05490196, 0, 1, 1,
	    0.3961433, 1.577877, 0.4882477, 0.0627451, 0, 1, 1,
	    0.3993793, -0.7610345, 2.163753, 0.06666667, 0, 1, 1,
	    0.4181329, 0.3676859, 0.2385976, 0.07450981, 0, 1, 1,
	    0.4215932, -1.045374, 2.328704, 0.07843138, 0, 1, 1,
	    0.4301798, 0.4607066, 0.7806138, 0.08627451, 0, 1, 1,
	    0.4304584, 1.846934, -0.2639694, 0.09019608, 0, 1, 1,
	    0.4378061, 0.7617922, 1.962478, 0.09803922, 0, 1, 1,
	    0.4394682, 0.7042457, 1.005084, 0.1058824, 0, 1, 1,
	    0.448639, -1.034033, 3.746394, 0.1098039, 0, 1, 1,
	    0.448783, 2.52486, 0.853712, 0.1176471, 0, 1, 1,
	    0.4494978, -1.546862, 1.059661, 0.1215686, 0, 1, 1,
	    0.449526, 0.06354698, 0.01408637, 0.1294118, 0, 1, 1,
	    0.4635654, 0.2829776, 1.007212, 0.1333333, 0, 1, 1,
	    0.4693761, -0.452717, 1.589665, 0.1411765, 0, 1, 1,
	    0.4705329, -0.3242662, 1.271022, 0.145098, 0, 1, 1,
	    0.4732942, -1.695406, 2.640512, 0.1529412, 0, 1, 1,
	    0.4748187, 0.7235153, 2.03687, 0.1568628, 0, 1, 1,
	    0.4803213, -0.6633638, 0.8226764, 0.1647059, 0, 1, 1,
	    0.4807689, 0.2181961, 1.622046, 0.1686275, 0, 1, 1,
	    0.4843401, 0.9054972, 0.4864416, 0.1764706, 0, 1, 1,
	    0.4903873, -0.5983077, 2.241981, 0.1803922, 0, 1, 1,
	    0.4914946, 0.6115448, 0.5614577, 0.1882353, 0, 1, 1,
	    0.4918553, -1.449513, 2.438278, 0.1921569, 0, 1, 1,
	    0.5026935, 0.5698428, 1.123611, 0.2, 0, 1, 1,
	    0.508584, -1.155823, 3.431719, 0.2078431, 0, 1, 1,
	    0.5111799, -0.6103102, 2.095685, 0.2117647, 0, 1, 1,
	    0.5203478, -0.08462023, 0.726823, 0.2196078, 0, 1, 1,
	    0.5232906, 1.273193, 0.3333665, 0.2235294, 0, 1, 1,
	    0.5261136, 0.5046172, -1.276916, 0.2313726, 0, 1, 1,
	    0.5269796, -0.2988941, 1.496598, 0.2352941, 0, 1, 1,
	    0.5280611, -1.63611, 3.043083, 0.2431373, 0, 1, 1,
	    0.5297539, 0.5253646, 0.9365657, 0.2470588, 0, 1, 1,
	    0.5309933, -1.110339, 1.364963, 0.254902, 0, 1, 1,
	    0.5340621, -0.5894441, 3.035259, 0.2588235, 0, 1, 1,
	    0.5391605, 0.7628613, -0.8229924, 0.2666667, 0, 1, 1,
	    0.5392061, 1.034915, -0.4565899, 0.2705882, 0, 1, 1,
	    0.5456967, -0.1073212, 0.4374423, 0.2784314, 0, 1, 1,
	    0.5481421, 1.937799, 1.655653, 0.282353, 0, 1, 1,
	    0.5532366, -1.423905, 2.41935, 0.2901961, 0, 1, 1,
	    0.5569791, -1.410103, 2.981778, 0.2941177, 0, 1, 1,
	    0.5626332, -0.3329458, 1.365271, 0.3019608, 0, 1, 1,
	    0.5629758, -1.003055, 1.404656, 0.3098039, 0, 1, 1,
	    0.5652135, -1.672043, 2.762846, 0.3137255, 0, 1, 1,
	    0.5670508, -0.2847401, 0.2084157, 0.3215686, 0, 1, 1,
	    0.5673585, 1.927912, -0.3075708, 0.3254902, 0, 1, 1,
	    0.5682846, -0.05409086, 1.882628, 0.3333333, 0, 1, 1,
	    0.5694651, 0.6156324, 2.394506, 0.3372549, 0, 1, 1,
	    0.5732983, -1.331758, 3.486939, 0.345098, 0, 1, 1,
	    0.5762741, -0.02754191, 1.243259, 0.3490196, 0, 1, 1,
	    0.5785505, -1.104267, 3.132346, 0.3568628, 0, 1, 1,
	    0.5860738, -1.337272, 2.076949, 0.3607843, 0, 1, 1,
	    0.59333, 0.2029265, 0.9546884, 0.3686275, 0, 1, 1,
	    0.5943264, -0.3554282, 0.8701656, 0.372549, 0, 1, 1,
	    0.5960995, 2.083097, 0.5194055, 0.3803922, 0, 1, 1,
	    0.5973568, -0.06720339, 1.062389, 0.3843137, 0, 1, 1,
	    0.5991269, -1.54418, 2.224082, 0.3921569, 0, 1, 1,
	    0.5991673, 0.0280105, 0.7009251, 0.3960784, 0, 1, 1,
	    0.6009794, 1.211603, 0.5947158, 0.4039216, 0, 1, 1,
	    0.6030559, 0.272595, -0.5049786, 0.4117647, 0, 1, 1,
	    0.6103045, 1.372286, 0.4087055, 0.4156863, 0, 1, 1,
	    0.6108792, -0.2838417, 6.059122, 0.4235294, 0, 1, 1,
	    0.6124398, -1.098156, 2.148206, 0.427451, 0, 1, 1,
	    0.6164135, 0.3532633, -0.5565214, 0.4352941, 0, 1, 1,
	    0.6202503, 0.3703443, 2.399536, 0.4392157, 0, 1, 1,
	    0.6257071, -0.08651888, 2.093575, 0.4470588, 0, 1, 1,
	    0.6260139, 0.5189733, 1.215347, 0.4509804, 0, 1, 1,
	    0.6323089, -0.4264268, 2.106415, 0.4588235, 0, 1, 1,
	    0.6334288, 2.958539, 2.087967, 0.4627451, 0, 1, 1,
	    0.6397676, -0.1873699, 2.503961, 0.4705882, 0, 1, 1,
	    0.6427999, 1.061499, -1.168133, 0.4745098, 0, 1, 1,
	    0.6437981, 1.247582, -0.9109572, 0.4823529, 0, 1, 1,
	    0.6460162, -1.625317, 2.458294, 0.4862745, 0, 1, 1,
	    0.6497735, -0.4780697, 1.939051, 0.4941176, 0, 1, 1,
	    0.6501786, 0.5367498, 1.672881, 0.5019608, 0, 1, 1,
	    0.6508256, -0.4195984, 2.591162, 0.5058824, 0, 1, 1,
	    0.6516772, 1.071235, 0.6219845, 0.5137255, 0, 1, 1,
	    0.6544936, 1.199241, -0.6057386, 0.5176471, 0, 1, 1,
	    0.6621898, -1.100891, 3.415129, 0.5254902, 0, 1, 1,
	    0.6631032, -1.23818, 2.911836, 0.5294118, 0, 1, 1,
	    0.6648039, 1.846738, -0.1639433, 0.5372549, 0, 1, 1,
	    0.6694607, -0.478112, 3.842143, 0.5411765, 0, 1, 1,
	    0.6704717, 1.263402, 0.4528213, 0.5490196, 0, 1, 1,
	    0.6721696, -0.05938465, 3.443283, 0.5529412, 0, 1, 1,
	    0.675714, -0.9671006, 1.923081, 0.5607843, 0, 1, 1,
	    0.6870726, -0.8213827, 2.090873, 0.5647059, 0, 1, 1,
	    0.6895994, 0.630401, 0.8085296, 0.572549, 0, 1, 1,
	    0.696564, -1.954846, 5.333453, 0.5764706, 0, 1, 1,
	    0.6987686, -1.038094, 2.49142, 0.5843138, 0, 1, 1,
	    0.7006246, 0.2020251, 1.11689, 0.5882353, 0, 1, 1,
	    0.7044346, 0.5304817, 0.7617678, 0.5960785, 0, 1, 1,
	    0.7070894, 2.43356, 0.3479561, 0.6039216, 0, 1, 1,
	    0.7087678, 0.3793191, 0.4296264, 0.6078432, 0, 1, 1,
	    0.7151329, 0.1240721, 4.215337, 0.6156863, 0, 1, 1,
	    0.7176871, 0.8704602, 0.2139952, 0.6196079, 0, 1, 1,
	    0.7213406, -3.000206, 3.494317, 0.627451, 0, 1, 1,
	    0.7297485, -0.04360093, 0.05083315, 0.6313726, 0, 1, 1,
	    0.7298334, -2.016442, 3.762402, 0.6392157, 0, 1, 1,
	    0.7314985, 1.104296, -0.8462298, 0.6431373, 0, 1, 1,
	    0.7396485, 2.058262, 0.9857491, 0.6509804, 0, 1, 1,
	    0.750782, -2.01106, 2.959182, 0.654902, 0, 1, 1,
	    0.7530801, 0.91681, 1.624264, 0.6627451, 0, 1, 1,
	    0.7551988, -1.726973, 4.074207, 0.6666667, 0, 1, 1,
	    0.7553277, -3.186899, 3.465811, 0.6745098, 0, 1, 1,
	    0.7557074, 0.5622098, 2.252918, 0.6784314, 0, 1, 1,
	    0.7586853, 0.6750956, -0.3444068, 0.6862745, 0, 1, 1,
	    0.7595315, 1.266579, 0.5249242, 0.6901961, 0, 1, 1,
	    0.7624458, -0.2301737, 1.187303, 0.6980392, 0, 1, 1,
	    0.7659473, -0.4830711, 1.467399, 0.7058824, 0, 1, 1,
	    0.7685, 0.2529522, 1.645509, 0.7098039, 0, 1, 1,
	    0.7687954, -1.204243, 3.78939, 0.7176471, 0, 1, 1,
	    0.7688737, -0.9010122, 3.80846, 0.7215686, 0, 1, 1,
	    0.7704169, 0.556046, 1.832215, 0.7294118, 0, 1, 1,
	    0.77306, 0.05271268, 2.330266, 0.7333333, 0, 1, 1,
	    0.7760271, -0.1419052, 2.041028, 0.7411765, 0, 1, 1,
	    0.7768952, 0.3685627, 0.4923618, 0.7450981, 0, 1, 1,
	    0.7785087, 1.406991, 0.5519251, 0.7529412, 0, 1, 1,
	    0.7929045, -0.1374728, 0.694719, 0.7568628, 0, 1, 1,
	    0.7980109, -2.374188, 2.930696, 0.7647059, 0, 1, 1,
	    0.8038713, 0.2639781, 1.391557, 0.7686275, 0, 1, 1,
	    0.8162707, -0.9025453, 3.070496, 0.7764706, 0, 1, 1,
	    0.8250446, -0.1183972, 3.092967, 0.7803922, 0, 1, 1,
	    0.8367755, -1.696192, 4.204968, 0.7882353, 0, 1, 1,
	    0.8441567, 0.1057375, 1.850773, 0.7921569, 0, 1, 1,
	    0.8490161, -1.666206, 2.710596, 0.8, 0, 1, 1,
	    0.8491229, 1.223004, -0.7143574, 0.8078431, 0, 1, 1,
	    0.8559744, 0.01806517, 1.42568, 0.8117647, 0, 1, 1,
	    0.8584239, 0.8090577, 0.6249683, 0.8196079, 0, 1, 1,
	    0.8595316, -0.3395194, 0.458952, 0.8235294, 0, 1, 1,
	    0.8665411, -0.6062661, 2.871837, 0.8313726, 0, 1, 1,
	    0.8715982, -0.6711544, 3.018918, 0.8352941, 0, 1, 1,
	    0.8722506, -0.1573101, 2.287946, 0.8431373, 0, 1, 1,
	    0.8744308, 1.805125, 0.1799339, 0.8470588, 0, 1, 1,
	    0.8812045, -0.1943534, -0.3901523, 0.854902, 0, 1, 1,
	    0.8845499, 0.1258266, -1.006374, 0.8588235, 0, 1, 1,
	    0.8845683, -1.196481, 1.952692, 0.8666667, 0, 1, 1,
	    0.8858367, -0.03591708, 1.125813, 0.8705882, 0, 1, 1,
	    0.8863279, 0.1570953, 0.626838, 0.8784314, 0, 1, 1,
	    0.8884975, 0.8257242, 1.395137, 0.8823529, 0, 1, 1,
	    0.89557, 2.163885, -1.549162, 0.8901961, 0, 1, 1,
	    0.8999541, 0.3237749, 1.980644, 0.8941177, 0, 1, 1,
	    0.9002802, 0.7518643, -0.02961407, 0.9019608, 0, 1, 1,
	    0.9003491, -0.03577019, 1.216392, 0.9098039, 0, 1, 1,
	    0.9004005, 0.1938262, 1.610361, 0.9137255, 0, 1, 1,
	    0.9148997, -0.0169636, 1.047165, 0.9215686, 0, 1, 1,
	    0.9155728, 0.2557101, 0.2382124, 0.9254902, 0, 1, 1,
	    0.916168, -1.068361, 3.932633, 0.9333333, 0, 1, 1,
	    0.9168375, 0.3978982, 1.828067, 0.9372549, 0, 1, 1,
	    0.9197406, -1.152667, 1.315855, 0.945098, 0, 1, 1,
	    0.9268842, 1.394397, -0.9386945, 0.9490196, 0, 1, 1,
	    0.940303, 1.178044, 2.082034, 0.9568627, 0, 1, 1,
	    0.9429089, -0.3404764, 0.4027267, 0.9607843, 0, 1, 1,
	    0.9438881, 0.2211551, 0.4563867, 0.9686275, 0, 1, 1,
	    0.9466125, 1.190345, -0.809212, 0.972549, 0, 1, 1,
	    0.9605359, -0.220703, 2.348355, 0.9803922, 0, 1, 1,
	    0.9685851, -0.5513354, 3.540989, 0.9843137, 0, 1, 1,
	    0.9730913, -0.7727445, 2.497883, 0.9921569, 0, 1, 1,
	    0.9760972, 0.08909553, 1.562028, 0.9960784, 0, 1, 1,
	    0.9771956, 2.091409, 0.2962296, 1, 0, 0.9960784, 1,
	    0.9808159, 0.6112995, 1.243668, 1, 0, 0.9882353, 1,
	    0.9830915, -0.8716277, 1.833804, 1, 0, 0.9843137, 1,
	    0.9860102, 1.372928, 0.8925427, 1, 0, 0.9764706, 1,
	    0.9900501, 0.6467063, 0.8433655, 1, 0, 0.972549, 1,
	    0.992487, -0.01612074, 1.700939, 1, 0, 0.9647059, 1,
	    0.9971042, 0.3769744, 1.456332, 1, 0, 0.9607843, 1,
	    1.005783, -0.7053204, 4.147507, 1, 0, 0.9529412, 1,
	    1.022177, 0.3536893, 1.722271, 1, 0, 0.9490196, 1,
	    1.023453, -0.2770587, 1.26288, 1, 0, 0.9411765, 1,
	    1.042149, 0.02891031, 3.082612, 1, 0, 0.9372549, 1,
	    1.047251, 0.09300896, 2.938347, 1, 0, 0.9294118, 1,
	    1.054476, 0.3133446, -0.2429631, 1, 0, 0.9254902, 1,
	    1.056609, -0.6197713, 2.575872, 1, 0, 0.9176471, 1,
	    1.06419, -0.361166, 2.172578, 1, 0, 0.9137255, 1,
	    1.070956, 0.5958419, 2.933166, 1, 0, 0.9058824, 1,
	    1.072018, 0.4740622, -0.9376631, 1, 0, 0.9019608, 1,
	    1.075094, 1.351047, -0.07247147, 1, 0, 0.8941177, 1,
	    1.077506, -0.8141723, 2.303923, 1, 0, 0.8862745, 1,
	    1.07767, -1.760538, 2.415156, 1, 0, 0.8823529, 1,
	    1.078836, -1.400829, 1.440463, 1, 0, 0.8745098, 1,
	    1.08219, 0.08549207, 1.222781, 1, 0, 0.8705882, 1,
	    1.084019, -0.8444926, 1.208408, 1, 0, 0.8627451, 1,
	    1.084226, -0.9300716, 3.475292, 1, 0, 0.8588235, 1,
	    1.084903, -0.9144362, 1.93803, 1, 0, 0.8509804, 1,
	    1.088088, 1.413339, 1.055513, 1, 0, 0.8470588, 1,
	    1.088759, -0.1463731, 1.891751, 1, 0, 0.8392157, 1,
	    1.091055, 1.184829, 1.462824, 1, 0, 0.8352941, 1,
	    1.097378, 1.581049, -0.08721653, 1, 0, 0.827451, 1,
	    1.106792, -0.9859993, 2.706347, 1, 0, 0.8235294, 1,
	    1.123841, -0.5960749, -0.1577037, 1, 0, 0.8156863, 1,
	    1.125581, -2.287583, 3.928427, 1, 0, 0.8117647, 1,
	    1.131974, -1.7642, 2.766665, 1, 0, 0.8039216, 1,
	    1.135994, 0.8424288, 2.323052, 1, 0, 0.7960784, 1,
	    1.141891, 0.7462993, 0.0161243, 1, 0, 0.7921569, 1,
	    1.142935, -0.4481039, 2.053705, 1, 0, 0.7843137, 1,
	    1.143002, -0.1218355, 0.7547452, 1, 0, 0.7803922, 1,
	    1.146405, 0.3269819, 0.007637316, 1, 0, 0.772549, 1,
	    1.155015, -2.386109, 1.036302, 1, 0, 0.7686275, 1,
	    1.16194, -0.9151431, 2.346257, 1, 0, 0.7607843, 1,
	    1.167497, 0.1672145, 1.509414, 1, 0, 0.7568628, 1,
	    1.185995, -2.958178, 2.931907, 1, 0, 0.7490196, 1,
	    1.195584, 0.2138806, 0.533883, 1, 0, 0.7450981, 1,
	    1.210354, 0.9051488, 0.7859312, 1, 0, 0.7372549, 1,
	    1.211825, 0.0826476, 1.398437, 1, 0, 0.7333333, 1,
	    1.212124, -1.102844, 0.8644331, 1, 0, 0.7254902, 1,
	    1.216396, -2.932568, 1.683547, 1, 0, 0.7215686, 1,
	    1.217603, 0.04054792, 1.013644, 1, 0, 0.7137255, 1,
	    1.222149, 1.247362, 0.7834614, 1, 0, 0.7098039, 1,
	    1.223904, 0.8077898, 2.026358, 1, 0, 0.7019608, 1,
	    1.225017, 1.702108, 1.595178, 1, 0, 0.6941177, 1,
	    1.227071, 1.073185, 0.257743, 1, 0, 0.6901961, 1,
	    1.236228, -2.422126, 2.699998, 1, 0, 0.682353, 1,
	    1.23986, -0.2692595, 2.446124, 1, 0, 0.6784314, 1,
	    1.243499, 0.9530301, 1.535428, 1, 0, 0.6705883, 1,
	    1.251734, 0.2663775, 1.181311, 1, 0, 0.6666667, 1,
	    1.256658, -0.2083019, 2.19552, 1, 0, 0.6588235, 1,
	    1.262082, 0.268323, 0.2664754, 1, 0, 0.654902, 1,
	    1.281028, -0.2428697, 0.02037218, 1, 0, 0.6470588, 1,
	    1.28589, -0.8898509, 3.429679, 1, 0, 0.6431373, 1,
	    1.286123, 0.002896945, 0.8622523, 1, 0, 0.6352941, 1,
	    1.296029, 0.2049499, 1.184314, 1, 0, 0.6313726, 1,
	    1.300581, -1.215092, 2.114138, 1, 0, 0.6235294, 1,
	    1.308648, -0.5400816, 4.83163, 1, 0, 0.6196079, 1,
	    1.310932, 0.6084526, 2.442618, 1, 0, 0.6117647, 1,
	    1.311067, -1.098579, 3.125273, 1, 0, 0.6078432, 1,
	    1.312825, -0.2743484, 3.434681, 1, 0, 0.6, 1,
	    1.323465, 1.575441, 0.6612649, 1, 0, 0.5921569, 1,
	    1.330357, 1.220312, 1.386091, 1, 0, 0.5882353, 1,
	    1.341581, -0.02581572, 1.990986, 1, 0, 0.5803922, 1,
	    1.344664, -0.5054106, 1.169713, 1, 0, 0.5764706, 1,
	    1.351649, -1.005266, 3.097692, 1, 0, 0.5686275, 1,
	    1.362987, -0.1080873, 1.822071, 1, 0, 0.5647059, 1,
	    1.366549, -0.8175096, 3.392473, 1, 0, 0.5568628, 1,
	    1.37216, -0.6100295, 3.264043, 1, 0, 0.5529412, 1,
	    1.375405, 0.09120892, 2.836422, 1, 0, 0.5450981, 1,
	    1.376868, 1.251278, 2.264082, 1, 0, 0.5411765, 1,
	    1.381299, 0.4292544, 2.296575, 1, 0, 0.5333334, 1,
	    1.383727, -0.5576332, 1.834628, 1, 0, 0.5294118, 1,
	    1.398152, 0.5244114, 0.2700175, 1, 0, 0.5215687, 1,
	    1.40585, -0.8441719, 2.56402, 1, 0, 0.5176471, 1,
	    1.409261, 0.8533201, 2.154315, 1, 0, 0.509804, 1,
	    1.437043, 1.157352, 0.151779, 1, 0, 0.5058824, 1,
	    1.439419, 0.8735424, 0.5885153, 1, 0, 0.4980392, 1,
	    1.460779, -1.261602, 1.442344, 1, 0, 0.4901961, 1,
	    1.463592, -0.6179711, 3.001204, 1, 0, 0.4862745, 1,
	    1.465176, -1.618671, 1.41339, 1, 0, 0.4784314, 1,
	    1.465273, 1.43612, -0.3146013, 1, 0, 0.4745098, 1,
	    1.467201, -0.1709877, 1.124683, 1, 0, 0.4666667, 1,
	    1.474732, 0.1865861, 4.329333, 1, 0, 0.4627451, 1,
	    1.47767, 0.4657091, 0.5418656, 1, 0, 0.454902, 1,
	    1.48243, 1.183069, -0.07277961, 1, 0, 0.4509804, 1,
	    1.484406, -1.417309, 0.6963103, 1, 0, 0.4431373, 1,
	    1.498464, 0.245425, 2.290728, 1, 0, 0.4392157, 1,
	    1.500185, 1.459082, 1.848948, 1, 0, 0.4313726, 1,
	    1.501548, -0.4403981, 0.481339, 1, 0, 0.427451, 1,
	    1.507523, -0.2960398, 2.378888, 1, 0, 0.4196078, 1,
	    1.509006, 0.7494451, 0.7560087, 1, 0, 0.4156863, 1,
	    1.511986, -1.007787, 1.558617, 1, 0, 0.4078431, 1,
	    1.517534, -1.249976, 2.992392, 1, 0, 0.4039216, 1,
	    1.527745, 1.358762, 2.339346, 1, 0, 0.3960784, 1,
	    1.555333, 0.8312538, 2.489516, 1, 0, 0.3882353, 1,
	    1.567268, -0.9358007, 1.905809, 1, 0, 0.3843137, 1,
	    1.567335, 0.2034752, 1.569901, 1, 0, 0.3764706, 1,
	    1.576185, -0.1587561, 2.126978, 1, 0, 0.372549, 1,
	    1.592568, 0.1895342, 3.628214, 1, 0, 0.3647059, 1,
	    1.61961, -0.7019569, 1.650588, 1, 0, 0.3607843, 1,
	    1.656586, -1.232562, 1.983882, 1, 0, 0.3529412, 1,
	    1.664534, -1.55471, 1.820436, 1, 0, 0.3490196, 1,
	    1.667939, 0.4645769, 0.5376481, 1, 0, 0.3411765, 1,
	    1.671104, -0.9005345, 1.5663, 1, 0, 0.3372549, 1,
	    1.675069, 1.479126, -0.2686517, 1, 0, 0.3294118, 1,
	    1.684581, -0.1162812, 3.140791, 1, 0, 0.3254902, 1,
	    1.684953, 0.4787575, 0.2693137, 1, 0, 0.3176471, 1,
	    1.692349, 1.483847, 2.570618, 1, 0, 0.3137255, 1,
	    1.693482, 1.184716, -0.9563609, 1, 0, 0.3058824, 1,
	    1.695846, 1.30174, 2.464623, 1, 0, 0.2980392, 1,
	    1.703551, 0.4918097, 0.4681863, 1, 0, 0.2941177, 1,
	    1.707992, 0.5624529, 0.6624202, 1, 0, 0.2862745, 1,
	    1.71197, -0.2325042, -1.203939, 1, 0, 0.282353, 1,
	    1.71686, -0.2711564, 2.887945, 1, 0, 0.2745098, 1,
	    1.71713, -0.4079759, 1.919974, 1, 0, 0.2705882, 1,
	    1.720231, 0.860278, 1.081715, 1, 0, 0.2627451, 1,
	    1.738929, 1.658672, 1.13109, 1, 0, 0.2588235, 1,
	    1.752275, 0.313095, 0.4387143, 1, 0, 0.2509804, 1,
	    1.752658, 0.6038893, -0.4192338, 1, 0, 0.2470588, 1,
	    1.753578, 1.613905, 1.158847, 1, 0, 0.2392157, 1,
	    1.766887, -0.4716278, 0.7451758, 1, 0, 0.2352941, 1,
	    1.783643, -0.3060378, 2.246827, 1, 0, 0.227451, 1,
	    1.792367, 0.5947535, 1.96836, 1, 0, 0.2235294, 1,
	    1.811576, -0.77352, -0.4631843, 1, 0, 0.2156863, 1,
	    1.832532, -0.3881688, 2.326182, 1, 0, 0.2117647, 1,
	    1.835433, 0.06017601, 1.650577, 1, 0, 0.2039216, 1,
	    1.837524, 0.3615544, 1.607976, 1, 0, 0.1960784, 1,
	    1.855301, -0.1899351, 0.7221946, 1, 0, 0.1921569, 1,
	    1.857114, -1.062571, 2.866164, 1, 0, 0.1843137, 1,
	    1.882487, -1.179935, 4.34192, 1, 0, 0.1803922, 1,
	    1.884645, -0.842499, 2.196571, 1, 0, 0.172549, 1,
	    1.889743, 0.4457276, 0.3833267, 1, 0, 0.1686275, 1,
	    1.89572, 1.325101, 0.967483, 1, 0, 0.1607843, 1,
	    1.89694, 0.6717448, 1.807233, 1, 0, 0.1568628, 1,
	    1.897939, -0.6999689, 2.451191, 1, 0, 0.1490196, 1,
	    1.917001, 1.94276, -0.7618812, 1, 0, 0.145098, 1,
	    1.929097, 0.6206449, 1.857533, 1, 0, 0.1372549, 1,
	    1.946273, -0.9858022, 2.481327, 1, 0, 0.1333333, 1,
	    1.973767, 0.7132816, 0.8001173, 1, 0, 0.1254902, 1,
	    1.99738, -1.707129, 1.64929, 1, 0, 0.1215686, 1,
	    2.026843, 1.260847, 0.09969741, 1, 0, 0.1137255, 1,
	    2.072448, 0.5910345, 0.4445677, 1, 0, 0.1098039, 1,
	    2.078625, 0.8129915, 0.2568423, 1, 0, 0.1019608, 1,
	    2.091256, -0.770649, 0.1159023, 1, 0, 0.09411765, 1,
	    2.17307, 0.9348725, 3.756343, 1, 0, 0.09019608, 1,
	    2.17847, 2.132339, -0.3844046, 1, 0, 0.08235294, 1,
	    2.203004, -0.2877323, 3.651192, 1, 0, 0.07843138, 1,
	    2.212732, -0.5718889, 2.102918, 1, 0, 0.07058824, 1,
	    2.252668, 0.1857246, 2.225858, 1, 0, 0.06666667, 1,
	    2.258828, -0.6563669, 1.240771, 1, 0, 0.05882353, 1,
	    2.302582, 0.1252205, 1.025251, 1, 0, 0.05490196, 1,
	    2.330177, 1.684782, 0.7708383, 1, 0, 0.04705882, 1,
	    2.367449, -3.543899, 4.92996, 1, 0, 0.04313726, 1,
	    2.448772, -2.307197, 2.081031, 1, 0, 0.03529412, 1,
	    2.663943, -0.4748251, 3.05439, 1, 0, 0.03137255, 1,
	    2.685364, 0.02148907, 2.661292, 1, 0, 0.02352941, 1,
	    2.707484, -0.7213604, 2.368467, 1, 0, 0.01960784, 1,
	    2.874384, 0.1718651, 1.940029, 1, 0, 0.01176471, 1,
	    3.288257, -0.5527748, 3.298226, 1, 0, 0.007843138, 1
	   ]);
	   var buf6 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf6);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var mvMatLoc6 = gl.getUniformLocation(prog6,"mvMatrix");
	   var prMatLoc6 = gl.getUniformLocation(prog6,"prMatrix");
	   // ****** text object 8 ******
	   var prog8  = gl.createProgram();
	   gl.attachShader(prog8, getShader( gl, "testglvshader8" ));
	   gl.attachShader(prog8, getShader( gl, "testglfshader8" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog8, 0, "aPos");
	   gl.bindAttribLocation(prog8, 1, "aCol");
	   gl.linkProgram(prog8);
	   var texts = [
	    "x"
	   ];
	   var texinfo = drawTextToCanvas(texts, 1);	 
	   var canvasX8 = texinfo.canvasX;
	   var canvasY8 = texinfo.canvasY;
	   var ofsLoc8 = gl.getAttribLocation(prog8, "aOfs");
	   var texture8 = gl.createTexture();
	   var texLoc8 = gl.getAttribLocation(prog8, "aTexcoord");
	   var sampler8 = gl.getUniformLocation(prog8,"uSampler");
    	   handleLoadedTexture(texture8, document.getElementById("testgltextureCanvas"));
	   var v=new Float32Array([
	    -0.3552891, -4.662782, -6.864202, 0, -0.5, 0.5, 0.5,
	    -0.3552891, -4.662782, -6.864202, 1, -0.5, 0.5, 0.5,
	    -0.3552891, -4.662782, -6.864202, 1, 1.5, 0.5, 0.5,
	    -0.3552891, -4.662782, -6.864202, 0, 1.5, 0.5, 0.5
	   ]);
	   for (var i=0; i<1; i++) 
	     for (var j=0; j<4; j++) {
	         ind = 7*(4*i + j) + 3;
	         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i]/width;
	         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight/height;
	         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
	         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip 
	           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
	     }
	   var f=new Uint16Array([
	    0, 1, 2, 0, 2, 3
	   ]);
	   var buf8 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf8);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var ibuf8 = gl.createBuffer();
	   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf8);
	   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
	   var mvMatLoc8 = gl.getUniformLocation(prog8,"mvMatrix");
	   var prMatLoc8 = gl.getUniformLocation(prog8,"prMatrix");
	   // ****** text object 9 ******
	   var prog9  = gl.createProgram();
	   gl.attachShader(prog9, getShader( gl, "testglvshader9" ));
	   gl.attachShader(prog9, getShader( gl, "testglfshader9" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog9, 0, "aPos");
	   gl.bindAttribLocation(prog9, 1, "aCol");
	   gl.linkProgram(prog9);
	   var texts = [
	    "y"
	   ];
	   var texinfo = drawTextToCanvas(texts, 1);	 
	   var canvasX9 = texinfo.canvasX;
	   var canvasY9 = texinfo.canvasY;
	   var ofsLoc9 = gl.getAttribLocation(prog9, "aOfs");
	   var texture9 = gl.createTexture();
	   var texLoc9 = gl.getAttribLocation(prog9, "aTexcoord");
	   var sampler9 = gl.getUniformLocation(prog9,"uSampler");
    	   handleLoadedTexture(texture9, document.getElementById("testgltextureCanvas"));
	   var v=new Float32Array([
	    -5.233997, -0.2998279, -6.864202, 0, -0.5, 0.5, 0.5,
	    -5.233997, -0.2998279, -6.864202, 1, -0.5, 0.5, 0.5,
	    -5.233997, -0.2998279, -6.864202, 1, 1.5, 0.5, 0.5,
	    -5.233997, -0.2998279, -6.864202, 0, 1.5, 0.5, 0.5
	   ]);
	   for (var i=0; i<1; i++) 
	     for (var j=0; j<4; j++) {
	         ind = 7*(4*i + j) + 3;
	         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i]/width;
	         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight/height;
	         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
	         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip 
	           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
	     }
	   var f=new Uint16Array([
	    0, 1, 2, 0, 2, 3
	   ]);
	   var buf9 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf9);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var ibuf9 = gl.createBuffer();
	   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf9);
	   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
	   var mvMatLoc9 = gl.getUniformLocation(prog9,"mvMatrix");
	   var prMatLoc9 = gl.getUniformLocation(prog9,"prMatrix");
	   // ****** text object 10 ******
	   var prog10  = gl.createProgram();
	   gl.attachShader(prog10, getShader( gl, "testglvshader10" ));
	   gl.attachShader(prog10, getShader( gl, "testglfshader10" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog10, 0, "aPos");
	   gl.bindAttribLocation(prog10, 1, "aCol");
	   gl.linkProgram(prog10);
	   var texts = [
	    "z"
	   ];
	   var texinfo = drawTextToCanvas(texts, 1);	 
	   var canvasX10 = texinfo.canvasX;
	   var canvasY10 = texinfo.canvasY;
	   var ofsLoc10 = gl.getAttribLocation(prog10, "aOfs");
	   var texture10 = gl.createTexture();
	   var texLoc10 = gl.getAttribLocation(prog10, "aTexcoord");
	   var sampler10 = gl.getUniformLocation(prog10,"uSampler");
    	   handleLoadedTexture(texture10, document.getElementById("testgltextureCanvas"));
	   var v=new Float32Array([
	    -5.233997, -4.662782, 0.533973, 0, -0.5, 0.5, 0.5,
	    -5.233997, -4.662782, 0.533973, 1, -0.5, 0.5, 0.5,
	    -5.233997, -4.662782, 0.533973, 1, 1.5, 0.5, 0.5,
	    -5.233997, -4.662782, 0.533973, 0, 1.5, 0.5, 0.5
	   ]);
	   for (var i=0; i<1; i++) 
	     for (var j=0; j<4; j++) {
	         ind = 7*(4*i + j) + 3;
	         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i]/width;
	         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight/height;
	         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
	         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip 
	           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
	     }
	   var f=new Uint16Array([
	    0, 1, 2, 0, 2, 3
	   ]);
	   var buf10 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf10);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var ibuf10 = gl.createBuffer();
	   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf10);
	   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
	   var mvMatLoc10 = gl.getUniformLocation(prog10,"mvMatrix");
	   var prMatLoc10 = gl.getUniformLocation(prog10,"prMatrix");
	   // ****** lines object 11 ******
	   var prog11  = gl.createProgram();
	   gl.attachShader(prog11, getShader( gl, "testglvshader11" ));
	   gl.attachShader(prog11, getShader( gl, "testglfshader11" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog11, 0, "aPos");
	   gl.bindAttribLocation(prog11, 1, "aCol");
	   gl.linkProgram(prog11);
	   var v=new Float32Array([
	    -2, -3.655946, -5.15693,
	    2, -3.655946, -5.15693,
	    -2, -3.655946, -5.15693,
	    -2, -3.823752, -5.441476,
	    0, -3.655946, -5.15693,
	    0, -3.823752, -5.441476,
	    2, -3.655946, -5.15693,
	    2, -3.823752, -5.441476
	   ]);
	   var buf11 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf11);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var mvMatLoc11 = gl.getUniformLocation(prog11,"mvMatrix");
	   var prMatLoc11 = gl.getUniformLocation(prog11,"prMatrix");
	   // ****** text object 12 ******
	   var prog12  = gl.createProgram();
	   gl.attachShader(prog12, getShader( gl, "testglvshader12" ));
	   gl.attachShader(prog12, getShader( gl, "testglfshader12" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog12, 0, "aPos");
	   gl.bindAttribLocation(prog12, 1, "aCol");
	   gl.linkProgram(prog12);
	   var texts = [
	    "-2",
	    "0",
	    "2"
	   ];
	   var texinfo = drawTextToCanvas(texts, 1);	 
	   var canvasX12 = texinfo.canvasX;
	   var canvasY12 = texinfo.canvasY;
	   var ofsLoc12 = gl.getAttribLocation(prog12, "aOfs");
	   var texture12 = gl.createTexture();
	   var texLoc12 = gl.getAttribLocation(prog12, "aTexcoord");
	   var sampler12 = gl.getUniformLocation(prog12,"uSampler");
    	   handleLoadedTexture(texture12, document.getElementById("testgltextureCanvas"));
	   var v=new Float32Array([
	    -2, -4.159364, -6.010566, 0, -0.5, 0.5, 0.5,
	    -2, -4.159364, -6.010566, 1, -0.5, 0.5, 0.5,
	    -2, -4.159364, -6.010566, 1, 1.5, 0.5, 0.5,
	    -2, -4.159364, -6.010566, 0, 1.5, 0.5, 0.5,
	    0, -4.159364, -6.010566, 0, -0.5, 0.5, 0.5,
	    0, -4.159364, -6.010566, 1, -0.5, 0.5, 0.5,
	    0, -4.159364, -6.010566, 1, 1.5, 0.5, 0.5,
	    0, -4.159364, -6.010566, 0, 1.5, 0.5, 0.5,
	    2, -4.159364, -6.010566, 0, -0.5, 0.5, 0.5,
	    2, -4.159364, -6.010566, 1, -0.5, 0.5, 0.5,
	    2, -4.159364, -6.010566, 1, 1.5, 0.5, 0.5,
	    2, -4.159364, -6.010566, 0, 1.5, 0.5, 0.5
	   ]);
	   for (var i=0; i<3; i++) 
	     for (var j=0; j<4; j++) {
	         ind = 7*(4*i + j) + 3;
	         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i]/width;
	         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight/height;
	         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
	         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip 
	           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
	     }
	   var f=new Uint16Array([
	    0, 1, 2, 0, 2, 3,
	    4, 5, 6, 4, 6, 7,
	    8, 9, 10, 8, 10, 11
	   ]);
	   var buf12 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf12);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var ibuf12 = gl.createBuffer();
	   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf12);
	   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
	   var mvMatLoc12 = gl.getUniformLocation(prog12,"mvMatrix");
	   var prMatLoc12 = gl.getUniformLocation(prog12,"prMatrix");
	   // ****** lines object 13 ******
	   var prog13  = gl.createProgram();
	   gl.attachShader(prog13, getShader( gl, "testglvshader13" ));
	   gl.attachShader(prog13, getShader( gl, "testglfshader13" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog13, 0, "aPos");
	   gl.bindAttribLocation(prog13, 1, "aCol");
	   gl.linkProgram(prog13);
	   var v=new Float32Array([
	    -4.108141, -3, -5.15693,
	    -4.108141, 2, -5.15693,
	    -4.108141, -3, -5.15693,
	    -4.295784, -3, -5.441476,
	    -4.108141, -2, -5.15693,
	    -4.295784, -2, -5.441476,
	    -4.108141, -1, -5.15693,
	    -4.295784, -1, -5.441476,
	    -4.108141, 0, -5.15693,
	    -4.295784, 0, -5.441476,
	    -4.108141, 1, -5.15693,
	    -4.295784, 1, -5.441476,
	    -4.108141, 2, -5.15693,
	    -4.295784, 2, -5.441476
	   ]);
	   var buf13 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf13);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var mvMatLoc13 = gl.getUniformLocation(prog13,"mvMatrix");
	   var prMatLoc13 = gl.getUniformLocation(prog13,"prMatrix");
	   // ****** text object 14 ******
	   var prog14  = gl.createProgram();
	   gl.attachShader(prog14, getShader( gl, "testglvshader14" ));
	   gl.attachShader(prog14, getShader( gl, "testglfshader14" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog14, 0, "aPos");
	   gl.bindAttribLocation(prog14, 1, "aCol");
	   gl.linkProgram(prog14);
	   var texts = [
	    "-3",
	    "-2",
	    "-1",
	    "0",
	    "1",
	    "2"
	   ];
	   var texinfo = drawTextToCanvas(texts, 1);	 
	   var canvasX14 = texinfo.canvasX;
	   var canvasY14 = texinfo.canvasY;
	   var ofsLoc14 = gl.getAttribLocation(prog14, "aOfs");
	   var texture14 = gl.createTexture();
	   var texLoc14 = gl.getAttribLocation(prog14, "aTexcoord");
	   var sampler14 = gl.getUniformLocation(prog14,"uSampler");
    	   handleLoadedTexture(texture14, document.getElementById("testgltextureCanvas"));
	   var v=new Float32Array([
	    -4.671069, -3, -6.010566, 0, -0.5, 0.5, 0.5,
	    -4.671069, -3, -6.010566, 1, -0.5, 0.5, 0.5,
	    -4.671069, -3, -6.010566, 1, 1.5, 0.5, 0.5,
	    -4.671069, -3, -6.010566, 0, 1.5, 0.5, 0.5,
	    -4.671069, -2, -6.010566, 0, -0.5, 0.5, 0.5,
	    -4.671069, -2, -6.010566, 1, -0.5, 0.5, 0.5,
	    -4.671069, -2, -6.010566, 1, 1.5, 0.5, 0.5,
	    -4.671069, -2, -6.010566, 0, 1.5, 0.5, 0.5,
	    -4.671069, -1, -6.010566, 0, -0.5, 0.5, 0.5,
	    -4.671069, -1, -6.010566, 1, -0.5, 0.5, 0.5,
	    -4.671069, -1, -6.010566, 1, 1.5, 0.5, 0.5,
	    -4.671069, -1, -6.010566, 0, 1.5, 0.5, 0.5,
	    -4.671069, 0, -6.010566, 0, -0.5, 0.5, 0.5,
	    -4.671069, 0, -6.010566, 1, -0.5, 0.5, 0.5,
	    -4.671069, 0, -6.010566, 1, 1.5, 0.5, 0.5,
	    -4.671069, 0, -6.010566, 0, 1.5, 0.5, 0.5,
	    -4.671069, 1, -6.010566, 0, -0.5, 0.5, 0.5,
	    -4.671069, 1, -6.010566, 1, -0.5, 0.5, 0.5,
	    -4.671069, 1, -6.010566, 1, 1.5, 0.5, 0.5,
	    -4.671069, 1, -6.010566, 0, 1.5, 0.5, 0.5,
	    -4.671069, 2, -6.010566, 0, -0.5, 0.5, 0.5,
	    -4.671069, 2, -6.010566, 1, -0.5, 0.5, 0.5,
	    -4.671069, 2, -6.010566, 1, 1.5, 0.5, 0.5,
	    -4.671069, 2, -6.010566, 0, 1.5, 0.5, 0.5
	   ]);
	   for (var i=0; i<6; i++) 
	     for (var j=0; j<4; j++) {
	         ind = 7*(4*i + j) + 3;
	         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i]/width;
	         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight/height;
	         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
	         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip 
	           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
	     }
	   var f=new Uint16Array([
	    0, 1, 2, 0, 2, 3,
	    4, 5, 6, 4, 6, 7,
	    8, 9, 10, 8, 10, 11,
	    12, 13, 14, 12, 14, 15,
	    16, 17, 18, 16, 18, 19,
	    20, 21, 22, 20, 22, 23
	   ]);
	   var buf14 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf14);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var ibuf14 = gl.createBuffer();
	   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf14);
	   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
	   var mvMatLoc14 = gl.getUniformLocation(prog14,"mvMatrix");
	   var prMatLoc14 = gl.getUniformLocation(prog14,"prMatrix");
	   // ****** lines object 15 ******
	   var prog15  = gl.createProgram();
	   gl.attachShader(prog15, getShader( gl, "testglvshader15" ));
	   gl.attachShader(prog15, getShader( gl, "testglfshader15" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog15, 0, "aPos");
	   gl.bindAttribLocation(prog15, 1, "aCol");
	   gl.linkProgram(prog15);
	   var v=new Float32Array([
	    -4.108141, -3.655946, -4,
	    -4.108141, -3.655946, 6,
	    -4.108141, -3.655946, -4,
	    -4.295784, -3.823752, -4,
	    -4.108141, -3.655946, -2,
	    -4.295784, -3.823752, -2,
	    -4.108141, -3.655946, 0,
	    -4.295784, -3.823752, 0,
	    -4.108141, -3.655946, 2,
	    -4.295784, -3.823752, 2,
	    -4.108141, -3.655946, 4,
	    -4.295784, -3.823752, 4,
	    -4.108141, -3.655946, 6,
	    -4.295784, -3.823752, 6
	   ]);
	   var buf15 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf15);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var mvMatLoc15 = gl.getUniformLocation(prog15,"mvMatrix");
	   var prMatLoc15 = gl.getUniformLocation(prog15,"prMatrix");
	   // ****** text object 16 ******
	   var prog16  = gl.createProgram();
	   gl.attachShader(prog16, getShader( gl, "testglvshader16" ));
	   gl.attachShader(prog16, getShader( gl, "testglfshader16" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog16, 0, "aPos");
	   gl.bindAttribLocation(prog16, 1, "aCol");
	   gl.linkProgram(prog16);
	   var texts = [
	    "-4",
	    "-2",
	    "0",
	    "2",
	    "4",
	    "6"
	   ];
	   var texinfo = drawTextToCanvas(texts, 1);	 
	   var canvasX16 = texinfo.canvasX;
	   var canvasY16 = texinfo.canvasY;
	   var ofsLoc16 = gl.getAttribLocation(prog16, "aOfs");
	   var texture16 = gl.createTexture();
	   var texLoc16 = gl.getAttribLocation(prog16, "aTexcoord");
	   var sampler16 = gl.getUniformLocation(prog16,"uSampler");
    	   handleLoadedTexture(texture16, document.getElementById("testgltextureCanvas"));
	   var v=new Float32Array([
	    -4.671069, -4.159364, -4, 0, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, -4, 1, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, -4, 1, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, -4, 0, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, -2, 0, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, -2, 1, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, -2, 1, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, -2, 0, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, 0, 0, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, 0, 1, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, 0, 1, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, 0, 0, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, 2, 0, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, 2, 1, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, 2, 1, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, 2, 0, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, 4, 0, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, 4, 1, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, 4, 1, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, 4, 0, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, 6, 0, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, 6, 1, -0.5, 0.5, 0.5,
	    -4.671069, -4.159364, 6, 1, 1.5, 0.5, 0.5,
	    -4.671069, -4.159364, 6, 0, 1.5, 0.5, 0.5
	   ]);
	   for (var i=0; i<6; i++) 
	     for (var j=0; j<4; j++) {
	         ind = 7*(4*i + j) + 3;
	         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i]/width;
	         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight/height;
	         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
	         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip 
	           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
	     }
	   var f=new Uint16Array([
	    0, 1, 2, 0, 2, 3,
	    4, 5, 6, 4, 6, 7,
	    8, 9, 10, 8, 10, 11,
	    12, 13, 14, 12, 14, 15,
	    16, 17, 18, 16, 18, 19,
	    20, 21, 22, 20, 22, 23
	   ]);
	   var buf16 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf16);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var ibuf16 = gl.createBuffer();
	   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf16);
	   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
	   var mvMatLoc16 = gl.getUniformLocation(prog16,"mvMatrix");
	   var prMatLoc16 = gl.getUniformLocation(prog16,"prMatrix");
	   // ****** lines object 17 ******
	   var prog17  = gl.createProgram();
	   gl.attachShader(prog17, getShader( gl, "testglvshader17" ));
	   gl.attachShader(prog17, getShader( gl, "testglfshader17" ));
	   //  Force aPos to location 0, aCol to location 1 
	   gl.bindAttribLocation(prog17, 0, "aPos");
	   gl.bindAttribLocation(prog17, 1, "aCol");
	   gl.linkProgram(prog17);
	   var v=new Float32Array([
	    -4.108141, -3.655946, -5.15693,
	    -4.108141, 3.05629, -5.15693,
	    -4.108141, -3.655946, 6.224876,
	    -4.108141, 3.05629, 6.224876,
	    -4.108141, -3.655946, -5.15693,
	    -4.108141, -3.655946, 6.224876,
	    -4.108141, 3.05629, -5.15693,
	    -4.108141, 3.05629, 6.224876,
	    -4.108141, -3.655946, -5.15693,
	    3.397563, -3.655946, -5.15693,
	    -4.108141, -3.655946, 6.224876,
	    3.397563, -3.655946, 6.224876,
	    -4.108141, 3.05629, -5.15693,
	    3.397563, 3.05629, -5.15693,
	    -4.108141, 3.05629, 6.224876,
	    3.397563, 3.05629, 6.224876,
	    3.397563, -3.655946, -5.15693,
	    3.397563, 3.05629, -5.15693,
	    3.397563, -3.655946, 6.224876,
	    3.397563, 3.05629, 6.224876,
	    3.397563, -3.655946, -5.15693,
	    3.397563, -3.655946, 6.224876,
	    3.397563, 3.05629, -5.15693,
	    3.397563, 3.05629, 6.224876
	   ]);
	   var buf17 = gl.createBuffer();
	   gl.bindBuffer(gl.ARRAY_BUFFER, buf17);
	   gl.bufferData(gl.ARRAY_BUFFER, v, gl.STATIC_DRAW);
	   var mvMatLoc17 = gl.getUniformLocation(prog17,"mvMatrix");
	   var prMatLoc17 = gl.getUniformLocation(prog17,"prMatrix");
	   gl.enable(gl.DEPTH_TEST);
	   gl.depthFunc(gl.LEQUAL);
	   gl.clearDepth(1.0);
	   gl.clearColor(1, 1, 1, 1);
	   var xOffs = yOffs = 0,  drag  = 0;
	   drawScene();
	   function drawScene(){
	     gl.depthMask(true);
	     gl.disable(gl.BLEND);
	     var radius = 8.114665;
	     var s = sin(fov*PI/360);
	     var t = tan(fov*PI/360);
	     var distance = radius/s;
	     var near = distance - radius;
	     var far = distance + radius;
	     var hlen = t*near;
	     var aspect = width/height;
	     prMatrix.makeIdentity();
	     if (aspect > 1)
	       prMatrix.frustum(-hlen*aspect*zoom, hlen*aspect*zoom, 
	                        -hlen*zoom, hlen*zoom, near, far);
	     else  
	       prMatrix.frustum(-hlen*zoom, hlen*zoom, 
	                        -hlen*zoom/aspect, hlen*zoom/aspect, 
	                        near, far);
	     mvMatrix.makeIdentity();
	     mvMatrix.translate( 0.3552891, 0.2998279, -0.533973 );
	     mvMatrix.scale( 1.168942, 1.307125, 0.770856 );   
	     mvMatrix.multRight( userMatrix );  
	     mvMatrix.translate(0, 0, -distance);
	     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	     // ****** points object 6 *******
	     gl.useProgram(prog6);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf6);
	     gl.uniformMatrix4fv( prMatLoc6, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc6, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.enableVertexAttribArray( colLoc );
	     gl.vertexAttribPointer(colLoc, 4, gl.FLOAT, false, 28, 12);
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 28,  0);
	     gl.drawArrays(gl.POINTS, 0, 1000);
	     // ****** text object 8 *******
	     gl.useProgram(prog8);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf8);
	     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf8);
	     gl.uniformMatrix4fv( prMatLoc8, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc8, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.enableVertexAttribArray( texLoc8 );
	     gl.vertexAttribPointer(texLoc8, 2, gl.FLOAT, false, 28, 12);
	     gl.activeTexture(gl.TEXTURE0);
	     gl.bindTexture(gl.TEXTURE_2D, texture8);
	     gl.uniform1i( sampler8, 0);
	     gl.enableVertexAttribArray( ofsLoc8 );
	     gl.vertexAttribPointer(ofsLoc8, 2, gl.FLOAT, false, 28, 20);
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 28,  0);
	     gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
	     // ****** text object 9 *******
	     gl.useProgram(prog9);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf9);
	     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf9);
	     gl.uniformMatrix4fv( prMatLoc9, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc9, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.enableVertexAttribArray( texLoc9 );
	     gl.vertexAttribPointer(texLoc9, 2, gl.FLOAT, false, 28, 12);
	     gl.activeTexture(gl.TEXTURE0);
	     gl.bindTexture(gl.TEXTURE_2D, texture9);
	     gl.uniform1i( sampler9, 0);
	     gl.enableVertexAttribArray( ofsLoc9 );
	     gl.vertexAttribPointer(ofsLoc9, 2, gl.FLOAT, false, 28, 20);
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 28,  0);
	     gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
	     // ****** text object 10 *******
	     gl.useProgram(prog10);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf10);
	     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf10);
	     gl.uniformMatrix4fv( prMatLoc10, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc10, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.enableVertexAttribArray( texLoc10 );
	     gl.vertexAttribPointer(texLoc10, 2, gl.FLOAT, false, 28, 12);
	     gl.activeTexture(gl.TEXTURE0);
	     gl.bindTexture(gl.TEXTURE_2D, texture10);
	     gl.uniform1i( sampler10, 0);
	     gl.enableVertexAttribArray( ofsLoc10 );
	     gl.vertexAttribPointer(ofsLoc10, 2, gl.FLOAT, false, 28, 20);
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 28,  0);
	     gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
	     // ****** lines object 11 *******
	     gl.useProgram(prog11);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf11);
	     gl.uniformMatrix4fv( prMatLoc11, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc11, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.lineWidth( 1 );
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 12,  0);
	     gl.drawArrays(gl.LINES, 0, 8);
	     // ****** text object 12 *******
	     gl.useProgram(prog12);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf12);
	     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf12);
	     gl.uniformMatrix4fv( prMatLoc12, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc12, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.enableVertexAttribArray( texLoc12 );
	     gl.vertexAttribPointer(texLoc12, 2, gl.FLOAT, false, 28, 12);
	     gl.activeTexture(gl.TEXTURE0);
	     gl.bindTexture(gl.TEXTURE_2D, texture12);
	     gl.uniform1i( sampler12, 0);
	     gl.enableVertexAttribArray( ofsLoc12 );
	     gl.vertexAttribPointer(ofsLoc12, 2, gl.FLOAT, false, 28, 20);
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 28,  0);
	     gl.drawElements(gl.TRIANGLES, 18, gl.UNSIGNED_SHORT, 0);
	     // ****** lines object 13 *******
	     gl.useProgram(prog13);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf13);
	     gl.uniformMatrix4fv( prMatLoc13, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc13, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.lineWidth( 1 );
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 12,  0);
	     gl.drawArrays(gl.LINES, 0, 14);
	     // ****** text object 14 *******
	     gl.useProgram(prog14);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf14);
	     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf14);
	     gl.uniformMatrix4fv( prMatLoc14, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc14, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.enableVertexAttribArray( texLoc14 );
	     gl.vertexAttribPointer(texLoc14, 2, gl.FLOAT, false, 28, 12);
	     gl.activeTexture(gl.TEXTURE0);
	     gl.bindTexture(gl.TEXTURE_2D, texture14);
	     gl.uniform1i( sampler14, 0);
	     gl.enableVertexAttribArray( ofsLoc14 );
	     gl.vertexAttribPointer(ofsLoc14, 2, gl.FLOAT, false, 28, 20);
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 28,  0);
	     gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
	     // ****** lines object 15 *******
	     gl.useProgram(prog15);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf15);
	     gl.uniformMatrix4fv( prMatLoc15, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc15, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.lineWidth( 1 );
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 12,  0);
	     gl.drawArrays(gl.LINES, 0, 14);
	     // ****** text object 16 *******
	     gl.useProgram(prog16);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf16);
	     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf16);
	     gl.uniformMatrix4fv( prMatLoc16, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc16, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.enableVertexAttribArray( texLoc16 );
	     gl.vertexAttribPointer(texLoc16, 2, gl.FLOAT, false, 28, 12);
	     gl.activeTexture(gl.TEXTURE0);
	     gl.bindTexture(gl.TEXTURE_2D, texture16);
	     gl.uniform1i( sampler16, 0);
	     gl.enableVertexAttribArray( ofsLoc16 );
	     gl.vertexAttribPointer(ofsLoc16, 2, gl.FLOAT, false, 28, 20);
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 28,  0);
	     gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
	     // ****** lines object 17 *******
	     gl.useProgram(prog17);
	     gl.bindBuffer(gl.ARRAY_BUFFER, buf17);
	     gl.uniformMatrix4fv( prMatLoc17, false, new Float32Array(prMatrix.getAsArray()) );
	     gl.uniformMatrix4fv( mvMatLoc17, false, new Float32Array(mvMatrix.getAsArray()) );
	     gl.enableVertexAttribArray( posLoc );
	     gl.disableVertexAttribArray( colLoc );
	     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
	     gl.lineWidth( 1 );
	     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 12,  0);
	     gl.drawArrays(gl.LINES, 0, 24);
	     gl.flush ();
	   }
	   var vlen = function(v) {
	     return sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2])
	   }
	   var xprod = function(a, b) {
	     return [a[1]*b[2] - a[2]*b[1],
	             a[2]*b[0] - a[0]*b[2],
	             a[0]*b[1] - a[1]*b[0]];
	   }
	   var screenToVector = function(x, y) {
	     var radius = max(width, height)/2.0;
	     var cx = width/2.0;
	     var cy = height/2.0;
	     var px = (x-cx)/radius;
	     var py = (y-cy)/radius;
	     var plen = sqrt(px*px+py*py);
	     if (plen > 1.e-6) { 
	       px = px/plen;
	       py = py/plen;
	     }
	     var angle = (SQRT2 - plen)/SQRT2*PI/2;
	     var z = sin(angle);
	     var zlen = sqrt(1.0 - z*z);
	     px = px * zlen;
	     py = py * zlen;
	     return [px, py, z];
	   }
	   var rotBase;
	   var trackballdown = function(x,y) {
	     rotBase = screenToVector(x, y);
	     saveMat.load(userMatrix);
	   }
	   var trackballmove = function(x,y) {
	     var rotCurrent = screenToVector(x,y);
	     var dot = rotBase[0]*rotCurrent[0] + 
	   	       rotBase[1]*rotCurrent[1] + 
	   	       rotBase[2]*rotCurrent[2];
	     var angle = acos( dot/vlen(rotBase)/vlen(rotCurrent) )*180./PI;
	     var axis = xprod(rotBase, rotCurrent);
	     userMatrix.load(saveMat);
	     userMatrix.rotate(angle, axis[0], axis[1], axis[2]);
	     drawScene();
	   }
	   var y0zoom = 0;
	   var zoom0 = 1;
	   var zoomdown = function(x, y) {
	     y0zoom = y;
	     zoom0 = log(zoom);
	   }
	   var zoommove = function(x, y) {
	     zoom = exp(zoom0 + (y-y0zoom)/height);
	     drawScene();
	   }
	   var y0fov = 0;
	   var fov0 = 1;
	   var fovdown = function(x, y) {
	     y0fov = y;
	     fov0 = fov;
	   }
	   var fovmove = function(x, y) {
	     fov = max(1, min(179, fov0 + 180*(y-y0fov)/height));
	     drawScene();
	   }
	   var mousedown = [trackballdown, zoomdown, fovdown];
	   var mousemove = [trackballmove, zoommove, fovmove];
	   function relMouseCoords(event){
	     var totalOffsetX = 0;
	     var totalOffsetY = 0;
	     var currentElement = canvas;
	     do{
	       totalOffsetX += currentElement.offsetLeft;
	       totalOffsetY += currentElement.offsetTop;
	     }
	     while(currentElement = currentElement.offsetParent)
	     var canvasX = event.pageX - totalOffsetX;
	     var canvasY = event.pageY - totalOffsetY;
	     return {x:canvasX, y:canvasY}
	   }
	   canvas.onmousedown = function ( ev ){
	     if (!ev.which) // Use w3c defns in preference to MS
	       switch (ev.button) {
	       case 0: ev.which = 1; break;
	       case 1: 
	       case 4: ev.which = 2; break;
	       case 2: ev.which = 3;
	     }
	     drag = ev.which;
	     var f = mousedown[drag-1];
	     if (f) {
	       var coords = relMouseCoords(ev);
	       f(coords.x, height-coords.y); 
	       ev.preventDefault();
	     }
	   }    
	   canvas.onmouseup = function ( ev ){	
	     drag = 0;
	   }
	   canvas.onmouseout = canvas.onmouseup;
	   canvas.onmousemove = function ( ev ){
	     if ( drag == 0 ) return;
	     var f = mousemove[drag-1];
	     if (f) {
	       var coords = relMouseCoords(ev);
	       f(coords.x, height-coords.y);
	     }
	   }
	   var wheelHandler = function(ev) {
	     var del = 1.1;
	     if (ev.shiftKey) del = 1.01;
	     var ds = ((ev.detail || ev.wheelDelta) > 0) ? del : (1 / del);
	     zoom *= ds;
	     drawScene();
	     ev.preventDefault();
	   };
	   canvas.addEventListener("DOMMouseScroll", wheelHandler, false);
	   canvas.addEventListener("mousewheel", wheelHandler, false);
	}
</script>
<canvas id="testglcanvas" width="1" height="1"></canvas> 
<p id="testgldebug">
<img src="testglsnapshot.png" alt="testglsnapshot" width=701/><br>
	You must enable Javascript to view this page properly.</p>
<script>testglwebGLStart();</script>



