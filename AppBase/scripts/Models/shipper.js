var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var Shipper = (function (_super) {
    __extends(Shipper, _super);
    function Shipper(data) {
        var _this = this;
        _super.call(this);
        this.fill = function () {
            try {
                var self = _this;
                return self;
            }
            catch (err) {
                throw err;
            }
        };
        this.pack = function () {
            try {
                var self = _this;
                return self.toJSON();
            }
            catch (err) {
                throw err;
            }
        };
        this.idField = "ShipperID";
        this.fields = {
            "CompanyName": { type: "string" },
            "Phone": { type: "string" }
        };
        _super.prototype.init.call(this, data);
    }
    return Shipper;
}(kendo.data.Model));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Models/shipper.js.map