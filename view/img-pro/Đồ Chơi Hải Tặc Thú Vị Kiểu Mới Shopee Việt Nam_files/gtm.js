
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"270",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.targetType"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"environment"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.hostname"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;",["escape",["macro",9],8,16],"?a=",["escape",["macro",9],8,16],":",["escape",["macro",10],8,16],"?a=",["escape",["macro",10],8,16],":",["escape",["macro",11],8,16],"\u0026\u0026(a=",["escape",["macro",11],8,16],");if(a)return a=a.toString(),a=sha256(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.href"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.is_seller"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.gclid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=b.split(\"?\");if(2\u003C=c.length){b=encodeURIComponent(a)+\"\\x3d\";a=c[1].split(\/[\u0026;]\/g);for(var d=a.length;0\u003Cd--;)-1!==a[d].lastIndexOf(b,0)\u0026\u0026a.splice(d,1);b=c[0]+\"?\"+a.join(\"\\x26\")}return b}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.dclid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",13],8,16],"||",["escape",["macro",14],8,16],";\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",16],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"gclid\"));\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",18],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"dclid\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"loginKey\"],a=",["escape",["macro",19],8,16],";-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));var b=document.createElement(\"a\");b.href=a;if(b.search){a=b.search.replace(\"?\",\"\\x26\");var c;for(c=0;c\u003Ce.length;c++){var d=e[c];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";b.search=a}return b.href})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.origin"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],",b=",["escape",["macro",23],8,16],"+",["escape",["macro",21],8,16],";return a=a.split(b)[1]||\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],"||",["escape",["macro",7],8,16],";a+=",["escape",["macro",24],8,16],";\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",16],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"gclid\"));\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",18],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"dclid\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=[\"email\",\"loginKey\"],a=",["escape",["macro",25],8,16],";if(a){-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));a=a.replace(\"?\",\"\\x26\");var b;for(b=0;b\u003Cc.length;b++){var d=c[b];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";a=a.replace(\"\\x26\",\"?\")}return c=a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",16],8,16],")return ",["escape",["macro",16],8,16],";if(",["escape",["macro",18],8,16],")return ",["escape",["macro",18],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",16],8,16],")return\"gclid\";if(",["escape",["macro",18],8,16],")return\"dclid\"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.br","value","UA-149843394-1"],["map","key","shopee.com.mx","value","UA-188791374-1"],["map","key","shopee.com.co","value","UA-197472871-1"],["map","key","shopee.cl","value","UA-197488217-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"info.initial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.tw","value","34651"],["map","key","shopee.vn","value","34657"],["map","key","shopee.co.id","value","34652"],["map","key","shopee.com.my","value","32773"],["map","key","shopee.ph","value","34655"],["map","key","shopee.co.th","value","34654"],["map","key","shopee.sg","value","32772"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"info.impressions.0.targetData.accountInfo.email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 767\u003E=window.innerWidth?\"m\":980\u003C=window.innerWidth?\"d\":\"t\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.cart.items"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];a=",["escape",["macro",39],8,16],"||[];return a=a.map(function(a){return a.targetData.item.itemid})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.itemid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response.checkoutid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.orders"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity});return d})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","SGD"],["map","key","shopee.com.my","value","MYR"],["map","key","shopee.co.th","value","THB"],["map","key","shopee.tw","value","TWD"],["map","key","shopee.co.id","value","IDR"],["map","key","shopee.vn","value","VND"],["map","key","shopee.ph","value","PHP"],["map","key","shopee.com.br","value","BRL"],["map","key","shopee.com.mx","value","MXN"],["map","key","shopee.com.co","value","COP"],["map","key","shopee.cl","value","CLP"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.itemId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],"*",["escape",["macro",49],8,16],"\/1E5;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.catId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.modelId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{currencyCode:\"",["escape",["macro",45],7],"\",add:{products:[{name:\"",["escape",["macro",46],7],"\",id:\"",["escape",["macro",47],7],"\",price:\"",["escape",["macro",50],7],"\",category:\"",["escape",["macro",51],7],"\",variant:\"",["escape",["macro",52],7],"\",quantity:",["escape",["macro",49],8,16],"}]}}};return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.operation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.register_channel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",c=0,a=0;a\u003Cb.length;a++)c+=b[a].total_without_shipping;return c\/1E5})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",43],8,16],",d=0,e=[],b=0;b\u003Ca.length;b++){for(var c=0;c\u003Ca[b].items.length;c++)try{e.push({id:a[b].items[c].itemid,price:a[b].items[c].price\/1E5,name:a[b].items[c].name,quantity:a[b].items[c].quantity,category:a[b].items[c].categories[0].catids.join(\".\")})}catch(f){console.warn(f)}d+=a[b].shipping_fee}a={ecommerce:{purchase:{actionField:{id:\"",["escape",["macro",42],7],"\",revenue:\"",["escape",["macro",56],7],"\",shipping:d\/1E5},products:e}}};str=JSON.stringify(a);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response.orderids"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_med"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","1011l628"],["map","key","shopee.co.th","value","1100l551"],["map","key","shopee.vn","value","1100l682"],["map","key","shopee.ph","value","1100l720"],["map","key","shopee.com.my","value","1100l721"],["map","key","shopee.tw","value","1011l795"],["map","key","shopee.co.id","value","1101l712"],["map","key","shopee.com.br","value","1011l971"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",61],8,16],",e=",["escape",["macro",42],8,16],",f=",["escape",["macro",58],8,16],",g=",["escape",["macro",43],8,16],",c=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+e+\"\/country:\"+",["escape",["macro",33],8,16],"+\"\/currency:\"+",["escape",["macro",45],8,16],"+\"\/\";b=g.filter(function(d){return d.hasOwnProperty(\"items\")});console.log(\"check \"+b);b.forEach(function(d,h){d.items.forEach(function(a){var k=a.itemid,l=a.price\/1E5,m=a.quantity,n=a.shopid;a=a.categories[0].catids[0];c+=\"[category:\"+a+\"\/sku:\"+k+\"\/value:\"+l+\n\"\/quantity:\"+m+\"\/shop_id:\"+n+\"\/order_id:\"+f[h]+\"\/]\"})});console.log(\"::: \"+c);return c})();"]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-125099498-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePostAuthor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePostType2"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.br","value","UA-149843394-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",64]],["map","index","2","group",["macro",65]],["map","index","3","group",["macro",66]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",67]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",68],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",73],8,16],";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+",["escape",["macro",74],8,16],"+\"%\";case \"complete\":return\"Reached the end\"}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.co","value","UA-197472871-1"],["map","key","shopee.com.br","value","UA-149843394-1"],["map","key","shopee.com.mx","value","UA-188791374-1"],["map","key","shopee.com","value","UA-132684032-1"],["map","key","shopee.cl","value","UA-197488217-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",76],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.itemid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",82],8,16],"*",["escape",["macro",83],8,16],"\/1E5;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.catid_be"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.modelId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{remove:{products:[{name:\"",["escape",["macro",80],7],"\",id:\"",["escape",["macro",81],7],"\",price:",["escape",["macro",84],8,16],",category:\"",["escape",["macro",85],7],"\",variant:\"",["escape",["macro",86],7],"\",quantity:",["escape",["macro",83],8,16],"}]}}};return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.login_option"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","2599"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var g=",["escape",["macro",91],8,16],",h=",["escape",["macro",42],8,16],",a=",["escape",["macro",43],8,16],",k=",["escape",["macro",56],8,16],",l=",["escape",["macro",58],8,16],",d=[],e=[],f=[];(a||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){})});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].shopid),e.push(a[b].items[c].itemid),f.push(a[b].items[c].categories[0].catids[0]);d=d.join(\"|\");e=e.join(\"|\");f=f.join(\"|\");a=[];a=l.join(\"|\");return g=\"https:\/\/shopback.go2cloud.org\/aff_l?offer_id\\x3d\"+\ng+\"\\x26adv_sub\\x3d\"+h+\"\\x26adv_sub2\\x3d\"+d+\"\\x26adv_sub3\\x3d\"+e+\"\\x26adv_sub4\\x3d\"+a+\"\\x26adv_sub5\\x3d\"+f+\"\\x26amount\\x3d\"+k})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-9"],["map","key","shopee.sg","value","UA-61921742-12"],["map","key","shopee.com.my","value","UA-61915055-10"],["map","key","shopee.tw","value","UA-61915057-10"],["map","key","shopee.co.th","value","UA-61914165-10"],["map","key","(giaitri|nhasach).shopee.vn","value","UA-61914164-10"],["map","key","shopee.ph","value","UA-61918643-10"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",39],8,16],";return a.map(function(a){return a.targetData.item.itemid})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"loginKey\"],a=location.pathname+location.search,b=document.createElement(\"a\"),d;b.href=a;if(b.search){a=\"\\x26\"+b.search.replace(\"?\",\"\")+\"\\x26\";for(d=0;d\u003Ce.length;d++){var c=e[d];c=a.indexOf(\"\\x26\"+c+\"\\x3d\");if(-1\u003Cc){var f=a.indexOf(\"\\x26\",c+1);a=a.slice(0,c)+a.slice(f,a.length)}}b.search=a.slice(1,a.length-1)}return b.href.replace(location.origin,\"\")})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-14"],["map","key","shopee.sg","value","UA-61921742-14"],["map","key","shopee.com.my","value","UA-61915055-12"],["map","key","shopee.tw","value","UA-61915057-13"],["map","key","shopee.co.th","value","UA-61914165-12"],["map","key","shopee.vn","value","UA-61914164-12"],["map","key","shopee.ph","value","UA-61918643-12"],["map","key","shopee.com.br","value","UA-149843394-3"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",103],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","G-SW6D8G0HXK"],["map","key","shopee.sg","value","G-4572B3WZ33"],["map","key","shopee.com.my","value","G-H06K3499BD"],["map","key","shopee.tw","value","G-RPSBE3TQZZ"],["map","key","shopee.co.th","value","G-L4QXS6R7YG"],["map","key","shopee.vn","value","G-M32T05RVZT"],["map","key","shopee.ph","value","G-CB0044GVTM"],["map","key","shopee.com.br","value","G-0GS478VKB8"],["map","key","shopee.com.mx","value","G-FYC06KL06Z"],["map","key","shopee.com.co","value",""],["map","key","shopee.cl","value",""]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/seller.shopee.co.id\/edu\/","value","UA-61904553-16"],["map","key","https:\/\/seller.shopee.sg\/edu\/","value","UA-61921742-15"],["map","key","https:\/\/seller.shopee.com.my\/edu\/","value","UA-61915055-13"],["map","key","https:\/\/seller.shopee.tw\/edu\/","value","UA-61915057-14"],["map","key","https:\/\/seller.shopee.co.th\/edu\/","value","UA-61914165-13"],["map","key","https:\/\/banhang.shopee.vn\/edu\/","value","UA-61914164-13"],["map","key","https:\/\/seller.shopee.ph\/edu\/","value","UA-61918643-13"],["map","key","https:\/\/seller.shopee.com.br\/edu\/","value","UA-149843394-4"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",107],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"pc\"===",["escape",["macro",2],8,16],")return\"pc\";if(\"rweb\"===",["escape",["macro",2],8,16],"||\"rweb_android\"===",["escape",["macro",2],8,16],"||\"mweb\"===",["escape",["macro",2],8,16],")return\"mobile\"})();"]
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return google_tag_manager[",["escape",["macro",110],8,16],"].dataLayer})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.catid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.subcategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0===",["escape",["macro",113],8,16],"?\"cat1\":\"cat2\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.categoryId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],"\/1E5;return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","100188"],["map","key","shopee.com.my","value","100126"],["map","key","shopee.co.th","value","100245"],["map","key","shopee.sg","value","100376"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","139835196351422"],["map","key","shopee.com.my","value","757894527666013"],["map","key","shopee.co.th","value","905703166183408"],["map","key","shopee.tw","value","503280033161781"],["map","key","shopee.co.id","value","466924370133774"],["map","key","shopee.vn","value","1457130904612161"],["map","key","shopee.ph","value","1478059392491608"],["map","key","shopee.com.br","value","703307166810792"],["map","key","shopee.com.mx","value","850328915514180"],["map","key","shopee.com.co","value","248175970416870"],["map","key","shopee.cl","value","471906773873929"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",119],8,16],"\/1E5;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d.join(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.categoryName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={cookieName:\"_med\",cookieTime:30,keyToGet:\"utm_medium\",keyToSearch:{gclid:\"cpc\"},shopee_refer:\"^((http(s?):\/\/)(([a-z0-9_]+.)?)(shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)\/))\",path:\"\/\",domain:\".\"+location.hostname.replace(\/^www\\.\/i,\"\")};return a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__t"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","11"],["map","key","shopee.com.my","value","8"],["map","key","shopee.co.id","value","14"],["map","key","shopee.vn","value","9"],["map","key","shopee.ph","value","15"],["map","key","shopee.tw","value","13"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],",d=[];a=a.filter(function(a){return a.hasOwnProperty(\"items\")});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].itemid);return d.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",43],8,16],",d=[],e=c.filter(function(a){return a.hasOwnProperty(\"items\")}),a=0;a\u003Ce.length;a++)for(var b=0;b\u003Ce[a].items.length;b++)d.push(c[a].items[b].price\/1E5*c[a].items[b].quantity);return d.join(\"|\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.vn","value","ICay2JfBmbeRc1R5Enp1"],["map","key","shopee.co.id","value","IfdkwXB0UU0fVf5tq0DM"],["map","key","shopee.com.my","value","zlDYA9jJjHq1nyHyCLaU"],["map","key","shopee.ph","value","l7fVkOg4vYLmM3fayfyy"],["map","key","shopee.co.th","value","zXiY0VQ8H0VLkoIzoC80"],["map","key","shopee.sg","value","bQSfrGqH6d5VMoTaldIA"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],b=[],c;for(c in a)b.push(a[c].itemid);return b.join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.shopId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",133],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","AW-692053728"],["map","key","40867978","value","AW-608738266"],["map","key","119485441","value","AW-611398152"],["map","key","75422406","value","AW-573532228"],["map","key","53892420","value","AW-671893767"],["map","key","37251933","value","AW-627492082"],["map","key","29668384","value","AW-620288715"],["map","key","29667634","value","AW-603702153"],["map","key","29668843","value","AW-408024625"],["map","key","91799978","value","AW-443061445"],["map","key","39401693","value","AW-389061488"],["map","key","55027948","value","AW-388991082"],["map","key","51678844","value","AW-389059076"],["map","key","59860978","value","AW-618568444"],["map","key","83276818","value","AW-415164151"],["map","key","43416591","value","AW-388561066"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",133],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","XI9KCPjfkPkBEODN_8kC"],["map","key","40867978","value","BwtQCLqckfkBENq3oqIC"],["map","key","119485441","value","m4CJCMqGtPkBEIjkxKMC"],["map","key","75422406","value","0bLqCO30pvkBEMTQvZEC"],["map","key","53892420","value","In_dCJy6kfkBEIeSscAC"],["map","key","37251933","value","Gx6hCOKHp_kBEPKJm6sC"],["map","key","29668384","value","TIaVCPektPkBEMu146cC"],["map","key","29667634","value","nJPNCPqqtPkBEImH758C"],["map","key","29668843","value","16QSCNPh3PoBELHsx8IB"],["map","key","91799978","value","mgeuCN-2kfEBEMWpotMB"],["map","key","39401693","value","u7dMCOOO-P8BEPC2wrkB"],["map","key","55027948","value","_tejCJGN4f8BEOqQvrkB"],["map","key","51678844","value","txW6COeO__8BEISkwrkB"],["map","key","59860978","value","_xy2CPWd-P8BEPy1-qYC"],["map","key","83276818","value","LTjOCJ6j-P8BEPfN-8UB"],["map","key","43416591","value","OxrmCIHx8v8BEKrxo7kB"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.shopId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",133],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","Bua5CJ-spvkBEODN_8kC"],["map","key","40867978","value","_qDFCLyhkfkBENq3oqIC"],["map","key","119485441","value","bTY-CNrtpvkBEIjkxKMC"],["map","key","75422406","value","9LuNCPmukfkBEMTQvZEC"],["map","key","53892420","value","s6R2CPCgtPkBEIeSscAC"],["map","key","37251933","value","e_jFCJyjtPkBEPKJm6sC"],["map","key","29668384","value","Smq9COWqtPkBEMu146cC"],["map","key","29667634","value","Fdt5CNvSkfkBEImH758C"],["map","key","29668843","value","4-T1COzz8voBELHsx8IB"],["map","key","91799978","value","2LF0CJjX8fABEMWpotMB"],["map","key","39401693","value","xRfRCMuI-P8BEPC2wrkB"],["map","key","55027948","value","i_bpCIKN4f8BEOqQvrkB"],["map","key","51678844","value","Q0iTCMKH__8BEISkwrkB"],["map","key","59860978","value","kmcsCNKb-P8BEPy1-qYC"],["map","key","83276818","value","ytDmCI6f-P8BEPfN-8UB"],["map","key","43416591","value","NUqBCOzt8v8BEKrxo7kB"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",21],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(\/unilever_householdcare)|(\/unilever_beautyhotpro)","value","AW-692053728"],["map","key","\/unilever_personalcare","value","AW-608738266"],["map","key","\/realmeofficialstore","value","AW-611398152"],["map","key","\/nutrilonofficialstore","value","AW-573532228"],["map","key","\/oppo_official_store","value","AW-671893767"],["map","key","\/lorealparis_officialstore","value","AW-627492082"],["map","key","\/garnier_thailand","value","AW-620288715"],["map","key","\/lorealparis","value","AW-603702153"],["map","key","\/maybelline_thailand","value","AW-408024625"],["map","key","\/smartsg","value","AW-443061445"],["map","key","\/mobilehubsg","value","AW-389061488"],["map","key","\/absolutepiano","value","AW-388991082"],["map","key","\/atrixofficial","value","AW-389059076"],["map","key","\/foremost_official_shop","value","AW-618568444"],["map","key","\/samsung_thailand","value","AW-415164151"],["map","key","\/movingpeach.sg","value","AW-388561066"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.isOfficialShopTheme"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.keyword"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","ICM-39-1334"],["map","key","shopee.com.my","value","ICM-11-1270"],["map","key","shopee.co.th","value","ICM-49-1393"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"crto.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",145],8,16],",c=[],a=0;a\u003Cb.length\u0026\u00263\u003Ea;a++)\"object\"==typeof b[a]?b[a].hasOwnProperty(\"id\")\u0026\u0026c.push(b[a].id):(\"number\"==typeof b[a]||\"number\"==typeof b[a])\u0026\u0026c.push(b[a]);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.itemid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.cart.totalPrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",150],8,16],"\/1E5;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}];return a.map(function(a){return a.items.map(function(a){return a.itemid}).join(\"|\")}).join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/\n1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",128],8,16],",b=a.shipping_subtotal\/1E5,c=a.tax_payable\/1E5;return a=a.total_payable\/1E5-b-c})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/shopee.vn\/m\/99","value","1005975"],["map","key","https:\/\/shopee.co.id\/m\/super-shopping-day-129","value","1005969"],["map","key","https:\/\/shopee.co.th\/m\/99","value","1005972"],["map","key","https:\/\/shopee.com.my\/m\/99","value","1005973"],["map","key","https:\/\/shopee.ph\/m\/99","value","953969"],["map","key","https:\/\/shopee.sg\/m\/99","value","1005974"],["map","key","https:\/\/shopee.tw\/m\/99","value","1005971"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",61],8,16],",n=",["escape",["macro",42],8,16],",p=",["escape",["macro",58],8,16],",c=",["escape",["macro",43],8,16],";b=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+n+\"\/country:\"+",["escape",["macro",33],8,16],"+\"\/currency:\"+",["escape",["macro",45],8,16],"+\"\/\";var f=[];(c||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){var b=a.itemid,c=a.price\/1E5,d=a.quantity,e=a.shopid;a=a.categories[0].catids[0];f.push({itemId:b,itemPrice:c,quantity:d,shopId:e,categoryL1:a})})});var d,e,g,h,k,l=[];\n(Object.values(f)||[]).forEach(function(a){d=a.itemId;e=a.itemPrice;g=a.quantity;h=a.categoryL1;k=a.shopId;l.push(\"[category:\"+h+\"\/sku:\"+d+\"\/value:\"+e+\"\/quantity:\"+g+\"\/shop_id:\"+k+\"\/order_id:\"+p+\"\/]\")});var m=\"\";(Object.values(l)||[]).forEach(function(a){m+=a});return c=b+m})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",159],
      "vtp_map":["list",["map","key","0","value","Baseline"],["map","key","10","value","10%"],["map","key","25","value","25%"],["map","key","50","value","50%"],["map","key","75","value","75%"],["map","key","90","value","90%"],["map","key","100","value","100%"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname.split(\"\/\");return a[1].toLowerCase()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.shopid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","G-SW6D8G0HXK"],["map","key","shopee.sg","value",""],["map","key","shopee.com.my","value",""],["map","key","shopee.tw","value",""],["map","key","shopee.co.th","value",""],["map","key","shopee.vn","value",""],["map","key","shopee.ph","value",""],["map","key","shopee.com.br","value",""],["map","key","shopee.com.mx","value",""],["map","key","shopee.com.co","value",""],["map","key","shopee.cl","value",""]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.protocol"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.origin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.protocol"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.gclsrc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_term"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.origin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",168],8,16],";if(0\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",187],8,16],";if(0\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)try{\"undefined\"===typeof d[b[a].items[c].shopid]?d[b[a].items[c].shopid]={shopId:b[a].items[c].shopid,conversionId:\"",["escape",["macro",134],7],"\",conversionLabel:\"",["escape",["macro",135],7],"\",quantity:b[a].items[c].quantity,totalValue:b[a].items[c].price\/1E5*b[a].items[c].quantity}:(d[b[a].items[c].shopid].quantity+=b[a].items[c].quantity,d[b[a].items[c].shopid].totalValue+=b[a].items[c].price\/1E5*b[a].items[c].quantity)}catch(e){console.warn(e)}console.log(\"*****\"+\nObject.values(d));return Object.values(d)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session_id"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":50,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",57],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar p=",["escape",["macro",124],8,16],";document.cookie=p.cookieName+\"\\x3d; expires\\x3dThu, 01 Jan 1970 00:00:01 GMT; path\\x3d\"+p.path+\";domain\\x3d\"+p.domain;\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":3
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":4
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":6
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":8
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":30
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"868286",
      "tag_id":32
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":37
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":38
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"BASKET_TAG",
      "vtp_siteType":["macro",36],
      "vtp_basketArray":["macro",38],
      "tag_id":50
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",36],
      "tag_id":51
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",40],
      "vtp_siteType":["macro",36],
      "tag_id":52
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_productID":["macro",41],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",36],
      "tag_id":53
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"TRANSACTION_TAG",
      "vtp_siteType":["macro",36],
      "vtp_TransactionID":["macro",42],
      "vtp_TransactionArray":["macro",44],
      "tag_id":54
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":true,
      "tag_id":57
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"955851",
      "tag_id":63
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":64
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",53],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"add_to_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":69
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":71
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":75
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":76
    },{
      "function":"__img",
      "metadata":["map"],
      "teardown_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["escape",["macro",62],14,3],
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",53],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"add_to_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":81
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":82
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",63],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",63],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",57],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":86
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":88
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":89
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":91
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",69],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video-playing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",69],
      "vtp_eventAction":["template",["macro",71]," - ",["macro",72]],
      "vtp_eventLabel":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":94
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"blog-link-clicked",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",69],
      "vtp_eventAction":["macro",78],
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",87],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"remove_from_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":100
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",89],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":107
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",90],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":108
    },{
      "function":"__img",
      "metadata":["map"],
      "teardown_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["escape",["macro",92],14,3],
      "tag_id":118
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":120
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":121
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":123
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":124
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":125
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":126
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":127
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":128
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":129
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":130
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":131
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":134
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":135
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":136
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":137
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":138
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":139
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":140
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":141
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":142
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":143
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":144
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":145
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":146
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":147
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":148
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":149
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":150
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":151
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":152
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":153
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":154
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":155
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":156
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":157
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":158
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":159
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":160
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":161
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":163
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":164
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":165
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":166
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":167
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":168
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":169
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":170
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":171
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":172
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":173
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":174
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":175
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":176
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":177
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":178
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-KK6LLGGZNQ",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":179
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "unlimited":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]],["map","name","page","value",["macro",26]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-KK6LLGGZNQ",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":180
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":184
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",102],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":189
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":190
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":191
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":192
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":193
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",102],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":194
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",104],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":195
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",104],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":196
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"myads-link-clicked",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":197
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "unlimited":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]],["map","name","page","value",["macro",26]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",106],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":392
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",106],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":393
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":480
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":510
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":511
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"s-conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":512
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":513
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":514
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":515
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":516
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"s-conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":517
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":518
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",108],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":522
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",108],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":525
    },{
      "function":"__hl",
      "tag_id":541
    },{
      "function":"__tl",
      "vtp_eventName":"pageState",
      "vtp_interval":"3000",
      "vtp_uniqueTriggerId":"7691473_172",
      "tag_id":542
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10, 25, 50, 75, 90",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"7691473_229",
      "vtp_enableTriggerStartOption":true,
      "tag_id":543
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7691473_263",
      "tag_id":544
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7691473_264",
      "tag_id":545
    },{
      "function":"__hl",
      "tag_id":546
    },{
      "function":"__hl",
      "tag_id":547
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"5000",
      "vtp_uniqueTriggerId":"7691473_360",
      "tag_id":548
    },{
      "function":"__hl",
      "tag_id":549
    },{
      "function":"__hl",
      "tag_id":550
    },{
      "function":"__hl",
      "tag_id":551
    },{
      "function":"__cl",
      "tag_id":552
    },{
      "function":"__hl",
      "tag_id":553
    },{
      "function":"__hl",
      "tag_id":554
    },{
      "function":"__hl",
      "tag_id":555
    },{
      "function":"__hl",
      "tag_id":556
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"item_m\":\"item\",data=",["escape",["macro",111],8,16],";(window._bwtm=window._bwtm||[]).push({ch:",["escape",["macro",112],8,16],",iid:",["escape",["macro",41],8,16],",uid:",["escape",["macro",11],8,16],",pid:pid,mid:422});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"home_m\":\"home\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"cat2\"===",["escape",["macro",114],8,16],"?(pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"cat2_m\":\"cat2\",ch=",["escape",["macro",113],8,16],"):(pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"cat1_m\":\"cat1\",ch=",["escape",["macro",115],8,16],");(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,ch:ch,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"cart_m\":\"cart\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,carts:[{itemid:",["escape",["macro",47],8,16],",price:",["escape",["macro",116],8,16],",count:",["escape",["macro",49],8,16],"}],uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"buy_m\":\"buy\",orders=",["escape",["macro",43],8,16],",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push({itemid:orders[i].items[j].itemid,price:orders[i].items[j].price\/1E5,count:orders[i].items[j].quantity});(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,bitem:orderItems,uid:",["escape",["macro",11],8,16],",order:",["escape",["macro",42],8,16],"});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var orderItems=",["escape",["macro",43],8,16],",totalPrice=0,i=0;i\u003CorderItems.length;i++)ga(\"gtm.ec:addProduct\",{id:orderItems[i].itemid,quantity:orderItems[i].quantity}),totalPrice+=orderItems[i].price\/1E5;ga(\"gtm.ec:setAction\",\"purchase\",{id:",["escape",["macro",42],8,16],"+\"\",revenue:totalPrice});ga(\"gtm.send\",\"event\",\"tracking\",\"purchase\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"ios\"===",["escape",["macro",109],8,16],"||\"android\"===",["escape",["macro",109],8,16],"?\"search_m\":\"search\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,kw:",["escape",["macro",97],8,16],",uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003Efor(var cookieName=\"icm-ssid\",iaTransactionId=getCookie(cookieName),iaOfferID=",["escape",["macro",117],8,16],",iaCheckoutId=",["escape",["macro",42],8,16],",orders=",["escape",["macro",43],8,16],",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push(orders[i].items[j]);var iaItemId,iaItemPrice,iaQuantity,iaModelId,iaShopId,iaSubTotal=0;\nfor(i=0;i\u003CorderItems.length;i++){iaItemId=orderItems[i].itemid;iaItemPrice=orderItems[i].price\/1E5;iaQuantity=orderItems[i].quantity;iaModelId=orderItems[i].modelid;iaShopId=orderItems[i].shopid;iaSubTotal=iaItemPrice*iaQuantity;var iaConvesionPixelUrl=\"https:\/\/invol.co\/aff_l?offer_id\\x3d\"+iaOfferID+\"\\x26adv_sub\\x3d\"+iaCheckoutId+\"\\x26adv_sub2\\x3d\"+iaItemId+\"\\x26adv_sub3\\x3d\"+iaModelId+\"\\x26adv_sub4\\x3d\"+iaShopId+\"\\x26amount\\x3d\"+iaSubTotal;\"\"!==iaTransactionId\u0026\u0026(iaConvesionPixelUrl+=\"\\x26transaction_id\\x3d\"+\niaTransactionId);var iaImgPixel=new Image(1,1);iaImgPixel.src=iaConvesionPixelUrl}function getCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/static.masoffer.net\/php\/tracking_js.php?type=general\" async\u003E\u003C\/script\u003E\n\t",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",118],8,16],");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",118],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{search_string:\"",["escape",["macro",97],7],"\",content_ids:\"",["escape",["macro",98],7],"\",content_type:\"product\",content_category:\"Internal Site Search\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{value:",["escape",["macro",120],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",41],7],"\",content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{value:",["escape",["macro",50],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",47],7],"\",content_type:\"product\",contents:[{id:\"",["escape",["macro",47],7],"\",quantity:",["escape",["macro",49],8,16],",item_price:",["escape",["macro",116],8,16],"}]});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:1*",["escape",["macro",56],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",121],7],"\",content_type:\"product\",contents:",["escape",["macro",122],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"ViewCategory\",{content_name:\"",["escape",["macro",123],7],"\",content_category:\"",["escape",["macro",115],7],"\",content_ids:\"",["escape",["macro",40],7],"\",content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(window._bwtm=window._bwtm||[]).push({mid:422,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var AT={cookie_duration:30,aff_utm_source:\"accesstrade\",aff_source_param:\"utm_source\",aff_utm_sources:[\"accesstrade\"],aff_source_params:[\"utm_source\",\"aff_source\"],aff_sid_param:\"aff_sid\",aff_sid_params:[\"aff_sid\",\"aff_sub\"],check_scope:function(){var a=this.get_utm_source()||this.get_param(this.aff_source_param);return a==this.aff_utm_source?!0:!1},track:function(){var a=this.get_param(this.aff_sid_param),b=this.get_param(this.aff_source_param);b==this.aff_utm_source?(this.set_cookie(\"_aff_network\",\nthis.aff_utm_source,this.cookie_duration),a\u0026\u0026this.set_cookie(\"_aff_sid\",a,this.cookie_duration)):void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim()\u0026\u0026this.set_cookie(\"_aff_network\",b,0)},tracks:function(){var a=0,b=\"\",e=\"\";for(c in this.aff_source_params){b=this.aff_source_params[c];var d=this.get_param(b);b=d;if(-1!=this.aff_utm_sources.indexOf(d)){a=1;break}}for(var g in this.aff_sid_params){var c=this.aff_sid_params[g];c=this.get_param(c);if(\"\"!==c){e=c;break}}a\u0026\u0026\"\"!==b?(this.set_cookie(\"_aff_network\",b,this.cookie_duration),\ne\u0026\u0026this.set_cookie(\"_aff_sid\",e,this.cookie_duration)):(!a||void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim())\u0026\u0026this.set_cookie(\"_aff_network\",\"\",0)},track_shopee_order:function(){var a=",["escape",["macro",43],8,16],",b=",["escape",["macro",42],8,16],",e=\"\",d=AT.get_utm_source(),g=AT.get_session_id();if(void 0!==a\u0026\u00260\u003Ca.length\u0026\u0026(\"shopid\"in a[0]||\"catid\"in a[0]))for(var c=0;c\u003Ca.length;c++){var k=a[c].itemid,l=a[c].quantity,m=a[c].price\/1E5,h=a[c].shopid,n=a[c].catid,p=a[c].modelid;e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+\nm+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}else{var q=Object.keys(shoporders);for(c=0;c\u003Cq.length;c++){h=q[c];a=shoporders[h].items;for(var f=0;f\u003Ca.length;f++)k=a[f].itemid,l=a[f].quantity,m=a[f].price\/1E5,n=a[f].catid,p=a[f].modelid,e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+m+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}}navigator.sendBeacon?(b=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+\ne,navigator.sendBeacon(b)):(a=document.createElement(\"img\"),a.width=1,a.height=1,a.border=0,a.src=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+e,document.body.appendChild(a));AT.set_cookie(\"_aff_network\",d,0)},get_param:function(a,b){b||(b=location.href);a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);return null==b?null:b[1]},\nset_cookie:function(a,b,e){var d=new Date;d.setTime(d.getTime()+864E5*e);e=\"expires\\x3d\"+d.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=a+\"\\x3d\"+b+\"; \"+e+\";domain\\x3d\"+cookie_domain+\"; path\\x3d\/\"},get_cookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),e=0;e\u003Cb.length;e++){for(var d=b[e];\" \"==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,d.length)}},get_session_id:function(){return this.get_cookie(\"_aff_sid\")||\n\"\"},get_utm_source:function(){return this.get_cookie(\"_aff_network\")||\"\"}};AT.tracks()}catch(a){console.warn(a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var AT={cookie_duration:30,aff_utm_source:\"accesstrade\",aff_source_param:\"utm_source\",aff_utm_sources:[\"accesstrade\"],aff_source_params:[\"utm_source\",\"aff_source\"],aff_sid_param:\"aff_sid\",aff_sid_params:[\"aff_sid\",\"aff_sub\"],check_scope:function(){var a=this.get_utm_source()||this.get_param(this.aff_source_param);return a==this.aff_utm_source?!0:!1},track:function(){var a=this.get_param(this.aff_sid_param),b=this.get_param(this.aff_source_param);b==this.aff_utm_source?(this.set_cookie(\"_aff_network\",\nthis.aff_utm_source,this.cookie_duration),a\u0026\u0026this.set_cookie(\"_aff_sid\",a,this.cookie_duration)):void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim()\u0026\u0026this.set_cookie(\"_aff_network\",b,0)},tracks:function(){var a=0,b=\"\",e=\"\";for(c in this.aff_source_params){b=this.aff_source_params[c];var d=this.get_param(b);b=d;if(-1!=this.aff_utm_sources.indexOf(d)){a=1;break}}for(var g in this.aff_sid_params){var c=this.aff_sid_params[g];c=this.get_param(c);if(\"\"!==c){e=c;break}}a\u0026\u0026\"\"!==b?(this.set_cookie(\"_aff_network\",b,this.cookie_duration),\ne\u0026\u0026this.set_cookie(\"_aff_sid\",e,this.cookie_duration)):(!a||void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim())\u0026\u0026this.set_cookie(\"_aff_network\",\"\",0)},track_shopee_order:function(){var a=",["escape",["macro",43],8,16],",b=",["escape",["macro",42],8,16],",e=\"\",d=AT.get_utm_source(),g=AT.get_session_id();if(void 0!==a\u0026\u00260\u003Ca.length\u0026\u0026(\"shopid\"in a[0]||\"catid\"in a[0]))for(var c=0;c\u003Ca.length;c++){var k=a[c].itemid,l=a[c].quantity,m=a[c].price\/1E5,h=a[c].shopid,n=a[c].catid,p=a[c].modelid;e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+\nm+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}else{var q=Object.keys(shoporders);for(c=0;c\u003Cq.length;c++){h=q[c];a=shoporders[h].items;for(var f=0;f\u003Ca.length;f++)k=a[f].itemid,l=a[f].quantity,m=a[f].price\/1E5,n=a[f].catid,p=a[f].modelid,e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+m+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}}navigator.sendBeacon?(b=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+\ne,navigator.sendBeacon(b),console.log(\"[AT] Postback tracking url: \"+b)):(a=document.createElement(\"img\"),a.width=1,a.height=1,a.border=0,a.src=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+e,document.body.appendChild(a),console.log(\"[AT] Pixel tracking url: \"+a.src));AT.set_cookie(\"_aff_network\",d,0)},get_param:function(a,b){b||(b=location.href);a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\n\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);return null==b?null:b[1]},set_cookie:function(a,b,e){var d=new Date;d.setTime(d.getTime()+864E5*e);e=\"expires\\x3d\"+d.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=a+\"\\x3d\"+b+\"; \"+e+\";domain\\x3d\"+cookie_domain+\"; path\\x3d\/\"},get_cookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),e=0;e\u003Cb.length;e++){for(var d=b[e];\" \"==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,\nd.length)}},get_session_id:function(){return this.get_cookie(\"_aff_sid\")||\"\"},get_utm_source:function(){return this.get_cookie(\"_aff_network\")||\"\"}};AT.tracks();AT.track_shopee_order()}catch(a){console.warn(a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction track_keyToGet(){try{var a=get_key(p.keyToGet);null!==a?setCookie(p.cookieName,a):track_keyToSearch()}catch(b){console.warn(\"[medium_cookie_create][track_keyToGet]\",b)}}function track_keyToSearch(){try{var a=Object.entries(p.keyToSearch),b=!0;for(i=0;i\u003Ca.length;i++){var c=a[i],d=get_key(c[0]);if(null!==d){setCookie(p.cookieName,c[1]);b=!1;break}}b\u0026\u0026get_refer()}catch(e){console.warn(\"[medium_cookie_create][track_keyToSearch]\",e)}}\nfunction get_refer(){try{refer\u0026\u0026!shopee_refer_check.test(refer)\u0026\u0026setCookie(p.cookieName,\"refer\")}catch(a){console.warn(\"[medium_cookie_create][get_refer]\",a)}}function get_key(a){try{var b=window.location.href;a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(b);return null==a?null:a[1]}catch(c){return console.warn(\"[medium_cookie_create][get_key]\",c),null}}\nfunction setCookie(a,b){try{var c=new Date;c.setTime(c.getTime()+864E5*p.cookieTime);var d=\";expires\\x3d\"+c.toUTCString();document.cookie=a+\"\\x3d\"+b+d+\";path\\x3d\"+p.path+\";domain\\x3d\"+p.domain}catch(e){return console.warn(\"[medium_cookie_create][setCookie]\",e),null}}try{var p=",["escape",["macro",124],8,16],",refer=",["escape",["macro",125],8,16],",shopee_refer_check=new RegExp(p.shopee_refer,\"i\");track_keyToGet()}catch(a){console.warn(\"[medium_cookie_create]\",a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{var timestamp=(new Date).getTime();(function(a){var b=a.createElement(\"script\");b.src=\"https:\/\/click.accesstra.de\/js\/nct\/lp.js?cb\\x3d\"+timestamp;b.async=!0;a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document)}catch(a){console.warn(a)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar orders=",["escape",["macro",43],8,16],",itemInfo=[],orderInfo=[];(orders||[]).forEach(function(b){(Object.values(b.items)||[]).forEach(function(a){var c=a.itemid,d=a.price\/1E5,e=a.quantity;a=a.categories[0].catids[0];itemInfo.push({id:c,category_id:a,price:d,quantity:e})})});var __atw=__atw||[];__atw.push({mcn:\"d64a340bcb633f536d56e51874281454\",param:{result_id:\"30\",identifier:\"",["escape",["macro",42],7],"\",products:itemInfo}});var timestamp=(new Date).getTime();\n(function(b){var a=b.createElement(\"script\");a.src=\"https:\/\/cv.accesstra.de\/js\/nct\/cv_global.js?cb\\x3d\"+timestamp;a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(document);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function k(a,b){b?(l[0]=l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0,this.blocks=l):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225);this.block=\nthis.start=this.bytes=this.hBytes=0;this.finalized=this.hashed=!1;this.first=!0;this.is224=a}function x(a,b,c){var f=typeof a;if(\"string\"===f){var e,m=[],d=a.length,g=0;for(f=0;f\u003Cd;++f)128\u003E(e=a.charCodeAt(f))?m[g++]=e:2048\u003Ee?(m[g++]=192|e\u003E\u003E6,m[g++]=128|63\u0026e):55296\u003Ee||57344\u003C=e?(m[g++]=224|e\u003E\u003E12,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e):(e=65536+((1023\u0026e)\u003C\u003C10|1023\u0026a.charCodeAt(++f)),m[g++]=240|e\u003E\u003E18,m[g++]=128|e\u003E\u003E12\u002663,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e);a=m}else{if(\"object\"!==f)throw Error(u);if(null===\na)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);}64\u003Ca.length\u0026\u0026(a=(new k(b,!0)).update(a).array());e=[];m=[];for(f=0;64\u003Ef;++f)d=a[f]||0,e[f]=92^d,m[f]=54^d;k.call(this,b,c);this.update(m);this.oKeyPad=e;this.inner=!0;this.sharedMemory=c}var u=\"input is invalid type\",v=\"object\"==typeof window,p=v?window:{};p.JS_SHA256_NO_WINDOW\u0026\u0026(v=!1);v=!v\u0026\u0026\"object\"==typeof self;var A=!p.JS_SHA256_NO_NODE_JS\u0026\u0026\"object\"==typeof process\u0026\u0026\nprocess.versions\u0026\u0026process.versions.node;A?p=global:v\u0026\u0026(p=self);v=!p.JS_SHA256_NO_COMMON_JS\u0026\u0026\"object\"==typeof module\u0026\u0026module.exports;var F=\"function\"==typeof define\u0026\u0026define.amd,w=!p.JS_SHA256_NO_ARRAY_BUFFER\u0026\u0026\"undefined\"!=typeof ArrayBuffer,c=\"0123456789abcdef\".split(\"\"),G=[-2147483648,8388608,32768,128],n=[24,16,8,0],y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,\n4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],\nz=[\"hex\",\"array\",\"digest\",\"arrayBuffer\"],l=[];!p.JS_SHA256_NO_NODE_JS\u0026\u0026Array.isArray||(Array.isArray=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)});!w||!p.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW\u0026\u0026ArrayBuffer.isView||(ArrayBuffer.isView=function(a){return\"object\"==typeof a\u0026\u0026a.buffer\u0026\u0026a.buffer.constructor===ArrayBuffer});var B=function(a,b){return function(m){return(new k(b,!0)).update(m)[a]()}},C=function(a){var b=B(\"hex\",a);A\u0026\u0026(b=H(b,a));b.create=function(){return new k(a)};b.update=\nfunction(a){return b.create().update(a)};for(var m=0;m\u003Cz.length;++m){var c=z[m];b[c]=B(c,a)}return b},H=function(a,b){var c=eval(\"require('crypto')\"),f=eval(\"require('buffer').Buffer\"),e=b?\"sha224\":\"sha256\",h=function(b){if(\"string\"==typeof b)return c.createHash(e).update(b,\"utf8\").digest(\"hex\");if(null===b||void 0===b)throw Error(u);return b.constructor===ArrayBuffer\u0026\u0026(b=new Uint8Array(b)),Array.isArray(b)||ArrayBuffer.isView(b)||b.constructor===f?c.createHash(e).update(new f(b)).digest(\"hex\"):a(b)};\nreturn h},D=function(a,b){return function(c,f){return(new x(c,b,!0)).update(f)[a]()}},E=function(a){var b=D(\"hex\",a);b.create=function(b){return new x(b,a)};b.update=function(a,c){return b.create(a).update(c)};for(var c=0;c\u003Cz.length;++c){var f=z[c];b[f]=D(f,a)}return b};k.prototype.update=function(a){if(!this.finalized){var b=typeof a;if(\"string\"!==b){if(\"object\"!==b)throw Error(u);if(null===a)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);\nvar c=!0}for(var f,e=0,h=a.length,d=this.blocks;e\u003Ch;){if(this.hashed\u0026\u0026(this.hashed=!1,d[0]=this.block,d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0),c)for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)d[b\u003E\u003E2]|=a[e]\u003C\u003Cn[3\u0026b++];else for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)128\u003E(f=a.charCodeAt(e))?d[b\u003E\u003E2]|=f\u003C\u003Cn[3\u0026b++]:2048\u003Ef?(d[b\u003E\u003E2]|=(192|f\u003E\u003E6)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]):55296\u003Ef||57344\u003C=f?(d[b\u003E\u003E2]|=(224|f\u003E\u003E12)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003C\nn[3\u0026b++]):(f=65536+((1023\u0026f)\u003C\u003C10|1023\u0026a.charCodeAt(++e)),d[b\u003E\u003E2]|=(240|f\u003E\u003E18)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E12\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]);this.lastByteIndex=b;this.bytes+=b-this.start;64\u003C=b?(this.block=d[16],this.start=b-64,this.hash(),this.hashed=!0):this.start=b}return 4294967295\u003Cthis.bytes\u0026\u0026(this.hBytes+=this.bytes\/4294967296\u003C\u003C0,this.bytes%=4294967296),this}};k.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var a=this.blocks,\nb=this.lastByteIndex;a[16]=this.block;a[b\u003E\u003E2]|=G[3\u0026b];this.block=a[16];56\u003C=b\u0026\u0026(this.hashed||this.hash(),a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0);a[14]=this.hBytes\u003C\u003C3|this.bytes\u003E\u003E\u003E29;a[15]=this.bytes\u003C\u003C3;this.hash()}};k.prototype.hash=function(){var a,b,c,f,e=this.h0,h=this.h1,d=this.h2,g=this.h3,k=this.h4,l=this.h5,r=this.h6,q=this.h7,n=this.blocks;for(a=16;64\u003Ea;++a){var p=((c=n[a-15])\u003E\u003E\u003E7|c\u003C\u003C25)^(c\u003E\u003E\u003E18|c\u003C\u003C14)^c\u003E\u003E\u003E3;var t=((c=n[a-2])\u003E\u003E\u003E\n17|c\u003C\u003C15)^(c\u003E\u003E\u003E19|c\u003C\u003C13)^c\u003E\u003E\u003E10;n[a]=n[a-16]+p+n[a-7]+t\u003C\u003C0}var u=h\u0026d;for(a=0;64\u003Ea;a+=4)this.first?(this.is224?(f=300032,q=(c=n[0]-1413257819)-150054599\u003C\u003C0,g=c+24177077\u003C\u003C0):(f=704751109,q=(c=n[0]-210244248)-1521486534\u003C\u003C0,g=c+143694565\u003C\u003C0),this.first=!1):(p=(e\u003E\u003E\u003E2|e\u003C\u003C30)^(e\u003E\u003E\u003E13|e\u003C\u003C19)^(e\u003E\u003E\u003E22|e\u003C\u003C10),b=(f=e\u0026h)^e\u0026d^u,q=g+(c=q+((k\u003E\u003E\u003E6|k\u003C\u003C26)^(k\u003E\u003E\u003E11|k\u003C\u003C21)^(k\u003E\u003E\u003E25|k\u003C\u003C7))+(k\u0026l^~k\u0026r)+y[a]+n[a])\u003C\u003C0,g=c+(p+b)\u003C\u003C0),p=(g\u003E\u003E\u003E2|g\u003C\u003C30)^(g\u003E\u003E\u003E13|g\u003C\u003C19)^(g\u003E\u003E\u003E22|g\u003C\u003C10),b=(u=g\u0026e)^g\u0026h^f,r=d+(c=r+((q\u003E\u003E\u003E6|q\u003C\u003C26)^(q\u003E\u003E\u003E11|\nq\u003C\u003C21)^(q\u003E\u003E\u003E25|q\u003C\u003C7))+(q\u0026k^~q\u0026l)+y[a+1]+n[a+1])\u003C\u003C0,p=((d=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|d\u003C\u003C30)^(d\u003E\u003E\u003E13|d\u003C\u003C19)^(d\u003E\u003E\u003E22|d\u003C\u003C10),b=(t=d\u0026g)^d\u0026e^u,l=h+(c=l+((r\u003E\u003E\u003E6|r\u003C\u003C26)^(r\u003E\u003E\u003E11|r\u003C\u003C21)^(r\u003E\u003E\u003E25|r\u003C\u003C7))+(r\u0026q^~r\u0026k)+y[a+2]+n[a+2])\u003C\u003C0,p=((h=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|h\u003C\u003C30)^(h\u003E\u003E\u003E13|h\u003C\u003C19)^(h\u003E\u003E\u003E22|h\u003C\u003C10),b=(u=h\u0026d)^h\u0026g^t,k=e+(c=k+((l\u003E\u003E\u003E6|l\u003C\u003C26)^(l\u003E\u003E\u003E11|l\u003C\u003C21)^(l\u003E\u003E\u003E25|l\u003C\u003C7))+(l\u0026r^~l\u0026q)+y[a+3]+n[a+3])\u003C\u003C0,e=c+(p+b)\u003C\u003C0;this.h0=this.h0+e\u003C\u003C0;this.h1=this.h1+h\u003C\u003C0;this.h2=this.h2+d\u003C\u003C0;this.h3=this.h3+g\u003C\u003C0;this.h4=this.h4+k\u003C\u003C0;this.h5=this.h5+\nl\u003C\u003C0;this.h6=this.h6+r\u003C\u003C0;this.h7=this.h7+q\u003C\u003C0};k.prototype.hex=function(){this.finalize();var a=this.h0,b=this.h1,m=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=c[a\u003E\u003E28\u002615]+c[a\u003E\u003E24\u002615]+c[a\u003E\u003E20\u002615]+c[a\u003E\u003E16\u002615]+c[a\u003E\u003E12\u002615]+c[a\u003E\u003E8\u002615]+c[a\u003E\u003E4\u002615]+c[15\u0026a]+c[b\u003E\u003E28\u002615]+c[b\u003E\u003E24\u002615]+c[b\u003E\u003E20\u002615]+c[b\u003E\u003E16\u002615]+c[b\u003E\u003E12\u002615]+c[b\u003E\u003E8\u002615]+c[b\u003E\u003E4\u002615]+c[15\u0026b]+c[m\u003E\u003E28\u002615]+c[m\u003E\u003E24\u002615]+c[m\u003E\u003E20\u002615]+c[m\u003E\u003E16\u002615]+c[m\u003E\u003E12\u002615]+c[m\u003E\u003E8\u002615]+c[m\u003E\u003E4\u002615]+c[15\u0026m]+c[f\u003E\u003E28\u002615]+c[f\u003E\u003E24\u002615]+c[f\u003E\u003E20\u002615]+c[f\u003E\u003E16\u002615]+c[f\u003E\u003E12\u0026\n15]+c[f\u003E\u003E8\u002615]+c[f\u003E\u003E4\u002615]+c[15\u0026f]+c[e\u003E\u003E28\u002615]+c[e\u003E\u003E24\u002615]+c[e\u003E\u003E20\u002615]+c[e\u003E\u003E16\u002615]+c[e\u003E\u003E12\u002615]+c[e\u003E\u003E8\u002615]+c[e\u003E\u003E4\u002615]+c[15\u0026e]+c[h\u003E\u003E28\u002615]+c[h\u003E\u003E24\u002615]+c[h\u003E\u003E20\u002615]+c[h\u003E\u003E16\u002615]+c[h\u003E\u003E12\u002615]+c[h\u003E\u003E8\u002615]+c[h\u003E\u003E4\u002615]+c[15\u0026h]+c[d\u003E\u003E28\u002615]+c[d\u003E\u003E24\u002615]+c[d\u003E\u003E20\u002615]+c[d\u003E\u003E16\u002615]+c[d\u003E\u003E12\u002615]+c[d\u003E\u003E8\u002615]+c[d\u003E\u003E4\u002615]+c[15\u0026d];return this.is224||(a+=c[g\u003E\u003E28\u002615]+c[g\u003E\u003E24\u002615]+c[g\u003E\u003E20\u002615]+c[g\u003E\u003E16\u002615]+c[g\u003E\u003E12\u002615]+c[g\u003E\u003E8\u002615]+c[g\u003E\u003E4\u002615]+c[15\u0026g]),a};k.prototype.toString=k.prototype.hex;k.prototype.digest=function(){this.finalize();\nvar a=this.h0,b=this.h1,c=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=[a\u003E\u003E24\u0026255,a\u003E\u003E16\u0026255,a\u003E\u003E8\u0026255,255\u0026a,b\u003E\u003E24\u0026255,b\u003E\u003E16\u0026255,b\u003E\u003E8\u0026255,255\u0026b,c\u003E\u003E24\u0026255,c\u003E\u003E16\u0026255,c\u003E\u003E8\u0026255,255\u0026c,f\u003E\u003E24\u0026255,f\u003E\u003E16\u0026255,f\u003E\u003E8\u0026255,255\u0026f,e\u003E\u003E24\u0026255,e\u003E\u003E16\u0026255,e\u003E\u003E8\u0026255,255\u0026e,h\u003E\u003E24\u0026255,h\u003E\u003E16\u0026255,h\u003E\u003E8\u0026255,255\u0026h,d\u003E\u003E24\u0026255,d\u003E\u003E16\u0026255,d\u003E\u003E8\u0026255,255\u0026d];return this.is224||a.push(g\u003E\u003E24\u0026255,g\u003E\u003E16\u0026255,g\u003E\u003E8\u0026255,255\u0026g),a};k.prototype.array=k.prototype.digest;k.prototype.arrayBuffer=function(){this.finalize();var a=new ArrayBuffer(this.is224?\n28:32),b=new DataView(a);return b.setUint32(0,this.h0),b.setUint32(4,this.h1),b.setUint32(8,this.h2),b.setUint32(12,this.h3),b.setUint32(16,this.h4),b.setUint32(20,this.h5),b.setUint32(24,this.h6),this.is224||b.setUint32(28,this.h7),a};x.prototype=new k;x.prototype.finalize=function(){if(k.prototype.finalize.call(this),this.inner){this.inner=!1;var a=this.array();k.call(this,this.is224,this.sharedMemory);this.update(this.oKeyPad);this.update(a);k.prototype.finalize.call(this)}};var t=C();t.sha256=\nt;t.sha224=C(!0);t.sha256.hmac=E();t.sha224.hmac=E(!0);v?module.exports=t:(p.sha256=t.sha256,p.sha224=t.sha224,F\u0026\u0026define(function(){return t}))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/click.accesstrade.co.id\/js\/nct\/lp.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar orders=",["escape",["macro",43],8,16],",itemInfo=[],orderInfo=[];(orders||[]).forEach(function(b){(Object.values(b.items)||[]).forEach(function(a){var c=a.itemid,d=a.price\/1E5,e=a.quantity;a=a.categories[0].catids[0];itemInfo.push({id:c,category_id:a,price:d,quantity:e})})});var __atw=__atw||[];__atw.push({mcn:\"c3c59e5f8b3e9753913f4d435b53c308\",param:{result_id:\"30\",identifier:\"",["escape",["macro",42],7],"\",products:itemInfo}});\n(function(b){var a=b.createElement(\"script\");a.src=\"https:\/\/cv.accesstrade.co.id\/js\/nct\/cv.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",190,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pzConvData=window.pzConvData||[];window.pzConvData.push({type:\"purchase\",merchantId:\"7077\",productId:\"",["escape",["macro",129],7],"\",value:\"",["escape",["macro",130],7],"\",data:\"",["escape",["macro",42],7],"\",filter:\"payment method\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",190,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pzConvData=window.pzConvData||[];window.pzConvData.push({type:\"purchase\",merchantId:\"7077\",filter:\"MEMBER-SIGNUP\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_home\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_category2_",["escape",["macro",115],12],"\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_offer_",["escape",["macro",41],12],"\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_listing_",["escape",["macro",98],12],"\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":384
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_basketstatus_",["escape",["macro",132],12],"\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":385
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_startorder\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":386
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"\u0026amp;ncm=1\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":387
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_orderstatus2_",["escape",["macro",56],12],"_",["escape",["macro",42],12],"_",["escape",["macro",121],12],"\u0026amp;cd=default\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":388
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",134],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);\nfor(var transactionId=",["escape",["macro",42],8,16],",transactionCurrency=\"",["escape",["macro",45],7],"\",orders=",["escape",["macro",43],8,16],",purchaseInfo=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)try{\"undefined\"===typeof purchaseInfo[orders[i].items[j].shopid]?purchaseInfo[orders[i].items[j].shopid]={shopId:orders[i].items[j].shopid,conversionId:\"",["escape",["macro",134],7],"\",conversionLabel:\"",["escape",["macro",135],7],"\",quantity:orders[i].items[j].quantity,totalValue:orders[i].items[j].price\/1E5*orders[i].items[j].quantity}:\n(purchaseInfo[orders[i].items[j].shopid].quantity+=orders[i].items[j].quantity,purchaseInfo[orders[i].items[j].shopid].totalValue+=orders[i].items[j].price\/1E5*orders[i].items[j].quantity)}catch(a){console.warn(a)}var shopPurchases=Object.values(purchaseInfo);\nfor(i=0;i\u003CshopPurchases.length;i++){var shopPurchase=shopPurchases[i],shopId=shopPurchase.shopId,conversionId=shopPurchase.conversionId,conversionLabel=shopPurchase.conversionLabel,conversionValue=shopPurchase.totalValue;gtag(\"config\",conversionId,{allow_ad_personalization_signals:!1});gtag(\"event\",\"conversion\",{send_to:conversionId+\"\/\"+conversionLabel,value:conversionValue,currency:transactionCurrency,transaction_id:transactionId+\"_\"+shopId})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":479
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",134],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",134],8,16],",{allow_ad_personalization_signals:!1});\u003C\/script\u003E  \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":485
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",134],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",134],8,16],",{allow_ad_personalization_signals:!1});var conversionId=\"",["escape",["macro",134],7],"\",conversionLabel=\"",["escape",["macro",137],7],"\",addToCartCurrency=\"",["escape",["macro",45],7],"\";gtag(\"event\",\"conversion\",{send_to:conversionId+\"\/\"+conversionLabel,value:.0555*",["escape",["macro",50],8,16],",currency:addToCartCurrency});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":492
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",138],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",138],8,16],",{allow_ad_personalization_signals:!1});\u003C\/script\u003E  \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":534
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E0\u003Clocation.hostname.indexOf(\"br\")\u0026\u0026(import_content=\"\\x3cstyle type\\x3dtext\/css\\x3e.tiktok-icon{width:12px;height:12px}.kwai-icon{position:relative;top:6px;width:25px;height:25px}.tiktok-icon:hover{content:url(https:\/\/shopee.com.br\/blog\/wp-content\/uploads\/2021\/06\/tik-tok-after.png)!important}.kwai-icon:hover{content:url(https:\/\/shopee.com.br\/blog\/wp-content\/uploads\/2021\/06\/kawi-after.png)!important}.custom-icon{-webkit-text-size-adjust:100%;visibility:visible!important;font-family:Verdana,Geneva,sans-serif;color:#fff;box-sizing:border-box;text-align:center;display:inline-block;font-size:14px;width:40px;height:40px;line-height:40px;background-color:rgba(255,255,255,.03);position:relative}\\x3c\/style\\x3e\\x3cspan class\\x3dtd-social-icon-wrap\\x3e\\x3ca target\\x3d_blank href\\x3dhttps:\/\/www.tiktok.com\/@shopee_br title\\x3dtiktok\\x3e\\x3ci class\\x3dcustom-icon\\x3e\\x3cimg title\\x3dTiktok alt\\x3dTiktok src\\x3dhttps:\/\/shopee.com.br\/blog\/wp-content\/uploads\/2021\/06\/tik-tok.png class\\x3dtiktok-icon\\x3e\\x3c\/i\\x3e\\x3c\/a\\x3e\\x3c\/span\\x3e\",\njQuery(\"div.td-pb-span4 \\x3e aside \\x3e span:nth-child(6)\").after(import_content));\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":540
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ProductPage.Self"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"impression"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"pc"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"test"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"test.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"uat"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"uat.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"ItemCard",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ItemCard"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"click"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"action"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"mweb"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/produk-digital\/"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"HomePage"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"pageState"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"CategoryPage"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"buyNow"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ShopPage.Self"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"OfficialShopLandingPage"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CollectionPage"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"FlashSale"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"PageMicroSite"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"MallPage.Self"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\/search",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"tw"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"sg"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"ph"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"vn"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"co"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"cl"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"placeOrder"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"my"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"id"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"th"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"br"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"mx"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"Search(Result|)Page"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CartPage"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CheckoutPage"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"action_sign_up_success"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"v3"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(uat|test|live-test|staging|lite).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"produk-digital"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(http|https):\/\/shopee.(vn|co.th|com.my|ph|sg|tw)\/m\/99",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(http|https):\/\/shopee.co.id\/m\/super-shopping-day-129",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"(affiliate|affiliates)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"live"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(test|uat|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"produk-digital"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"\/web$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"https:\/\/shopee.(sg|tw|co.id|vn|co.th|ph|com.my|com.br)\/(blog|inspirasi-shopee)($|.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"single-post"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)7691473_229($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(single-post|single-page)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/blog"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"shopee.com"
    },{
      "function":"_cn",
      "arg0":["macro",78],
      "arg1":"sho.pe"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/blog\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)7691473_263($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",78],
      "arg1":"https:\/\/shopee."
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)7691473_264($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"action_delete_shopping_cart_item"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"popstate"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(event|doitac).shopee.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"login_success"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"action_login_success"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(giaitri|nhasach).shopee.vn",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"nhasach.shopee.vn",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",101],
      "arg1":"^(undefined|null|NaN|0|false)?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(myads|iklanku|muatukhoa|ads).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",105],
      "arg1":"btn"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"(seller|banhang).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)\\\/edu\\\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"pageState"
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"impressions"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"localhost"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"registration"
    },{
      "function":"_re",
      "arg0":["macro",133],
      "arg1":"91799978|58418206|16621457|40867978|119485441|75422406|53892420|37251933|29668384|29667634|29668843",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",133],
      "arg1":"39401693|55027948|51678844|59860978|83276818|43416591",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",136],
      "arg1":"91799978|58418206|16621457|40867978|119485441|75422406|53892420|37251933|29668384|29667634|29668843",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",136],
      "arg1":"39401693|55027948|51678844|59860978|83276818|43416591",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\\\/(smartsg|unilever_householdcare|unilever_beautyhotpro|unilever_personalcare|realmeofficialstore|nutrilonofficialstore|oppo_official_store|lorealparis_officialstore|garnier_thailand|lorealparis|maybelline_thailand)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\\\/(mobilehubsg|absolutepiano|atrixofficial|samsung_thailand|movingpeach.sg|foremost_official_shop)",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",2,9,11,13,14,21,24,30,120,160,172,180,183,186,193]],
    [["if",9],["unless",10],["add",3,161],["block",9]],
    [["if",12],["unless",11],["add",4]],
    [["if",13],["unless",10],["add",4]],
    [["if",1,14],["add",5,29,36]],
    [["if",15,16],["add",6,26,40]],
    [["if",17,18],["add",7,9,11,14,27,30,35,67,71,85,87,102,110,140,164,173,180,183,186]],
    [["if",3,19],["unless",20],["add",8,65,69,84,90,101,111,131,138]],
    [["if",9,21],["add",8,38,131]],
    [["if",9,22],["add",8,38,131]],
    [["if",23,24,25],["add",9,11,13,14,19,24,30,118,162,180,183,186,191]],
    [["if",24,25,26],["add",9,11,13,14,20,24,30,119,163,175,180,183,186,192]],
    [["if",18,27],["add",9,11,30,164,180,183,186]],
    [["if",1,28],["add",9,11,13,14,24,30,125,180,183,186,197]],
    [["if",25,29],["add",9,11,13,14,24,30,180,183,186]],
    [["if",25,30],["add",9,11,13,14,20,24,30,125,180,183,186,197]],
    [["if",25,31],["add",9,11,13,14,24,30,125,180,183,186,197]],
    [["if",25,32],["add",9,11,13,14,24,30,125,179,180,183,186,197]],
    [["if",1,33],["add",9,11,13,14,24,30,180,183,186]],
    [["if",24,34,35],["add",9,11,13,20,24,30,63,73,83,88,100,107,121,141,167,171,180,183,186,194]],
    [["if",18,43],["add",10,12,15,16,17,22,25,0,33,39,42,43,44,45,46,68,75,82,94,97,106,124,132,136,165,166,168,169,174,181,1,184,187,198,199],["block",138]],
    [["if",24,25,49],["add",14]],
    [["if",25,50],["add",18,122,178,195]],
    [["if",9],["add",23,170,182,185,190,144,146,147,148,149,150,152,153,154,155,156,157,158,159]],
    [["if",25,51],["add",24,123,177,196]],
    [["if",52,53],["add",28,41,61,74,79,91,98,108,134,176]],
    [["if",25,54],["unless",55],["add",31,64,76,78,95,103,109,130,133,170]],
    [["if",12,56],["unless",8],["add",31,130]],
    [["if",12,22],["unless",57],["add",31,130]],
    [["if",9,58],["add",32]],
    [["if",9,59],["add",32]],
    [["if",18,43,60],["add",34,58,188]],
    [["if",8,25],["add",37,115]],
    [["if",8,12,64],["add",37,115]],
    [["if",8,12],["add",37,115]],
    [["if",12,57],["add",37,115]],
    [["if",3,19,63],["add",38,114]],
    [["if",9,65],["add",38,50,114]],
    [["if",8,9],["add",38,114],["block",2,3,4,5,6,7,8,10,11,13,16,18,19,20,21,22,24,25,26,27,28,0,29,30,31,32,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,133,134,135,136,137,138,139,140,141,142,143,160,161,162,163,164,165,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",9,66],["add",47]],
    [["if",67,68,69],["add",48]],
    [["if",9,70,71],["add",49]],
    [["if",9,72],["add",50]],
    [["if",3,4,5],["add",51],["block",2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,24,25,26,27,28,0,29,30,31,32,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,133,134,135,136,137,138,139,140,141,142,143,168,170,171,172,173,174,175,176,177,178,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,6,7],["add",51],["block",2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,25,26,27,28,0,29,30,31,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,133,134,135,136,137,138,139,140,141,142,143,168,170,171,172,173,174,175,176,177,178,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",73,74,75,76],["add",52]],
    [["if",74,75,77,78],["add",52]],
    [["if",18,79],["add",53,54,66,77,86,89,99,113,135]],
    [["if",12,80,81],["add",55]],
    [["if",9,81],["add",55]],
    [["if",18,82],["add",56,60,72,81,93,96,105,139]],
    [["if",53,83],["add",57,62,70,80,92,104,112,137]],
    [["if",9,84],["add",59],["block",161,190]],
    [["if",12,85],["unless",8],["add",116,170]],
    [["if",86,88],["unless",87],["add",117,126]],
    [["if",12,89],["add",127]],
    [["if",9,89],["add",128]],
    [["if",90,91],["add",129]],
    [["if",9,92],["add",142]],
    [["if",12,92],["add",143]],
    [["if",9,93],["add",145]],
    [["if",9,94],["add",151]],
    [["if",18,60,96],["add",189]],
    [["if",25,97],["add",200]],
    [["if",25,98],["add",200]],
    [["if",17,18,99],["add",201]],
    [["if",17,18,100],["add",201]],
    [["if",25,101],["add",202]],
    [["if",25,102],["add",202]],
    [["if",13,66],["add",203]],
    [["if",2,3],["block",2,3,4,5,6,7,16,166]],
    [["if",3,36],["block",9,10,11,13,14,15,17,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,118,119,120,121,122,123,124,125,133,134,135,136,137,138,139,140,141,166,168,169,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,37],["block",9,10,11,12,13,14,15,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,169,179,180,181,183,184,186,187,188,189,190]],
    [["if",3,38],["block",9,10,11,12,13,14,15,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,168,169,179,180,181,183,184,186,187,188,189,190]],
    [["if",3,39],["block",9,14,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,168,179,183,184,186,187,188,189,190]],
    [["if",40],["block",9]],
    [["if",3,41],["block",9,10,11,12,13,14,15,17,18,19,20,21,22,24,25,30,34,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,118,119,120,121,122,123,124,125,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,168,169,179,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,42],["block",9,10,11,12,13,14,15,17,18,19,20,21,22,24,25,30,34,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,118,119,120,121,122,123,124,125,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,168,169,179,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,44],["block",10,11,13,14,15,17,24,25,30,58,60,61,62,63,64,65,66,67,68,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,169,179,180,181,186,187,188,189,190]],
    [["if",3,45],["block",10,11,13,15,17,25,30,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,169,179,180,181,183,184,188,189,190]],
    [["if",3,46],["block",10,11,13,14,15,17,24,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,169,179,180,181,183,184,186,187]],
    [["if",3,47],["block",10,11,13,18,19,20,21,22,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,118,119,120,121,122,123,124,125,160,161,162,163,164,165,167,168,169,179,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,48],["block",13,18,19,20,21,22,24,34,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,167,168,169,179,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,61,62],["block",35,36,37,38,39,40,41,45,46,54,86,114,115,117]],
    [["if",9],["unless",63],["block",35,36,37,38,39,40,41,45,46,54,114,115,117]],
    [["if",3,95],["block",186]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]],[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}},"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto","__hjtc"]}

};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},fa=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},na={};try{na.__proto__=ka;ja=na.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var oa=ia,pa=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.lj=b.prototype},qa=this||self,sa=function(a){return a};var ta=function(a,b){this.g=a;this.s=b};var ua=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},va=function(){this.B={};this.F=!1;this.L={}},wa=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};va.prototype.get=function(a){return this.B["dust."+a]};va.prototype.set=function(a,b){this.F||(a="dust."+a,this.L.hasOwnProperty(a)||(this.B[a]=b))};
va.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var xa=function(a,b){b="dust."+b;a.F||a.L.hasOwnProperty(b)||delete a.B[b]};va.prototype.kb=function(){this.F=!0};var k=function(a){this.s=new va;this.g=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ua(b)?this.g[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};ba=k.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if(!this.B)if("length"===a){if(!ua(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else ua(a)?this.g[Number(a)]=b:this.s.set(a,b)};ba.get=function(a){return"length"===a?this.length():ua(a)?this.g[Number(a)]:this.s.get(a)};ba.length=function(){return this.g.length};ba.jb=function(){for(var a=wa(this.s,1),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};var ya=function(a,b){ua(b)?delete a.g[Number(b)]:xa(a.s,b)};ba=k.prototype;
ba.pop=function(){return this.g.pop()};ba.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.g.shift()};ba.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};ba.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};ba.has=function(a){return ua(a)&&this.g.hasOwnProperty(a)||this.s.has(a)};ba.kb=function(){this.B=!0;Object.freeze(this.g);this.s.kb()};var Ba=function(){function a(f,g){if(b[f]){if(b[f].cd+g>b[f].max)throw Error("Quota exceeded");b[f].cd+=g}}var b={},c=void 0,d=void 0,e={xi:function(f){c=f},ag:function(){c&&a(c,1)},zi:function(f){d=f},lb:function(f){d&&a(d,f)},Oi:function(f,g){b[f]=b[f]||{cd:0};b[f].max=g},Zh:function(f){return b[f]&&b[f].cd||0},reset:function(){b={}},Nh:a};e.onFnConsume=e.xi;e.consumeFn=e.ag;e.onStorageConsume=e.zi;e.consumeStorage=e.lb;e.setMax=e.Oi;e.getConsumed=e.Zh;e.reset=e.reset;e.consume=e.Nh;return e};var Ca=function(a,b){this.B=a;this.P=function(c,d,e){return c.apply(d,e)};this.F=b;this.s=new va;this.g=this.L=void 0};Ca.prototype.add=function(a,b){Da(this,a,b,!1)};var Da=function(a,b,c,d){if(!a.s.F)if(a.B.lb(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.s;e.set(b,c);e.L["dust."+b]=!0}else a.s.set(b,c)};
Ca.prototype.set=function(a,b){this.s.F||(!this.s.has(a)&&this.F&&this.F.has(a)?this.F.set(a,b):(this.B.lb(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.s.set(a,b)))};Ca.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.F?this.F.get(a):void 0};Ca.prototype.has=function(a){return!!this.s.has(a)||!(!this.F||!this.F.has(a))};var Ea=function(a){var b=new Ca(a.B,a);a.L&&(b.L=a.L);b.P=a.P;b.g=a.g;return b};var Fa={},Ga=function(a,b){Fa[a]=Fa[a]||[];Fa[a][b]=!0},Ha=function(a){for(var b=[],c=Fa[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ja=function(){},Ka=function(a){return"function"==typeof a},n=function(a){return"string"==typeof a},La=function(a){return"number"==typeof a&&!isNaN(a)},Na=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Ga("TAGGING",4):Ga("TAGGING",5);return b},Oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Pa=function(a,b){if(a&&Na(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Qa=function(a,b){if(!La(a)||!La(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Sa=function(a,b){for(var c=new Ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ua=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Wa=
function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ab=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},bb=function(){return new Date(Date.now())},cb=function(){return bb().getTime()},Ra=function(){this.prefix="gtm.";this.values={}};Ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ra.prototype.get=function(a){return this.values[this.prefix+a]};
var hb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},kb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},lb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},mb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},nb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ob=function(a,b){var c=A;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Oa(b,d))return}return d},pb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},qb=/^\w{1,9}$/,rb=function(a){var b=[];Ta(a,function(c,d){qb.test(c)&&d&&b.push(c)});return b.join(",")};var sb=function(a,b){va.call(this);this.P=a;this.Ga=b};pa(sb,va);sb.prototype.toString=function(){return this.P};sb.prototype.jb=function(){return new k(wa(this,1))};sb.prototype.g=function(a,b){a.B.ag();return this.Ga.apply(new tb(this,a),Array.prototype.slice.call(arguments,1))};sb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var wb=function(a,b){for(var c,d=0;d<b.length&&!(c=ub(a,b[d]),c instanceof ta);d++);return c},ub=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof sb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.L;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},tb=function(a,b){this.s=a;this.g=b},F=function(a,b){var c=a.g;return Na(b)?ub(c,b):b},G=function(a){return a.s.P};var xb=function(){va.call(this)};pa(xb,va);xb.prototype.jb=function(){return new k(wa(this,1))};var yb={control:function(a,b){return new ta(a,F(this,b))},fn:function(a,b,c){var d=this.g,e=F(this,b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.B.lb(a.length+f.length);return new sb(a,function(){return function(g){var h=Ea(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=F(this,l[m]),l[m]instanceof ta)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var r=wb(h,f);if(r instanceof ta)return"return"===r.g?r.s:r}}())},list:function(a){var b=this.g.B;b.lb(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=F(this,arguments[d]);"string"===typeof e&&b.lb(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.B,c=new xb,d=0;d<arguments.length-1;d+=2){var e=F(this,arguments[d])+"",f=F(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.lb(g);c.set(e,f)}return c},undefined:function(){}};var zb=function(){this.B=Ba();this.g=new Ca(this.B)},Ab=function(a,b,c){var d=new sb(b,c);d.kb();a.g.set(b,d)},Bb=function(a,b,c){yb.hasOwnProperty(b)&&Ab(a,c||b,yb[b])};zb.prototype.Eb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};zb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=ub(this.g,arguments[c]);return b};zb.prototype.F=function(a,b){var c=Ea(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=ub(c,arguments[e]);return d};var Cb,Db=function(){if(void 0===Cb){var a=null,b=qa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:sa,createScript:sa,createScriptURL:sa})}catch(c){qa.console&&qa.console.error(c.message)}Cb=a}else Cb=a}return Cb};var Fb=function(a,b){this.g=b===Eb?a:""};Fb.prototype.toString=function(){return this.g+""};var Eb={},Gb=function(a){var b=Db(),c=b?b.createScriptURL(a):a;return new Fb(c,Eb)};var Hb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ib;a:{var Jb=qa.navigator;if(Jb){var Kb=Jb.userAgent;if(Kb){Ib=Kb;break a}}Ib=""}var Lb=function(a){return-1!=Ib.indexOf(a)};var Nb=function(a,b,c){this.g=c===Mb?a:""};Nb.prototype.toString=function(){return this.g.toString()};var Ob=function(a){return a instanceof Nb&&a.constructor===Nb?a.g:"type_error:SafeHtml"},Mb={},Pb=function(a){var b=Db(),c=b?b.createHTML(a):a;return new Nb(c,null,Mb)},Ub=new Nb(qa.trustedTypes&&qa.trustedTypes.emptyHTML||"",0,Mb);var Vb=function(a,b){a.src=b instanceof Fb&&b.constructor===Fb?b.g:"type_error:TrustedResourceUrl";var c,d,e=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,f=null===(d=e.querySelector)||void 0===d?void 0:d.call(e,"script[nonce]");(c=f?f.nonce||f.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var Wb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Xb=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Yb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Ob(Ub);return!c.parentElement}),Zb=function(a,b){if(Yb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Ob(b)};var A=window,H=document,$b=navigator,ac=H.currentScript&&H.currentScript.src,bc=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},cc=function(a){var b=H.getElementsByTagName("script")[0]||H.body||H.head;b.parentNode.insertBefore(a,b)},dc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ec={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},fc=function(a,b,c,d){var e=H.createElement("script");
d&&Ta(d,function(f,g){f=f.toLowerCase();ec.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Vb(e,Gb(a));dc(e,b);c&&(e.onerror=c);cc(e);return e},gc=function(){if(ac){var a=ac.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},hc=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||H.body||H.head;d.parentNode.insertBefore(c,
d);dc(c,b);void 0!==a&&(c.src=a);return c},ic=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},kc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},lc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){A.setTimeout(a,0)},mc=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},nc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},oc=function(a){var b=H.createElement("div"),c=Pb("A<div>"+a+"</div>");Zb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},pc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
qc=function(a){$b.sendBeacon&&$b.sendBeacon(a)||ic(a)},rc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var sc=function(a,b){return F(this,a)&&F(this,b)},tc=function(a,b){return F(this,a)===F(this,b)},uc=function(a,b){return F(this,a)||F(this,b)},vc=function(a,b){a=F(this,a);b=F(this,b);return-1<String(a).indexOf(String(b))},wc=function(a,b){a=String(F(this,a));b=String(F(this,b));return a.substring(0,b.length)===b},xc=function(a,b){a=F(this,a);b=F(this,b);switch(a){case "pageLocation":var c=A.location.href;b instanceof xb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var Bc=function(){this.g=new zb;yc(this)};Bc.prototype.Eb=function(a){return this.g.s(a)};var yc=function(a){Bb(a.g,"map");var b=function(c,d){Ab(a.g,c,d)};b("and",sc);b("contains",vc);b("equals",tc);b("or",uc);b("startsWith",wc);b("variable",xc)};var Cc=function(a){if(a instanceof Cc)return a;this.Ma=a};Cc.prototype.toString=function(){return String(this.Ma)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Dc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ec=function(a){if(null==a)return String(a);var b=Dc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fc=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Gc=function(a){if(!a||"object"!=Ec(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fc(a,"constructor")&&!Fc(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fc(a,b)},K=function(a,b){var c=b||("array"==Ec(a)?[]:{}),d;for(d in a)if(Fc(a,d)){var e=a[d];"array"==Ec(e)?("array"!=Ec(c[d])&&(c[d]=[]),c[d]=K(e,c[d])):Gc(e)?(Gc(c[d])||(c[d]={}),c[d]=K(e,c[d])):c[d]=e}return c};var Ic=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=wa(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Oa(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.jb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof xb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof sb){var t=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Hc(u[v],b,!!c);var w=b?b.B:Ba(),z=new Ca(w);
b&&(z.g=b.g);return g(h.g.apply(h,[z].concat(u)))};d.push(h);e.push(t);f(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Hc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Oa(d,
h);if(-1<l)return e[l];if(Na(h)||Ua(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Gc(h)){var q=new xb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new sb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Ic(F(this,v[w]),b,!!c);return g((0,this.g.P)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h;};return g(a)};var Jc=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Kc=function(a){if(void 0===a||Na(a)||Gc(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Lc={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Jc(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ya(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Jc(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ya(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Qc="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Rc=new ta("break"),Sc=new ta("continue"),Tc=function(a,b){return F(this,a)+F(this,b)},Uc=function(a,b){return F(this,a)&&F(this,b)},Vc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Oa(Qc,b)){var d=Ic(c);return Hc(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var e=a.get(b);if(e instanceof sb){var f=Jc(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Oa(Lc.supportedMethods,b)){var g=
Jc(c);g.unshift(this.g);return Lc[b].apply(a,g)}}if(a instanceof sb||a instanceof xb){if(a.has(b)){var h=a.get(b);if(h instanceof sb){var l=Jc(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof sb?a.P:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Jc(c))}if(a instanceof Cc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Wc=function(a,b){a=F(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=F(this,b);c.set(a,d);return d},Xc=function(a){var b=Ea(this.g),c=wb(b,Array.prototype.slice.apply(arguments));if(c instanceof ta)return c},Yc=function(){return Rc},Zc=function(a){for(var b=F(this,a),c=0;c<b.length;c++){var d=F(this,b[c]);if(d instanceof ta)return d}},$c=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=F(this,arguments[c+1]);Da(b,d,e,!0)}}},ad=function(){return Sc},bd=function(a,b,c){var d=new k;b=F(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,F(this,f))},cd=function(a,b){return F(this,a)/F(this,b)},dd=function(a,b){a=F(this,a);b=F(this,b);var c=a instanceof Cc,d=b instanceof Cc;return c||d?c&&d?a.Ma==b.Ma:!1:a==b},ed=function(a){for(var b,c=0;c<arguments.length;c++)b=
F(this,arguments[c]);return b};function fd(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=wb(f,d);if(g instanceof ta){if("break"===g.g)break;if("return"===g.g)return g}}}function gd(a,b,c){if("string"===typeof b)return fd(a,function(){return b.length},function(f){return f},c);if(b instanceof xb||b instanceof k||b instanceof sb){var d=b.jb(),e=d.length();return fd(a,function(){return e},function(f){return d.get(f)},c)}}
var hd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){d.set(a,e);return d},b,c)},id=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){var f=Ea(d);Da(f,a,e,!0);return f},b,c)},jd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){var f=Ea(d);f.add(a,e);return f},b,c)},ld=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return kd(function(e){d.set(a,e);return d},b,c)},md=
function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return kd(function(e){var f=Ea(d);Da(f,a,e,!0);return f},b,c)},nd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return kd(function(e){var f=Ea(d);f.add(a,e);return f},b,c)};
function kd(a,b,c){if("string"===typeof b)return fd(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return fd(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var od=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=F(this,a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=F(this,d);var h=Ea(g);for(e(g,h);ub(h,b);){var l=wb(h,d);if(l instanceof ta){if("break"===l.g)break;if("return"===l.g)return l}var m=Ea(g);e(h,m);ub(m,c);h=m}},pd=function(a){a=F(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},vd=function(a,b){var c;a=F(this,a);b=F(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof xb||a instanceof k||a instanceof sb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:ua(b)&&(c=a[b]);else if(a instanceof Cc)return;return c},wd=function(a,b){return F(this,a)>F(this,
b)},xd=function(a,b){return F(this,a)>=F(this,b)},yd=function(a,b){a=F(this,a);b=F(this,b);a instanceof Cc&&(a=a.Ma);b instanceof Cc&&(b=b.Ma);return a===b},zd=function(a,b){return!yd.call(this,a,b)},Ad=function(a,b,c){var d=[];F(this,a)?d=F(this,b):c&&(d=F(this,c));var e=wb(this.g,d);if(e instanceof ta)return e},Bd=function(a,b){return F(this,a)<F(this,b)},Cd=function(a,b){return F(this,a)<=F(this,b)},Dd=function(a,b){return F(this,a)%F(this,b)},Ed=function(a,b){return F(this,a)*F(this,b)},Fd=function(a){return-F(this,
a)},Gd=function(a){return!F(this,a)},Hd=function(a,b){return!dd.call(this,a,b)},Id=function(){return null},Jd=function(a,b){return F(this,a)||F(this,b)},Kd=function(a,b){var c=F(this,a);F(this,b);return c},Ld=function(a){return F(this,a)},Md=function(a){return Array.prototype.slice.apply(arguments)},Nd=function(a){return new ta("return",F(this,a))},Od=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
sb||a instanceof k||a instanceof xb)&&a.set(b,c);return c},Pd=function(a,b){return F(this,a)-F(this,b)},Qd=function(a,b,c){a=F(this,a);var d=F(this,b),e=F(this,c);if(!Na(d)||!Na(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===F(this,d[h]))if(f=F(this,e[h]),f instanceof ta){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=F(this,e[e.length-1]),f instanceof ta&&("return"===f.g||"continue"===
f.g)))return f},Rd=function(a,b,c){return F(this,a)?F(this,b):F(this,c)},Sd=function(a){a=F(this,a);return a instanceof sb?"function":typeof a},Td=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Ud=function(a,b,c,d){var e=F(this,d);if(F(this,c)){var f=wb(this.g,e);if(f instanceof ta){if("break"===f.g)return;if("return"===f.g)return f}}for(;F(this,a);){var g=wb(this.g,e);if(g instanceof ta){if("break"===g.g)break;if("return"===g.g)return g}F(this,
b)}},Vd=function(a){return~Number(F(this,a))},Wd=function(a,b){return Number(F(this,a))<<Number(F(this,b))},Xd=function(a,b){return Number(F(this,a))>>Number(F(this,b))},Yd=function(a,b){return Number(F(this,a))>>>Number(F(this,b))},Zd=function(a,b){return Number(F(this,a))&Number(F(this,b))},$d=function(a,b){return Number(F(this,a))^Number(F(this,b))},ae=function(a,b){return Number(F(this,a))|Number(F(this,b))};var ge=function(){this.g=new zb;be(this)};ge.prototype.Eb=function(a){return he(this.g.s(a))};
var je=function(a,b){return he(ie.g.F(a,b))},be=function(a){var b=function(d,e){Bb(a.g,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Ab(a.g,String(d),e)};c(0,Tc);c(1,Uc);c(2,Vc);c(3,Wc);c(53,Xc);c(4,Yc);c(5,Zc);c(52,$c);c(6,ad);c(9,Zc);c(50,bd);c(10,cd);c(12,dd);c(13,ed);c(47,hd);c(54,id);c(55,jd);c(63,od);c(64,ld);c(65,md);c(66,nd);c(15,pd);c(16,vd);c(17,vd);c(18,wd);c(19,xd);c(20,yd);c(21,zd);c(22,Ad);c(23,Bd);c(24,Cd);c(25,Dd);c(26,Ed);c(27,
Fd);c(28,Gd);c(29,Hd);c(45,Id);c(30,Jd);c(32,Kd);c(33,Kd);c(34,Ld);c(35,Ld);c(46,Md);c(36,Nd);c(43,Od);c(37,Pd);c(38,Qd);c(39,Rd);c(40,Sd);c(41,Td);c(42,Ud);c(58,Vd);c(57,Wd);c(60,Xd);c(61,Yd);c(56,Zd);c(62,$d);c(59,ae)},le=function(){var a=ie,b=ke();Ab(a.g,"require",b)},me=function(a,b){a.g.g.P=b};function he(a){if(a instanceof ta||a instanceof sb||a instanceof k||a instanceof xb||a instanceof Cc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var ne=function(){var a=function(b){return{toString:function(){return b}}};return{Ig:a("consent"),vd:a("consent_always_fire"),Ye:a("convert_case_to"),Ze:a("convert_false_to"),$e:a("convert_null_to"),af:a("convert_true_to"),bf:a("convert_undefined_to"),Wi:a("debug_mode_metadata"),ib:a("function"),th:a("instance_name"),vh:a("live_only"),wh:a("malware_disabled"),xh:a("metadata"),Zi:a("original_activity_id"),$i:a("original_vendor_template_id"),zh:a("once_per_event"),If:a("once_per_load"),bj:a("priority_override"),
cj:a("respected_consent_types"),Pf:a("setup_tags"),Rf:a("tag_id"),Sf:a("teardown_tags")}}();
var oe=[],pe={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},qe=function(a){return pe[a]},re=/[\x00\x22\x26\x27\x3c\x3e]/g;oe[3]=function(a){return String(a).replace(re,qe)};var ve=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,we={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xe=function(a){return we[a]};oe[7]=function(a){return String(a).replace(ve,xe)};
oe[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ve,xe)+"'"}};var De=/['()]/g,Ee=function(a){return"%"+a.charCodeAt(0).toString(16)};oe[12]=function(a){var b=
encodeURIComponent(String(a));De.lastIndex=0;return De.test(b)?b.replace(De,Ee):b};var Fe=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ge={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},He=function(a){return Ge[a]};var Ie=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;oe[14]=function(a){var b=String(a);return Ie.test(b)?b.replace(Fe,He):"#zSoyz"};oe[16]=function(a){return a};var Je;
var Ke=[],Le=[],Me=[],Ne=[],Oe=[],Pe={},Qe,Re,Se,Te=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ue=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Pe[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Zf&&b.Zf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===ne.vd.toString()&&a[f]){}d&&b&&b.Yf&&(e.vtp_gtmCachedValues=b.Yf);return void 0!==d?d(e):Je(c,e,b)},We=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Ve(a[e],b,c));return d},Ve=function(a,b,c){if(Na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ve(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Ke[f];if(!g||b.ze(g))return;c[f]=!0;try{var h=We(g,b,c);h.vtp_gtmEventId=b.id;d=Ue(h,b);Se&&(d=Se.Oh(d,h))}catch(z){b.mg&&b.mg(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ve(a[l],b,c)]=Ve(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=Ve(a[p],b,c);Re&&(m=m||q===Re.Uc);d.push(q)}return Re&&m?Re.Rh(d):d.join("");case "escape":d=Ve(a[1],b,c);if(Re&&Na(a[1])&&"macro"===a[1][0]&&Re.ii(a))return Re.Ci(d);d=
String(d);for(var r=2;r<a.length;r++)oe[a[r]]&&(d=oe[a[r]](d));return d;case "tag":var t=a[1];if(!Ne[t])throw Error("Unable to resolve tag reference "+t+".");return d={gg:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Xe(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Xe=function(a,b,c){try{return Qe(We(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ye=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.s=a;this.g=c};pa(Ye,Error);function Ze(a,b){if(Na(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Ze(a[c],b[c])}};var $e=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.B=a;this.s=b;this.g=[]};pa($e,Error);var bf=function(){return function(a,b){a instanceof $e||(a=new $e(a,af));b&&a.g.push(b);throw a;}};function af(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)La(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ef=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=cf(a),f=0;f<Le.length;f++){var g=Le[f],h=df(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Ne.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},df=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},cf=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Xe(Me[c],a));return b[c]}};var ff={Oh:function(a,b){b[ne.Ye]&&"string"===typeof a&&(a=1==b[ne.Ye]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ne.$e)&&null===a&&(a=b[ne.$e]);b.hasOwnProperty(ne.bf)&&void 0===a&&(a=b[ne.bf]);b.hasOwnProperty(ne.af)&&!0===a&&(a=b[ne.af]);b.hasOwnProperty(ne.Ze)&&!1===a&&(a=b[ne.Ze]);return a}};var gf=function(){this.g={}};function hf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Ye(c,d,g);}}function jf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));hf(e,b,d,g);hf(f,b,d,g)}}}};var pf=function(a){var b=mf.M,c=this;this.s=new gf;this.g={};var d={},e=jf(this.s,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ta(a,function(f,g){var h={};Ta(g,function(l,m){var p=nf(l,m);h[l]=p.assert;d[l]||(d[l]=p.T)});c.g[f]=function(l,m){var p=h[l];if(!p)throw of(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},rf=function(a){return qf.g[a]||
function(){}};function nf(a,b){var c=Te(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=of;try{return Ue(c)}catch(d){return{assert:function(e){throw new Ye(e,{},"Permission "+e+" is unknown.");},T:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function of(a,b,c){return new Ye(a,b,c)};var sf=!1;var tf={};tf.Vi=Xa('');tf.Uh=Xa('');var uf=sf,vf=tf.Uh,wf=tf.Vi;
var Lf=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Mf=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Lf(b,"/*")&&(b=b.slice(0,-2));Lf(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Nf=/^[a-z0-9-]+$/i,Of=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Qf=function(a,b){var c;if(!(c=!Pf(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Nf.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Of.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var t=l.hostname,u=q;if(0!==u.indexOf("*."))r=t.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=t.toLowerCase().indexOf(u.toLowerCase());r=-1===v?!1:t.length===u.length?
!0:t.length!==u.length+v?!1:"."===t[v-1]}if(r){var w=p.slice(p.indexOf("/"));h=Mf(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Pf=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Rf=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Sf={Fn:"function",DustMap:"Object",List:"Array"},M=function(a,b,c){for(var d=0;d<b.length;d++){var e=Rf.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof sb?p="Fn":l instanceof k?p="List":l instanceof xb?p="DustMap":
l instanceof Cc&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Sf[h]||h)+".");}}};function Tf(a){return""+a}
function Uf(a,b){var c=[];return c};var Vf=function(a,b){var c=new sb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=F(this,d[e]);return b.apply(this,d)});c.kb();return c},Wf=function(a,b){var c=new xb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ka(e)?c.set(d,Vf(a+"_"+d,e)):(La(e)||n(e)||"boolean"==typeof e)&&c.set(d,e)}c.kb();return c};var Xf=function(a,b){M(G(this),["apiName:!string","message:?string"],arguments);var c={},d=new xb;return d=Wf("AssertApiSubject",c)};var Yf=function(a,b){M(G(this),["actual:?*","message:?string"],arguments);var c={},d=new xb;
return d=Wf("AssertThatSubject",c)};function Zf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Ic(arguments[d],c));return Hc(a.apply(null,b))}}var ag=function(){for(var a=Math,b=$f,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Zf(a[e].bind(a)))}return c};var bg=function(a){var b;return b};var cg=function(a){var b;return b};var dg=function(a){M(G(this),["uri:!string"],arguments);return encodeURI(a)};var eg=function(a){M(G(this),["uri:!string"],arguments);return encodeURIComponent(a)};var fg=function(a){M(G(this),["message:?string"],arguments);};var gg=function(a,b){M(G(this),["min:!number","max:!number"],arguments);return Qa(a,b)};var hg=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.Jh.apply(null,Array.prototype.slice.call(arguments,1))};var ig=function(){hg(this,"read_container_data");var a=new xb;a.set("containerId",'GTM-WJZQSJF');a.set("version",'270');a.set("environmentName",'');a.set("debugMode",uf);a.set("previewMode",wf);a.set("environmentMode",vf);a.kb();return a};var jg=function(){return(new Date).getTime()};var kg=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof sb)return"function";if(a instanceof Cc){a=a.Ma;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var lg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(uf||wf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Hc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Ic(c))})}};var mg=function(a){return Wa(Ic(a,this.g))};var ng=function(a){return Number(Ic(a,this.g))};var og=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var pg=function(a,b,c){var d=null,e=!1;return e?d:null};var $f="floor ceil round max min abs pow sqrt".split(" ");var qg=function(){var a={};return{$h:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Pi:function(b,c){a[b]=c},reset:function(){a={}}}},rg=function(a,b){M(G(this),["apiName:!string","mock:?*"],arguments);};var sg={};
sg.keys=function(a){return new k};
sg.values=function(a){return new k};
sg.entries=function(a){return new k};sg.freeze=function(a){return a};var ug=function(){this.g={};this.s={};};ug.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
ug.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ka(b)?Vf(a,b):Wf(a,b)};
var wg=function(a,b,c){if(a.s.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.s[b]=Ka(c)?Vf(b,c):Wf(b,c)};function vg(a,b){var c=void 0;return c};function xg(){var a={};return a};var N={Wb:"_ee",Zc:"_syn_or_mod",dj:"_uei",Ud:"_eu",aj:"_pci",Ld:"event_callback",Jc:"event_timeout",wa:"gtag.config",Ia:"gtag.get",ka:"purchase",vb:"refund",Za:"begin_checkout",tb:"add_to_cart",ub:"remove_from_cart",Rg:"view_cart",ff:"add_to_wishlist",Ha:"view_item",ef:"view_promotion",df:"select_promotion",yd:"select_item",Ec:"view_item_list",cf:"add_payment_info",Qg:"add_shipping_info",Ua:"value_key",Ta:"value_callback",xa:"allow_ad_personalization_signals",Tb:"restricted_data_processing",Pb:"allow_google_signals",
Aa:"cookie_expires",Qb:"cookie_update",Vb:"session_duration",Nc:"session_engaged_time",La:"user_properties",ma:"transport_url",R:"ads_data_redaction",Ab:"user_data",Rb:"first_party_collection",D:"ad_storage",H:"analytics_storage",wd:"region",Xe:"wait_for_update",za:"conversion_linker",ya:"conversion_cookie_prefix",ba:"value",aa:"currency",Bf:"trip_type",X:"items",uf:"passengers",zd:"allow_custom_scripts",zb:"session_id",zf:"quantity",hb:"transaction_id",cb:"language",Ic:"country",Gc:"allow_enhanced_conversions",
Ed:"aw_merchant_id",Cd:"aw_feed_country",Dd:"aw_feed_language",Bd:"discount",lf:"developer_id",Pc:"delivery_postal_code",Kd:"estimated_delivery_date",Id:"shipping",Sd:"new_customer",Fd:"customer_lifetime_value",Jd:"enhanced_conversions"};N.Ff=[N.ka,N.vb,N.Za,N.tb,N.ub,N.Rg,N.ff,N.Ha,N.ef,N.df,N.Ec,N.yd,N.cf,N.Qg];N.Ef=[N.xa,N.Pb,N.Qb];N.Gf=[N.Aa,N.Jc,N.Vb,N.Nc];var zg=function(a){Ga("GTM",a)};var Ag=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Bg=new Ag(1936,!0),Cg=new Ag(1933),Dg=new Ag(373442741);var Eg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[Cg.g]=!0}};Eg.g=void 0;Eg.s=function(){return Eg.g?Eg.g:Eg.g=new Eg};var Fg=function(a){return Eg.s().g(a.g,a.defaultValue)};var Gg=[];function Hg(){var a=bc("google_tag_data",{});a.ics||(a.ics={entries:{},set:Ig,update:Jg,addListener:Kg,notifyListeners:Lg,active:!1,usedDefault:!1});return a.ics}
function Ig(a,b,c,d,e,f){var g=Hg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&n(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&A.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Mg(a),Lg(),Ga("TAGGING",2))},f)}}}
function Jg(a,b){var c=Hg();c.active=!0;if(void 0!=b){var d=Ng(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Ng(a);f.quiet?(f.quiet=!1,Mg(a)):g!==d&&Mg(a)}}function Kg(a,b){Gg.push({ke:a,Wh:b})}function Mg(a){for(var b=0;b<Gg.length;++b){var c=Gg[b];Na(c.ke)&&-1!==c.ke.indexOf(a)&&(c.og=!0)}}function Lg(a){for(var b=0;b<Gg.length;++b){var c=Gg[b];if(c.og){c.og=!1;try{c.Wh({Mh:a})}catch(d){}}}}
var Ng=function(a){var b=Hg().entries[a]||{};return void 0!==b.update?b.update:b.initial},Og=function(a){return(Hg().entries[a]||{}).initial},Tg=function(a){return!(Hg().entries[a]||{}).quiet},Ug=function(){return Fg(Cg)?Hg().active:!1},Vg=function(){return Hg().usedDefault},Wg=function(a,b){Hg().addListener(a,b)},Xg=function(a){Hg().notifyListeners(a)},Yg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Tg(b[e]))return!0;return!1}if(c()){var d=!1;Wg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
Zg=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Ng(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=n(b)?[b]:b,e={};c().length!==d.length&&Wg(d,function(f){var g=c();0<g.length&&(f.ke=g,a(f))})};function $g(a){for(var b=[],c=0;c<ah.length;c++){var d=a(ah[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var ah=[N.D,N.H],bh=function(a){var b=a[N.wd];b&&zg(40);var c=a[N.Xe];c&&zg(41);for(var d=Na(b)?b:[b],e={Jb:0};e.Jb<d.length;e={Jb:e.Jb},++e.Jb)Ta(a,function(f){return function(g,h){if(g!==N.wd&&g!==N.Xe){var l=d[f.Jb];Hg().set(g,h,l,"VN","VN-HN",c)}}}(e))},ch=function(a,b){Ta(a,function(c,d){Hg().update(c,d)});Xg(b)},O=function(a){var b=Ng(a);return void 0!=b?b:!0},dh=function(){return"G1"+$g(Ng)},eh=function(a,b){Wg(a,b)},fh=function(a,b){Zg(a,b)},gh=function(a,b){Yg(a,b)};var ih=function(a){return hh?H.querySelectorAll(a):null},jh=function(a,b){if(!hh)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},kh=!1;if(H.querySelectorAll)try{var lh=H.querySelectorAll(":root");lh&&1==lh.length&&lh[0]==H.documentElement&&(kh=!0)}catch(a){}var hh=kh;var mh=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,
null))}return!1};
var nh=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};zg(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},oh=function(a){var b=nh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var vh=/:[0-9]+$/,wh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},zh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=xh(a.protocol)||xh(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(vh,"").toLowerCase());return yh(a,b,c,d,e)},yh=function(a,b,c,d,e){var f,g=xh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ah(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(vh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Ga("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Oa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=wh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},xh=function(a){return a?a.replace(":",
"").toLowerCase():""},Ah=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Bh=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Ga("TAGGING",1),c="/"+c);var d=b.hostname.replace(vh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Ch=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=Bh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var Dh={};var Eh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Fh=new RegExp(/@(gmail|googlemail)\./i),Gh=new RegExp(/support|noreply/i),Hh="SCRIPT STYLE IMG SVG PATH BR".split(" "),Ih=["BR"],Jh={};
function Kh(a){var b;if(a===H.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Kh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function Lh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function Mh(a){if(0==a.length)return null;var b;b=Lh(a,function(c){return!Gh.test(c.ja)});b=Lh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=Lh(b,function(c){return!mh(c.element)});return b[0]}
var Nh=function(a){var b=!a||!!a.fi,c=!a||!!a.gi,d=b+"."+c,e=Jh[d];if(e&&200>cb()-e.timestamp)return e.result;var f;var g=[],h=H.body;if(h){for(var l=h.querySelectorAll("*"),m=0;m<l.length&&1E4>m;m++){var p=l[m];if(!(0<=Hh.indexOf(p.tagName.toUpperCase()))){for(var q=!1,r=0;r<p.childElementCount&&1E4>r;r++)if(!(0<=Ih.indexOf(p.children[r].tagName.toUpperCase()))){q=!0;break}q||g.push(p)}}f={elements:g,status:1E4<l.length?"2":"1"}}else f={elements:g,status:"4"};for(var t=f,u=t.elements,v=[],w=0;w<
u.length;w++){var z=u[w],x=z.textContent;z.value&&(x=z.value);if(x){var y=x.match(Eh);if(y){var B=y[0],C;if(A.location){var E=yh(A.location,"host",!0);C=0<=B.toLowerCase().indexOf(E)}else C=!1;C||v.push({element:z,ja:B})}}}var D=Mh(v),I=[];if(D){var R=D.element,Q={ja:D.ja,tagName:R.tagName,type:1};b&&(Q.querySelector=Kh(R));c&&(Q.isVisible=!mh(R));I.push(Q)}var S={elements:I,status:10<v.length?"3":t.status};Jh[d]={timestamp:cb(),result:S};return S},Oh=function(a){return a.tagName+":"+a.isVisible+
":"+a.ja.length+":"+Fh.test(a.ja)};var mf={},gi=null,hi=Math.random();mf.M="GTM-WJZQSJF";mf.Yc="6g0";mf.Yi="";mf.Kg="ChAI8PHAhgYQ04WDjvzS+7wlEiQAELUCG/VQnc2PWDZsSyrdv2kAhqZq3TBoAVK6zRMmESQbZ9saAnU6";var ii={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},ji={__paused:!0,__tg:!0},ki;for(ki in ii)ii.hasOwnProperty(ki)&&(ji[ki]=!0);var li="www.googletagmanager.com/gtm.js";
var mi=li,ni=Xa(""),oi=null,pi=null,qi="https://www.googletagmanager.com/a?id="+mf.M+"&cv=270",ri={},si={},ti=function(){var a=gi.sequence||1;gi.sequence=a+1;return a};mf.Jg="";var ui={},vi=new Ra,wi={},xi={},Ai={name:"dataLayer",set:function(a,b){K(pb(a,b),wi);yi()},get:function(a){return zi(a,2)},reset:function(){vi=new Ra;wi={};yi()}},zi=function(a,b){return 2!=b?vi.get(a):Bi(a)},Bi=function(a,b){var c=a.split(".");b=b||[];for(var d=wi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Oa(b,d))return}return d},Ci=function(a,b){xi.hasOwnProperty(a)||(vi.set(a,b),K(pb(a,b),wi),yi())},Di=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=zi(c,1);if(Na(d)||Gc(d))d=K(d);xi[c]=d}},yi=function(a){Ta(xi,function(b,c){vi.set(b,c);K(pb(b,void 0),wi);K(pb(b,c),wi);a&&delete xi[b]})},Fi=function(a,b,c){ui[a]=ui[a]||{};ui[a][b]=Ei(b,c)},Ei=function(a,b){var c,d=1!==(void 0===b?2:b)?Bi(a):vi.get(a);"array"===Ec(d)||"object"===Ec(d)?c=K(d):c=d;return c},Gi=function(a,b){if(ui[a])return ui[a][b]},Hi=function(a,b){ui[a]&&delete ui[a][b]};var Ki={},Li=function(a,b){if(A._gtmexpgrp&&A._gtmexpgrp.hasOwnProperty(a))return A._gtmexpgrp[a];void 0===Ki[a]&&(Ki[a]=Math.floor(Math.random()*b));return Ki[a]};function Mi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function Ni(a){return Fg(Dg)&&!a.navigator.cookieEnabled?!1:"null"!==a.origin};var Qi=function(a,b,c,d){return Oi(d)?Mi(a,String(b||Pi()),c):[]},Ti=function(a,b,c,d,e){if(Oi(e)){var f=Ri(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Si(f,function(g){return g.fd},b);if(1===f.length)return f[0].id;f=Si(f,function(g){return g.sc},c);return f[0]?f[0].id:void 0}}};function Ui(a,b,c,d){var e=Pi(),f=window;Ni(f)&&(f.document.cookie=a);var g=Pi();return e!=g||void 0!=c&&0<=Qi(b,g,!1,d).indexOf(c)}
var Yi=function(a,b,c,d){function e(w,z,x){if(null==x)return delete h[z],w;h[z]=x;return w+"; "+z+"="+x}function f(w,z){if(null==z)return delete h[z],w;h[z]=!0;return w+"; "+z}if(!Oi(c.Ra))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Vi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.vi);g=e(g,"samesite",
c.Ki);c.Mi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Wi(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!Xi(u,c.path)&&Ui(v,a,b,c.Ra))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Xi(m,c.path)?1:Ui(g,a,b,c.Ra)?0:1},Zi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Yi(a,b,c)};
function Si(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Ri(a,b,c){for(var d=[],e=Qi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),fd:1*l[0]||1,sc:1*l[1]||1}))}}return d}
var Vi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},$i=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,aj=/(^|\.)doubleclick\.net$/i,Xi=function(a,b){return aj.test(window.document.location.hostname)||"/"===b&&$i.test(a)},Pi=function(){return Ni(window)?window.document.cookie:""},Wi=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;aj.test(e)||$i.test(e)||a.push("none");return a},Oi=function(a){if(!Fg(Cg)||!a||!Ug())return!0;if(!Tg(a))return!1;var b=Ng(a);return null==b?!0:!!b};var bj=function(){return[Math.round(2147483647*Math.random()),Math.round(cb()/1E3)].join(".")},ej=function(a,b,c,d,e){var f=cj(b);return Ti(a,f,dj(c),d,e)},fj=function(a,b,c,d){var e=""+cj(c),f=dj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},cj=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},dj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function gj(a,b,c){var d,e=Number(null!=a.nb?a.nb:void 0);0!==e&&(d=new Date((b||cb())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var hj=["1"],ij={},mj=function(a){var b=jj(a.prefix);if(!ij[b]&&!kj(b,a.path,a.domain)){var c=bj();if(0===lj(b,c,a)){var d=bc("google_tag_data",{});d._gcl_au?Ga("GTM",57):d._gcl_au=c}kj(b,a.path,a.domain)}};function lj(a,b,c){var d=fj(b,"1",c.domain,c.path),e=gj(c);e.Ra="ad_storage";return Zi(a,d,e)}function kj(a,b,c){var d=ej(a,b,c,hj,"ad_storage");d&&(ij[a]=d);return d}function jj(a){return(a||"_gcl")+"_au"};var nj=function(a){for(var b=[],c=H.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Re:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function oj(a,b){var c=nj(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Re]||(d[c[e].Re]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),qa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Re].push(g)}}return d};function pj(){for(var a=qj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function rj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var qj,sj;
function tj(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=sj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}qj=qj||rj();sj=sj||pj();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var uj;var yj=function(){var a=vj,b=wj,c=xj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){kc(H,"mousedown",d);kc(H,"keyup",d);kc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},zj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};xj().decorators.push(f)},Aj=function(a,b,c){for(var d=xj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==H.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&lb(e,g.callback())}}return e},xj=function(){var a=bc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Bj=/(.*?)\*(.*?)\*(.*)/,Cj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Dj=/^(?:www\.|m\.|amp\.)+/,Ej=/([^?#]+)(\?[^#]*)?(#.*)?/;function Fj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Hj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);qj=qj||rj();sj=sj||pj();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),t=p?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|t>>4,z=(t&15)<<2|u>>6,x=u&63;q||(x=64,p||(z=64));l.push(qj[v],qj[w],qj[z],qj[x])}g=l.join("");f.call(e,g)}}var y=b.join("*");return["1",Gj(y),
y].join("*")},Gj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=uj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}uj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^uj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Jj=function(){return function(a){var b=Bh(A.location.href),
c=b.search.replace("?",""),d=wh(c,"_gl",!1,!0)||"";a.query=Ij(d)||{};var e=zh(b,"fragment").match(Fj("_gl"));a.fragment=Ij(e&&e[3]||"")||{}}},Kj=function(a){var b=Jj(),c=xj();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(lb(d,e.query),a&&lb(d,e.fragment));return d},Ij=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Bj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Gj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],t=0;t<r.length;t+=2)q[r[t]]=tj(r[t+1]);return q}}}}catch(u){}};function Lj(a,b,c,d){function e(p){var q=p,r=Fj(a).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}p=t;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Ej.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Mj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Aj(b,1,c),e=Aj(b,2,c),f=Aj(b,3,c);if(mb(d)){var g=Hj(d);c?Nj("_gl",g,a):Oj("_gl",g,a,!1)}if(!c&&mb(e)){var h=Hj(e);Oj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Oj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Nj(m,p,q);break a}}"string"==typeof q&&Lj(m,p,q,void 0)}}
function Oj(a,b,c,d){if(c.href){var e=Lj(a,b,c.href,void 0===d?!1:d);Hb.test(e)&&(c.href=e)}}
function Nj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Lj(a,b,c.action);Hb.test(m)&&(c.action=m)}}}
var vj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Mj(e,e.hostname)}}catch(g){}},wj=function(a){try{if(a.action){var b=zh(Bh(a.action),"host");Mj(a,b)}}catch(c){}},Uj=function(a,b,c,d){yj();zj(a,b,"fragment"===c?2:1,!!d,!1)},Vj=function(a,b){yj();zj(a,[yh(A.location,"host",!0)],b,!0,!0)},Wj=function(){var a=H.location.hostname,b=Cj.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Dj,""),l=e.replace(Dj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},Xj=function(a,b){return!1===a?!1:a||b||Wj()};var Yj={};var Zj=/^\w+$/,ak=/^[\w-]+$/,bk={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},ck=function(){if(!Fg(Cg)||!Ug())return!0;var a=Ng("ad_storage");return null==a?!0:!!a},dk=function(a,b){Tg("ad_storage")?ck()?a():Zg(a,"ad_storage"):b?Ga("TAGGING",3):Yg(function(){dk(a,!0)},["ad_storage"])},fk=function(a){return ek(a).map(function(b){return b.qa})},ek=function(a){var b=[];if(!Ni(A)||!H.cookie)return b;var c=Qi(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Bc:d.Bc},e++){var f=gk(c[e]);if(null!=f){var g=f,h=g.version;d.Bc=g.qa;var l=g.timestamp,m=g.labels,p=Pa(b,function(q){return function(r){return r.qa===q.Bc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=hk(p.labels,m||[])):b.push({version:h,qa:d.Bc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return ik(b)};function hk(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function jk(a){return a&&"string"==typeof a&&a.match(Zj)?a:"_gcl"}
var lk=function(){var a=Bh(A.location.href),b=zh(a,"query",!1,void 0,"gclid"),c=zh(a,"query",!1,void 0,"gclsrc"),d=zh(a,"query",!1,void 0,"wbraid"),e=zh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||wh(f,"gclid",!1,void 0);c=c||wh(f,"gclsrc",!1,void 0);d=d||wh(f,"wbraid",!1,void 0)}return kk(b,c,e,d)},kk=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&ak.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(ak))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},mk=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},ok=function(a){var b=lk();dk(function(){nk(b,a)})};
function nk(a,b,c,d){function e(p,q){var r=pk(p,f);r&&(Zi(r,q,g),h=!0)}b=b||{};d=d||[];var f=jk(b.prefix);c=c||cb();var g=gj(b,c,!0);g.Ra="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Yj.enable_gbraid_cookie_write?0:Yj.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var rk=function(a,b){var c=Kj(!0);dk(function(){for(var d=jk(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==bk[f]){var g=pk(f,d),h=c[g];if(h){var l=Math.min(qk(h),cb()),m;b:{var p=l,q=g;if(Ni(A))for(var r=Qi(q,H.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(qk(r[t])>p){m=!0;break b}m=!1}if(!m){var u=gj(b,l,!0);u.Ra="ad_storage";Zi(g,h,u)}}}}nk(kk(c.gclid,c.gclsrc),b)})},pk=function(a,b){var c=bk[a];if(void 0!==c)return b+c},qk=function(a){return 0!==sk(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function gk(a){var b=sk(a.split("."));return 0===b.length?null:{version:b[0],qa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function sk(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!ak.test(a[2])?[]:a}
var tk=function(a,b,c,d,e){if(Na(b)&&Ni(A)){var f=jk(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=pk(a[l],f);if(m){var p=Qi(m,H.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};dk(function(){Uj(g,b,c,d)})}},ik=function(a){return a.filter(function(b){return ak.test(b.qa)})},uk=function(a,b){if(Ni(A)){for(var c=jk(b.prefix),d={},e=0;e<a.length;e++)bk[a[e]]&&(d[a[e]]=bk[a[e]]);dk(function(){Ta(d,function(f,g){var h=Qi(c+g,H.cookie,void 0,"ad_storage");h.sort(function(t,
u){return qk(u)-qk(t)});if(h.length){var l=h[0],m=qk(l),p=0!==sk(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==sk(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];nk(q,b,m,p)}})})}};function vk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var wk=function(a){function b(e,f,g){g&&(e[f]=g)}if(Ug()){var c=lk();if(vk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Vj(function(){return d},3);Vj(function(){var e={};return e._up="1",e},1)}}};function xk(a,b){var c=jk(b),d=pk(a,c);if(!d)return 0;for(var e=ek(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function yk(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var zk=/^\d+\.fls\.doubleclick\.net$/;function Ak(a,b){Tg(N.D)?O(N.D)?a():Zg(a,N.D):b?zg(42):gh(function(){Ak(a,!0)},[N.D])}function Bk(a){var b=Bh(A.location.href),c=zh(b,"host",!1);if(c&&c.match(zk)){var d=zh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ck(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Bk("gcl"+a);if(d)return d.split(".")}var e=jk(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!O(N.D)&&c,g;g=lk()[a]||[];if(0<g.length)return f?["0"]:g}var h=pk(a,e);return h?fk(h):[]}function Dk(a){var b=[];Ta(a,function(c,d){d=ik(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].qa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var Ek=function(a){var b=Bk("gac");return b?!O(N.D)&&a?"0":decodeURIComponent(b):Dk(ck()?oj():{})},Fk=function(a){var b=Bk("gacgb");return b?!O(N.D)&&a?"0":decodeURIComponent(b):Dk(ck()?oj("_gac_gb",!0):{})},Gk=function(a,b,c){var d=lk(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!mk(h,c)||e.push({qa:f,te:h});!g||c&&"dc"!==c||e.push({qa:g,te:"ds"});Ak(function(){mj(b);var l=ij[jj(b.prefix)],m=!1;if(l&&0<e.length)for(var p=gi.joined_auid=gi.joined_auid||{},q=0;q<e.length;q++){var r=e[q],t=r.qa,u=r.te,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w="gb"===u?w+"?gbraid="+t+"&auid="+l:w+"?gclid="+t+"&auid="+l+"&gclsrc="+u;qc(w);m=p[v]=!0}}null==a&&(a=m);
if(a&&l){var z=jj(b.prefix),x=ij[z];x&&lj(z,x,b)}})},Hk=function(a){var b;if(Bk("gclaw")||Bk("gac")||0<(lk().aw||[]).length)b=!1;else{var c;if(0<(lk().gb||[]).length)c=!0;else{var d=Math.max(xk("aw",a),yk(ck()?oj():{}));c=Math.max(xk("gb",a),yk(ck()?oj("_gac_gb",!0):{}))>d}b=c}return b};var Ik=/[A-Z]+/,Jk=/\s/,Kk=function(a){if(n(a)&&(a=ab(a),!Jk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ik.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],N:d}}}}},Mk=function(a){for(var b={},c=0;c<a.length;++c){var d=Kk(a[c]);d&&(b[d.id]=d)}Lk(b);var e=[];Ta(b,function(f,g){e.push(g)});return e};
function Lk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.N[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nk=function(){var a=!1;return a};var Pk=function(a,b,c,d){return(2===Ok()||d||"http:"!=A.location.protocol?a:b)+c},Ok=function(){var a=gc(),b;if(1===a)a:{var c=mi;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=H.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var bl=function(a){if(O(N.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=Ch(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=Ch(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},cl=function(){var a;if(!(a=ni)){var b;if(!0===A._gtmdgs)b=!0;else{var c=$b&&$b.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Wa("1");return Li(1,100)<d?Li(2,2):-1},dl=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var el=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),fl={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},gl={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},hl="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var il=function(){var a=!1;return a},kl=function(a){var b=zi("gtm.allowlist")||zi("gtm.whitelist");b&&zg(9);il()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&nb(Ya(b),fl),d=zi("gtm.blocklist")||
zi("gtm.blacklist");d||(d=zi("tagTypeBlacklist"))&&zg(3);d?zg(8):d=[];jl()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Oa(Ya(d),"google")&&zg(2);var e=d&&nb(Ya(d),gl),f={};return function(g){var h=g&&g[ne.ib];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=si[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Oa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Oa(c,l[q])){zg(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var t=0<=Oa(e,h);if(t)r=t;else{var u=Sa(e,l||[]);u&&zg(10);r=u}}var v=!m||r;v||!(0<=Oa(l,"sandboxedScripts"))||c&&-1!==Oa(c,"sandboxedScripts")||(v=Sa(e,hl));return f[h]=v}},jl=function(){return el.test(A.location&&A.location.hostname)};var ll={active:!0,isAllowed:function(){return!0}},ml=function(a){var b=gi.zones;return b?b.checkState(mf.M,a):ll},nl=function(a){var b=gi.zones;!b&&a&&(b=gi.zones=a());return b};var ol=function(){},pl=function(){};var ql=!1,rl=0,sl=[];function tl(a){if(!ql){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ql=!0;for(var e=0;e<sl.length;e++)J(sl[e])}sl.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function ul(){if(!ql&&140>rl){rl++;try{H.documentElement.doScroll("left"),tl()}catch(a){A.setTimeout(ul,50)}}}var vl=function(a){ql?a():sl.push(a)};var xl=function(a,b){this.g=!1;this.F=[];this.L={tags:[]};this.P=!1;this.s=this.B=0;wl(this,a,b)},yl=function(a,b,c,d){if(ji.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Gc(d)&&(e=K(d,e));e.id=c;e.status="timeout";return a.L.tags.push(e)-1},zl=function(a,b,c,d){var e=a.L.tags[b];e&&(e.status=c,e.executionTime=d)},Al=function(a){if(!a.g){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.g=!0;a.F.length=0}},wl=function(a,b,c){Ka(b)&&a.ac(b);c&&A.setTimeout(function(){return Al(a)},Number(c))};
xl.prototype.ac=function(a){var b=this,c=kb(function(){return J(function(){a(mf.M,b.L)})});this.g?c():this.F.push(c)};var Bl=function(a){a.B++;return kb(function(){a.s++;a.P&&a.s>=a.B&&Al(a)})};var Cl=function(){function a(d){return!La(d)||0>d?0:d}if(!gi._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=La(Ai.get("gtm.start"))?Ai.get("gtm.start"):0;gi._li={cst:a(c-b),cbt:a(pi-b)}}},Dl=function(a){A.performance&&A.performance.mark(mf.M+"_"+a+"_start")},El=function(a){if(A.performance){var b=mf.M+"_"+a+"_start",c=mf.M+"_"+a+"_duration";A.performance.measure(c,b);var d=A.performance.getEntriesByName(c)[0];A.performance.clearMarks(b);A.performance.clearMeasures(c);
var e=gi._p||{};void 0===e[a]&&(e[a]=d.duration,gi._p=e);return d.duration}},Fl=function(){if(A.performance&&A.performance.now){var a=gi._p||{};a.PAGEVIEW=A.performance.now();gi._p=a}};var Gl={},Hl=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},Il=!1;
var Jl=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(A[b])A.hasOwnProperty(b)||zg(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(bb());A[b]=c}Cl();return A[b]},Kl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Hl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Ll=function(a){if(!Ug())return;var b=Hl();b(a+"require","linker");b(a+"linker:passthrough",
!0);};
var Nl=function(a){},Ml=function(){return A.GoogleAnalyticsObject||"ga"},Ol=function(a,b){return function(){var c=Hl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Vl=function(a){},Zl=function(a){},$l=
function(){return"&tc="+Ne.filter(function(a){return a}).length},cm=function(){2022<=am().length&&bm()},em=function(){dm||(dm=A.setTimeout(bm,500))},bm=function(){dm&&(A.clearTimeout(dm),dm=void 0);void 0===fm||gm[fm]&&!hm&&!im||(jm[fm]||km.ji()||0>=lm--?(zg(1),jm[fm]=!0):(km.Fi(),ic(am(!0)),gm[fm]=!0,mm=nm=om=im=hm=""))},am=function(a){var b=fm;if(void 0===b)return"";var c=Ha("GTM"),d=Ha("TAGGING");return[pm,gm[b]?"":"&es=1",qm[b],Vl(b),c?"&u="+c:"",d?"&ut="+d:"",$l(),hm,im,om,nm,Zl(a),mm,"&z=0"].join("")},
sm=function(){pm=rm()},rm=function(){return[qi,"&v=3&t=t","&pid="+Qa(),"&rv="+mf.Yc].join("")},Yl=["L","S","Y"],Ul=["S","E"],tm={Ii:"0.005000",Eg:""},um=Math.random(),vm=tm.Ii;var wm=um<vm,pm=rm(),gm={},hm="",im="",mm="",nm="",Xl={},Tl={},Wl=!1,om="",fm=void 0,qm={},jm={},dm=void 0,km=function(a,b){var c=0,d=
0;return{ji:function(){if(c<a)return!1;cb()-d>=b&&(c=0);return c>=a},Fi:function(){cb()-d>=b&&(c=0);c++;d=cb()}}}(2,1E3),lm=1E3,xm=function(a,b,c,d){if(wm&&!jm[a]&&b){a!==fm&&(bm(),fm=a);var e,f=String(b[ne.ib]||"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var g=c+e;hm=hm?hm+"."+g:"&tr="+g;
var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var l=(Pe[h]?"1":"2")+e;mm=mm?mm+"."+l:"&ti="+l;em();cm()}};var Am=function(a,b,c){if(wm&&!jm[a]){a!==
fm&&(bm(),fm=a);var d=c+b;im=im?im+"."+d:"&epr="+d;em();cm()}},Bm=function(a,b,c){};function Cm(a,b,c,d){var e=Ne[a],f=Dm(a,b,c,d);if(!f)return null;var g=Ve(e[ne.Pf],c,[]);if(g&&g.length){var h=g[0];f=Cm(h.index,{onSuccess:f,onFailure:1===h.gg?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Dm(a,b,c,d){function e(){if(f[ne.wh])h();else{var w=We(f,c,[]);var z=w[ne.Ig];if(null!=z)for(var x=0;x<z.length;x++)if(!O(z[x])){h();return}var y=yl(c.Xa,String(f[ne.ib]),Number(f[ne.Rf]),w[ne.xh]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=cb()-E;xm(c.id,Ne[a],"5",D);zl(c.Xa,y,"success",
D);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=cb()-E;xm(c.id,Ne[a],"6",D);zl(c.Xa,y,"failure",D);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;xm(c.id,f,"1");var C=function(){var D=cb()-E;xm(c.id,f,"7",D);zl(c.Xa,y,"exception",D);B||(B=!0,h())};var E=cb();try{Ue(w,c)}catch(D){C(D)}}}var f=Ne[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.ze(f))return null;var m=Ve(f[ne.Sf],c,[]);if(m&&m.length){var p=m[0],q=Cm(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.gg?l:q}if(f[ne.If]||f[ne.zh]){var r=f[ne.If]?Oe:
c.Qi,t=g,u=h;if(!r[a]){e=kb(e);var v=Em(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function Em(a,b,c){var d=[],e=[];b[a]=Fm(d,e,c);return{onSuccess:function(){b[a]=Gm;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Hm;for(var f=0;f<e.length;f++)e[f]()}}}function Fm(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Gm(a){a()}function Hm(a,b){b()};var Km=function(a,b){for(var c=[],d=0;d<Ne.length;d++)if(a[d]){var e=Ne[d];var f=Bl(b.Xa);try{var g=Cm(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Pe[p];l.call(h,{Ag:m,pg:q?q.priorityOverride||0:0,Eb:g})}else Im(d,b),f()}catch(u){f()}}var r=b.Xa;r.P=!0;r.s>=r.B&&Al(r);c.sort(Jm);for(var t=0;t<c.length;t++)c[t].Eb();
return 0<c.length};function Jm(a,b){var c,d=b.pg,e=a.pg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Ag,h=b.Ag;f=g>h?1:g<h?-1:0}return f}function Im(a,b){if(!wm)return;var c=function(d){var e=b.ze(Ne[d])?"3":"4",f=Ve(Ne[d][ne.Pf],b,[]);f&&f.length&&c(f[0].index);xm(b.id,Ne[d],e);var g=Ve(Ne[d][ne.Sf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Lm=!1,Rm=function(a){var b=cb(),c=a["gtm.uniqueEventId"],d=a.event;if("gtm.js"===d){if(Lm)return!1;Lm=!0;}var g=ml(c),h=!1;if(!g.active){if("gtm.js"!==d)return!1;h=!0;g=ml(Number.MAX_SAFE_INTEGER)}
wm&&!jm[c]&&fm!==c&&(bm(),fm=c,mm=hm="",qm[c]="&e="+(0===d.indexOf("gtm.")?encodeURIComponent(d):"*")+"&eid="+c,em());var l=a.eventCallback,m=a.eventTimeout,p=l;var q={id:c,name:d,ze:kl(g.isAllowed),Qi:[],mg:function(){zg(6)},Zf:Mm(c),Xa:new xl(p,
m)};q.Yf=Nm();Om(c,q.Xa);var r=ef(q);h&&(r=Pm(r));var t=Km(r,q);"gtm.js"!==d&&"gtm.sync"!==d||Nl(mf.M);
switch(d){case "gtm.init":t&&zg(20)}return Qm(r,t)};function Mm(a){return function(b){wm&&(Kc(b)||Bm(a,"input",b))}}function Om(a,b){Fi(a,"event",1);Fi(a,"ecommerce",1);Fi(a,"gtm");Fi(a,"eventModel");}
function Nm(){var a={};a.event=Ei("event",1);a.ecommerce=Ei("ecommerce",1);a.gtm=Ei("gtm");a.eventModel=Ei("eventModel");return a}function Pm(a){for(var b=[],c=0;c<a.length;c++)a[c]&&ii[String(Ne[c][ne.ib])]&&(b[c]=!0);return b}function Qm(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Ne[c]&&!ji[String(Ne[c][ne.ib])])return!0;return!1}function Sm(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Bh(""+c+b).href}}function Tm(a,b){return Um()?Sm(a,b):void 0}function Um(){var a=!1;return a};var Vm=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},Wm=function(a){var b=new Vm;b.eventModel=a;return b},Xm=function(a,b){a.targetConfig=b;return a},Ym=function(a,b){a.containerConfig=b;return a},Zm=function(a,b){a.remoteConfig=b;return a},$m=function(a,
b){a.globalConfig=b;return a},an=function(a,b){a.onSuccess=b;return a},bn=function(a,b){a.setContainerTypeLoaded=b;return a},cn=function(a,b){a.getContainerTypeLoaded=b;return a},dn=function(a,b){a.onFailure=b;return a};
Vm.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var en=function(a){function b(e){Ta(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ta(c,function(e){d.push(e)});return d},fn=function(a,b){function c(f){Gc(f)&&Ta(f,function(g,h){e=!0;d[g]=h})}var d={},e=!1;c(a.globalConfig[b]);c(a.remoteConfig[b]);c(a.containerConfig[b]);c(a.targetConfig[b]);c(a.eventModel[b]);return e?d:void 0};var gn;if(3===mf.Yc.length)gn="g";else{var hn="G";gn=hn}
var jn={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:gn,OPT:"o"},kn=function(a){var b=mf.M.split("-"),c=b[0].toUpperCase(),d=jn[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===mf.Yc.length){var g="w";f="2"+g}else f="";return f+d+mf.Yc+e};var ln=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var mn=function(){return Lb("iPhone")&&!Lb("iPod")&&!Lb("iPad")};Lb("Opera");Lb("Trident")||Lb("MSIE");Lb("Edge");!Lb("Gecko")||-1!=Ib.toLowerCase().indexOf("webkit")&&!Lb("Edge")||Lb("Trident")||Lb("MSIE")||Lb("Edge");-1!=Ib.toLowerCase().indexOf("webkit")&&!Lb("Edge")&&Lb("Mobile");Lb("Macintosh");Lb("Windows");Lb("Linux")||Lb("CrOS");var nn=qa.navigator||null;nn&&(nn.appVersion||"").indexOf("X11");Lb("Android");mn();Lb("iPad");Lb("iPod");mn()||Lb("iPad")||Lb("iPod");Ib.toLowerCase().indexOf("kaios");var on=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null},pn=function(a){var b=H;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var qn=function(){};var rn=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},sn=function(a,b){this.s=a;this.g=null;this.F={};this.P=0;this.L=void 0===b?500:b;this.B=null};pa(sn,qn);
var un=function(a){return"function"===typeof a.s.__tcfapi||null!=tn(a)};
sn.prototype.addEventListener=function(a){var b={},c=Xb(function(){return a(b)}),d=0;-1!==this.L&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.L));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=rn(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{vn(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};sn.prototype.removeEventListener=function(a){a&&a.listenerId&&vn(this,"removeEventListener",null,a.listenerId)};
var xn=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=wn(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||Fg(Bg)&&"CH"===a.publisherCC)?!0:m&&wn(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?wn(a.purpose.legitimateInterests,b)&&wn(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},wn=function(a,b){return!(!a||!a[b])},vn=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(tn(a)){yn(a);var f=++a.P;a.F[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},tn=function(a){if(a.g)return a.g;a.g=on(a.s,"__tcfapiLocator");return a.g},
yn=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},ln(a.s,a.B))};var zn=!0;zn=!1;var An={1:0,3:0,4:0,7:3,9:3,10:3};function Bn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Cn=Bn("",550),Dn=Bn("",500);function En(){var a=gi.tcf||{};return gi.tcf=a}
var Fn=function(a,b){this.B=a;this.g=b;this.s=cb();},Gn=function(a){},Hn=function(a){},Nn=function(){var a=En(),b=new sn(A,zn?3E3:-1),c=new Fn(b,a);if((In()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||un(b))){a.active=!0;a.vc={};Jn();var d=null;zn?d=A.setTimeout(function(){Kn(a);Ln(a);d=null},Dn):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Kn(a),Ln(a),Gn(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=Mn(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in An)if(An.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=rn(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:xn(m,"1",0):!1;g["1"]=l}else g[h]=xn(e,h,An[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.vc=f,Ln(a),Gn(c))}}),Hn(c)}catch(e){d&&(clearTimeout(d),d=null),Kn(a),Ln(a)}}};function Kn(a){a.type="e";a.tcString="tcunavailable";zn&&(a.vc=Mn())}function Jn(){var a={},b=(a.ad_storage="denied",a.wait_for_update=Cn,a);bh(b)}
var In=function(){var a=!1;a=!0;return a};function Mn(){var a={},b;for(b in An)An.hasOwnProperty(b)&&(a[b]=!0);return a}function Ln(a){var b={},c=(b.ad_storage=a.vc["1"]?"granted":"denied",b);On();ch(c,0)}
var Pn=function(){var a=En();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},On=function(){var a=En();return a.active?a.tcString||"":""},Qn=function(){var a=En();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},Rn=function(a){if(!An.hasOwnProperty(String(a)))return!0;var b=En();return b.active&&b.vc?!!b.vc[String(a)]:!0};var Sn=!1;Sn=!0;function Tn(a){var b=String(A.location).split(/[?#]/)[0],c=mf.Kg||A._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function Un(a){function b(u){var v;gi.reported_gclid||(gi.reported_gclid={});v=gi.reported_gclid;var w;w=Sn&&g&&(!Ug()||O(N.D))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[w]){v[w]=!0;var z=[],x={},y=function(Q,S){S&&(z.push(Q+"="+encodeURIComponent(S)),x[Q]=!0)},B="https://www.google.com";if(Ug()){var C=O(N.D);y("gcs",dh());u&&y("gcu","1");Vg()&&y("gcd","G1"+$g(Og));gi.dedupe_gclid||
(gi.dedupe_gclid=""+bj());y("rnd",gi.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&O(N.D)){var E=fk("_gcl_aw");y("gclaw",E.join("."))}y("url",String(A.location).split(/[?#]/)[0]);y("dclid",Vn(d,p));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
y("gdpr_consent",On()),y("gdpr",Qn());"1"===Kj(!1)._up&&y("gtm_up","1");y("gclid",Vn(d,l));y("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(y("gbraid",Vn(d,q)),!x.gbraid&&Ug()&&O(N.D))){var I=fk("_gcl_gb");y("gclgb",I.join("."))}y("gtm",kn(!e));Sn&&g&&O(N.D)&&(mj(f||{}),y("auid",ij[jj(f.prefix)]||""));
a.dg&&y("did",a.dg);var R=B+"/pagead/landing?"+z.join("&");qc(R)}}var c=!!a.je,d=!!a.ra,e=a.U,f=void 0===a.dd?{}:a.dd,g=void 0===a.kd?!0:a.kd,h=lk(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),t=Ug();if(r||t)t?gh(function(){b();O(N.D)||fh(function(u){return b(!0,u.Mh)},N.D)},[N.D]):b()}function Vn(a,b){var c=a&&!O(N.D);return b&&c?"0":b}
var uo=function(){if(!O(N.D)||!to&&!pn("AwT1b8oq50zre+sKn5NsGOAlmHkKIV1dYwqfiDFRF61tCS1l0Wg/jqJejtPhHcv0uVFTSeLP0QQS4bf1KjGMpgwAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ21hbmFnZXIuY29tOjQ0MyIsImZlYXR1cmUiOiJDb252ZXJzaW9uTWVhc3VyZW1lbnQiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"))return!1;to=!0;var a=H.featurePolicy;if(a&&Ka(a.features)&&-1!==a.features().indexOf("conversion-measurement"))return!0;return!1},vo=function(a){return!(void 0===a||null===a||0===(a+"").length)},wo=function(a,b){var c;if(2===b.oa)return a("ord",Qa(1E11,1E13)),!0;if(3===b.oa)return a("ord","1"),a("num",Qa(1E11,
1E13)),!0;if(4===b.oa)return vo(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.oa)c="1";else if(6===b.oa)c=b.Me;else return!1;vo(c)&&a("qty",c);vo(b.ed)&&a("cost",b.ed);vo(b.transactionId)&&a("ord",b.transactionId);return!0},zo=function(a,b,c,d){function e(Q,S,T){t.hasOwnProperty(Q)||(S=String(S),r.push(";"+Q+"="+(T?S:xo(S))))}function f(Q,S){S&&e(Q,S)}var g=a.qe,h=a.Pe,l=a.protocol,m=a.we;l+=h?"//"+g+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var p=";",q=!1;
q=!0;O(N.D)||m||!a.ra&&!q||(l="https://ade.googlesyndication.com/ddm/activity",p="/",h=!1);var r=[p,"src="+xo(g),";type="+xo(a.ve),";cat="+xo(a.Zb)],t=a.Sh||{};Ta(t,function(Q,S){r.push(";"+xo(Q)+"="+xo(S+""))});if(wo(e,a)){vo(a.ud)&&e("u",a.ud);vo(a.td)&&e("tran",a.td);e("gtm",kn());Ug()&&!m&&(e("gcs",dh()),c&&e("gcu","1"));f("gdpr_consent",On()),f("gdpr",Qn());
"1"===Kj(!1)._up&&e("gtm_up","1");!1===a.Gh&&e("npa","1");if(a.me){var u=void 0===a.ra?!0:!!a.ra,v=Ck("dc",a.Da,u),w=!1;v&&v.length&&(e("gcldc",v.join(".")),w=!0);var z=!0;z=h;if(z)if(yo&&!w&&Hk(a.Da)){var x=Ck("gb",a.Da,u);x.length&&e("gclgb",x.join("."));var y=Fk(u);y&&e("gacgb",y)}else{var B=Ck("aw",a.Da,u);B&&B.length&&e("gclaw",B.join("."));var C=Ek(u);C&&e("gac",C)}mj({prefix:a.Da,
nb:a.Qh,domain:a.Ph,flags:a.fj});var E=ij[jj(a.Da)];E&&e("auiddc",E)}vo(a.He)&&e("prd",a.He,!0);vo(d)&&e("em",d,!0);Ta(a.Te,function(Q,S){e(Q,S)});r.push(b||"");var D=uo();D&&r.push(";ps=1");if(vo(a.ld)){var I=a.ld||"";O(N.D)||m||!a.ra||(I=Ch(I));e("~oref",I)}var R=l+r.join("")+"?";h?hc(R,a.onSuccess):ic(R,a.onSuccess,a.onFailure);D&&ic("https://"+g+".fls.doubleclick.net/activityi;register_conversion=1"+
r.join("")+"?");}else J(a.onFailure)},Ao=function(a,b,c){var d=!1;d&&a.ja?fi(a.ja,[],function(e){zo(a,b,c,e)}):zo(a,b,c)},yo=!1;yo=!0;var xo=encodeURIComponent,to=!1,Bo=function(a,b){!Ug()||a.we?
Ao(a,b):gh(function(){Ao(a,b);O(N.D)||fh(function(){Ao(a,b,!0)},N.D)},[N.D])};var Zo=function(){var a=!0;Rn(7)&&Rn(9)&&Rn(10)||(a=!1);var b=!0;b=!1;b&&!Yo()&&(a=!1);return a},Yo=function(){var a=!0;Rn(3)&&Rn(4)||(a=!1);return a};var wp=!1;function xp(){var a=gi;return a.gcq=a.gcq||new yp}
var zp=function(a,b,c){xp().register(a,b,c)},Ap=function(a,b,c,d){xp().push("event",[b,a],c,d)},Bp=function(a,b){xp().push("config",[a],b)},Cp=function(a,b,c,d){xp().push("get",[a,b],c,d)},Dp=function(a){return xp().getRemoteConfig(a)},Ep={},Fp=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.B=null;this.g=!1},Gp=function(a,b,c,d,e){this.type=a;this.B=b;this.U=c||"";this.g=d;this.s=e},yp=function(){this.s={};this.B={};this.g=[];this.F={AW:!1,
UA:!1};this.enableDeferrableCommandAfterConfig=wp},Hp=function(a,b){var c=Kk(b);return a.s[c.containerId]=a.s[c.containerId]||new Fp},Ip=function(a,b,c){if(b){var d=Kk(b);if(d&&1===Hp(a,b).status){Hp(a,b).status=2;var e={};wm&&(e.timeoutId=A.setTimeout(function(){zg(38);em()},3E3));a.push("require",[e],d.containerId);Ep[d.containerId]=cb();if(Nk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Tm(c,g)||h;fc(l)}}}},Jp=function(a,b,c,d){if(d.U){var e=Hp(a,d.U),f=e.B;if(f){var g=K(c),h=K(e.targetConfig[d.U]),l=K(e.containerConfig),m=K(e.remoteConfig),p=K(a.B),q=zi("gtm.uniqueEventId"),r=Kk(d.U).prefix,t=cn(bn(dn(an($m(Zm(Ym(Xm(Wm(g),
h),l),m),p),function(){Am(q,r,"2");}),function(){Am(q,r,"3");}),function(u,v){a.F[u]=v}),function(u){return a.F[u]});try{Am(q,r,"1");f(d.U,b,d.B,t)}catch(u){Am(q,r,"4");}}}};
yp.prototype.register=function(a,b,c){var d=Hp(this,a);if(3!==d.status){d.B=b;d.status=3;if(c){K(d.remoteConfig,c);d.remoteConfig=c}var e=Kk(a),f=Ep[e.containerId];if(void 0!==f){var g=gi[e.containerId].bootstrap,h=e.prefix.toUpperCase();gi[e.containerId]._spx&&(h=h.toLowerCase());var l=zi("gtm.uniqueEventId"),m=h,p=cb()-g;if(wm&&!jm[l]){l!==fm&&(bm(),fm=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(p);nm=nm?nm+","+q:"&cl="+q}delete Ep[e.containerId]}this.flush()}};yp.prototype.push=function(a,b,c,d){var e=Math.floor(cb()/1E3);Ip(this,c,b[0][N.ma]||this.B[N.ma]);wp&&c&&Hp(this,c).g&&(d=!1);this.g.push(new Gp(a,e,c,b,d));d||this.flush()};yp.prototype.insert=function(a,b,c){var d=Math.floor(cb()/1E3);0<this.g.length?this.g.splice(1,0,new Gp(a,d,c,b,!1)):this.g.push(new Gp(a,d,c,b,!1))};
yp.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.s)wp?!f.U||Hp(this,f.U).g?(f.s=!1,this.g.push(f)):c.push(f):(f.s=!1,this.g.push(f)),this.g.shift();else{switch(f.type){case "require":if(3!==Hp(this,f.U).status&&!a){wp&&this.g.push.apply(this.g,c);return}wm&&A.clearTimeout(f.g[0].timeoutId);break;case "set":Ta(f.g[0],function(r,t){K(pb(r,t),b.B)});break;case "config":e.Fa={};Ta(f.g[0],function(r){return function(t,u){K(pb(t,u),r.Fa)}}(e));var g=!!e.Fa[N.Qc];
delete e.Fa[N.Qc];var h=Hp(this,f.U),l=Kk(f.U),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.U]={});h.g&&g||Jp(this,N.wa,e.Fa,f);h.g=!0;delete e.Fa[N.Wb];m?K(e.Fa,h.containerConfig):K(e.Fa,h.targetConfig[f.U]);wp&&(d=!0);break;case "event":e.Ac={};Ta(f.g[0],function(r){return function(t,u){K(pb(t,u),r.Ac)}}(e));Jp(this,f.g[1],e.Ac,f);break;case "get":var p={},q=(p[N.Ua]=f.g[0],p[N.Ta]=f.g[1],p);Jp(this,N.Ia,q,f)}this.g.shift();Kp(this,f)}e={Fa:e.Fa,Ac:e.Ac}}wp&&(this.g.push.apply(this.g,
c),d&&this.flush())};var Kp=function(a,b){if("require"!==b.type)if(b.U)for(var c=a.getCommandListeners(b.U)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var g=f.s[b.type]||[],h=0;h<g.length;h++)g[h]()}};yp.prototype.getRemoteConfig=function(a){return Hp(this,a).remoteConfig};yp.prototype.getCommandListeners=function(a){return Hp(this,a).s};function Lp(a,b){var c=this;};function Mp(a,b,c){};function Np(a,b,c,d){};function Op(a){};function Pp(){};var Qp=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":rc(a,"className"),"gtm.elementId":a["for"]||mc(a,"id")||"","gtm.elementTarget":a.formTarget||rc(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||rc(a,"href")||a.src||a.code||a.codebase||"";return d},Rp=function(a){gi.hasOwnProperty("autoEventsSettings")||(gi.autoEventsSettings={});var b=gi.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},Sp=function(a,b,c){Rp(a)[b]=c},Tp=function(a,b,c,d){var e=Rp(a),f=hb(e,b,d);e[b]=c(f)},Up=function(a,b,c){var d=Rp(a);return hb(d,b,c)};var Vp={},Wp=[];
var cq=function(a,b){};

function fq(a,b){};var gq=/^\s*$/,hq,iq=!1;
function tq(a,b){}function uq(a,b,c){};var vq=!!A.MutationObserver,wq=void 0,xq=function(a){if(!wq){var b=function(){var c=H.body;if(c)if(vq)(new MutationObserver(function(){for(var e=0;e<wq.length;e++)J(wq[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;kc(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<wq.length;e++)J(wq[e])}))})}};wq=[];H.body?b():J(b)}wq.push(a)};
var yq=function(a,b,c){function d(){var g=a();f+=e?(cb()-e)*g.playbackRate/1E3:0;e=cb()}var e=0,f=0;return{createEvent:function(g,h,l){var m=a(),p=m.pe,q=void 0!==l?Math.round(l):void 0!==h?Math.round(m.pe*h):Math.round(m.cg),r=void 0!==h?Math.round(100*h):0>=p?0:Math.round(q/p*100),t=H.hidden?!1:.5<=oh(c);d();var u=void 0;void 0!==b&&(u=[b]);var v=Qp(c,"gtm.video",u);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=m.url;v["gtm.videoTitle"]=m.title;v["gtm.videoDuration"]=
Math.round(p);v["gtm.videoCurrentTime"]=Math.round(q);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=r;v["gtm.videoVisible"]=t;return v},ug:function(){e=cb()},Db:function(){d()}}};var zq=["www.youtube.com","www.youtube-nocookie.com"],Aq,Bq=!1,Cq=0;
function Mq(a,b){}function Nq(a,b){return!0};function Oq(a,b,c){};function Pq(a,b){var c;return c};function Qq(a){};function Rq(a){};var Sq=!1,Tq=[];function Uq(){if(!Sq){Sq=!0;for(var a=0;a<Tq.length;a++)J(Tq[a])}}var Vq=function(a){Sq?J(a):Tq.push(a)};function Wq(a){M(G(this),["listener:!Fn"],arguments);hg(this,"process_dom_events","window","load");Vq(Ic(a))};function Xq(a){var b;return b};function Yq(a,b){var c;var d=!1;var e=Hc(c,this.g,d);void 0===e&&void 0!==c&&zg(45);return e};function Zq(a){var b;return b};function $q(a,b){var c=null,d=!1;M(G(this),["functionPath:!string","arrayPath:!string"],arguments);hg(this,"access_globals","readwrite",a);hg(this,"access_globals","readwrite",b);var e=[A,H],f=a.split("."),g=ob(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ka(l))return null;
if(l)return Hc(l,this.g,d);var m;l=function(){if(!Ka(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),q=ob(p,e),r=p[p.length-1];if(void 0===q)throw Error("Path "+p+" does not exist.");m=q[r];void 0===m&&(m=[],q[r]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Hc(c,this.g,d)};function ar(a){var b;M(G(this),["path:!string"],arguments);hg(this,"access_globals","readwrite",a);var c=a.split("."),d=ob(c,[A,H]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ka(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Hc(b,this.g,g)};var br;function cr(a){var b=!1;return b};var dr=function(a){var b;return b};function er(a,b){b=void 0===b?!0:b;var c;return c};function fr(a){var b=null;return b};function gr(a,b){var c;return c};function hr(a,b){var c;return c};function ir(a){var b="";return b};function jr(a,b){var c;return c};function kr(a){var b="";return b};function lr(){hg(this,"get_user_agent");return A.navigator.userAgent};function mr(a,b){};var nr={};function or(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],fc(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)J(g[h]);g.push=function(l){J(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)J(g[h]);e[f]=null},b)):fc(a,c,d,b)}
function pr(a,b,c,d){M(G(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);hg(this,"inject_script",a);var e=this.g;or(a,void 0,function(){b&&b.s(e)},function(){c&&c.s(e)},nr,d);}var qr=Object.freeze({dl:1,id:1}),rr={};
function sr(a,b,c,d){};function tr(a){var b=!0;return b};var ur=function(){return!1},vr={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var wr={fi:!1,gi:!1},xr=["textContent","value","tagName","children","childElementCount"];
function yr(){var a;
return a};function zr(){};function Ar(a,b){var c;return c};function Br(a){var b=void 0;return b};function Cr(a,b){var c=!1;return c};function Dr(){var a="";return a};function Er(){var a="";return a};var Fr=["set","get","config","event"];
function Gr(a,b,c){};function Hr(){};function Ir(a,b,c,d){d=void 0===d?!1:d;};function Jr(a,b,c){};function Kr(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Lr(a){M(G(this),["consentSettings:!DustMap"],arguments);for(var b=a.jb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==N.wd&&hg(this,"access_consent",e,"write")}bh(Ic(a))};function Mr(a,b,c){M(G(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);hg(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=ob(e,[A,H]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Ic(b,this.g,d),!0;return!1};function Nr(a,b,c){}
;var Or=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Pr(a,b,c,d){var e=this;};function Qr(a,b,c){}
;var Rr={},Sr={};Rr.getItem=function(a){var b=null;return b};
Rr.setItem=function(a,b){};
Rr.removeItem=function(a){};Rr.clear=function(){};var Tr=function(a){var b;return b};function Ur(a){M(G(this),["consentSettings:!DustMap"],arguments);var b=Ic(a),c;for(c in b)b.hasOwnProperty(c)&&hg(this,"access_consent",c,"write");ch(b)};var ke=function(){var a=new ug;Nk()?(a.add("injectHiddenIframe",Ja),a.add("injectScript",Ja)):(a.add("injectHiddenIframe",mr),a.add("injectScript",pr));var b=Jr;a.add("Math",ag());a.add("TestHelper",xg());a.add("addEventCallback",Op);a.add("aliasInWindow",Nq);a.add("assertApi",Xf);a.add("assertThat",Yf);a.add("callInWindow",
Pq);a.add("callLater",Qq);a.add("copyFromDataLayer",Yq);a.add("copyFromWindow",Zq);a.add("createArgumentsQueue",$q);a.add("createQueue",ar);a.add("decodeUri",bg);a.add("decodeUriComponent",cg);a.add("encodeUri",dg);a.add("encodeUriComponent",eg);a.add("fail",fg);a.add("fromBase64",dr,!("atob"in A));a.add("generateRandom",gg);a.add("getContainerVersion",ig);a.add("getCookieValues",er);a.add("getQueryParameters",gr);a.add("getReferrerQueryParameters",hr);a.add("getReferrerUrl",ir);a.add("getTimestamp",
jg);a.add("getTimestampMillis",jg);a.add("getType",kg);a.add("getUrl",kr);a.add("localStorage",vr,!ur());a.add("logToConsole",zr);a.add("makeInteger",mg);a.add("makeNumber",ng);a.add("makeString",og);a.add("makeTableMap",pg);a.add("mock",rg);a.add("parseUrl",Br);a.add("queryPermission",Cr);a.add("readCharacterSet",Dr);a.add("readTitle",Er);a.add("sendPixel",b);a.add("setCookie",Kr);a.add("setInWindow",Mr);a.add("sha256",Pr);a.add("templateStorage",Rr);a.add("toBase64",Tr,!("btoa"in A));a.add("JSON",
lg(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;
c=!0;c&&a.add("setDefaultConsentState",Lr);a.add("updateConsentState",Ur);
a.add("isConsentGranted",tr);a.add("addConsentListener",Lp);
wg(a,"callOnWindowLoad",Wq);
Nk()?wg(a,"internal.injectScript",Ja):wg(a,"internal.injectScript",sr);
return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.s.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.jc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.s.hasOwnProperty(d)?a.s[d]:void 0;
e=m}else throw Error(d+" is not a valid API name.");}return e}};var Vr=function(){return!1},Wr=function(){var a={};return function(b,c,d){}};var ie,qf;
function Xr(){var a=data.runtime||[],b=data.runtime_lines;ie=new ge;Yr();Je=function(e,f,g){Zr(f);var h=new xb;Ta(f,function(t,u){var v=Hc(u);void 0===v&&void 0!==u&&zg(44);h.set(t,v)});ie.g.g.L=bf();var l={Jh:rf(e),eventId:void 0!==g?g.id:void 0,ac:void 0!==g?function(t){return g.Xa.ac(t)}:void 0,jc:function(){return e},log:function(){}};if(Vr()){var m=Wr(),
p=void 0,q=void 0;l.va={bc:{},Fb:function(t,u,v){1===u&&(p=t);7===u&&(q=v);m(t,u,v)},Ce:qg()};l.log=function(t,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:t,source:q,message:v})}}}var r=je(l,[e,h]);ie.g.g.L=void 0;r instanceof ta&&"return"===r.g&&(r=r.s);return Ic(r)};le();for(var c=0;c<a.length;c++){var d=a[c];if(!Na(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Ze(d,b[c]);ie.Eb(d)}}
function Zr(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ka(b)&&(a.gtmOnSuccess=function(){J(b)});Ka(c)&&(a.gtmOnFailure=function(){J(c)})}function Yr(){var a=ie;gi.SANDBOXED_JS_SEMAPHORE=gi.SANDBOXED_JS_SEMAPHORE||0;me(a,function(b,c,d){gi.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{gi.SANDBOXED_JS_SEMAPHORE--}})}function $r(a){void 0!==a&&Ta(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");si[e]=si[e]||[];si[e].push(b)}})};var as="HA GF G UA AW DC".split(" "),bs=!1,cs={},ds=!1;function es(a,b){var c={event:a};b&&(c.eventModel=K(b),b[N.Ld]&&(c.eventCallback=b[N.Ld]),b[N.Jc]&&(c.eventTimeout=b[N.Jc]));return c}function fs(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:ti()});return a["gtm.uniqueEventId"]}
function gs(){return bs}
var js={config:function(a){var b,c;void 0===c&&(c=ti());return b},consent:function(a){function b(){gs()&&K(a[2],{subcommand:a[1]})}if(3===a.length){zg(39);var c=ti(),d=a[1];"default"===d?(b(),bh(a[2])):"update"===d&&(b(),ch(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&n(b)){var c;if(2<a.length){if(!Gc(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=es(b,c),e=void 0;void 0===e&&ti();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){ds=!0;gs();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=qf.s;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Gc(a[1])?b=K(a[1]):3==a.length&&n(a[1])&&(b={},Gc(a[2])||Na(a[2])?b[a[1]]=K(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},ks={policy:!0};var ls=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},ns=function(a){var b=ms(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Es=function(a){if(Ds(a))return a;this.g=a};Es.prototype.ci=function(){return this.g};var Ds=function(a){return!a||"object"!==Ec(a)||Gc(a)?!1:"getUntrustedUpdateValue"in a};Es.prototype.getUntrustedUpdateValue=Es.prototype.ci;var Fs=[],Gs=!1,Hs=!1,Is=!1,Js=function(a){return A["dataLayer"].push(a)},Ks=function(a){var b=gi["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Ls(a){var b=a._clear;Ta(a,function(d,e){"_clear"!==d&&(b&&Ci(d,void 0),Ci(d,e))});oi||(oi=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=ti(),a["gtm.uniqueEventId"]=c,Ci("gtm.uniqueEventId",c));return Rm(a)}function Ms(){var a=Fs[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ua(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Ns(){for(var a=!1;!Is&&0<Fs.length;){var b=!1;b=!0;if(b&&!Hs&&Ms()){var c={};Fs.unshift((c.event=
"gtm.init",c));Hs=!0}var d=!1;d=!0;if(d&&!Gs&&Ms()){var e={};Fs.unshift((e.event="gtm.init_consent",e));Gs=!0}Is=!0;delete wi.eventModel;yi();var f=Fs.shift();if(null!=f){var g=Ds(f);
if(g){var h=f;f=Ds(h)?h.getUntrustedUpdateValue():void 0;Di()}try{if(Ka(f))try{f.call(Ai)}catch(v){}else if(Na(f)){var l=f;if(n(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=zi(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if(Ua(f)){a:{var t=f;if(t.length&&n(t[0])){var u=js[t[0]];if(u&&(!g||!ks[t[0]])){f=u(t);break a}}f=void 0}if(!f){Is=!1;continue}}a=Ls(f)||a}}finally{g&&yi(!0)}}Is=!1}
return!a}function Os(){var b=Ns();try{ls(A["dataLayer"],mf.M)}catch(c){}return b}
var Qs=function(){var a=bc("dataLayer",[]),b=bc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};vl(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Vq(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<gi.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Es(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Fs.push.apply(Fs,e);if(300<
this.length)for(zg(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Ns()&&h};var d=a.slice(0);Fs.push.apply(Fs,d);if(Ps()){J(Os)}},Ps=function(){var a=!0;return a};var Rs={};Rs.Uc=new String("undefined");
var Ss=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Rs.Uc?b:a[d]);return c.join("")}};Ss.prototype.toString=function(){return this.g("undefined")};Ss.prototype.valueOf=Ss.prototype.toString;Rs.Bh=Ss;Rs.ce={};Rs.Rh=function(a){return new Ss(a)};var Ts={};Rs.Gi=function(a,b){var c=ti();Ts[c]=[a,b];return c};Rs.bg=function(a){var b=a?0:1;return function(c){var d=Ts[c];if(d&&"function"===typeof d[b])d[b]();Ts[c]=void 0}};Rs.ii=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Rs.Ci=function(a){if(a===Rs.Uc)return a;var b=ti();Rs.ce[b]=a;return'google_tag_manager["'+mf.M+'"].macro('+b+")"};Rs.wi=function(a,b,c){a instanceof Rs.Bh&&(a=a.g(Rs.Gi(b,c)),b=Ja);return{di:a,onSuccess:b}};var Us=["input","select","textarea"],Vs=["button","hidden","image","reset","submit"],Ws=function(a){var b=a.tagName.toLowerCase();return!Pa(Us,function(c){return c===b})||"input"===b&&Pa(Vs,function(c){return c===a.type.toLowerCase()})?!1:!0},Xs=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):pc(a,["form"],100)},Ys=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Ws(g)){if(g.dataset[c]===d)return f;f++}}return 0};var it=A.clearTimeout,jt=A.setTimeout,U=function(a,b,c){if(Nk()){b&&J(b)}else return fc(a,b,c)},kt=function(){return new Date},lt=function(){return A.location.href},mt=function(a){return zh(Bh(a),"fragment")},nt=function(a){return Ah(Bh(a))},ot=function(a,b){return zi(a,b||2)},pt=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Js(a)):d=Js(a);return d},qt=function(a,b){A[a]=b},V=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},rt=function(a,b,c){return Qi(a,b,void 0===c?!0:!!c)},st=function(a,b,c){return 0===Zi(a,b,c)},tt=function(a,b){if(Nk()){b&&J(b)}else hc(a,b)},ut=function(a){return!!Up(a,"init",!1)},vt=function(a){Sp(a,"init",!0)},wt=function(a){var b=mi+"?id="+encodeURIComponent(a)+"&l=dataLayer";U(Pk("https://","http://",b))},xt=function(a,b,c){wm&&(Kc(a)||Bm(c,b,a))};var yt=Rs.wi;function Vt(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Wt=new Ra;function Xt(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Wt.get(e);f||(f=new RegExp(b,d),Wt.set(e,f));return f.test(a)}catch(g){return!1}}
function Yt(a,b){function c(g){var h=Bh(g),l=zh(h,"protocol"),m=zh(h,"host",!0),p=zh(h,"port"),q=zh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Zt(a){return $t(a)?1:0}
function $t(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Na(c)){for(var d=0;d<c.length;d++){var e=K(a,{});K({arg1:c[d],any_of:void 0},e);if(Zt(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return Vt(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Oa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return Xt(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Yt(b,c)}return!1};var au=encodeURI,X=encodeURIComponent,bu=ic;var cu=function(a,b){if(!a)return!1;var c=zh(Bh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var du=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Lv(){return A.gaGlobal=A.gaGlobal||{}}var Mv=function(){var a=Lv();a.hid=a.hid||Qa();return a.hid},Nv=function(a,b){var c=Lv();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var kw=function(){if(Ka(A.__uspapi)){var a="";try{A.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Fw=window,Gw=document,Hw=function(a){var b=Fw._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Fw["ga-disable-"+a])return!0;try{var c=Fw.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Mi("AMP_TOKEN",String(Gw.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Gw.getElementById("__gaOptOutExtension")?!0:!1};var Iw={};
function Lw(a){delete a.eventModel[N.Wb];Nw(a.eventModel)}var Nw=function(a){Ta(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[N.La]||{};Ta(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Qw=function(a,b,c){Ap(b,c,a)},Rw=function(a,b,c){Ap(b,c,a,!0)},Tw=function(a,b){};
function Sw(a,b){}var Y={h:{}};
Y.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Y.__gaawc=b;Y.__gaawc.m="gaawc";Y.__gaawc.o=!0;Y.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=du(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(N.La)||b.vtp_userProperties){var e=d[N.La]||{};K(du(b.vtp_userProperties,"name","value"),e);d[N.La]=e}b.vtp_enableSendToServerContainer&&b.vtp_serverContainerUrl&&(d[N.ma]=b.vtp_serverContainerUrl,
d[N.Rb]=!0);a(d,N.Ef,function(f){return Xa(f)});a(d,N.Gf,function(f){return Number(f)});d.send_page_view=b.vtp_sendPageView;Bp(d,c);J(b.vtp_gtmOnSuccess)})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.m="jsm";Y.__jsm.o=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);xt(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.flc=[],function(){function a(c,d){d=d?d.slice(0,-1):void 0;Bo(c,d)}var b=!1;(function(c){Y.__flc=c;Y.__flc.m="flc";Y.__flc.o=!0;Y.__flc.priorityOverride=0})(function(c){var d=!c.hasOwnProperty("vtp_enableConversionLinker")||!!c.vtp_enableConversionLinker,e=du(c.vtp_customVariable||[],"key",
"value")||{};var p={Zb:c.vtp_activityTag,me:d,Da:c.vtp_conversionCookiePrefix||void 0,ed:void 0,oa:{UNIQUE:3,SESSION:4}[c.vtp_ordinalType]||2,qe:c.vtp_advertiserId,ve:c.vtp_groupTag,onFailure:c.vtp_gtmOnFailure,onSuccess:c.vtp_gtmOnSuccess,ld:c.vtp_useImageTag?void 0:c.vtp_url,protocol:"",Me:void 0,
Pe:!c.vtp_useImageTag,sessionId:c.vtp_sessionId,td:c.vtp_transactionVariable,transactionId:void 0,ud:c.vtp_userVariable,ja:c.vtp_userDataVariable,Te:e},q=!1;var r=!(O(N.D)||q)&&void 0!=ot(N.R)&&!1!==ot(N.R);p.ra=r;if(c.vtp_enableAttribution){var t=c.vtp_attributionFields||[];if(t.length){U("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(p,V("google_attr").build([du(t,"key","value")||{}]))},c.vtp_gtmOnFailure);return}}a(p)})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.m="e";Y.__e.o=!0;Y.__e.priorityOverride=0})(function(a){var b=String(Gi(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.m="f";Y.__f.o=!0;Y.__f.priorityOverride=0})(function(a){var b=ot("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?zh(Bh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):nt(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Qp(c,"gtm.click");pt(d)}}(function(b){Y.__cl=b;Y.__cl.m="cl";Y.__cl.o=!0;Y.__cl.priorityOverride=0})(function(b){if(!ut("cl")){var c=V("document");kc(c,"click",a,!0);vt("cl")}J(b.vtp_gtmOnSuccess)})}();
Y.h.j=["google"],function(){(function(a){Y.__j=a;Y.__j.m="j";Y.__j.o=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];xt(c,"j",a.vtp_gtmEventId);return c})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.m="k";Y.__k.o=!0;Y.__k.priorityOverride=0})(function(a){return rt(a.vtp_name,ot("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.fls=[],function(){function a(c,d){d=d?d.slice(0,-1):void 0;Bo(c,d)}var b=!1;(function(c){Y.__fls=c;Y.__fls.m="fls";Y.__fls.o=!0;Y.__fls.priorityOverride=0})(function(c){var d,e=[];if(c.vtp_enableProductReporting){var f=
function(B){B=B||[];for(var C=[],E=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],D=0;D<B.length;D++)for(var I=0;I<E.length;I++){var R=E[I],Q=B[D][R[1]];void 0!==Q&&C.push(R[0]+(D+1)+":"+X(Q))}return C.join("|")};switch(c.vtp_dataSource){case "DATA_LAYER":e=ot("ecommerce.purchase.products");d=f(e);break;case "JSON":e=c.vtp_productData;d=f(e);break;case "STRING":for(var g=(c.vtp_productData||"").split("|"),h=0;h<g.length;h++){var l=g[h].split(":");l[1]=
l[1]&&X(l[1])||"";g[h]=l.join(":");}d=g.join("|")}}var m=!c.hasOwnProperty("vtp_enableConversionLinker")||!!c.vtp_enableConversionLinker,
p=du(c.vtp_customVariable||[],"key","value")||{};var w={Zb:c.vtp_activityTag,me:m,Da:c.vtp_conversionCookiePrefix||void 0,ed:c.vtp_revenue,oa:"ITEM_SOLD"===c.vtp_countingMethod?6:5,qe:c.vtp_advertiserId,ve:c.vtp_groupTag,onFailure:c.vtp_gtmOnFailure,onSuccess:c.vtp_gtmOnSuccess,
ld:c.vtp_useImageTag?void 0:c.vtp_url,He:d,protocol:"",Me:c.vtp_quantity,Pe:!c.vtp_useImageTag,td:c.vtp_transactionVariable,transactionId:c.vtp_orderId,ud:c.vtp_userVariable,ja:c.vtp_userDataVariable,Te:p},z=!1;var x=!(O(N.D)||z)&&void 0!=ot(N.R)&&!1!==ot(N.R);w.ra=x;if(c.vtp_enableAttribution){var y=c.vtp_attributionFields||[];if(y.length){U("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(w,V("google_attr").build([du(y,"key","value")||{}]))},c.vtp_gtmOnFailure);return}}a(w)})}();
Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.m="access_globals";Y.__access_globals.o=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!n(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Oa(e,r))return}else if("write"===q){if(-1<Oa(f,r))return}else if("readwrite"===q){if(-1<Oa(f,r)&&-1<Oa(e,r))return}else if("execute"===q){if(-1<Oa(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},T:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.m="r";Y.__r.o=!0;Y.__r.priorityOverride=0})(function(a){return Qa(a.vtp_min,a.vtp_max)})}();
Y.h.t=["google"],function(){(function(a){Y.__t=a;Y.__t.m="t";Y.__t.o=!0;Y.__t.priorityOverride=0})(function(){return kt().getTime()})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.m="u";Y.__u.o=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:ot("gtm.url",1))||lt();var d=b[a("vtp_component")];if(!d||"URL"==d)return nt(String(c));var e=Bh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Na(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=zh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=zh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.m="v";Y.__v.o=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=ot(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;xt(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.tl=["google"],function(){function a(b){return function(){if(b.Be&&b.De>=b.Be)b.ye&&V("self").clearInterval(b.ye);else{b.De++;var c=kt().getTime();pt({event:b.I,"gtm.timerId":b.ye,"gtm.timerEventNumber":b.De,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Be,"gtm.timerStartTime":b.yg,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.yg,"gtm.triggers":b.Ui})}}}(function(b){Y.__tl=b;Y.__tl.m="tl";Y.__tl.o=!0;Y.__tl.priorityOverride=0})(function(b){J(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{I:b.vtp_eventName,De:0,interval:Number(b.vtp_interval),Be:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ui:String(b.vtp_uniqueTriggerId||"0"),yg:kt().getTime()};c.ye=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.h.ua=["google"],function(){function a(q){return O(q)}function b(q,r,t){var u=!1;if(Ug()&&!u&&!e[q]){var v=!O(N.H),w=function(){var z=Hl(),x="gtm"+ti(),y=m(r);y["&gtm"]=kn(!0);var B={name:x};l(y,B,!0);var C=void 0,E=B._useUp;z(function(){var D=z.getByName(t);D&&(C=D.get("clientId"))});
z("create",q,B);v&&O(N.H)&&(v=!1,z(function(){var D=z.getByName(x);!D||D.get("clientId")===C&&E||(y["&gcs"]=dh(),y["&gcu"]="1",D.set(y),D.send("pageview"))}));z(function(){z.remove(x)})};Zg(w,N.H);Zg(w,N.D);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,r,t){var u=0;if(q)for(var v in q)if(!h[v]&&
q.hasOwnProperty(v)&&(t&&f[v]||!t&&void 0===f[v])){var w=g[v]?Xa(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);r[v]=w;u++}return u},m=function(q){var r={};q.vtp_gaSettings&&K(du(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);K(du(q.vtp_fieldsToSet,"fieldName","value"),r);O(N.H)||(r.storage="none");O(N.D)||(r.allowAdFeatures=!1,r.storeGac=!1);Zo()||(r.allowAdFeatures=!1);Yo()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(Xa(r.urlPassthrough)){r._useUp=!0;var t=!1;Ug()&&!t&&(r._cs=a)}return r},p=function(q){function r(Aa,ea){void 0!==ea&&D("set",Aa,ea)}var t={},u={},v={},w={};if(q.vtp_gaSettings){var z=
q.vtp_gaSettings;K(du(z.vtp_contentGroup,"index","group"),u);K(du(z.vtp_dimension,"index","dimension"),v);K(du(z.vtp_metric,"index","metric"),w);var x=K(z);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;q=K(q,x)}K(du(q.vtp_contentGroup,"index","group"),u);K(du(q.vtp_dimension,"index","dimension"),v);K(du(q.vtp_metric,"index","metric"),w);var y=m(q),B=Jl(q.vtp_functionName);if(Ka(B)){var C="",E="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?
""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+ti(),C=E+".");var D=function(Aa){var ea=[].slice.call(arguments,0);ea[0]=C+ea[0];B.apply(window,ea)},I=function(Aa,ea){return void 0===ea?ea:Aa(ea)},R=function(Aa,ea){if(ea)for(var jb in ea)ea.hasOwnProperty(jb)&&D("set",Aa+jb,ea[jb])},Q=function(){var Aa={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},
ea={},jb=(ea[N.yd]="click",ea[N.Ha]="detail",ea[N.tb]="add",ea[N.ub]="remove",ea[N.Za]="checkout",ea[N.ka]="purchase",ea[N.vb]="refund",ea),qd={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Rb={item_category:0,item_category2:1,item_category3:2,item_category4:3,item_category5:4},Sb=function(Za,$a){for(var Ma in Za)Aa.hasOwnProperty(Ma)&&(Za[$a]=
Za[$a]||{},Za[$a].actionField=Za[$a].actionField||{},Za[$a].actionField[Aa[Ma]]=Za[Ma])},Tb=function(Za,$a){for(var Ma="",gb=0;gb<$a.length;gb++)void 0!==$a[gb]&&(""!==Ma&&(Ma+="/"),Ma+=$a[gb]);Za.category=Ma},eb=function(Za){for(var $a=[],Ma={},gb=0;gb<Za.length;Ma={qb:Ma.qb,Lb:Ma.Lb},gb++){Ma.qb={};var Nc=Za[gb];Ma.Lb=[];Ta(Nc,function(ud){return function(jc,Oc){qd.hasOwnProperty(jc)?ud.qb[qd[jc]]=Oc:Rb.hasOwnProperty(jc)?ud.Lb[Rb[jc]]=Oc:ud.qb[jc]=Oc}}(Ma));0<Ma.Lb.length&&Tb(Ma.qb,Ma.Lb);$a.push(Ma.qb)}return $a},
fb=function(Za,$a,Ma){if(!Gc($a))return!1;for(var gb=hb(Object($a),Ma,[]),Nc=0;gb&&Nc<gb.length;Nc++)D(Za,gb[Nc]);return!!gb&&0<gb.length},aa;if(q.vtp_useEcommerceDataLayer){var rd=!1;if(q.vtp_useGA4SchemaForEcommerce){q.vtp_gtmCachedValues&&(aa=q.vtp_gtmCachedValues.eventModel);aa=aa||Gi(q.vtp_gtmEventId,"eventModel");rd=!!aa}rd||(aa=ot("ecommerce",1))}else q.vtp_ecommerceMacroData&&(aa=q.vtp_ecommerceMacroData.ecommerce,!aa&&q.vtp_useGA4SchemaForEcommerce&&(aa=q.vtp_ecommerceMacroData));if(!Gc(aa))return;aa=Object(aa);if(q.vtp_useGA4SchemaForEcommerce){aa=K(aa);aa.currencyCode=aa.currencyCode||aa.currency;
var vb;q.vtp_gtmCachedValues&&(vb=q.vtp_gtmCachedValues.event);vb=vb||String(Gi(q.vtp_gtmEventId,"event"));if("view_item_list"===vb&&!aa.impressions&&aa.items)aa.impressions=eb(aa.items);else if("view_promotion"===vb&&!aa.promoView&&aa.items)aa.promoView={},aa.promoView.promotions=eb(aa.items);else if("select_promotion"===vb&&!aa.promoClick)aa.items&&(aa.promoClick={},aa.promoClick.promotions=
eb(aa.items)),Sb(aa,"promoClick");else if(jb.hasOwnProperty(vb)){var sd=jb[vb];aa[sd]||(aa.items&&(aa[sd]={},aa[sd].products=eb(aa.items)),Sb(aa,sd))}}var ee=hb(y,"currencyCode",aa.currencyCode);void 0!==ee&&D("set","&cu",ee);fb("ec:addImpression",aa,"impressions");if(fb("ec:addPromo",aa[aa.promoClick?"promoClick":"promoView"],"promotions")&&aa.promoClick){D("ec:setAction","promo_click",aa.promoClick.actionField);return}for(var lf="detail checkout checkout_option click add remove purchase refund".split(" "),
fe="refund purchase remove checkout checkout_option add click detail".split(" "),td=0;td<lf.length;td++){var Mc=aa[lf[td]];if(Mc){fb("ec:addProduct",Mc,"products");D("ec:setAction",lf[td],Mc.actionField);if(wm)for(var Va=0;Va<fe.length;Va++){var Ac=aa[fe[Va]];if(Ac){Ac!==Mc&&zg(13);break}}break}}},S={name:E};l(y,S,!0);var T=q.vtp_trackingId||t.trackingId;B("create",T,S);D("set","&gtm",kn(!0));var Z=!1;Ug()&&!Z&&(D("set","&gcs",dh()),b(T,q,E));y._x_19&&y._x_20&&!d[E]&&(d[E]=!0,B(Ol(E,String(y._x_20))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(Aa,ea){void 0!==q[ea]&&D("set",Aa,q[ea])})("nonInteraction","vtp_nonInteraction");R("contentGroup",
u);R("dimension",v);R("metric",w);var L={};l(y,L,!1)&&D("set",L);var W;q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var Aa=y&&y.hitCallback;Ka(Aa)&&Aa();q.vtp_gtmOnSuccess()});var ca=function(Aa,ea){return void 0===q[Aa]?t[ea]:q[Aa]};if("TRACK_EVENT"==q.vtp_trackType){
q.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var P={hitType:"event",eventCategory:String(ca("vtp_eventCategory","category")),eventAction:String(ca("vtp_eventAction","action")),eventLabel:I(String,ca("vtp_eventLabel","label")),eventValue:I(Wa,ca("vtp_eventValue","value"))};l(W,P,!1);D("send",P);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var ce="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");D("require","displayfeatures",void 0,{cookieName:ce})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var kf="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:kf})}W?D("send","pageview",W):D("send","pageview");
Xa(y.urlPassthrough)&&Ll(C)}if(!c){var zc=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(zc="internal/"+zc);c=!0;var de=Tm(y._x_19,"/analytics.js"),Pg=Pk("https:","http:","//www.google-analytics.com/"+zc,y&&!!y.forceSSL);U("analytics.js"===zc&&de?de:Pg,function(){var Aa=Hl();Aa&&Aa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else J(q.vtp_gtmOnFailure)};
(function(q){Y.__ua=q;Y.__ua.m="ua";Y.__ua.o=!0;Y.__ua.priorityOverride=0})(function(q){gh(function(){p(q)},[N.H,N.D])})}();

Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.m="inject_script";Y.__inject_script.o=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!n(f))throw d(e,{},"Script URL must be a string.");try{if(Qf(Bh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},T:a}})}();


Y.h.ytl=["google"],function(){function a(){var u=Math.round(1E9*Math.random())+"";return H.getElementById(u)?a():u}function b(u,v){if(!u)return!1;for(var w=0;w<p.length;w++)if(0<=u.indexOf("//"+p[w]+"/"+v))return!0;return!1}function c(u,v){var w=u.getAttribute("src");if(b(w,"embed/")){if(0<w.indexOf("enablejsapi=1"))return!0;if(v){var z=u.setAttribute,x;var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))x=w+y+"enablejsapi=1";else{if(!r){var B=V("document");r=B.location.protocol+"//"+B.location.hostname;
B.location.port&&(r+=":"+B.location.port)}x=w+y+"enablejsapi=1&origin="+encodeURIComponent(r)}z.call(u,"src",x);return!0}}return!1}function d(u,v){if(!u.getAttribute("data-gtm-yt-inspected-"+v.Se)&&(u.setAttribute("data-gtm-yt-inspected-"+v.Se,"true"),c(u,v.ic))){u.id||(u.id=a());var w=V("YT"),z=w.get(u.id);z||(z=new w.Player(u.id));var x=f(z,v),y={},B;for(B in x)y.Nb=B,x.hasOwnProperty(y.Nb)&&z.addEventListener(y.Nb,function(C){return function(E){return x[C.Nb](E.data)}}(y)),y={Nb:y.Nb}}}function e(u){J(function(){function v(){for(var z=
w.getElementsByTagName("iframe"),x=z.length,y=0;y<x;y++)d(z[y],u)}var w=V("document");v();xq(v)})}function f(u,v){var w,z;function x(){S=yq(function(){return{url:L,title:W,pe:Z,cg:u.getCurrentTime(),playbackRate:ca}},v.Se,u.getIframe());Z=0;W=L="";ca=1;return y}function y(ma){switch(ma){case q.PLAYING:Z=Math.round(u.getDuration());L=u.getVideoUrl();if(u.getVideoData){var za=u.getVideoData();W=za?za.title:""}ca=u.getPlaybackRate();v.ie?pt(S.createEvent("start")):S.Db();T=l(v.Je,v.Ie,u.getDuration());
return B(ma);default:return y}}function B(){P=u.getCurrentTime();la=kt().getTime();S.ug();Q();return C}function C(ma){var za;switch(ma){case q.ENDED:return D(ma);case q.PAUSED:za="pause";case q.BUFFERING:var Ia=u.getCurrentTime()-P;za=1<Math.abs((kt().getTime()-la)/1E3*ca-Ia)?"seek":za||"buffering";u.getCurrentTime()&&(v.he?pt(S.createEvent(za)):S.Db());R();return E;case q.UNSTARTED:return x(ma);default:return C}}function E(ma){switch(ma){case q.ENDED:return D(ma);case q.PLAYING:return B(ma);case q.UNSTARTED:return x(ma);
default:return E}}function D(){for(;z;){var ma=w;it(z);ma()}v.fe&&pt(S.createEvent("complete",1));return x(q.UNSTARTED)}function I(){}function R(){z&&(it(z),z=0,w=I)}function Q(){if(T.length&&0!==ca){var ma=-1,za;do{za=T[0];if(za.Z>u.getDuration())return;ma=(za.Z-u.getCurrentTime())/ca;if(0>ma&&(T.shift(),0===T.length))return}while(0>ma);w=function(){z=0;w=I;0<T.length&&T[0].Z===za.Z&&(T.shift(),pt(S.createEvent("progress",za.uc,za.wc)));Q()};z=jt(w,1E3*ma)}}var S,T=[],Z,L,W,ca,P,la,ra=x(q.UNSTARTED);
z=0;w=I;return{onStateChange:function(ma){ra=ra(ma)},onPlaybackRateChange:function(ma){P=u.getCurrentTime();la=kt().getTime();S.Db();ca=ma;R();Q()}}}function g(u){for(var v=u.split(","),w=v.length,z=[],x=0;x<w;x++){var y=parseInt(v[x],10);isNaN(y)||100<y||0>y||z.push(y/100)}z.sort(function(B,C){return B-C});return z}function h(u){for(var v=u.split(","),w=v.length,z=[],x=0;x<w;x++){var y=parseInt(v[x],10);isNaN(y)||0>y||z.push(y)}z.sort(function(B,C){return B-C});return z}function l(u,v,w){var z=u.map(function(B){return{Z:B,
wc:B,uc:void 0}});if(!v.length)return z;var x=v.map(function(B){return{Z:B*w,wc:void 0,uc:B}});if(!z.length)return x;var y=z.concat(x);y.sort(function(B,C){return B.Z-C.Z});return y}function m(u){var v=!!u.vtp_captureStart,w=!!u.vtp_captureComplete,z=!!u.vtp_capturePause,x=g(u.vtp_progressThresholdsPercent+""),y=h(u.vtp_progressThresholdsTimeInSeconds+""),B=!!u.vtp_fixMissingApi;if(v||w||z||x.length||y.length){var C={ie:v,fe:w,he:z,Ie:x,Je:y,ic:B,Se:void 0===u.vtp_uniqueTriggerId?"":u.vtp_uniqueTriggerId},
E=V("YT"),D=function(){e(C)};J(u.vtp_gtmOnSuccess);if(E)E.ready&&E.ready(D);else{var I=V("onYouTubeIframeAPIReady");qt("onYouTubeIframeAPIReady",function(){I&&I();D()});J(function(){for(var R=V("document"),Q=R.getElementsByTagName("script"),S=Q.length,T=0;T<S;T++){var Z=Q[T].getAttribute("src");if(b(Z,"iframe_api")||b(Z,"player_api"))return}for(var L=R.getElementsByTagName("iframe"),W=L.length,ca=0;ca<W;ca++)if(!t&&c(L[ca],C.ic)){U("https://www.youtube.com/iframe_api");t=!0;break}})}}else J(u.vtp_gtmOnSuccess)}
var p=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,t=!1;(function(u){Y.__ytl=u;Y.__ytl.m="ytl";Y.__ytl.o=!0;Y.__ytl.priorityOverride=0})(function(u){u.vtp_triggerStartOption?m(u):vl(function(){m(u)})})}();
Y.h.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.m="cid";Y.__cid.o=!0;Y.__cid.priorityOverride=0})(function(){return mf.M})}();

Y.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"],b=!1;b=!0;(function(c){Y.__gclidw=c;Y.__gclidw.m="gclidw";Y.__gclidw.o=!0;Y.__gclidw.priorityOverride=100})(function(c){J(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||Wj())&&rk(a,l));ok(l);uk(["aw","dc"],l);b?Gk(h,l):Gk(h,l,"dc");var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");tk(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=ot(N.R);Un({je:!1,
ra:void 0!=q&&!1!==q,dd:l,kd:!0});c.vtp_enableUrlPassthrough&&wk(["aw","dc","gb"])});}();


Y.h.aev=["google"],function(){function a(t,u,v){var w=t||Gi(u,"gtm");if(w)return w[v]}function b(t,u,v,w,z){z||(z="element");var x=u+"."+v,y;if(p.hasOwnProperty(x))y=p[x];else{var B=a(t,u,z);if(B&&(y=w(B),p[x]=y,q.push(x),35<q.length)){var C=q.shift();delete p[C]}}return y}function c(t,u,v,w){var z=a(t,u,r[v]);return void 0!==z?z:w}function d(t,u){if(!t)return!1;var v=e(lt());Na(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],z=0;z<u.length;z++){var x=u[z];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(B){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(t))return!1}else{var y=x;if(0!=y.length){if(0<=e(t).indexOf(y))return!1;w.push(e(y))}}}return!cu(t,w)}function e(t){m.test(t)||(t="http://"+t);return zh(Bh(t),"HOST",!0)}function f(t,u,v,w){switch(t){case "SUBMIT_TEXT":return b(u,v,"FORM."+t,g,"formSubmitElement")||w;case "LENGTH":var z=b(u,v,"FORM."+t,h);return void 0===z?w:z;case "INTERACTED_FIELD_ID":return l(u,v,"id",w);case "INTERACTED_FIELD_NAME":return l(u,
v,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,v,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(u,v,"interactedFormFieldPosition");return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,v,"interactSequenceNumber");return void 0===y?w:y;default:return w}}function g(t){switch(t.tagName.toLowerCase()){case "input":return mc(t,"value");case "button":return nc(t);default:return null}}function h(t){if("form"===t.tagName.toLowerCase()&&t.elements){for(var u=0,v=0;v<t.elements.length;v++)Ws(t.elements[v])&&
u++;return u}}function l(t,u,v,w){var z=a(t,u,"interactedFormField");return z&&mc(z,v)||w}var m=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(t){Y.__aev=t;Y.__aev.m="aev";Y.__aev.o=!0;Y.__aev.priorityOverride=
0})(function(t){var u=t.vtp_gtmEventId,v=t.vtp_defaultValue,w=t.vtp_varType,z;t.vtp_gtmCachedValues&&(z=t.vtp_gtmCachedValues.gtm);switch(w){case "TAG_NAME":var x=a(z,u,"element");return x&&x.tagName||v;case "TEXT":return b(z,u,w,nc)||v;case "URL":var y;a:{var B=String(a(z,u,"elementUrl")||v||""),C=Bh(B),E=String(t.vtp_component||"URL");switch(E){case "URL":y=B;break a;case "IS_OUTBOUND":y=
d(B,t.vtp_affiliatedDomains);break a;default:y=zh(C,E,t.vtp_stripWww,t.vtp_defaultPages,t.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===t.vtp_attribute)D=c(z,u,w,v);else{var I=t.vtp_attribute,R=a(z,u,"element");D=R&&mc(R,I)||v||""}return D;case "MD":var Q=t.vtp_mdValue,S=b(z,u,"MD",et);return Q&&S?ht(S,Q)||v:S||v;case "FORM":return f(String(t.vtp_component||"SUBMIT_TEXT"),z,u,v);default:var T=c(z,u,w,v);xt(T,"aev",t.vtp_gtmEventId);return T}})}();

Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.m="gas";Y.__gas.o=!0;Y.__gas.priorityOverride=0})(function(a){var b=K(a),c=b;c[ne.ib]=null;c[ne.th]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:lt()}function b(f,g){kc(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:nt(l),S:mt(l)})})}function c(f,g){kc(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:nt(l),S:mt(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Ka(m))try{l[f]=function(p,q,r){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:nt(lt()),
S:mt(lt())})}}catch(p){}}function e(){var f={source:null,state:V("history").state||null,url:nt(lt()),S:mt(lt())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.S!=g.S){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.S,"gtm.newUrlFragment":g.S,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;pt(m)}}}(function(f){Y.__hl=f;Y.__hl.m="hl";Y.__hl.o=!0;Y.__hl.priorityOverride=
0})(function(f){var g=V("self");if(!ut("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);vt("hl")}J(f.vtp_gtmOnSuccess)})}();
Y.h.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.m="remm";Y.__remm.o=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}xt(f,"remm",a.vtp_gtmEventId);return f})}();Y.h.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.m="smm";Y.__smm.o=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=du(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;xt(d,"smm",a.vtp_gtmEventId);return d})}();




Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.m="paused";Y.__paused.o=!0;Y.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();

Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,dc(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){J(g)}}}var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=yt(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.di,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(H.body,oc(g),h,e)()}else jt(function(){c(d)},
200)};Y.__html=c;Y.__html.m="html";Y.__html.o=!0;Y.__html.priorityOverride=0}();




Y.h.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.m="img";Y.__img.o=!0;Y.__img.priorityOverride=0})(function(a){var b=oc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}bu(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Y.h.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.lg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=pc(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=Up("lcl",h?"nv.mwt":"mwt",0),m;m=h?Up("lcl","nv.ids",[]):Up("lcl","ids",[]);if(m.length){var p=Qp(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=!!Pa(String(rc(g,"rel")||"").split(" "),function(u){return"noreferrer"===u.toLowerCase()});
q&&zg(36);var r=V((rc(g,"target")||"_self").substring(1)),t=!0;if(pt(p,Ks(function(){var u;if(u=t&&r){var v;a:if(q){var w;try{w=new MouseEvent(f.type,{bubbles:!0})}catch(z){if(!c.createEvent){v=!1;break a}w=c.createEvent("MouseEvents");w.initEvent(f.type,!0,!0)}w.lg=!0;f.target.dispatchEvent(w);v=!0}else v=!1;u=!v}u&&(r.location.href=rc(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else pt(p,function(){},l||2E3);return!0}}};kc(c,"click",e,!1);kc(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=rc(d,"href"),g=f.indexOf("#"),h=rc(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=nt(f),m=nt(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.m="lcl";Y.__lcl.o=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};Tp("lcl","mwt",h,0);e||Tp("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};Tp("lcl","ids",l,[]);e||Tp("lcl","nv.ids",l,[]);ut("lcl")||(a(),vt("lcl"));J(c.vtp_gtmOnSuccess)})}();


var cx={};cx.macro=function(a){if(Rs.ce.hasOwnProperty(a))return Rs.ce[a]},cx.onHtmlSuccess=Rs.bg(!0),cx.onHtmlFailure=Rs.bg(!1);cx.dataLayer=Ai;cx.callback=function(a){ri.hasOwnProperty(a)&&Ka(ri[a])&&ri[a]();delete ri[a]};cx.bootstrap=0;cx._spx=!1;function dx(){gi[mf.M]=cx;lb(si,Y.h);Re=Re||Rs;Se=ff}
function ex(){var a=!1;a&&Dl("INIT");Eg.s().s();gi=A.google_tag_manager=A.google_tag_manager||{};Nn();
Yj.enable_gbraid_cookie_write=!0;if(gi[mf.M]){var b=gi.zones;b&&b.unregisterChild(mf.M);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Ke.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Ne.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Me.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var q=m[p],r={},t=
0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);Le.push(r)}Pe=Y;Qe=Zt;var u=data.permissions||{},v=data.sandboxed_scripts,w=data.security_groups;Xr();qf=new pf(u);if(void 0!==v)for(var z=["sandboxedScripts"],x=0;x<v.length;x++){var y=v[x].replace(/^_*/,"");si[y]=z}$r(w);dx();Qs();ql=!1;rl=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)tl();else{kc(H,"DOMContentLoaded",tl);kc(H,"readystatechange",tl);if(H.createEventObject&&H.documentElement.doScroll){var B=
!0;try{B=!A.frameElement}catch(R){}B&&ul()}kc(A,"load",tl)}Sq=!1;"complete"===H.readyState?Uq():kc(A,"load",Uq);wm&&A.setInterval(sm,864E5);
pi=(new Date).getTime();if(a){var I=El("INIT");
}}}
(function(a){if(!A["__TAGGY_INSTALLED"]){var b=!1;if(H.referrer){var c=Bh(H.referrer);b="cct.google"===yh(c,"host")}if(!b){var d=Qi("googTaggyReferrer");b=d.length&&d[0].length}b&&(A["__TAGGY_INSTALLED"]=!0,fc("https://cct.google/taggy/agent.js"))}var f=function(){var m=A["google.tagmanager.debugui2.queue"];m||(m=[],A["google.tagmanager.debugui2.queue"]=m,fc("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:ac,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};mf.Jg&&(p.data.initialPublish=!0);m.push(p)},g="x"===zh(A.location,"query",!1,void 0,"gtm_debug");if(!g&&H.referrer){var h=Bh(H.referrer);g="tagassistant.google.com"===yh(h,"host")}if(!g){var l=Qi("__TAG_ASSISTANT");g=l.length&&l[0].length}A.__TAG_ASSISTANT_API&&(g=!0);g&&ac?f():a()})(ex);

})()
