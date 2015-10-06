"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP,r=n.name,d=n.version;e["default"]=t["default"].extend({version:d,name:r})}),define("dummy/components/clip-board",["exports","ember-clipboard/components/clip-board"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){var n=a["default"].APP,r=n.name,d=n.version;e["default"]={name:"App Version",initialize:t["default"](r,d)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({actions:{onSuccess:function(e){window.alert(e.text)},onError:function(e){console.log(e)}}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:9,column:10},end:{line:11,column:10}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            ");e.appendChild(t,a);var a=e.createElement("span");e.setAttribute(a,"class","octicon octicon-clippy"),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:36,column:8},end:{line:38,column:8}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("          Cut to clipboard\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:57,column:6},end:{line:59,column:6}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        Copy to clipboard\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:74,column:6},end:{line:76,column:6}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        Copy to clipboard\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:91,column:0}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","one-half column centered");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","example");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","input-group");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createComment(" Target ");e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("input");e.setAttribute(i,"id","foo"),e.setAttribute(i,"type","text"),e.setAttribute(i,"value","https://github.com/zenorocha/clipboard.js.git"),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("span");e.setAttribute(i,"class","input-group-button");var l=e.createTextNode("\n          ");e.appendChild(i,l);var l=e.createComment(" Trigger ");e.appendChild(i,l);var l=e.createTextNode("\n");e.appendChild(i,l);var l=e.createComment("");e.appendChild(i,l);var l=e.createTextNode("        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","highlight");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("pre"),i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("code");e.setAttribute(i,"class","hbs");var l=e.createTextNode('\n<!-- Target -->\n<input id="foo" type="text" value="https://github.com/jpadilla/ember-clipboard.git">\n\n<!-- Trigger -->\n');e.appendChild(i,l);var l=e.createTextNode('{{#clip-board class="btn" target="#foo"}}\n  <span class="octicon octicon-clippy"></span>\n');e.appendChild(i,l);var l=e.createTextNode("{{/clip-board}}\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","example");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","input-group");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createComment(" Target ");e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("textarea");e.setAttribute(i,"id","bar"),e.setAttribute(i,"cols","62"),e.setAttribute(i,"rows","5"),e.setAttribute(i,"autocomplete","off"),e.setAttribute(i,"autocorrect","off"),e.setAttribute(i,"autocapitalize","off"),e.setAttribute(i,"spellcheck","false");var l=e.createTextNode("Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","form-actions");var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createComment(" Trigger ");e.appendChild(d,i);var i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","highlight");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("pre"),i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("code");e.setAttribute(i,"class","hbs");var l=e.createTextNode('\n<!-- Target -->\n<textarea id="bar" cols="62" rows="5" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lÃ¡ , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. MÃ© faiz elementum girarzis, nisi eros vermeio, in elementis mÃ© pra quem Ã© amistosis quis leo. Manduma pindureta quium dia nois paga.</textarea>\n\n<!-- Trigger -->\n');e.appendChild(i,l);var l=e.createTextNode('{{#clip-board class="btn" action="cut" target="#bar"}}\nCut to clipboard\n');e.appendChild(i,l);var l=e.createTextNode("{{/clip-board}}\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","example");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment(" Trigger ");e.appendChild(r,d);var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","highlight");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("pre"),i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("code");e.setAttribute(i,"class","hbs");var l=e.createTextNode("\n<!-- Trigger -->\n");e.appendChild(i,l);var l=e.createTextNode('{{#clip-board text="Action... Cut!"}}\n  Copy to clipboard\n');e.appendChild(i,l);var l=e.createTextNode("{{/clip-board}}\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","example");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment(" Trigger ");e.appendChild(r,d);var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","highlight");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("pre"),i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("code");e.setAttribute(i,"class","hbs");var l=e.createTextNode("\n<!-- Trigger -->\n");e.appendChild(i,l);var l=e.createTextNode('{{#clip-board class="btn" text="Action... Cut!" onSuccess="onSuccess" onError="onError"}}\n  Copy to clipboard\n');e.appendChild(i,l);var l=e.createTextNode("{{/clip-board}}\n        ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0,1]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(n,[1,1,5]),3,3),r[1]=e.createMorphAt(e.childAt(n,[5,3]),3,3),r[2]=e.createMorphAt(e.childAt(n,[9]),3,3),r[3]=e.createMorphAt(e.childAt(n,[13]),3,3),r},statements:[["block","clip-board",[],["class","btn","target","#foo"],0,null,["loc",[null,[9,10],[11,25]]]],["block","clip-board",[],["class","btn","action","cut","target","#bar"],1,null,["loc",[null,[36,8],[38,23]]]],["block","clip-board",[],["class","btn","text","Action... Cut!"],2,null,["loc",[null,[57,6],[59,21]]]],["block","clip-board",[],["class","btn","text","Action... Cut!","onSuccess","onSuccess","onError","onError"],3,null,["loc",[null,[74,6],[76,21]]]]],locals:[],templates:[e,t,a,n]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-clipboard",version:"1.0.0+05ba9d98"});