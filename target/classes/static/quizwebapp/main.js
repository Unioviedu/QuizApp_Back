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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container main-container\">\n\n    <div *ngIf=\"alertException\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n        <h4 class=\"alert-heading\">Oh, no!</h4>\n        <p>Ha ocurrido un error fuera de nuestro alcance, cuando seas programador podremos explicarte el porque. Hasta entonces, espera unos minutos a ver si se arregla solo.</p>\n        <button type=\"button\" class=\"close\" (click)=\"closeException()\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <router-outlet></router-outlet>\n\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_exception_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/exception.service */ "./src/app/shared/services/exception.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(exceptionService) {
        var _this = this;
        this.exceptionService = exceptionService;
        this.title = 'quizwebapp';
        this.subscription = this.exceptionService
            .getException()
            .subscribe(function (status) {
            if (status != 400) {
                _this.status = status;
                _this.alertException = true;
            }
        });
    }
    AppComponent.prototype.closeException = function () {
        this.alertException = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_exception_service__WEBPACK_IMPORTED_MODULE_1__["ExceptionService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/services/jwt.interceptor */ "./src/app/login/services/jwt.interceptor.ts");
/* harmony import */ var _history_history_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history/history.module */ "./src/app/history/history.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _competitive_competitive_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./competitive/competitive.module */ "./src/app/competitive/competitive.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _history_history_module__WEBPACK_IMPORTED_MODULE_7__["HistoryModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__["ProfileModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"],
                _competitive_competitive_module__WEBPACK_IMPORTED_MODULE_11__["CompetitiveModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _login_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/components/login/login.component */ "./src/app/login/components/login/login.component.ts");
/* harmony import */ var _login_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/services/auth.guard */ "./src/app/login/services/auth.guard.ts");




var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_login_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _login_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/competitive/competitive.module.ts":
/*!***************************************************!*\
  !*** ./src/app/competitive/competitive.module.ts ***!
  \***************************************************/
/*! exports provided: CompetitiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitiveModule", function() { return CompetitiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_competitive_home_competitive_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/competitive-home/competitive-home.component */ "./src/app/competitive/components/competitive-home/competitive-home.component.ts");
/* harmony import */ var _competitive_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competitive.routing */ "./src/app/competitive/competitive.routing.ts");
/* harmony import */ var _components_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-question/create-question.component */ "./src/app/competitive/components/create-question/create-question.component.ts");
/* harmony import */ var _components_create_question_question_types_create_question_option_create_question_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-question/question-types/create-question-option/create-question-option.component */ "./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.ts");
/* harmony import */ var _components_create_question_question_types_create_question_code_block_create_question_code_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-question/question-types/create-question-code-block/create-question-code-block.component */ "./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_play_question_play_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/play-question/play-question.component */ "./src/app/competitive/components/play-question/play-question.component.ts");
/* harmony import */ var _components_play_question_directives_question_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/play-question/directives/question.directive */ "./src/app/competitive/components/play-question/directives/question.directive.ts");
/* harmony import */ var _question_question_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../question/question.module */ "./src/app/question/question.module.ts");
/* harmony import */ var _components_create_question_generic_question_generic_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-question/generic-question/generic-question.component */ "./src/app/competitive/components/create-question/generic-question/generic-question.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CompetitiveModule = /** @class */ (function () {
    function CompetitiveModule() {
    }
    CompetitiveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _competitive_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _question_question_module__WEBPACK_IMPORTED_MODULE_10__["QuestionModule"]
            ],
            declarations: [
                _components_competitive_home_competitive_home_component__WEBPACK_IMPORTED_MODULE_2__["CompetitiveHomeComponent"],
                _components_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_4__["CreateQuestionComponent"],
                _components_create_question_question_types_create_question_option_create_question_option_component__WEBPACK_IMPORTED_MODULE_5__["CreateQuestionOptionComponent"],
                _components_create_question_question_types_create_question_code_block_create_question_code_block_component__WEBPACK_IMPORTED_MODULE_6__["CreateQuestionCodeBlockComponent"],
                _components_play_question_play_question_component__WEBPACK_IMPORTED_MODULE_8__["PlayQuestionComponent"],
                _components_play_question_directives_question_directive__WEBPACK_IMPORTED_MODULE_9__["QuestionDirective"],
                _components_create_question_generic_question_generic_question_component__WEBPACK_IMPORTED_MODULE_11__["GenericQuestionComponent"]
            ]
        })
    ], CompetitiveModule);
    return CompetitiveModule;
}());



/***/ }),

/***/ "./src/app/competitive/competitive.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/competitive/competitive.routing.ts ***!
  \****************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/services/auth.guard */ "./src/app/login/services/auth.guard.ts");
/* harmony import */ var _components_competitive_home_competitive_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/competitive-home/competitive-home.component */ "./src/app/competitive/components/competitive-home/competitive-home.component.ts");
/* harmony import */ var _components_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-question/create-question.component */ "./src/app/competitive/components/create-question/create-question.component.ts");
/* harmony import */ var _components_play_question_play_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/play-question/play-question.component */ "./src/app/competitive/components/play-question/play-question.component.ts");





var appRoutes = [
    { path: 'competitive', component: _components_competitive_home_competitive_home_component__WEBPACK_IMPORTED_MODULE_2__["CompetitiveHomeComponent"], canActivate: [_login_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'createQuestion', component: _components_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_3__["CreateQuestionComponent"], canActivate: [_login_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'playQuestion', component: _components_play_question_play_question_component__WEBPACK_IMPORTED_MODULE_4__["PlayQuestionComponent"], canActivate: [_login_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes);


/***/ }),

/***/ "./src/app/competitive/components/competitive-home/competitive-home.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/competitive/components/competitive-home/competitive-home.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/competitive/components/competitive-home/competitive-home.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/competitive/components/competitive-home/competitive-home.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Mode competitive</h1>\r\n<hr>\r\n\r\n<div class=\"row text-center\">\r\n    <div class=\"col-sm-6\" style=\"margin-bottom: 15px;\">\r\n        <div class=\"card\" style=\"height:100%\">\r\n            <div>\r\n                <img class=\"card-img-top\" src=\"assets/play.jpeg\" style=\"height:30%;\" alt=\"Card image cap\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h1 class=\"card-title\">Play!</h1>\r\n                <hr>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <button (click)=\"play()\" class=\"btn btn-primary\">Go somewhere</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\" style=\"height:100%\">\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <img class=\"card-img-top\" src=\"assets/build.png\" style=\"height:30%;\" alt=\"Card image cap\">\r\n                </div>\r\n                <h1 class=\"card-title\">Create!</h1>\r\n                <hr>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <button (click)=\"createQuestion()\" class=\"btn btn-primary\">Go somewhere</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/competitive/components/competitive-home/competitive-home.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/competitive/components/competitive-home/competitive-home.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CompetitiveHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitiveHomeComponent", function() { return CompetitiveHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompetitiveHomeComponent = /** @class */ (function () {
    function CompetitiveHomeComponent(router) {
        this.router = router;
    }
    CompetitiveHomeComponent.prototype.ngOnInit = function () {
    };
    CompetitiveHomeComponent.prototype.createQuestion = function () {
        this.router.navigate(['/createQuestion']);
    };
    CompetitiveHomeComponent.prototype.play = function () {
        this.router.navigate(['/playQuestion']);
    };
    CompetitiveHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-competitive-home',
            template: __webpack_require__(/*! ./competitive-home.component.html */ "./src/app/competitive/components/competitive-home/competitive-home.component.html"),
            styles: [__webpack_require__(/*! ./competitive-home.component.css */ "./src/app/competitive/components/competitive-home/competitive-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CompetitiveHomeComponent);
    return CompetitiveHomeComponent;
}());



/***/ }),

/***/ "./src/app/competitive/components/create-question/create-question.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/create-question.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/competitive/components/create-question/create-question.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/create-question.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card \">\r\n    <div class=\"card-header\">\r\n        <ul class=\"nav nav-tabs card-header-tabs pull-right\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#options\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Options</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#codeBlock\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">CodeBlock</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tab-content\" id=\"myTabContent\">\r\n            <div class=\"tab-pane fade show active\" id=\"options\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                <app-create-question-option (newQuestionEvent)=\"newQuestion($event)\"></app-create-question-option>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"codeBlock\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                <app-create-question-code-block (newQuestionEvent)=\"newQuestion($event)\"></app-create-question-code-block>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" #modalCreated tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Question created!</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Ya has creado la pregunta. ¿Quieres seguir creando preguntas?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"continue()\">Continue</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"exit()\">Exit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/competitive/components/create-question/create-question.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/create-question.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionComponent", function() { return CreateQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_competitive_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/competitive.services */ "./src/app/competitive/services/competitive.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateQuestionComponent = /** @class */ (function () {
    function CreateQuestionComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    CreateQuestionComponent.prototype.ngOnInit = function () {
    };
    CreateQuestionComponent.prototype.newQuestion = function (newQuestion) {
        var _this = this;
        this.service
            .createNewQuestion(newQuestion).subscribe(function (data) {
            jQuery(_this.myModal.nativeElement).modal('show');
        }, function (error) {
        });
    };
    CreateQuestionComponent.prototype.continue = function () {
        var _this = this;
        this.router
            .navigateByUrl('/RefrshComponent', { skipLocationChange: true })
            .then(function () {
            return _this.router.navigate(['/createQuestion']);
        });
    };
    CreateQuestionComponent.prototype.exit = function () {
        this.router.navigate(['/competitive']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalCreated'),
        __metadata("design:type", Object)
    ], CreateQuestionComponent.prototype, "myModal", void 0);
    CreateQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-question',
            template: __webpack_require__(/*! ./create-question.component.html */ "./src/app/competitive/components/create-question/create-question.component.html"),
            styles: [__webpack_require__(/*! ./create-question.component.css */ "./src/app/competitive/components/create-question/create-question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_competitive_services__WEBPACK_IMPORTED_MODULE_2__["CompetitiveService"]])
    ], CreateQuestionComponent);
    return CreateQuestionComponent;
}());



/***/ }),

