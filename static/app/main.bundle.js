webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_homepage_homepage_component__ = __webpack_require__("./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_upload_upload_component__ = __webpack_require__("./src/app/components/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sounds_sounds_component__ = __webpack_require__("./src/app/components/sounds/sounds.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_5__components_edit_edit_component__["a" /* EditComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_homepage_homepage_component__["a" /* HomePageComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_6__components_upload_upload_component__["a" /* UploadComponent */] },
    { path: 'sounds', component: __WEBPACK_IMPORTED_MODULE_7__components_sounds_sounds_component__["a" /* SoundsComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_file_drop__ = __webpack_require__("./node_modules/ngx-file-drop/ngx-file-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_auth_auth_reducer__ = __webpack_require__("./src/app/stores/auth/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_root_root_component__ = __webpack_require__("./src/app/components/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__ = __webpack_require__("./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sidebar_left_left_component__ = __webpack_require__("./src/app/components/sidebar/left/left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sidebar_top_top_component__ = __webpack_require__("./src/app/components/sidebar/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_upload_upload_component__ = __webpack_require__("./src/app/components/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sounds_sounds_component__ = __webpack_require__("./src/app/components/sounds/sounds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_soundplayer_soundplayer_component__ = __webpack_require__("./src/app/components/soundplayer/soundplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_root_root_component__["a" /* RootComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_sidebar_left_left_component__["a" /* LeftSideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_sidebar_top_top_component__["a" /* TopSideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_sounds_sounds_component__["a" /* SoundsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_soundplayer_soundplayer_component__["a" /* SoundPlayerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* StoreModule */].forRoot({
                    auth: __WEBPACK_IMPORTED_MODULE_6__stores_auth_auth_reducer__["a" /* AuthReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ngx_file_drop__["a" /* FileDropModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_api_api_service__["a" /* ApiService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__components_root_root_component__["a" /* RootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ".errors-container{\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\n.already-auth{\r\n  padding-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.isAuth\" class=\"row\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-8\">\n    <div class=\"py-5 text-center\">\n      <h2>Créer un compte</h2>\n      <p class=\"lead\">Créez vous un compte et passez votre première commande ! </p>\n    </div>\n\n    <div class=\"errors-container\">\n      <p class=\"error\" *ngFor=\"let error of errors\">\n        {{error.msg}}\n      </p>\n    </div>\n\n    <h4 class=\"mb-3\">Informations personnelle</h4>\n    <form #editForm=\"ngForm\" (ngSubmit)=\"onSubmit(editForm.value)\" >\n      <div class=\"row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"firstName\">Nom </label>\n          <input name=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Dupont\" value=\"\" ngModel>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"lastName\">Prénom</label>\n          <input name=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" value=\"\" placeholder=\"Jean\" ngModel>\n        </div>\n      </div>\n      <div class=\"mb-3\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n          </div>\n          <input name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Nom de compte ex : dupont.jean\" ngModel>\n        </div>\n      </div>\n      <div class=\"mb-3\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n          </div>\n          <input name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Mot de passe\" ngModel>\n          <input name=\"confirmPassword\" type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirmez le mot de passe\" ngModel>\n        </div>\n      </div>\n      <hr class=\"mb-4\">\n      <div class=\"mb-3\">\n        <label for=\"mail\">Email <span class=\"text-muted\"></span></label>\n        <input name=\"mail\" type=\"text\" class=\"form-control\" id=\"mail\" placeholder=\"dupont.jean@esgi.com\" ngModel>\n      </div>\n      <div class=\"mb-3\">\n        <label for=\"phone\">Numéro de téléphone : </label>\n        <input name=\"phone\" type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"+33635000007\" ngModel>\n      </div>\n\n      <h4>Date de naissance</h4>\n      <div class=\"row\">\n        <div class=\"col-md-5 mb-3\">\n          <label for=\"day\">Jour</label>\n          <input name=\"birthDay\" type=\"number\" class=\"form-control\" id=\"day\" placeholder=\"31\" ngModel>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"state\">Mois</label>\n          <select name=\"birthMonth\" class=\"custom-select d-block w-100\" id=\"state\" required=\"Selectionnez un mois\" ngModel>\n            <option value=\"0\">Mois</option>\n            <option value=\"1\">jan</option>\n            <option value=\"2\">fév</option>\n            <option value=\"3\">mar</option>\n            <option value=\"4\">avr</option>\n            <option value=\"5\">mai</option>\n            <option value=\"6\">jun</option>\n            <option value=\"7\">juil</option>\n            <option value=\"8\">aoû</option>\n            <option value=\"9\">sep</option>\n            <option value=\"10\">oct</option>\n            <option value=\"11\">nov</option>\n            <option value=\"12\">déc</option>\n          </select>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"year\">Année</label>\n          <input name=\"birthYear\" type=\"number\" class=\"form-control\" id=\"year\" value=\"2000\" placeholder=\"YYYY\" ngModel>\n        </div>\n      </div>\n      <hr class=\"mb-4\">\n      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">CREER MON COMPTE</button>\n    </form>\n  </div>\n</div>\n\n<div *ngIf=\"!auth.isAuth\" class=\"row already-auth\">\n  <div class=\"col-xs-3 col-sm-4 col-md-4\"></div>\n  <div class=\"col-xs-3 col-sm-4 col-md-4\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Vous devez etre connecté pour accéder à cette interface.</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.errors = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    EditComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var newUser = form;
        this.errors = [];
        if (form.password !== form.confirmPassword) {
            this.errors.push({ msg: 'Le mot de passe de confirmation est inccorect.' });
            return;
        }
        newUser.birthDate = new Date(form.birthYear, form.birthMonth - 1, form.birthDay).getTime();
        this.apiService.createAccount(newUser).subscribe(function (result) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["d" /* LoginIn */](result));
        }, function (result) {
            if (Array.isArray(result.error)) {
                _this.errors = result.error;
            }
            else {
                _this.errors = [result.error];
            }
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.errors = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.isAuth\" class=\"row login-container\">\n  <div class=\"col md-3\">\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm.value)\"  class=\"form-signin\">\n      <img class=\"mb-4 logo-top\"  src=\"./assets/images/burger.png\" alt=\"\" width=\"72\" height=\"72\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">S'authentifier</h1>\n\n      <span class=\"error-msg\" *ngIf=\"error.length\">\n        {{ error }}\n      </span>\n\n      <label for=\"account\" class=\"sr-only\">Addresse email/ nom de compte</label>\n      <input type=\"account\" name=\"account\" id=\"account\" class=\"form-control\" placeholder=\"Addresse mail\" required autofocus ngModel>\n      <label for=\"inputPassword\" class=\"sr-only\">Mot de passe</label>\n      <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Mot de passe\" required ngModel>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Se connecter</button>\n    </form>\n  </div>\n</div>\n\n<div *ngIf=\"auth.isAuth\" class=\"row already-auth\">\n  <div class=\"col-xs-3 col-sm-4 col-md-4\"></div>\n  <div class=\"col-xs-3 col-sm-4 col-md-4\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Vous etes connecté en tant que {{ auth.lastName }} {{ auth.firstName }}</h1>\n    <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"logout()\">Se déconnecter</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.error = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.error = '';
        this.apiService.auth(form).subscribe(function (auth) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["d" /* LoginIn */](auth));
        }, function (err) {
            _this.error = err.error.message;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["c" /* LogOut */]());
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".errors-container{\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\n.already-auth{\r\n  padding-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.isAuth\" class=\"row\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-8\">\n    <div class=\"py-5 text-center\">\n      <h2>Créer un compte</h2>\n      <p class=\"lead\">Créez vous un compte et créez votre premier morceaux ! </p>\n    </div>\n\n    <div class=\"errors-container\">\n      <p class=\"error\" *ngFor=\"let error of errors\">\n        {{error.msg}}\n      </p>\n    </div>\n\n    <h4 class=\"mb-3\">Informations personnelle</h4>\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm.value)\" >\n      <div class=\"row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"firstName\">Nom </label>\n          <input name=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Dupont\" value=\"\" ngModel>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"lastName\">Prénom</label>\n          <input name=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" value=\"\" placeholder=\"Jean\" ngModel>\n        </div>\n      </div>\n      <div class=\"mb-3\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n          </div>\n          <input name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Nom de compte ex : dupont.jean\" ngModel>\n        </div>\n      </div>\n      <div class=\"mb-3\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n          </div>\n          <input name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Mot de passe\" ngModel>\n          <input name=\"confirmPassword\" type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirmez le mot de passe\" ngModel>\n        </div>\n      </div>\n      <hr class=\"mb-4\">\n      <div class=\"mb-3\">\n        <label for=\"email\">Email <span class=\"text-muted\"></span></label>\n        <input name=\"email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"dupont.jean@esgi.com\" ngModel>\n      </div>\n      <div class=\"mb-3\">\n        <label for=\"artistName\">Nom d'artiste <span class=\"text-muted\"></span></label>\n        <input name=\"artistName\" type=\"text\" class=\"form-control\" id=\"artistName\" placeholder=\"DJ ESGI\" ngModel>\n      </div>\n      <div class=\"mb-3\">\n        <label for=\"phone\">Numéro de téléphone : </label>\n        <input name=\"phone\" type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"+33635000007\" ngModel>\n      </div>\n\n      <h4>Date de naissance</h4>\n      <div class=\"row\">\n        <div class=\"col-md-5 mb-3\">\n          <label for=\"day\">Jour</label>\n          <input name=\"birthDay\" type=\"number\" min=\"1\" max=\"31\" class=\"form-control\" id=\"day\" placeholder=\"31\" ngModel>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"state\">Mois</label>\n          <select name=\"birthMonth\" class=\"custom-select d-block w-100\" id=\"state\" required=\"Selectionnez un mois\" ngModel>\n            <option value=\"0\">Mois</option>\n            <option value=\"1\">jan</option>\n            <option value=\"2\">fév</option>\n            <option value=\"3\">mar</option>\n            <option value=\"4\">avr</option>\n            <option value=\"5\">mai</option>\n            <option value=\"6\">jun</option>\n            <option value=\"7\">juil</option>\n            <option value=\"8\">aoû</option>\n            <option value=\"9\">sep</option>\n            <option value=\"10\">oct</option>\n            <option value=\"11\">nov</option>\n            <option value=\"12\">déc</option>\n          </select>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"year\">Année</label>\n          <input name=\"birthYear\" type=\"number\" class=\"form-control\" id=\"year\" value=\"2000\" placeholder=\"YYYY\" ngModel>\n        </div>\n      </div>\n      <hr class=\"mb-4\">\n      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">CREER MON COMPTE</button>\n    </form>\n  </div>\n</div>\n\n<div *ngIf=\"auth.isAuth\" class=\"row already-auth\">\n  <div class=\"col-xs-3 col-sm-4 col-md-4\"></div>\n  <div class=\"col-xs-3 col-sm-4 col-md-4\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Vous etes connecté en tant que {{ auth.lastName }} {{ auth.firstName }}</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(apiService, store, router) {
        this.apiService = apiService;
        this.store = store;
        this.router = router;
        this.errors = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var newUser = form;
        this.errors = [];
        if (form.password !== form.confirmPassword) {
            this.errors.push({ msg: 'Le mot de passe de confirmation est inccorect.' });
            return;
        }
        newUser.birthDate = new Date(form.birthYear, form.birthMonth - 1, form.birthDay).getTime();
        this.apiService.createAccount(newUser).subscribe(function (response) {
            var result = response;
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["d" /* LoginIn */](result));
            _this.router.navigateByUrl('/home');
        }, function (result) {
            alert(result.error.message);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <app-left-sidebar></app-left-sidebar>\n  <app-top-sidebar></app-top-sidebar>\n  <div class=\"content\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RootComponent = /** @class */ (function () {
    function RootComponent(store) {
        this.store = store;
    }
    RootComponent.prototype.loadWebAuth = function () {
        var authItem = JSON.parse(localStorage.getItem('authItem'));
        if (authItem && authItem.isAuth) {
            console.log(authItem);
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_auth_auth_actions__["d" /* LoginIn */](authItem));
        }
        else {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_auth_auth_actions__["c" /* LogOut */]());
        }
    };
    RootComponent.prototype.ngOnInit = function () {
        this.loadWebAuth();
    };
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/root/root.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/left/left.component.css":
/***/ (function(module, exports) {

module.exports = ".left-sidebar{\n  height: 100%;\n  width: var(--sidebar-size);\n  position: fixed;\n  left: 0px;\n  background-color: rgb(22,29,35);\n  z-index: 10;\n}\n\n.button-container{\n  width: 100%;\n}\n\n.left-button{\n  color: #ffffff;\n  font-size: 17px;\n  text-align: center;\n  height: var(--sidebar-size);\n  padding-top: 18px;\n}\n\n.main-button{\n  font-size: 27px;\n  background-color: #001f3f;\n  padding-top: 14px;\n}\n\n.fade.show {\n  opacity: 1;\n  z-index: 99999 !important;\n}\n"

/***/ }),

/***/ "./src/app/components/sidebar/left/left.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"left-sidebar\">\n\n  <div class=\"button-container\">\n    <div routerLink=\"/\" class=\"left-button main-button\">\n      <i class=\"fab fa-soundcloud\"></i>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"!auth.isAuth\" class=\"button-container\">\n    <div class=\"left-button\" data-target=\"#modalLogin\" data-toggle=\"modal\" data-target=\"#modalLogin\">\n      <i class=\"fas fa-sign-in-alt\"></i>\n    </div>\n    <div routerLink=\"/register\" class=\"left-button\">\n      <i class=\"fas fa-user-plus\"></i>\n    </div>\n  </div>\n\n  <div *ngIf=\"auth.isAuth\" class=\"button-container\">\n    <div class=\"left-button\">\n      <i class=\"fas fa-users-cog\"></i>\n    </div>\n\n    <div  routerLink=\"/upload\" class=\"left-button\">\n      <i class=\"fas fa-file-upload\"></i>\n    </div>\n\n    <div routerLink=\"/sounds\" class=\"left-button\">\n      <i class=\"fas fa-music\"></i>\n    </div>\n\n    <div *ngIf=\"auth.rank >= 7\" class=\"button-container\">\n      <div class=\"left-button\">\n        <i class=\"fas fa-tachometer-alt\"></i>\n      </div>\n    </div>\n\n    <div (click)=\"logout()\" class=\"left-button\" id=\"logout-left-button\">\n      <div style=\"text-align:center \">\n        <i class=\"fas fa-power-off\"></i>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div style=\"z-index: 99999;\" class=\"modal fade\" id=\"modalLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLoginLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalLoginLabel\">S'authentifier</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col md-3\">\n          <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm.value)\"  class=\"form-signin\">\n            <span style=\"color: red;\" *ngIf=\"error.length\">\n              {{ error }}\n            </span>\n            <label for=\"username\" class=\"sr-only\">Addresse email/ nom de compte</label>\n            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" placeholder=\"Nom de compte\" required autofocus ngModel>\n            <label for=\"inputPassword\" class=\"sr-only\">Mot de passe</label>\n            <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Mot de passe\" required ngModel>\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Se connecter</button>\n          </form>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/left/left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeftSideBarComponent = /** @class */ (function () {
    function LeftSideBarComponent(store, apiService, router) {
        this.store = store;
        this.apiService = apiService;
        this.router = router;
        this.error = '';
    }
    LeftSideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    LeftSideBarComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.apiService.auth(form).subscribe(function (auth) {
            $('#modalLogin').modal('hide');
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__stores_auth_auth_actions__["d" /* LoginIn */](auth));
            _this.router.navigateByUrl('/home');
        }, function (err) {
            alert("L'authentification a échoué, merci de réessayer.");
            console.log(err);
        });
    };
    LeftSideBarComponent.prototype.logout = function () {
        this.apiService.logout(this.auth.token).subscribe(function () { }, function (err) {
            console.log(err);
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__stores_auth_auth_actions__["c" /* LogOut */]());
        this.router.navigateByUrl('/home');
    };
    LeftSideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-left-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/left/left.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/left/left.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_3__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LeftSideBarComponent);
    return LeftSideBarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/top/top.component.css":
