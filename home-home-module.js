(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home-content/home-content.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/home-content/home-content.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"home-full-container\">\r\n  <slideshow></slideshow>\r\n</div>\r\n\r\n<div class='home-full-container'>\r\n    <need-poetry [whitchSatrt]=\"whitchSatrt\"></need-poetry>\r\n</div>\r\n\r\n <div class='home-full-container'>\r\n    <poetry-presentation-us [whitchSatrt]=\"whitchSatrt\"></poetry-presentation-us>\r\n</div>\r\n\r\n<div class='home-full-container' style='background-color: #f5f5f5'>\r\n    <poetry-news [whitchSatrt]=\"whitchSatrt\"></poetry-news>\r\n</div>\r\n\r\n<div class='home-full-container partner-tips' style='background-color: #f5f5f5' >\r\n    <poetry-partner-and-footer [whitchSatrt]=\"whitchSatrt\"></poetry-partner-and-footer>\r\n</div>\r\n\r\n<div class='fixed-btn fixed-btn-top' (click)='goUp()'>\r\n    <i class=\"anticon anticon-up\"></i>\r\n</div>\r\n\r\n<div class='fixed-btn fixed-btn-bottom' (click)='goDown()'>\r\n    <i class=\"anticon anticon-down\"></i>\r\n</div> \r\n"

/***/ }),

/***/ "./src/app/pages/home/home-content/home-content.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/home-content/home-content.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-full-container {\n  position: relative; }\n\n@media screen and (min-width: 768px) {\n  .home-full-container {\n    width: 100%;\n    height: 100%; }\n  .fixed-btn {\n    cursor: pointer;\n    padding: 13px;\n    background: #222;\n    width: 45px;\n    height: 45px;\n    display: block;\n    position: fixed;\n    right: 10px;\n    z-index: 99999;\n    box-shadow: 2px 0 2px rgba(0, 0, 0, 0.1);\n    transition: .4s all ease; }\n    .fixed-btn i {\n      color: #eee;\n      cursor: pointer;\n      font-size: 24px; }\n  .fixed-btn-top {\n    top: 100px; }\n  .fixed-btn-bottom {\n    top: 150px; }\n  .partner-tips {\n    margin-top: -58px; } }\n\n@media screen and (max-width: 767px) {\n  .fixed-btn {\n    display: none; }\n  .partner-tips {\n    margin-top: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvRTpcXHNlbGYtLS0tLS0tLS0t5YmN56uv55u45YWzXFxzY2hvb2xcXHBvZXRyaWVzL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1jb250ZW50XFxob21lLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHZDtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUdkLHdDQUFxQztJQUNyQyx3QkFBd0IsRUFBQTtJQWIxQjtNQWVJLFdBQVc7TUFDWCxlQUFlO01BQ2YsZUFBZSxFQUFBO0VBR25CO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNHLGlCQUFpQixFQUFBLEVBQ25COztBQUlIO0VBQ0U7SUFDRSxhQUNGLEVBQUE7RUFFQTtJQUNFLGFBQWEsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvaG9tZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtZnVsbC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIOesrOS4gOmDqOWIhu+8jOi9ruaSreWkp+WbviBcclxuICBAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmhvbWUtZnVsbC1jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZml4ZWQtYnRue1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMCAzcHggcmdiYSgwLDAsMCwwLjEpOyBcclxuICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMCAycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICBib3gtc2hhZG93OiAycHggMCAycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgYWxsIGVhc2U7XHJcbiAgICAgIGl7XHJcbiAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZpeGVkLWJ0bi10b3B7XHJcbiAgICAgIHRvcDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuZml4ZWQtYnRuLWJvdHRvbXtcclxuICAgICAgdG9wOiAxNTBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5wYXJ0bmVyLXRpcHN7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAtNThweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5maXhlZC1idG57XHJcbiAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuICBcclxuICAgIC5wYXJ0bmVyLXRpcHN7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgIH1cclxuICBcclxuICAgIFxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home-content/home-content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/home-content/home-content.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_return_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/service/return-window.service */ "./src/app/shared/service/return-window.service.ts");
/**
 * 文件名称：首页
 * 编写人：何林昆
 * 编写日期：2017.5.2
 * 变更人：
 * 变更内容：
 **/