/***/ "./src/app/competitive/components/create-question/generic-question/generic-question.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/generic-question/generic-question.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/competitive/components/create-question/generic-question/generic-question.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/generic-question/generic-question.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"questionForm\">\n\n  <div class=\"form-group\" style=\"width: 100%;\">\n      <label>Titulo</label>\n      <input formControlName=\"title\" type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': (q.title.touched || submitted ) && q.title.errors }\">\n      <div *ngIf=\"(q.title.touched || submitted ) && q.title.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"q.title.errors.required\">El titulo no puede estar vacio</div>\n      </div>\n  </div>\n\n  <div class=\"form-group\" style=\"width: 100%\">\n      <label for=\"exampleInputPassword1\">Statement</label>\n      <textarea formControlName=\"statement\" rows=\"8\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': (q.statement.touched || submitted ) && q.statement.errors }\"></textarea>\n      <div *ngIf=\"(q.statement.touched || submitted ) && q.statement.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"q.statement.errors.required\">El enunciado no puede estar vacio</div>\n      </div>\n  </div>\n\n  <div class=\"form-group\" style=\"width: 100%\">\n      <label style=\"margin-right: 4px\">Código</label>\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-toggle=\"collapse\" (click)=\"toggleCodeBlock()\" data-target=\"#collapseCode\"\n          aria-expanded=\"false\" aria-controls=\"collapseExample\">\n          {{nameToggleCode}}\n      </button>\n      <div class=\"collapse\" id=\"collapseCode\" style=\"margin-top: 10px\">\n          <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <label class=\"input-group-text\">Lenguaje</label>\n              </div>\n              <select class=\"custom-select\" id=\"inputGroupSelect01\" formControlName=\"language\">\n                <option value=\"javascript\" selected>Javascript</option>\n                <option value=\"html\">HTML</option>\n                <option value=\"css\">CSS</option>\n              </select>\n            </div>\n          <textarea formControlName=\"codeBlock\" rows=\"8\" class=\"form-control\"></textarea>\n      </div>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/competitive/components/create-question/generic-question/generic-question.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/generic-question/generic-question.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: GenericQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericQuestionComponent", function() { return GenericQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenericQuestionComponent = /** @class */ (function () {
    function GenericQuestionComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.nameToggleCode = "Mostrar";
        this.questionForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
            statement: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            codeBlock: ['', []],
            language: ['', []]
        });
    }
    GenericQuestionComponent.prototype.ngOnInit = function () {
    };
    GenericQuestionComponent.prototype.toggleCodeBlock = function () {
        if (this.toggleCode) {
            this.nameToggleCode = "Mostrar";
            this.toggleCode = false;
        }
        else {
            this.nameToggleCode = "Ocultar";
            this.toggleCode = true;
        }
    };
    Object.defineProperty(GenericQuestionComponent.prototype, "q", {
        get: function () {
            return this.questionForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    GenericQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generic-question',
            template: __webpack_require__(/*! ./generic-question.component.html */ "./src/app/competitive/components/create-question/generic-question/generic-question.component.html"),
            styles: [__webpack_require__(/*! ./generic-question.component.css */ "./src/app/competitive/components/create-question/generic-question/generic-question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], GenericQuestionComponent);
    return GenericQuestionComponent;
}());



/***/ }),

/***/ "./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col-sm-6\">\r\n        <app-generic-question></app-generic-question>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"form-group\" style=\"width: 100%\">\r\n\r\n            <form [formGroup]=\"optionsForm\">\r\n\r\n                <div class=\"form-group\" style=\"width: 100%;\">\r\n                    <label for=\"exampleInputEmail1\">Options</label>\r\n                    <div class=\"input-group mb-3\" *ngFor=\"let option of options;let i = index\">\r\n                        <input (input)=\"onOptionChange($event.target.value, option)\" type=\"text\" formControlName=\"{{option.id}}\"\r\n                            class=\"form-control\" [ngClass]=\"getNgClass(option.id)\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-warning\" (click)=\"convertInCorrect(option)\" type=\"button\"><span\r\n                                    class=\"{{option.icon}}\"></span></button>\r\n                        </div>\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"removeOption(option)\" type=\"button\"><span\r\n                                    class=\"fa fa-close\"></span></button>\r\n                        </div>\r\n                        <div *ngIf=\"getIfOption(option.id, 0)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"getIfOption(option.id, 1)\">La opcion no puede estar vacia</div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"isLastOption\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                        Tiene que haber por lo menos dos opciones.\r\n                    </div>\r\n                    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                            <button (click)=\"addOption()\" type=\"button\" class=\"btn btn-success btn-xs\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" style=\"width: 100%;\">\r\n                    <label for=\"exampleInputEmail1\">Correct Options</label>\r\n                    <div class=\"input-group mb-3\" *ngFor=\"let option of correctOptions;let i = index\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">{{i+1}}</span>\r\n                        </div>\r\n                        <input type=\"text\" formControlName=\"correct{{option.id}}\" class=\"form-control\" readonly=true>\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"removeCorrectOption(option)\" type=\"button\"><span\r\n                                    class=\"fa fa-close\"></span></button>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"isLastOptionCorrect\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                        Tiene que haber por lo menos una opcion correcta.\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<hr>\r\n<button (click)=\"save()\" type=\"submit\" class=\"btn btn-primary\">Submit</button>"

/***/ }),

/***/ "./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: CreateQuestionCodeBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionCodeBlockComponent", function() { return CreateQuestionCodeBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_optionCodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/optionCodeBlock */ "./src/app/competitive/components/create-question/question-types/model/optionCodeBlock.ts");
/* harmony import */ var _generic_question_generic_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic-question/generic-question.component */ "./src/app/competitive/components/create-question/generic-question/generic-question.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateQuestionCodeBlockComponent = /** @class */ (function () {
    function CreateQuestionCodeBlockComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.iconNoCorrectOption = 'fa fa-star-o';
        this.iconCorrectOption = 'fa fa-star';
        this.newQuestionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contById = 0;
        this.options = [];
        this.correctOptions = [];
        var firstOption = new _model_optionCodeBlock__WEBPACK_IMPORTED_MODULE_2__["OptionCodeBlock"](this.contById);
        this.contById++;
        var secondOption = new _model_optionCodeBlock__WEBPACK_IMPORTED_MODULE_2__["OptionCodeBlock"](this.contById);
        secondOption.icon = this.iconNoCorrectOption;
        this.options.push(firstOption);
        this.options.push(secondOption);
        this.optionsForm = this.createForm();
        this.convertInCorrect(firstOption);
    }
    CreateQuestionCodeBlockComponent.prototype.ngOnInit = function () {
    };
    CreateQuestionCodeBlockComponent.prototype.convertInCorrect = function (option) {
        var indexCorrect = this.correctOptions.indexOf(option);
        if (indexCorrect === -1) {
            this.correctOptions.push(option);
            var value = this.optionsForm.controls[option.id].value;
            this.optionsForm.controls['correct' + option.id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
            this.optionsForm.controls['correct' + option.id].setValue(value);
            var index = this.options.indexOf(option);
            this.options[index].icon = this.iconCorrectOption;
        }
    };
    CreateQuestionCodeBlockComponent.prototype.onOptionChange = function (value, option) {
        var index = this.correctOptions.indexOf(option);
        if (index > -1) {
            this.optionsForm.controls['correct' + option.id].setValue(value);
        }
    };
    CreateQuestionCodeBlockComponent.prototype.removeOption = function (option) {
        if (this.options.length == 2) {
            this.isLastOption = true;
            return;
        }
        var index = this.options.indexOf(option);
        this.options.splice(index, 1);
        delete this.optionsForm.controls[option.id];
        index = this.correctOptions.indexOf(option);
        if (index > -1) {
            this.correctOptions.splice(index, 1);
            delete this.optionsForm.controls['correct' + option.id];
        }
    };
    CreateQuestionCodeBlockComponent.prototype.addOption = function () {
        this.contById++;
        var option = new _model_optionCodeBlock__WEBPACK_IMPORTED_MODULE_2__["OptionCodeBlock"](this.contById);
        option.icon = this.iconNoCorrectOption;
        this.optionsForm.controls[option.id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.options.push(option);
    };
    CreateQuestionCodeBlockComponent.prototype.removeCorrectOption = function (option) {
        if (this.correctOptions.length == 1) {
            this.isLastOptionCorrect = true;
            return;
        }
        var index = this.correctOptions.indexOf(option);
        this.correctOptions.splice(index, 1);
        delete this.optionsForm.controls['correct' + option.id];
        index = this.options.indexOf(option);
        this.options[index].icon = this.iconNoCorrectOption;
    };
    CreateQuestionCodeBlockComponent.prototype.createForm = function () {
        var group = {};
        this.options.forEach(function (option) {
            group[option.id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    CreateQuestionCodeBlockComponent.prototype.save = function () {
        this.submitted = true;
        this.genericQuestion.submitted = true;
        var questionForm = this.genericQuestion.questionForm;
        var optionsForm = this.optionsForm;
        if (questionForm.invalid || optionsForm.invalid) {
            return;
        }
        var q = questionForm.controls;
        var o = optionsForm.controls;
        var optionsObj = [];
        var correctOptionsObj = [];
        this.options.forEach(function (option) {
            var value = o[option.id].value;
            optionsObj.push(value);
        });
        this.correctOptions.forEach(function (correctOption) {
            var value = o['correct' + correctOption.id].value;
            correctOptionsObj.push(value);
        });
        var withCode = this.genericQuestion.toggleCode;
        var newQuestion = {
            'title': q.title.value,
            'statement': q.statement.value,
            'type': 'codeBlock',
            'codeBlock': withCode ? q.codeBlock.value : null,
            'programmingLanguage': withCode ? q.language.value : null,
            'codeBlocksOptions': optionsObj,
            'codeBlocksCorrect': correctOptionsObj
        };
        this.newQuestionEvent.emit(newQuestion);
    };
    CreateQuestionCodeBlockComponent.prototype.getIfOption = function (id, type) {
        var o = this.optionsForm.controls;
        if (type == 0) {
            return (o[id].touched || this.submitted) && o[id].errors;
        }
        else if (type == 1) {
            return o[id].errors.required;
        }
    };
    CreateQuestionCodeBlockComponent.prototype.getNgClass = function (id) {
        var o = this.optionsForm.controls;
        return { 'is-invalid': (o[id].touched || this.submitted) && o[id].errors };
    };
    CreateQuestionCodeBlockComponent.prototype.closeAlert = function () {
        this.isLastOption = false;
        this.isLastOptionCorrect = false;
    };
    Object.defineProperty(CreateQuestionCodeBlockComponent.prototype, "q", {
        get: function () {
            return this.questionForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_generic_question_generic_question_component__WEBPACK_IMPORTED_MODULE_3__["GenericQuestionComponent"]),
        __metadata("design:type", _generic_question_generic_question_component__WEBPACK_IMPORTED_MODULE_3__["GenericQuestionComponent"])
    ], CreateQuestionCodeBlockComponent.prototype, "genericQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateQuestionCodeBlockComponent.prototype, "newQuestionEvent", void 0);
    CreateQuestionCodeBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-question-code-block',
            template: __webpack_require__(/*! ./create-question-code-block.component.html */ "./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.html"),
            styles: [__webpack_require__(/*! ./create-question-code-block.component.css */ "./src/app/competitive/components/create-question/question-types/create-question-code-block/create-question-code-block.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateQuestionCodeBlockComponent);
    return CreateQuestionCodeBlockComponent;
}());



/***/ }),

/***/ "./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.css":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col-sm-6\">\r\n        <app-generic-question></app-generic-question>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"form-group\" style=\"width: 100%\">\r\n\r\n            <form [formGroup]=\"optionsForm\">\r\n                <div class=\"form-group\" style=\"width: 100%;\">\r\n\r\n                    <label>Opciones</label>\r\n                    <div class=\"input-group mb-3\" *ngFor=\"let option of options;let i = index\">\r\n                        <input [formControlName]=\"option\" type=\"text\" class=\"form-control\" [ngClass]=\"getNgClass(option)\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <input formControlName=\"{{option}}isCorrect\" type=\"checkbox\" (change)=\"changeIsCorrectOption(option)\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"removeOption(option)\" type=\"button\"><span\r\n                                    class=\"fa fa-close\"></span></button>\r\n                        </div>\r\n                        <div *ngIf=\"getIfOption(option, 0)\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"getIfOption(option, 1)\">La opcion no puede estar vacia</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isLastOption\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                        Tiene que haber por lo menos dos opciones.\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isLastOptionCorrect\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                        Tiene que haber por lo menos una opcion correcta.\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isAllOptionCorrect\" class=\"alert alert-danger\" role=\"alert\">\r\n                        <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                        No todas las opciones pueden ser correctas.\r\n                    </div>\r\n\r\n                    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                            <button (click)=\"addOption()\" type=\"button\" class=\"btn btn-success btn-xs\">Add</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<hr>\r\n<button (click)=\"save()\" type=\"submit\" class=\"btn btn-primary\">Submit</button>"

/***/ }),

/***/ "./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CreateQuestionOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionOptionComponent", function() { return CreateQuestionOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _generic_question_generic_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic-question/generic-question.component */ "./src/app/competitive/components/create-question/generic-question/generic-question.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateQuestionOptionComponent = /** @class */ (function () {
    function CreateQuestionOptionComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.newQuestionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = ['option0', 'option1'];
        this.contById = 1;
        this.optionsForm = this.createForm();
    }
    CreateQuestionOptionComponent.prototype.ngOnInit = function () {
    };
    CreateQuestionOptionComponent.prototype.addOption = function () {
        this.isLastOption = false;
        this.contById++;
        var id = this.contById;
        this.optionsForm.controls['option' + id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.optionsForm.controls['option' + id + 'isCorrect'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options.push('option' + id);
    };
    CreateQuestionOptionComponent.prototype.removeOption = function (option) {
        var o = this.optionsForm.controls;
        this.isLastOption = false;
        if (this.options.length == 2) {
            this.isLastOption = true;
            return;
        }
        if (this.getNumCorrectOption() == 1 && o[option + 'isCorrect'].value) {
            this.isLastOptionCorrect = true;
            return;
        }
        delete o[option];
        delete o[option + 'isCorrect'];
        var index = this.options.indexOf(option);
        this.options.splice(index, 1);
    };
    CreateQuestionOptionComponent.prototype.changeIsCorrectOption = function (option) {
        var o = this.optionsForm.controls;
        this.closeAlert();
        var cont = this.getNumCorrectOption();
        if (o[option + 'isCorrect'].value) {
            if (cont === this.options.length) {
                this.isAllOptionCorrect = true;
                o[option + 'isCorrect'].setValue(false);
            }
        }
        else {
            if (!(cont > 0)) {
                this.isLastOptionCorrect = true;
                o[option + 'isCorrect'].setValue(true);
            }
        }
    };
    CreateQuestionOptionComponent.prototype.createForm = function () {
        var group = {};
        var cont = 0;
        this.options.forEach(function (option) {
            group[option] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            group[option + 'isCorrect'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
            if (cont == 0) {
                group[option + 'isCorrect'].value = true;
            }
            cont++;
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    CreateQuestionOptionComponent.prototype.save = function () {
        this.submitted = true;
        this.genericQuestion.submitted = true;
        var questionForm = this.genericQuestion.questionForm;
        var optionsForm = this.optionsForm;
        if (questionForm.invalid || optionsForm.invalid) {
            return;
        }
        var q = questionForm.controls;
        var o = optionsForm.controls;
        var optionsObj = [];
        this.options.forEach(function (value) {
            var optionObj = {
                'value': o[value].value,
                'correct': o[value + 'isCorrect'].value
            };
            optionsObj.push(optionObj);
        });
        var withCode = this.genericQuestion.toggleCode;
        var newQuestion = {
            'title': q.title.value,
            'statement': q.statement.value,
            'type': 'option',
            'codeBlock': withCode ? q.codeBlock.value : null,
            'programmingLanguage': withCode ? q.language.value : null,
            'options': optionsObj
        };
        this.newQuestionEvent.emit(newQuestion);
    };
    CreateQuestionOptionComponent.prototype.getNgClass = function (option) {
        var o = this.optionsForm.controls;
        return { 'is-invalid': (o[option].touched || this.submitted) && o[option].errors };
    };
    CreateQuestionOptionComponent.prototype.getIfOption = function (option, type) {
        var o = this.optionsForm.controls;
        if (type == 0) {
            return (o[option].touched || this.submitted) && o[option].errors;
        }
        else if (type == 1) {
            return o[option].errors.required;
        }
    };
    CreateQuestionOptionComponent.prototype.getNumCorrectOption = function () {
        var o = this.optionsForm.controls;
        var cont = 0;
        this.options.forEach(function (option) {
            if (o[option + 'isCorrect'].value) {
                cont++;
            }
        });
        return cont;
    };
    CreateQuestionOptionComponent.prototype.closeAlert = function () {
        this.isLastOption = false;
        this.isAllOptionCorrect = false;
        this.isLastOptionCorrect = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_generic_question_generic_question_component__WEBPACK_IMPORTED_MODULE_2__["GenericQuestionComponent"]),
        __metadata("design:type", _generic_question_generic_question_component__WEBPACK_IMPORTED_MODULE_2__["GenericQuestionComponent"])
    ], CreateQuestionOptionComponent.prototype, "genericQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateQuestionOptionComponent.prototype, "newQuestionEvent", void 0);
    CreateQuestionOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-question-option',
            template: __webpack_require__(/*! ./create-question-option.component.html */ "./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.html"),
            styles: [__webpack_require__(/*! ./create-question-option.component.css */ "./src/app/competitive/components/create-question/question-types/create-question-option/create-question-option.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateQuestionOptionComponent);
    return CreateQuestionOptionComponent;
}());



/***/ }),

/***/ "./src/app/competitive/components/create-question/question-types/model/optionCodeBlock.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/competitive/components/create-question/question-types/model/optionCodeBlock.ts ***!
  \************************************************************************************************/
/*! exports provided: OptionCodeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionCodeBlock", function() { return OptionCodeBlock; });
var OptionCodeBlock = /** @class */ (function () {
    function OptionCodeBlock(id) {
        this.id = id;
    }
    return OptionCodeBlock;
}());



/***/ }),

/***/ "./src/app/competitive/components/play-question/directives/question.directive.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/competitive/components/play-question/directives/question.directive.ts ***!
  \***************************************************************************************/
/*! exports provided: QuestionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDirective", function() { return QuestionDirective; });
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

var QuestionDirective = /** @class */ (function () {
    function QuestionDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    QuestionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[app-question]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], QuestionDirective);
    return QuestionDirective;
}());



/***/ }),

