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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\r\nbody {\r\n  padding: 10px;\r\n}\r\nbody, h1, h2, h3 {\r\n  color: #444;\r\n  font-family: 'Lato', Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;  \r\n}\r\nh1 {\r\n  color: #3f51b5;\r\n  font-weight: bolder;\r\n}\r\n.header-image {\r\n  background-image: url('https://angular.io/assets/images/logos/angular/angular.png');\r\n  background-size: cover;\r\n}\r\n* {\r\n  font-family: 'Lato', Arial, Helvetica, sans-serif;\r\n}\r\n.main {\r\n  margin: 20px;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n/* Create two equal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  width: 50%;\r\n  padding: 10px;   \r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 800px) {\r\n  .column {\r\n    width: 100%;\r\n  }\r\n}\r\n.grouping-buttons button {\r\n  margin-right: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaURBQWlEO0VBQ2pELG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaURBQWlEO0FBQ25EO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBLDREQUE0RDtBQUM1RDtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0EsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQSx1R0FBdUc7QUFDdkc7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBsaWNhdGlvbi13aWRlIFN0eWxlcyAqL1xyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmJvZHksIGgxLCBoMiwgaDMge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7ICBcclxufSAgXHJcbmgxIHtcclxuICBjb2xvcjogIzNmNTFiNTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9hbmd1bGFyLmlvL2Fzc2V0cy9pbWFnZXMvbG9nb3MvYW5ndWxhci9hbmd1bGFyLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4vKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbi5jb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTBweDsgICBcclxufVxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JvdXBpbmctYnV0dG9ucyBidXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<mat-card [style.backgroundColor]=\"'#EAEDED'\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"header-image\"></div>\r\n    <mat-card-title>{{title}}</mat-card-title>\r\n    <mat-card-subtitle>Presentation of real customer portfolio and recommended model</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      <label>Customer Id: <input [(ngModel)]=\"customerId\" placeholder=\"customerId\"/></label>\r\n    </p>\r\n    <p>Customer risk profile: {{customerPortfolio.customerRiskProfile}}</p>    \r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button onClick=\"window.print();\">Print</button>    \r\n  </mat-card-actions>\r\n</mat-card>\r\n\r\n<div class=\"main\">  \r\n  <div class=\"row\">\r\n    <div class=\"column\">\r\n      <h2>Current portfolio</h2>\r\n      <div class=\"grouping-buttons\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSelected('real','product');\">By products</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSelected('real','industry');\">By industry</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSelected('real','currency');\">By currency</button>\r\n        <div style=\"clear: both\">\r\n          <button mat-raised-button (click)=\"onHistory('real');\">History by product</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"onPrediction('real');\">Analysis</button>\r\n        </div>\r\n      </div>\r\n      <div id=\"chartPortfolioReal\" style=\"width: 500px;\"></div>\r\n    </div>\r\n    <div class=\"column\">\r\n      <h2>Recommended portfolio</h2>\r\n      <div class=\"grouping-buttons\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSelected('model','product');\">By products</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSelected('model','industry');\">By industry</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSelected('model','currency');\">By currency</button>\r\n        <div style=\"clear: both\">\r\n          <button mat-raised-button (click)=\"onHistory('model');\">History by product</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"onPrediction('model');\">Analysis</button>\r\n          <button mat-raised-button color=\"warn\" (click)=\"onCommit();\">Commit</button>\r\n        </div>\r\n      </div>\r\n      <div id=\"chartPortfolioModel\" style=\"width: 500px;\"></div>\r\n    </div>  \r\n  </div>\r\n  <div class=\"row\">\r\n      <div id=\"valueChart\" style=\"width: 90%;\"></div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _customer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-data.service */ "./src/app/customer-data.service.ts");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__);













_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
var AppComponent = /** @class */ (function () {
    function AppComponent(zone, document, renderer) {
        this.zone = zone;
        this.document = document;
        this.renderer = renderer;
        this.selectedRealPortfolioGrouping = 'product';
        this.selectedModelPortfolioGrouping = 'product';
        this.mapReal = new Map();
        this.mapModel = new Map();
        this.colorSet = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["ColorSet"]();
        this.colorMap = new Map();
        this.title = 'Investment Advisory Calculator';
        this.customerId = "1";
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__["pdfMake"].vfs;
        this.customerPortfolio = _customer_data_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDataService"].getCustomerPortfolio(this.customerId);
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.colorMod = function (str) {
        var color = this.colorMap.get(str);
        if (color == null)
            this.colorMap.set(str, color = this.colorSet.next());
        return color;
    };
    AppComponent.prototype.makeChartPortfolioReal = function () {
        var _this = this;
        if (this.chartPortfolioReal)
            this.chartPortfolioReal.dispose();
        var chartPortfolioReal = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartPortfolioReal", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart3D"]);
        chartPortfolioReal.radius = 175;
        chartPortfolioReal.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chartPortfolioReal.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
        var data = [];
        if (this.selectedRealPortfolioGrouping != 'product') {
            var it = this.mapReal.keys();
            while (true) {
                var result = it.next();
                if (result.done)
                    break;
                data.push({ product: result.value, share: this.mapReal.get(result.value) });
            }
        }
        else {
            for (var i = 0; i < this.customerPortfolio.productsAllocation.length; i++) {
                var product = this.customerPortfolio.productsAllocation[i][0];
                var share = this.customerPortfolio.productsAllocation[i][1];
                data.push({ product: product.name, share: share, symbol: product.id });
            }
        }
        chartPortfolioReal.data = data;
        var series = chartPortfolioReal.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries3D"]());
        series.slices.template.adapter.add("fill", function (value, target, key) {
            var cat = target.dataItem.properties["category"];
            if (cat == null || cat == undefined)
                cat = "";
            return _this.colorMod(cat);
        });
        series.dataFields.value = "share";
        series.dataFields.category = "product";
        series.ticks.template.disabled = true;
        series.labels.template.disabled = true;
        series.slices.template.events.on("hit", function (event) {
            var symbol = data[event.target.dataItem.index].symbol;
            if (AppComponent_1.selectedRealProduct.has(symbol))
                AppComponent_1.selectedRealProduct.delete(symbol);
            else
                AppComponent_1.selectedRealProduct.add(symbol);
            console.log(AppComponent_1.selectedRealProduct);
        });
        chartPortfolioReal.svgContainer.htmlElement.style.height =
            (data.length * 45 + chartPortfolioReal.radius * 2) + "px";
        this.chartPortfolioReal = chartPortfolioReal;
    };
    AppComponent.prototype.makeChartPortfolioModel = function () {
        var _this = this;
        if (this.chartPortfolioModel)
            this.chartPortfolioModel.dispose();
        var chartPortfolioModel = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartPortfolioModel", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart3D"]);
        chartPortfolioModel.radius = 175;
        chartPortfolioModel.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chartPortfolioModel.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
        var data = [];
        if (this.selectedModelPortfolioGrouping != 'product') {
            var it = this.mapModel.keys();
            while (true) {
                var result = it.next();
                if (result.done)
                    break;
                data.push({ product: result.value, share: this.mapModel.get(result.value), c: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("black") });
            }
        }
        else {
            for (var i = 0; i < this.customerPortfolio.customerModelPortfolio.productsAllocation.length; i++) {
                var product = this.customerPortfolio.productsAllocation[i][0];
                var share = this.customerPortfolio.productsAllocation[i][1];
                data.push({ product: product.name, share: share, symbol: product.id, c: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("black") });
            }
        }
        chartPortfolioModel.data = data;
        var series = chartPortfolioModel.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries3D"]());
        series.slices.template.adapter.add("fill", function (value, target, key) {
            var cat = target.dataItem.properties["category"];
            if (cat == null || cat == undefined)
                cat = "";
            return _this.colorMod(cat);
        });
        series.propertyFields.stroke = "c";
        series.dataFields.value = "share";
        series.dataFields.category = "product";
        series.ticks.template.disabled = true;
        series.labels.template.disabled = true;
        series.slices.template.events.on("hit", function (event) {
            var symbol = data[event.target.dataItem.index].symbol;
            if (AppComponent_1.selectedModelProduct.has(symbol))
                AppComponent_1.selectedModelProduct.delete(symbol);
            else
                AppComponent_1.selectedModelProduct.add(symbol);
            console.log(AppComponent_1.selectedModelProduct);
        });
        chartPortfolioModel.svgContainer.htmlElement.style.height =
            (data.length * 45 + chartPortfolioModel.radius * 2) + "px";
        this.chartPortfolioModel = chartPortfolioModel;
    };
    AppComponent.prototype.addGoogleFont = function (name) {
        var elem = this.renderer.createElement(this.document.head, 'link');
        this.renderer.setElementProperty(elem, 'href', 'https://fonts.googleapis.com/css?family=' + name.replace(' ', '+'));
        this.renderer.setElementProperty(elem, 'rel', 'stylesheet');
    };
    AppComponent.prototype.enableRwd = function () {
        var elem = this.renderer.createElement(this.document.head, 'meta');
        this.renderer.setElementProperty(elem, 'content', 'width=device-width, initial-scale=1');
        this.renderer.setElementProperty(elem, 'name', 'viewport');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        //this.zone.runOutsideAngular(() => {
        this.enableRwd();
        this.addGoogleFont('Archivo');
        this.addGoogleFont('Lato');
        this.addGoogleFont('Material Icons');
        this.makeChartPortfolioReal();
        this.makeChartPortfolioModel();
        //});
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.chartPortfolioReal) {
            this.chartPortfolioReal.dispose();
        }
        if (this.chartPortfolioModel) {
            this.chartPortfolioModel.dispose();
        }
    };
    AppComponent.prototype.makeGroupingKey = function (product, by) {
        if (by == 'industry')
            return product.advisoryClassificationGroupName;
        else if (by == 'currency')
            return product.originalCurrency;
        return product.name;
    };
    AppComponent.prototype.onSelected = function (kind, by) {
        var map = (kind == 'model' ? this.mapModel : this.mapReal);
        map.clear();
        if (by != 'product') {
            var arr = kind == 'model' ?
                this.customerPortfolio.customerModelPortfolio.productsAllocation :
                this.customerPortfolio.productsAllocation;
            for (var i = 1; i < arr.length; i++) {
                var product = arr[i][0];
                var key = this.makeGroupingKey(product, by);
                var num = map.get(key);
                if (num == null)
                    num = 0;
                num += arr[i][1];
                map.set(key, num);
            }
        }
        if (kind == 'model') {
            this.selectedModelPortfolioGrouping = by;
            this.makeChartPortfolioModel();
        }
        else if (kind == 'real') {
            this.selectedRealPortfolioGrouping = by;
            this.makeChartPortfolioReal();
        }
        else {
            console.log('Wrong kind of chart for grouping: ' + kind);
        }
    };
    AppComponent.prototype.onHistory = function (kind) {
        var _this = this;
        if (this.valueChart)
            this.valueChart.dispose();
        var stockSymbols = kind == 'real' ? AppComponent_1.selectedRealProduct :
            AppComponent_1.selectedModelProduct;
        var httpGets = [];
        var it = stockSymbols.keys();
        var stockSymbol;
        while (true) {
            var result = it.next();
            if (result.done) {
                break;
            }
            stockSymbol = result.value;
            httpGets.push(_customer_data_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDataService"].getStockData(stockSymbol, 360, true));
        }
        console.log("waiting for merge");
        rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"].apply(void 0, httpGets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeAll"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["toArray"])()).subscribe(function (stockData) {
            console.log("combining stock data " + stockData.length);
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("valueChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
            var chartData = _customer_data_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDataService"].mergeStockMultiData(stockData);
            _customer_data_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDataService"].sortByDate(chartData);
            chart.data = chartData;
            chart.svgContainer.htmlElement.style.height = "500px";
            // Create axes
            var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
            dateAxis.renderer.minGridDistance = 40;
            dateAxis.renderer.fontSize = 13;
            dateAxis.title.text = "Market price history";
            valueAxis.minX = 0;
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
            chart.cursor.behavior = "zoomX";
            chart.cursor.xAxis = dateAxis;
            var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChartScrollbar"]();
            chart.scrollbarX = scrollbarX;
            chart.scrollbarX.parent = chart.bottomAxesContainer;
            chart.scrollbarY = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"]();
            chart.scrollbarY.parent = chart.leftAxesContainer;
            chart.scrollbarY.toBack();
            // Create series
            var it = stockSymbols.keys();
            var stockSymbol;
            while (true) {
                var result = it.next();
                if (result.done) {
                    break;
                }
                stockSymbol = result.value;
                var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
                series.dataFields.valueY = stockSymbol;
                series.dataFields.dateX = "date";
                series.strokeWidth = 2;
                series.tooltipText = stockSymbol + " {" + stockSymbol + "}";
                series.tooltip.pointerOrientation = "vertical";
                chart.cursor.snapToSeries = series;
                scrollbarX.series.push(series);
            }
            _this.valueChart = chart;
            document.getElementById('valueChart').scrollIntoView();
        });
    };
    AppComponent.prototype.stats = function (tab, from, to) {
        var acc = 0;
        var min = +Infinity;
        var max = -Infinity;
        var n = to - from + 1;
        for (var i = from; i <= to; i++) {
            if (i < 0 || i >= tab.length)
                break;
            acc += tab[i];
            if (tab[i] < min)
                min = tab[i];
            if (tab[i] > max)
                max = tab[i];
        }
        return [min, max, acc / n];
    };
    AppComponent.prototype.predictGrowth = function (data) {
        _customer_data_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDataService"].sortByDate(data);
        var stock = [];
        var symbol = '';
        for (var i = 0; i <= 6; i++) {
            var idx = data.length - i * 12;
            if (idx >= 0 && idx <= data.length - 1) {
                var obj = data[data.length - i * 12];
                var value = Object.getOwnPropertyDescriptor(obj, "value").value;
                symbol = Object.getOwnPropertyDescriptor(obj, "symbol").value;
                stock.push(value);
            }
        }
        var stock1Y = 100 * (stock[0] - stock[1]) / stock[1];
        var stock2Y = 100 * (stock[1] - stock[2]) / stock[2];
        var stock3Y = 100 * (stock[2] - stock[3]) / stock[3];
        var stock2Ys = 100 * (stock[0] - stock[2]) / stock[2];
        var stock5Ys = 100 * (stock[0] - stock[5]) / stock[5];
        var stats1y = this.stats(data, data.length - 12 - 1, data.length - 1);
        var stats2y = this.stats(data, data.length - 24 - 1, data.length - 12 - 1);
        var stats2ys = this.stats(data, data.length - 24 - 1, data.length - 1);
        var stats3y = this.stats(data, data.length - 36 - 1, data.length - 24 - 1);
        var stats5ys = this.stats(data, data.length - 60 - 1, data.length - 1);
        var stock1y = 100 * (stats1y[1] - stats1y[2]) / stats1y[1];
        var stock2y = 100 * (stats2y[1] - stats2y[2]) / stats2y[1];
        var stock2ys = 100 * (stats2ys[1] - stats2ys[2]) / stats2ys[1];
        var stock3y = 100 * (stats3y[1] - stats3y[2]) / stats3y[1];
        var stock5ys = 100 * (stats5ys[1] - stats5ys[2]) / stats5ys[1];
        if (stock1Y > 2 * stock1y)
            stock1Y = stock1y;
        if (stock2Y > 2 * stock2y)
            stock2Y = stock2y;
        if (stock2Ys > 2 * stock2ys)
            stock2Ys = stock2ys;
        if (stock3Y > 2 * stock3y)
            stock3Y = stock3y;
        if (stock5Ys > 2 * stock5ys)
            stock5Ys = stock5ys;
        var predictPerfMin1Y = Math.min(stock1Y, stock2Y, stock3Y);
        var predictPerfMax1Y = Math.max(stock1Y, stock2Y, stock3Y);
        var predictPerfMin2Y = Math.min(2 * predictPerfMin1Y, stock2Ys);
        var predictPerfMax2Y = Math.max(2 * predictPerfMax1Y, stock2Ys);
        var predictPerfMin5Y = Math.min(5 * predictPerfMin1Y, stock5Ys);
        var predictPerfMax5Y = Math.max(5 * predictPerfMax1Y, stock5Ys);
        return [{
                label: symbol,
                min: null,
                maxDiff: null,
                max: null
            },
            {
                label: symbol + " " + (new Date().getUTCFullYear() + 1),
                period: "1y",
                min: Math.round(predictPerfMin1Y * 100) / 100,
                maxDiff: Math.round((predictPerfMin1Y >= 0 ? predictPerfMax1Y - predictPerfMin1Y : predictPerfMax1Y) * 100) / 100,
                max: Math.round(predictPerfMax1Y * 100) / 100
            },
            {
                label: symbol + " " + (new Date().getUTCFullYear() + 2),
                period: "2y",
                min: Math.round(predictPerfMin2Y * 100) / 100,
                maxDiff: Math.round((predictPerfMin2Y >= 0 ? predictPerfMax2Y - predictPerfMin2Y : predictPerfMax2Y) * 100) / 100,
                max: Math.round(predictPerfMax2Y * 100) / 100
            },
            {
                label: symbol + " " + (new Date().getUTCFullYear() + 5),
                period: "5y",
                min: Math.round(predictPerfMin5Y * 100) / 100,
                maxDiff: Math.round((predictPerfMin1Y >= 0 ? predictPerfMax5Y - predictPerfMin5Y : predictPerfMax5Y) * 100) / 100,
                max: Math.round(predictPerfMax5Y * 100) / 100
            }];
    };
    AppComponent.prototype.onPrediction = function (kind) {
        var _this = this;
        if (this.valueChart)
            this.valueChart.dispose();
        var stockSymbols = kind == 'real' ? AppComponent_1.selectedRealProduct :
            AppComponent_1.selectedModelProduct;
        var httpGets = [];
        var it = stockSymbols.keys();
        var stockSymbol;
        while (true) {
            var result = it.next();
            if (result.done) {
                break;
            }
            stockSymbol = result.value;
            httpGets.push(_customer_data_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDataService"].getStockData(stockSymbol, 60, false));
        }
        var predictions = [];
        var finishCounter = 0;
        rxjs__WEBPACK_IMPORTED_MODULE_8__["of"].apply(void 0, httpGets).pipe().subscribe(function (o) {
            o.pipe().subscribe(function (data) {
                for (var _i = 0, _a = _this.predictGrowth(data); _i < _a.length; _i++) {
                    var result = _a[_i];
                    predictions.push(result);
                }
                if (++finishCounter == httpGets.length) {
                    var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("valueChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
                    chart.data = predictions;
                    chart.svgContainer.htmlElement.style.height = "500px";
                    // Create axes
                    var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
                    categoryAxis.dataFields.category = "label";
                    categoryAxis.renderer.fontSize = 13;
                    categoryAxis.title.text = "Previous results projected into consecutive years, change in %";
                    categoryAxis.renderer.grid.template.location = 0;
                    categoryAxis.renderer.minGridDistance = 40;
                    categoryAxis.renderer.cellStartLocation = 0.1;
                    categoryAxis.renderer.cellEndLocation = 0.9;
                    var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
                    chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
                    chart.cursor.behavior = "zoomX";
                    chart.cursor.xAxis = categoryAxis;
                    var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChartScrollbar"]();
                    chart.scrollbarX = scrollbarX;
                    chart.scrollbarX.parent = chart.bottomAxesContainer;
                    chart.scrollbarY = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"]();
                    chart.scrollbarY.parent = chart.leftAxesContainer;
                    chart.scrollbarY.toBack();
                    // Add legend
                    chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
                    // Create series
                    for (var _b = 0, _c = [
                        ["min", "minimum", "min"],
                        ["maxDiff", "up to maximum", "max"]
                    ]; _b < _c.length; _b++) {
                        var label = _c[_b];
                        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ColumnSeries"]());
                        series.dataFields.valueY = label[0];
                        series.dataFields.categoryX = "label";
                        series.name = label[1];
                        series.columns.template.tooltipText = "{period}: " + label[1] + " {" + label[2] + "}%";
                        series.stacked = label[0].indexOf("Diff") > 0;
                        series.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](95);
                        chart.cursor.snapToSeries = series;
                        scrollbarX.series.push(series);
                    }
                    _this.valueChart = chart;
                    document.getElementById('valueChart').scrollIntoView();
                }
            });
        });
    };
    AppComponent.prototype.getModelPortfolioTable = function () {
        var table = [];
        table.push(['Product Name', 'Product Id', 'New Allocation']);
        for (var _i = 0, _a = this.customerPortfolio.customerModelPortfolio.productsAllocation; _i < _a.length; _i++) {
            var entry = _a[_i];
            var product = entry[0];
            var allocation = entry[1];
            table.push([product.name, product.id, allocation + ""]);
        }
        return table;
    };
    AppComponent.prototype.onCommit = function () {
        var dd = {
            content: [
                { text: 'Committed model portfolio', style: 'header' },
                'Execution request of porfolio adjustment under advisory session for client ' + this.customerId,
                { text: 'Requested portfolio allocation', style: 'subheader' },
                'Following products will be bought',
                {
                    style: 'tablePortfolio',
                    table: {
                        body: this.getModelPortfolioTable()
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tablePortfolio: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            },
            defaultStyle: {
            // alignment: 'justify'
            }
        };
        console.log("pdf open");
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__["createPdf"](dd).download('commit-model-portfolio.pdf');
    };
    var AppComponent_1;
    AppComponent.selectedRealProduct = new Set();
    AppComponent.selectedModelProduct = new Set();
    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _customer_portfolio_customer_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-portfolio/customer-portfolio.component */ "./src/app/customer-portfolio/customer-portfolio.component.ts");
/* harmony import */ var _dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dictionary/dictionary.component */ "./src/app/dictionary/dictionary.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
                _customer_portfolio_customer_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["CustomerPortfolioComponent"],
                _dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_9__["DictionaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer-data.service.ts":
/*!******************************************!*\
  !*** ./src/app/customer-data.service.ts ***!
  \******************************************/
/*! exports provided: CustomerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDataService", function() { return CustomerDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/dictionary/dictionary.component */ "./src/app/dictionary/dictionary.component.ts");
/* harmony import */ var _app_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var CustomerDataService = /** @class */ (function () {
    function CustomerDataService() {
    }
    CustomerDataService_1 = CustomerDataService;
    CustomerDataService.getCustomerPortfolio = function (clientId) {
        var aCustomerRiskProfile = _app_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_2__["CustomerRiskProfile"].BALANCED;
        var portfolio = {
            customerId: clientId,
            customerRiskProfile: aCustomerRiskProfile,
            productsAllocation: [
                /* https://www.nasdaq.com/quotes/institutional-portfolio/vanguard-group-inc-61322 */
                /* https://www.nasdaq.com/quotes/institutional-portfolio/price-t-rowe-associates-inc-md-2145 */
                /* https://www.nasdaq.com/quotes/institutional-portfolio/blackrock-inc-711679 */
                /* https://www.nasdaq.com/quotes/institutional-portfolio/franklin-resources-inc-8481 */
                /* https://www.nasdaq.com/quotes/institutional-portfolio/state-street-corp-6697 */
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("MSFT", "Microsoft Corporation", "USD", "Technology"), 12.12],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("AAPL", "Apple Inc.", "USD", "Technology"), 11.51],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("AMZN", "Amazon.com Inc", "USD", "Consumer Services"), 9.81],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("JNJ", "Johnson & Johnson", "USD", "Health Care"), 5.84],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("FB", "Facebook Inc.", "USD", "Technology"), 5.82],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("BRK", "Berkshire Hathaway Inc.", "USD", "Conglomerate"), 5.63],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("JPM", "J.P. Morgan Chase & Co", "USD", "Financial"), 5.41],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("GOOG", "Alphabet Inc.", "USD", "Technology"), 9.79],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("BAC", "Bank of America Corp.", "USD", "Financial"), 3.88],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("PFE", "Pfitzer Inc.", "USD", "Health Care"), 3.88],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("V", "Visa Inc.", "USD", "Miscellaneous"), 3.82],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("REGN", "Procter & Gamble", "USD", "Health Care"), 3.73],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("INTC", "Intel Corporation", "USD", "Technology"), 3.57],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("CSCO", "Cisco Systems", "USD", "Technology"), 3.47],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("VZ", "Verizon Communications Inc", "USD", "Public Utilities"), 3.37],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("BA", "Boeing", "USD", "Capital Goods"), 3.26],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createDeposit("DEPOSIT_EUR_3M", "Deposit in Euro for 3 months", "EUR"), 5.09],
            ],
            customerModelPortfolio: CustomerDataService_1.getModelPortfolio(_app_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_2__["CustomerRiskProfile"][aCustomerRiskProfile]),
            ngOnInit: function () {
            }
        };
        return portfolio;
    };
    CustomerDataService.getModelPortfolio = function (idOf) {
        var portfolio = {
            id: idOf,
            name: idOf,
            productsAllocation: [
                /* https://www.nasdaq.com/quotes/institutional-portfolio/vanguard-group-inc-61322 */
                /* https://www.nasdaq.com/quotes/institutional-portfolio/price-t-rowe-associates-inc-md-2145 */
                /* https://www.nasdaq.com/quotes/institutional-portfolio/blackrock-inc-711679 */
                /* https://www.nasdaq.com/quotes/institutional-portfolio/franklin-resources-inc-8481 */
                /* https://www.nasdaq.com/quotes/institutional-portfolio/state-street-corp-6697 */
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("MSFT", "Microsoft Corporation", "USD", "Technology"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("AAPL", "Apple Inc.", "USD", "Technology"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("AMZN", "Amazon.com Inc", "USD", "Consumer Services"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("JNJ", "Johnson & Johnson", "USD", "Health Care"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("FB", "Facebook Inc.", "USD", "Technology"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("BRK", "Berkshire Hathaway Inc.", "USD", "Conglomerate"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("JPM", "J.P. Morgan Chase & Co", "USD", "Financial"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("GOOG", "Alphabet Inc.", "USD", "Technology"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("BAC", "Bank of America Corp.", "USD", "Financial"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createShare("PFE", "Pfitzer Inc.", "USD", "Health Care"), 9],
                [_app_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"].createDeposit("DEPOSIT_EUR_3M", "Deposit in Euro for 3 months", "EUR"), 10],
            ],
            customerRiskProfile: _app_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_2__["CustomerRiskProfile"].BALANCED,
            isManagedByPrivateBanker: false,
            ngOnInit: function () {
            }
        };
        return portfolio;
    };
    CustomerDataService.mergeStockMultiData = function (data) {
        var map = new Map();
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var entry = data_1[_i];
            var date = Object.getOwnPropertyDescriptor(entry, 'date').value;
            var existing = map.get(date);
            if (existing != null) {
                for (var _a = 0, _b = Object.getOwnPropertyNames(existing); _a < _b.length; _a++) {
                    var p = _b[_a];
                    var pDesc = Object.getOwnPropertyDescriptor(existing, p);
                    Object.defineProperty(entry, p, pDesc);
                }
            }
            map.set(date, entry);
        }
        return Array.from(map.values());
    };
    CustomerDataService.dailyStocksTransform = function (arr, symbol, priceInSymbol) {
        if (arr == null || arr == undefined)
            return [];
        var symbols = Object.getOwnPropertyNames(arr);
        var data = [];
        for (var _i = 0, symbols_1 = symbols; _i < symbols_1.length; _i++) {
            var name_1 = symbols_1[_i];
            var val = Object.getOwnPropertyDescriptor(arr, name_1).value;
            var price = val["4. close"];
            if (priceInSymbol) {
                var obj = { date: name_1 };
                Object.defineProperty(obj, symbol, { value: price });
                data.push(obj);
            }
            else {
                data.push({ date: name_1, value: price, symbol: symbol });
            }
        }
        return data;
    };
    CustomerDataService.getStockData = function (symbol, points, priceInSymbol) {
        console.log('Requested stock data for ' + symbol);
        var payload = CustomerDataService_1.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='
            + symbol + '&outputSize=' + points + '&apikey=' + CustomerDataService_1.API_KEY).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (root) { return CustomerDataService_1
            .dailyStocksTransform(root["Monthly Time Series"], symbol, priceInSymbol); }));
        return payload;
    };
    CustomerDataService.sortByDate = function (data) {
        data.sort(function (o1, o2) {
            var o1date = Object.getOwnPropertyDescriptor(o1, "date").value;
            var o2date = Object.getOwnPropertyDescriptor(o2, "date").value;
            return o1date.localeCompare(o2date);
        });
    };
    var CustomerDataService_1;
    CustomerDataService.API_KEY = 'N4MJ59ALJQQV88T4';
    CustomerDataService.injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHandler"]] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHandler"], useValue: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpXhrBackend"]({ build: function () { return new XMLHttpRequest; } }) },
        ],
    });
    CustomerDataService.http = CustomerDataService_1.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]);
    CustomerDataService = CustomerDataService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomerDataService);
    return CustomerDataService;
}());



