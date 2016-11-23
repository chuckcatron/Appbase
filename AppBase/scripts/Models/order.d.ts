/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class Order extends kendo.data.Model {
    constructor(data?: any);
    fill: () => this;
    pack: () => Object;
}