/***/ "./src/app/competitive/components/play-question/play-question.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/competitive/components/play-question/play-question.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question {\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.alert-response {\r\n    position: absolute;\r\n    top: -12px;\r\n    left: 20px;\r\n    right: 20px;\r\n    z-index: 999;\r\n}"

/***/ }),

/***/ "./src/app/competitive/components/play-question/play-question.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/competitive/components/play-question/play-question.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row h-100\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"center-block\">\r\n\r\n\r\n            <div *ngIf=\"isForVote\" class=\"alert alert-warning\" role=\"alert\">\r\n                Esta es una pregunta que todavia no ha sido aceptada, no contara para tu puntuación!\r\n            </div>\r\n\r\n            <div [ngSwitch]=\"alertType\" *ngIf=\"alertType\" class=\"alert-response\" style=\"height: 50%\">\r\n                <div *ngSwitchCase=\"'correct'\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n                    <h4 class=\"alert-heading\">Good</h4>\r\n                    <p>The answer is correct.</p>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n\r\n                <div *ngSwitchCase=\"'incorrect'\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                    <h4 class=\"alert-heading\">Oh...</h4>\r\n                    <p>The answer is incorrect.</p>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"question\">\r\n                <ng-template app-question></ng-template>\r\n                <hr>\r\n                <button *ngIf=\"exitButton\" [routerLink]=\"['/competitive']\" type=\"button\" class=\"btn btn-danger btn-lg btn-block\">Exit</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div #modalVote class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">¿Crees que esta es una buena pregunta?</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Vota aqui abajo.</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button (click)=\"voteQuestion(true)\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Si <span class=\"fas fa-thumbs-up\"></span></button>\r\n                <button (click)=\"voteQuestion(false)\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No <span class=\"fas fa-thumbs-down\"></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div #modalResponse class=\"modal\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h3 class=\"modal-title\" id=\"exampleModalLabel\">New info!</h3>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <div *ngIf=\"newInfo.newRank\" class=\"alert alert-success\">\r\n                    <h6>New RankLevel:</h6> {{newInfo.newRank.name}}\r\n                </div>\r\n\r\n                <div *ngIf=\"newInfo.newExp >= 0\" class=\"alert alert-success\">\r\n                    <h6>Correct - Bonification:</h6> {{newInfo.newExp}} exp\r\n                </div>\r\n\r\n                <div *ngIf=\"newInfo.newExp < 0\" class=\"alert alert-danger\">\r\n                    <h6>Incorrect - Bonification:</h6> {{newInfo.newExp}} exp\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/competitive/components/play-question/play-question.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/competitive/components/play-question/play-question.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PlayQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayQuestionComponent", function() { return PlayQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_question_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/question.directive */ "./src/app/competitive/components/play-question/directives/question.directive.ts");
/* harmony import */ var _services_competitive_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/competitive.services */ "./src/app/competitive/services/competitive.services.ts");
/* harmony import */ var src_app_shared_model_info_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/model/info-user.model */ "./src/app/shared/model/info-user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayQuestionComponent = /** @class */ (function () {
    function PlayQuestionComponent(service, cdr, componentFactoryResolver) {
        this.service = service;
        this.cdr = cdr;
        this.componentFactoryResolver = componentFactoryResolver;
        this.cont = 0;
        this.alertType = '';
        this.newInfo = new src_app_shared_model_info_user_model__WEBPACK_IMPORTED_MODULE_3__["InfoUser"](undefined);
    }
    PlayQuestionComponent.prototype.ngOnInit = function () {
        this.getQuestion();
    };
    PlayQuestionComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    PlayQuestionComponent.prototype.getQuestion = function () {
        var _this = this;
        this.service.getNextQuestion(this.cont).subscribe(function (question) {
            _this.currentQuestion = question;
            _this.isForVote = _this.currentQuestion.state === 'CREATED';
            _this.loadQuestion();
        });
    };
    PlayQuestionComponent.prototype.loadQuestion = function () {
        var _this = this;
        var qDuo = this.service.getDuoQuestion(this.currentQuestion.question);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(qDuo.component);
        var viewContainerRef = this.dQuestion.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        var componentInstance = componentRef.instance;
        componentInstance.data = qDuo.data;
        componentInstance.responseQuestionEvent.subscribe(function ($event) { return _this.responseQuestion($event); });
        componentInstance.nextQuestionEvent.subscribe(function ($event) { return _this.nextQuestion($event); });
    };
    PlayQuestionComponent.prototype.responseQuestion = function (isCorrect) {
        var _this = this;
        this.exitButton = true;
        if (this.currentQuestion.state !== 'ACCEPT') {
            this.lauchAlertSimple(isCorrect);
            return;
        }
        this.service.responseQuestion(this.currentQuestion.id, isCorrect).subscribe(function (response) {
            _this.newInfo = new src_app_shared_model_info_user_model__WEBPACK_IMPORTED_MODULE_3__["InfoUser"](response);
            jQuery(_this.modalResponse.nativeElement).modal('show');
        });
    };
    PlayQuestionComponent.prototype.lauchAlertSimple = function (isCorrect) {
        if (isCorrect) {
            this.alertType = 'correct';
        }
        else {
            this.alertType = 'incorrect';
        }
    };
    PlayQuestionComponent.prototype.nextQuestion = function (isLast) {
        if (this.isForVote) {
            jQuery(this.modalVote.nativeElement).modal('show');
        }
        else {
            this.loadNextQuestion();
        }
    };
    PlayQuestionComponent.prototype.voteQuestion = function (vote) {
        var voteObj = {
            'idQuestion': this.currentQuestion.id,
            'vote': vote
        };
        this.service.voteQuestion(voteObj).subscribe();
        this.loadNextQuestion();
    };
    PlayQuestionComponent.prototype.loadNextQuestion = function () {
        this.cont++;
        this.getQuestion();
        this.loadQuestion();
        this.alertType = null;
        this.exitButton = false;
        this.newInfo = new src_app_shared_model_info_user_model__WEBPACK_IMPORTED_MODULE_3__["InfoUser"](undefined);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directives_question_directive__WEBPACK_IMPORTED_MODULE_1__["QuestionDirective"]),
        __metadata("design:type", _directives_question_directive__WEBPACK_IMPORTED_MODULE_1__["QuestionDirective"])
    ], PlayQuestionComponent.prototype, "dQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalVote'),
        __metadata("design:type", Object)
    ], PlayQuestionComponent.prototype, "modalVote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalResponse'),
        __metadata("design:type", Object)
    ], PlayQuestionComponent.prototype, "modalResponse", void 0);
    PlayQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-play-question',
            template: __webpack_require__(/*! ./play-question.component.html */ "./src/app/competitive/components/play-question/play-question.component.html"),
            styles: [__webpack_require__(/*! ./play-question.component.css */ "./src/app/competitive/components/play-question/play-question.component.css")]
        }),
        __metadata("design:paramtypes", [_services_competitive_services__WEBPACK_IMPORTED_MODULE_2__["CompetitiveService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], PlayQuestionComponent);
    return PlayQuestionComponent;
}());



/***/ }),