/***/ (function(module, exports) {

module.exports = ".top-sidebar{\n  width: 100%;\n  height: var(--sidebar-size);\n  position: fixed;\n  top: 0px;\n  left: var(--sidebar-size);\n  z-index: 10;\n  background-color: rgb(255,255,255);\n}\n\n.sidebar-container{\n  position: relative;\n  width:100%;\n  height:100%;\n}\n\n.search-input{\n  border: none;\n  width: 232px;\n  padding-left: 5px;\n  font-weight: 300;\n}\n\n.sidebar-search{\n  position: absolute;\n  left: 28px;\n  top: 20px;\n}\n\n.sidebar-user-profile{\n  position: absolute;\n  right: 140px;\n  top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/sidebar/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-sidebar\">\n  <div class=\"sidebar-container\">\n\n    <div class=\"sidebar-search\">\n      <form>\n        <i class=\"fas fa-search\"></i>\n        <input class=\"search-input roboto-light\" type=\"search\" placeholder=\"Rechercher musiques, artistes...\" aria-label=\"Search\">\n      </form>\n    </div>\n    <div class=\"sidebar-user-profile\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"user-profile\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"user-profile\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/top/top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopSideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopSideBarComponent = /** @class */ (function () {
    function TopSideBarComponent(store) {
        this.store = store;
        this.errors = [];
    }
    TopSideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    TopSideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-top-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/top/top.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/top/top.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], TopSideBarComponent);
    return TopSideBarComponent;
}());



