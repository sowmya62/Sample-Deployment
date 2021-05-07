(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/canvas/canvas.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/canvas/canvas.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    background: #F1F1FA;\r\n    width: 400px;\r\n    height: 300px;\r\n    display: block;\r\n    margin: 10px auto;\r\n    border: 0;\r\n  }"

/***/ }),

/***/ "./src/app/main/canvas/canvas.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/canvas/canvas.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"height: 200px !important;overflow-y: auto;\" id=\"notifications-list\" (scroll)=\"scrollHandler($event)\"\n  droppable>\n  <p>\n    canvas works!\n  </p>\n  <p>\n    canvas works!\n  </p>\n  <p>\n    canvas works!\n  </p>\n  <p>\n    canvas works!\n  </p>\n  <p>\n    canvas works!\n  </p>\n  <p>\n    canvas works!\n  </p>\n  <p>\n    canvas works!\n  </p>\n  <p>\n    canvas works!\n  </p>\n</div> -->\n<!-- <button (click)=\"openPopup()\">Add</button>\n<ng-template #addNum let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\"> <Strong>Add numbers\n      </Strong><br>\n    </h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('close')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>\n      Hi\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary btn-action\" data-dismiss=\"modal\" (click)=\"d('close')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary btn-action\" (click)=\"d('close')\">\n      Proceed\n    </button>\n  </div>\n</ng-template>\n<h3>Transfer Data via Drag Drop</h3>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <ul class=\"list-group\">\n      <li draggable *ngFor=\"let item of items\" [dragData]=\"item\" class=\"list-group-item\">{{item.name}}</li>\n    </ul>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <div class=\"panel panel-default\" droppable (onDrop)=\"onItemDrop($event)\">\n      <div class=\"panel-heading\">Drop Items here</div>\n      <div class=\"panel-body\">\n        <li *ngFor=\"let item of droppedItems\" class=\"list-group-item\">{{item.name}}</li>\n      </div>\n    </div>\n  </div>\n</div>-->\n<!-- <button (click)=\"open()\">Open new popup window</button> \n<div class=\"jumbotron\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n              <h3>Angular 6 Reactive Form Validation</h3>\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                      <label>First Name</label>\n                      <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                      <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Last Name</label>\n                      <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                      <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Email</label>\n                      <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Password</label>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                          <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <button class=\"btn btn-primary\">Register</button>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </div>\n</div> -->\n<!-- <div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <h1>Template driven form</h1>\n        <form #myForm=\"ngForm\" (ngSubmit)=\"onsubmit()\">\n          <p>\n            <label>Name: </label>\n            <input type=\"text\" [(ngModel)]=\"name1\" name=\"namee\" #namee = \"ngModel\" required>\n          </p>\n          <div>\n            <label>Password: </label>\n            <input type=\"text\" [(ngModel)]=\"password1\" name=\"password\" #password = \"ngModel\" required>\n            <div *ngIf=\"submitted && password.invalid\">\n                Password is mandatory\n            </div>\n          </div>\n          <p>\n            <button type=\"submit\" >Submit</button>\n          </p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n<div style=\"height: 1000px !important;overflow-y: auto;\" (scroll)=\"scrollHandler($event)\">\n  <img src=\"https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300\" />\n  <img src=\"https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-400,h-300\" />\n  <img src=\"https://ik.imagekit.io/demo/img/image3.jpg?tr=w-400,h-300\" />\n  <img class=\"lazy\" data-src=\"https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300\" />\n  <img class=\"lazy\" data-src=\"https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-400,h-300\" />\n  <img class=\"lazy\" data-src=\"https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-400,h-300\" />\n  <img class=\"lazy\" data-src=\"https://ik.imagekit.io/demo/img/image7.jpeg?tr=w-400,h-300\" />\n  <img class=\"lazy\" data-src=\"https://ik.imagekit.io/demo/img/image8.jpeg?tr=w-400,h-300\" />\n  <img class=\"lazy\" data-src=\"https://ik.imagekit.io/demo/img/image9.jpeg?tr=w-400,h-300\" />\n  <img class=\"lazy\" data-src=\"https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300\" />\n</div>\n"

/***/ }),

