"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var User_1 = require("./User");
var OrgWorker = /** @class */ (function (_super) {
    __extends(OrgWorker, _super);
    function OrgWorker(username, password) {
        return _super.call(this, username, password) || this;
    }
    OrgWorker.prototype.getId = function () {
        return this.userId;
    };
    return OrgWorker;
}(User_1["default"]));
exports["default"] = OrgWorker;