/***/ "./src/app/competitive/services/competitive.services.ts":
/*!**************************************************************!*\
  !*** ./src/app/competitive/services/competitive.services.ts ***!
  \**************************************************************/
/*! exports provided: CompetitiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitiveService", function() { return CompetitiveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _question_model_question_duo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../question/model/question-duo */ "./src/app/question/model/question-duo.ts");
/* harmony import */ var _question_components_question_options_question_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../question/components/question-options/question-options.component */ "./src/app/question/components/question-options/question-options.component.ts");
/* harmony import */ var _question_components_question_code_block_question_code_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../question/components/question-code-block/question-code-block.component */ "./src/app/question/components/question-code-block/question-code-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompetitiveService = /** @class */ (function () {
    function CompetitiveService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    CompetitiveService.prototype.createNewQuestion = function (newQuestion) {
        var customQuestion = {
            'username': this.getCurrentUser(),
            'question': newQuestion
        };
        return this.http.post(this.url + "/newQuestion", customQuestion);
    };
    CompetitiveService.prototype.voteQuestion = function (vote) {
        return this.http.post(this.url + "/voteQuestion", vote);
    };
    CompetitiveService.prototype.responseQuestion = function (idQuestion, isCorrect) {
        var responseQuestion = {
            'username': this.getCurrentUser(),
            'idQuestion': idQuestion,
            'correct': isCorrect
        };
        return this.http.post(this.url + "/responseQuestion", responseQuestion);
    };
    CompetitiveService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser')).username;
    };
    CompetitiveService.prototype.getNextQuestion = function (cont) {
        var username = this.getCurrentUser();
        return this.http.get(this.url + "/nextQuestion?username=" + username + "&cont=" + cont);
    };
    CompetitiveService.prototype.getDuoQuestion = function (question) {
        var qDuo;
        if (question.type === 'option') {
            qDuo = new _question_model_question_duo__WEBPACK_IMPORTED_MODULE_3__["QuestionDuo"](_question_components_question_options_question_options_component__WEBPACK_IMPORTED_MODULE_4__["QuestionOptionsComponent"], question);
        }
        else if (question.type === 'codeBlock') {
            qDuo = new _question_model_question_duo__WEBPACK_IMPORTED_MODULE_3__["QuestionDuo"](_question_components_question_code_block_question_code_block_component__WEBPACK_IMPORTED_MODULE_5__["QuestionCodeBlockComponent"], question);
        }
        return qDuo;
    };
    CompetitiveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CompetitiveService);
    return CompetitiveService;
}());



/***/ }),

/***/ "./src/app/history/components/level/directives/question.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/history/components/level/directives/question.directive.ts ***!
  \***************************************************************************/
/*! exports provided: QuestionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDirective", function() { return QuestionDirective; });
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

var QuestionDirective = /** @class */ (function () {
    function QuestionDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    QuestionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[app-question]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], QuestionDirective);
    return QuestionDirective;
}());



/***/ }),

/***/ "./src/app/history/components/level/level.component.css":
/*!**************************************************************!*\
  !*** ./src/app/history/components/level/level.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question {\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.alerts {\r\n    position: absolute;\r\n    top: -12px;\r\n    left: 20px;\r\n    right: 20px;\r\n    z-index:999;\r\n  }"

/***/ }),

/***/ "./src/app/history/components/level/level.component.html":
/*!***************************************************************!*\
  !*** ./src/app/history/components/level/level.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row h-100\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"center-block\">\r\n\r\n            <div [ngSwitch]=\"alertType\" *ngIf=\"alertType\" class=\"alerts\" style=\"height: 50%\">\r\n                <div *ngSwitchCase=\"'correct'\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n                    <h4 class=\"alert-heading\">Good</h4>\r\n                    <p>The answer is correct.</p>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n                </div>\r\n\r\n                <div *ngSwitchCase=\"'incorrect'\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                    <h4 class=\"alert-heading\">Oh...</h4>\r\n                    <p>The answer is incorrect.</p>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{'width':progressCorrect}\" aria-valuemax=\"100\">{{correctQuestion}}</div>\r\n                <div class=\"progress-bar bg-danger\" role=\"progressbar\" [ngStyle]=\"{'width':progressIncorrect}\" aria-valuemax=\"100\">{{incorrectQuestion}}</div>\r\n            </div>\r\n\r\n            <div class=\"question\">\r\n                <div class=\"mx-auto\" style=\"width: 90%\">\r\n                    <ng-template app-question></ng-template>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div #myModal class=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h3 class=\"modal-title\" id=\"exampleModalLabel\">New info!</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <div *ngIf=\"newInfo.newRank\" class=\"alert alert-success\">\r\n                    <h6>New RankLevel:</h6> {{newInfo.newRank.name}}\r\n                </div>\r\n\r\n                <div *ngIf=\"newInfo.levelsUnlock.length > 0\" class=\"alert alert-warning\">\r\n                    <h6>Levels unlocked</h6>\r\n                    <ul>\r\n                        <li *ngFor=\"let level of newInfo.levelsUnlock\">{{level}}</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div *ngIf=\"newInfo.sectionsUnlock.length > 0\" class=\"alert alert-warning\">\r\n                    <h6>Sections unlocked</h6>\r\n                    <ul>\r\n                        <li *ngFor=\"let section of newInfo.sectionsUnlock\">{{section}}</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div *ngIf=\"newInfo.trophiesComplete.length > 0\" class=\"alert alert-secondary\">\r\n                    <h6>Trophies complete</h6>\r\n                    <ul>\r\n                        <li *ngFor=\"let result of newInfo.trophiesComplete\">{{result.challange.title}}</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div *ngIf=\"newInfo.challangesComplete.length > 0\" class=\"alert alert-secondary\">\r\n                    <h6>Challanges complete</h6>\r\n                    <ul>\r\n                        <li *ngFor=\"let result of newInfo.challangesComplete\">{{result.challange.description}}</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"alert alert-success\">\r\n                    <h6>Bonification:</h6> {{newInfo.newExp}} exp\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)='backSections()'>Volver a la sección</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/history/components/level/level.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/history/components/level/level.component.ts ***!
  \*************************************************************/
/*! exports provided: LevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelComponent", function() { return LevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_question_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/question.directive */ "./src/app/history/components/level/directives/question.directive.ts");
/* harmony import */ var _services_sections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sections.service */ "./src/app/history/services/sections.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_info_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/model/info-user.model */ "./src/app/shared/model/info-user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LevelComponent = /** @class */ (function () {
    function LevelComponent(componentFactoryResolver, cdr, sectionService, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cdr = cdr;
        this.sectionService = sectionService;
        this.router = router;
        this.index = 0;
        this.alertType = null;
        this.correctQuestion = 0;
        this.incorrectQuestion = 0;
        this.progressCorrect = '0%';
        this.progressIncorrect = '0%';
        this.newInfo = new _shared_model_info_user_model__WEBPACK_IMPORTED_MODULE_4__["InfoUser"](undefined);
    }
    LevelComponent.prototype.ngOnInit = function () {
        this.loadLevel();
    };
    LevelComponent.prototype.ngAfterViewInit = function () {
        this.loadQuestion();
        this.cdr.detectChanges();
    };
    LevelComponent.prototype.loadLevel = function () {
        this.qDuos = this.sectionService.getQuestionsDuo();
        this.questions = this.qDuos.length;
    };
    LevelComponent.prototype.loadQuestion = function () {
        var _this = this;
        var qDuo = this.qDuos[this.index];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(qDuo.component);
        var viewContainerRef = this.dQuestion.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        var componentInstance = componentRef.instance;
        componentInstance.data = qDuo.data;
        componentInstance.responseQuestionEvent.subscribe(function ($event) { return _this.responseQuestion($event); });
        componentInstance.nextQuestionEvent.subscribe(function ($event) { return _this.nextQuestion($event); });
    };
    LevelComponent.prototype.responseQuestion = function (isCorrect) {
        if (isCorrect) {
            this.correctQuestion++;
            this.alertType = 'correct';
            var percentajeCorrect = (this.correctQuestion / this.questions) * 100;
            this.progressCorrect = percentajeCorrect.toString() + '%';
        }
        else {
            this.incorrectQuestion++;
            this.alertType = 'incorrect';
            var percentajeIncorrect = (this.incorrectQuestion / this.questions) * 100;
            this.progressIncorrect = percentajeIncorrect.toString() + '%';
        }
    };
    LevelComponent.prototype.nextQuestion = function (isLast) {
        var _this = this;
        if (isLast) {
            this.sectionService.responseLevel(this.correctQuestion, this.incorrectQuestion)
                .subscribe(function (data) {
                _this.newInfo = data;
                jQuery(_this.myModal.nativeElement).modal('show');
            });
        }
        else {
            this.index++;
            this.alertType = null;
            this.loadQuestion();
        }
    };
    LevelComponent.prototype.backSections = function () {
        var codSection = this.sectionService.getCurrentLevel().codSection;
        this.router.navigate(['/section', codSection]);
        jQuery(this.myModal.nativeElement).modal('hide');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myModal'),
        __metadata("design:type", Object)
    ], LevelComponent.prototype, "myModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directives_question_directive__WEBPACK_IMPORTED_MODULE_1__["QuestionDirective"]),
        __metadata("design:type", _directives_question_directive__WEBPACK_IMPORTED_MODULE_1__["QuestionDirective"])
    ], LevelComponent.prototype, "dQuestion", void 0);
    LevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-level',
            template: __webpack_require__(/*! ./level.component.html */ "./src/app/history/components/level/level.component.html"),
            styles: [__webpack_require__(/*! ./level.component.css */ "./src/app/history/components/level/level.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_sections_service__WEBPACK_IMPORTED_MODULE_2__["SectionsService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LevelComponent);
    return LevelComponent;
}());



/***/ }),

/***/ "./src/app/history/components/section/section.component.css":
/*!******************************************************************!*\
  !*** ./src/app/history/components/section/section.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding: 20px;\r\n}"

/***/ }),

