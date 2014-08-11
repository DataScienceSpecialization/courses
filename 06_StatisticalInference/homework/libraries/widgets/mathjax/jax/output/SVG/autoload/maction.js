<<<<<<< HEAD
/*
 *  /MathJax/jax/output/SVG/autoload/maction.js
 *  
 *  Copyright (c) 2012 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var f="2.0";var c=MathJax.ElementJax.mml,g=MathJax.OutputJax.SVG;var d,e,b;var a=g.config.tooltip=MathJax.Hub.Insert({delayPost:600,delayClear:600,offsetX:10,offsetY:5},g.config.tooltip||{});c.maction.Augment({SVGtooltip:MathJax.HTML.addElement(document.body,"div",{id:"MathJax_SVG_Tooltip"}),toSVG:function(h,k){this.SVGgetStyles();var i=this.SVG();var j=this.selected();if(j){i.Add(this.SVGdataStretched(this.Get("selection")-1,h,k));this.SVGhandleHitBox(i)}this.SVGhandleSpace(i);this.SVGhandleColor(i);this.SVGsaveData(i);return i},SVGhandleHitBox:function(h){var j=g.addElement(h.element,"rect",{width:h.w,height:h.h+h.d,y:-h.d,fill:"none","pointer-events":"all"});var i=this.Get("actiontype");if(this.SVGaction[i]){this.SVGaction[i].call(this,h,j,this.Get("selection"))}},SVGstretchH:c.mbase.prototype.SVGstretchH,SVGstretchV:c.mbase.prototype.SVGstretchV,SVGaction:{toggle:function(h,j,i){this.selection=i;g.Element(j,{cursor:"pointer"});j.onclick=MathJax.Callback(["SVGclick",this])},statusline:function(h,j,i){j.onmouseover=MathJax.Callback(["SVGsetStatus",this]),j.onmouseout=MathJax.Callback(["SVGclearStatus",this]);j.onmouseover.autoReset=j.onmouseout.autoReset=true},tooltip:function(h,j,i){j.onmouseover=MathJax.Callback(["SVGtooltipOver",this]),j.onmouseout=MathJax.Callback(["SVGtooltipOut",this]);j.onmouseover.autoReset=j.onmouseout.autoReset=true}},SVGclick:function(j){this.selection++;if(this.selection>this.data.length){this.selection=1}var i=this;while(i.type!=="math"){i=i.inherit}var h=MathJax.Hub.getJaxFor(i.inputID);h.Update();return MathJax.Extension.MathEvents.Event.False(j)},SVGsetStatus:function(h){window.status=((this.data[1]&&this.data[1].isToken)?this.data[1].data.join(""):this.data[1].toString())},SVGclearStatus:function(h){window.status=""},SVGtooltipOver:function(i){if(!i){i=window.event}if(b){clearTimeout(b);b=null}if(e){clearTimeout(e)}var h=i.pageX;var k=i.pageY;if(h==null){h=i.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;k=i.clientY+document.body.scrollTop+document.documentElement.scrollTop}var j=MathJax.Callback(["SVGtooltipPost",this,h+a.offsetX,k+a.offsetY]);e=setTimeout(j,a.delayPost)},SVGtooltipOut:function(h){if(e){clearTimeout(e);e=null}if(b){clearTimeout(b)}var i=MathJax.Callback(["SVGtooltipClear",this,80]);b=setTimeout(i,a.delayClear)},SVGtooltipPost:function(h,o){e=null;if(b){clearTimeout(b);b=null}var n=this.SVGtooltip;n.style.display="block";n.style.opacity="";if(this===d){return}n.style.left=h+"px";n.style.top=o+"px";n.innerHTML="";var k=MathJax.HTML.addElement(n,"span");var m=this;while(m.type!=="math"){m=m.inherit}var i=MathJax.Hub.getJaxFor(m.inputID);this.em=c.mbase.prototype.em=i.SVG.em;this.ex=i.SVG.ex;this.linebreakWidth=i.SVG.lineWidth*1000;this.cwidth=i.SVG.cwidth;var j=this.data[1];m=c.math(j);try{m.toSVG(k,n)}catch(l){this.SetData(1,j);n.style.display="none";if(!l.restart){throw l}MathJax.Callback.After(["SVGtooltipPost",this,h,o],l.restart);return}this.SetData(1,j);d=this},SVGtooltipClear:function(i){var h=this.SVGtooltip;if(i<=0){h.style.display="none";h.style.opacity="";b=null}else{h.style.opacity=i/100;b=setTimeout(MathJax.Callback(["SVGtooltipClear",this,i-20]),50)}}});MathJax.Hub.Startup.signal.Post("SVG maction Ready");MathJax.Ajax.loadComplete(g.autoloadDir+"/maction.js")});

=======
/*
 *  /MathJax/jax/output/SVG/autoload/maction.js
 *  
 *  Copyright (c) 2012 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var f="2.0";var c=MathJax.ElementJax.mml,g=MathJax.OutputJax.SVG;var d,e,b;var a=g.config.tooltip=MathJax.Hub.Insert({delayPost:600,delayClear:600,offsetX:10,offsetY:5},g.config.tooltip||{});c.maction.Augment({SVGtooltip:MathJax.HTML.addElement(document.body,"div",{id:"MathJax_SVG_Tooltip"}),toSVG:function(h,k){this.SVGgetStyles();var i=this.SVG();var j=this.selected();if(j){i.Add(this.SVGdataStretched(this.Get("selection")-1,h,k));this.SVGhandleHitBox(i)}this.SVGhandleSpace(i);this.SVGhandleColor(i);this.SVGsaveData(i);return i},SVGhandleHitBox:function(h){var j=g.addElement(h.element,"rect",{width:h.w,height:h.h+h.d,y:-h.d,fill:"none","pointer-events":"all"});var i=this.Get("actiontype");if(this.SVGaction[i]){this.SVGaction[i].call(this,h,j,this.Get("selection"))}},SVGstretchH:c.mbase.prototype.SVGstretchH,SVGstretchV:c.mbase.prototype.SVGstretchV,SVGaction:{toggle:function(h,j,i){this.selection=i;g.Element(j,{cursor:"pointer"});j.onclick=MathJax.Callback(["SVGclick",this])},statusline:function(h,j,i){j.onmouseover=MathJax.Callback(["SVGsetStatus",this]),j.onmouseout=MathJax.Callback(["SVGclearStatus",this]);j.onmouseover.autoReset=j.onmouseout.autoReset=true},tooltip:function(h,j,i){j.onmouseover=MathJax.Callback(["SVGtooltipOver",this]),j.onmouseout=MathJax.Callback(["SVGtooltipOut",this]);j.onmouseover.autoReset=j.onmouseout.autoReset=true}},SVGclick:function(j){this.selection++;if(this.selection>this.data.length){this.selection=1}var i=this;while(i.type!=="math"){i=i.inherit}var h=MathJax.Hub.getJaxFor(i.inputID);h.Update();return MathJax.Extension.MathEvents.Event.False(j)},SVGsetStatus:function(h){window.status=((this.data[1]&&this.data[1].isToken)?this.data[1].data.join(""):this.data[1].toString())},SVGclearStatus:function(h){window.status=""},SVGtooltipOver:function(i){if(!i){i=window.event}if(b){clearTimeout(b);b=null}if(e){clearTimeout(e)}var h=i.pageX;var k=i.pageY;if(h==null){h=i.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;k=i.clientY+document.body.scrollTop+document.documentElement.scrollTop}var j=MathJax.Callback(["SVGtooltipPost",this,h+a.offsetX,k+a.offsetY]);e=setTimeout(j,a.delayPost)},SVGtooltipOut:function(h){if(e){clearTimeout(e);e=null}if(b){clearTimeout(b)}var i=MathJax.Callback(["SVGtooltipClear",this,80]);b=setTimeout(i,a.delayClear)},SVGtooltipPost:function(h,o){e=null;if(b){clearTimeout(b);b=null}var n=this.SVGtooltip;n.style.display="block";n.style.opacity="";if(this===d){return}n.style.left=h+"px";n.style.top=o+"px";n.innerHTML="";var k=MathJax.HTML.addElement(n,"span");var m=this;while(m.type!=="math"){m=m.inherit}var i=MathJax.Hub.getJaxFor(m.inputID);this.em=c.mbase.prototype.em=i.SVG.em;this.ex=i.SVG.ex;this.linebreakWidth=i.SVG.lineWidth*1000;this.cwidth=i.SVG.cwidth;var j=this.data[1];m=c.math(j);try{m.toSVG(k,n)}catch(l){this.SetData(1,j);n.style.display="none";if(!l.restart){throw l}MathJax.Callback.After(["SVGtooltipPost",this,h,o],l.restart);return}this.SetData(1,j);d=this},SVGtooltipClear:function(i){var h=this.SVGtooltip;if(i<=0){h.style.display="none";h.style.opacity="";b=null}else{h.style.opacity=i/100;b=setTimeout(MathJax.Callback(["SVGtooltipClear",this,i-20]),50)}}});MathJax.Hub.Startup.signal.Post("SVG maction Ready");MathJax.Ajax.loadComplete(g.autoloadDir+"/maction.js")});

>>>>>>> 1125e7d02597aa72ba764ce21ea3618c1ee3cd20
