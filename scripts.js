//var jquery = require("jquery");
//window.$ = window.jQuery = jquery; // notice the definition of global variables here
// require("jquery-ui");
/*!
* Superclamp 0.2.1
* https://github.com/makandra/superclamp
*/
(function(){var t,e,n,i,o,r,s,l,u,a,p,c,d,h,m,f,g,y,_,v,b,A,E,T,w,x,N,L,F,I,B,R,S=function(t,e){return function(){return t.apply(e,arguments)}},q=[].slice;u=!1,e=!1,o="superclamp:done",c="superclamp:update",l="superclamp:instance",a="superclamp-ready",n="superclamp:dimensions",i="superclamp:distanceToBottomRight",r="superclamp:fragmentNodes",s="superclamp:fragmentValues",t=".clamp-ellipsis.is-not-required {\n  visibility: hidden !important;\n}\n.clamp-hidden {\n  display: none !important;\n}",p=function(){function t(t){var e;this.element=t,this._clampNode=S(this._clampNode,this),this._checkFit=S(this._checkFit,this),this._unchanged=S(this._unchanged,this),this._distanceToBottomRight=S(this._distanceToBottomRight,this),this._getEllipsisAt=S(this._getEllipsisAt,this),this._clampThis=S(this._clampThis,this),this._storeDistance=S(this._storeDistance,this),this._updateElementAt=S(this._updateElementAt,this),this._updateEllipsisSize=S(this._updateEllipsisSize,this),d("initialize",this.element),e=document.createTextNode(" "),this.ellipsis=document.createElement("span"),this.ellipsis.classList.add("clamp-ellipsis"),this.ellipsis.innerText="\u2026",this.element.appendChild(e),this.element.appendChild(this.ellipsis),this.element[l]=this,this.element.setAttribute(a,!0)}return t.register=function(t){var e,n,i;for(d(".register",t),e=0,n=t.length;n>e;e++)i=t[e],this.clamp(i);m()},t.clamp=function(e){var n;d(".clamp",e),n=e[l]||new t(e),n.clamp()},t.reclampAll=function(e){var n,i,o,r;for((null==e||null!=e.currentTarget)&&(e=document),r=e.querySelectorAll("["+a+"]"),i=0,o=r.length;o>i;i++)n=r[i],t.clamp(n);return m(),e},t.prototype.clamp=function(){N("query",function(t){return function(){return t._updateEllipsisSize(),t._updateElementAt(),t._unchanged()?d("unchanged",t.element):t._clampThis()}}(this))},t.prototype._updateEllipsisSize=function(){return I(this.ellipsis)},t.prototype._updateElementAt=function(){return this.elementAt=v(this.element)},t.prototype._storeDistance=function(){var t;return t=this._distanceToBottomRight(),d("storing distance",t),this.ellipsis[i]=t},t.prototype._clampThis=function(){return x("_clampThis",this.element),this._clampNode(this.element,function(t){return function(e){return t._storeDistance(),N("layout",function(){return e?t.ellipsis.classList.add("is-not-required"):t.ellipsis.classList.remove("is-not-required"),R(t.element,o)})}}(this))},t.prototype._getEllipsisAt=function(){return b(this.ellipsis)},t.prototype._distanceToBottomRight=function(){var t;return t=this._getEllipsisAt(),[this.elementAt.right-t.right,this.elementAt.bottom-t.bottom]},t.prototype._unchanged=function(){var t,e,n,o,r,s;return s=this.ellipsis[i],null!=s?(t=s[0],n=s[1],r=this._distanceToBottomRight(),e=r[0],o=r[1],d("_unchanged: %o == %o && %o == %o",t,e,n,o),t===e&&n===o):!1},t.prototype._checkFit=function(t){return N("query",function(e){return function(){var n,i;return i=e._getEllipsisAt(),n=i.bottom<=e.elementAt.bottom&&i.right<=e.elementAt.right,d("checkFit: %o (bottom: %o <= %o, right: %o <= %o)",n,i.bottom,e.elementAt.bottom,i.right,e.elementAt.right),t(n)}}(this))},t.prototype._clampNode=function(t,e,n){var i,o;return null==n&&(n=!0),i=function(n){return function(r,s,l){return N("query",function(){var u,a,p;return d("findBestFit #contents: %o, nodeName: %o, prefix: %o",r,t.nodeName,s),0===r.length?e(l):1===r.length?o?(t.nodeValue=s+r[0],n._checkFit(function(n){return N("layout",function(i){return function(){return n?e(l):(t.nodeValue=s.replace(RegExp(" $"),""),e(!1))}}(this))})):n._clampNode(r[0],e,l):(a=Math.floor(r.length/2),u=r.slice(0,a),p=r.slice(a),d("findBestFit head: %o, tail: %o",u,p),o?t.nodeValue=s+u.join(" "):(F(u),E(p)),n._checkFit(function(e){return N("layout",function(n){return function(){return e?(d("fits"),o?i(p,t.nodeValue+" ",l):i(p,"",l)):(d("wont fit"),i(u,s,!1))}}(this))}))})}}(this),o="#text"===t.nodeName,N("layout",function(e){return function(){var r;return o?(T(t),i(_(t),"",n)):"#comment"!==t.nodeName?(F([t]),r=f(t),t===e.element&&(r=Array.prototype.slice.call(r,0,-2)),i(r,"",n)):void 0}}(this))},t}(),w={layout:[],query:[]},N=function(t,e){w[t].push(e)},h=function(t){var e,n;if(n=w[t],0===n.length)return!0;for(d("draining",t);e=n.shift();)e();return!1},m=function(){for(var t,e;!t||!e;)t=h("layout"),e=h("query")},d=function(){var t,n;return t=1<=arguments.length?q.call(arguments,0):[],e&&null!=(n=window.console)&&"function"==typeof n.debug?n.debug.apply(n,t):void 0},x=function(){var t,e;return t=1<=arguments.length?q.call(arguments,0):[],u&&null!=(e=window.console)&&"function"==typeof e.log?e.log.apply(e,t):void 0},I=function(t){t[n]=g(t),d("storeDimensions",t[n])},g=function(t){var e,n,i;return e=window.getComputedStyle(t),n=t.offsetHeight-parseFloat(e.paddingTop)-parseFloat(e.paddingBottom),i=t.offsetWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight),d("getDimensions",[n,i]),[i,n]},A=function(t){return t[n]},b=function(t){var e,n,i,o;return i=A(t)||g(t),o=i[0],e=i[1],n={top:t.offsetTop,left:t.offsetLeft},null==n.bottom&&(n.bottom=n.top+e),null==n.right&&(n.right=n.left+o),d("getPosition of %o: %o",t,n),n},v=function(t){var e,n,i,o,r,s,l,u,a,p;return s=!!t.currentStyle,i=window.getComputedStyle(t),e="border-box"===i.boxSizing,a=t.offsetTop,l=t.offsetLeft,o=parseInt(i.maxHeight)||parseInt(i.height),p=parseInt(i.maxWidth)||parseInt(i.width),e&&(u={top:parseInt(i.paddingTop)||0,left:parseInt(i.paddingLeft)||0,right:parseInt(i.paddingRight)||0,bottom:parseInt(i.paddingBottom)||0},n={top:parseInt(i.borderTopWidth)||0,left:parseInt(i.borderLeftWidth)||0,right:parseInt(i.borderRightWidth)||0,bottom:parseInt(i.borderBottomWidth)||0},s||(a+=u.top+n.top,l+=u.left+n.left,p-=u.left+u.right+n.left+n.right,o-=u.top+u.bottom+n.top+n.bottom)),r={top:a,left:l,right:l+p,bottom:a+o,width:p,height:o}},y=function(t){var e,n,i,o;return i=t.parentNode,n=i[r]||[],o=i[s]||[],e=Array.prototype.indexOf.call(n,t),[n,o,e,i]},L=function(t,e){var n,i,o,l,u;l=y(t),i=l[0],u=l[1],n=l[2],o=l[3],0>n&&(n=i.length),i[n]=t,u[n]=e,o[r]=i,o[s]=u},_=function(t){var e,n,i,o,r;return o=y(t),n=o[0],r=o[1],e=o[2],i=o[3],r[e]},T=function(t){null==_(t)&&L(t,t.nodeValue.split(/[ \t\r\n]+/))},f=function(t){return t.childNodes},E=function(t){var e,n,i;for(d("hideAll",t),e=0,n=t.length;n>e;e++)i=t[e],"#text"===i.nodeName?(T(i),i.nodeValue=""):i.classList.add("clamp-hidden")},F=function(t){var e,n,i;for(d("showAll",t),e=0,n=t.length;n>e;e++)i=t[e],"#text"===i.nodeName?(T(i),i.nodeValue=_(i).join(" ")):(i.classList.remove("clamp-hidden"),F(f(i)))},R=function(t,e){var n;return"function"==typeof Event?n=new Event("submit"):(n=document.createEvent("Event"),n.initEvent(e,!0,!0)),t.dispatchEvent(n)},B=document.createElement("style"),B.type="text/css",B.appendChild(document.createTextNode(t)),document.head.appendChild(B),"undefined"!=typeof jQuery&&(jQuery.fn.clamp=function(){return p.register(this.get()),this}),document.addEventListener("DOMContentLoaded",function(){return document.addEventListener(c,p.reclampAll)}),"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=p:window.Superclamp=p}).call(this);

$(function() {
  $(document).ready(function() {
    $("#files>select").selectmenu({
      create: function (e,ui) {
        var $select = $(this);
        var $children = $select.next().children()
        $children.filter(".ui-icon").insertAfter($children.filter(".ui-selectmenu-text"))

        setTimeout(function() {
          $select.closest("[built]").attr("built", true)

        },2000)
      }
    });

    // $(".doc-text div:first").each(function() {
    //   var $newDiv = $("<div>"+$(this).text()+"</div>").prependTo($(this).parent())
    //
    //   $(this).remove()
    //
    //   $newDiv.clamp()
    // })
    $(".doc-text div").clamp()

    function calcThisShiz($el) {
      //$("[highlight]").each(function() {
        if($el.is("[highlight=start]")) {
          $el.data("px", {
            start:{},
            stop:{}
          })

          var pos = {};
        } else {
          var pos = $el.prevUntil("[highlight=start]").data("px")
        }

        pos = $el.position();

        if($el.is("[highlight=stop]")) {
          $el.prevUntil("[highlight=start]").data("px").stop = pos;
        } else {
          $el.data("px").start = pos;
        }

     // })

//     $('<div class="row-light"></div>').appendTo("#days").css({
//         left:pos.start.left,
//         position:absolute,
//         width:Math.abs(pos.start.left-pos.stop.left)+$(".day-num").width()
//     })

      console.log($el)
    }


    var state = true;
    $(".day-num").on("click", function() {
      var highlightValue = "start";
      if(!state) {
        highlightValue = "stop";
      }

      $(this).attr("highlight", highlightValue);
      state = !state;

      calcThisShiz($(this))
//     console.log($(this).position())
    });

  })


  /* linkOut("https://www.alesolutions.com/");*/
  function linkOut(url) {
    window.open(url);
  }
})