var HomeContentComponent = /** @class */ (function () {
    function HomeContentComponent(windowRef) {
        this.windowRef = windowRef;
        this.documentH = document.documentElement.offsetHeight || document.body.offsetHeight; // 屏幕高度
        this.readyAnimateArray = [];
        this.documentW = document.documentElement.offsetWidth || document.body.offsetWidth; // 屏幕宽度
        this._window = windowRef.nativeWindow;
    }
    /**
     * 往下滚动的时候
     * 1. 正好在节点上 直接加上屏幕大小
     * 2. 本页面往下一点 屏幕大小 - 往下的一点
     * 3. 往下的卷曲值取余屏幕大小
     */
    HomeContentComponent.prototype.goDown = function () {
        var defaultOffY = window.pageYOffset; //页面卷曲值
        // let willScrTop = ele.offsetHeight - 58 + Math.floor(defaultOffY/ele.offsetHeight)*ele.offsetHeight ; // 将要跳转到的位置
        var willScrTop = defaultOffY + this.documentH - 58 - defaultOffY % this.documentH;
        willScrTop === defaultOffY ? willScrTop = defaultOffY + this.documentH : null;
        var tempOffY = defaultOffY;
        var timmer = requestAnimationFrame(function fn() {
            tempOffY = tempOffY + 50;
            if (willScrTop > tempOffY) {
                window.scrollTo(0, tempOffY);
                setTimeout(function () {
                    timmer = requestAnimationFrame(fn);
                }, 1);
            }
            else {
                window.scrollTo(0, willScrTop);
            }
        });
    };
    HomeContentComponent.prototype.goUp = function () {
        var defaultOffY = window.pageYOffset; //页面卷曲值
        if (defaultOffY <= 0) {
            return;
        }
        var willScrTop = defaultOffY - 58 - defaultOffY % this.documentH;
        var tempOffY = defaultOffY;
        var timmer = requestAnimationFrame(function fn() {
            tempOffY = tempOffY - 50;
            if (willScrTop < tempOffY) {
                window.scrollTo(0, tempOffY);
                setTimeout(function () {
                    timmer = requestAnimationFrame(fn);
                }, 1);
            }
            else {
                window.scrollTo(0, willScrTop);
            }
        });
    };
    HomeContentComponent.prototype.addListener = function () {
        var that = this;
        this.eventListener = this._window.addEventListener("scroll", function () {
            that.startAnimations();
        });
    };
    HomeContentComponent.prototype.startAnimations = function () {
        var ratio = Math.ceil((window.pageYOffset - this.documentH / 5) / this.documentH);
        if (this.readyAnimateArray.indexOf(ratio) == -1) {
            this.readyAnimateArray.push(ratio);
        }
        else {
            return;
        }
        this.whitchSatrt = ratio;
    };
    HomeContentComponent.prototype.ngOnDestroy = function () {
        this._window.removeEventListener("scroll", this.eventListener);
    };
    HomeContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("this.documentW", this.documentW);
        if (this.documentW < 768) {
            var _loop_1 = function (item) {
                setTimeout(function () {
                    _this.whitchSatrt = item;
                }, 1);
            };
            for (var item = 0; item <= 5; item++) {
                _loop_1(item);
            }
        }
        else {
            this.addListener();
        }
    };
    HomeContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-content',
            template: __webpack_require__(/*! ./home-content.component.html */ "./src/app/pages/home/home-content/home-content.component.html"),
            styles: [__webpack_require__(/*! ./home-content.component.scss */ "./src/app/pages/home/home-content/home-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_return_window_service__WEBPACK_IMPORTED_MODULE_2__["WindowRefService"]])
    ], HomeContentComponent);
    return HomeContentComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/home-content/need-poetry/need-poetry.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='need-top'>\r\n  <div class='need-tit'>\r\n    <div class='tit-box' [@fadeInUp] *ngIf=\"startAnimationTit\">\r\n      为什么要做这个网站？\r\n      <div class='icon-wrap'>\r\n        <div class='protect-icon'>\r\n          <i class=\"fa fa-shield\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=' need-detail' [@fadeInUp] *ngIf=\"startAnimationDet\">\r\n    <p> 古诗是中华民族乃至全世界的瑰宝，我们应该传承下去， 虽然有古典文集， 但大多数人并没有拥有这些书籍。  </p>\r\n    <p> 从某种意义上来说，这些庞大的文集离我们是有一定距离的。因此本网站诞生了，你可以在此享受诗词的饕餮盛宴。</p>\r\n  </div>\r\n</div>\r\n\r\n<div class='need-bottom container-fluid'>\r\n  <div class=\"layout \" >\r\n    <div class='auto-reasons' [@fadeInUp] *ngIf=\"startAnimationDet\"  nz-row>\r\n      <div class=\"need-reasons reasons-color1\" nz-col  nzSm=\"24\" nzMd=\"6\" >\r\n        <div class='reasons-wrap'>\r\n          <div class='reasons-icon'>\r\n            <i class=\"fa fa-edit\"></i>\r\n          </div>\r\n          <div class='reasons-tit'> 生活需要诗意 </div>\r\n          <p class='reasons-det'> 我们生活在都市里面，生活节奏越来越快的我们少了一颗能静下来慢慢欣赏美好的心。中国的诗词有着无限的魅力，只是未曾发现。</p>\r\n          <div class='reasons-btn'>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div  nz-col  nzSm=\"24\" nzMd=\"6\"  class=\"need-reasons reasons-color2\">\r\n        <div class='reasons-wrap'>\r\n          <div class='reasons-icon'>\r\n            <i class=\"fa fa-laptop\"></i>\r\n          </div>\r\n          <div class='reasons-tit'> 你需要诗意 </div>\r\n          <p class='reasons-det'>田园的美好我们或许不理解，但是短暂的生命总是有些东西值得我们追求，千年的时光过去，诗词的美丽依旧。</p>\r\n          <div class='reasons-btn'>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div nz-col  nzSm=\"24\" nzMd=\"6\" class=\"need-reasons reasons-color3\">\r\n        <div class='reasons-wrap'>\r\n          <div class='reasons-icon'>\r\n            <i class=\"fa fa-code\"></i>\r\n          </div>\r\n          <div class='reasons-tit'>要善于发现 </div>\r\n          <p class='reasons-det'>你需要诗意,你需要诗意</p>\r\n          <div class='reasons-btn'>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div nz-col  nzSm=\"24\" nzMd=\"6\"  class=\"need-reasons reasons-color4\">\r\n        <div class='reasons-wrap'>\r\n          <div class='reasons-icon'>\r\n            <i class=\"fa fa-lightbulb-o\"></i>\r\n          </div>\r\n          <div class='reasons-tit'> 你需要诗意</div>\r\n          <p class='reasons-det'>你需要诗意,你需要诗意</p>\r\n          <div class='reasons-btn'>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/home-content/need-poetry/need-poetry.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@media screen and (min-width: 768px) {\n  .layout {\n    width: 1200px;\n    margin: 0 auto; }\n  .need-top {\n    height: 30%; }\n    .need-top .need-tit {\n      width: 1200px;\n      font-size: 33px;\n      letter-spacing: 5px; }\n      .need-top .need-tit .tit-box {\n        padding: 15px 0 25px; }\n      .need-top .need-tit .protect-icon {\n        font-size: 19px;\n        height: 30px; }\n    .need-top .need-detail {\n      font-size: 16px;\n      margin-top: 2%; }\n  .need-bottom {\n    height: 70%;\n    /* 垂直居中 */ }\n    .need-bottom .auto-reasons {\n      position: absolute;\n      top: 50%;\n      margin-top: -250px;\n      width: 1200px;\n      height: auto; } }\n@media screen and (max-width: 767px) {\n  .layout {\n    width: 100%; }\n  .need-top {\n    padding: 20px 0; }\n    .need-top .need-tit {\n      width: 100%;\n      font-size: 16px;\n      letter-spacing: 0px; }\n      .need-top .need-tit .tit-box {\n        padding: 17px 0 16px; }\n      .need-top .need-tit .icon-wrap {\n        bottom: -24px; }\n        .need-top .need-tit .icon-wrap .protect-icon {\n          font-size: 19px;\n          height: 15px; }\n    .need-top .need-detail {\n      margin-top: 20px;\n      font-size: 12px;\n      padding: 5px 20px; }\n  .need-bottom {\n    height: 70%;\n    height: auto;\n    padding: 50px 15px 20px 15px; }\n    .need-bottom .need-reasons {\n      margin-left: 7%; } }\n.need-top {\n  width: 100%;\n  padding-top: 3%;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.075); }\n.need-top .need-tit {\n    line-height: 1.1;\n    text-align: center;\n    color: #272727;\n    margin: 0 auto; }\n.need-top .need-tit .tit-box {\n      display: inline-block !important;\n      width: auto;\n      border-bottom: 2px #e5e5e5 solid;\n      position: relative; }\n.need-top .need-tit .tit-box .icon-wrap {\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: -21px;\n        padding-right: 40px; }\n.need-top .need-tit .tit-box .icon-wrap .protect-icon {\n          width: 40px;\n          margin-left: 50%;\n          background: #fff;\n          text-align: center;\n          padding-left: 7px;\n          color: #0061ae; }\n.need-top .need-detail {\n    line-height: 2;\n    text-align: center;\n    font-weight: 300;\n    color: #272727; }\n.need-bottom {\n  width: 100%;\n  background: url('need_bg.png') repeat;\n  position: relative;\n  /* 箭头 */\n  /* need-reasons 最外层容器 */\n  /* 不同颜色 */ }\n.need-bottom:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -1px;\n    left: 50%;\n    width: 0;\n    height: 0;\n    margin-left: -25px;\n    border-width: 25px;\n    border-style: solid;\n    border-color: #fff transparent transparent; }\n.need-bottom:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: 0;\n    height: 0;\n    margin-left: -25px;\n    border-width: 25px;\n    border-style: solid;\n    border-color: #dbdbdb transparent transparent; }\n.need-bottom .need-reasons {\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    box-sizing: border-box;\n    /* reasons-wrap */ }\n.need-bottom .need-reasons .reasons-wrap {\n      padding: 45px 10px 20px;\n      text-align: center;\n      margin-bottom: 30px;\n      border: 3px solid #f3f3f3;\n      border-top: none;\n      border-radius: 4px;\n      box-shadow: 0 -4px 0 0;\n      /* reasons-btn */ }\n.need-bottom .need-reasons .reasons-wrap:hover {\n        background: transparent;\n        box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .need-reasons .reasons-wrap:hover:before {\n        content: \"\";\n        width: 0;\n        height: 0;\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        border-top: 8px solid;\n        border-top-color: inherit;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        margin-left: -8px; }\n.need-bottom .need-reasons .reasons-wrap .reasons-icon {\n        display: inline-block;\n        border-radius: 50%;\n        margin-bottom: 32px;\n        border: 1px solid transparent; }\n.need-bottom .need-reasons .reasons-wrap .reasons-icon i {\n          width: 108px;\n          height: 108px;\n          padding: 30px;\n          background: #fff;\n          border-radius: 50%;\n          cursor: default;\n          font-size: 48px;\n          line-height: 48px;\n          display: inline-block;\n          transition: all 0.3s ease-in-out; }\n.need-bottom .need-reasons .reasons-wrap .reasons-tit {\n        margin-bottom: 13px;\n        font-size: 18px;\n        letter-spacing: -0.3px;\n        font-weight: bold;\n        text-transform: uppercase; }\n.need-bottom .need-reasons .reasons-wrap .reasons-det {\n        font-size: 14px;\n        color: #666;\n        margin-bottom: 25px;\n        padding: 0 15px;\n        line-height: 1.6;\n        font-weight: 300;\n        letter-spacing: 0.2px; }\n.need-bottom .need-reasons .reasons-wrap .reasons-btn {\n        width: 115px;\n        height: 35px;\n        line-height: 35px;\n        font-size: 14px;\n        text-indent: 15px;\n        border-radius: 5px;\n        background: rgba(15, 15, 15, 0.05);\n        color: rgba(15, 15, 15, 0.35);\n        margin: 0 auto;\n        margin-bottom: 15px;\n        border-bottom: 3px solid rgba(0, 0, 0, 0.2);\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        transition: all 0.75s ease;\n        -moz-transition: all 0.75s ease;\n        -webkit-transition: all 0.75s ease;\n        -o-transition: all 0.75s ease; }\n.need-bottom .need-reasons .reasons-wrap .reasons-btn:hover {\n          background: #0061ae;\n          color: #fff;\n          text-indent: 10px;\n          transition: all 0.75s ease;\n          -moz-transition: all 0.75s ease;\n          -webkit-transition: all 0.75s ease;\n          -o-transition: all 0.75s ease; }\n.need-bottom .need-reasons .reasons-wrap .reasons-btn .btn-arrows {\n          text-indent: 0px;\n          opacity: 0;\n          transition: all 0.75s ease;\n          -moz-transition: all 0.75s ease;\n          -webkit-transition: all 0.75s ease;\n          -o-transition: all 0.75s ease; }\n.need-bottom .need-reasons .reasons-wrap .reasons-btn:hover .btn-arrows {\n          color: #fff;\n          opacity: 1;\n          text-indent: 7px;\n          transition: all 0.75s ease;\n          -moz-transition: all 0.75s ease;\n          -webkit-transition: all 0.75s ease;\n          -o-transition: all 0.75s ease; }\n.need-bottom .reasons-color1 .reasons-wrap {\n    color: #e45353; }\n.need-bottom .reasons-color1 .reasons-wrap:hover {\n      background: transparent;\n      box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .reasons-color1 .reasons-wrap:hover .reasons-icon i {\n        background: #e45353;\n        color: #fff; }\n.need-bottom .reasons-color1 .reasons-wrap .reasons-icon {\n      background-color: #e45353; }\n.need-bottom .reasons-color1 .reasons-wrap .reasons-icon i {\n        background: #fff;\n        color: #e45353; }\n.need-bottom .reasons-color1 .reasons-wrap .reasons-tit {\n      color: #e45353; }\n.need-bottom .reasons-color2 .reasons-wrap {\n    color: #955e89; }\n.need-bottom .reasons-color2 .reasons-wrap:hover {\n      background: transparent;\n      box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .reasons-color2 .reasons-wrap:hover .reasons-icon i {\n        background: #955e89;\n        color: #fff; }\n.need-bottom .reasons-color2 .reasons-wrap .reasons-icon {\n      background-color: #955e89; }\n.need-bottom .reasons-color2 .reasons-wrap .reasons-icon i {\n        background: #fff;\n        color: #955e89; }\n.need-bottom .reasons-color2 .reasons-wrap .reasons-tit {\n      color: #955e89; }\n.need-bottom .reasons-color3 .reasons-wrap {\n    color: #2fa6c4; }\n.need-bottom .reasons-color3 .reasons-wrap:hover {\n      background: transparent;\n      box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .reasons-color3 .reasons-wrap:hover .reasons-icon i {\n        background: #2fa6c4;\n        color: #fff; }\n.need-bottom .reasons-color3 .reasons-wrap .reasons-icon {\n      background-color: #2fa6c4; }\n.need-bottom .reasons-color3 .reasons-wrap .reasons-icon i {\n        background: #fff;\n        color: #2fa6c4; }\n.need-bottom .reasons-color3 .reasons-wrap .reasons-tit {\n      color: #2fa6c4; }\n.need-bottom .reasons-color4 .reasons-wrap {\n    color: #f58b3f; }\n.need-bottom .reasons-color4 .reasons-wrap:hover {\n      background: transparent;\n      box-shadow: 0 3px 0 0, 0 -4px 0 0; }\n.need-bottom .reasons-color4 .reasons-wrap:hover .reasons-icon i {\n        background: #f58b3f;\n        color: #fff; }\n.need-bottom .reasons-color4 .reasons-wrap .reasons-icon {\n      background-color: #f58b3f; }\n.need-bottom .reasons-color4 .reasons-wrap .reasons-icon i {\n        background: #fff;\n        color: #f58b3f; }\n.need-bottom .reasons-color4 .reasons-wrap .reasons-tit {\n      color: #f58b3f; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvbmVlZC1wb2V0cnkvbmVlZC1wb2V0cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L25lZWQtcG9ldHJ5L0U6XFxzZWxmLS0tLS0tLS0tLeWJjeerr+ebuOWFs1xcc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxcbmVlZC1wb2V0cnlcXG5lZWQtcG9ldHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFO0lBQ0UsYUFBYTtJQUNiLGNBQWMsRUFBQTtFQUVoQjtJQUNFLFdBQVcsRUFBQTtJQURiO01BR0ksYUFBYTtNQUNiLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtNQUx2QjtRQU9NLG9CQUFvQixFQUFBO01BUDFCO1FBVU0sZUFBZTtRQUNmLFlBQVksRUFBQTtJQVhsQjtNQWVJLGVBQWU7TUFDZixjQUFjLEVBQUE7RUFHbEI7SUFDRSxXQUFXO0lBQ1gsU0FBQSxFQUFBO0lBRkY7TUFJSSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsWUFBWSxFQUFBLEVBQ2I7QUFJTDtFQUNFO0lBQ0UsV0FBVyxFQUFBO0VBRWI7SUFFRSxlQUFlLEVBQUE7SUFGakI7TUFJSSxXQUFXO01BQ1gsZUFBZTtNQUNmLG1CQUFtQixFQUFBO01BTnZCO1FBUU0sb0JBQW9CLEVBQUE7TUFSMUI7UUFXTSxhQUFhLEVBQUE7UUFYbkI7VUFhUSxlQUFlO1VBQ2YsWUFBWSxFQUFBO0lBZHBCO01BbUJJLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUFHckI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QixFQUFBO0lBSDlCO01BS0ksZUFBZSxFQUFBLEVBQ2hCO0FBSUw7RUFDRSxXQUFXO0VBRVgsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw2Q0FBNkMsRUFBQTtBQUwvQztJQU9JLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWMsRUFBQTtBQVZsQjtNQVlNLGdDQUFnQztNQUNoQyxXQUFXO01BQ1gsZ0NBQWdDO01BQ2hDLGtCQUFrQixFQUFBO0FBZnhCO1FBaUJRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUIsRUFBQTtBQXJCM0I7VUF1QlUsV0FBVztVQUVYLGdCQUFnQjtVQUNoQixnQkFBZ0I7VUFFaEIsa0JBQWtCO1VBQ2xCLGlCQUFpQjtVQUNqQixjQUFjLEVBQUE7QUE5QnhCO0lBcUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtBQUlsQjtFQUNFLFdBQVc7RUFDWCxxQ0FBa0U7RUFDbEUsa0JBQWtCO0VBQ2xCLE9BQUE7RUFxSkEsdUJBQUE7RUFFQSxTQUFBLEVBQUE7QUEzSkY7SUFNSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMENBQTBDLEVBQUE7QUFoQjlDO0lBbUJJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2Q0FBNkMsRUFBQTtBQTdCakQ7SUFpQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQWtIdEIsaUJBQUEsRUFBa0I7QUF2SnRCO01BdUNNLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BRWxCLHNCQUFzQjtNQXVHdEIsZ0JBQUEsRUFBaUI7QUFySnZCO1FBZ0RRLHVCQUF1QjtRQUV2QixpQ0FBaUMsRUFBQTtBQWxEekM7UUFxRFEsV0FBVztRQUNYLFFBQVE7UUFDUixTQUFTO1FBQ1Qsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUztRQUNULGlCQUFpQixFQUFBO0FBL0R6QjtRQWtFUSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiw2QkFBNkIsRUFBQTtBQXJFckM7VUF1RVUsWUFBWTtVQUNaLGFBQWE7VUFDYixhQUFhO1VBQ2IsZ0JBQWdCO1VBQ2hCLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2YsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixxQkFBcUI7VUFLckIsZ0NBQWdDLEVBQUE7QUFwRjFDO1FBd0ZRLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQix5QkFBeUIsRUFBQTtBQTVGakM7UUErRlEsZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIscUJBQXFCLEVBQUE7QUFyRzdCO1FBd0dRLFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBRWxCLGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0IsY0FBYztRQUNkLG1CQUFtQjtRQUNuQiwyQ0FBMkM7UUFDM0MsZUFBZTtRQUNmLHlCQUFpQjtXQUFqQixzQkFBaUI7WUFBakIscUJBQWlCO2dCQUFqQixpQkFBaUI7UUFDakIsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQixrQ0FBa0M7UUFDbEMsNkJBQTZCLEVBQUE7QUF6SHJDO1VBMkhVLG1CQUFtQjtVQUNuQixXQUFXO1VBQ1gsaUJBQWlCO1VBQ2pCLDBCQUEwQjtVQUMxQiwrQkFBK0I7VUFDL0Isa0NBQWtDO1VBQ2xDLDZCQUE2QixFQUFBO0FBakl2QztVQW9JVSxnQkFBZ0I7VUFDaEIsVUFBVTtVQUNWLDBCQUEwQjtVQUMxQiwrQkFBK0I7VUFDL0Isa0NBQWtDO1VBQ2xDLDZCQUE2QixFQUFBO0FBekl2QztVQTRJVSxXQUFXO1VBQ1gsVUFBVTtVQUNWLGdCQUFnQjtVQUNoQiwwQkFBMEI7VUFDMUIsK0JBQStCO1VBQy9CLGtDQUFrQztVQUNsQyw2QkFBNkIsRUFBQTtBQWxKdkM7SUE4Sk0sY0FBYyxFQUFBO0FBOUpwQjtNQWdLUSx1QkFBdUI7TUFFdkIsaUNBQWlDLEVBQUE7QUFsS3pDO1FBb0tVLG1CQUFtQjtRQUNuQixXQUFXLEVBQUE7QUFyS3JCO01BeUtRLHlCQUF5QixFQUFBO0FBektqQztRQTJLVSxnQkFBZ0I7UUFDaEIsY0FBYyxFQUFBO0FBNUt4QjtNQWdMUSxjQUFjLEVBQUE7QUFoTHRCO0lBc0xNLGNBQWMsRUFBQTtBQXRMcEI7TUF3TFEsdUJBQXVCO01BRXZCLGlDQUFpQyxFQUFBO0FBMUx6QztRQTRMVSxtQkFBbUI7UUFDbkIsV0FBVyxFQUFBO0FBN0xyQjtNQWlNUSx5QkFBeUIsRUFBQTtBQWpNakM7UUFtTVUsZ0JBQWdCO1FBQ2hCLGNBQWMsRUFBQTtBQXBNeEI7TUF3TVEsY0FBYyxFQUFBO0FBeE10QjtJQThNTSxjQUFjLEVBQUE7QUE5TXBCO01BZ05RLHVCQUF1QjtNQUV2QixpQ0FBaUMsRUFBQTtBQWxOekM7UUFvTlUsbUJBQW1CO1FBQ25CLFdBQVcsRUFBQTtBQXJOckI7TUF5TlEseUJBQXlCLEVBQUE7QUF6TmpDO1FBMk5VLGdCQUFnQjtRQUNoQixjQUFjLEVBQUE7QUE1TnhCO01BZ09RLGNBQWMsRUFBQTtBQWhPdEI7SUFzT00sY0FBYyxFQUFBO0FBdE9wQjtNQXdPUSx1QkFBdUI7TUFFdkIsaUNBQWlDLEVBQUE7QUExT3pDO1FBNE9VLG1CQUFtQjtRQUNuQixXQUFXLEVBQUE7QUE3T3JCO01BaVBRLHlCQUF5QixFQUFBO0FBalBqQztRQW1QVSxnQkFBZ0I7UUFDaEIsY0FBYyxFQUFBO0FBcFB4QjtNQXdQUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtY29udGVudC9uZWVkLXBvZXRyeS9uZWVkLXBvZXRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5sYXlvdXQge1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87IH1cbiAgLm5lZWQtdG9wIHtcbiAgICBoZWlnaHQ6IDMwJTsgfVxuICAgIC5uZWVkLXRvcCAubmVlZC10aXQge1xuICAgICAgd2lkdGg6IDEyMDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7IH1cbiAgICAgIC5uZWVkLXRvcCAubmVlZC10aXQgLnRpdC1ib3gge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMjVweDsgfVxuICAgICAgLm5lZWQtdG9wIC5uZWVkLXRpdCAucHJvdGVjdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7IH1cbiAgICAubmVlZC10b3AgLm5lZWQtZGV0YWlsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDIlOyB9XG4gIC5uZWVkLWJvdHRvbSB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgLyog5Z6C55u05bGF5LitICovIH1cbiAgICAubmVlZC1ib3R0b20gLmF1dG8tcmVhc29ucyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IC0yNTBweDtcbiAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICBoZWlnaHQ6IGF1dG87IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubGF5b3V0IHtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAubmVlZC10b3Age1xuICAgIHBhZGRpbmc6IDIwcHggMDsgfVxuICAgIC5uZWVkLXRvcCAubmVlZC10aXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4OyB9XG4gICAgICAubmVlZC10b3AgLm5lZWQtdGl0IC50aXQtYm94IHtcbiAgICAgICAgcGFkZGluZzogMTdweCAwIDE2cHg7IH1cbiAgICAgIC5uZWVkLXRvcCAubmVlZC10aXQgLmljb24td3JhcCB7XG4gICAgICAgIGJvdHRvbTogLTI0cHg7IH1cbiAgICAgICAgLm5lZWQtdG9wIC5uZWVkLXRpdCAuaWNvbi13cmFwIC5wcm90ZWN0LWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7IH1cbiAgICAubmVlZC10b3AgLm5lZWQtZGV0YWlsIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nOiA1cHggMjBweDsgfVxuICAubmVlZC1ib3R0b20ge1xuICAgIGhlaWdodDogNzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHggMjBweCAxNXB4OyB9XG4gICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDclOyB9IH1cblxuLm5lZWQtdG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNzUpOyB9XG4gIC5uZWVkLXRvcCAubmVlZC10aXQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMjcyNzI3O1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gICAgLm5lZWQtdG9wIC5uZWVkLXRpdCAudGl0LWJveCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICNlNWU1ZTUgc29saWQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIC5uZWVkLXRvcCAubmVlZC10aXQgLnRpdC1ib3ggLmljb24td3JhcCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMjFweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDsgfVxuICAgICAgICAubmVlZC10b3AgLm5lZWQtdGl0IC50aXQtYm94IC5pY29uLXdyYXAgLnByb3RlY3QtaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICAgICAgICBjb2xvcjogIzAwNjFhZTsgfVxuICAubmVlZC10b3AgLm5lZWQtZGV0YWlsIHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzI3MjcyNzsgfVxuXG4ubmVlZC1ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZWVkX2JnLnBuZ1wiKSByZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyog566t5aS0ICovXG4gIC8qIG5lZWQtcmVhc29ucyDmnIDlpJblsYLlrrnlmaggKi9cbiAgLyog5LiN5ZCM6aKc6ImyICovIH1cbiAgLm5lZWQtYm90dG9tOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50OyB9XG4gIC5uZWVkLWJvdHRvbTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICBib3JkZXItd2lkdGg6IDI1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNkYmRiZGIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7IH1cbiAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiByZWFzb25zLXdyYXAgKi8gfVxuICAgIC5uZWVkLWJvdHRvbSAubmVlZC1yZWFzb25zIC5yZWFzb25zLXdyYXAge1xuICAgICAgcGFkZGluZzogNDVweCAxMHB4IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YzZjNmMztcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTRweCAwIDA7XG4gICAgICBib3gtc2hhZG93OiAwIC00cHggMCAwO1xuICAgICAgLyogcmVhc29ucy1idG4gKi8gfVxuICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwOyB9XG4gICAgICAubmVlZC1ib3R0b20gLm5lZWQtcmVhc29ucyAucmVhc29ucy13cmFwOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQ7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4OyB9XG4gICAgICAubmVlZC1ib3R0b20gLm5lZWQtcmVhc29ucyAucmVhc29ucy13cmFwIC5yZWFzb25zLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IH1cbiAgICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1pY29uIGkge1xuICAgICAgICAgIHdpZHRoOiAxMDhweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy10aXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgICAubmVlZC1ib3R0b20gLm5lZWQtcmVhc29ucyAucmVhc29ucy13cmFwIC5yZWFzb25zLWRldCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4OyB9XG4gICAgICAubmVlZC1ib3R0b20gLm5lZWQtcmVhc29ucyAucmVhc29ucy13cmFwIC5yZWFzb25zLWJ0biB7XG4gICAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAxNSwgMTUsIDAuMDUpO1xuICAgICAgICBjb2xvcjogcmdiYSgxNSwgMTUsIDE1LCAwLjM1KTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTsgfVxuICAgICAgICAubmVlZC1ib3R0b20gLm5lZWQtcmVhc29ucyAucmVhc29ucy13cmFwIC5yZWFzb25zLWJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNjFhZTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7IH1cbiAgICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1idG4gLmJ0bi1hcnJvd3Mge1xuICAgICAgICAgIHRleHQtaW5kZW50OiAwcHg7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7IH1cbiAgICAgICAgLm5lZWQtYm90dG9tIC5uZWVkLXJlYXNvbnMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1idG46aG92ZXIgLmJ0bi1hcnJvd3Mge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDdweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7IH1cbiAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMSAucmVhc29ucy13cmFwIHtcbiAgICBjb2xvcjogI2U0NTM1MzsgfVxuICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjEgLnJlYXNvbnMtd3JhcDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwOyB9XG4gICAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IxIC5yZWFzb25zLXdyYXA6aG92ZXIgLnJlYXNvbnMtaWNvbiBpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U0NTM1MztcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IxIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ1MzUzOyB9XG4gICAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IxIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtaWNvbiBpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICNlNDUzNTM7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IxIC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtdGl0IHtcbiAgICAgIGNvbG9yOiAjZTQ1MzUzOyB9XG4gIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjIgLnJlYXNvbnMtd3JhcCB7XG4gICAgY29sb3I6ICM5NTVlODk7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IyIC5yZWFzb25zLXdyYXA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMiAucmVhc29ucy13cmFwOmhvdmVyIC5yZWFzb25zLWljb24gaSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5NTVlODk7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMiAucmVhc29ucy13cmFwIC5yZWFzb25zLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk1NWU4OTsgfVxuICAgICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMiAucmVhc29ucy13cmFwIC5yZWFzb25zLWljb24gaSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjOTU1ZTg5OyB9XG4gICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMiAucmVhc29ucy13cmFwIC5yZWFzb25zLXRpdCB7XG4gICAgICBjb2xvcjogIzk1NWU4OTsgfVxuICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3IzIC5yZWFzb25zLXdyYXAge1xuICAgIGNvbG9yOiAjMmZhNmM0OyB9XG4gICAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yMyAucmVhc29ucy13cmFwOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7IH1cbiAgICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjMgLnJlYXNvbnMtd3JhcDpob3ZlciAucmVhc29ucy1pY29uIGkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmZhNmM0O1xuICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1pY29uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZmE2YzQ7IH1cbiAgICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy1pY29uIGkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzJmYTZjNDsgfVxuICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjMgLnJlYXNvbnMtd3JhcCAucmVhc29ucy10aXQge1xuICAgICAgY29sb3I6ICMyZmE2YzQ7IH1cbiAgLm5lZWQtYm90dG9tIC5yZWFzb25zLWNvbG9yNCAucmVhc29ucy13cmFwIHtcbiAgICBjb2xvcjogI2Y1OGIzZjsgfVxuICAgIC5uZWVkLWJvdHRvbSAucmVhc29ucy1jb2xvcjQgLnJlYXNvbnMtd3JhcDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwOyB9XG4gICAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3I0IC5yZWFzb25zLXdyYXA6aG92ZXIgLnJlYXNvbnMtaWNvbiBpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1OGIzZjtcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3I0IC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4YjNmOyB9XG4gICAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3I0IC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtaWNvbiBpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICNmNThiM2Y7IH1cbiAgICAubmVlZC1ib3R0b20gLnJlYXNvbnMtY29sb3I0IC5yZWFzb25zLXdyYXAgLnJlYXNvbnMtdGl0IHtcbiAgICAgIGNvbG9yOiAjZjU4YjNmOyB9XG4iLCJAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAubGF5b3V0IHtcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLm5lZWQtdG9wIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgLm5lZWQtdGl0IHtcclxuICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAudGl0LWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnByb3RlY3QtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5lZWQtZGV0YWlsIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIH1cclxuICB9XHJcbiAgLm5lZWQtYm90dG9tIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgLyog5Z6C55u05bGF5LitICovXHJcbiAgICAuYXV0by1yZWFzb25zIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbWFyZ2luLXRvcDogLTI1MHB4O1xyXG4gICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAubGF5b3V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubmVlZC10b3Age1xyXG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIC5uZWVkLXRpdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIC50aXQtYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAxN3B4IDAgMTZweDtcclxuICAgICAgfVxyXG4gICAgICAuaWNvbi13cmFwIHtcclxuICAgICAgICBib3R0b206IC0yNHB4O1xyXG4gICAgICAgIC5wcm90ZWN0LWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5lZWQtZGV0YWlsIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm5lZWQtYm90dG9tIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNTBweCAxNXB4IDIwcHggMTVweDtcclxuICAgIC5uZWVkLXJlYXNvbnMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmVlZC10b3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIHBhZGRpbmctdG9wOiA1OHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuICAubmVlZC10aXQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMjcyNzI3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAudGl0LWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICNlNWU1ZTUgc29saWQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLmljb24td3JhcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0yMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLnByb3RlY3QtaWNvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIC8vIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgLy8gZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNjFhZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5lZWQtZGV0YWlsIHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjMjcyNzI3O1xyXG4gIH1cclxufVxyXG5cclxuLm5lZWQtYm90dG9tIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25lZWRfYmcucG5nXCIpIHJlcGVhdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyog566t5aS0ICovXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgIGJvcmRlci13aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RiZGJkYiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5uZWVkLXJlYXNvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAucmVhc29ucy13cmFwIHtcclxuICAgICAgcGFkZGluZzogNDVweCAxMHB4IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YzZjNmMztcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTRweCAwIDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgLTRweCAwIDA7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMCAwLCAwIC00cHggMCAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgICAgfVxyXG4gICAgICAucmVhc29ucy1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICB3aWR0aDogMTA4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwOHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtdGl0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtZGV0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgfVxyXG4gICAgICAucmVhc29ucy1idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAxNSwgMTUsIDAuMDUpO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1LCAxNSwgMTUsIDAuMzUpO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNjFhZTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tYXJyb3dzIHtcclxuICAgICAgICAgIHRleHQtaW5kZW50OiAwcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIC5idG4tYXJyb3dzIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRleHQtaW5kZW50OiA3cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZTtcclxuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlO1xyXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8qIHJlYXNvbnMtYnRuICovXHJcbiAgICB9XHJcbiAgICAvKiByZWFzb25zLXdyYXAgKi9cclxuICB9XHJcbiAgLyogbmVlZC1yZWFzb25zIOacgOWkluWxguWuueWZqCAqL1xyXG5cclxuICAvKiDkuI3lkIzpopzoibIgKi9cclxuICAucmVhc29ucy1jb2xvcjEge1xyXG4gICAgLnJlYXNvbnMtd3JhcCB7XHJcbiAgICAgIGNvbG9yOiAjZTQ1MzUzO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgICAgLnJlYXNvbnMtaWNvbiBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlNDUzNTM7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NTM1MztcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBjb2xvcjogI2U0NTM1MztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtdGl0IHtcclxuICAgICAgICBjb2xvcjogI2U0NTM1MztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmVhc29ucy1jb2xvcjIge1xyXG4gICAgLnJlYXNvbnMtd3JhcCB7XHJcbiAgICAgIGNvbG9yOiAjOTU1ZTg5O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgICAgLnJlYXNvbnMtaWNvbiBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM5NTVlODk7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk1NWU4OTtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBjb2xvcjogIzk1NWU4OTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtdGl0IHtcclxuICAgICAgICBjb2xvcjogIzk1NWU4OTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmVhc29ucy1jb2xvcjMge1xyXG4gICAgLnJlYXNvbnMtd3JhcCB7XHJcbiAgICAgIGNvbG9yOiAjMmZhNmM0O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgICAgLnJlYXNvbnMtaWNvbiBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZmE2YzQ7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmYTZjNDtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBjb2xvcjogIzJmYTZjNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtdGl0IHtcclxuICAgICAgICBjb2xvcjogIzJmYTZjNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmVhc29ucy1jb2xvcjQge1xyXG4gICAgLnJlYXNvbnMtd3JhcCB7XHJcbiAgICAgIGNvbG9yOiAjZjU4YjNmO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDAgMCwgMCAtNHB4IDAgMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAwIDAsIDAgLTRweCAwIDA7XHJcbiAgICAgICAgLnJlYXNvbnMtaWNvbiBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNThiM2Y7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGIzZjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1OGIzZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlYXNvbnMtdGl0IHtcclxuICAgICAgICBjb2xvcjogI2Y1OGIzZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/home/home-content/need-poetry/need-poetry.component.ts ***!
  \******************************************************************************/
/*! exports provided: NeedPoetryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedPoetryComponent", function() { return NeedPoetryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/animations/fadeInUp */ "./src/app/shared/animations/fadeInUp.ts");