/***/ "./src/app/history/components/section/section.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/history/components/section/section.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"display-6\">{{section.title}}</h1>\r\n    <hr class=\"my-4\">\r\n    <p class=\"lead\">Antes de comenzar a jugar, lee la documentación de la sección!</p>\r\n    <button class=\"btn btn-primary btn-lg\" type=\"button\" style=\"margin: 4px\" data-toggle=\"modal\" data-target=\"#docModal\">Learn\r\n        more</button>\r\n    <button class=\"btn btn-primary btn-lg\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n        aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n        Challanges\r\n    </button>\r\n\r\n    <div class=\"collapse\" id=\"collapseExample\">\r\n        <div class=\"card\" style=\"margin-top: 4px\">\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li [class]=\"getClass(i)\" *ngFor=\"let challange of section.challanges; let i = index;\">\r\n                    {{ getChallangeDescription(i)}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-lg\">\r\n        <h2>Main Levels</h2>\r\n        <hr>\r\n\r\n        <app-level-card [level]=\"level\" *ngFor=\"let level of levelsMain\"></app-level-card>\r\n    </div>\r\n\r\n    <div class=\"col-lg\">\r\n        <h2>Optional Levels</h2>\r\n        <hr>\r\n\r\n        <app-level-card [level]=\"level\" *ngFor=\"let level of levelsOptional\"></app-level-card>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<div id=\"docModal\" class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-formatted-text [data]=\"section.documentation\"></app-formatted-text>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/history/components/section/section.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/history/components/section/section.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_sections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sections.service */ "./src/app/history/services/sections.service.ts");
/* harmony import */ var _model_section_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/section.model */ "./src/app/history/model/section.model.ts");
/* harmony import */ var _shared_components_formatted_text_formatted_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/formatted-text/formatted-text.component */ "./src/app/shared/components/formatted-text/formatted-text.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionComponent = /** @class */ (function () {
    function SectionComponent(activatedRoute, sectionsService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.sectionsService = sectionsService;
        this.router = router;
        this.section = new _model_section_model__WEBPACK_IMPORTED_MODULE_3__["Section"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.codSection = params['cod'];
        });
    }
    SectionComponent.prototype.ngOnInit = function () {
        this.loadLevels();
    };
    SectionComponent.prototype.loadLevels = function () {
        var _this = this;
        this.sectionsService.getSection(this.codSection)
            .subscribe(function (data) {
            _this.section = data;
            _this.levelsMain = data.levels.filter(function (level) { return level.main; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
            _this.levelsOptional = data.levels.filter(function (level) { return !level.main; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
        }, function (error) {
            _this.router.navigate(['/sections']);
        });
    };
    SectionComponent.prototype.getChallangeDescription = function (i) {
        return this.section.challanges[i].challange.description;
    };
    SectionComponent.prototype.getClass = function (i) {
        var base = 'list-group-item';
        return this.section.challanges[i].complete ?
            base + ' list-group-item-success' :
            base;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_formatted_text_formatted_text_component__WEBPACK_IMPORTED_MODULE_4__["FormattedTextComponent"]),
        __metadata("design:type", Object)
    ], SectionComponent.prototype, "text", void 0);
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/history/components/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.css */ "./src/app/history/components/section/section.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_sections_service__WEBPACK_IMPORTED_MODULE_2__["SectionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/history/components/sections/sections.component.css":
/*!********************************************************************!*\
  !*** ./src/app/history/components/sections/sections.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width:991px) and (min-width:574px) {\r\n    .card-columns {\r\n        -webkit-column-count: 2;\r\n                column-count: 2;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/history/components/sections/sections.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/history/components/sections/sections.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sections</h1>\n<hr>\n\n\n<div class=\"card-columns\">\n\n  <app-section-card [section]=\"section\" *ngFor=\"let section of sections\"></app-section-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/history/components/sections/sections.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/history/components/sections/sections.component.ts ***!
  \*******************************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sections_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sections.service */ "./src/app/history/services/sections.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(sectionsService) {
        this.sectionsService = sectionsService;
    }
    SectionsComponent.prototype.ngOnInit = function () {
        this.loadSections();
    };
    SectionsComponent.prototype.loadSections = function () {
        var _this = this;
        this.sectionsService.getSectionsList().subscribe(function (data) {
            _this.sections = data;
        });
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/history/components/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/history/components/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sections_service__WEBPACK_IMPORTED_MODULE_1__["SectionsService"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _history_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.routing */ "./src/app/history/history.routing.ts");
/* harmony import */ var _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sections/sections.component */ "./src/app/history/components/sections/sections.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/history/components/section/section.component.ts");
/* harmony import */ var _components_level_level_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/level/level.component */ "./src/app/history/components/level/level.component.ts");
/* harmony import */ var _question_question_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../question/question.module */ "./src/app/question/question.module.ts");
/* harmony import */ var _components_level_directives_question_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/level/directives/question.directive */ "./src/app/history/components/level/directives/question.directive.ts");
/* harmony import */ var _services_level_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/level.guard */ "./src/app/history/services/level.guard.ts");
/* harmony import */ var _services_sections_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/sections.service */ "./src/app/history/services/sections.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _history_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _question_question_module__WEBPACK_IMPORTED_MODULE_7__["QuestionModule"]
            ],
            declarations: [
                _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_3__["SectionsComponent"],
                _components_section_section_component__WEBPACK_IMPORTED_MODULE_5__["SectionComponent"],
                _components_level_level_component__WEBPACK_IMPORTED_MODULE_6__["LevelComponent"],
                _components_level_directives_question_directive__WEBPACK_IMPORTED_MODULE_8__["QuestionDirective"]
            ], providers: [
                _services_level_guard__WEBPACK_IMPORTED_MODULE_9__["LevelGuard"],
                _services_sections_service__WEBPACK_IMPORTED_MODULE_10__["SectionsService"]
            ]
        })
    ], HistoryModule);
    return HistoryModule;
}());



/***/ }),

/***/ "./src/app/history/history.routing.ts":
/*!********************************************!*\
  !*** ./src/app/history/history.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sections/sections.component */ "./src/app/history/components/sections/sections.component.ts");
/* harmony import */ var _login_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/services/auth.guard */ "./src/app/login/services/auth.guard.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/history/components/section/section.component.ts");
/* harmony import */ var _components_level_level_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/level/level.component */ "./src/app/history/components/level/level.component.ts");
/* harmony import */ var _services_level_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/level.guard */ "./src/app/history/services/level.guard.ts");






var appRoutes = [
    { path: 'sections', component: _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_1__["SectionsComponent"], canActivate: [_login_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'section/:cod', component: _components_section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], canActivate: [_login_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'level/:cod', component: _components_level_level_component__WEBPACK_IMPORTED_MODULE_4__["LevelComponent"], canActivate: [_services_level_guard__WEBPACK_IMPORTED_MODULE_5__["LevelGuard"]] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes);


/***/ }),

/***/ "./src/app/history/model/level.model.ts":
/*!**********************************************!*\
  !*** ./src/app/history/model/level.model.ts ***!
  \**********************************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
var Level = /** @class */ (function () {
    function Level() {
    }
    return Level;
}());



/***/ }),

/***/ "./src/app/history/model/section.model.ts":
/*!************************************************!*\
  !*** ./src/app/history/model/section.model.ts ***!
  \************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var Section = /** @class */ (function () {
    function Section() {
    }
    return Section;
}());



/***/ }),

/***/ "./src/app/history/services/level.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/history/services/level.guard.ts ***!
  \*************************************************/
/*! exports provided: LevelGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelGuard", function() { return LevelGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections.service */ "./src/app/history/services/sections.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LevelGuard = /** @class */ (function () {
    function LevelGuard(router, sectionsService) {
        this.router = router;
        this.sectionsService = sectionsService;
    }
    LevelGuard.prototype.canActivate = function (route, state) {
        if (this.sectionsService.currentLevel) {
            // logged in so return true
            return true;
        }
        var codSection = state.url.split("/")[2].split("_")[0];
        this.router.navigate(['/section', codSection]);
        return false;
    };
    LevelGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _sections_service__WEBPACK_IMPORTED_MODULE_2__["SectionsService"]])
    ], LevelGuard);
    return LevelGuard;
}());



/***/ }),

/***/ "./src/app/history/services/sections.service.ts":
/*!******************************************************!*\
  !*** ./src/app/history/services/sections.service.ts ***!
  \******************************************************/
/*! exports provided: SectionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsService", function() { return SectionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _question_model_question_duo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../question/model/question-duo */ "./src/app/question/model/question-duo.ts");
/* harmony import */ var _question_components_question_options_question_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../question/components/question-options/question-options.component */ "./src/app/question/components/question-options/question-options.component.ts");
/* harmony import */ var _question_components_question_code_block_question_code_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../question/components/question-code-block/question-code-block.component */ "./src/app/question/components/question-code-block/question-code-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectionsService = /** @class */ (function () {
    function SectionsService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    SectionsService.prototype.getSectionsList = function () {
        return this.http.get(this.url + "/sections?username=" + this.getCurrentUser());
    };
    SectionsService.prototype.getSection = function (cod) {
        return this.http.get(this.url + "/section/" + cod + "?username=" + this.getCurrentUser());
    };
    SectionsService.prototype.responseLevel = function (correctQuestion, incorrectQuestion) {
        var resultLevel = {
            'username': this.getCurrentUser(),
            'idLevel': this.getCurrentLevel().id,
            'idSection': this.getCurrentLevel().idSection,
            'numCorrectQuestion': correctQuestion,
            'numIncorrectQuestion': incorrectQuestion,
            'nextLevels': this.getCurrentLevel().nextLevels,
            'expBase': this.getCurrentLevel().experience
        };
        return this.http.post(this.url + "/responseLevel", resultLevel);
    };
    SectionsService.prototype.getQuestionsDuo = function () {
        var qDuos = [];
        var cont = 0;
        for (var _i = 0, _a = this.currentLevel.questions.sort(function (a, b) { return a.title.localeCompare(b.title); }); _i < _a.length; _i++) {
            var question = _a[_i];
            question.isLast = cont === this.currentLevel.questions.length - 1;
            var qDuo = void 0;
            if (question.type === 'option') {
                qDuo = new _question_model_question_duo__WEBPACK_IMPORTED_MODULE_3__["QuestionDuo"](_question_components_question_options_question_options_component__WEBPACK_IMPORTED_MODULE_4__["QuestionOptionsComponent"], question);
            }
            else if (question.type === 'codeBlock') {
                qDuo = new _question_model_question_duo__WEBPACK_IMPORTED_MODULE_3__["QuestionDuo"](_question_components_question_code_block_question_code_block_component__WEBPACK_IMPORTED_MODULE_5__["QuestionCodeBlockComponent"], question);
            }
            qDuos.push(qDuo);
            cont++;
        }
        return qDuos;
    };
    SectionsService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser')).username;
    };
    SectionsService.prototype.setCurrentLevel = function (level) {
        this.currentLevel = level;
    };
    SectionsService.prototype.getCurrentLevel = function () {
        return this.currentLevel;
    };
    SectionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SectionsService);
    return SectionsService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/components/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/login/components/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width:767px) {\r\n\r\n    .container {\r\n        width: 50%;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width:766px) {\r\n\r\n    .container {\r\n        width: 100%;\r\n    }\r\n\r\n    h1 {\r\n        class: display-5;\r\n    }\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/components/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/login/components/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loginFailed\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n    <h4 class=\"alert-heading\">Oh no!</h4>\n    <p>Username/Password not correct. Prueba de nuevo.</p>\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"container\" style=\"margin-top: 35px;\">\n    <div class=\"text-center\">\n        <div class=\"col-lg-12\">\n\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <img class=\"mb-4\" src=\"assets/trophy.svg\" alt=\"\" width=\"72\" height=\"72\">\n                    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" placeholder=\"Enter username\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter password\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                </div>\n                <a href=\"\" text-decoration=\"underline\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><u>Register\n                        here now.</u></a>\n            </form>\n\n        </div>\n    </div>\n</div>\n\n<div #myModal class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <app-register (close)=\"onClose($event)\"></app-register>\n</div>"

/***/ }),

