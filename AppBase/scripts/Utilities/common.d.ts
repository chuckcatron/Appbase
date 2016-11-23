/// <reference path="../typings/jquery/jquery.d.ts" />
declare class Common {
    constructor();
    states: [{
        abbrev: "OH";
        state: "Ohio";
    }, {
        abbrev: "AL";
        state: "Alabama";
    }, {
        abbrev: "AK";
        state: "Alaska";
    }, {
        abbrev: "AZ";
        state: "Arizona";
    }, {
        abbrev: "AR";
        state: "Arkansas";
    }, {
        abbrev: "CA";
        state: "California";
    }, {
        abbrev: "CO";
        state: "Colorado";
    }, {
        abbrev: "CT";
        state: "Connecticut";
    }, {
        abbrev: "DE";
        state: "Delaware";
    }, {
        abbrev: "DC";
        state: "District of Columbia";
    }, {
        abbrev: "FL";
        state: "Florida";
    }, {
        abbrev: "GA";
        state: "Georgia";
    }, {
        abbrev: "HI";
        state: "Hawaii";
    }, {
        abbrev: "ID";
        state: "Idaho";
    }, {
        abbrev: "IL";
        state: "Illinois";
    }, {
        abbrev: "IN";
        state: "Indiana";
    }, {
        abbrev: "IA";
        state: "Iowa";
    }, {
        abbrev: "KS";
        state: "Kansas";
    }, {
        abbrev: "KY";
        state: "Kentucky";
    }, {
        abbrev: "LA";
        state: "Louisiana";
    }, {
        abbrev: "ME";
        state: "Maine";
    }, {
        abbrev: "MD";
        state: "Maryland";
    }, {
        abbrev: "MA";
        state: "Massachusetts";
    }, {
        abbrev: "MI";
        state: "Michigan";
    }, {
        abbrev: "MN";
        state: "Minnesota";
    }, {
        abbrev: "MS";
        state: "Mississippi";
    }, {
        abbrev: "MO";
        state: "Missouri";
    }, {
        abbrev: "MT";
        state: "Montana";
    }, {
        abbrev: "NE";
        state: "Nebraska";
    }, {
        abbrev: "NV";
        state: "Nevada";
    }, {
        abbrev: "NH";
        state: "New Hampshire";
    }, {
        abbrev: "NJ";
        state: "New Jersey";
    }, {
        abbrev: "NM";
        state: "New Mexico";
    }, {
        abbrev: "NY";
        state: "New York";
    }, {
        abbrev: "NC";
        state: "North Carolina";
    }, {
        abbrev: "ND";
        state: "North Dakota";
    }, {
        abbrev: "OK";
        state: "Oklahoma";
    }, {
        abbrev: "OR";
        state: "Oregon";
    }, {
        abbrev: "PA";
        state: "Pennsylvania";
    }, {
        abbrev: "RI";
        state: "Rhode Island";
    }, {
        abbrev: "SC";
        state: "South Carolina";
    }, {
        abbrev: "SD";
        state: "South Dakota";
    }, {
        abbrev: "TN";
        state: "Tennessee";
    }, {
        abbrev: "TX";
        state: "Texas";
    }, {
        abbrev: "UT";
        state: "Utah";
    }, {
        abbrev: "VT";
        state: "Vermont";
    }, {
        abbrev: "VA";
        state: "Virginia";
    }, {
        abbrev: "WA";
        state: "Washington";
    }, {
        abbrev: "WV";
        state: "West Virginia";
    }, {
        abbrev: "WI";
        state: "Wisconsin";
    }, {
        abbrev: "WY";
        state: "Wyoming";
    }];
    isDate: (date: any) => boolean;
    isValidMonthYear: (date: any) => boolean;
    isValidYear: (year: any) => boolean;
    s4: () => string;
    guid: () => string;
    validData: (data: any) => boolean;
    adjust: () => void;
}