/***/ }),

/***/ "./src/app/customer-portfolio/customer-portfolio.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customer-portfolio/customer-portfolio.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLXBvcnRmb2xpby9jdXN0b21lci1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customer-portfolio/customer-portfolio.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customer-portfolio/customer-portfolio.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-portfolio works!\n</p>\n"

/***/ }),

/***/ "./src/app/customer-portfolio/customer-portfolio.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customer-portfolio/customer-portfolio.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPortfolioComponent", function() { return CustomerPortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerPortfolioComponent = /** @class */ (function () {
    function CustomerPortfolioComponent() {
    }
    CustomerPortfolioComponent.prototype.ngOnInit = function () {
    };
    CustomerPortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-portfolio',
            template: __webpack_require__(/*! ./customer-portfolio.component.html */ "./src/app/customer-portfolio/customer-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./customer-portfolio.component.css */ "./src/app/customer-portfolio/customer-portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerPortfolioComponent);
    return CustomerPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/dictionary/dictionary.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dictionary/dictionary.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpY3Rpb25hcnkvZGljdGlvbmFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dictionary/dictionary.component.html":
/*!******************************************************!*\
  !*** ./src/app/dictionary/dictionary.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dictionary works!\n</p>\n"

/***/ }),

/***/ "./src/app/dictionary/dictionary.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dictionary/dictionary.component.ts ***!
  \****************************************************/
/*! exports provided: DictionaryComponent, CustomerRiskProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryComponent", function() { return DictionaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRiskProfile", function() { return CustomerRiskProfile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DictionaryComponent = /** @class */ (function () {
    function DictionaryComponent() {
    }
    DictionaryComponent.prototype.ngOnInit = function () {
    };
    DictionaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dictionary',
            template: __webpack_require__(/*! ./dictionary.component.html */ "./src/app/dictionary/dictionary.component.html"),
            styles: [__webpack_require__(/*! ./dictionary.component.css */ "./src/app/dictionary/dictionary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DictionaryComponent);
    return DictionaryComponent;
}());

var CustomerRiskProfile;
(function (CustomerRiskProfile) {
    CustomerRiskProfile["AGGRESSIVE"] = "Aggressive";
    CustomerRiskProfile["BALANCED"] = "Balanced";
    CustomerRiskProfile["DYNAMIC"] = "Dynamic";
})(CustomerRiskProfile || (CustomerRiskProfile = {}));


/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  portfolio works!\n</p>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent, ProductLiquidityLevel, MifidRiskTolerancePrispLevel, MifidRiskToleranceNonPrispLevel, ProductTypeCode, ProductRecommendation, ProductRating, MifidInvestmentTimeHorizon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLiquidityLevel", function() { return ProductLiquidityLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MifidRiskTolerancePrispLevel", function() { return MifidRiskTolerancePrispLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MifidRiskToleranceNonPrispLevel", function() { return MifidRiskToleranceNonPrispLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTypeCode", function() { return ProductTypeCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRecommendation", function() { return ProductRecommendation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRating", function() { return ProductRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MifidInvestmentTimeHorizon", function() { return MifidInvestmentTimeHorizon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent_1 = ProductComponent;
    ProductComponent.createShare = function (id, name, currency, industry) {
        var product = new ProductComponent_1();
        product.id = id;
        product.name = name;
        product.originalCurrency = currency;
        product.advisoryClassificationGroupName = industry;
        product.typeCode = ProductTypeCode.Equity;
        return product;
    };
    ProductComponent.createDeposit = function (id, name, currency) {
        var product = new ProductComponent_1();
        product.id = id;
        product.name = name;
        product.originalCurrency = currency;
        product.advisoryClassificationGroupName = "Deposit";
        product.typeCode = ProductTypeCode.FixedIncome;
        return product;
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    var ProductComponent_1;
    ProductComponent = ProductComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        })
    ], ProductComponent);
    return ProductComponent;
}());

var ProductLiquidityLevel;
(function (ProductLiquidityLevel) {
    ProductLiquidityLevel[ProductLiquidityLevel["L1"] = 0] = "L1";
    ProductLiquidityLevel[ProductLiquidityLevel["L2"] = 1] = "L2";
    ProductLiquidityLevel[ProductLiquidityLevel["L3"] = 2] = "L3";
    ProductLiquidityLevel[ProductLiquidityLevel["L4"] = 3] = "L4";
    ProductLiquidityLevel[ProductLiquidityLevel["L5"] = 4] = "L5";
    ProductLiquidityLevel[ProductLiquidityLevel["L6"] = 5] = "L6";
    ProductLiquidityLevel[ProductLiquidityLevel["L7"] = 6] = "L7";
})(ProductLiquidityLevel || (ProductLiquidityLevel = {}));
var MifidRiskTolerancePrispLevel;
(function (MifidRiskTolerancePrispLevel) {
    MifidRiskTolerancePrispLevel[MifidRiskTolerancePrispLevel["L1"] = 0] = "L1";
    MifidRiskTolerancePrispLevel[MifidRiskTolerancePrispLevel["L2"] = 1] = "L2";
    MifidRiskTolerancePrispLevel[MifidRiskTolerancePrispLevel["L3"] = 2] = "L3";
    MifidRiskTolerancePrispLevel[MifidRiskTolerancePrispLevel["L4"] = 3] = "L4";
    MifidRiskTolerancePrispLevel[MifidRiskTolerancePrispLevel["L5"] = 4] = "L5";
    MifidRiskTolerancePrispLevel[MifidRiskTolerancePrispLevel["L6"] = 5] = "L6";
    MifidRiskTolerancePrispLevel[MifidRiskTolerancePrispLevel["L7"] = 6] = "L7";
})(MifidRiskTolerancePrispLevel || (MifidRiskTolerancePrispLevel = {}));
var MifidRiskToleranceNonPrispLevel;
(function (MifidRiskToleranceNonPrispLevel) {
    MifidRiskToleranceNonPrispLevel[MifidRiskToleranceNonPrispLevel["Low"] = 0] = "Low";
    MifidRiskToleranceNonPrispLevel[MifidRiskToleranceNonPrispLevel["Medium"] = 1] = "Medium";
    MifidRiskToleranceNonPrispLevel[MifidRiskToleranceNonPrispLevel["High"] = 2] = "High";
})(MifidRiskToleranceNonPrispLevel || (MifidRiskToleranceNonPrispLevel = {}));
var ProductTypeCode;
(function (ProductTypeCode) {
    ProductTypeCode[ProductTypeCode["FixedIncome"] = 1] = "FixedIncome";
    ProductTypeCode[ProductTypeCode["Equity"] = 2] = "Equity";
    ProductTypeCode[ProductTypeCode["Funds"] = 5] = "Funds";
    ProductTypeCode[ProductTypeCode["Derivatives"] = 7] = "Derivatives";
    ProductTypeCode[ProductTypeCode["Structured"] = 8] = "Structured";
})(ProductTypeCode || (ProductTypeCode = {}));
var ProductRecommendation;
(function (ProductRecommendation) {
    ProductRecommendation[ProductRecommendation["BUY"] = 0] = "BUY";
    ProductRecommendation[ProductRecommendation["SELL"] = 1] = "SELL";
    ProductRecommendation[ProductRecommendation["SELECTIVE"] = 2] = "SELECTIVE";
    ProductRecommendation[ProductRecommendation["NOT_CLASSIFIED"] = 3] = "NOT_CLASSIFIED";
})(ProductRecommendation || (ProductRecommendation = {}));
var ProductRating;
(function (ProductRating) {
    ProductRating[ProductRating["STAR1"] = 1] = "STAR1";
    ProductRating[ProductRating["STAR2"] = 2] = "STAR2";
    ProductRating[ProductRating["STAR3"] = 3] = "STAR3";
    ProductRating[ProductRating["STAR4"] = 4] = "STAR4";
    ProductRating[ProductRating["STAR5"] = 5] = "STAR5";
})(ProductRating || (ProductRating = {}));
var MifidInvestmentTimeHorizon;
(function (MifidInvestmentTimeHorizon) {
    MifidInvestmentTimeHorizon[MifidInvestmentTimeHorizon["VERY_SHORT_TERM"] = 0] = "VERY_SHORT_TERM"; /* < 12m */
    MifidInvestmentTimeHorizon[MifidInvestmentTimeHorizon["SHORT_TERM"] = 1] = "SHORT_TERM"; /* 1-3 years */
    MifidInvestmentTimeHorizon[MifidInvestmentTimeHorizon["MEDIUM_TERM"] = 2] = "MEDIUM_TERM"; /* 3-6 years */
    MifidInvestmentTimeHorizon[MifidInvestmentTimeHorizon["LONG_TERM"] = 3] = "LONG_TERM"; /* > 6 years */
    MifidInvestmentTimeHorizon[MifidInvestmentTimeHorizon["NEUTRAL"] = 4] = "NEUTRAL"; /* not defined */
})(MifidInvestmentTimeHorizon || (MifidInvestmentTimeHorizon = {}));


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

module.exports = __webpack_require__(/*! C:\Users\176507\wmsimulator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map