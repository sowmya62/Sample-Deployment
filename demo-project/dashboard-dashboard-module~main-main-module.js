(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module~main-main-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_guards_allow_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth-guards/allow.guard */ "./src/app/shared/auth-guards/allow.guard.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/dashboard/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_shared_auth_guards_allow_guard__WEBPACK_IMPORTED_MODULE_2__["AllowGuard"]] },
    { path: 'header/:number', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/dashboard/header/header.component.ts");
/* harmony import */ var _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/highlight.directive */ "./src/app/shared/directives/highlight.directive.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"]],
            providers: [],
            entryComponents: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p appHighlight>\n  header works!\n</p>{{result}}{{newRes}} -->\n<ng-template #addNum let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\"> <Strong>Add numbers\n      </Strong><br>\n    </h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\"\n      (click)=\"d('close')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>\n     Hi\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-action\" data-dismiss=\"modal\"\n      (click)=\"d('close')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary btn-action\" (click)=\"d('close')\">\n      Proceed\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/dashboard/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var src_app_shared_utilities_dashboard_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utilities/dashboard-util */ "./src/app/shared/utilities/dashboard-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dashboardService, route, modalService) {
        this.dashboardService = dashboardService;
        this.route = route;
        this.modalService = modalService;
        this.color = "green";
        this.modal_options = {
            size: 'lg',
            backdrop: 'static'
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.param = _this.route.snapshot.params['number'];
            console.log(_this.param);
        });
        console.log(this.dashboardService.mainResult);
        this.display();
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.openPopup(); });
    };
    HeaderComponent.prototype.openPopup = function () {
        this.popupModal = this.modalService.open(this.addNum, this.modal_options);
    };
    HeaderComponent.prototype.display = function () {
        this.dashboardService.mainResult = 6;
        console.log(this.dashboardService.mainResult);
        this.result = Object(src_app_shared_utilities_dashboard_util__WEBPACK_IMPORTED_MODULE_4__["test"])(2, 5);
        this.newRes = this.dashboardService.displayVal(6, 7);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addNum'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "addNum", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/dashboard/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/dashboard/header/header.component.css")],
        }),
        __metadata("design:paramtypes", [src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    display: flex;\r\n    height: 5rem;\r\n}\r\n.col-md-1,.col-md-4,.col-md-8,.col-md-6{\r\n    border: 0.1rem solid black;\r\n}\r\n.p-t-5{\r\n    padding-top: 1rem;\r\n}\r\n.m-r-5{\r\n    margin-right: 0.5rem;\r\n}\r\n.btn .badge{\r\n    background: black;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h3>Grid Basic</h3>\n\n<div class=\"row\">\n  <div class=\"col-md-1\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-1\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-4\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n  <div class=\"col-md-4\" style=\"background-color:lavender;width:100%\">span 1</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-8\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\" style=\"background-color:lavender;width:100%\">span 1</div>\n  <div class=\"col-md-6\" style=\"background-color:lavenderblush;width:100%\">span 1</div>\n</div>\n<h3>Typography</h3>\n<div>\n  <p class=\"bg-primary\">This text is important.</p>\n  <p class=\"bg-success\">This text indicates success.</p>\n  <p class=\"bg-info\">This text represents some information.</p>\n  <p class=\"bg-warning\">This text represents a warning.</p>\n  <p class=\"bg-danger\">This text represents danger.</p>\n</div>\n<div class=\"p-t-5\">\n  <button type=\"button\" class=\"btn m-r-5\">Basic</button>\n  <button type=\"button\" class=\"btn btn-default m-r-5\">Default</button>\n  <button type=\"button\" class=\"btn btn-primary m-r-5\">Primary</button>\n  <button type=\"button\" class=\"btn btn-success m-r-5\">Success</button>\n  <button type=\"button\" class=\"btn btn-info m-r-5\">Info</button>\n  <button type=\"button\" class=\"btn btn-warning m-r-5\">Warning</button>\n  <button type=\"button\" class=\"btn btn-danger m-r-5\">Danger</button>\n  <button type=\"button\" class=\"btn btn-link m-r-5\">Link</button>\n</div>\n<div class=\"p-t-5\">\n  <a href=\"#\" class=\"btn btn-info m-r-5\" role=\"button\">Link Button</a>\n  <button type=\"button\" class=\"btn btn-info m-r-5\">Button</button>\n  <input type=\"button\" class=\"btn btn-info m-r-5\" value=\"Input Button\">\n  <input type=\"submit\" class=\"btn btn-info m-r-5\" value=\"Submit Button\">\n</div>\n<div class=\"btn-group p-t-5\">\n  <button type=\"button\" class=\"btn btn-primary\">Apple</button>\n  <button type=\"button\" class=\"btn btn-primary\">Samsung</button>\n  <div class=\"btn-group\">\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n    Sony <span class=\"caret\"></span></button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li><a href=\"#\">Tablet</a></li>\n      <li><a href=\"#\">Smartphone</a></li>\n    </ul>\n  </div>\n</div>\n<div class=\"btn-group p-t-5\">\n  <button type=\"button\" class=\"btn btn-primary\">Sony</button>\n  <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" role=\"menu\">\n    <li><a href=\"#\">Tablet</a></li>\n    <li><a href=\"#\">Smartphone</a></li>\n  </ul>\n</div>\n<div class=\"p-t-5\">\n  <div class=\"btn-group\">\n    <button type=\"button\" class=\"btn btn-primary\">Apple</button>\n    <button type=\"button\" class=\"btn btn-primary\">Samsung</button>\n    <button type=\"button\" class=\"btn btn-primary\">Sony</button>\n  </div>\n</div>\n<div class=\"p-t-5\">\n  <div class=\"btn-group-vertical\">\n    <button type=\"button\" class=\"btn btn-primary\">Apple</button>\n    <button type=\"button\" class=\"btn btn-primary\">Samsung</button>\n    <button type=\"button\" class=\"btn btn-primary\">Sony</button>  \n  </div>\n</div>\n<div class=\"p-t-5\">\n  <button type=\"button\" class=\"btn btn-primary\">Primary <span class=\"badge\">7</span></button>\n    <button type=\"button\" class=\"btn btn-success\">Success <span class=\"badge\">3</span></button>    \n    <button type=\"button\" class=\"btn btn-danger\">Danger <span class=\"badge\">5</span></button>\n</div>\n\n  -->\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_create_injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/create-injector */ "./src/app/shared/create-injector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(saveSharedInputs) {
        this.saveSharedInputs = saveSharedInputs;
        console.log(this.saveSharedInputs);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(src_app_shared_create_injector__WEBPACK_IMPORTED_MODULE_1__["CONTAINER_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth-guards/allow.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth-guards/allow.guard.ts ***!
  \***************************************************/
/*! exports provided: AllowGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowGuard", function() { return AllowGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AllowGuard = /** @class */ (function () {
    function AllowGuard() {
    }
    AllowGuard.prototype.canActivate = function (next, state) {
        return true; // send false for not allowing
    };
    AllowGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AllowGuard);
    return AllowGuard;
}());



/***/ }),

/***/ "./src/app/shared/create-injector.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/create-injector.ts ***!
  \*******************************************/
/*! exports provided: CONTAINER_DATA, createInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_DATA", function() { return CONTAINER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInjector", function() { return createInjector; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");


var CONTAINER_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CONTAINER_DATA');
function createInjector(dataToPass, injector) {
    var injectorTokens = new WeakMap();
    injectorTokens.set(CONTAINER_DATA, dataToPass);
    return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](injector, injectorTokens);
}


/***/ }),

/***/ "./src/app/shared/directives/highlight.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/highlight.directive.ts ***!
  \**********************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.element = el;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight('yellow');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.element.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/shared/utilities/dashboard-util.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/utilities/dashboard-util.ts ***!
  \****************************************************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
function test(a, b) {
    return a + b;
}


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module~main-main-module.js.map