/***/ }),

/***/ "./src/app/components/soundplayer/soundplayer.component.css":
/***/ (function(module, exports) {

module.exports = ".player-container{\n  position: relative;\n  margin-bottom: 12px;\n  height: 220px;\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.player-image{\n  position: absolute;\n  height: 128px;\n  width: 128px;\n  top: 44px;\n  left: 26px;\n  background-image: url(http://localhost:3000/icons/wave.svg);\n  background-size: 100% auto;\n}\n\n.waveform-container{\n  width: 460px;\n  position: absolute;\n  left: 220px;\n  bottom: 26px;\n}\n\n.player-btn{\n  position: absolute;\n  top: 27px;\n  color: #ffffff;\n  left: 193px;\n  font-size: 48px;\n}\n\n.sound-info{\n  position: absolute;\n  top: 34px;\n  color: #D3D3D3;\n  left: 250px;\n}\n\n.sound-artist{\n  color: #999;\n}\n\n.sound-name{\n  color: #333;\n}\n"

/***/ }),

/***/ "./src/app/components/soundplayer/soundplayer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player-container\">\n  <div class=\"player-image\"></div>\n  <div class=\"player-btn\" (click)=\"playPause()\">\n    <i *ngIf=\"!isPlaying\" class=\"far fa-play-circle\"></i>\n    <i *ngIf=\"isPlaying\"  class=\"fas fa-pause-circle\"></i>\n  </div>\n  <div class=\"sound-info\">\n    <div class=\"sound-artist\">{{sound.artistName}}</div>\n    <div class=\"sound-name\">{{sound.name}}</div>\n  </div>\n  <div class=\"waveform-container\">\n    <div attr.id=\"{{playerId}}\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/soundplayer/soundplayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SoundPlayerComponent = /** @class */ (function () {
    function SoundPlayerComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.playerId = "";
        this.wavesurfer = {};
        this.isPlaying = false;
        this.playerLoaded = false;
    }
    SoundPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var playerId = 'player-' + this.sound.id;
        var soundUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].app_url + '/sound/load/' + this.sound.uid;
        this.playerId = playerId;
        setTimeout(function () {
            var ctx = document.createElement('canvas').getContext('2d');
            var linGrad = ctx.createLinearGradient(0, 64, 0, 200);
            linGrad.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
            linGrad.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');
            _this.wavesurfer = WaveSurfer.create({
                container: '#' + playerId,
                // The color can be either a simple CSS color or a Canvas gradient
                waveColor: linGrad,
                progressColor: 'hsla(200, 100%, 30%, 0.5)',
                cursorColor: '#fff',
                // This parameter makes the waveform look like SoundCloud's player
                barWidth: 3
            });
            _this.wavesurfer.load(soundUrl);
            _this.wavesurfer.on('ready', function () {
                _this.playerLoaded = true;
                //this.wavesurfer.play();
            });
        }, 1000);
    };
    SoundPlayerComponent.prototype.playPause = function () {
        this.wavesurfer.playPause();
        this.isPlaying = !this.isPlaying;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SoundPlayerComponent.prototype, "sound", void 0);
    SoundPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-soundplayer',
            template: __webpack_require__("./src/app/components/soundplayer/soundplayer.component.html"),
            styles: [__webpack_require__("./src/app/components/soundplayer/soundplayer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], SoundPlayerComponent);
    return SoundPlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/sounds/sounds.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sounds/sounds.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12\" *ngFor=\"let sound of sounds\">\n    <app-soundplayer [sound]=\"sound\"></app-soundplayer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sounds/sounds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoundsComponent = /** @class */ (function () {
    function SoundsComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
    }
    SoundsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
            _this.apiService.getUserSound(auth.token).subscribe(function (results) {
                console.log(results);
                _this.sounds = results;
            }, function (err) {
                alert(err.error.error.message || err.msg);
            });
        });
    };
    SoundsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sounds',
            template: __webpack_require__("./src/app/components/sounds/sounds.component.html"),
            styles: [__webpack_require__("./src/app/components/sounds/sounds.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], SoundsComponent);
    return SoundsComponent;
}());



