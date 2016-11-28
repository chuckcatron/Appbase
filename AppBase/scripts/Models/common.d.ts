/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
declare class Common {
    constructor();
    dept: kendo.data.ObservableObject;
    states: {
        abbrev: string;
        state: string;
    }[];
    isDate: (date: any) => boolean;
    isValidMonthYear: (date: any) => boolean;
    isValidYear: (year: any) => boolean;
    s4: () => string;
    guid: () => string;
    validData: (data: any) => boolean;
    adjust: () => void;
}
