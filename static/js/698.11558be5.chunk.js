(self.webpackChunkmintforfree=self.webpackChunkmintforfree||[]).push([[698],{66698:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(74165),i=n(15861),o=n(15671),s=n(43144),c=n(20548),a=n.n(c),u=n(60136),h=n(27277),f=n(68041),d=n(31567),p=function(e){(0,u.Z)(n,e);var t=(0,h.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).events=new f.EventEmitter,r.hasRegisteredEventListeners=!1,r.connection=r.setConnection(e),r.connection.connected&&r.registerEventListeners(),r}return(0,s.Z)(n,[{key:"connect",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:this.connection,e.next=3,this.open(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.close();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"once",value:function(e,t){this.events.once(e,t)}},{key:"off",value:function(e,t){this.events.off(e,t)}},{key:"removeListener",value:function(e,t){this.events.removeListener(e,t)}},{key:"request",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.requestStrict((0,d.formatJsonRpcRequest)(t.method,t.params||[]),n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"requestStrict",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var o=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(i,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.connection.connected){e.next=9;break}return e.prev=1,e.next=4,o.open();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),s(e.t0);case 9:return o.events.on("".concat(t.id),(function(e){(0,d.isJsonRpcError)(e)?s(e.error):i(e.result)})),e.prev=10,e.next=13,o.connection.send(t,n);case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(10),s(e.t1);case 18:case"end":return e.stop()}}),e,null,[[1,6],[10,15]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"setConnection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.connection;return e}},{key:"onPayload",value:function(e){this.events.emit("payload",e),(0,d.isJsonRpcResponse)(e)?this.events.emit("".concat(e.id),e):this.events.emit("message",{type:e.method,data:e.params})}},{key:"open",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:this.connection,this.connection!==t||!this.connection.connected){e.next=3;break}return e.abrupt("return");case 3:if(this.connection.connected&&this.close(),"string"!==typeof t){e.next=8;break}return e.next=7,this.connection.open(t);case 7:t=this.connection;case 8:return this.connection=this.setConnection(t),e.next=11,this.connection.open();case 11:this.registerEventListeners(),this.events.emit("connect");case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"close",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connection.close();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"registerEventListeners",value:function(){var e=this;this.hasRegisteredEventListeners||(this.connection.on("payload",(function(t){return e.onPayload(t)})),this.connection.on("close",(function(){return e.events.emit("disconnect")})),this.connection.on("error",(function(t){return e.events.emit("error",t)})),this.hasRegisteredEventListeners=!0)}}]),n}(d.IJsonRpcProvider),l=n(7605),v=n.n(l),y=n(76090),w={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"},b=function(){function e(t){if((0,o.Z)(this,e),this.url=t,this.events=new f.EventEmitter,this.isAvailable=!1,this.registering=!1,!(0,d.isHttpUrl)(t))throw new Error("Provided URL is not compatible with HTTP connection: ".concat(t));this.url=t}return(0,s.Z)(e,[{key:"connected",get:function(){return this.isAvailable}},{key:"connecting",get:function(){return this.registering}},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"once",value:function(e,t){this.events.once(e,t)}},{key:"off",value:function(e,t){this.events.off(e,t)}},{key:"removeListener",value:function(e,t){this.events.removeListener(e,t)}},{key:"open",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:this.url,e.next=3,this.register(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"close",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isAvailable){e.next=2;break}throw new Error("Connection already closed");case 2:this.onClose();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,o,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isAvailable){e.next=3;break}return e.next=3,this.register();case 3:return e.prev=3,i=(0,y.u)(t),e.next=7,v()(this.url,Object.assign(Object.assign({},w),{body:i}));case 7:return o=e.sent,e.next=10,o.json();case 10:s=e.sent,this.onPayload({data:s}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),this.onError(t.id,e.t0);case 17:case"end":return e.stop()}}),e,this,[[3,14]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n,i,o=this,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:this.url,(0,d.isHttpUrl)(t)){e.next=3;break}throw new Error("Provided URL is not compatible with HTTP connection: ".concat(t));case 3:if(!this.registering){e.next=5;break}return e.abrupt("return",new Promise((function(e,t){o.events.once("register_error",(function(e){t(e)})),o.events.once("open",(function(){if("undefined"===typeof o.isAvailable)return t(new Error("HTTP connection is missing or invalid"));e()}))})));case 5:return this.url=t,this.registering=!0,e.prev=7,n=(0,y.u)({id:1,jsonrpc:"2.0",method:"test",params:[]}),e.next=11,v()(t,Object.assign(Object.assign({},w),{body:n}));case 11:this.onOpen(),e.next=20;break;case 14:throw e.prev=14,e.t0=e.catch(7),i=this.parseError(e.t0),this.events.emit("register_error",i),this.onClose(),i;case 20:case"end":return e.stop()}}),e,this,[[7,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"onOpen",value:function(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}},{key:"onClose",value:function(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}},{key:"onPayload",value:function(e){if("undefined"!==typeof e.data){var t="string"===typeof e.data?(0,y.D)(e.data):e.data;this.events.emit("payload",t)}}},{key:"onError",value:function(e,t){var n=this.parseError(t),r=n.message||n.toString(),i=(0,d.formatJsonRpcError)(e,r);this.events.emit("payload",i)}},{key:"parseError",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.url;return(0,d.parseConnectionError)(e,t,"HTTP")}}]),e}(),m=n(3194),g=n(78453),k=n(62397),x=n.n(k),E=function(e){(0,u.Z)(n,e);var t=(0,h.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this)).events=new(a()),r.accounts=[],r.chainId=1,r.pending=!1,r.bridge="https://bridge.walletconnect.org",r.qrcode=!0,r.qrcodeModalOptions=void 0,r.opts=e,r.chainId=(null===e||void 0===e?void 0:e.chainId)||r.chainId,r.wc=r.register(e),r}return(0,s.Z)(n,[{key:"connected",get:function(){return"undefined"!==typeof this.wc&&this.wc.connected}},{key:"connecting",get:function(){return this.pending}},{key:"connector",get:function(){return this.wc=this.register(this.opts),this.wc}},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"once",value:function(e,t){this.events.once(e,t)}},{key:"off",value:function(e,t){this.events.off(e,t)}},{key:"removeListener",value:function(e,t){this.events.removeListener(e,t)}},{key:"open",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.connected){e.next=3;break}return this.onOpen(),e.abrupt("return");case 3:return e.abrupt("return",new Promise((function(e,r){n.on("error",(function(e){r(e)})),n.on("open",(function(){e()})),n.create(t)})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"close",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof this.wc){e.next=2;break}return e.abrupt("return");case 2:this.wc.connected&&this.wc.killSession(),this.onClose();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.wc=this.register(this.opts),this.connected){e.next=4;break}return e.next=4,this.open();case 4:this.sendPayload(t).then((function(e){return n.events.emit("payload",e)})).catch((function(e){return n.events.emit("payload",(0,d.formatJsonRpcError)(t.id,e.message))}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=(null===e||void 0===e?void 0:e.connector)?e.connector.bridge:(null===e||void 0===e?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode="undefined"===typeof(null===e||void 0===e?void 0:e.qrcode)||!1!==e.qrcode,this.chainId="undefined"!==typeof(null===e||void 0===e?void 0:e.chainId)?e.chainId:this.chainId,this.qrcodeModalOptions=null===e||void 0===e?void 0:e.qrcodeModalOptions;var t={bridge:this.bridge,qrcodeModal:this.qrcode?x():void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:null===e||void 0===e?void 0:e.storageId,signingMethods:null===e||void 0===e?void 0:e.signingMethods,clientMeta:null===e||void 0===e?void 0:e.clientMeta};if(this.wc="undefined"!==typeof(null===e||void 0===e?void 0:e.connector)?e.connector:new g.Z(t),"undefined"===typeof this.wc)throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}},{key:"onOpen",value:function(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}},{key:"onClose",value:function(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}},{key:"onError",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Failed or Rejected Request",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-32e3,r={id:e.id,jsonrpc:e.jsonrpc,error:{code:n,message:t}};return this.events.emit("payload",r),r}},{key:"create",value:function(e){var t=this;this.wc=this.register(this.opts),this.chainId=e||this.chainId,this.connected||this.pending||(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then((function(){return t.events.emit("created")})).catch((function(e){return t.events.emit("error",e)})))}},{key:"registerConnectorEvents",value:function(){var e=this;this.wc=this.register(this.opts),this.wc.on("connect",(function(t){var n,r;t?e.events.emit("error",t):(e.accounts=(null===(n=e.wc)||void 0===n?void 0:n.accounts)||[],e.chainId=(null===(r=e.wc)||void 0===r?void 0:r.chainId)||e.chainId,e.onOpen())})),this.wc.on("disconnect",(function(t){t?e.events.emit("error",t):e.onClose()})),this.wc.on("modal_closed",(function(){e.events.emit("error",new Error("User closed modal"))})),this.wc.on("session_update",(function(t,n){var r=n.params[0],i=r.accounts,o=r.chainId;(!e.accounts||i&&e.accounts!==i)&&(e.accounts=i,e.events.emit("accountsChanged",i)),(!e.chainId||o&&e.chainId!==o)&&(e.chainId=o,e.events.emit("chainChanged",o))}))}},{key:"sendPayload",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.wc=this.register(this.opts),e.prev=1,e.next=4,this.wc.unsafeSend(t);case 4:return n=e.sent,e.abrupt("return",this.sanitizeResponse(n));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",this.onError(t,e.t0.message));case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"sanitizeResponse",value:function(e){return"undefined"!==typeof e.error&&"undefined"===typeof e.error.code?(0,d.formatJsonRpcError)(e.id,e.error.message):e}}]),n}(n(13594).XR),Z=function(){function e(t){(0,o.Z)(this,e),this.events=new(a()),this.rpc={infuraId:null===t||void 0===t?void 0:t.infuraId,custom:null===t||void 0===t?void 0:t.rpc},this.signer=new p(new E(t));var n=this.signer.connection.chainId||(null===t||void 0===t?void 0:t.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}return(0,s.Z)(e,[{key:"connected",get:function(){return this.signer.connection.connected}},{key:"connector",get:function(){return this.signer.connection.connector}},{key:"accounts",get:function(){return this.signer.connection.accounts}},{key:"chainId",get:function(){return this.signer.connection.chainId}},{key:"rpcUrl",get:function(){var e;return(null===(e=this.http)||void 0===e?void 0:e.connection).url||""}},{key:"request",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.method,e.next="eth_requestAccounts"===e.t0?3:"eth_accounts"===e.t0?6:"eth_chainId"===e.t0?7:8;break;case 3:return e.next=5,this.connect();case 5:case 6:return e.abrupt("return",this.signer.connection.accounts);case 7:return e.abrupt("return",this.signer.connection.chainId);case 8:return e.abrupt("break",9);case 9:if(!m.V7.includes(t.method)){e.next=11;break}return e.abrupt("return",this.signer.request(t));case 11:if("undefined"!==typeof this.http){e.next=13;break}throw new Error("Cannot request JSON-RPC method (".concat(t.method,") without provided rpc url"));case 13:return e.abrupt("return",this.http.request(t));case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendAsync",value:function(e,t){this.request(e).then((function(e){return t(null,e)})).catch((function(e){return t(e,void 0)}))}},{key:"enable",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request({method:"eth_requestAccounts"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.signer.connection.connected){e.next=3;break}return e.next=3,this.signer.connect();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.signer.connection.connected){e.next=3;break}return e.next=3,this.signer.disconnect();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"once",value:function(e,t){this.events.once(e,t)}},{key:"removeListener",value:function(e,t){this.events.removeListener(e,t)}},{key:"off",value:function(e,t){this.events.off(e,t)}},{key:"isWalletConnect",get:function(){return!0}},{key:"registerEventListeners",value:function(){var e=this;this.signer.connection.on("accountsChanged",(function(t){e.events.emit("accountsChanged",t)})),this.signer.connection.on("chainChanged",(function(t){e.http=e.setHttpProvider(t),e.events.emit("chainChanged",t)})),this.signer.on("disconnect",(function(){e.events.emit("disconnect")}))}},{key:"setHttpProvider",value:function(e){var t=(0,m.RM)(e,this.rpc);if("undefined"!==typeof t)return new p(new b(t))}}]),e}(),A=Z},7605:function(e,t){var n="undefined"!==typeof self?self:this,r=function(){function e(){this.fetch=!1,this.DOMException=n.DOMException}return e.prototype=n,new e}();!function(e){!function(t){var n="URLSearchParams"in e,r="Symbol"in e&&"iterator"in Symbol,i="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in e,s="ArrayBuffer"in e;if(s)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function u(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function h(e){return"string"!==typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function p(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function l(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function v(e){var t=new FileReader,n=l(t);return t.readAsArrayBuffer(e),n}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&i&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||a(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(v)}),this.text=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,n=l(t);return t.readAsText(e),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=u(e),t=h(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},d.prototype.delete=function(e){delete this.map[u(e)]},d.prototype.get=function(e){return e=u(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(u(e))},d.prototype.set=function(e,t){this.map[u(e)]=h(t)},d.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),f(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),f(e)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(e,t){var n=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=function(e){var t=e.toUpperCase();return b.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function g(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}})),t}function k(e){var t=new d;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},w.call(m.prototype),w.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];x.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(A){t.DOMException=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function Z(e,n){return new Promise((function(r,o){var s=new m(e,n);if(s.signal&&s.signal.aborted)return o(new t.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function a(){c.abort()}c.onload=function(){var e={status:c.status,statusText:c.statusText,headers:k(c.getAllResponseHeaders()||"")};e.url="responseURL"in c?c.responseURL:e.headers.get("X-Request-URL");var t="response"in c?c.response:c.responseText;r(new x(t,e))},c.onerror=function(){o(new TypeError("Network request failed"))},c.ontimeout=function(){o(new TypeError("Network request failed"))},c.onabort=function(){o(new t.DOMException("Aborted","AbortError"))},c.open(s.method,s.url,!0),"include"===s.credentials?c.withCredentials=!0:"omit"===s.credentials&&(c.withCredentials=!1),"responseType"in c&&i&&(c.responseType="blob"),s.headers.forEach((function(e,t){c.setRequestHeader(t,e)})),s.signal&&(s.signal.addEventListener("abort",a),c.onreadystatechange=function(){4===c.readyState&&s.signal.removeEventListener("abort",a)}),c.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))}Z.polyfill=!0,e.fetch||(e.fetch=Z,e.Headers=d,e.Request=m,e.Response=x),t.Headers=d,t.Request=m,t.Response=x,t.fetch=Z,Object.defineProperty(t,"__esModule",{value:!0})}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var i=r;(t=i.fetch).default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t}}]);