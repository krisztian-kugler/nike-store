(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nike-header></nike-header>\r\n<nike-product-list></nike-product-list>\r\n<nike-cart></nike-cart>\r\n<nike-toast *ngIf=\"toast.show\" [message]=\"toast.message\" @toast></nike-toast>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGRldlxcbmlrZS1zdG9yZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.toast = {
            show: false,
            message: ""
        };
    }
    AppComponent.prototype.activateToast = function (product) {
        var _this = this;
        this.toast.message = product.name + " (Size: " + product.selectedSize + (product.colors.length > 1 ? ", Color: " + product.selectedColor.name : "") + ")";
        this.toast.show = true;
        this.timeOut = setTimeout(function () {
            _this.toast.show = false;
        }, 4000);
    };
    AppComponent.prototype.closeToast = function () {
        clearTimeout(this.timeOut);
        this.toast.show = false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.addToCart.subscribe(function (product) {
            clearTimeout(_this.timeOut);
            _this.activateToast(product);
        });
        this.dataService.closeToast.subscribe(function () {
            _this.closeToast();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("toast", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("void => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            transform: "translate(-50%, 30px)",
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("250ms 0ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            transform: "translate(-50%, 0)",
                            opacity: 1
                        }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("* => void", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 1
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("250ms 0ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 0
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
/* harmony import */ var _components_product_list_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product-list/product-card/product-card.component */ "./src/app/components/product-list/product-card/product-card.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/toast/toast.component */ "./src/app/components/toast/toast.component.ts");
/* harmony import */ var _components_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cart/cart-item/cart-item.component */ "./src/app/components/cart/cart-item/cart-item.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"], _components_product_list_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"], _components_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_13__["CartItemComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cart/cart-item/cart-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/cart/cart-item/cart-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"product-image\" src=\"{{ cartItem.product.image }}\" alt=\"{{ cartItem.product.name }}\" />\n\n<div class=\"product\">\n  <p class=\"name\">{{ cartItem.product.name }}</p>\n  <p class=\"size\">\n    {{ cartItem.product.selectedSize }} <span *ngIf=\"cartItem.product.colors.length > 1\">, {{ cartItem.product.selectedColor.name }}</span>\n  </p>\n  <div class=\"quantity-price-wrapper\">\n    <div class=\"quantity-group\">\n      <div class=\"decrease\" (click)=\"decrease()\"></div>\n      <p class=\"quantity\">{{ cartItem.quantity }}</p>\n      <div class=\"increase\" (click)=\"increase()\"></div>\n    </div>\n    <div class=\"price\">{{ \"€\" + cartItem.totalPrice }}</div>\n  </div>\n</div>\n\n<div class=\"remove\" (click)=\"remove()\"></div>\n"

/***/ }),

/***/ "./src/app/components/cart/cart-item/cart-item.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/components/cart/cart-item/cart-item.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 10px;\n  padding: 20px 15px 15px;\n  border: 1px solid #e9e9e9;\n  background-color: white; }\n  :host .product-image {\n    align-self: center;\n    width: 70px;\n    height: auto;\n    margin-bottom: 15px; }\n  :host .product {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  :host .product .name {\n      margin-bottom: 3px;\n      font-size: 12px;\n      font-weight: 600; }\n  :host .product .size {\n      display: flex;\n      align-items: center;\n      margin-bottom: 10px;\n      font-size: 12px; }\n  :host .product .quantity-price-wrapper {\n      display: flex;\n      justify-content: space-between;\n      width: 100%;\n      font-weight: 500; }\n  :host .product .quantity-price-wrapper .quantity-group {\n        display: flex;\n        margin-right: 15px; }\n  :host .product .quantity-price-wrapper .quantity-group .decrease, :host .product .quantity-price-wrapper .quantity-group .increase {\n          position: relative;\n          width: 20px;\n          height: 20px;\n          background-color: #e9e9e9;\n          cursor: pointer; }\n  :host .product .quantity-price-wrapper .quantity-group .decrease:hover, :host .product .quantity-price-wrapper .quantity-group .increase:hover {\n            background-color: #4e2b94; }\n  :host .product .quantity-price-wrapper .quantity-group .decrease:before, :host .product .quantity-price-wrapper .quantity-group .increase:before {\n          position: absolute;\n          top: 9px;\n          left: 6px;\n          content: \"\";\n          display: block;\n          width: 8px;\n          height: 2px;\n          background-color: black; }\n  :host .product .quantity-price-wrapper .quantity-group .decrease:hover:before, :host .product .quantity-price-wrapper .quantity-group .increase:hover:before {\n          background-color: white; }\n  :host .product .quantity-price-wrapper .quantity-group .increase:after {\n          position: absolute;\n          top: 6px;\n          left: 9px;\n          content: \"\";\n          display: block;\n          width: 2px;\n          height: 8px;\n          background-color: black; }\n  :host .product .quantity-price-wrapper .quantity-group .increase:hover:after {\n          background-color: white; }\n  :host .product .quantity-price-wrapper .quantity-group .quantity {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 30px; }\n  :host .remove {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 16px;\n    height: 16px;\n    cursor: pointer; }\n  :host .remove:before, :host .remove:after {\n      position: absolute;\n      top: 7px;\n      content: \"\";\n      display: block;\n      width: 100%;\n      height: 1px;\n      background-color: #858585; }\n  :host .remove:before {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n  :host .remove:after {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n  :host .remove:hover:before, :host .remove:hover:after {\n      background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQtaXRlbS9DOlxcZGV2XFxuaWtlLXN0b3JlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJ0XFxjYXJ0LWl0ZW1cXGNhcnQtaXRlbS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQtaXRlbS9DOlxcZGV2XFxuaWtlLXN0b3JlL3NyY1xcYXNzZXRzXFxfaW5pdC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQW9DO0VBQ3BDLHVCQUF1QixFQUFBO0VBUnhCO0lBV0csa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUFkdEI7SUFpQkcsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUIsRUFBQTtFQW5CdEI7TUFzQkssa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQXhCckI7TUEyQkssYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO0VBOUJwQjtNQWlDSyxhQUFhO01BQ2IsOEJBQThCO01BQzlCLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQXBDckI7UUF1Q08sYUFBYTtRQUNiLGtCQUFrQixFQUFBO0VBeEN6QjtVQTJDUyxrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFlBQVk7VUFDWix5QkFBb0M7VUFDcEMsZUFBZSxFQUFBO0VBL0N4QjtZQWtEVyx5QkNuRDZCLEVBQUE7RURDeEM7VUF1RFcsa0JBQWtCO1VBQ2xCLFFBQVE7VUFDUixTQUFTO1VBQ1QsV0FBVztVQUNYLGNBQWM7VUFDZCxVQUFVO1VBQ1YsV0FBVztVQUNYLHVCQUF1QixFQUFBO0VBOURsQztVQWlFVyx1QkFBdUIsRUFBQTtFQWpFbEM7VUFzRVcsa0JBQWtCO1VBQ2xCLFFBQVE7VUFDUixTQUFTO1VBQ1QsV0FBVztVQUNYLGNBQWM7VUFDZCxVQUFVO1VBQ1YsV0FBVztVQUNYLHVCQUF1QixFQUFBO0VBN0VsQztVQWdGVyx1QkFBdUIsRUFBQTtFQWhGbEM7VUFtRlMsYUFBYTtVQUNiLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsV0FBVyxFQUFBO0VBdEZwQjtJQTJGRyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQWhHbEI7TUFtR0ssa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixXQUFXO01BQ1gsY0FBYztNQUNkLFdBQVc7TUFDWCxXQUFXO01BQ1gseUJBQW9DLEVBQUE7RUF6R3pDO01BNEdLLGdDQUF3QjtjQUF4Qix3QkFBd0IsRUFBQTtFQTVHN0I7TUErR0ssaUNBQXlCO2NBQXpCLHlCQUF5QixFQUFBO0VBL0c5QjtNQWtISyx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbml0XCI7XG5cbiA6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTVweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIC5wcm9kdWN0LWltYWdlIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cblxuICAucHJvZHVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubmFtZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XG5cbiAgICAuc2l6ZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7IH1cblxuICAgIC5xdWFudGl0eS1wcmljZS13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgIC5xdWFudGl0eS1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAuZGVjcmVhc2UsIC5pbmNyZWFzZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0LWRhcmtlcjsgfSB9XG5cbiAgICAgICAgLmRlY3JlYXNlLCAuaW5jcmVhc2Uge1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICBsZWZ0OiA2cHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxuXG4gICAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH0gfVxuXG4gICAgICAgIC5pbmNyZWFzZSB7XG5cbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgbGVmdDogOXB4O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cblxuICAgICAgICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH0gfVxuXG4gICAgICAgIC5xdWFudGl0eSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAzMHB4OyB9IH1cblxuICAgICAgLnByaWNlIHt9IH0gfVxuXG4gIC5yZW1vdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogN3B4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDEzMywgMTMzKTsgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cblxuICAgICY6aG92ZXI6YmVmb3JlLCAmOmhvdmVyOmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyB9IH0gfVxuIiwiJGNvbG9yLWhpZ2hsaWdodDogcmdiKDEwMywgNTQsIDE5OSk7XG4kY29sb3ItaGlnaGxpZ2h0LWRhcmtlcjogcmdiKDc4LCA0MywgMTQ4KTtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/cart/cart-item/cart-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/cart/cart-item/cart-item.component.ts ***!
  \******************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(dataService) {
        this.dataService = dataService;
        this.removeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CartItemComponent.prototype.decrease = function () {
        if (this.cartItem.quantity === 1) {
            return;
        }
        else {
            this.cartItem.quantity--;
            this.cartItem.totalPrice = this.cartItem.quantity * this.cartItem.price;
            this.dataService.calcTotal.next();
        }
    };
    CartItemComponent.prototype.increase = function () {
        this.cartItem.quantity++;
        this.cartItem.totalPrice = this.cartItem.quantity * this.cartItem.price;
        this.dataService.calcTotal.next();
    };
    CartItemComponent.prototype.remove = function () {
        this.removeItem.emit(this.cartItem.id);
    };
    CartItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartItemComponent.prototype, "cartItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartItemComponent.prototype, "removeItem", void 0);
    CartItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "nike-cart-item",
            template: __webpack_require__(/*! ./cart-item.component.html */ "./src/app/components/cart/cart-item/cart-item.component.html"),
            styles: [__webpack_require__(/*! ./cart-item.component.sass */ "./src/app/components/cart/cart-item/cart-item.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CartItemComponent);
    return CartItemComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dimmed-layer\" *ngIf=\"open\" (click)=\"open = false\" @dim></div>\n\n<div class=\"cart\" [ngClass]=\"{ open: open }\">\n  <ng-template *ngIf=\"items.length; then showItems; else empty\"></ng-template>\n\n  <ng-template #showItems>\n    <header class=\"header\">\n      <div class=\"items-length\">{{ items.length === 1 ? items.length + \" item\" : items.length + \" items\" }}</div>\n      <div class=\"empty-cart\">\n        <img src=\"assets/images/trash_dark.png\" alt=\"Trash can\" />\n        <p (click)=\"emptyCart()\">Empty cart</p>\n      </div>\n    </header>\n    <div class=\"items\">\n      <nike-cart-item *ngFor=\"let item of items\" [cartItem]=\"item\" (removeItem)=\"onRemoveItem($event)\"> </nike-cart-item>\n    </div>\n\n    <footer class=\"footer\">\n      <div class=\"total\">\n        <p>Total:</p>\n        <p>{{ \"€\" + total }}</p>\n      </div>\n      <button class=\"to-checkout\">\n        <img src=\"assets/images/card_light.png\" alt=\"Card\" />\n        <p>To Checkout</p>\n      </button>\n    </footer>\n  </ng-template>\n\n  <ng-template #empty>\n    <div class=\"empty\">You have no items in your cart</div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cart/cart.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .dimmed-layer {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  height: calc(100vh - 50px);\n  background-color: rgba(0, 0, 0, 0.5); }\n\n:host .cart {\n  position: fixed;\n  z-index: 9999;\n  top: 50px;\n  right: -320px;\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  height: calc(100vh - 50px);\n  border-top: 1px solid #e9e9e9;\n  background-color: #f6f6f6;\n  overflow: hidden;\n  transition: right 250ms; }\n\n:host .cart.open {\n    right: 0; }\n\n:host .cart .header {\n    position: relative;\n    z-index: 9999;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: 15px;\n    background-color: white;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n\n:host .cart .header .items-length {\n      display: flex;\n      align-items: center;\n      height: 24px;\n      font-size: 12px;\n      font-weight: 600; }\n\n:host .cart .header .empty-cart {\n      display: flex;\n      align-items: center;\n      font-size: 12px;\n      font-weight: 600;\n      cursor: pointer; }\n\n:host .cart .items {\n    height: 100%;\n    overflow-y: scroll;\n    padding: 15px;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none; }\n\n:host .cart .items::-webkit-scrollbar {\n      width: 0 !important; }\n\n:host .cart .footer {\n    position: relative;\n    z-index: 9999;\n    padding: 15px;\n    background-color: white;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n\n:host .cart .footer .total {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 15px;\n      font-weight: 600; }\n\n:host .cart .footer .to-checkout {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 40px;\n      border: none;\n      background-color: #6736c7;\n      color: white;\n      font-family: Montserrat, sans-serif;\n      font-size: 16px;\n      font-weight: 600;\n      text-transform: uppercase;\n      outline: none;\n      cursor: pointer; }\n\n:host .cart .footer .to-checkout:hover {\n        background-color: #4e2b94; }\n\n:host .cart .footer .to-checkout img {\n        margin-right: 10px; }\n\n:host .cart .footer .to-checkout p {\n        font-size: 12px; }\n\n:host .cart .empty {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: #858585;\n    font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L0M6XFxkZXZcXG5pa2Utc3RvcmUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9DOlxcZGV2XFxuaWtlLXN0b3JlL3NyY1xcYXNzZXRzXFxfaW5pdC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBR0csZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixvQ0FBbUMsRUFBQTs7QUFSdEM7RUFXRyxlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDZCQUF3QztFQUN4Qyx5QkFBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBOztBQXRCMUI7SUF5QkssUUFBUSxFQUFBOztBQXpCYjtJQTRCSyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0NBQXFDLEVBQUE7O0FBbkMxQztNQXNDTyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBMUN2QjtNQTZDTyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBOztBQWpEdEI7SUFvREssWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHdCQUF3QixFQUFBOztBQXhEN0I7TUEyRE8sbUJBQW1CLEVBQUE7O0FBM0QxQjtJQThESyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0NBQXFDLEVBQUE7O0FBbEUxQztNQXFFTyxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTs7QUF4RXZCO01BMkVPLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxZQUFZO01BQ1osWUFBWTtNQUNaLHlCQ25GMkI7TURvRjNCLFlBQVk7TUFDWixtQ0FBbUM7TUFDbkMsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7TUFDekIsYUFBYTtNQUNiLGVBQWUsRUFBQTs7QUF4RnRCO1FBMkZTLHlCQzVGK0IsRUFBQTs7QURDeEM7UUE4RlMsa0JBQWtCLEVBQUE7O0FBOUYzQjtRQWlHUyxlQUFlLEVBQUE7O0FBakd4QjtJQW9HSyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQXlCO0lBQ3pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL2luaXRcIjtcblxuIDpob3N0IHtcblxuICAuZGltbWVkLWxheWVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7IH1cblxuICAuY2FydCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdG9wOiA1MHB4O1xuICAgIHJpZ2h0OiAtMzIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHJpZ2h0IDI1MG1zO1xuXG4gICAgJi5vcGVuIHtcbiAgICAgIHJpZ2h0OiAwOyB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcblxuICAgICAgLml0ZW1zLWxlbmd0aCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XG5cbiAgICAgIC5lbXB0eS1jYXJ0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH0gfVxuXG4gICAgLml0ZW1zIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAgIWltcG9ydGFudDsgfSB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgLjMpO1xuXG4gICAgICAudG90YWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuICAgICAgLnRvLWNoZWNrb3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhpZ2hsaWdodDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhpZ2hsaWdodC1kYXJrZXI7IH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfSB9IH1cblxuICAgIC5lbXB0eSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBjb2xvcjogcmdiKDEzMywgMTMzLCAxMzMpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfSB9IH1cbiIsIiRjb2xvci1oaWdobGlnaHQ6IHJnYigxMDMsIDU0LCAxOTkpO1xuJGNvbG9yLWhpZ2hsaWdodC1kYXJrZXI6IHJnYig3OCwgNDMsIDE0OCk7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var CartComponent = /** @class */ (function () {
    function CartComponent(dataService) {
        this.dataService = dataService;
        this.items = [];
        this.open = false;
    }
    CartComponent.prototype.addToItemList = function (product) {
        var id = product.id + "-" + product.selectedSize + "-" + product.selectedColor.id;
        var found = null;
        this.items.forEach(function (item) {
            if (item.id === id) {
                found = item;
            }
        });
        if (found) {
            found.quantity++;
            found.totalPrice = found.quantity * found.price;
            return;
        }
        else {
            var cartItem = {
                id: id,
                product: product,
                quantity: 1,
                price: product.salePrice ? product.salePrice : product.normalPrice,
                totalPrice: product.salePrice ? product.salePrice : product.normalPrice
            };
            this.items.push(cartItem);
            this.dataService.itemsInCart.next(this.items.length);
        }
    };
    CartComponent.prototype.onRemoveItem = function (id) {
        var _this = this;
        this.items.forEach(function (item, index) {
            if (item.id === id) {
                _this.items.splice(index, 1);
                _this.calcTotal();
                _this.dataService.itemsInCart.next(_this.items.length);
                return;
            }
        });
    };
    CartComponent.prototype.emptyCart = function () {
        this.items = [];
        this.dataService.itemsInCart.next(this.items.length);
    };
    CartComponent.prototype.calcTotal = function () {
        this.total = this.items.reduce(function (total, item) {
            return (total += item.totalPrice);
        }, 0);
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.toggleCart.subscribe(function () {
            if (!_this.open)
                _this.dataService.closeToast.next();
            _this.open ? (_this.open = false) : (_this.open = true);
        });
        this.dataService.addToCart.subscribe(function (product) {
            _this.addToItemList(product);
            _this.calcTotal();
        });
        this.dataService.calcTotal.subscribe(function () {
            _this.calcTotal();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CartComponent.prototype, "open", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "nike-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/cart/cart.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("dim", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("void => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("250ms 0ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 1
                        }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("* => void", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 1
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("250ms 0ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 0
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./cart.component.sass */ "./src/app/components/cart/cart.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <img class=\"logo\" src=\"assets/images/nike_logo.png\" alt=\"logo\" />\n\n  <ul class=\"menu\">\n    <li *ngFor=\"let menuItem of menuItems\">{{ menuItem }}</li>\n  </ul>\n\n  <div class=\"cart-button\" (click)=\"toggleCart()\">\n    <img class=\"cart\" src=\"assets/images/cart_dark.png\" alt=\"cart\" />\n    <div class=\"counter\">{{ counter }}</div>\n  </div>\n\n  <div class=\"mobile-menu-button\">\n    <span class=\"line\"></span>\n    <span class=\"line\"></span>\n    <span class=\"line\"></span>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  z-index: 9999;\n  display: block;\n  width: 100%;\n  height: 50px;\n  background-color: white;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n  :host .navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 1200px;\n    height: 100%;\n    margin: 0 auto; }\n  :host .navbar .logo {\n      width: 50px;\n      margin-left: 20px; }\n  :host .navbar .menu {\n      display: flex;\n      font-size: 12px;\n      font-weight: bold;\n      list-style: none; }\n  :host .navbar .menu li {\n        text-transform: uppercase;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        cursor: pointer; }\n  :host .navbar .menu li:hover {\n          color: #6736c7; }\n  :host .navbar .menu li:not(:last-child) {\n          margin-right: 30px; }\n  :host .navbar .cart-button {\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 60px;\n      height: 100%;\n      padding: 5px 5px 0 0;\n      cursor: pointer; }\n  :host .navbar .cart-button:hover {\n        background-color: #f6f6f6; }\n  :host .navbar .cart-button .cart {\n        width: 24px; }\n  :host .navbar .cart-button .counter {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 16px;\n        height: 16px;\n        border-radius: 50%;\n        background-color: #6736c7;\n        color: white;\n        font-size: 8px;\n        font-weight: 600; }\n  :host .navbar .mobile-menu-button {\n      display: none;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 60px;\n      height: 100%;\n      cursor: pointer; }\n  :host .navbar .mobile-menu-button:hover {\n        background-color: #f6f6f6; }\n  :host .navbar .mobile-menu-button .line {\n        width: 24px;\n        height: 2px;\n        background-color: black; }\n  :host .navbar .mobile-menu-button .line:not(:last-child) {\n          margin-bottom: 6px; }\n  @media (max-width: 767px) {\n  :host .navbar .menu {\n    display: none; }\n  :host .navbar .cart-button {\n    margin-left: auto; }\n  :host .navbar .mobile-menu-button {\n    display: flex; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXGRldlxcbmlrZS1zdG9yZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxkZXZcXG5pa2Utc3RvcmUvc3JjXFxhc3NldHNcXF9pbml0LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixzQ0FBcUMsRUFBQTtFQVB0QztJQVVHLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYyxFQUFBO0VBZmpCO01Ba0JLLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTtFQW5CdEI7TUFzQkssYUFBYTtNQUNiLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZ0JBQWdCLEVBQUE7RUF6QnJCO1FBNEJPLHlCQUF5QjtRQUN6Qix5QkFBaUI7V0FBakIsc0JBQWlCO1lBQWpCLHFCQUFpQjtnQkFBakIsaUJBQWlCO1FBQ2pCLGVBQWUsRUFBQTtFQTlCdEI7VUFpQ1MsY0NuQ3lCLEVBQUE7RURFbEM7VUFvQ1Msa0JBQWtCLEVBQUE7RUFwQzNCO01BdUNLLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixlQUFlLEVBQUE7RUE5Q3BCO1FBaURPLHlCQUFvQyxFQUFBO0VBakQzQztRQW9ETyxXQUFXLEVBQUE7RUFwRGxCO1FBdURPLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHlCQ2xFMkI7UURtRTNCLFlBQVk7UUFDWixjQUFjO1FBQ2QsZ0JBQWdCLEVBQUE7RUFuRXZCO01Bc0VLLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWUsRUFBQTtFQTVFcEI7UUErRU8seUJBQW9DLEVBQUE7RUEvRTNDO1FBa0ZPLFdBQVc7UUFDWCxXQUFXO1FBQ1gsdUJBQXVCLEVBQUE7RUFwRjlCO1VBdUZTLGtCQUFrQixFQUFBO0VBRTVCO0VBRUc7SUFLSyxhQUFhLEVBQUE7RUFMbEI7SUFRSyxpQkFBaUIsRUFBQTtFQVJ0QjtJQVdLLGFBQWEsRUFBQSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9pbml0XCI7XG5cbiA6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgLjMpO1xuXG4gIC5uYXZiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmxvZ28ge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxuXG4gICAgLm1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgbGkge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0OyB9XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH0gfSB9XG5cbiAgICAuY2FydC1idXR0b24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcGFkZGluZzogNXB4IDVweCAwIDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNDYsIDI0Nik7IH1cblxuICAgICAgLmNhcnQge1xuICAgICAgICB3aWR0aDogMjRweDsgfVxuXG4gICAgICAuY291bnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhpZ2hsaWdodDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfSB9XG5cbiAgICAubW9iaWxlLW1lbnUtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNDYsIDI0Nik7IH1cblxuICAgICAgLmxpbmUge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4OyB9IH0gfSB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgIDpob3N0IHtcblxuICAgIC5uYXZiYXIge1xuXG4gICAgICAubWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cblxuICAgICAgLmNhcnQtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxuICAgICAgLm1vYmlsZS1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH0gfSB9IH1cbiIsIiRjb2xvci1oaWdobGlnaHQ6IHJnYigxMDMsIDU0LCAxOTkpO1xuJGNvbG9yLWhpZ2hsaWdodC1kYXJrZXI6IHJnYig3OCwgNDMsIDE0OCk7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
        this.menuItems = ["Men", "Women", "Boys", "Girls", "Customize", "Collections"];
        this.counter = 0;
    }
    HeaderComponent.prototype.toggleCart = function () {
        this.dataService.toggleCart.next();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.itemsInCart.subscribe(function (itemsInCart) {
            _this.counter = itemsInCart;
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "nike-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/components/header/header.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/product-list/product-card/product-card.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/product-list/product-card/product-card.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"discount\" *ngIf=\"product.salePrice\">%</div>\n<img class=\"product-image\" src=\"{{ product.image }}\" alt=\"{{ product.name }}\" />\n<p class=\"name\">{{ product.name }}</p>\n<p class=\"price\">\n  <span class=\"inactive\" *ngIf=\"product.salePrice\">{{ \"€\" + product.normalPrice }} </span>\n  <span [ngClass]=\"{ highlight: product.salePrice }\">{{ product.salePrice ? \"€\" + product.salePrice : \"€\" + product.normalPrice }}</span>\n</p>\n<div class=\"variations\">\n  <div class=\"size\" title=\"Select size\" (click)=\"showSizes = true\">\n    <small>Size:</small>\n    <p>{{ product.selectedSize }}</p>\n  </div>\n  <div class=\"color\" title=\"Select color\" *ngIf=\"product.colors.length > 1\" (click)=\"showColors = true\">\n    <small>Color:</small>\n    <p>{{ product.selectedColor.name }}</p>\n  </div>\n</div>\n<button class=\"add-to-cart\" (click)=\"addToCart()\">\n  <img src=\"assets/images/cart_light.png\" alt=\"Cart\" />\n  <p>Add to Cart</p>\n</button>\n\n<div class=\"dimmed\" *ngIf=\"showColors || showSizes\" (click)=\"showSizes = false; showColors = false\" @dim></div>\n<div class=\"sizes\" [ngClass]=\"{ open: showSizes }\">\n  <div class=\"size\" *ngFor=\"let size of product.sizes\" (click)=\"selectSize(size)\">{{ size }}</div>\n</div>\n<div class=\"colors\" [ngClass]=\"{ open: showColors }\">\n  <div class=\"color\" *ngFor=\"let color of product.colors\" (click)=\"selectColor(color)\">\n    <img src=\"{{ color.image }}\" alt=\"\" />\n    <small>{{ color.name }}</small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product-list/product-card/product-card.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/components/product-list/product-card/product-card.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 420px;\n  margin: 15px;\n  background-color: white;\n  border: 1px solid #e9e9e9;\n  overflow: hidden; }\n  :host .discount {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: #f83838;\n    color: white;\n    font-weight: bold; }\n  :host .product-image {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: auto;\n    margin: 70px auto 30px; }\n  :host .name, :host .price {\n    align-self: center; }\n  :host .name {\n    margin-bottom: 5px;\n    font-weight: 600; }\n  :host .price {\n    display: flex;\n    align-items: center;\n    font-size: 30px;\n    font-weight: 600; }\n  :host .price .highlight {\n      color: red; }\n  :host .price .inactive {\n      margin-right: 10px;\n      font-size: 16px;\n      text-decoration: line-through;\n      opacity: .5; }\n  :host .variations {\n    display: flex;\n    justify-content: center;\n    margin: auto;\n    font-weight: 600; }\n  :host .variations .size, :host .variations .color {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 120px;\n      height: 60px;\n      padding: 0 10px;\n      cursor: pointer;\n      background-color: white; }\n  :host .variations .size:hover, :host .variations .color:hover {\n        background-color: #f6f6f6; }\n  :host .variations .size small, :host .variations .color small {\n        margin-bottom: 5px;\n        font-size: 12px;\n        opacity: .5; }\n  :host .add-to-cart {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 180px;\n    height: 40px;\n    margin: auto auto 15px;\n    border: none;\n    background-color: #6736c7;\n    color: white;\n    font-family: Montserrat, sans-serif;\n    font-size: 12px;\n    font-weight: bold;\n    text-transform: uppercase;\n    outline: none;\n    cursor: pointer; }\n  :host .add-to-cart:hover {\n      background-color: #4e2b94; }\n  :host .add-to-cart img {\n      margin-right: 10px; }\n  :host .add-to-cart p {\n      margin-top: 2px; }\n  .dimmed {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.33); }\n  .sizes, .colors {\n  position: absolute;\n  right: -100%;\n  width: 80%;\n  height: 100%;\n  padding: 15px;\n  background-color: white;\n  transition: right 250ms; }\n  .sizes.open, .colors.open {\n    right: 0; }\n  .sizes {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start; }\n  .sizes .size {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-basis: 33.33%;\n    height: 60px;\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer; }\n  .sizes .size:hover {\n      background-color: #f6f6f6; }\n  .colors .color {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 0 10px;\n  cursor: pointer; }\n  .colors .color:hover {\n    background-color: #f6f6f6; }\n  .colors .color img {\n    width: 45%;\n    margin-right: 15px; }\n  .colors .color small {\n    flex: 1;\n    font-size: 12px;\n    font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1jYXJkL0M6XFxkZXZcXG5pa2Utc3RvcmUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3QtbGlzdFxccHJvZHVjdC1jYXJkXFxwcm9kdWN0LWNhcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtY2FyZC9DOlxcZGV2XFxuaWtlLXN0b3JlL3NyY1xcYXNzZXRzXFxfaW5pdC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUFvQztFQUNwQyxnQkFBZ0IsRUFBQTtFQVRqQjtJQVlHLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUFrQztJQUNsQyxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUF2QnBCO0lBMEJHLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0IsRUFBQTtFQTVCekI7SUErQkcsa0JBQWtCLEVBQUE7RUEvQnJCO0lBa0NHLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQW5DbkI7SUFzQ0csYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUF6Q25CO01BNENLLFVBQVUsRUFBQTtFQTVDZjtNQStDSyxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixXQUFXLEVBQUE7RUFsRGhCO0lBcURHLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBeERuQjtNQTJESyxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFlBQVk7TUFDWixlQUFlO01BQ2YsZUFBZTtNQUNmLHVCQUF1QixFQUFBO0VBbkU1QjtRQXNFTyx5QkFBb0MsRUFBQTtFQXRFM0M7UUF5RU8sa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixXQUFXLEVBQUE7RUEzRWxCO0lBOEVHLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix5QkN2RitCO0lEd0YvQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlLEVBQUE7RUE1RmxCO01BK0ZLLHlCQ2hHbUMsRUFBQTtFREN4QztNQWtHSyxrQkFBa0IsRUFBQTtFQWxHdkI7TUFxR0ssZUFBZSxFQUFBO0VBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQW9DLEVBQUE7RUFFdEM7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQTtFQVB6QjtJQVVJLFFBQVEsRUFBQTtFQUVaO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUIsRUFBQTtFQUgzQjtJQU1JLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFibkI7TUFnQk0seUJBQW9DLEVBQUE7RUFFMUM7RUFHSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBO0VBUG5CO0lBVU0seUJBQW9DLEVBQUE7RUFWMUM7SUFhTSxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7RUFkeEI7SUFpQk0sT0FBTztJQUNQLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL2luaXRcIjtcblxuIDpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuZGlzY291bnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgNTYsIDU2KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuICAucHJvZHVjdC1pbWFnZSB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDcwcHggYXV0byAzMHB4OyB9XG5cbiAgLm5hbWUsIC5wcmljZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XG5cbiAgLm5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG5cbiAgLnByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAuaGlnaGxpZ2h0IHtcbiAgICAgIGNvbG9yOiByZWQ7IH1cblxuICAgIC5pbmFjdGl2ZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIG9wYWNpdHk6IC41OyB9IH1cblxuICAudmFyaWF0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIC5zaXplLCAuY29sb3Ige1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTsgfVxuXG4gICAgICBzbWFsbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBvcGFjaXR5OiAuNTsgfSB9IH1cblxuICAuYWRkLXRvLWNhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogYXV0byBhdXRvIDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0LWRhcmtlcjsgfVxuXG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7IH0gfSB9XG5cblxuLmRpbW1lZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMzMpOyB9XG5cbi5zaXplcywgLmNvbG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMDAlO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiByaWdodCAyNTBtcztcblxuICAmLm9wZW4ge1xuICAgIHJpZ2h0OiAwOyB9IH1cblxuLnNpemVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIC5zaXplIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1iYXNpczogMzMuMzMlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTsgfSB9IH1cblxuLmNvbG9ycyB7XG5cbiAgLmNvbG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTsgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cblxuICAgIHNtYWxsIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwOyB9IH0gfVxuIiwiJGNvbG9yLWhpZ2hsaWdodDogcmdiKDEwMywgNTQsIDE5OSk7XG4kY29sb3ItaGlnaGxpZ2h0LWRhcmtlcjogcmdiKDc4LCA0MywgMTQ4KTtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/product-list/product-card/product-card.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/product-list/product-card/product-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(dataService) {
        this.dataService = dataService;
        this.showSizes = false;
        this.showColors = false;
    }
    ProductCardComponent.prototype.selectColor = function (color) {
        this.product.image = color.image;
        this.product.selectedColor = color;
        this.showColors = false;
    };
    ProductCardComponent.prototype.selectSize = function (size) {
        this.product.selectedSize = size;
        this.showSizes = false;
    };
    ProductCardComponent.prototype.addToCart = function () {
        this.dataService.addToCart.next(this.deepClone(this.product));
    };
    ProductCardComponent.prototype.deepClone = function (obj) {
        var objStr = JSON.stringify(obj);
        return JSON.parse(objStr);
    };
    ProductCardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "nike-product-card",
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/components/product-list/product-card/product-card.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("dim", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("void => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("250ms 0ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 1
                        }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])("* => void", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 1
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("250ms 0ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 0
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./product-card.component.sass */ "./src/app/components/product-list/product-card/product-card.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/components/product-list/product-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products\">\n  <nike-product-card *ngFor=\"let product of products\" [product]=\"product\"></nike-product-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: calc(100vh - 50px);\n  padding-top: 30px;\n  overflow-y: auto; }\n\n.products {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  max-width: 990px;\n  margin: 0 auto; }\n\n.products .dummy-card {\n    flex: 1; }\n\n@media (max-width: 1023px) {\n  :host .products {\n    max-width: 900px;\n    justify-content: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvQzpcXGRldlxcbmlrZS1zdG9yZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQywwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBTGhCO0lBUUksT0FBTyxFQUFBOztBQUVYO0VBRUc7SUFHRyxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxuXG4ucHJvZHVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWF4LXdpZHRoOiA5OTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLmR1bW15LWNhcmQge1xuICAgIGZsZXg6IDE7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG5cbiAgIDpob3N0IHtcblxuICAgIC5wcm9kdWN0cyB7XG4gICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(dataService) {
        this.dataService = dataService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProducts().subscribe(function (products) {
            console.log(products);
            _this.products = products;
            _this.products.forEach(function (product) {
                product.selectedSize = product.sizes[0];
                product.selectedColor = product.colors[0];
            });
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "nike-product-list",
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.sass */ "./src/app/components/product-list/product-list.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/toast/toast.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/toast/toast.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<small>Added to cart:</small>\n<p>{{ message }}</p>\n<div class=\"close\" (click)=\"onClose()\"></div>\n"

/***/ }),

/***/ "./src/app/components/toast/toast.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/components/toast/toast.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  padding: 15px 45px 15px 30px;\n  background-color: black;\n  color: white;\n  font-weight: 600;\n  line-height: 1.4;\n  text-align: center; }\n  :host small {\n    margin-bottom: 10px;\n    font-size: 12px; }\n  :host .close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 16px;\n    height: 16px;\n    cursor: pointer; }\n  :host .close:before, :host .close:after {\n      position: absolute;\n      top: 7px;\n      content: \"\";\n      display: block;\n      width: 100%;\n      height: 1px;\n      background-color: white; }\n  :host .close:before {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n  :host .close:after {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2FzdC9DOlxcZGV2XFxuaWtlLXN0b3JlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b2FzdFxcdG9hc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFibkI7SUFnQkcsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtFQWpCbEI7SUFvQkcsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlLEVBQUE7RUF6QmxCO01BNEJLLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsV0FBVztNQUNYLGNBQWM7TUFDZCxXQUFXO01BQ1gsV0FBVztNQUNYLHVCQUF1QixFQUFBO0VBbEM1QjtNQXFDSyxnQ0FBd0I7Y0FBeEIsd0JBQXdCLEVBQUE7RUFyQzdCO01Bd0NLLGlDQUF5QjtjQUF6Qix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDE1cHggNDVweCAxNXB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBzbWFsbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7IH1cblxuICAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogN3B4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfSB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/toast/toast.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/toast/toast.component.ts ***!
  \*****************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



var ToastComponent = /** @class */ (function () {
    function ToastComponent(dataService) {
        this.dataService = dataService;
    }
    ToastComponent.prototype.onClose = function () {
        this.dataService.closeToast.next();
    };
    ToastComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToastComponent.prototype, "message", void 0);
    ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "nike-toast",
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/components/toast/toast.component.html"),
            styles: [__webpack_require__(/*! ./toast.component.sass */ "./src/app/components/toast/toast.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.addToCart = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.toggleCart = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.calcTotal = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.itemsInCart = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.closeToast = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DataService.prototype.getProducts = function () {
        return this.http.get("assets/products.json");
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\nike-store\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map