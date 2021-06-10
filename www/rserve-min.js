"use strict"
function surfeR(e,t,n){var r=document.createElement("style")
r.innerHTML='\n.surfeRshowhide .surfeRzoomunzoom {\n  padding: 8px 16px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  border-radius: 25%;\n}\n.surfeRshowhide {\n  background-color: white;\n  border: 2px solid #e7e7e7;\n  color: black;\n}\n.surfeRshowhide:hover {\n  background-color: #e7e7e7;\n}\n.surfeRzoomunzoom {\n  background-color: white;\n  border: 2px solid #006600;\n  color: black;\n}\n.surfeRzoomunzoom:hover {\n  background-color: #006600;\n  color: white;\n}\n.surfeRshowhide:disabled,.surfeRshowhide[disabled] {\n  background:\n  repeating-linear-gradient(\n    45deg,\n    transparent,\n    transparent 10px,\n    #ccc 10px,\n    #ccc 20px\n  ),\n  linear-gradient(\n    to bottom,\n    #eee,\n    #999\n  );\n}\n.surfeRout {\n  border-style: dashed;\n  border-color: #999999;\n  padding: 5px;\n}\n.surfeRif {\n  margin-top: 5px;\n}\n.aceeditor {\n  height: 80px;\n  width: 100%;\n}\n.surfeRswitch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 24px;\n  margin-left: 2em;\n  margin-right: 0.5em;\n}\n.surfeRswitch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.surfeRslider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.surfeRslider:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\ninput:checked + .surfeRslider {\n  background-color: #006600;\n}\ninput:focus + .surfeRslider {\n  box-shadow: 0 0 1px #006600;\n}\ninput:checked + .surfeRslider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n.surfeRslider.round {\n  border-radius: 34px;\n}\n.surfeRslider.round:before {\n  border-radius: 50%;\n}\n',document.head.appendChild(r)
for(var o,s,u,d,i,l=surfeRuuidv4(),a=document.querySelectorAll("[surfeR]"),m=0;m<a.length;m++)o=document.createElement("div"),o.id="surfeR_"+m+"_code",o.className="aceeditor",o.innerHTML=a[m].innerHTML,a[m].parentNode.replaceChild(o,a[m]),aceeditors[m]=ace.edit("surfeR_"+m+"_code",{theme:"ace/theme/monokai",mode:"ace/mode/r",maxLines:30,wrap:!0,autoScrollEditorIntoView:!0}),s=document.createElement("form"),s.action=e,s.method="POST",s.target="surfeR_"+m+"_if",s.onsubmit=Function("event","surfeRsubmit("+m+");"),i=document.createElement("textarea"),i.id="surfeR_"+m+"_ta",i.name="code",i.style.display="none",s.append(i),i=document.createElement("input"),i.type="hidden",i.name="block",i.value=surfeRpad(m,3),s.append(i),i=document.createElement("input"),i.type="hidden",i.name="sess",i.value=n,s.append(i),i=document.createElement("input"),i.type="hidden",i.name="uuid",i.value=l,s.append(i),i=document.createElement("input"),i.id="surfeR_"+m+"_submit",i.setAttribute("surfeR_submit",""),i.type="submit",i.className="surfeRshowhide",i.value="▶️ Run code!",s.append(i),u=document.createElement("label"),u.className="surfeRswitch",i=document.createElement("input"),i.id="surfeR_"+m+"_togper",i.name="persistent",i.setAttribute("surfeR_togper",""),i.type="checkbox",i.checked=t,i.onchange=Function("event","surfeRtoggle('surfeR_"+m+"_togper');"),u.append(i),i=document.createElement("span"),i.className="surfeRslider round",u.append(i),s.append(u),i=document.createElement("span"),i.innerHTML="Persistent",s.append(i),i=document.createElement("input"),i.id="surfeR_"+m+"_runprev",i.setAttribute("surfeR_runprev",""),i.type="button",i.className="surfeRshowhide",i.value="⏬️ Run previous",i.style.marginLeft="1em",i.style.display=t&m>0?"":"none",i.onclick=Function("event","surfeRrunupto(0,"+m+");"),s.append(i),o.parentNode.insertBefore(s,o.nextSibling),d=document.createElement("div"),d.className="surfeRout",d.id="surfeR_"+m+"_div",d.style.display="none",i=document.createElement("button"),i.className="surfeRzoomunzoom",i.onclick=Function("event","surfeRzoom('surfeR_"+m+"_div', 'surfeR_"+m+"_if');"),i.innerHTML="🔎 <tt>Zoom</tt>",d.append(i),i=document.createElement("button"),i.className="surfeRzoomunzoom",i.onclick=Function("event","surfeRunzoom('surfeR_"+m+"_div', 'surfeR_"+m+"_if');"),i.innerHTML="🔎 <tt>UnZoom</tt>",i.style.display="none",d.append(i),i=document.createElement("button"),i.className="surfeRshowhide",i.onclick=Function("event","surfeRhide('surfeR_"+m+"_div', 'surfeR_"+m+"_if');"),i.innerHTML="🙈 <tt>Hide</tt>",d.append(i),i=document.createElement("button"),i.className="surfeRshowhide",i.onclick=Function("event","surfeRshow('surfeR_"+m+"_div', 'surfeR_"+m+"_if');"),i.innerHTML="👀 <tt>Show</tt>",i.style.display="none",d.append(i),i=document.createElement("iframe"),i.className="surfeRif",i.id="surfeR_"+m+"_if",i.name="surfeR_"+m+"_if",i.width="100%",d.append(i),s.parentNode.insertBefore(d,s.nextSibling),d.parentNode.insertBefore(document.createElement("br"),d.nextSibling)}function surfeRsubmit(e){document.getElementById("surfeR_"+e+"_submit").setAttribute("disabled","disabled"),setTimeout("document.getElementById('surfeR_"+e+"_submit').removeAttribute('disabled');",2e3),document.getElementById("surfeR_"+e+"_ta").value=aceeditors[e].getValue(),document.getElementById("surfeR_"+e+"_div").setAttribute("style","display:block;"),surfeRshow("surfeR_"+e+"_div","surfeR_"+e+"_if")}function surfeRrunupto(e,t){document.getElementById("surfeR_"+t+"_runprev").setAttribute("disabled","disabled"),document.getElementById("surfeR_"+e+"_runprev").setAttribute("disabled","disabled"),setTimeout("document.getElementById('surfeR_"+e+"_runprev').removeAttribute('disabled');",2e3)
var n=document.querySelectorAll("[surfeR_submit]")
t>e&&e<n.length&&(n[e].click(),t>e+1?setTimeout("surfeRrunupto("+(e+1)+","+t+")",500):setTimeout("document.getElementById('surfeR_"+t+"_runprev').removeAttribute('disabled');",2e3))}function surfeRtoggle(e){for(var t=document.getElementById(e).checked,n=document.querySelectorAll("[surfeR_togper]"),r=document.querySelectorAll("[surfeR_runprev]"),o=0;o<n.length;o++)n[o].checked=t,r[o].style.display=t&o>0?"":"none"}function surfeRzoom(e,t){document.getElementById(e).setAttribute("style","position: fixed; z-index: 1000; top: 50px; right: 50px; bottom: 50px; left: 50px; background-color: rgba(255,255,255,1); box-shadow: 5px 10px 8px #888888;")
var n=window.getComputedStyle(document.getElementById(e),null),r=window.getComputedStyle(document.getElementById(t),null),o=window.getComputedStyle(document.getElementById(e).getElementsByTagName("BUTTON")[0],null)
riframeheights[t]=r.getPropertyValue("height"),document.getElementById(t).height=parseFloat(n.getPropertyValue("height"))-parseFloat(o.getPropertyValue("height"))-20,document.getElementById(e).getElementsByTagName("BUTTON")[0].style.display="none",document.getElementById(e).getElementsByTagName("BUTTON")[1].style.display=""}function surfeRunzoom(e,t){document.getElementById(e).setAttribute("style",rdivstyles[e]),document.getElementById(e).style.display="block"
var n=window.getComputedStyle(document.getElementById(t),null).getPropertyValue("display")
document.getElementById(t).setAttribute("style",riframestyles[t]),document.getElementById(t).height=riframeheights[t],document.getElementById(t).style.display=n,document.getElementById(e).getElementsByTagName("BUTTON")[1].style.display="none",document.getElementById(e).getElementsByTagName("BUTTON")[0].style.display=""}function surfeRhide(e,t){document.getElementById(t).style.display="none",document.getElementById(e).getElementsByTagName("BUTTON")[2].style.display="none",document.getElementById(e).getElementsByTagName("BUTTON")[3].style.display=""}function surfeRshow(e,t){document.getElementById(t).style.display="",document.getElementById(e).getElementsByTagName("BUTTON")[3].style.display="none",document.getElementById(e).getElementsByTagName("BUTTON")[2].style.display=""}function surfeRuuidv4(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}function surfeRpad(e,t){var n="000000000"+e
return n.substr(n.length-t)}var riframeheights={},riframestyles={},rdivstyles={},aceeditors={}
