(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"P+IX":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r("IzEk"),a=r("lJxs"),i=r("fXoL"),u=r("qXBG"),o=r("tyNb");let n=(()=>{class e{constructor(e,t){this.authService=e,this.router=t}canActivate(e,t){return"/recipes"===t.url?this.authService.user.pipe(Object(c.a)(1),Object(a.a)(e=>!!e||this.router.createUrlTree(["/auth"]))):"/auth"===t.url?this.authService.user.pipe(Object(c.a)(1),Object(a.a)(e=>!e||this.router.createUrlTree(["/recipes"]))):void 0}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(u.a),i.Ob(o.c))},e.\u0275prov=i.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
//# sourceMappingURL=common.b6667603e7468ed6d938.js.map