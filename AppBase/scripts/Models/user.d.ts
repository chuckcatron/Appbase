/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class User extends kendo.data.Model {
    constructor(data?: any);
    fullName(): string;
    hasAccess(): boolean;
    canUpdate(): boolean;
}