/***/ "./src/app/main/canvas/canvas.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/canvas/canvas.component.ts ***!
  \*************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../dashboard/header/header.component */ "./src/app/dashboard/header/header.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var src_app_shared_create_injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/create-injector */ "./src/app/shared/create-injector.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(modalService, overlay, injector, http, formBuilder) {
        var _this = this;
        this.modalService = modalService;
        this.overlay = overlay;
        this.injector = injector;
        this.http = http;
        this.formBuilder = formBuilder;
        this.imgOptions = {};
        this.arr = [];
        this.modal_options = {
            size: 'lg',
            backdrop: 'static'
        };
        this.submitted = false;
        this.droppedItems = [{ name: "Car", type: "vege" },];
        this.items = [
            { name: "Apple", type: "fruit" },
            { name: "Carrot", type: "vegetable" },
            { name: "Orange", type: "fruit" }
        ];
        this.imgObserver = new IntersectionObserver(function (entries, imgObserver) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    _this.preloadImg(entry.target);
                    imgObserver.unobserve(entry.target);
                }
            });
        });
    }
    CanvasComponent.prototype.onItemDrop = function (e) {
        // Get the dropped data here
        this.droppedItems.push(e.dragData);
    };
    CanvasComponent.prototype.ngOnInit = function () {
        this.imgs = document.querySelectorAll('[data-src]');
        // this.onsubmit()
        // this.getData();
        // let a = [2, 3, 4]
        // let bb = deepCopy(a)
        // a.push(33)
        // console.log(bb)
        // console.log(a)
        // this.registerForm = this.formBuilder.group({
        //   firstName: ['', Validators.required],
        //   lastName: ['', Validators.required],
        //   email: ['', [Validators.required, Validators.email]],
        //   password: ['', [Validators.required, Validators.minLength(6)]]
        // });
    };
    CanvasComponent.prototype.openPopup = function () {
        // this.modalService.open(this.addNum,this.modal_options);
        var positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        var overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        var injector = Object(src_app_shared_create_injector__WEBPACK_IMPORTED_MODULE_5__["createInjector"])({
            data: {
                'val': true
            }
        }, this.injector);
        this.overlayRef = overlayRef;
        var dialog = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"], null, injector);
        var componentRef = overlayRef.attach(dialog);
        overlayRef.backdropClick().subscribe(function (_) { return overlayRef.dispose(); });
    };
    CanvasComponent.prototype.scrollHandler = function () {
        var _this = this;
        console.log("hiii");
        setTimeout(function () {
            _this.loadss();
        }, 200);
    };
    CanvasComponent.prototype.getData = function () {
        // let url = "assets/jsons/demo.json"
        // this.http.get(url).subscribe(data =>{console.log(data)})
        var url = "assets/files/ex.txt";
        this.http.get(url, { responseType: 'text' }).subscribe(function (data) { console.log(data); });
    };
    CanvasComponent.prototype.open = function () {
        var height = 400;
        var width = 400;
        var left = (window.screen.width / 2) - ((width / 2) + 10);
        var top = (window.screen.height / 2) - ((height / 2) + 50);
        var fluxaloginObj = open("http://google.com", 'popUpWindow', 'status=no,height=' + height + ',width=' + width + ',resizable=yes,left='
            + left + ',top=' + top + ',screenX=' + left + ',screenY='
            + top + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');
        // window.open('http://google.com','popUpWindow','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    };
    Object.defineProperty(CanvasComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    CanvasComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    };
    CanvasComponent.prototype.onsubmit = function () {
        this.submitted = true;
        console.log("submitted");
    };
    CanvasComponent.prototype.preloadImg = function (img) {
        var src = img.getAttribute('data-src');
        if (!src) {
            return;
        }
        img.src = src;
    };
    CanvasComponent.prototype.loadss = function () {
        for (var i = 0; i < this.imgs.length; i++)
            this.imgObserver.observe(this.imgs[i]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addNum'),
        __metadata("design:type", Object)
    ], CanvasComponent.prototype, "addNum", void 0);
    CanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/main/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/main/canvas/canvas.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/main/canvas/canvas.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'canvas',
        pathMatch: 'full'
    },
    { path: 'canvas', component: _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_0__["CanvasComponent"] },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

// import {Overlay} '@angular/cdk/overlay'
var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/main/canvas/canvas.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { OverlayModule } from '@angular/cdk/overlay';

var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
                // OverlayModule
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__["NgDragDropModule"].forRoot()
            ],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__["CanvasComponent"]],
            entryComponents: [_dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
        })
    ], MainModule);
    return MainModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map