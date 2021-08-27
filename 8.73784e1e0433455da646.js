(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CXQP:function(t,e,i){"use strict";i.r(e),i.d(e,"ShoppingListModule",(function(){return h}));var n=i("PCNd"),s=i("fXoL"),r=i("qnMD"),o=i("EiSp"),b=i("3Pt+");let c=(()=>{class t{constructor(t){this.shoppingListService=t,this.editMode=!1}ngOnInit(){this.shoppingForm=new b.g({name:new b.e(null,b.n.required),amount:new b.e(null,[b.n.required,b.n.pattern("^[1-9]+[0-9]*$")])}),this.subscription=this.shoppingListService.startedEditing.subscribe(t=>{this.editMode=!0,this.editedItemIndex=t,this.editedItem=this.shoppingListService.getIngredient(t),this.shoppingForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}ngOnDestroy(){this.subscription.unsubscribe()}onSubmitItem(){var t=new o.a(this.shoppingForm.get("name").value,this.shoppingForm.get("amount").value);!1===this.editMode?this.shoppingListService.addIngredient(t):!0===this.editMode&&(this.editMode=!1,this.shoppingListService.updateIngredient(t,this.editedItemIndex)),this.clearInput()}clearInput(){this.editMode=!1,this.shoppingForm.reset()}deleteItem(){this.shoppingListService.deleteIngredient(this.editedItemIndex),this.clearInput()}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(r.a))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-shopping-edit"]],decls:20,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","formControlName","amount",1,"form-control"],[1,"col-xs-12","mt-3"],["type","submit",1,"btn","btn-success",2,"margin-right","10px",3,"disabled"],["type","button",1,"btn","btn-danger",2,"margin-right","10px",3,"disabled","click"],["type","button",1,"btn","btn-primary",2,"margin-right","10px",3,"click"]],template:function(t,e){1&t&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Kb(2,"form",2),s.Rb("ngSubmit",(function(){return e.onSubmitItem()})),s.Kb(3,"div",0),s.Kb(4,"div",3),s.Kb(5,"label",4),s.dc(6,"Name"),s.Jb(),s.Ib(7,"input",5),s.Jb(),s.Kb(8,"div",6),s.Kb(9,"label",7),s.dc(10,"Amount"),s.Jb(),s.Ib(11,"input",8),s.Jb(),s.Jb(),s.Kb(12,"div",0),s.Kb(13,"div",9),s.Kb(14,"button",10),s.dc(15),s.Jb(),s.Kb(16,"button",11),s.Rb("click",(function(){return e.deleteItem()})),s.dc(17,"Delete Item"),s.Jb(),s.Kb(18,"button",12),s.Rb("click",(function(){return e.clearInput()})),s.dc(19,"Clear"),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.xb(2),s.Ub("formGroup",e.shoppingForm),s.xb(12),s.Ub("disabled",!e.shoppingForm.valid),s.xb(1),s.ec(e.editMode?"Update":"Add"),s.xb(1),s.Ub("disabled",!e.editMode))},directives:[b.o,b.k,b.h,b.a,b.j,b.f,b.l],styles:[""]}),t})();var d=i("ofXK");function p(t,e){if(1&t){const t=s.Lb();s.Kb(0,"a",4),s.Rb("click",(function(){s.Zb(t);const i=e.index;return s.Tb().onEditItem(i)})),s.dc(1),s.Jb()}if(2&t){const t=e.$implicit;s.xb(1),s.gc(" ",t.name," (",t.amount,") ")}}let u=(()=>{class t{constructor(t){this.shoppingListService=t,this.ingredients=[]}ngOnInit(){this.ingredients=this.shoppingListService.getIngredients(),this.ingredientSubscription=this.shoppingListService.ingredientEmitter.subscribe(t=>{this.ingredients=t})}onEditItem(t){this.shoppingListService.startedEditing.next(t)}ngOnDestroy(){this.ingredientSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(r.a))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-shopping-list"]],features:[s.wb([])],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor:pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Ib(2,"app-shopping-edit"),s.Ib(3,"hr"),s.Kb(4,"ul",2),s.cc(5,p,2,2,"a",3),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.xb(5),s.Ub("ngForOf",e.ingredients))},directives:[c,d.h],styles:[""]}),t})();var a=i("tyNb");const m=[{path:"",component:u}];let l=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(m)],a.g]}),t})(),h=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[n.a,b.m,l]]}),t})()}}]);
//# sourceMappingURL=8.73784e1e0433455da646.js.map