/***/ }),

/***/ "./src/app/components/upload/upload.component.css":
/***/ (function(module, exports) {

module.exports = ".files-container{\n  width: 100%;\n}\n\n.file-container{\n  width: 120px;\n  height: 184px;\n  border: 2px solid #484848;\n  display: inline-block;\n  padding-right: 12px;\n  word-wrap: break-word;\n}\n"

/***/ }),

/***/ "./src/app/components/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.isAuth\" class=\"row\">\n\n  <div class=\"col col-xs-12 col-sm-12 col-md-12\">\n    <file-drop\n      headertext=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\n      (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\"\n      headertext=\" \"\n      customstyle=\"uploader-container\">\n\n    </file-drop>\n    <p *ngIf=\"filesResults.length < 1\" class=\"roboto-bold\">Déposer des instruments</p>\n\n    <div class=\"files-container\">\n      <div *ngFor=\"let file of filesResults\" class=\"file-container\">\n        {{file.name}}\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(apiService, store, http) {
        this.apiService = apiService;
        this.store = store;
        this.http = http;
        this.files = [];
        this.filesResults = [];
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    UploadComponent.prototype.dropped = function (event) {
        var _this = this;
        console.log("dropped");
        this.files = event.files;
        var _loop_1 = function (droppedFile) {
            // Is it a file wave?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    console.log(droppedFile.relativePath, file);
                    var formData = new FormData();
                    formData.append('file', file, droppedFile.relativePath);
                    // Headers
                    var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                        'token': _this.auth.token
                    });
                    _this.http.post('http://localhost:3000/sound/upload', formData, { headers: headers })
                        .subscribe(function (data) {
                        _this.filesResults.push({ name: file.name, sucess: true });
                    }, function (err) {
                        _this.filesResults.push({ name: file.name, sucess: false });
                        alert(err.error.error.message || err.msg);
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            _loop_1(droppedFile);
        }
    };
    UploadComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    UploadComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upload',
            template: __webpack_require__("./src/app/components/upload/upload.component.html"),
            styles: [__webpack_require__("./src/app/components/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.createAccount = function (newUser) {
        var urlRegister;
        urlRegister = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/account/register';
        return this.http.post(urlRegister, newUser);
    };
    ApiService.prototype.auth = function (data) {
        var urlLogin;
        urlLogin = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/account/auth';
        return this.http.post(urlLogin, data);
    };
    ApiService.prototype.logout = function (token) {
        var urlLogin;
        urlLogin = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/account/logout?token=' + token;
        return this.http.get(urlLogin);
    };
    ApiService.prototype.getUserSound = function (token) {
        var urlSounds;
        urlSounds = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/sounds/user?token=' + token;
        return this.http.get(urlSounds);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/stores/auth/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoginIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LogOut; });
var LOGIN_IN = 'LOGIN_IN';
var LOG_OUT = 'LOGIN_OUT';
var LoginIn = /** @class */ (function () {
    function LoginIn(payload) {
        this.payload = payload;
        this.type = LOGIN_IN;
    }
    return LoginIn;
}());

var LogOut = /** @class */ (function () {
    function LogOut() {
        this.type = LOG_OUT;
    }
    return LogOut;
}());



/***/ }),

/***/ "./src/app/stores/auth/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AuthReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");

var defaultState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    artistName: '',
    rank: 0,
    token: '',
    isAuth: false
};
function AuthReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* LOGIN_IN */]:
            var newState = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                phone: action.payload.phone,
                email: action.payload.email,
                artistName: action.payload.artistName,
                rank: action.payload.rank,
                token: action.payload.token,
                isAuth: true
            };
            localStorage.setItem('authItem', JSON.stringify(newState));
            return newState;
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["b" /* LOG_OUT */]:
            localStorage.setItem('authItem', JSON.stringify(defaultState));
            return defaultState;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    app_url: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map