/***/ "./src/app/login/components/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/login/components/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/login/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_exception_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/exception.service */ "./src/app/shared/services/exception.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, exceptionService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.exceptionService = exceptionService;
        this.loading = false;
        this.loginFailed = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginFailed = false;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            if (error.status == 400) {
                _this.loginFailed = true;
            }
            _this.loading = false;
        });
    };
    LoginComponent.prototype.onClose = function () {
        jQuery(this.myModal.nativeElement).modal('hide');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "myModal", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _shared_services_exception_service__WEBPACK_IMPORTED_MODULE_5__["ExceptionService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/components/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/login/components/register/register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/components/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/login/components/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Register now free!</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n\n    <div class=\"modal-body\">\n      <form [formGroup]=\"registerForm\">\n\n        <label for=\"exampleInputPassword1\">Username</label>\n\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n          </div>\n          <input #username (blur)=\"checkUniqueUsername(username.value)\" (keyup)=\"checkUniqueUsername(username.value)\" type=\"text\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\n            aria-describedby=\"basic-addon1\" [ngClass]=\"{ 'is-invalid': (f.username.touched || submitted ) && f.username.errors }\">\n          <div *ngIf=\"(f.username.touched || submitted ) && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">El nombre de usuario es obligatorio.</div>\n            <div *ngIf=\"f.username.errors.minlength\">Mínimo 4 caracteres</div>\n            <div *ngIf=\"f.username.errors.maxlength\">Máximo 16 caracteres</div>\n            <div *ngIf=\"f.username.errors.repeat\">Nombre de usuario repetido</div>\n          </div>\n        </div>\n\n\n        <label for=\"exampleInputPassword1\">Mail</label>\n\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" formControlName=\"mail\" class=\"form-control\" placeholder=\"Mail\" aria-describedby=\"basic-addon2\"\n            [ngClass]=\"{ 'is-invalid': (f.mail.touched || submitted ) && f.mail.errors }\">\n          <div *ngIf=\"(f.mail.touched || submitted ) && f.mail.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.mail.errors.required\">Mail is required</div>\n            <div *ngIf=\"f.mail.errors.email\">Mail format incorrect (example: demo@prueba.com)</div>\n          </div>\n        </div>\n\n        <form formGroupName=\"passwords\">\n          <label for=\"exampleInputPassword1\">Password</label>\n\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\"\n            [ngClass]=\"{ 'is-invalid': (f.passwords.touched || submitted ) && f.passwords.errors }\">\n\n          <input type=\"password\" formControlName=\"password2\" class=\"form-control\" id=\"exampleInputPassword2\"\n            placeholder=\"Repeat Password\" [ngClass]=\"{ 'is-invalid': (f.passwords.touched || submitted ) && f.passwords.errors }\">\n\n          <div *ngIf=\"(f.passwords.touched || submitted ) && f.passwords.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.passwords.errors.passFormat; else second\">Password format</div>\n            <ng-template #second>\n              <div *ngIf=\"f.passwords.errors.mismatch\">Password coincidir</div>\n            </ng-template>\n          </div>\n\n        </form>\n      </form>\n    </div>\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"register()\">Register</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/components/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/login/components/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/login/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]],
            mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            passwords: this.formBuilder.group({
                password: ['', []],
                password2: ['', []],
            }, { validator: [this.passwordConfirmed, this.passFormat] })
        });
    };
    RegisterComponent.prototype.checkUniqueUsername = function (value) {
        var _this = this;
        if (this.f.username.errors || !this.f.username.touched) {
            return;
        }
        this.authenticationService.isUniqueUsername(value).subscribe(function (data) {
            if (!data) {
                _this.f.username.setErrors({ repeat: true });
            }
        }, function (error) {
            _this.router.navigate(['/login']);
            _this.close.emit();
        });
    };
    RegisterComponent.prototype.passwordConfirmed = function (c) {
        if (c.get('password').value !== c.get('password2').value) {
            return { mismatch: true };
        }
    };
    RegisterComponent.prototype.passFormat = function (c) {
        var length = c.get('password').value.length;
        if (length < 4 || length > 6)
            return { passFormat: true };
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var me = this;
        this.submitted = true;
        if (this.registerForm.invalid)
            return;
        var newUser = {
            username: this.f.username.value,
            password: this.f.passwords.get('password').value,
            mail: this.f.mail.value
        };
        this.authenticationService.register(newUser).subscribe(function (data) {
            me.authenticationService.login(data.username, data.password).subscribe(function (data) {
                me.router.navigate(['/home']);
                me.close.emit();
            }, function (error) {
                _this.router.navigate(['/login']);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RegisterComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('username'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "usernameInput", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/login/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/login/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/login/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/login/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/login/services/auth.guard.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/login/services/authentication.service.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.routing */ "./src/app/login/login.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _login_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ], providers: [
                _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.routing.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.routing.ts ***!
  \****************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/login/components/login/login.component.ts");


var appRoutes = [
    { path: 'profile', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes);


/***/ }),

/***/ "./src/app/login/services/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/login/services/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/services/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/services/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http
            .post(this.url + "/login", {
            username: username,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isUniqueUsername = function (user) {
        return this.http.get(this.url + "/uniqueUsername?username=" + user);
    };
    AuthenticationService.prototype.register = function (newUser) {
        return this.http.post(this.url + "/register", newUser);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/login/services/jwt.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/login/services/jwt.interceptor.ts ***!
  \***************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_exception_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/exception.service */ "./src/app/shared/services/exception.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(exceptionService) {
        this.exceptionService = exceptionService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var me = this;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this.exceptionService.sendException(err.status);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_exception_service__WEBPACK_IMPORTED_MODULE_3__["ExceptionService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/profile/components/custom-questions/custom-questions.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/custom-questions/custom-questions.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/components/custom-questions/custom-questions.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/custom-questions/custom-questions.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center bg-light mb-3\" style=\"width: 100%\">\r\n    <div class=\"card-header\">\r\n        <h2 class=\"display-5\">My Questions</h2>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\"></th>\r\n                    <th scope=\"col\">Title</th>\r\n                    <th scope=\"col\">State</th>\r\n                    <th scope=\"col\">Info</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let question of questions; let i = index\">\r\n                    <th scope=\"row\">{{i+1}}</th>\r\n                    <td>{{question.question.title}}</td>\r\n                    <td>{{question.state}}</td>\r\n                    <td>@mdo</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/custom-questions/custom-questions.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/custom-questions/custom-questions.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomQuestionsComponent", function() { return CustomQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/profile/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomQuestionsComponent = /** @class */ (function () {
    function CustomQuestionsComponent(userService) {
        this.userService = userService;
        this.questions = [];
    }
    CustomQuestionsComponent.prototype.ngOnInit = function () {
        this.loadQuestions();
    };
    CustomQuestionsComponent.prototype.loadQuestions = function () {
        var _this = this;
        this.userService.getQuestionByUser().subscribe(function (questions) {
            _this.questions = questions;
        }, function (error) {
        });
    };
    CustomQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-questions',
            template: __webpack_require__(/*! ./custom-questions.component.html */ "./src/app/profile/components/custom-questions/custom-questions.component.html"),
            styles: [__webpack_require__(/*! ./custom-questions.component.css */ "./src/app/profile/components/custom-questions/custom-questions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], CustomQuestionsComponent);
    return CustomQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/profile/profile.component.css":
/*!******************************************************************!*\
  !*** ./src/app/profile/components/profile/profile.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 991px) {\r\n    .card-columns {\r\n        -webkit-column-count: 1;\r\n                column-count: 1;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    .card-columns {\r\n        -webkit-column-count: 2;\r\n                column-count: 2;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    h2{\r\n        font-size:54px;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 65px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/profile/components/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/profile/components/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-transparent\">\r\n    <div class=\"col-md-6 p-lg-2 mx-auto my-1\">\r\n        <img src=\"assets/descarga.jpg\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"152\" height=\"118\">\r\n        <h1 class=\"display-4 font-weight-normal\">@{{user.username}}</h1>\r\n        <hr>\r\n        <p class=\"lead font-weight-normal\"><strong>Name: </strong>{{user.username}}</p>\r\n        <p class=\"lead font-weight-normal\"><strong>Mail: </strong>{{user.mail}}</p>\r\n        <a class=\"btn btn-danger\" [routerLink]=\"['/login']\" style=\"margin: 5px\">Close session</a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card-columns\">\r\n\r\n    <app-rank-level [levelRank]=\"levelRank\"></app-rank-level>\r\n\r\n    <app-trophies [trophies]=\"trophies\"></app-trophies>\r\n\r\n    <app-custom-questions> </app-custom-questions>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/profile/components/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/profile/components/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/profile/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.user = {};
        this.levelRank = {};
        this.trophies = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfileComponent.prototype.loadProfile = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (data) {
            _this.user = data;
            _this.levelRank = data.levelRank;
            _this.trophies = data.resultTrophies;
            _this.levelRank.userExperience = _this.user.experience;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/rank-level/rank-level.component.css":
/*!************************************************************************!*\
  !*** ./src/app/profile/components/rank-level/rank-level.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/components/rank-level/rank-level.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/profile/components/rank-level/rank-level.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center text-white bg-dark mb-3\" style=\"width: 100%\">\n  <div class=\"card-header\">\n      <h2 class=\"display-5\">Level Rank</h2>\n  </div>\n  <div class=\"card-body\">\n      <img src=\"assets/noob.svg\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"304\" height=\"226\">\n      <h2 class=\"display-3\">{{levelRank.name}}</h2>\n      <hr>\n      <h1 class=\"display-2\">{{levelRank.userExperience}} exp</h1>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/rank-level/rank-level.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/profile/components/rank-level/rank-level.component.ts ***!
  \***********************************************************************/
/*! exports provided: RankLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankLevelComponent", function() { return RankLevelComponent; });
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

var RankLevelComponent = /** @class */ (function () {
    function RankLevelComponent() {
        this.levelRank = {};
    }
    RankLevelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RankLevelComponent.prototype, "levelRank", void 0);
    RankLevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rank-level',
            template: __webpack_require__(/*! ./rank-level.component.html */ "./src/app/profile/components/rank-level/rank-level.component.html"),
            styles: [__webpack_require__(/*! ./rank-level.component.css */ "./src/app/profile/components/rank-level/rank-level.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RankLevelComponent);
    return RankLevelComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.routing */ "./src/app/profile/profile.routing.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/profile/components/profile/profile.component.ts");
/* harmony import */ var _components_rank_level_rank_level_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rank-level/rank-level.component */ "./src/app/profile/components/rank-level/rank-level.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custom-questions/custom-questions.component */ "./src/app/profile/components/custom-questions/custom-questions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _profile_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _components_rank_level_rank_level_component__WEBPACK_IMPORTED_MODULE_4__["RankLevelComponent"], _components_custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_6__["CustomQuestionsComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.routing.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/services/auth.guard */ "./src/app/login/services/auth.guard.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/profile/components/profile/profile.component.ts");



var appRoutes = [
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], canActivate: [_login_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes);


/***/ }),

/***/ "./src/app/profile/services/user.service.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/services/user.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.url + "/user?username=" + this.getCurrentUser());
    };
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser')).username;
    };
    UserService.prototype.getQuestionByUser = function () {
        return this.http.get(this.url + "/questionsByUser?username=" + this.getCurrentUser());
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/question/components/question-code-block/question-code-block.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/question/components/question-code-block/question-code-block.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    margin-bottom: 2%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.option {\r\n    margin: 5px;\r\n}"

/***/ }),

/***/ "./src/app/question/components/question-code-block/question-code-block.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/question/components/question-code-block/question-code-block.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{data.title}}</h5>\n    <app-formatted-text [data]=\"data.statement\"></app-formatted-text>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n\n    <h6 class=\"card-title\">Response</h6>\n    <div class=\"btn-group btn-group-md\" role=\"group\" aria-label=\"First group\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"removeBlock(block.cod)\" *ngFor=\"let block of blocksResponse;\">{{block.value}}</button>\n    </div>\n\n    <hr>\n\n    <h6 class=\"card-title\">Options</h6>\n    <div class=\"row\">\n      <div class=\"option\" *ngFor=\"let block of blocksOptions; let i = index\">\n        <button type=\"button\" (click)=\"addBlock(block.cod)\" class=\"btn btn-secondary\">{{block.value}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<button type=\"button\" class=\"btn btn-success btn-lg btn-block\" (click)=\"qualify()\">{{nameButton}}</button>"

/***/ }),

/***/ "./src/app/question/components/question-code-block/question-code-block.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/question/components/question-code-block/question-code-block.component.ts ***!
  \******************************************************************************************/
/*! exports provided: QuestionCodeBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCodeBlockComponent", function() { return QuestionCodeBlockComponent; });
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

var QuestionCodeBlockComponent = /** @class */ (function () {
    function QuestionCodeBlockComponent() {
        this.isResponse = false;
        this.blocksOptions = [];
        this.blocksResponse = [];
        this.nameButton = "Qualify";
        this.responseQuestionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextQuestionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuestionCodeBlockComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    QuestionCodeBlockComponent.prototype.loadData = function () {
        var cont = 0;
        for (var _i = 0, _a = this.data.codeBlocksOptions; _i < _a.length; _i++) {
            var codeBlock = _a[_i];
            var codeObj = {
                "cod": cont,
                "value": codeBlock
            };
            this.blocksOptions.push(codeObj);
            cont++;
        }
        this.blocksResponse = [];
    };
    QuestionCodeBlockComponent.prototype.qualify = function () {
        var isCorrect = false;
        if (this.isResponse) {
            this.nextQuestion();
            return;
        }
        if (this.blocksResponse.length == this.data.codeBlocksCorrect.length) {
            isCorrect = this.compareResponse();
        }
        this.responseQuestionEvent.emit(isCorrect);
        this.isResponse = true;
        this.nameButton = this.data.isLast ? "Finalize" : "Next question";
    };
    QuestionCodeBlockComponent.prototype.nextQuestion = function () {
        this.nextQuestionEvent.emit(this.data.isLast);
    };
    QuestionCodeBlockComponent.prototype.compareResponse = function () {
        var i = 0;
        for (var _i = 0, _a = this.blocksResponse; _i < _a.length; _i++) {
            var block = _a[_i];
            if (block.value != this.data.codeBlocksCorrect[i]) {
                return false;
            }
            i++;
        }
        return true;
    };
    QuestionCodeBlockComponent.prototype.getNameOption = function (i) {
        this.blocksOptions[i];
    };
    QuestionCodeBlockComponent.prototype.addBlock = function (cod) {
        var cont = 0;
        for (var _i = 0, _a = this.blocksOptions; _i < _a.length; _i++) {
            var block = _a[_i];
            if (block.cod == cod) {
                this.blocksResponse.push(block);
                this.blocksOptions.splice(cont, 1);
            }
            cont++;
        }
    };
    QuestionCodeBlockComponent.prototype.removeBlock = function (cod) {
        var cont = 0;
        for (var _i = 0, _a = this.blocksResponse; _i < _a.length; _i++) {
            var block = _a[_i];
            if (block.cod == cod) {
                this.blocksResponse.splice(cont, 1);
                this.blocksOptions.push(block);
            }
            cont++;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionCodeBlockComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuestionCodeBlockComponent.prototype, "responseQuestionEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuestionCodeBlockComponent.prototype, "nextQuestionEvent", void 0);
    QuestionCodeBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-code-block',
            template: __webpack_require__(/*! ./question-code-block.component.html */ "./src/app/question/components/question-code-block/question-code-block.component.html"),
            styles: [__webpack_require__(/*! ./question-code-block.component.css */ "./src/app/question/components/question-code-block/question-code-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionCodeBlockComponent);
    return QuestionCodeBlockComponent;
}());



/***/ }),

/***/ "./src/app/question/components/question-options/question-options.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/question/components/question-options/question-options.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\r\n    margin-bottom: 2%;\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.row {\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}"

/***/ }),

/***/ "./src/app/question/components/question-options/question-options.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/question/components/question-options/question-options.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{data.title}}</h5>\r\n                <app-formatted-text [data]=\"data.statement\"></app-formatted-text>\r\n            </div>\r\n            <div class=\"card-footer text-muted text-center\">\r\n                Respuestas correctas {{cont}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n        <ul class=\"list-group\">\r\n            <li [class]=\"options[i].classOption\" (click)=\"response(i)\" *ngFor=\"let option of options; let i = index;\">{{getOption(i)}}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-success btn-lg btn-block\" (click)=\"qualify()\">{{nameButton}}</button>"

/***/ }),

/***/ "./src/app/question/components/question-options/question-options.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/question/components/question-options/question-options.component.ts ***!
  \************************************************************************************/
/*! exports provided: QuestionOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionOptionsComponent", function() { return QuestionOptionsComponent; });
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

var QuestionOptionsComponent = /** @class */ (function () {
    function QuestionOptionsComponent() {
        this.OPTION_CLASS = "list-group-item list-group-item-action";
        this.OPTION_CLASS_ACTIVE = "list-group-item list-group-item-action active";
        this.OPTION_CLASS_CORRECT = "list-group-item list-group-item-action list-group-item-success";
        this.OPTION_CLASS_INCORRECT = "list-group-item list-group-item-action list-group-item-danger";
        this.cont = 0;
        this.optionsSelected = 0;
        this.options = [];
        this.isResponse = false;
        this.nameButton = "Qualify";
        this.responseQuestionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextQuestionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuestionOptionsComponent.prototype.ngOnInit = function () {
        this.loadOptionsClass();
    };
    QuestionOptionsComponent.prototype.loadOptionsClass = function () {
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.correct)
                this.cont++;
            var optionObj = {
                "value": option.value,
                "classOption": this.OPTION_CLASS,
                "selected": false,
                "correct": option.correct
            };
            this.options.push(optionObj);
        }
    };
    QuestionOptionsComponent.prototype.response = function (index) {
        if (this.isResponse)
            return;
        var optionObj = this.options[index];
        if (this.cont == 1) {
            this.clearAllOptions();
        }
        if (optionObj.selected) {
            optionObj.classOption = this.OPTION_CLASS;
            optionObj.selected = false;
            this.optionsSelected--;
        }
        else if (this.optionsSelected != this.cont) {
            optionObj.classOption = this.OPTION_CLASS_ACTIVE;
            optionObj.selected = true;
            this.optionsSelected++;
        }
    };
    QuestionOptionsComponent.prototype.clearAllOptions = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.classOption = this.OPTION_CLASS;
            option.selected = false;
            this.optionsSelected = 0;
        }
    };
    QuestionOptionsComponent.prototype.getOption = function (index) {
        return this.data.options[index].value;
    };
    QuestionOptionsComponent.prototype.qualify = function () {
        if (this.isResponse) {
            this.nextQuestion();
            return;
        }
        var isCorrect = true;
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.correct != option.selected) {
                isCorrect = false;
                break;
            }
        }
        this.responseQuestionEvent.emit(isCorrect);
        this.markQuestion(isCorrect);
        this.isResponse = true;
        this.nameButton = this.data.isLast ? "Finalize" : "Next question";
    };
    QuestionOptionsComponent.prototype.nextQuestion = function () {
        this.nextQuestionEvent.emit(this.data.isLast);
    };
    QuestionOptionsComponent.prototype.markQuestion = function (isCorrect) {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.correct)
                option.classOption = isCorrect ? this.OPTION_CLASS_CORRECT : this.OPTION_CLASS_INCORRECT;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionOptionsComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuestionOptionsComponent.prototype, "responseQuestionEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuestionOptionsComponent.prototype, "nextQuestionEvent", void 0);
    QuestionOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-options',
            template: __webpack_require__(/*! ./question-options.component.html */ "./src/app/question/components/question-options/question-options.component.html"),
            styles: [__webpack_require__(/*! ./question-options.component.css */ "./src/app/question/components/question-options/question-options.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionOptionsComponent);
    return QuestionOptionsComponent;
}());



/***/ }),

/***/ "./src/app/question/model/question-duo.ts":
/*!************************************************!*\
  !*** ./src/app/question/model/question-duo.ts ***!
  \************************************************/
/*! exports provided: QuestionDuo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDuo", function() { return QuestionDuo; });
var QuestionDuo = /** @class */ (function () {
    function QuestionDuo(component, data) {
        this.component = component;
        this.data = data;
    }
    return QuestionDuo;
}());



/***/ }),

/***/ "./src/app/question/question.module.ts":
/*!*********************************************!*\
  !*** ./src/app/question/question.module.ts ***!
  \*********************************************/
/*! exports provided: QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_question_options_question_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/question-options/question-options.component */ "./src/app/question/components/question-options/question-options.component.ts");
/* harmony import */ var _components_question_code_block_question_code_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/question-code-block/question-code-block.component */ "./src/app/question/components/question-code-block/question-code-block.component.ts");
/* harmony import */ var ngx_highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlight-js */ "./node_modules/ngx-highlight-js/fesm5/ngx-highlight-js.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_components_question_options_question_options_component__WEBPACK_IMPORTED_MODULE_2__["QuestionOptionsComponent"], _components_question_code_block_question_code_block_component__WEBPACK_IMPORTED_MODULE_3__["QuestionCodeBlockComponent"]],
            entryComponents: [_components_question_options_question_options_component__WEBPACK_IMPORTED_MODULE_2__["QuestionOptionsComponent"], _components_question_code_block_question_code_block_component__WEBPACK_IMPORTED_MODULE_3__["QuestionCodeBlockComponent"]],
            exports: [_components_question_options_question_options_component__WEBPACK_IMPORTED_MODULE_2__["QuestionOptionsComponent"], _components_question_code_block_question_code_block_component__WEBPACK_IMPORTED_MODULE_3__["QuestionCodeBlockComponent"]]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "./src/app/shared/components/formatted-text/formatted-text.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/formatted-text/formatted-text.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/formatted-text/formatted-text.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/formatted-text/formatted-text.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data\">\n    <div *ngFor=\"let block of data.blocks\">\n        <div [ngSwitch]=\"block.type\" class=\"alert-response\" style=\"height: 50%\">\n            <div *ngSwitchCase=\"'header'\">\n                <div [ngSwitch]=\"block.level\">\n                    <h1 *ngSwitchCase=\"1\">{{block.content}}</h1>\n                    <h2 *ngSwitchCase=\"2\">{{block.content}}</h2>\n                    <h3 *ngSwitchCase=\"3\">{{block.content}}</h3>\n                </div>\n            </div>\n            <p *ngSwitchCase=\"'textSection'\" class=\"card-text\">{{block.content}}</p>\n            <textarea *ngSwitchCase=\"'codeSection'\" highlight-js [lang]=\"block.programmingLanguage\" [ngModel]=\"block.content\"></textarea>\n            <hr *ngSwitchCase=\"'separator'\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/formatted-text/formatted-text.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/formatted-text/formatted-text.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormattedTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattedTextComponent", function() { return FormattedTextComponent; });
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

