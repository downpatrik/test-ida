!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){var n=document.querySelector(".tooltip-body"),r=document.querySelector(".code-tooltip"),a=document.querySelector(".index__menu_hamburger"),u=document.querySelector(".index__menu");n.addEventListener("click",function(e){e.preventDefault(),n.classList.toggle("active-show")}),r.addEventListener("click",function(e){e.preventDefault(),n.classList.toggle("active-show")}),a.addEventListener("click",function(e){e.preventDefault(),u.classList.toggle("active-show")}),$("input").eq(0).bind("keypress",function(){if(this.value.length>3)return!1}).bind("change keyup input click",function(){this.value.match(/[^0-9]/g)&&(this.value=this.value.replace(/[^0-9]/g,""));var e=this.classList;this.value.length>3?(e.remove("errorInput"),e.add("valid")):(e.add("errorInput"),e.remove("valid"))}),$("input").eq(1).bind("keypress",function(){if(this.value.length>3)return!1}).bind("change keyup input click",function(){this.value.match(/[^0-9]/g)&&(this.value=this.value.replace(/[^0-9]/g,""));var e=this.classList;this.value.length>3?(e.remove("errorInput"),e.add("valid")):(e.add("errorInput"),e.remove("valid"))}),$("input").eq(2).bind("keypress",function(){if(this.value.length>3)return!1}).bind("change keyup input click",function(){this.value.match(/[^0-9]/g)&&(this.value=this.value.replace(/[^0-9]/g,""));var e=this.classList;this.value.length>3?(e.remove("errorInput"),e.add("valid")):(e.add("errorInput"),e.remove("valid"))}),$("input").eq(3).bind("keypress",function(){if(this.value.length>3)return!1}).bind("change keyup input click",function(){this.value.match(/[^0-9]/g)&&(this.value=this.value.replace(/[^0-9]/g,""));var e=this.classList;this.value.length>3?(e.remove("errorInput"),e.add("valid")):(e.add("errorInput"),e.remove("valid"))}),$("input").eq(4).bind("keypress",function(){if(this.value.length>1)return!1}).bind("change keyup input click",function(){this.value.match(/[^0-9]/g)&&(this.value=this.value.replace(/[^0-9]/g,""));var e=this.classList;this.value.length>1?(e.remove("errorInput"),e.add("valid")):(e.add("errorInput"),e.remove("valid"))}),$("input").eq(5).bind("keypress",function(){if(this.value.length>3)return!1}).bind("change keyup input click",function(){this.value.match(/[^0-9]/g)&&(this.value=this.value.replace(/[^0-9]/g,""));var e=this.classList;this.value.length>3?(e.remove("errorInput"),e.add("valid")):(e.add("errorInput"),e.remove("valid"))}),$("input").eq(7).bind("keypress",function(){if(this.value.length>2)return!1}).bind("change keyup input click",function(){this.value.match(/[^0-9]/g)&&(this.value=this.value.replace(/[^0-9]/g,""));var e=this.classList;this.value.length>2?(e.remove("errorInput"),e.add("valid")):(e.add("errorInput"),e.remove("valid"))}),$("input").eq(6).bind("keypress",function(){if(this.value.length>30)return!1}).bind("change keyup input click",function(){this.value.match(/[^a-zA-Z]/g)&&(this.value=this.value.replace(/[^a-zA-Z]/g,""));var e=this.classList;this.value.length>30?(e.remove("errorInput"),e.remove("valid")):this.value.length>=4?(e.remove("errorInput"),e.add("valid")):(e.add("errorInput"),e.remove("valid"))}),document.querySelector(".main-form").addEventListener("submit",function(e){e.preventDefault();var t=document.querySelectorAll(".valid").length,n=document.getElementsByTagName("input");if(9==t)console.log("Все формы заполнены");else{for(i=0;i<9;i++){var r=n[i].classList;r.contains("valid")||r.add("errorInput")}console.log("Не все формы заполнены")}})}]);