var NeedPoetryComponent = /** @class */ (function () {
    function NeedPoetryComponent() {
        this.startAnimationTit = false;
        this.startAnimationDet = false;
    }
    NeedPoetryComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.whitchSatrt === 1) {
            this.startAnimationTit = true;
            setTimeout(function () {
                _this.startAnimationDet = true;
            }, 100);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NeedPoetryComponent.prototype, "whitchSatrt", void 0);
    NeedPoetryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'need-poetry',
            template: __webpack_require__(/*! ./need-poetry.component.html */ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.html"),
            animations: [
                _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__["fadeInUp"]
            ],
            styles: [__webpack_require__(/*! ./need-poetry.component.scss */ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.scss")]
        })
    ], NeedPoetryComponent);
    return NeedPoetryComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<poetry-partner [partnerStart]=\"partnerStart\"></poetry-partner>\r\n<div class='footer'> \r\n    <poetry-footer></poetry-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .footer {\n    position: absolute;\n    bottom: 0; } }\n\n@media screen and (max-width: 767px) {\n  .footer {\n    position: relative; } }\n\n.footer {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcGFydG5lci1hbmQtZm9vdGVyL0U6XFxzZWxmLS0tLS0tLS0tLeWJjeerr+ebuOWFs1xcc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxccGFydG5lci1hbmQtZm9vdGVyXFxwYXJ0bmVyLWFuZC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTLEVBQUEsRUFDWjs7QUFHTDtFQUNJO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckI7O0FBR0w7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtY29udGVudC9wYXJ0bmVyLWFuZC1mb290ZXIvcGFydG5lci1hbmQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuZm9vdGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAuZm9vdGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PartnerAndFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerAndFooterComponent", function() { return PartnerAndFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartnerAndFooterComponent = /** @class */ (function () {
    function PartnerAndFooterComponent() {
        this.partnerStart = false;
    }
    PartnerAndFooterComponent.prototype.ngOnChanges = function () {
        if (this.whitchSatrt === 4) {
            this.partnerStart = true;
        }
    };
    PartnerAndFooterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PartnerAndFooterComponent.prototype, "whitchSatrt", void 0);
    PartnerAndFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-partner-and-footer',
            template: __webpack_require__(/*! ./partner-and-footer.component.html */ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.html"),
            styles: [__webpack_require__(/*! ./partner-and-footer.component.scss */ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartnerAndFooterComponent);
    return PartnerAndFooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='news-top'>\r\n  <div class='news-tit'>\r\n    <div class='tit-box'  *ngIf='partnerStart' [@fadeInUp]>\r\n      贡献人简介\r\n      <div class='icon-wrap'>\r\n        <div class='protect-icon'>\r\n            <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class='container' *ngIf='imgStart' [@fadeInUp]>\r\n      <ul class='img-wrap'  nz-row>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\"  >\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n            <li nz-col nzSm=\"12\"  nzMd=\"4\">\r\n                <img src='./assets/images/demo/partner.png' alt=''>\r\n            </li>\r\n       </ul>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .news-top .news-tit {\n    width: 1200px;\n    font-size: 33px;\n    margin: 0 auto;\n    margin-top: 58px; }\n  .container {\n    margin-top: 5%; } }\n\n@media screen and (max-width: 767px) {\n  .news-top .news-tit {\n    width: 100%;\n    font-size: 20px;\n    margin: 0 auto;\n    margin-top: 10px; }\n  .container {\n    padding: 40px 0; } }\n\n.news-top {\n  width: 100%;\n  padding: 1px 0; }\n\n.news-top .news-tit {\n    letter-spacing: 5px;\n    line-height: 1.1;\n    text-align: center;\n    color: #272727;\n    padding-top: 3%; }\n\n.news-top .news-tit .tit-box {\n      display: inline-block !important;\n      width: auto;\n      padding: 15px 0 25px;\n      border-bottom: 2px #E5E5E5 solid;\n      position: relative; }\n\n.news-top .news-tit .tit-box .icon-wrap {\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: -21px;\n        padding-right: 40px; }\n\n.news-top .news-tit .tit-box .icon-wrap .protect-icon {\n          width: 40px;\n          height: 30px;\n          margin-left: 50%;\n          background: #f5f5f5;\n          font-size: 19px;\n          text-align: center;\n          padding-left: 7px;\n          color: #0061ae; }\n\n.img-wrap li {\n  padding: 7px 15px;\n  text-align: center;\n  min-height: 130px;\n  vertical-align: middle;\n  border-bottom: 1px solid #e9e9e9;\n  border-right: 1px solid #e9e9e9; }\n\n.img-wrap li:nth-child(n+7) {\n  border-bottom: none; }\n\n.img-wrap li:nth-child(6n) {\n  border-right: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcGFydG5lci1hbmQtZm9vdGVyL3BhcnRuZXIvRTpcXHNlbGYtLS0tLS0tLS0t5YmN56uv55u45YWzXFxzY2hvb2xcXHBvZXRyaWVzL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1jb250ZW50XFxwYXJ0bmVyLWFuZC1mb290ZXJcXHBhcnRuZXJcXHBhcnRuZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUVRLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBSXhCO0lBQ0ksY0FBYyxFQUFBLEVBQ2pCOztBQUdMO0VBQ0k7SUFFUSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUd4QjtJQUNJLGVBQWUsRUFBQSxFQUNsQjs7QUFLTDtFQUNJLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRmxCO0lBSVEsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUFSdkI7TUFVWSxnQ0FBK0I7TUFDL0IsV0FBVztNQUNYLG9CQUFvQjtNQUNwQixnQ0FBZ0M7TUFDaEMsa0JBQWtCLEVBQUE7O0FBZDlCO1FBZ0JnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7O0FBcEJuQztVQXNCb0IsV0FBVztVQUNYLFlBQVk7VUFDWixnQkFBZ0I7VUFDaEIsbUJBQW1CO1VBQ25CLGVBQWU7VUFDZixrQkFBa0I7VUFDbEIsaUJBQWlCO1VBQ2pCLGNBQWMsRUFBQTs7QUFnQmhDO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQywrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L3BhcnRuZXItYW5kLWZvb3Rlci9wYXJ0bmVyL3BhcnRuZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLm5ld3MtdG9we1xyXG4gICAgICAgIC5uZXdzLXRpdHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNThweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5uZXdzLXRvcHtcclxuICAgICAgICAubmV3cy10aXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5uZXdzLXRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMXB4IDA7XHJcbiAgICAubmV3cy10aXR7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzI3MjcyNztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgICAgLnRpdC1ib3h7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICNFNUU1RTUgc29saWQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLmljb24td3JhcHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMjFweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAucHJvdGVjdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNjFhZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC5uZXdzLWRldGFpbHtcclxuICAgIC8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAvLyAgICAgY29sb3I6ICMyNzI3Mjc7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuIFxyXG4gIC5pbWctd3JhcCBsaXtcclxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gIH1cclxuICAuaW1nLXdyYXAgbGk6bnRoLWNoaWxkKG4rNykge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgLmltZy13cmFwIGxpOm50aC1jaGlsZCg2bikge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerComponent", function() { return PartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/animations/fadeInUp */ "./src/app/shared/animations/fadeInUp.ts");



var PartnerComponent = /** @class */ (function () {
    function PartnerComponent() {
        this.imgStart = false;
    }
    PartnerComponent.prototype.ngOnChanges = function () {
        this.partnerStart ? this.beginImg() : null;
    };
    PartnerComponent.prototype.beginImg = function () {
        var _this = this;
        setTimeout(function () {
            _this.imgStart = true;
        }, 300);
    };
    PartnerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PartnerComponent.prototype, "partnerStart", void 0);
    PartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-partner',
            template: __webpack_require__(/*! ./partner.component.html */ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.html"),
            animations: [
                _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__["fadeInUp"]
            ],
            styles: [__webpack_require__(/*! ./partner.component.scss */ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartnerComponent);
    return PartnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-col nzSm=\"24\" nzMd=\"8\"  class=\"itemWrap\" #itemWrap (mouseenter)=\"mouseenter($event)\" (mouseleave)=\"mouseleave($event)\">\r\n  <img src=\"{{newItem.img}}\" alt=\"\">\r\n  <div class=\"content\" #content>\r\n      <p>\r\n          {{ newItem.tit }}\r\n          \r\n      </p>\r\n      <p class='det'>\r\n          {{ newItem.det }}\r\n          \r\n      </p>\r\n  </div>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .content {\n    font-size: 24px; }\n  .det {\n    font-size: 14px; } }\n\n@media screen and (max-width: 767px) {\n  .content {\n    font-size: 14px; }\n  .det {\n    font-size: 10px; } }\n\n.container {\n  width: 1000px;\n  margin: 50px auto; }\n\n.itemWrap {\n  height: auto;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  padding: 0; }\n\n.itemWrap img {\n    width: 100%;\n    height: auto; }\n\n.content {\n  position: absolute;\n  z-index: 2;\n  background-color: rgba(19, 192, 223, 0.65);\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  top: -100%;\n  text-align: center;\n  color: #fff;\n  line-height: 2;\n  padding: 20px 30px; }\n\n.content .det {\n    text-align: left;\n    line-height: 1.5;\n    color: #f5f5f5; }\n\n.content.active {\n  transition: all .3s;\n  -webkit-transition: all .3s;\n  -ms-transition: all .3s;\n  -o-transition: all .3s;\n  -moz-transition: all .3s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcG9ldHJ5LW5ld3MvbW92ZS1pbWcvRTpcXHNlbGYtLS0tLS0tLS0t5YmN56uv55u45YWzXFxzY2hvb2xcXHBvZXRyaWVzL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1jb250ZW50XFxwb2V0cnktbmV3c1xcbW92ZS1pbWdcXG1vdmUtaW1nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxlQUFlLEVBQUEsRUFDbEI7O0FBR0w7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGVBQWUsRUFBQSxFQUNsQjs7QUFJTDtFQUNJLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFOZDtJQVFRLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFFViwwQ0FBdUM7RUFDdkMsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQVp0QjtJQWNRLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBOztBQUl0QjtFQUNJLG1CQUFvQjtFQUNwQiwyQkFBNEI7RUFDNUIsdUJBQXlCO0VBQ3pCLHNCQUF3QjtFQUN4Qix3QkFBMEI7RUFDMUIsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcG9ldHJ5LW5ld3MvbW92ZS1pbWcvbW92ZS1pbWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIC5kZXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5kZXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuLml0ZW1XcmFwIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksMTkyLDIyMywwLjY1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB0b3A6IC0xMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIC5kZXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudC5hY3RpdmUge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3MgIDtcclxuICAgIC1vLXRyYW5zaXRpb246ICBhbGwgLjNzIDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcyAgO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.ts ***!
  \************************************************************************************/
/*! exports provided: MoveImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveImgComponent", function() { return MoveImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoveImgComponent = /** @class */ (function () {
    function MoveImgComponent(renderer2) {
        this.renderer2 = renderer2;
        this.mousePos = {
            top: "top: -100%; left: 0",
            right: "top: 0; left: 100%",
            bottom: "top: 100%; left: 0",
            left: "top: 0; left: -100%"
        };
    }
    MoveImgComponent.prototype.mouseenter = function (e) {
        var _this = this;
        var direction = this.getDirection(e);
        // console.log("进来的方向",direction,"初始化的样式",this.mousePos[direction])
        this.renderer2.removeClass(this.content.nativeElement, "active");
        this.renderer2.setAttribute(this.content.nativeElement, "style", this.mousePos[direction]);
        setTimeout(function () {
            _this.renderer2.addClass(_this.content.nativeElement, "active");
            _this.renderer2.setAttribute(_this.content.nativeElement, "style", "left: 0;top: 0");
        }, 1);
    };
    MoveImgComponent.prototype.mouseleave = function (e) {
        var direction = this.getDirection(e);
        // console.log("离开的方向",direction,"进行的样式",this.mousePos[direction])
        this.renderer2.setAttribute(this.content.nativeElement, "style", this.mousePos[direction]);
    };
    MoveImgComponent.prototype.getDirection = function (e) {
        var dire = ['top', 'right', 'bottom', 'left'];
        // console.log("获得的数字",this.moveInWay(e))
        return dire[this.moveInWay(e)];
    };
    /**
    * @todo  判断移入方式
    * @param 事件属性
    * @returns number 0-3 上右下左
    */
    MoveImgComponent.prototype.moveInWay = function (e) {
        var item = this.itemWrap.nativeElement; // 获得dom节点 
        // var w = item.offsetWidth;  // 获得节点的宽
        // var h = item.offsetWidth;  // 获得节点的高 因为无margin所以可以用
        var b = item.getBoundingClientRect(); // 获得元素的大小及其相对于视口的位置
        var w = b.width;
        var h = b.height;
        var t = document.body.scrollTop; // 获得卷曲值
        // console.log("节点的宽",w,"节点的高",h,"相对视口的位置",b,"卷曲值",t)
        var x = (e.pageX - b.left - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - b.top - t - (h / 2)) * (h > w ? (w / h) : 1);
        return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    };
    MoveImgComponent.prototype.ngOnInit = function () {
        // this.renderer2.setStyle(this.itemWrap.nativeElement,"background","url("+ this.newItem.img +")");
        this.renderer2.setStyle(this.itemWrap.nativeElement, "background", "#0061ae");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoveImgComponent.prototype, "newItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemWrap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MoveImgComponent.prototype, "itemWrap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MoveImgComponent.prototype, "content", void 0);
    MoveImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-move-img',
            template: __webpack_require__(/*! ./move-img.component.html */ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.html"),
            styles: [__webpack_require__(/*! ./move-img.component.scss */ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], MoveImgComponent);
    return MoveImgComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/poetry-news.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='news-top'>\r\n  <div class='news-tit'>\r\n    <div class='tit-box' [@fadeInUp]  *ngIf=\"startAnimationTit\">\r\n      新闻中心\r\n      <div class='icon-wrap'>\r\n          <div class='protect-icon'>\r\n              <i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i> \r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=' news-detail' [@fadeInUp] *ngIf=\"startAnimationDet\">\r\n      <p> 诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的</p>\r\n      <p> 诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的诗词有新的见解之类的 </p>\r\n    </div>\r\n</div>\r\n\r\n<div class='container-fluid news-bottom'>\r\n    <div nz-row>\r\n        <ng-container *ngFor='let newItem of newsList'>\r\n          <poetry-move-img [newItem]=\"newItem\"></poetry-move-img>\r\n        </ng-container>\r\n      </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/poetry-news.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .news-top .news-tit {\n    width: 1200px;\n    font-size: 33px; }\n    .news-top .news-tit .tit-box {\n      padding: 15px 0 25px; }\n  .news-bottom {\n    width: 100%;\n    position: absolute;\n    bottom: 58px;\n    left: 0; }\n  .news-detail {\n    font-size: 16px;\n    margin-top: 2%; } }\n\n@media screen and (max-width: 767px) {\n  .news-top {\n    margin-top: 60px; }\n    .news-top .news-tit {\n      width: 100%;\n      font-size: 20px; }\n      .news-top .news-tit .tit-box {\n        padding: 17px 0 16px; }\n  .news-bottom {\n    width: 100%; }\n  .news-detail {\n    font-size: 10px;\n    padding: 20px; } }\n\n.news-top {\n  width: 100%;\n  padding: 1px 0; }\n\n.news-top .news-tit {\n    letter-spacing: 5px;\n    line-height: 1.1;\n    text-align: center;\n    color: #272727;\n    margin: 0 auto;\n    margin-top: 3%; }\n\n.news-top .news-tit .tit-box {\n      display: inline-block !important;\n      width: auto;\n      border-bottom: 2px #E5E5E5 solid;\n      position: relative; }\n\n.news-top .news-tit .tit-box .icon-wrap {\n        width: 100%;\n        height: 30px;\n        position: absolute;\n        bottom: -21px;\n        padding-right: 40px; }\n\n.news-top .news-tit .tit-box .icon-wrap .protect-icon {\n          width: 40px;\n          height: 30px;\n          margin-left: 50%;\n          background: #f5f5f5;\n          font-size: 19px;\n          text-align: center;\n          padding-left: 7px;\n          color: #0061ae; }\n\n.news-top .news-detail {\n    line-height: 2;\n    text-align: center;\n    font-weight: 300;\n    color: #272727; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcG9ldHJ5LW5ld3MvRTpcXHNlbGYtLS0tLS0tLS0t5YmN56uv55u45YWzXFxzY2hvb2xcXHBvZXRyaWVzL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1jb250ZW50XFxwb2V0cnktbmV3c1xccG9ldHJ5LW5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSTtJQUVRLGFBQWE7SUFDYixlQUFlLEVBQUE7SUFIdkI7TUFLWSxvQkFBb0IsRUFBQTtFQUloQztJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU8sRUFBQTtFQUVYO0lBQ0ksZUFBZTtJQUNmLGNBQWMsRUFBQSxFQUNqQjs7QUFHTDtFQUNJO0lBQ0ksZ0JBQWdCLEVBQUE7SUFEcEI7TUFHUSxXQUFXO01BQ1gsZUFBZSxFQUFBO01BSnZCO1FBTVksb0JBQW9CLEVBQUE7RUFLaEM7SUFDSSxXQUFXLEVBQUE7RUFFZjtJQUNJLGVBQWU7SUFDZixhQUFhLEVBQUEsRUFDaEI7O0FBSUw7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUZsQjtJQUlRLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYyxFQUFBOztBQVR0QjtNQVdZLGdDQUErQjtNQUMvQixXQUFXO01BQ1gsZ0NBQWdDO01BQ2hDLGtCQUFrQixFQUFBOztBQWQ5QjtRQWdCZ0IsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQixFQUFBOztBQXBCbkM7VUFzQm9CLFdBQVc7VUFDWCxZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLG1CQUFtQjtVQUNuQixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLGlCQUFpQjtVQUNqQixjQUFjLEVBQUE7O0FBN0JsQztJQW1DUSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtY29udGVudC9wb2V0cnktbmV3cy9wb2V0cnktbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLm5ld3MtdG9we1xyXG4gICAgICAgIC5uZXdzLXRpdHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgICAgICAudGl0LWJveHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMCAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5ld3MtYm90dG9te1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDU4cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5uZXdzLWRldGFpbHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAubmV3cy10b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAubmV3cy10aXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIC50aXQtYm94e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTdweCAwIDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLm5ld3MtYm90dG9te1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm5ld3MtZGV0YWlse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLm5ld3MtdG9we1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgIC5uZXdzLXRpdHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMjcyNzI3O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIC50aXQtYm94e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICNFNUU1RTUgc29saWQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLmljb24td3JhcHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMjFweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAucHJvdGVjdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNjFhZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXdzLWRldGFpbHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBjb2xvcjogIzI3MjcyNztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/home/home-content/poetry-news/poetry-news.component.ts ***!
  \******************************************************************************/
/*! exports provided: PoetryNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoetryNewsComponent", function() { return PoetryNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/animations/fadeInUp */ "./src/app/shared/animations/fadeInUp.ts");



var PoetryNewsComponent = /** @class */ (function () {
    function PoetryNewsComponent() {
        this.startAnimationTit = false;
        this.startAnimationDet = false;
        this.newsList = [
            {
                img: './assets/images/sliders/1.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/2.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/3.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/4.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/5.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            },
            {
                img: './assets/images/sliders/6.jpg',
                tit: '新闻标题',
                det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
            }
        ];
    }
    PoetryNewsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.whitchSatrt === 3) {
            this.startAnimationTit = true;
            setTimeout(function () {
                _this.startAnimationDet = true;
            }, 100);
        }
    };
    PoetryNewsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PoetryNewsComponent.prototype, "whitchSatrt", void 0);
    PoetryNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-news',
            template: __webpack_require__(/*! ./poetry-news.component.html */ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.html"),
            animations: [
                _shared_animations_fadeInUp__WEBPACK_IMPORTED_MODULE_2__["fadeInUp"]
            ],
            styles: [__webpack_require__(/*! ./poetry-news.component.scss */ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PoetryNewsComponent);
    return PoetryNewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='exp-wrap'>\r\n  <div class='exp-det'> \r\n      {{ companyInfo.det }}\r\n  </div>\r\n  <div class='exp-arrow'> </div>\r\n</div>\r\n\r\n<div class='company-info container-fluid'>\r\n  \r\n  <div nz-row>\r\n\r\n      <div nz-col nzSm=\"24\" nzMd=\"8\">\r\n          <div class='img-wrap' #headImg></div>\r\n      </div>\r\n\r\n      <div  nz-col nzSm=\"24\" nzMd=\"14\" class=\"exp-tit\">\r\n         {{ companyInfo.tit }}\r\n      </div>\r\n\r\n      <div nz-col nzSm=\"24\" nzMd=\"4\" class=\"lists-tips\">\r\n          <ul class='company-list'>\r\n              <li>\r\n                  <div (click)='changeCom(0)' [ngClass]=\"firDot ? 'activeDot' : 'defaultDot'\"></div>\r\n              </li>\r\n              <li>\r\n                  <div (click)='changeCom(1)' [ngClass]=\"secDot ? 'activeDot' : 'defaultDot'\"></div>\r\n              </li>\r\n              <li>\r\n                 <div (click)='changeCom(2)' [ngClass]=\"thiDot ? 'activeDot' : 'defaultDot'\"></div>\r\n              </li>\r\n              <li>\r\n                 <div (click)='changeCom(3)' [ngClass]=\"fouDot ? 'activeDot' : 'defaultDot'\"></div>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 768px) {\n  .exp-det {\n    font-size: 16px; }\n  .company-info {\n    font-size: 16px; } }\n\n@media screen and (max-width: 767px) {\n  .exp-det {\n    font-size: 13px; }\n  .company-info {\n    font-size: 12px; } }\n\n.exp-wrap {\n  border: 1px solid #dcdcdc;\n  box-shadow: 0 -4px 0 0 #656d78;\n  text-align: left;\n  text-indent: 32px;\n  padding: 14px 35px 30px  33px;\n  margin: 5px auto;\n  position: relative;\n  border-radius: 5px; }\n\n.exp-wrap .exp-det {\n    line-height: 1.8;\n    color: #595959;\n    margin-top: 5px; }\n\n.exp-wrap .exp-arrow {\n    width: 117px;\n    left: 0;\n    position: absolute;\n    height: 14px;\n    right: 0px;\n    bottom: -14px; }\n\n.exp-wrap .exp-arrow::before {\n      content: '';\n      height: 0;\n      width: 0;\n      border-style: solid;\n      border-width: 10px;\n      border-color: #fff transparent transparent transparent;\n      border-top-width: 16px;\n      border-left-width: 21px;\n      position: absolute;\n      right: 58px;\n      top: -1px;\n      left: 49px;\n      z-index: 9; }\n\n.exp-wrap .exp-arrow::after {\n      content: '';\n      height: 0;\n      width: 0;\n      border-style: solid;\n      border-width: 10px;\n      border-color: #dcdcdc transparent transparent transparent;\n      border-top-width: 17px;\n      border-left-width: 22px;\n      position: absolute;\n      right: 58px;\n      top: 0px;\n      left: 49px;\n      z-index: 8; }\n\n.company-info {\n  margin-top: 20px;\n  padding-left: 20px;\n  color: #2f2f2f;\n  line-height: 1.2; }\n\n.company-info .img-wrap {\n    width: 85px;\n    height: 85px;\n    background-size: 100% 100%;\n    border-radius: 50%; }\n\n.company-info .exp-tit {\n    margin-top: 10px;\n    padding-left: 25px; }\n\n.company-info .lists-tips {\n    padding-right: 0; }\n\n.company-info .company-list li {\n    clear: both;\n    overflow: hidden;\n    cursor: pointer; }\n\n.company-info .company-list li div {\n      width: 12px;\n      height: 12px;\n      border-radius: 6px;\n      margin-bottom: 10px;\n      float: right; }\n\n.activeDot {\n  background: #d1d1d1; }\n\n.defaultDot {\n  border: 2px solid #d1d1d1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL2hlLXNhaWQvRTpcXHNlbGYtLS0tLS0tLS0t5YmN56uv55u45YWzXFxzY2hvb2xcXHBvZXRyaWVzL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1jb250ZW50XFxwcmVzZW50YXRpb24tdXNcXGhlLXNhaWRcXGhlLXNhaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUduQjtJQUNJLGVBQWUsRUFBQSxFQUNsQjs7QUFHTDtFQUNJO0lBQ0ksZUFBZSxFQUFBO0VBR25CO0lBQ0ksZUFBZSxFQUFBLEVBQ2xCOztBQUlMO0VBQ0kseUJBQXlCO0VBRXpCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUU3QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQVZ0QjtJQWFRLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZSxFQUFBOztBQWZ2QjtJQWdDUSxZQUFZO0lBQ1osT0FBTztJQUNQLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWEsRUFBQTs7QUFyQ3JCO01BdUNZLFdBQVc7TUFDWCxTQUFTO01BQ1QsUUFBUTtNQUNSLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFFbEIsc0RBQXNEO01BQ3RELHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxTQUFTO01BQ1QsVUFBVTtNQUNWLFVBQVUsRUFBQTs7QUFwRHRCO01BdURZLFdBQVc7TUFDWCxTQUFTO01BQ1QsUUFBUTtNQUNSLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFFbEIseURBQXlEO01BQ3pELHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxRQUFRO01BQ1IsVUFBVTtNQUNWLFVBQVUsRUFBQTs7QUFNdEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFKcEI7SUFNUSxXQUFXO0lBQ1gsWUFBWTtJQUVaLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTs7QUFWMUI7SUFhUSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7O0FBZDFCO0lBaUJRLGdCQUFnQixFQUFBOztBQWpCeEI7SUFxQlksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7O0FBdkIzQjtNQXlCZ0IsV0FBVztNQUNYLFlBQVk7TUFFWixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLFlBQVksRUFBQTs7QUFPNUI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L3ByZXNlbnRhdGlvbi11cy9oZS1zYWlkL2hlLXNhaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuZXhwLWRldHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbXBhbnktaW5mb3tcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAuZXhwLWRldHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbXBhbnktaW5mb3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uZXhwLXdyYXB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIC00cHggMCAwICM2NTZkNzg7XHJcbiAgICBib3gtc2hhZG93OiAwIC00cHggMCAwICM2NTZkNzg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDMycHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDM1cHggMzBweCAgMzNweDtcclxuICAgIC8vIHBhZGRpbmc6IDE2cHggMzVweCAzMHB4IDcwcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIC5leHAtZGV0e1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgY29sb3I6ICM1OTU5NTk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIC8vICY6OmJlZm9yZXtcclxuICAgICAgICAvLyAgICAgY29udGVudDogJ1xcMjAxQyc7XHJcbiAgICAgICAgLy8gICAgIGNvbG9yOiAjMzdhN2MxO1xyXG4gICAgICAgIC8vICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIC8vICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcclxuICAgICAgICAvLyAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgIC8vICAgICBtYXJnaW46IDAgN3B4O1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICAgIGxlZnQ6IC0zcHg7XHJcbiAgICAgICAgLy8gICAgIHRvcDogLTEzcHg7XHJcbiAgICAgICAgLy8gICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cC1hcnJvd3tcclxuICAgICAgICB3aWR0aDogMTE3cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAtMTRweDtcclxuICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1jb2xvcjogI2RjZGNkYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMjFweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogNThweDtcclxuICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA0OXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiAjZGNkY2RjIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNkY2RjZGMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgbGVmdDogNDlweDtcclxuICAgICAgICAgICAgei1pbmRleDogODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY29tcGFueS1pbmZve1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGNvbG9yOiAjMmYyZjJmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIC5pbWctd3JhcHtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lX2ljb25fMS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC5leHAtdGl0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3RzLXRpcHN7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5jb21wYW55LWxpc3R7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgI2QxZDFkMTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmVEb3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDFkMWQxO1xyXG59XHJcbi5kZWZhdWx0RG90e1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2QxZDFkMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HeSaidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeSaidComponent", function() { return HeSaidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeSaidComponent = /** @class */ (function () {
    function HeSaidComponent(renderer2) {
        this.renderer2 = renderer2;
        this.index = 0;
        this.firDot = false;
        this.secDot = false;
        this.thiDot = false;
        this.fouDot = false;
        this.companyArray = [
            {
                img: './assets/images/demo/partner.png',
                tit: '诗名字',
                det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
            },
            {
                img: './assets/images/demo/partner.png',
                tit: '诗名字',
                det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
            },
            {
                img: './assets/images/demo/partner.png',
                tit: '诗名字',
                det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
            },
            {
                img: './assets/images/demo/partner.png',
                tit: '诗名字',
                det: '诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容诗内容'
            }
        ];
    }
    HeSaidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeCom(0);
        setInterval(function () { _this.addDot(); }, 4000);
    };
    HeSaidComponent.prototype.changeCom = function (index) {
        this.index = index;
        this.companyInfo = this.companyArray[index];
        this.renderer2.setStyle(this.headImg.nativeElement, 'background-image', 'url(' + this.companyInfo.img + ')');
        this.changeDot(index);
    };
    HeSaidComponent.prototype.changeDot = function (index) {
        this.resetDot();
        switch (index) {
            case 0:
                this.firDot = true;
                break;
            case 1:
                this.secDot = true;
                break;
            case 2:
                this.thiDot = true;
                break;
            case 3:
                this.fouDot = true;
                break;
        }
        // let dots = [this.firDot, this.secDot, this.thiDot, this.fouDot];
        // console.log("dots.",dots[index],this.firDot,this.secDot);
        // dots.forEach( (item, num) => {
        //   num === index ?  item = true : item = false;
        //   console.log("item",item, num)
        // })
        // console.log("this.",dots[index],this.firDot,this.secDot)
    };
    HeSaidComponent.prototype.addDot = function () {
        if (this.index >= 3) {
            this.index = 0;
            return;
        }
        else {
            this.index++;
        }
        this.changeCom(this.index);
    };
    HeSaidComponent.prototype.resetDot = function () {
        this.firDot = false;
        this.secDot = false;
        this.thiDot = false;
        this.fouDot = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headImg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeSaidComponent.prototype, "headImg", void 0);
    HeSaidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-he-said',
            template: __webpack_require__(/*! ./he-said.component.html */ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.html"),
            styles: [__webpack_require__(/*! ./he-said.component.scss */ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], HeSaidComponent);
    return HeSaidComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='skill-wrap'>\r\n  <div class='skill-name'>\r\n          {{ skillMeta.name }}\r\n      <span> {{ skillMeta.percentage }} </span>\r\n  </div>\r\n  <div class='process-bar' #processBar\r\n       *ngIf='skillsBarStart' \r\n       [@autoWidth] \r\n       [ngStyle]=\"{'background-color':skillMeta.color,'width':skillMeta.percentage}\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skill-wrap {\n  height: 4px;\n  margin-top: 53px;\n  margin-bottom: 58px;\n  background: #f7f7f7;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset; }\n  .skill-wrap .skill-name {\n    color: #333;\n    font-size: 12px;\n    font-weight: 600;\n    position: relative;\n    z-index: 1;\n    top: -28px; }\n  .skill-wrap .skill-name span {\n      float: right;\n      color: #333; }\n  .skill-wrap .process-bar {\n    position: absolute;\n    height: 100%;\n    top: 0;\n    left: 0; }\n  .skill-wrap .process-bar:before {\n      content: '';\n      background-color: #fff;\n      width: 4px;\n      height: 4px;\n      border-radius: 50%;\n      position: absolute;\n      top: 0;\n      right: 1px;\n      z-index: 1000; }\n  .skill-wrap .process-bar:after {\n      content: '';\n      background-color: inherit;\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      position: absolute;\n      top: -5px;\n      right: -4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL291ci1za2lsbHMvRTpcXHNlbGYtLS0tLS0tLS0t5YmN56uv55u45YWzXFxzY2hvb2xcXHBvZXRyaWVzL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1jb250ZW50XFxwcmVzZW50YXRpb24tdXNcXG91ci1za2lsbHNcXG91ci1za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBRWxCLDhDQUE4QyxFQUFBO0VBUGxEO0lBVVEsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVLEVBQUE7RUFmbEI7TUFpQlksWUFBWTtNQUNaLFdBQVcsRUFBQTtFQWxCdkI7SUF1QlEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTyxFQUFBO0VBMUJmO01BNEJZLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsVUFBVTtNQUNWLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLE1BQU07TUFDTixVQUFVO01BQ1YsYUFBYSxFQUFBO0VBcEN6QjtNQXVDWSxXQUFXO01BQ1gseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL291ci1za2lsbHMvb3VyLXNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbC13cmFwe1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1M3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNThweDtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xyXG5cclxuICAgIC5za2lsbC1uYW1le1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogLTI4cHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2Nlc3MtYmFye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDFweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OurSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurSkillsComponent", function() { return OurSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_autoWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/animations/autoWidth */ "./src/app/shared/animations/autoWidth.ts");



var OurSkillsComponent = /** @class */ (function () {
    // @ViewChild('processBar') processBar: ElementRef;
    function OurSkillsComponent(renderer2) {
        this.renderer2 = renderer2;
    }
    OurSkillsComponent.prototype.ngOnInit = function () { };
    OurSkillsComponent.prototype.ngOnChanges = function () {
        // if (this.skillsBarStart) {
        //   console.log("this.skillsBarStart1111", this.skillsBarStart)
        //   this.renderer2.setProperty(this.processBar.nativeElement, "width", this.skillMeta.percentage);
        //   this.renderer2.setStyle(this.processBar.nativeElement, "background-color", this.skillMeta.color ? this.skillMeta.color : "#0061ea");
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OurSkillsComponent.prototype, "skillMeta", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OurSkillsComponent.prototype, "skillsBarStart", void 0);
    OurSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-our-skills',
            template: __webpack_require__(/*! ./our-skills.component.html */ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.html"),
            animations: [
                _shared_animations_autoWidth__WEBPACK_IMPORTED_MODULE_2__["autoWidth"]
            ],
            styles: [__webpack_require__(/*! ./our-skills.component.scss */ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], OurSkillsComponent);
    return OurSkillsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/presentation-us.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='why-sz-top'>\r\n  \r\n      <div class='why-tit'>您好，我是诗生活</div>\r\n  \r\n      <div class='why-det'>\r\n          诗意您的生活，享受您的快乐。\r\n      </div>\r\n  \r\n      <div class='middle-btn-wrap'>\r\n          <div class='more-btn'>了解更多</div>\r\n          <div class='buy-btn'> 联系我们 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </div>\r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  <div class='why-sz-bottom'>\r\n      <div class='container-fluid'>\r\n          <div nz-row>\r\n              <div nz-col nzSm=\"24\" nzMd=\"8\"  class=\"why-choose-wrap\">\r\n                  <div class='choosed-common-style'>\r\n                      <div class='choosed-tit'>\r\n                          <div> 为什么 </div>\r\n                          <div class='sp2'> 喜欢我们 </div>\r\n                      </div>\r\n                      <p> 我们的网站很有特色 </p>\r\n                  </div>\r\n  \r\n                  <div  *ngFor=\"let reasons of whyChooseUs\">\r\n                      <poetry-reasons (sendVal)=\"getVal($event)\" [formParentShowDet]=\"showDet\" [reasons]=\"reasons\">\r\n                      </poetry-reasons>\r\n                  </div>\r\n              </div>\r\n  \r\n              <div nz-col nzSm=\"24\" nzMd=\"8\" >\r\n  \r\n                  <div class='choosed-common-style'>\r\n                      <div class='choosed-tit'>\r\n                          <div> 我们的 </div>\r\n                          <div class='sp2'> 特别之处 </div>\r\n                      </div>\r\n                      <p> 诗词美人更美 </p>\r\n                  </div>\r\n  \r\n                  <div *ngFor=\"let skillMeta of skillMetas\">\r\n                      <poetry-our-skills [skillMeta] = \"skillMeta\" [skillsBarStart]='skillsBarStart'></poetry-our-skills>\r\n                  </div>\r\n  \r\n              </div>\r\n  \r\n              <div nz-col nzSm=\"24\" nzMd=\"8\"  >\r\n  \r\n                  <div class='choosed-common-style'>\r\n                      <div class='choosed-tit'>\r\n                          <div> 优美的 </div>\r\n                          <div class='sp2'> 诗词案例 </div>\r\n                      </div>\r\n                      <p> 诗词案例诗词案例 </p>\r\n                  </div>\r\n  \r\n                  <poetry-he-said></poetry-he-said>\r\n  \r\n              </div>\r\n  \r\n          </div>\r\n  \r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/presentation-us.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@media screen and (min-width: 768px) {\n  .why-sz-top {\n    height: 30%;\n    padding-top: 3%; }\n    .why-sz-top .why-tit {\n      font-size: 33px; }\n    .why-sz-top .why-det {\n      font-size: 15px; }\n    .why-sz-top .why-tit,\n    .why-sz-top .why-det {\n      width: 1200px;\n      padding: 0 15px;\n      margin-left: auto;\n      margin-right: auto; }\n  .why-sz-bottom {\n    width: 1200px;\n    margin: 0 auto;\n    padding-top: 30px;\n    height: 70%; }\n  .choosed-common-style .choosed-tit {\n    font-size: 24px; }\n    .choosed-common-style .choosed-tit .sp2 {\n      font-size: 29px; }\n  .choosed-common-style p {\n    font-size: 14px; } }\n@media screen and (max-width: 767px) {\n  .why-sz-top {\n    padding: 30px 20px; }\n    .why-sz-top .why-tit {\n      font-size: 20px; }\n    .why-sz-top .why-det {\n      font-size: 12px;\n      line-height: 1.6; }\n  .why-sz-bottom {\n    width: 100%;\n    padding: 0 10px; }\n  .choosed-common-style {\n    margin-top: 30px; }\n    .choosed-common-style .choosed-tit {\n      font-size: 16px; }\n      .choosed-common-style .choosed-tit .sp2 {\n        font-size: 18px; }\n    .choosed-common-style p {\n      font-size: 12px; } }\n.why-sz-top {\n  width: 100%;\n  background-image: url('presentatin_us.jpg');\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  text-align: center; }\n.why-sz-top .why-tit {\n    line-height: 1.1;\n    font-weight: 300;\n    color: #fff; }\n.why-sz-top .why-det {\n    color: rgba(255, 255, 255, 0.9);\n    margin-top: 30px;\n    margin-bottom: 30px;\n    line-height: 1.6;\n    font-weight: 300;\n    letter-spacing: 0.2px; }\n.why-sz-top .middle-btn-wrap {\n    margin: 0 auto;\n    width: 300px;\n    height: 35px; }\n.why-sz-top .middle-btn-wrap .more-btn,\n    .why-sz-top .middle-btn-wrap .buy-btn {\n      width: 115px;\n      height: 35px;\n      font-size: 14px;\n      border-radius: 5px;\n      color: #fff;\n      letter-spacing: 1px;\n      border-bottom: 3px solid rgba(0, 0, 0, 0.2);\n      display: inline-block;\n      cursor: pointer;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      transition: all .75s ease;\n      -moz-transition: all .75s ease;\n      -webkit-transition: all .75s ease;\n      -o-transition: all .75s ease; }\n.why-sz-top .middle-btn-wrap .more-btn {\n      border: 2px #fff solid;\n      margin-right: 10px;\n      line-height: 32px;\n      transition: color 0.28s ease; }\n.why-sz-top .middle-btn-wrap .more-btn:hover {\n        background: #fff;\n        color: #000;\n        transition: color 0.28s ease; }\n.why-sz-top .middle-btn-wrap .buy-btn {\n      line-height: 35px;\n      text-indent: 15px;\n      background: #f98805; }\n.why-sz-top .middle-btn-wrap .buy-btn:hover {\n        background: #0061ae;\n        color: #fff;\n        text-indent: 10px;\n        transition: all .75s ease;\n        -moz-transition: all .75s ease;\n        -webkit-transition: all .75s ease;\n        -o-transition: all .75s ease; }\n.why-sz-top .middle-btn-wrap .buy-btn .btn-arrows {\n        text-indent: 0px;\n        opacity: 0;\n        transition: all .75s ease;\n        -moz-transition: all .75s ease;\n        -webkit-transition: all .75s ease;\n        -o-transition: all .75s ease; }\n.why-sz-top .middle-btn-wrap .buy-btn:hover .btn-arrows {\n        color: #fff;\n        opacity: 1;\n        text-indent: 7px;\n        transition: all .75s ease;\n        -moz-transition: all .75s ease;\n        -webkit-transition: all .75s ease;\n        -o-transition: all .75s ease; }\n.choosed-common-style {\n  margin-bottom: 30px;\n  padding: 0 3px; }\n.choosed-common-style .choosed-tit {\n    line-height: 1.5;\n    color: #de4217; }\n.choosed-common-style .choosed-tit:after {\n      content: \"\";\n      margin: 6px 0 15px;\n      width: 69px;\n      height: 0;\n      display: block;\n      position: relative;\n      border-bottom: 4px solid; }\n.choosed-common-style .choosed-tit .sp2 {\n      font-weight: 800;\n      color: #363636;\n      letter-spacing: -1.5px; }\n.choosed-common-style p {\n    line-height: 1;\n    margin-top: -5px;\n    font-weight: 400;\n    color: #707070;\n    letter-spacing: -0.4px;\n    font-family: 'Montserrat','Roboto', Helvetica, Arial, sans-serif; }\n/* 为什么选择我们 */\n.why-choose-wrap {\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL3ByZXNlbnRhdGlvbi11cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL0U6XFxzZWxmLS0tLS0tLS0tLeWJjeerr+ebuOWFs1xcc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxccHJlc2VudGF0aW9uLXVzXFxwcmVzZW50YXRpb24tdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0k7SUFDSSxXQUFXO0lBQ1gsZUFBZSxFQUFBO0lBRm5CO01BS08sZUFBZSxFQUFBO0lBTHRCO01BUU8sZUFBZSxFQUFBO0lBUnRCOztNQVlRLGFBQWE7TUFDYixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBSzFCO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsV0FBVyxFQUFBO0VBRWY7SUFFUSxlQUFlLEVBQUE7SUFGdkI7TUFJWSxlQUFlLEVBQUE7RUFKM0I7SUFRUSxlQUFlLEVBQUEsRUFDbEI7QUFLVDtFQUNJO0lBQ0ksa0JBQWtCLEVBQUE7SUFEdEI7TUFHUSxlQUFlLEVBQUE7SUFIdkI7TUFNUSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFJekI7SUFDSyxXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBR25CO0lBQ0ksZ0JBQWdCLEVBQUE7SUFEcEI7TUFHUSxlQUFlLEVBQUE7TUFIdkI7UUFLWSxlQUFlLEVBQUE7SUFMM0I7TUFTUSxlQUFlLEVBQUEsRUFDbEI7QUFJVDtFQUNJLFdBQVc7RUFDWCwyQ0FBd0U7RUFDeEUsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixrQkFBa0IsRUFBQTtBQUx0QjtJQU9RLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0FBVG5CO0lBWVEsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUIsRUFBQTtBQWpCN0I7SUFxQlEsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZLEVBQUE7QUF2QnBCOztNQTBCWSxZQUFZO01BQ1osWUFBWTtNQUNaLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLG1CQUFtQjtNQUNuQiwyQ0FBdUM7TUFDdkMscUJBQXFCO01BQ3JCLGVBQWU7TUFDZix5QkFBaUI7U0FBakIsc0JBQWlCO1VBQWpCLHFCQUFpQjtjQUFqQixpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLDhCQUE4QjtNQUM5QixpQ0FBa0M7TUFDbEMsNEJBQTZCLEVBQUE7QUF2Q3pDO01BMENZLHNCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BSWpCLDRCQUE0QixFQUFBO0FBaER4QztRQWtEZ0IsZ0JBQWdCO1FBQ2hCLFdBQVU7UUFJViw0QkFBNEIsRUFBQTtBQXZENUM7TUEyRFksaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixtQkFBbUIsRUFBQTtBQTdEL0I7UUErRGdCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6Qiw4QkFBOEI7UUFDOUIsaUNBQWtDO1FBQ2xDLDRCQUE2QixFQUFBO0FBckU3QztRQXdFZ0IsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsOEJBQThCO1FBQzlCLGlDQUFrQztRQUNsQyw0QkFBNkIsRUFBQTtBQTdFN0M7UUFnRmdCLFdBQVc7UUFDWCxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6Qiw4QkFBOEI7UUFDOUIsaUNBQWtDO1FBQ2xDLDRCQUE2QixFQUFBO0FBVTdDO0VBQ0ksbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTtBQUZsQjtJQUlRLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7QUFMdEI7TUFPWSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxTQUFTO01BQ1QsY0FBYztNQUNkLGtCQUFrQjtNQUNsQix3QkFBd0IsRUFBQTtBQWJwQztNQWdCWSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLHNCQUFzQixFQUFBO0FBbEJsQztJQXNCUSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdFQUFnRSxFQUFBO0FBS3hFLFlBQUE7QUFDQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtY29udGVudC9wcmVzZW50YXRpb24tdXMvcHJlc2VudGF0aW9uLXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLndoeS1zei10b3Age1xuICAgIGhlaWdodDogMzAlO1xuICAgIHBhZGRpbmctdG9wOiAzJTsgfVxuICAgIC53aHktc3otdG9wIC53aHktdGl0IHtcbiAgICAgIGZvbnQtc2l6ZTogMzNweDsgfVxuICAgIC53aHktc3otdG9wIC53aHktZGV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDsgfVxuICAgIC53aHktc3otdG9wIC53aHktdGl0LFxuICAgIC53aHktc3otdG9wIC53aHktZGV0IHtcbiAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuICAud2h5LXN6LWJvdHRvbSB7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDcwJTsgfVxuICAuY2hvb3NlZC1jb21tb24tc3R5bGUgLmNob29zZWQtdGl0IHtcbiAgICBmb250LXNpemU6IDI0cHg7IH1cbiAgICAuY2hvb3NlZC1jb21tb24tc3R5bGUgLmNob29zZWQtdGl0IC5zcDIge1xuICAgICAgZm9udC1zaXplOiAyOXB4OyB9XG4gIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAud2h5LXN6LXRvcCB7XG4gICAgcGFkZGluZzogMzBweCAyMHB4OyB9XG4gICAgLndoeS1zei10b3AgLndoeS10aXQge1xuICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgLndoeS1zei10b3AgLndoeS1kZXQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjsgfVxuICAud2h5LXN6LWJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAxMHB4OyB9XG4gIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDsgfVxuICAgIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSAuY2hvb3NlZC10aXQge1xuICAgICAgZm9udC1zaXplOiAxNnB4OyB9XG4gICAgICAuY2hvb3NlZC1jb21tb24tc3R5bGUgLmNob29zZWQtdGl0IC5zcDIge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7IH1cbiAgICAuY2hvb3NlZC1jb21tb24tc3R5bGUgcCB7XG4gICAgICBmb250LXNpemU6IDEycHg7IH0gfVxuXG4ud2h5LXN6LXRvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ByZXNlbnRhdGluX3VzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAud2h5LXN6LXRvcCAud2h5LXRpdCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC53aHktc3otdG9wIC53aHktZGV0IHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4OyB9XG4gIC53aHktc3otdG9wIC5taWRkbGUtYnRuLXdyYXAge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7IH1cbiAgICAud2h5LXN6LXRvcCAubWlkZGxlLWJ0bi13cmFwIC5tb3JlLWJ0bixcbiAgICAud2h5LXN6LXRvcCAubWlkZGxlLWJ0bi13cmFwIC5idXktYnRuIHtcbiAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlOyB9XG4gICAgLndoeS1zei10b3AgLm1pZGRsZS1idG4td3JhcCAubW9yZS1idG4ge1xuICAgICAgYm9yZGVyOiAycHggI2ZmZiBzb2xpZDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xuICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMjhzIGVhc2U7IH1cbiAgICAgIC53aHktc3otdG9wIC5taWRkbGUtYnRuLXdyYXAgLm1vcmUtYnRuOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlOyB9XG4gICAgLndoeS1zei10b3AgLm1pZGRsZS1idG4td3JhcCAuYnV5LWJ0biB7XG4gICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgIHRleHQtaW5kZW50OiAxNXB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y5ODgwNTsgfVxuICAgICAgLndoeS1zei10b3AgLm1pZGRsZS1idG4td3JhcCAuYnV5LWJ0bjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDYxYWU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7IH1cbiAgICAgIC53aHktc3otdG9wIC5taWRkbGUtYnRuLXdyYXAgLmJ1eS1idG4gLmJ0bi1hcnJvd3Mge1xuICAgICAgICB0ZXh0LWluZGVudDogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTsgfVxuICAgICAgLndoeS1zei10b3AgLm1pZGRsZS1idG4td3JhcCAuYnV5LWJ0bjpob3ZlciAuYnRuLWFycm93cyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0ZXh0LWluZGVudDogN3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTsgfVxuXG4uY2hvb3NlZC1jb21tb24tc3R5bGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAwIDNweDsgfVxuICAuY2hvb3NlZC1jb21tb24tc3R5bGUgLmNob29zZWQtdGl0IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjZGU0MjE3OyB9XG4gICAgLmNob29zZWQtY29tbW9uLXN0eWxlIC5jaG9vc2VkLXRpdDphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgbWFyZ2luOiA2cHggMCAxNXB4O1xuICAgICAgd2lkdGg6IDY5cHg7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZDsgfVxuICAgIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSAuY2hvb3NlZC10aXQgLnNwMiB7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6ICMzNjM2MzY7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTEuNXB4OyB9XG4gIC5jaG9vc2VkLWNvbW1vbi1zdHlsZSBwIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XG5cbi8qIOS4uuS7gOS5iOmAieaLqeaIkeS7rCAqL1xuLndoeS1jaG9vc2Utd3JhcCB7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyB9XG4iLCJAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLndoeS1zei10b3Age1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgIFxyXG4gICAgICAgIC53aHktdGl0e1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndoeS1kZXR7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2h5LXRpdCxcclxuICAgICAgICAud2h5LWRldCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgLndoeS1zei1ib3R0b20ge1xyXG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcbiAgICAuY2hvb3NlZC1jb21tb24tc3R5bGV7XHJcbiAgICAgICAgLmNob29zZWQtdGl0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIC5zcDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAud2h5LXN6LXRvcCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgICAgIC53aHktdGl0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53aHktZGV0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIC53aHktc3otYm90dG9tIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNob29zZWQtY29tbW9uLXN0eWxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgLmNob29zZWQtdGl0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIC5zcDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLndoeS1zei10b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ByZXNlbnRhdGluX3VzLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAud2h5LXRpdHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAud2h5LWRldHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5taWRkbGUtYnRuLXdyYXB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAubW9yZS1idG4sXHJcbiAgICAgICAgLmJ1eS1idG57XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsMCwwLC4yKTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9yZS1idG57XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4I2ZmZiBzb2xpZDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDsgIFxyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246Y29sb3IgMC4yOHMgZWFzZTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246Y29sb3IgMC4yOHMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4yOHMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMjhzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjI4cyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXktYnRue1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDsgIFxyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ODgwNTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDYxYWU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLWFycm93c3tcclxuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiAgYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICY6aG92ZXIgLmJ0bi1hcnJvd3Mge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDdweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuXHJcbi5jaG9vc2VkLWNvbW1vbi1zdHlsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgIC5jaG9vc2VkLXRpdHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjZGU0MjE3O1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDAgMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDY5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3Aye1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzM2MzYzNjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xLjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLyog5Li65LuA5LmI6YCJ5oup5oiR5LusICovXHJcbi53aHktY2hvb3NlLXdyYXB7XHJcbiAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICBcclxufSBcclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/presentation-us.component.ts ***!
  \**************************************************************************************/
/*! exports provided: presentationUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presentationUsComponent", function() { return presentationUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var presentationUsComponent = /** @class */ (function () {
    function presentationUsComponent() {
        this.skillsBarStart = false;
        this.whyChooseUs = [
            {
                title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                default: 'true'
            },
            {
                title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
            },
            {
                title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
            },
            {
                title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
                detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
            },
        ];
        this.skillMetas = [
            {
                name: '唐诗',
                percentage: '40%',
                color: '#0061ea'
            },
            {
                name: '唐诗',
                percentage: '80%',
                color: '#5D9CEC'
            },
            {
                name: '唐诗',
                percentage: '95%',
                color: '#FC6E52'
            },
            {
                name: '唐诗',
                percentage: '99%',
                color: '#5D9CEC'
            },
            {
                name: '唐诗',
                percentage: '100%',
                color: '#AC92EC'
            },
            {
                name: '唐诗',
                percentage: '50%',
                color: '#656D78'
            }
        ];
    }
    /* 传递过来的是判断为 this ，指定被点击的组件，由此可判别是哪个组件的被点击了   */
    presentationUsComponent.prototype.getVal = function (val) {
        this.showDet = val;
    };
    presentationUsComponent.prototype.ngOnChanges = function () {
        if (this.whitchSatrt === 2) {
            this.skillsBarStart = true;
        }
    };
    presentationUsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], presentationUsComponent.prototype, "whitchSatrt", void 0);
    presentationUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-presentation-us',
            template: __webpack_require__(/*! ./presentation-us.component.html */ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.html"),
            styles: [__webpack_require__(/*! ./presentation-us.component.scss */ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], presentationUsComponent);
    return presentationUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='the-tit' (click)='clickTit()' [ngClass]=\"showDet ? 'click-tit' : 'default-tit'\">\r\n  <span>{{ reasons.title }}</span>\r\n  <div class='icon-common' [ngClass]=\"showDet ? 'click-tit-icon' : 'tit-icon'\" ></div>\r\n</div>\r\n<div class='the-det' [ngClass]=\"showDet ? 'show-det' : 'hide-det' \">\r\n  {{ reasons.detail }}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.the-tit {\n  min-height: 63px;\n  position: relative;\n  padding: 19px 38px 16px 22px;\n  font-size: 15px;\n  font-weight: bold;\n  line-height: 1.5;\n  margin-top: 6px;\n  cursor: pointer; }\n.the-tit .icon-common {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    right: 10px;\n    top: 19px;\n    left: auto; }\n.the-tit .tit-icon {\n    background: url('why_show_icon.png') no-repeat 0px 0px; }\n.the-tit .click-tit-icon {\n    background: url('why_show_icon.png') no-repeat 0px -70px; }\n.the-tit:hover {\n    background-color: #f5f5f5;\n    color: #e9573f; }\n.the-det {\n  padding: 0 24px 15px;\n  border: 5px solid #bdc3c7;\n  border-top: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n.default-tit {\n  color: #656f78;\n  border-bottom: none;\n  background-color: #ececec; }\n.click-tit {\n  color: #e9573f;\n  background: #fff !important;\n  border: 5px solid #bdc3c7;\n  border-bottom: none; }\n.show-det {\n  display: block;\n  -webkit-animation: fadeinT .5s ease-out backwards;\n  animation: fadeinT .5s ease-out backwards; }\n.hide-det {\n  display: none;\n  -webkit-animation: fadeOutB .5s ease-out backwards;\n  animation: fadeOutB .5s ease-out backwards; }\n/* 淡入-从上 */\n@-webkit-keyframes fadeinT {\n  0% {\n    -webkit-transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n@keyframes fadeinT {\n  0% {\n    -webkit-transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n/* 淡出-从上 */\n@-webkit-keyframes fadeOutB {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0); }\n  100% {\n    display: none;\n    opacity: 0;\n    -webkit-transform: translateY(-10px); } }\n@keyframes fadeOutB {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL3JlYXNvbnMvcmVhc29ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL3JlYXNvbnMvRTpcXHNlbGYtLS0tLS0tLS0t5YmN56uv55u45YWzXFxzY2hvb2xcXHBvZXRyaWVzL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1jb250ZW50XFxwcmVzZW50YXRpb24tdXNcXHJlYXNvbnNcXHJlYXNvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWUsRUFBQTtBQVJuQjtJQVVRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVSxFQUFBO0FBZmxCO0lBa0JRLHNEQUFzRixFQUFBO0FBbEI5RjtJQXFCUSx3REFBeUYsRUFBQTtBQXJCakc7SUF3QlEseUJBQXlCO0lBQ3pCLGNBQWMsRUFBQTtBQUd0QjtFQUNJLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTtBQUluQztFQUNJLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQW9DLEVBQUE7QUFFeEM7RUFDSSxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLGNBQWM7RUFDZCxpREFBaUQ7RUFHakQseUNBQXlDLEVBQUE7QUFFN0M7RUFDSSxhQUFhO0VBQ2Isa0RBQWtEO0VBR2xELDBDQUEwQyxFQUFBO0FBRTlDLFVBQUE7QUFDQTtFQUNJO0lBQUcsb0NBQW1DLEVBQUE7RUFDdEM7SUFBSyxnQ0FBK0IsRUFBQSxFQUFBO0FBVXhDO0VBQ0k7SUFBRyxvQ0FBbUMsRUFBQTtFQUN0QztJQUFLLGdDQUErQixFQUFBLEVBQUE7QUFHeEMsVUFBQTtBQUNBO0VBQ0k7SUFBRyxVQUFTO0lBQUMsZ0NBQStCLEVBQUE7RUFDNUM7SUFBSyxhQUFZO0lBQUMsVUFBUztJQUFDLG9DQUFtQyxFQUFBLEVBQUE7QUFVbkU7RUFDSTtJQUFHLFVBQVM7SUFBQyxnQ0FBK0IsRUFBQTtFQUM1QztJQUFLLFVBQVM7SUFBQyxvQ0FBbUMsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvcHJlc2VudGF0aW9uLXVzL3JlYXNvbnMvcmVhc29ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50aGUtdGl0IHtcbiAgbWluLWhlaWdodDogNjNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxOXB4IDM4cHggMTZweCAyMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAudGhlLXRpdCAuaWNvbi1jb21tb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxOXB4O1xuICAgIGxlZnQ6IGF1dG87IH1cbiAgLnRoZS10aXQgLnRpdC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3doeV9zaG93X2ljb24ucG5nXCIpIG5vLXJlcGVhdCAwcHggMHB4OyB9XG4gIC50aGUtdGl0IC5jbGljay10aXQtaWNvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93aHlfc2hvd19pY29uLnBuZ1wiKSBuby1yZXBlYXQgMHB4IC03MHB4OyB9XG4gIC50aGUtdGl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGNvbG9yOiAjZTk1NzNmOyB9XG5cbi50aGUtZGV0IHtcbiAgcGFkZGluZzogMCAyNHB4IDE1cHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNiZGMzYzc7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDsgfVxuXG4uZGVmYXVsdC10aXQge1xuICBjb2xvcjogIzY1NmY3ODtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYzsgfVxuXG4uY2xpY2stdGl0IHtcbiAgY29sb3I6ICNlOTU3M2Y7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2JkYzNjNztcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuXG4uc2hvdy1kZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpblQgLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpblQgLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogZmFkZWluVCAwLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgYW5pbWF0aW9uOiBmYWRlaW5UIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7IH1cblxuLmhpZGUtZGV0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXRCIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlT3V0QiAuNXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICAtbXMtYW5pbWF0aW9uOiBmYWRlT3V0QiAwLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgYW5pbWF0aW9uOiBmYWRlT3V0QiAuNXMgZWFzZS1vdXQgYmFja3dhcmRzOyB9XG5cbi8qIOa3oeWFpS3ku47kuIogKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW5UIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlaW5UIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIGZhZGVpblQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlaW5UIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbi8qIOa3oeWHui3ku47kuIogKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0QiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluVCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9IH1cblxuQC1tcy1rZXlmcmFtZXMgZmFkZWluVCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlT3V0QiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9IH1cbiIsIi50aGUtdGl0e1xyXG4gICAgbWluLWhlaWdodDogNjNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE5cHggMzhweCAxNnB4IDIycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuaWNvbi1jb21tb257XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB0b3A6IDE5cHg7XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgIH1cclxuICAgIC50aXQtaWNvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3doeV9zaG93X2ljb24ucG5nXCIpIG5vLXJlcGVhdCAwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrLXRpdC1pY29ue1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3doeV9zaG93X2ljb24ucG5nXCIpIG5vLXJlcGVhdCAwcHggLTcwcHg7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgY29sb3I6ICNlOTU3M2Y7XHJcbiAgICB9XHJcbn1cclxuLnRoZS1kZXR7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHggMTVweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNiZGMzYzc7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuXHJcbn1cclxuXHJcbi5kZWZhdWx0LXRpdHtcclxuICAgIGNvbG9yOiAjNjU2Zjc4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxufVxyXG4uY2xpY2stdGl0e1xyXG4gICAgY29sb3I6ICNlOTU3M2Y7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjYmRjM2M3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4uc2hvdy1kZXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5UIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluVCAuNXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZWluVC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGZhZGVpblQgLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxufVxyXG4uaGlkZS1kZXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXRCIC41cyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZU91dEIgLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tcy1hbmltYXRpb246IGZhZGVPdXRCLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIGFuaW1hdGlvbjogZmFkZU91dEIgLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxufVxyXG4vKiDmt6HlhaUt5LuO5LiKICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW5Ue1xyXG4gICAgMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7fVxyXG4gICAgMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO31cclxuICAgIDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO31cclxuICAgIDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlaW5Ue1xyXG4gICAgMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7fVxyXG4gICAgMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxufVxyXG5cclxuLyog5reh5Ye6LeS7juS4iiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEJ7XHJcbiAgICAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbiAgICAxMDAle2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlaW5Ue1xyXG4gICAgMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7fVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpblR7XHJcbiAgICAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbiAgICAxMDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlT3V0QntcclxuICAgIDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxuICAgIDEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO31cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonsComponent", function() { return ReasonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReasonsComponent = /** @class */ (function () {
    function ReasonsComponent() {
        this.sendVal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showDet = false;
    }
    ReasonsComponent.prototype.clickTit = function () {
        this.showDet = true;
        this.sendVal.emit(this);
    };
    ReasonsComponent.prototype.ngOnChanges = function () {
        this.formParentShowDet === this ? null : this.showDet = false;
    };
    ReasonsComponent.prototype.ngOnInit = function () {
        this.reasons.default ? this.showDet = true : null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ReasonsComponent.prototype, "sendVal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReasonsComponent.prototype, "formParentShowDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReasonsComponent.prototype, "reasons", void 0);
    ReasonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'poetry-reasons',
            template: __webpack_require__(/*! ./reasons.component.html */ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.html"),
            styles: [__webpack_require__(/*! ./reasons.component.scss */ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReasonsComponent);
    return ReasonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class='dot-change-bg'>\r\n  <li>\r\n      <span class='active-dot' #firDot (click)='changBg(0)'>1</span>\r\n  </li>\r\n  <li>\r\n      <span #secDot (click)='changBg(1)'>2</span>\r\n  </li>\r\n  <li>\r\n      <span #thiDot (click)='changBg(2)'>2</span>\r\n  </li>\r\n  <li >\r\n      <span #fouDot (click)='changBg(3)'>2</span>\r\n  </li>\r\n  \r\n</ul>"

/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot-change-bg {\n  position: absolute;\n  text-align: center;\n  z-index: 99; }\n  .dot-change-bg li {\n    width: 16px;\n    height: 16px;\n    border-radius: 16px;\n    margin: 0 0 0 10px;\n    display: inline-block;\n    z-index: 100; }\n  .dot-change-bg li span {\n      cursor: pointer;\n      text-indent: -9999px;\n      border-radius: 20px;\n      width: 100%;\n      height: 100%;\n      display: block;\n      border: 3px solid rgba(255, 255, 255, 0.3);\n      transition: border .5s;\n      -webkit-transition: border .5s;\n      -moz-transition: border .5s;\n      -ms-transition: border .5s; }\n  .dot-change-bg li span:hover {\n        border: 3px solid white;\n        transition: border .5s;\n        -webkit-transition: border .5s;\n        -moz-transition: border .5s;\n        -ms-transition: border .5s; }\n  .dot-change-bg li .active-dot {\n      background: #ECECEC; }\n  @media screen and (min-width: 768px) {\n  .dot-change-bg {\n    top: 95%;\n    left: 47%; } }\n  @media screen and (max-width: 767px) {\n  .dot-change-bg {\n    top: 86%;\n    left: 33%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvc2xpZGVzaG93L2NoYW5nZS1kb3QvRTpcXHNlbGYtLS0tLS0tLS0t5YmN56uv55u45YWzXFxzY2hvb2xcXHBvZXRyaWVzL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS1jb250ZW50XFxzbGlkZXNob3dcXGNoYW5nZS1kb3RcXGNoYW5nZS1kb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQUhmO0lBS1EsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZLEVBQUE7RUFWcEI7TUFZWSxlQUFlO01BQ2Ysb0JBQW9CO01BSXBCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsWUFBWTtNQUNaLGNBQWM7TUFDZCwwQ0FBc0M7TUFDdEMsc0JBQXNCO01BQ3RCLDhCQUE4QjtNQUM5QiwyQkFBMkI7TUFDM0IsMEJBQTBCLEVBQUE7RUF6QnRDO1FBMkJnQix1QkFBcUM7UUFDckMsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsMEJBQTBCLEVBQUE7RUEvQjFDO01BbUNZLG1CQUFtQixFQUFBO0VBTS9CO0VBQ0k7SUFDSSxRQUFRO0lBQ1IsU0FBUyxFQUFBLEVBQ1o7RUFHTDtFQUNJO0lBQ0ksUUFBUTtJQUNSLFNBQVMsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvc2xpZGVzaG93L2NoYW5nZS1kb3QvY2hhbmdlLWRvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOacgOW6leS4i+eahOaMiemSrlxyXG4uZG90LWNoYW5nZS1iZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgbGl7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4IDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAuNXM7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyIC41cztcclxuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGJvcmRlciAuNXM7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIC41cztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIC41cztcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyIC41cztcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3JkZXIgLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUtZG90e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmRvdC1jaGFuZ2UtYmd7XHJcbiAgICAgICAgdG9wOiA5NSU7XHJcbiAgICAgICAgbGVmdDogNDclO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLmRvdC1jaGFuZ2UtYmd7XHJcbiAgICAgICAgdG9wOiA4NiU7XHJcbiAgICAgICAgbGVmdDogMzMlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChangeDotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDotComponent", function() { return ChangeDotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * 下面的切换轮播图小点
 */

var ChangeDotComponent = /** @class */ (function () {
    function ChangeDotComponent(renderer2) {
        this.renderer2 = renderer2;
        this.sendIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChangeDotComponent.prototype.changBg = function (temp) {
        this.changeDotStyle(temp);
        this.sendIndex.emit(temp);
    };
    ChangeDotComponent.prototype.changeDotStyle = function (temp) {
        var _this = this;
        var domArray = [this.firDot, this.secDot, this.thiDot, this.fouDot];
        domArray.forEach(function (item, index) {
            if (temp === index) {
                _this.renderer2.addClass(item.nativeElement, "active-dot");
            }
            else {
                _this.renderer2.removeClass(item.nativeElement, "active-dot");
            }
        });
    };
    ChangeDotComponent.prototype.ngOnChanges = function () {
        this.changeDotStyle(this.currentIndex);
    };
    ChangeDotComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firDot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChangeDotComponent.prototype, "firDot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secDot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChangeDotComponent.prototype, "secDot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiDot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChangeDotComponent.prototype, "thiDot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouDot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChangeDotComponent.prototype, "fouDot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ChangeDotComponent.prototype, "currentIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChangeDotComponent.prototype, "sendIndex", void 0);
    ChangeDotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'change-dot',
            template: __webpack_require__(/*! ./change-dot.component.html */ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.html"),
            styles: [__webpack_require__(/*! ./change-dot.component.scss */ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ChangeDotComponent);
    return ChangeDotComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/slideshow.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/slideshow.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='slider-container'>\r\n  <div class='fir-slider default-left' #firSlider>\r\n      <div class='fir-tit' #firTit>诗意生活，从这里开始</div>\r\n      <div class='fir-detail' #firDet>以更加饱满的状态迎接黎明</div>\r\n      <ul class='fir-btn'>\r\n          <li  class='pick-li' #firBtn>了解更多<i class=\"anticon anticon-arrow-right btn-arrows\"></i></li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class='sec-slider' #secSlider>\r\n      <div class='fir-tit' #secTit>诗意生活，从你我做起</div>\r\n      <div class='fir-detail' #secDet>感受生活的美好，有趣灵动</div>\r\n      <ul class='fir-btn' >\r\n          <li class='pick-li' #secBtn>立即试用 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class='thi-slider' #thiSlider>\r\n      <div class='fir-tit' #thiTit>诗意生活，爱的伊始</div>\r\n      <div class='fir-detail' #thiDet>这里是美好的发源地，感动你我</div>\r\n      <ul class='fir-btn'>\r\n          <li class='pick-li' #thiBtn>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class='fou-slider' #fouSlider>\r\n      <div class='fir-tit' #fouTit>诗意生活，点燃你的情感</div>\r\n      <div class='fir-detail' #fouDet>感受世间的美好，拥抱未来</div>\r\n      <ul class='fir-btn'>\r\n          <li class='pick-li' #fouBtn>了解更多 <i class=\"anticon anticon-arrow-right btn-arrows\"></i> </li>\r\n      </ul>\r\n  </div>\r\n\r\n  <ul class='change-bg-btn'>\r\n      <li class='left-change-bg' (click)='reduce()'> </li>\r\n      <li class='right-change-bg' (click)='add()'> </li>\r\n  </ul>\r\n\r\n  <span class='dowmBtn' (click)='goDown()'></span>\r\n\r\n  <change-dot (sendIndex)=\"getIndex($event)\" [currentIndex]=\"index\"></change-dot>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/slideshow.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/slideshow.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@media screen and (min-width: 768px) {\n  .slider-container {\n    width: 100%;\n    height: 100%; } }\n@media screen and (max-width: 767px) {\n  .slider-container {\n    width: 100%;\n    height: 200px; }\n    .slider-container .dowmBtn {\n      display: none; }\n    .slider-container .fir-tit {\n      font-size: 20px;\n      top: 31%; }\n    .slider-container .fir-detail {\n      font-size: 12px;\n      top: 49%; }\n    .slider-container .fir-btn {\n      top: 64%; }\n      .slider-container .fir-btn li {\n        width: 80px;\n        height: 25px;\n        font-size: 10px;\n        text-indent: 0;\n        line-height: 25px;\n        text-align: center; }\n        .slider-container .fir-btn li i {\n          display: none; }\n    .slider-container .change-bg-btn .left-change-bg {\n      left: 3%; }\n    .slider-container .change-bg-btn .right-change-bg {\n      right: 3%; } }\n.slider-container {\n  position: relative;\n  overflow: hidden;\n  /* 轮播图的进来和离开 开始 */\n  /* 轮播图的进来和离开 结束 */\n  /* 左右两个切换按钮 开始*/\n  /* 左右两个切换按钮 结束*/ }\n.slider-container > div {\n    color: #fff;\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background-size: 100% 100%;\n    z-index: 1; }\n.slider-container .default-left {\n    left: 0; }\n.slider-container .next-in {\n    -webkit-animation: nexfIn .5s ease forwards;\n    animation: nexfIn .5s ease forwards;\n    z-index: 9; }\n.slider-container .next-leave {\n    -webkit-animation: nextLeave .5s ease forwards;\n    animation: nextLeave .5s ease forwards; }\n.slider-container .front-in {\n    -webkit-animation: frontIn .5s ease forwards;\n    animation: frontIn .5s ease forwards;\n    z-index: 9; }\n.slider-container .front-leave {\n    -webkit-animation: frontLeave .5s ease forwards;\n    animation: frontLeave .5s ease forwards; }\n.slider-container:hover .change-bg-btn li {\n    opacity: 0.7; }\n.slider-container:hover .change-bg-btn li:hover {\n      opacity: 1; }\n.slider-container .change-bg-btn li {\n    width: 31px;\n    height: 31px;\n    position: absolute;\n    top: 48%;\n    z-index: 99;\n    background-size: 15px 15px !important;\n    opacity: 0;\n    cursor: pointer; }\n.slider-container .left-change-bg {\n    left: 50px;\n    background: url('dot_pre.png') no-repeat; }\n.slider-container .right-change-bg {\n    right: 50px;\n    background: url('dot_next.png') no-repeat; }\n/* 向下按钮 */\n.dowmBtn {\n  background: transparent url('dot_down.png') center 9px no-repeat;\n  background-size: 14px 14px !important;\n  border: 3px solid white;\n  border-radius: 36px;\n  height: 36px;\n  width: 36px;\n  position: absolute;\n  bottom: 200px;\n  z-index: 99;\n  display: block;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  text-align: left !important;\n  cursor: pointer; }\n/* 每个部分公共样式开始 */\n.fir-tit {\n  width: 100%;\n  font-size: 64px;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  position: absolute;\n  top: 34%;\n  opacity: 0; }\n.fir-detail {\n  width: 100%;\n  font-size: 28px;\n  line-height: 1.3em;\n  text-align: center;\n  position: absolute;\n  top: 46%;\n  opacity: 0; }\n.fir-btn {\n  width: 100%;\n  color: #fff;\n  position: absolute;\n  top: 57%; }\n.fir-btn li {\n    width: 146px;\n    height: 48px;\n    font-size: 15px;\n    letter-spacing: 3px;\n    line-height: 48px;\n    text-indent: 40px;\n    border-radius: 5px;\n    color: #fff;\n    background: #f98805;\n    margin: 0 auto;\n    border-bottom: 3px solid rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: all .75s ease;\n    -moz-transition: all .75s ease;\n    -webkit-transition: all .75s ease;\n    -o-transition: all .75s ease; }\n.fir-btn li:hover {\n      background: #0061ae;\n      text-indent: 30px;\n      transition: all .75s ease;\n      -moz-transition: all .75s ease;\n      -webkit-transition: all .75s ease;\n      -o-transition: all .75s ease; }\n.pick-li {\n  opacity: 0; }\n.pick-li .btn-arrows {\n    text-indent: 0px;\n    opacity: 0;\n    transition: all .75s ease;\n    -moz-transition: all .75s ease;\n    -webkit-transition: all .75s ease;\n    -o-transition: all .75s ease; }\n.pick-li:hover .btn-arrows {\n    opacity: 1;\n    text-indent: 7px;\n    transition: all .75s ease;\n    -moz-transition: all .75s ease;\n    -webkit-transition: all .75s ease;\n    -o-transition: all .75s ease; }\n/* 每个部分公共样式结束 */\n/* 轮播图的动画开始 */\n/* 下一个动画 进来 */\n@-webkit-keyframes nexfIn {\n  0% {\n    left: -100%; }\n  100% {\n    left: 0; } }\n@keyframes nexfIn {\n  0% {\n    left: -100%; }\n  100% {\n    left: 0; } }\n/* 下一个动画 离开 */\n@-webkit-keyframes nextLeave {\n  0% {\n    left: 0; }\n  100% {\n    left: 100%; } }\n@keyframes nextLeave {\n  0% {\n    left: 0; }\n  100% {\n    left: 100%; } }\n/* 上一个动画 进来 */\n@-webkit-keyframes frontIn {\n  0% {\n    left: 100%; }\n  100% {\n    left: 0; } }\n@keyframes frontIn {\n  0% {\n    left: 100%; }\n  100% {\n    left: 0; } }\n/* 上一个动画 离开 */\n@-webkit-keyframes frontLeave {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n@keyframes frontLeave {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n/* 轮播图的动画结束 */\n/* 轮播图背景 */\n.fir-slider {\n  background: url('8.jpg'); }\n.sec-slider {\n  background: url('4.jpg'); }\n.thi-slider {\n  background: url('6.jpg'); }\n.fou-slider {\n  background: url('7.jpg'); }\n/* 弹入-从下 */\n.a-bounceinB {\n  -webkit-animation: bounceinB 1s ease-in forwards;\n  animation: bounceinB 1s ease-in  forwards;\n  opacity: 1; }\n/* 淡入-从上 */\n.a-fadeinT {\n  -webkit-animation: fadeinT 1s ease-out backwards;\n  animation: fadeinT 1s ease-out backwards;\n  opacity: 1; }\n/* 淡入-从左 */\n.a-fadeinL {\n  -webkit-animation: fadeinL 1s ease-out backwards;\n  animation: fadeinL 1s ease-out backwards;\n  opacity: 1; }\n/* 翻入-X轴 */\n.a-flipinX {\n  -webkit-animation: flipinX 1s ease-out backwards;\n  animation: flipinX 1s ease-out backwards;\n  opacity: 1; }\n/* 转入-从左下 */\n.a-rotateinLB {\n  -webkit-animation: rotateinLB 1s ease-out backwards;\n  animation: rotateinLB 1s ease-out backwards;\n  opacity: 1; }\n/* 弹入-从左 */\n.a-bounceinL {\n  -webkit-animation: bounceinL 1s ease-out backwards;\n  animation: bounceinL 1s ease-out backwards;\n  opacity: 1; }\n/* 震颤 */\n.a-shake {\n  -webkit-animation: shake 1s ease;\n  animation: shake 1s ease;\n  opacity: 1; }\n/* 弹入-从下 */\n@-webkit-keyframes bounceinB {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n@keyframes bounceinB {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n/* 淡入-从上 */\n@-webkit-keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n@keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n/* 翻入-X轴 */\n@-webkit-keyframes flipinX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg); }\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg); }\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0);\n    opacity: 1; } }\n@keyframes flipinX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n            transform: perspective(400px) rotateX(90deg);\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n            transform: perspective(400px) rotateX(-10deg); }\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n            transform: perspective(400px) rotateX(10deg); }\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0);\n            transform: perspective(400px) rotateX(0);\n    opacity: 1; } }\n/* 转入-从左下 */\n@-webkit-keyframes rotateinLB {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    opacity: 1; } }\n@keyframes rotateinLB {\n  0% {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    opacity: 1; } }\n/* 弹入-从左 */\n@-webkit-keyframes bounceinL {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px); }\n  80% {\n    -webkit-transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0); } }\n@keyframes bounceinL {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n            transform: translateX(30px); }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n/* 弹入-从下 */\n@-webkit-keyframes bounceinB {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  80% {\n    -webkit-transform: translateY(0px); }\n  100% {\n    -webkit-transform: translateY(0); } }\n@keyframes bounceinB {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(0px); }\n  80% {\n    -webkit-transform: translateY(0px); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n/* 震颤 */\n@-webkit-keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px); } }\n@keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); } }\n/* 淡入-从左 */\n@-webkit-keyframes fadeinL {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0); } }\n@keyframes fadeinL {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvc2xpZGVzaG93L3NsaWRlc2hvdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLWNvbnRlbnQvc2xpZGVzaG93L0U6XFxzZWxmLS0tLS0tLS0tLeWJjeerr+ebuOWFs1xcc2Nob29sXFxwb2V0cmllcy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtY29udGVudFxcc2xpZGVzaG93XFxzbGlkZXNob3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0k7SUFDSSxXQUFXO0lBQ1gsWUFBWSxFQUFBLEVBQ2Y7QUFHTDtFQUNJO0lBQ0ksV0FBVztJQUNYLGFBQWEsRUFBQTtJQUZqQjtNQUlRLGFBQWEsRUFBQTtJQUpyQjtNQU9RLGVBQWU7TUFDZixRQUFRLEVBQUE7SUFSaEI7TUFXUSxlQUFlO01BQ2YsUUFBUSxFQUFBO0lBWmhCO01BZVEsUUFBUSxFQUFBO01BZmhCO1FBaUJZLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7UUF0QjlCO1VBd0JnQixhQUFhLEVBQUE7SUF4QjdCO01BOEJZLFFBQVEsRUFBQTtJQTlCcEI7TUFpQ1ksU0FBUyxFQUFBLEVBQ1o7QUFNYjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFnQmhCLGlCQUFBO0VBOEJBLGlCQUFBO0VBRUEsZUFBQTtFQXlCQSxlQUFBLEVBQUE7QUEzRUo7SUFJUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFFMUIsVUFBVSxFQUFBO0FBWmxCO0lBZVEsT0FBTyxFQUFBO0FBZmY7SUFvQlEsMkNBQTJDO0lBRzNDLG1DQUFtQztJQUNuQyxVQUFVLEVBQUE7QUF4QmxCO0lBNEJRLDhDQUE4QztJQUc5QyxzQ0FBc0MsRUFBQTtBQS9COUM7SUFtQ1EsNENBQTRDO0lBRzVDLG9DQUFvQztJQUNwQyxVQUFVLEVBQUE7QUF2Q2xCO0lBMkNRLCtDQUErQztJQUcvQyx1Q0FBdUMsRUFBQTtBQTlDL0M7SUFvRFEsWUFBWSxFQUFBO0FBcERwQjtNQXNEWSxVQUFVLEVBQUE7QUF0RHRCO0lBMERRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixlQUFlLEVBQUE7QUFqRXZCO0lBb0VRLFVBQVU7SUFDVix3Q0FBNkUsRUFBQTtBQXJFckY7SUF3RVEsV0FBVztJQUNYLHlDQUE4RSxFQUFBO0FBUXRGLFNBQUE7QUFDQTtFQUNJLGdFQUFxRztFQUNyRyxxQ0FBcUM7RUFDckMsdUJBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsZUFBZSxFQUFBO0FBR25CLGVBQUE7QUFDQTtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBR2YsdUNBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVUsRUFBQTtBQUVkO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFHbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVSxFQUFBO0FBRWQ7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7QUFKWjtJQU1RLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCwyQ0FBdUM7SUFDdkMsZUFBZTtJQUNmLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGlDQUFrQztJQUNsQyw0QkFBNkIsRUFBQTtBQXRCckM7TUF3QlksbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsOEJBQThCO01BQzlCLGlDQUFrQztNQUNsQyw0QkFBNkIsRUFBQTtBQUt6QztFQUNJLFVBQVUsRUFBQTtBQURkO0lBR1EsZ0JBQWU7SUFDZixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBa0M7SUFDbEMsNEJBQTZCLEVBQUE7QUFSckM7SUFXUSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWtDO0lBQ2xDLDRCQUE2QixFQUFBO0FBS3JDLGVBQUE7QUFHQSxhQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0k7SUFDSSxXQUFXLEVBQUE7RUFLZjtJQUNJLE9BQU8sRUFBQSxFQUFBO0FBUmY7RUFDSTtJQUNJLFdBQVcsRUFBQTtFQUtmO0lBQ0ksT0FBTyxFQUFBLEVBQUE7QUFHZixhQUFBO0FBQ0E7RUFDSTtJQUNJLE9BQU8sRUFBQTtFQUVYO0lBQ0ksVUFBVSxFQUFBLEVBQUE7QUFMbEI7RUFDSTtJQUNJLE9BQU8sRUFBQTtFQUVYO0lBQ0ksVUFBVSxFQUFBLEVBQUE7QUFHbEIsYUFBQTtBQUNBO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLE9BQU8sRUFBQSxFQUFBO0FBTGY7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksT0FBTyxFQUFBLEVBQUE7QUFHZixhQUFBO0FBQ0E7RUFDSTtJQUNJLE9BQU8sRUFBQTtFQUVYO0lBQ0ksV0FBVyxFQUFBLEVBQUE7QUFMbkI7RUFDSTtJQUNJLE9BQU8sRUFBQTtFQUVYO0lBQ0ksV0FBVyxFQUFBLEVBQUE7QUFHbkIsYUFBQTtBQUVBLFVBQUE7QUFDQTtFQUNJLHdCQUE2RCxFQUFBO0FBRWpFO0VBQ0ksd0JBQTZELEVBQUE7QUFFakU7RUFDSSx3QkFBNkQsRUFBQTtBQUVqRTtFQUNJLHdCQUE2RCxFQUFBO0FBR2pFLFVBQUE7QUFDQTtFQUNJLGdEQUFnRDtFQUdoRCx5Q0FBeUM7RUFDekMsVUFBVSxFQUFBO0FBRWQsVUFBQTtBQUNBO0VBQ0ksZ0RBQWdEO0VBR2hELHdDQUF3QztFQUN4QyxVQUFVLEVBQUE7QUFHZCxVQUFBO0FBQ0E7RUFDSSxnREFBZ0Q7RUFHaEQsd0NBQXdDO0VBQ3hDLFVBQVUsRUFBQTtBQUdkLFVBQUE7QUFDQTtFQUNJLGdEQUErQztFQUcvQyx3Q0FBdUM7RUFDdkMsVUFBVSxFQUFBO0FBR2QsV0FBQTtBQUNBO0VBQ0ksbURBQWtEO0VBR2xELDJDQUEwQztFQUMxQyxVQUFVLEVBQUE7QUFHZCxVQUFBO0FBQ0E7RUFDSSxrREFBaUQ7RUFHakQsMENBQXlDO0VBQ3pDLFVBQVUsRUFBQTtBQUdkLE9BQUE7QUFDQTtFQUNJLGdDQUFnQztFQUdoQyx3QkFBd0I7RUFDeEIsVUFBVSxFQUFBO0FBR2QsVUFBQTtBQUNBO0VBQ0k7SUFBRyxVQUFTO0lBQUMsb0NBQW1DLEVBQUE7RUFDaEQ7SUFBSyxVQUFTO0lBQUMsZ0NBQStCLEVBQUEsRUFBQTtBQVVsRDtFQUNJO0lBQUcsVUFBUztJQUFDLG9DQUFtQyxFQUFBO0VBQ2hEO0lBQUssVUFBUztJQUFDLGdDQUErQixFQUFBLEVBQUE7QUFJbEQsVUFBQTtBQUNBO0VBQ0k7SUFBRyxVQUFTO0lBQUMscUNBQW9DLEVBQUE7RUFDakQ7SUFBSyxVQUFTO0lBQUMsZ0NBQStCLEVBQUEsRUFBQTtBQVVsRDtFQUNJO0lBQUcsVUFBUztJQUFDLHFDQUE0QjtZQUE1Qiw2QkFBNEIsRUFBQTtFQUN6QztJQUFLLFVBQVM7SUFBQyxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUEsRUFBQTtBQUkxQyxVQUFBO0FBQ0E7RUFDSTtJQUFHLG9EQUFtRDtJQUFDLFVBQVMsRUFBQTtFQUNoRTtJQUFJLHFEQUFvRCxFQUFBO0VBQ3hEO0lBQUksb0RBQW1ELEVBQUE7RUFDdkQ7SUFBSyxnREFBK0M7SUFBQyxVQUFTLEVBQUEsRUFBQTtBQWNsRTtFQUNJO0lBQUcsb0RBQTJDO1lBQTNDLDRDQUEyQztJQUFDLFVBQVMsRUFBQTtFQUN4RDtJQUFJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUNoRDtJQUFJLG9EQUEyQztZQUEzQyw0Q0FBMkMsRUFBQTtFQUMvQztJQUFLLGdEQUF1QztZQUF2Qyx3Q0FBdUM7SUFBQyxVQUFTLEVBQUEsRUFBQTtBQUkxRCxXQUFBO0FBQ0E7RUFDSTtJQUFHLHFDQUFvQztJQUFDLGdDQUErQjtJQUFDLFVBQVMsRUFBQTtFQUNqRjtJQUFLLHFDQUFvQztJQUFDLDRCQUEyQjtJQUFDLFVBQVMsRUFBQSxFQUFBO0FBVW5GO0VBQ0k7SUFBRyxxQ0FBNEI7WUFBNUIsNkJBQTRCO0lBQUMsZ0NBQXVCO1lBQXZCLHdCQUF1QjtJQUFDLFVBQVMsRUFBQTtFQUNqRTtJQUFLLHFDQUE0QjtZQUE1Qiw2QkFBNEI7SUFBQyw0QkFBbUI7WUFBbkIsb0JBQW1CO0lBQUMsVUFBUyxFQUFBLEVBQUE7QUFHbkUsVUFBQTtBQUNBO0VBQ0k7SUFBRyxVQUFTO0lBQUMscUNBQW9DLEVBQUE7RUFDakQ7SUFBSSxVQUFTO0lBQUMsbUNBQWtDLEVBQUE7RUFDaEQ7SUFBSSxvQ0FBbUMsRUFBQTtFQUN2QztJQUFLLGdDQUErQixFQUFBLEVBQUE7QUFjeEM7RUFDSTtJQUFHLFVBQVM7SUFBQyxxQ0FBNEI7WUFBNUIsNkJBQTRCLEVBQUE7RUFDekM7SUFBSSxVQUFTO0lBQUMsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUFBO0VBQ3hDO0lBQUksb0NBQTJCO1lBQTNCLDRCQUEyQixFQUFBO0VBQy9CO0lBQUssZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBLEVBQUE7QUFHaEMsVUFBQTtBQUNBO0VBQ0k7SUFBRyxVQUFTO0lBQUMsb0NBQW1DLEVBQUE7RUFDaEQ7SUFBSSxVQUFTO0lBQUMsa0NBQWlDLEVBQUE7RUFDL0M7SUFBSSxrQ0FBaUMsRUFBQTtFQUNyQztJQUFLLGdDQUErQixFQUFBLEVBQUE7QUFnQnhDO0VBQ0k7SUFBRyxVQUFTO0lBQUMsb0NBQTJCO1lBQTNCLDRCQUEyQixFQUFBO0VBQ3hDO0lBQUksVUFBUztJQUFDLGtDQUFpQyxFQUFBO0VBQy9DO0lBQUksa0NBQWlDLEVBQUE7RUFDckM7SUFBSyxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUEsRUFBQTtBQUloQyxPQUFBO0FBQ0E7RUFDSTtJQUFRLGdDQUErQixFQUFBO0VBQ3ZDO0lBQW9CLG9DQUFtQyxFQUFBO0VBQ3ZEO0lBQWdCLG1DQUFrQyxFQUFBLEVBQUE7QUFZdEQ7RUFDSTtJQUFRLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUMvQjtJQUFvQixvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQUE7RUFDL0M7SUFBZ0IsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUFBLEVBQUE7QUFHOUMsVUFBQTtBQUNBO0VBQ0k7SUFBRyxVQUFTO0lBQUMscUNBQW9DLEVBQUE7RUFDakQ7SUFBSyxVQUFTO0lBQUMsZ0NBQStCLEVBQUEsRUFBQTtBQVVsRDtFQUNJO0lBQUcsVUFBUztJQUFDLHFDQUE0QjtZQUE1Qiw2QkFBNEIsRUFBQTtFQUN6QztJQUFLLFVBQVM7SUFBQyxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1jb250ZW50L3NsaWRlc2hvdy9zbGlkZXNob3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNsaWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7IH1cbiAgICAuc2xpZGVyLWNvbnRhaW5lciAuZG93bUJ0biB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLnNsaWRlci1jb250YWluZXIgLmZpci10aXQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgdG9wOiAzMSU7IH1cbiAgICAuc2xpZGVyLWNvbnRhaW5lciAuZmlyLWRldGFpbCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0b3A6IDQ5JTsgfVxuICAgIC5zbGlkZXItY29udGFpbmVyIC5maXItYnRuIHtcbiAgICAgIHRvcDogNjQlOyB9XG4gICAgICAuc2xpZGVyLWNvbnRhaW5lciAuZmlyLWJ0biBsaSB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgICAgLnNsaWRlci1jb250YWluZXIgLmZpci1idG4gbGkgaSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5zbGlkZXItY29udGFpbmVyIC5jaGFuZ2UtYmctYnRuIC5sZWZ0LWNoYW5nZS1iZyB7XG4gICAgICBsZWZ0OiAzJTsgfVxuICAgIC5zbGlkZXItY29udGFpbmVyIC5jaGFuZ2UtYmctYnRuIC5yaWdodC1jaGFuZ2UtYmcge1xuICAgICAgcmlnaHQ6IDMlOyB9IH1cblxuLnNsaWRlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIOi9ruaSreWbvueahOi/m+adpeWSjOemu+W8gCDlvIDlp4sgKi9cbiAgLyog6L2u5pKt5Zu+55qE6L+b5p2l5ZKM56a75byAIOe7k+adnyAqL1xuICAvKiDlt6blj7PkuKTkuKrliIfmjaLmjInpkq4g5byA5aeLKi9cbiAgLyog5bem5Y+z5Lik5Liq5YiH5o2i5oyJ6ZKuIOe7k+adnyovIH1cbiAgLnNsaWRlci1jb250YWluZXIgPiBkaXYge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHotaW5kZXg6IDE7IH1cbiAgLnNsaWRlci1jb250YWluZXIgLmRlZmF1bHQtbGVmdCB7XG4gICAgbGVmdDogMDsgfVxuICAuc2xpZGVyLWNvbnRhaW5lciAubmV4dC1pbiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5leGZJbiAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogbmV4ZkluIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIC1tcy1hbmltYXRpb246IG5leGZJbiAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IG5leGZJbiAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5zbGlkZXItY29udGFpbmVyIC5uZXh0LWxlYXZlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbmV4dExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBuZXh0TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgLW1zLWFuaW1hdGlvbjogbmV4dExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogbmV4dExlYXZlIC41cyBlYXNlIGZvcndhcmRzOyB9XG4gIC5zbGlkZXItY29udGFpbmVyIC5mcm9udC1pbiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZyb250SW4gLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IGZyb250SW4gLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgLW1zLWFuaW1hdGlvbjogZnJvbnRJbiAuNXMgZWFzZSBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGZyb250SW4gLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgei1pbmRleDogOTsgfVxuICAuc2xpZGVyLWNvbnRhaW5lciAuZnJvbnQtbGVhdmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmcm9udExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmcm9udExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xuICAgIC1tcy1hbmltYXRpb246IGZyb250TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBmcm9udExlYXZlIC41cyBlYXNlIGZvcndhcmRzOyB9XG4gIC5zbGlkZXItY29udGFpbmVyOmhvdmVyIC5jaGFuZ2UtYmctYnRuIGxpIHtcbiAgICBvcGFjaXR5OiAwLjc7IH1cbiAgICAuc2xpZGVyLWNvbnRhaW5lcjpob3ZlciAuY2hhbmdlLWJnLWJ0biBsaTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxOyB9XG4gIC5zbGlkZXItY29udGFpbmVyIC5jaGFuZ2UtYmctYnRuIGxpIHtcbiAgICB3aWR0aDogMzFweDtcbiAgICBoZWlnaHQ6IDMxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDglO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLnNsaWRlci1jb250YWluZXIgLmxlZnQtY2hhbmdlLWJnIHtcbiAgICBsZWZ0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVycy9kb3RfcHJlLnBuZ1wiKSBuby1yZXBlYXQ7IH1cbiAgLnNsaWRlci1jb250YWluZXIgLnJpZ2h0LWNoYW5nZS1iZyB7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzL2RvdF9uZXh0LnBuZ1wiKSBuby1yZXBlYXQ7IH1cblxuLyog5ZCR5LiL5oyJ6ZKuICovXG4uZG93bUJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVycy9kb3RfZG93bi5wbmdcIikgY2VudGVyIDlweCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTRweCAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjAwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4vKiDmr4/kuKrpg6jliIblhazlhbHmoLflvI/lvIDlp4sgKi9cbi5maXItdGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNCU7XG4gIG9wYWNpdHk6IDA7IH1cblxuLmZpci1kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2JTtcbiAgb3BhY2l0eTogMDsgfVxuXG4uZmlyLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU3JTsgfVxuICAuZmlyLWJ0biBsaSB7XG4gICAgd2lkdGg6IDE0NnB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICB0ZXh0LWluZGVudDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI2Y5ODgwNTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTsgfVxuICAgIC5maXItYnRuIGxpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDYxYWU7XG4gICAgICB0ZXh0LWluZGVudDogMzBweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlOyB9XG5cbi5waWNrLWxpIHtcbiAgb3BhY2l0eTogMDsgfVxuICAucGljay1saSAuYnRuLWFycm93cyB7XG4gICAgdGV4dC1pbmRlbnQ6IDBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlOyB9XG4gIC5waWNrLWxpOmhvdmVyIC5idG4tYXJyb3dzIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtaW5kZW50OiA3cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7IH1cblxuLyog5q+P5Liq6YOo5YiG5YWs5YWx5qC35byP57uT5p2fICovXG4vKiDova7mkq3lm77nmoTliqjnlLvlvIDlp4sgKi9cbi8qIOS4i+S4gOS4quWKqOeUuyDov5vmnaUgKi9cbkBrZXlmcmFtZXMgbmV4ZkluIHtcbiAgMCUge1xuICAgIGxlZnQ6IC0xMDAlOyB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7IH0gfVxuXG4vKiDkuIvkuIDkuKrliqjnlLsg56a75byAICovXG5Aa2V5ZnJhbWVzIG5leHRMZWF2ZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwOyB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7IH0gfVxuXG4vKiDkuIrkuIDkuKrliqjnlLsg6L+b5p2lICovXG5Aa2V5ZnJhbWVzIGZyb250SW4ge1xuICAwJSB7XG4gICAgbGVmdDogMTAwJTsgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAwOyB9IH1cblxuLyog5LiK5LiA5Liq5Yqo55S7IOemu+W8gCAqL1xuQGtleWZyYW1lcyBmcm9udExlYXZlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7IH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTEwMCU7IH0gfVxuXG4vKiDova7mkq3lm77nmoTliqjnlLvnu5PmnZ8gKi9cbi8qIOi9ruaSreWbvuiDjOaZryAqL1xuLmZpci1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvOC5qcGdcIik7IH1cblxuLnNlYy1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvNC5qcGdcIik7IH1cblxuLnRoaS1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvNi5qcGdcIik7IH1cblxuLmZvdS1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvNy5qcGdcIik7IH1cblxuLyog5by55YWlLeS7juS4iyAqL1xuLmEtYm91bmNlaW5CIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZWluQiAxcyBlYXNlLWluIGZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogYm91bmNlaW5CIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IGJvdW5jZWluQiAxcyBlYXNlLWluIGZvcndhcmRzO1xuICBhbmltYXRpb246IGJvdW5jZWluQiAxcyBlYXNlLWluICBmb3J3YXJkcztcbiAgb3BhY2l0eTogMTsgfVxuXG4vKiDmt6HlhaUt5LuO5LiKICovXG4uYS1mYWRlaW5UIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpblQgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluVCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IGZhZGVpblQgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICBhbmltYXRpb246IGZhZGVpblQgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICBvcGFjaXR5OiAxOyB9XG5cbi8qIOa3oeWFpS3ku47lt6YgKi9cbi5hLWZhZGVpbkwge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogZmFkZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogZmFkZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIG9wYWNpdHk6IDE7IH1cblxuLyog57+75YWlLVjovbQgKi9cbi5hLWZsaXBpblgge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmxpcGluWCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmbGlwaW5YIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogZmxpcGluWCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogZmxpcGluWCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIG9wYWNpdHk6IDE7IH1cblxuLyog6L2s5YWlLeS7juW3puS4iyAqL1xuLmEtcm90YXRlaW5MQiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVpbkxCIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1vei1hbmltYXRpb246IHJvdGF0ZWluTEIgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICAtbXMtYW5pbWF0aW9uOiByb3RhdGVpbkxCIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgYW5pbWF0aW9uOiByb3RhdGVpbkxCIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgb3BhY2l0eTogMTsgfVxuXG4vKiDlvLnlhaUt5LuO5bemICovXG4uYS1ib3VuY2Vpbkwge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYm91bmNlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGJvdW5jZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IGJvdW5jZWluTCAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogYm91bmNlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcbiAgb3BhY2l0eTogMTsgfVxuXG4vKiDpnIfpoqQgKi9cbi5hLXNoYWtlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNoYWtlIDFzIGVhc2U7XG4gIC1tb3otYW5pbWF0aW9uOiBzaGFrZSAxcyBlYXNlO1xuICAtbXMtYW5pbWF0aW9uOiBzaGFrZSAxcyBlYXNlO1xuICBhbmltYXRpb246IHNoYWtlIDFzIGVhc2U7XG4gIG9wYWNpdHk6IDE7IH1cblxuLyog5by55YWlLeS7juS4iyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZWluQiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIGJvdW5jZWluQiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQC1tcy1rZXlmcmFtZXMgYm91bmNlaW5CIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZWluQiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuLyog5reh5YWlLeS7juS4iiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpblQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluVCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIGZhZGVpblQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlaW5UIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG4vKiDnv7vlhaUtWOi9tCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBpblgge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0xMGRlZyk7IH1cbiAgNzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIGZsaXBpblgge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0xMGRlZyk7IH1cbiAgNzAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpOyB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuQC1tcy1rZXlmcmFtZXMgZmxpcGluWCB7XG4gIDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICA0MCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0xMGRlZyk7IH1cbiAgNzAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgZmxpcGluWCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpOyB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLyog6L2s5YWlLeS7juW3puS4iyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZWluTEIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0ZWluTEIge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuQC1tcy1rZXlmcmFtZXMgcm90YXRlaW5MQiB7XG4gIDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgcm90YXRlaW5MQiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLyog5by55YWlLeS7juW3piAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZWluTCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7IH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpOyB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIGJvdW5jZWluTCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7IH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpOyB9XG4gIDgwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cblxuQC1tcy1rZXlmcmFtZXMgYm91bmNlaW5MIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpOyB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpOyB9XG4gIDgwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7IH1cbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XG5cbkBrZXlmcmFtZXMgYm91bmNlaW5MIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7IH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTsgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cblxuLyog5by55YWlLeS7juS4iyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZWluQiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgYm91bmNlaW5CIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpOyB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkAtbXMta2V5ZnJhbWVzIGJvdW5jZWluQiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpOyB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQGtleWZyYW1lcyBib3VuY2VpbkIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpOyB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG4vKiDpnIfpoqQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIDIwJSwgNDAlLCA2MCUsIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTsgfVxuICAyMCUsIDQwJSwgNjAlLCA4MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpOyB9IH1cblxuQC1tcy1rZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7IH1cbiAgMjAlLCA0MCUsIDYwJSwgODAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpOyB9IH1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7IH1cbiAgMjAlLCA0MCUsIDYwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7IH0gfVxuXG4vKiDmt6HlhaUt5LuO5bemICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluTCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlaW5MIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cblxuQC1tcy1rZXlmcmFtZXMgZmFkZWluTCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbkwge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XG4iLCJAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLnNsaWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLnNsaWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAuZG93bUJ0bntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpci10aXR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgdG9wOiAzMSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maXItZGV0YWlse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRvcDogNDklO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlyLWJ0bntcclxuICAgICAgICAgICAgdG9wOiA2NCU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hhbmdlLWJnLWJ0bntcclxuICAgICAgICAgICAgLmxlZnQtY2hhbmdlLWJne1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0LWNoYW5nZS1iZ3tcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uc2xpZGVyLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmRlZmF1bHQtbGVmdHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIOi9ruaSreWbvueahOi/m+adpeWSjOemu+W8gCDlvIDlp4sgKi8gXHJcbiAgICAubmV4dC1pbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbmV4ZkluIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBuZXhmSW4gLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogbmV4ZkluIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbmV4ZkluIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICB9XHJcblxyXG4gICAgLm5leHQtbGVhdmV7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5leHRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAtbW96LWFuaW1hdGlvbjogbmV4dExlYXZlIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIC1tcy1hbmltYXRpb246IG5leHRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb246IG5leHRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgIH1cclxuXHJcbiAgICAuZnJvbnQtaW57XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZyb250SW4gLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IGZyb250SW4gLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZnJvbnRJbiAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb246IGZyb250SW4gLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgIH1cclxuXHJcbiAgICAuZnJvbnQtbGVhdmV7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZyb250TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IGZyb250TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZnJvbnRMZWF2ZSAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICBhbmltYXRpb246IGZyb250TGVhdmUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICB9XHJcbiAgICAvKiDova7mkq3lm77nmoTov5vmnaXlkoznprvlvIAg57uT5p2fICovIFxyXG5cclxuICAgIC8qIOW3puWPs+S4pOS4quWIh+aNouaMiemSriDlvIDlp4sqLyBcclxuICAgICY6aG92ZXIgLmNoYW5nZS1iZy1idG4gbGl7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoYW5nZS1iZy1idG4gbGl7XHJcbiAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ4JTtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtY2hhbmdlLWJne1xyXG4gICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzL2RvdF9wcmUucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgIH1cclxuICAgIC5yaWdodC1jaGFuZ2UtYmd7XHJcbiAgICAgICAgcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzL2RvdF9uZXh0LnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAvKiDlt6blj7PkuKTkuKrliIfmjaLmjInpkq4g57uT5p2fKi8gXHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG4vKiDlkJHkuIvmjInpkq4gKi8gXHJcbi5kb3dtQnRue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzL2RvdF9kb3duLnBuZ1wiKSBjZW50ZXIgOXB4IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTRweCAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjAwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIOavj+S4qumDqOWIhuWFrOWFseagt+W8j+W8gOWniyAqLyBcclxuLmZpci10aXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIC8vIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsMCwwLCAuMik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM0JTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmZpci1kZXRhaWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICAgIC8vIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAuNik7XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDYlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uZmlyLWJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU3JTtcclxuICAgIGxpIHtcclxuICAgICAgICB3aWR0aDogMTQ2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4OyAgXHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOTg4MDU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDYxYWU7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAzMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuLnBpY2stbGkge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC5idG4tYXJyb3dze1xyXG4gICAgICAgIHRleHQtaW5kZW50OjBweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogIGFsbCAuNzVzIGVhc2U7XHJcbiAgICAgfVxyXG4gICAgICY6aG92ZXIgLmJ0bi1hcnJvd3Mge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDdweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC43NXMgZWFzZTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246ICBhbGwgLjc1cyBlYXNlO1xyXG4gICAgIH1cclxuICAgICBcclxufVxyXG5cclxuLyog5q+P5Liq6YOo5YiG5YWs5YWx5qC35byP57uT5p2fICovIFxyXG5cclxuXHJcbi8qIOi9ruaSreWbvueahOWKqOeUu+W8gOWniyAqLyBcclxuLyog5LiL5LiA5Liq5Yqo55S7IOi/m+adpSAqLyBcclxuQGtleWZyYW1lcyBuZXhmSW57XHJcbiAgICAwJXtcclxuICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgIH1cclxuICAgIC8vIDIwJXtcclxuICAgIC8vICAgICBsZWZ0OiAtODAlO1xyXG4gICAgLy8gfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcbi8qIOS4i+S4gOS4quWKqOeUuyDnprvlvIAgKi8gXHJcbkBrZXlmcmFtZXMgbmV4dExlYXZle1xyXG4gICAgMCV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgIH1cclxufVxyXG4vKiDkuIrkuIDkuKrliqjnlLsg6L+b5p2lICovIFxyXG5Aa2V5ZnJhbWVzIGZyb250SW57XHJcbiAgICAwJXtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcbi8qIOS4iuS4gOS4quWKqOeUuyDnprvlvIAgKi8gXHJcbkBrZXlmcmFtZXMgZnJvbnRMZWF2ZXtcclxuICAgIDAle1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgfVxyXG59XHJcbi8qIOi9ruaSreWbvueahOWKqOeUu+e7k+adnyAqLyBcclxuXHJcbi8qIOi9ruaSreWbvuiDjOaZryAqLyBcclxuLmZpci1zbGlkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvOC5qcGdcIikgO1xyXG59XHJcbi5zZWMtc2xpZGVye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zbGlkZXJzLzQuanBnXCIpIDtcclxufVxyXG4udGhpLXNsaWRlcntcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2xpZGVycy82LmpwZ1wiKSA7XHJcbn1cclxuLmZvdS1zbGlkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NsaWRlcnMvNy5qcGdcIikgO1xyXG59XHJcblxyXG4vKiDlvLnlhaUt5LuO5LiLICovXHJcbi5hLWJvdW5jZWluQntcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2VpbkIgMXMgZWFzZS1pbiBmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uOiBib3VuY2VpbkIgMXMgZWFzZS1pbiBmb3J3YXJkcztcclxuICAgIC1tcy1hbmltYXRpb246IGJvdW5jZWluQiAxcyBlYXNlLWluIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBib3VuY2VpbkIgMXMgZWFzZS1pbiAgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi8qIOa3oeWFpS3ku47kuIogKi9cclxuLmEtZmFkZWluVHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5UIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW5UIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tcy1hbmltYXRpb246IGZhZGVpblQgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW5UIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIOa3oeWFpS3ku47lt6YgKi9cclxuLmEtZmFkZWluTHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tcy1hbmltYXRpb246IGZhZGVpbkwgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIOe/u+WFpS1Y6L20ICovXHJcbi5hLWZsaXBpblh7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmbGlwaW5YIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uOmZsaXBpblggMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgLW1zLWFuaW1hdGlvbjpmbGlwaW5YIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIGFuaW1hdGlvbjpmbGlwaW5YIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIOi9rOWFpS3ku47lt6bkuIsgKi9cclxuLmEtcm90YXRlaW5MQntcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOnJvdGF0ZWluTEIgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb246cm90YXRlaW5MQiAxcyBlYXNlLW91dCBiYWNrd2FyZHM7XHJcbiAgICAtbXMtYW5pbWF0aW9uOnJvdGF0ZWluTEIgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgYW5pbWF0aW9uOnJvdGF0ZWluTEIgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyog5by55YWlLeS7juW3piAqL1xyXG4uYS1ib3VuY2Vpbkx7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpib3VuY2VpbkwgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb246Ym91bmNlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIC1tcy1hbmltYXRpb246Ym91bmNlaW5MIDFzIGVhc2Utb3V0IGJhY2t3YXJkcztcclxuICAgIGFuaW1hdGlvbjpib3VuY2VpbkwgMXMgZWFzZS1vdXQgYmFja3dhcmRzO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyog6ZyH6aKkICovXHJcbi5hLXNoYWtle1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNoYWtlIDFzIGVhc2U7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogc2hha2UgMXMgZWFzZTtcclxuICAgIC1tcy1hbmltYXRpb246IHNoYWtlIDFzIGVhc2U7XHJcbiAgICBhbmltYXRpb246IHNoYWtlIDFzIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiDlvLnlhaUt5LuO5LiLICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VpbkJ7XHJcbiAgICAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJvdW5jZWluQntcclxuICAgIDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMHB4KTt9XHJcbiAgICAxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxufVxyXG5ALW1zLWtleWZyYW1lcyBib3VuY2VpbkJ7XHJcbiAgICAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQGtleWZyYW1lcyBib3VuY2VpbkJ7XHJcbiAgICAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuXHJcblxyXG4vKiDmt6HlhaUt5LuO5LiKICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW5Ue1xyXG4gICAgMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMHB4KTt9XHJcbiAgICAxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAle29wYWNpdHk6MDstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAle29wYWNpdHk6MDstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMHB4KTt9XHJcbiAgICAxMDAle29wYWNpdHk6MTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZWluVHtcclxuICAgIDAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwcHgpO31cclxuICAgIDEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31cclxufVxyXG5cclxuXHJcbi8qIOe/u+WFpS1Y6L20ICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwaW5Ye1xyXG4gICAgMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MDt9XHJcbiAgICA0MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTEwZGVnKTt9XHJcbiAgICA3MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO31cclxuICAgIDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMCk7b3BhY2l0eToxO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZmxpcGluWHtcclxuICAgIDAley1tb3otdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjA7fVxyXG4gICAgNDAley1tb3otdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0xMGRlZyk7fVxyXG4gICAgNzAley1tb3otdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTt9XHJcbiAgICAxMDAley1tb3otdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDApO29wYWNpdHk6MTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgZmxpcGluWHtcclxuICAgIDAley1tcy10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MDt9XHJcbiAgICA0MCV7LW1zLXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMTBkZWcpO31cclxuICAgIDcwJXstbXMtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTt9XHJcbiAgICAxMDAley1tcy10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMCk7b3BhY2l0eToxO31cclxufVxyXG5Aa2V5ZnJhbWVzIGZsaXBpblh7XHJcbiAgICAwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MDt9XHJcbiAgICA0MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0xMGRlZyk7fVxyXG4gICAgNzAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7fVxyXG4gICAgMTAwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMCk7b3BhY2l0eToxO31cclxufVxyXG5cclxuXHJcbi8qIOi9rOWFpS3ku47lt6bkuIsgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZWluTEJ7XHJcbiAgICAwJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtvcGFjaXR5OjA7fVxyXG4gICAgMTAwJXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO29wYWNpdHk6MTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0ZWluTEJ7XHJcbiAgICAwJXstbW96LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207LW1vei10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtvcGFjaXR5OjA7fVxyXG4gICAgMTAwJXstbW96LXRyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207LW1vei10cmFuc2Zvcm06cm90YXRlKDApO29wYWNpdHk6MTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgcm90YXRlaW5MQntcclxuICAgIDAley1tcy10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tOy1tcy10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtvcGFjaXR5OjA7fVxyXG4gICAgMTAwJXstbXMtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgwKTtvcGFjaXR5OjE7fVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlaW5MQntcclxuICAgIDAle3RyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b207dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7b3BhY2l0eTowO31cclxuICAgIDEwMCV7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbTt0cmFuc2Zvcm06cm90YXRlKDApO29wYWNpdHk6MTt9XHJcbn1cclxuXHJcbi8qIOW8ueWFpS3ku47lt6YgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZWluTHtcclxuICAgIDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDBweCk7fVxyXG4gICAgNjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDMwcHgpO31cclxuICAgIDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KTt9XHJcbiAgICAxMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBib3VuY2Vpbkx7XHJcbiAgICAwJXtvcGFjaXR5OjA7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwcHgpO31cclxuICAgIDYwJXtvcGFjaXR5OjE7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgzMHB4KTt9XHJcbiAgICA4MCV7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7fVxyXG4gICAgMTAwJXstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxufVxyXG5ALW1zLWtleWZyYW1lcyBib3VuY2Vpbkx7XHJcbiAgICAwJXtvcGFjaXR5OjA7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDBweCk7fVxyXG4gICAgNjAle29wYWNpdHk6MTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMzBweCk7fVxyXG4gICAgODAley1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7fVxyXG4gICAgMTAwJXstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7fVxyXG59XHJcbkBrZXlmcmFtZXMgYm91bmNlaW5Me1xyXG4gICAgMCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDBweCk7fVxyXG4gICAgNjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgzMHB4KTt9XHJcbiAgICA4MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO31cclxuICAgIDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7fVxyXG59XHJcblxyXG4vKiDlvLnlhaUt5LuO5LiLICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VpbkJ7XHJcbiAgICAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDBweCk7fVxyXG4gICAgNjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7fVxyXG4gICAgODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt9XHJcbiAgICAxMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBib3VuY2VpbkJ7XHJcbiAgICAwJXtvcGFjaXR5OjA7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDBweCk7fVxyXG4gICAgLy8gNjAle29wYWNpdHk6MTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMHB4KTt9XHJcbiAgICAvLyA4MCV7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KTt9XHJcbiAgICA2MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt9XHJcbiAgICA4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO31cclxuICAgIDEwMCV7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgYm91bmNlaW5Ce1xyXG4gICAgMCV7b3BhY2l0eTowOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDBweCk7fVxyXG4gICAgNjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7fVxyXG4gICAgODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt9XHJcbiAgICAxMDAley1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuQGtleWZyYW1lcyBib3VuY2VpbkJ7XHJcbiAgICAwJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwcHgpO31cclxuICAgIDYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO31cclxuICAgIDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7fVxyXG4gICAgMTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt9XHJcbn1cclxuXHJcblxyXG4vKiDpnIfpoqQgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtle1xyXG4gICAgMCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxuICAgIDEwJSwzMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7fVxyXG4gICAgMjAlLDQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCk7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzaGFrZXtcclxuICAgIDAlLDEwMCV7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt9XHJcbiAgICAxMCUsMzAlLDUwJSw3MCUsOTAley1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO31cclxuICAgIDIwJSw0MCUsNjAlLDgwJXstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpO31cclxufVxyXG5ALW1zLWtleWZyYW1lcyBzaGFrZXtcclxuICAgIDAlLDEwMCV7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxuICAgIDEwJSwzMCUsNTAlLDcwJSw5MCV7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KTt9XHJcbiAgICAyMCUsNDAlLDYwJSw4MCV7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpO31cclxufVxyXG5Aa2V5ZnJhbWVzIHNoYWtle1xyXG4gICAgMCUsMTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt9XHJcbiAgICAxMCUsMzAlLDUwJSw3MCUsOTAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KTt9XHJcbiAgICAyMCUsNDAlLDYwJSw4MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCk7fVxyXG59XHJcblxyXG4vKiDmt6HlhaUt5LuO5bemICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW5Me1xyXG4gICAgMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMHB4KTt9XHJcbiAgICAxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluTHtcclxuICAgIDAle29wYWNpdHk6MDstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDBweCk7fVxyXG4gICAgMTAwJXtvcGFjaXR5OjE7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgZmFkZWluTHtcclxuICAgIDAle29wYWNpdHk6MDstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMHB4KTt9XHJcbiAgICAxMDAle29wYWNpdHk6MTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7fVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZWluTHtcclxuICAgIDAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwcHgpO31cclxuICAgIDEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO31cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home-content/slideshow/slideshow.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/home/home-content/slideshow/slideshow.component.ts ***!
  \**************************************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlideshowComponent = /** @class */ (function () {
    function SlideshowComponent(renderer2) {
        this.renderer2 = renderer2;
        this.index = 0;
        this.animateArr = [
            "a-bounceinB", "a-fadeinT",
            "a-flipinX", "a-rotateinLB",
            "a-bounceinL", "a-fadeinL",
            "a-fadeinL", "a-fadeinL",
            "a-fadeinT", "a-fadeinL"
        ];
        this.pageTimer = {};
    }
    SlideshowComponent.prototype.add = function () {
        this.setFrontOrNextIndex(true);
        this.index >= 3 ? this.index = -1 : null;
        this.index += 1;
        this.changeBg(true);
    };
    SlideshowComponent.prototype.reduce = function () {
        this.setFrontOrNextIndex(false);
        this.index <= 0 ? this.index = 4 : null;
        this.index -= 1;
        this.changeBg(false);
    };
    /**
     * @param flag boolean 切换图片
     */
    SlideshowComponent.prototype.changeBg = function (flag) {
        var _this = this;
        this.renderer2.removeClass(this.firSlider.nativeElement, "default-left");
        this.upDateInterval();
        var allSlider = [this.firSlider, this.secSlider, this.thiSlider, this.fouSlider];
        allSlider.forEach(function (item, index) {
            _this.resetClass(item);
            _this.index == index ? flag ? _this.renderer2.addClass(item.nativeElement, "next-in")
                : _this.renderer2.addClass(item.nativeElement, "front-in")
                : null;
        });
        flag ? this.renderer2.addClass(allSlider[this.frontIndex].nativeElement, "next-leave")
            : this.renderer2.addClass(allSlider[this.nextIndex].nativeElement, "front-leave");
        this.innerAnimat(flag);
    };
    /**
     *
     * @param val  要切换到的index ,是子组件切换轮播图的按钮传过来的数据
     */
    SlideshowComponent.prototype.getIndex = function (val) {
        var flag;
        if (this.index === val) {
            return;
        }
        else if (this.index > val) {
            this.setFrontOrNextIndex(false);
            flag = false;
        }
        else {
            this.setFrontOrNextIndex(true);
            flag = true;
        }
        this.index = val;
        this.changeBg(flag);
    };
    SlideshowComponent.prototype.setAutoChange = function () {
        var _this = this;
        this.autoTimer = setInterval(function () {
            _this.add();
        }, 4000);
    };
    SlideshowComponent.prototype.clearAutoChange = function () {
        clearInterval(this.autoTimer);
    };
    SlideshowComponent.prototype.upDateInterval = function () {
        this.clearAutoChange();
        this.setAutoChange();
    };
    SlideshowComponent.prototype.setFrontOrNextIndex = function (flag) {
        flag ? this.frontIndex = this.index : this.nextIndex = this.index;
    };
    /**
     *
     * @param item element 要去除样式的元素
     */
    SlideshowComponent.prototype.resetClass = function (item) {
        var _this = this;
        var classArr = ["next-in", "next-leave", "front-in", "front-leave"];
        classArr.forEach(function (classItem) {
            _this.renderer2.removeClass(item.nativeElement, classItem);
        });
    };
    SlideshowComponent.prototype.innerAnimat = function (flag) {
        this.oldAnimate = this.newAnimate;
        this.newAnimate = this.animateArr[this.rd()];
        for (var item in this.pageTimer) {
            clearTimeout(this.pageTimer[item]);
        }
        this.cleanOrAddClass(this.index, true);
        if (flag === 'default') {
            return;
        }
        if (flag) {
            this.cleanOrAddClass(this.frontIndex, false);
        }
        else {
            this.cleanOrAddClass(this.nextIndex, false);
        }
    };
    SlideshowComponent.prototype.cleanOrAddClass = function (arrIndex, flag) {
        var _this = this;
        var domArr = [
            [this.firTit, this.firDet, this.firBtn],
            [this.secTit, this.secDet, this.secBtn],
            [this.thiTit, this.thiDet, this.thiBtn],
            [this.fouTit, this.fouDet, this.fouBtn],
        ];
        domArr[arrIndex].forEach(function (item, index) {
            if (flag) {
                // index === 0 ?   this.addAnimate(item)
                //             :   index === 1 ? setTimeout(()=>{ this.addAnimate(item) },550)
                //                             : setTimeout(()=>{ this.addAnimate(item) },900)
                switch (index) {
                    case 0:
                        _this.addAnimate(item);
                        break;
                    case 1:
                        _this.pageTimer["timer1"] = setTimeout(function () { _this.addAnimate(item); }, 550);
                        break;
                    case 2:
                        _this.pageTimer["timer2"] = setTimeout(function () { _this.addAnimate(item); }, 900);
                        break;
                    default: break;
                }
            }
            else {
                _this.removeAnimate(item);
            }
        });
    };
    SlideshowComponent.prototype.addAnimate = function (ele) {
        this.renderer2.addClass(ele.nativeElement, this.newAnimate);
    };
    SlideshowComponent.prototype.removeAnimate = function (ele) {
        this.renderer2.removeClass(ele.nativeElement, this.oldAnimate);
    };
    SlideshowComponent.prototype.rd = function () {
        return Math.floor(Math.random() * 10);
    };
    SlideshowComponent.prototype.goDown = function () {
        var ele = document.documentElement || document.body;
        var willScrTop = ele.offsetHeight - 58;
        var offY = window.pageYOffset;
        var timmer = requestAnimationFrame(function fn() {
            offY = offY + 50;
            if (willScrTop > offY) {
                window.scrollTo(0, offY);
                setTimeout(function () {
                    timmer = requestAnimationFrame(fn);
                }, 1);
            }
            else {
                window.scrollTo(0, willScrTop);
            }
        });
    };
    SlideshowComponent.prototype.ngOnInit = function () {
        this.innerAnimat("default");
        this.setAutoChange();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "firSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "secSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "thiSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "fouSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firTit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "firTit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firDet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "firDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "firBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secTit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "secTit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secDet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "secDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "secBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiTit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "thiTit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiDet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "thiDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thiBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "thiBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouTit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "fouTit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouDet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "fouDet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fouBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SlideshowComponent.prototype, "fouBtn", void 0);
    SlideshowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'slideshow',
            template: __webpack_require__(/*! ./slideshow.component.html */ "./src/app/pages/home/home-content/slideshow/slideshow.component.html"),
            styles: [__webpack_require__(/*! ./slideshow.component.scss */ "./src/app/pages/home/home-content/slideshow/slideshow.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SlideshowComponent);
    return SlideshowComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <home-header [canchange]=\"true\"></home-header> -->\r\n<poetry-header [canchange]=\"true\"></poetry-header>\r\n<home-content></home-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//  首页添加动画、轮播图等。


/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-content/home-content.component */ "./src/app/pages/home/home-content/home-content.component.ts");
/* harmony import */ var _home_content_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-content/slideshow/slideshow.component */ "./src/app/pages/home/home-content/slideshow/slideshow.component.ts");
/* harmony import */ var _home_content_slideshow_change_dot_change_dot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-content/slideshow/change-dot/change-dot.component */ "./src/app/pages/home/home-content/slideshow/change-dot/change-dot.component.ts");
/* harmony import */ var _home_content_need_poetry_need_poetry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-content/need-poetry/need-poetry.component */ "./src/app/pages/home/home-content/need-poetry/need-poetry.component.ts");
/* harmony import */ var _home_content_presentation_us_presentation_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-content/presentation-us/presentation-us.component */ "./src/app/pages/home/home-content/presentation-us/presentation-us.component.ts");
/* harmony import */ var _home_content_presentation_us_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-content/presentation-us/reasons/reasons.component */ "./src/app/pages/home/home-content/presentation-us/reasons/reasons.component.ts");
/* harmony import */ var _home_content_presentation_us_our_skills_our_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-content/presentation-us/our-skills/our-skills.component */ "./src/app/pages/home/home-content/presentation-us/our-skills/our-skills.component.ts");
/* harmony import */ var _home_content_presentation_us_he_said_he_said_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-content/presentation-us/he-said/he-said.component */ "./src/app/pages/home/home-content/presentation-us/he-said/he-said.component.ts");
/* harmony import */ var _home_content_poetry_news_poetry_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-content/poetry-news/poetry-news.component */ "./src/app/pages/home/home-content/poetry-news/poetry-news.component.ts");
/* harmony import */ var _home_content_poetry_news_move_img_move_img_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-content/poetry-news/move-img/move-img.component */ "./src/app/pages/home/home-content/poetry-news/move-img/move-img.component.ts");
/* harmony import */ var _home_content_partner_and_footer_partner_and_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-content/partner-and-footer/partner-and-footer.component */ "./src/app/pages/home/home-content/partner-and-footer/partner-and-footer.component.ts");
/* harmony import */ var _home_content_partner_and_footer_partner_partner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home-content/partner-and-footer/partner/partner.component */ "./src/app/pages/home/home-content/partner-and-footer/partner/partner.component.ts");



















var HOME_COMPOENTS = [
    _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
    _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__["HomeContentComponent"],
    _home_content_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["SlideshowComponent"],
    _home_content_slideshow_change_dot_change_dot_component__WEBPACK_IMPORTED_MODULE_9__["ChangeDotComponent"],
    _home_content_need_poetry_need_poetry_component__WEBPACK_IMPORTED_MODULE_10__["NeedPoetryComponent"],
    _home_content_presentation_us_presentation_us_component__WEBPACK_IMPORTED_MODULE_11__["presentationUsComponent"],
    _home_content_presentation_us_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_12__["ReasonsComponent"],
    _home_content_presentation_us_our_skills_our_skills_component__WEBPACK_IMPORTED_MODULE_13__["OurSkillsComponent"],
    _home_content_presentation_us_he_said_he_said_component__WEBPACK_IMPORTED_MODULE_14__["HeSaidComponent"],
    _home_content_poetry_news_poetry_news_component__WEBPACK_IMPORTED_MODULE_15__["PoetryNewsComponent"],
    _home_content_poetry_news_move_img_move_img_component__WEBPACK_IMPORTED_MODULE_16__["MoveImgComponent"],
    _home_content_partner_and_footer_partner_and_footer_component__WEBPACK_IMPORTED_MODULE_17__["PartnerAndFooterComponent"],
    _home_content_partner_and_footer_partner_partner_component__WEBPACK_IMPORTED_MODULE_18__["PartnerComponent"]
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"]
            ],
            declarations: HOME_COMPOENTS.slice()
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/shared/animations/autoWidth.ts":
/*!************************************************!*\
  !*** ./src/app/shared/animations/autoWidth.ts ***!
  \************************************************/
/*! exports provided: autoWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoWidth", function() { return autoWidth; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var autoWidth = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('autoWidth', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                width: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                width: '*'
            })
        ]))
    ])
]);


/***/ }),

/***/ "./src/app/shared/animations/fadeInUp.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/animations/fadeInUp.ts ***!
  \***********************************************/
/*! exports provided: fadeInUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp", function() { return fadeInUp; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translate3d(0, 100%, 0)',
                offset: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translate3d(0, 80%, 0)',
                offset: 0.5
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'none',
                offset: 1
            }),
        ]))
    ])
]);


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map