var FormattedTextComponent = /** @class */ (function () {
    function FormattedTextComponent() {
    }
    FormattedTextComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormattedTextComponent.prototype, "data", void 0);
    FormattedTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formatted-text',
            template: __webpack_require__(/*! ./formatted-text.component.html */ "./src/app/shared/components/formatted-text/formatted-text.component.html"),
            styles: [__webpack_require__(/*! ./formatted-text.component.css */ "./src/app/shared/components/formatted-text/formatted-text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormattedTextComponent);
    return FormattedTextComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/level-card/level-card.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/level-card/level-card.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/level-card/level-card.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/level-card/level-card.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-primary mb-3\" [ngStyle]=\"{'opacity':opacity}\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h5 class=\"card-title\">\r\n                    {{level.name}}\r\n                    <span [class]=\"classBadge\">{{msgBadge}}</span>\r\n                </h5>\r\n                <p class=\"card-text\">{{level.experience}} exp</p>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-primary\" style=\"width: 25%\" (click)=\"playLevel()\" [disabled]=\"disabledButton\">Play</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/level-card/level-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/level-card/level-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: LevelCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelCardComponent", function() { return LevelCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _history_model_level_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../history/model/level.model */ "./src/app/history/model/level.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _history_services_sections_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../history/services/sections.service */ "./src/app/history/services/sections.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LevelCardComponent = /** @class */ (function () {
    function LevelCardComponent(router, sectionsService) {
        this.router = router;
        this.sectionsService = sectionsService;
        this.NAME_BADGE = "badge badge-";
        this.level = new _history_model_level_model__WEBPACK_IMPORTED_MODULE_1__["Level"]();
        this.opacity = 1;
    }
    LevelCardComponent.prototype.ngOnInit = function () {
        this.createBadge();
    };
    LevelCardComponent.prototype.playLevel = function () {
        this.sectionsService.setCurrentLevel(this.level);
        this.router.navigate(['/level', this.level.orden]);
    };
    LevelCardComponent.prototype.createBadge = function () {
        if (!this.level.unlocked) {
            this.classBadge = this.NAME_BADGE + "danger";
            this.msgBadge = "Lock";
            this.opacity = 0.5;
            this.disabledButton = true;
        }
        else if (this.level.complete) {
            this.classBadge = this.NAME_BADGE + "success";
            this.msgBadge = "Complete";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _history_model_level_model__WEBPACK_IMPORTED_MODULE_1__["Level"])
    ], LevelCardComponent.prototype, "level", void 0);
    LevelCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-level-card',
            template: __webpack_require__(/*! ./level-card.component.html */ "./src/app/shared/components/level-card/level-card.component.html"),
            styles: [__webpack_require__(/*! ./level-card.component.css */ "./src/app/shared/components/level-card/level-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _history_services_sections_service__WEBPACK_IMPORTED_MODULE_3__["SectionsService"]])
    ], LevelCardComponent);
    return LevelCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"assets/trophy.svg\" width=\"30\" height=\"30\" alt=\"\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div #navbar class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" (click)=\"goComponent('/home')\" i18n=\"navbar.li.HOME\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" (click)=\"goComponent('/sections')\" i18n=\"navbar.li.SECTIONS\">History mode</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\"nav-link\" (click)=\"goComponent('/competitive')\" i18n=\"navbar.li.SECTIONS\">Competitive mode</a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\r\n                    aria-expanded=\"false\">Mi cuenta</a>\r\n                <div class=\"dropdown-menu\">\r\n                    <a class=\"dropdown-item\" (click)=\"goComponent('/profile')\" i18n=\"navbar.li.SECTIONS\">Perfil</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" (click)=\"goComponent('/login')\" style=\"margin: 5px\">Cerrar sesión</a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.goComponent = function (component) {
        this.router.navigate([component]);
        jQuery(this.navBar.nativeElement).collapse('hide');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navbar'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "navBar", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/section-card/section-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/section-card/section-card.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/section-card/section-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/section-card/section-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [ngStyle]=\"{'opacity':opacity}\">\r\n    <!-- <img class=\"card-img-top img-fluid\" [src]=\"heroe.img\" [alt]=\"heroe.nombre\"> -->\r\n    <div class=\"card-body\">\r\n\r\n        <h4 class=\"card-title\">{{section.title}}\r\n            <span [class]=\"classBadge\">{{msgBadge}}</span>\r\n        </h4>\r\n\r\n        <p class=\"card-text\">{{section.description}}</p>\r\n        <p class=\"card-text\">\r\n            <small class=\"text-muted\">Null</small>\r\n        </p>\r\n\r\n        <button (click)=\"verSection()\" type=\"button\" class=\"btn btn-primary btn-block\" [disabled]=\"disabledButton\">\r\n      Show levels\r\n    </button>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/section-card/section-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/section-card/section-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: SectionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionCardComponent", function() { return SectionCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _history_model_section_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../history/model/section.model */ "./src/app/history/model/section.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionCardComponent = /** @class */ (function () {
    function SectionCardComponent(router) {
        this.router = router;
        this.NAME_BADGE = "badge badge-";
        this.section = new _history_model_section_model__WEBPACK_IMPORTED_MODULE_2__["Section"]();
        this.opacity = 1;
    }
    SectionCardComponent.prototype.ngOnInit = function () {
        this.createBadge();
    };
    SectionCardComponent.prototype.verSection = function () {
        this.router.navigate(['/section', this.section.orden]);
    };
    SectionCardComponent.prototype.createBadge = function () {
        if (!this.section.unlocked) {
            this.classBadge = this.NAME_BADGE + "danger";
            this.msgBadge = "Lock";
            this.opacity = 0.5;
            this.disabledButton = true;
        }
        else if (this.section.completeAll) {
            this.classBadge = this.NAME_BADGE + "success";
            this.msgBadge = "Complete";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _history_model_section_model__WEBPACK_IMPORTED_MODULE_2__["Section"])
    ], SectionCardComponent.prototype, "section", void 0);
    SectionCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-card',
            template: __webpack_require__(/*! ./section-card.component.html */ "./src/app/shared/components/section-card/section-card.component.html"),
            styles: [__webpack_require__(/*! ./section-card.component.css */ "./src/app/shared/components/section-card/section-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SectionCardComponent);
    return SectionCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/trophies/trophies.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/trophies/trophies.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/trophies/trophies.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/trophies/trophies.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center text-white bg-warning mb-3\" style=\"width: 100%\">\n  <div class=\"card-header\">\n      <h2 class=\"display-5\">Trophies</h2>\n  </div>\n  <div class=\"card-body\">\n      <ul class=\"list-group text-dark text-left\" style=\"margin-bottom: 15px\">\n          <li *ngFor=\"let trophy of trophies\" class=\"list-group-item list-group-item-light\">\n              <div class=\"row\">\n                  <img class=\"img-responsive\" [src]=\"getIcon(trophy)\" width=\"60\" height=\"60\">\n                  <div class=\"col\">\n                      <h4>{{trophy.challange.title}}</h4>\n                      {{trophy.challange.description}}\n                  </div>\n              </div>\n          </li>\n      </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/trophies/trophies.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/trophies/trophies.component.ts ***!
  \******************************************************************/
/*! exports provided: TrophiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrophiesComponent", function() { return TrophiesComponent; });
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

var TrophiesComponent = /** @class */ (function () {
    function TrophiesComponent() {
        this.trophies = [];
    }
    TrophiesComponent.prototype.ngOnInit = function () {
    };
    TrophiesComponent.prototype.getIcon = function (trophy) {
        return trophy.complete ? "assets/trophy.svg" : "assets/no-trophy.svg";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TrophiesComponent.prototype, "trophies", void 0);
    TrophiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trophies',
            template: __webpack_require__(/*! ./trophies.component.html */ "./src/app/shared/components/trophies/trophies.component.html"),
            styles: [__webpack_require__(/*! ./trophies.component.css */ "./src/app/shared/components/trophies/trophies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrophiesComponent);
    return TrophiesComponent;
}());



/***/ }),

/***/ "./src/app/shared/model/info-user.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/model/info-user.model.ts ***!
  \*************************************************/
/*! exports provided: InfoUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUser", function() { return InfoUser; });
var InfoUser = /** @class */ (function () {
    function InfoUser(data) {
        this.levelsUnlock = [];
        this.sectionsUnlock = [];
        this.challangesComplete = [];
        this.trophiesComplete = [];
        this.newExp = 0;
        this.newRank = {};
        if (!data) {
            return;
        }
        this.levelsUnlock = data.levelsUnlock !== undefined ? data.levelsUnlock : [];
        this.sectionsUnlock = data.sectionsUnlock !== undefined ? data.sectionsUnlock : [];
        this.challangesComplete = data.challangesComplete !== undefined ? data.challangesComplete : [];
        this.trophiesComplete = data.trophiesComplete !== undefined ? data.trophiesComplete : [];
        this.newExp = data.newExp;
        this.newRank = data.newRank;
    }
    return InfoUser;
}());



/***/ }),

/***/ "./src/app/shared/services/exception.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/exception.service.ts ***!
  \******************************************************/
/*! exports provided: ExceptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionService", function() { return ExceptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExceptionService = /** @class */ (function () {
    function ExceptionService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ExceptionService.prototype.sendException = function (status) {
        this.subject.next(status);
    };
    ExceptionService.prototype.clearException = function () {
        this.subject.next();
    };
    ExceptionService.prototype.getException = function () {
        return this.subject.asObservable();
    };
    ExceptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ExceptionService);
    return ExceptionService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlight-js */ "./node_modules/ngx-highlight-js/fesm5/ngx-highlight-js.js");
/* harmony import */ var _shared_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.routing */ "./src/app/shared/shared.routing.ts");
/* harmony import */ var _components_section_card_section_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/section-card/section-card.component */ "./src/app/shared/components/section-card/section-card.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _components_level_card_level_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/level-card/level-card.component */ "./src/app/shared/components/level-card/level-card.component.ts");
/* harmony import */ var _components_trophies_trophies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/trophies/trophies.component */ "./src/app/shared/components/trophies/trophies.component.ts");
/* harmony import */ var _components_formatted_text_formatted_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/formatted-text/formatted-text.component */ "./src/app/shared/components/formatted-text/formatted-text.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_exception_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/exception.service */ "./src/app/shared/services/exception.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_highlight_js__WEBPACK_IMPORTED_MODULE_2__["HighlightJsModule"]
            ],
            declarations: [
                _components_section_card_section_card_component__WEBPACK_IMPORTED_MODULE_4__["SectionCardComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_level_card_level_card_component__WEBPACK_IMPORTED_MODULE_6__["LevelCardComponent"],
                _components_trophies_trophies_component__WEBPACK_IMPORTED_MODULE_7__["TrophiesComponent"],
                _components_formatted_text_formatted_text_component__WEBPACK_IMPORTED_MODULE_8__["FormattedTextComponent"]
            ],
            exports: [
                _components_section_card_section_card_component__WEBPACK_IMPORTED_MODULE_4__["SectionCardComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_level_card_level_card_component__WEBPACK_IMPORTED_MODULE_6__["LevelCardComponent"],
                _components_trophies_trophies_component__WEBPACK_IMPORTED_MODULE_7__["TrophiesComponent"],
                _components_formatted_text_formatted_text_component__WEBPACK_IMPORTED_MODULE_8__["FormattedTextComponent"]
            ], providers: [
                _services_exception_service__WEBPACK_IMPORTED_MODULE_10__["ExceptionService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.routing.ts":
/*!******************************************!*\
  !*** ./src/app/shared/shared.routing.ts ***!
  \******************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var appRoutes = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes);


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://192.168.1.114:8080'
};
/*export const environment = {
  production: false,
  baseUrl: 'http://192.168.1.111:8080'
};*/
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Edu\Documents\TFG-DuolingoHTMLCSS\Uniovi - QuizApp\quizwebapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map