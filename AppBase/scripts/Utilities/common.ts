﻿///<reference path="../typings/jquery/jquery.d.ts"/>

class Common {
    constructor() {

    }

    states: [
        { abbrev: "OH", state: "Ohio" }, { abbrev: "AL", state: "Alabama" }, { abbrev: "AK", state: "Alaska" },
        { abbrev: "AZ", state: "Arizona" }, { abbrev: "AR", state: "Arkansas" },
        { abbrev: "CA", state: "California" }, { abbrev: "CO", state: "Colorado" },
        { abbrev: "CT", state: "Connecticut" }, { abbrev: "DE", state: "Delaware" },
        { abbrev: "DC", state: "District of Columbia" }, { abbrev: "FL", state: "Florida" },
        { abbrev: "GA", state: "Georgia" }, { abbrev: "HI", state: "Hawaii" },
        { abbrev: "ID", state: "Idaho" }, { abbrev: "IL", state: "Illinois" }, { abbrev: "IN", state: "Indiana" },
        { abbrev: "IA", state: "Iowa" },
        { abbrev: "KS", state: "Kansas" }, { abbrev: "KY", state: "Kentucky" }, { abbrev: "LA", state: "Louisiana" },
        { abbrev: "ME", state: "Maine" },
        { abbrev: "MD", state: "Maryland" }, { abbrev: "MA", state: "Massachusetts" },
        { abbrev: "MI", state: "Michigan" }, { abbrev: "MN", state: "Minnesota" },
        { abbrev: "MS", state: "Mississippi" }, { abbrev: "MO", state: "Missouri" }, { abbrev: "MT", state: "Montana" },
        { abbrev: "NE", state: "Nebraska" },
        { abbrev: "NV", state: "Nevada" }, { abbrev: "NH", state: "New Hampshire" },
        { abbrev: "NJ", state: "New Jersey" }, { abbrev: "NM", state: "New Mexico" },
        { abbrev: "NY", state: "New York" }, { abbrev: "NC", state: "North Carolina" },
        { abbrev: "ND", state: "North Dakota" },
        { abbrev: "OK", state: "Oklahoma" }, { abbrev: "OR", state: "Oregon" }, { abbrev: "PA", state: "Pennsylvania" },
        { abbrev: "RI", state: "Rhode Island" },
        { abbrev: "SC", state: "South Carolina" }, { abbrev: "SD", state: "South Dakota" },
        { abbrev: "TN", state: "Tennessee" }, { abbrev: "TX", state: "Texas" },
        { abbrev: "UT", state: "Utah" }, { abbrev: "VT", state: "Vermont" }, { abbrev: "VA", state: "Virginia" },
        { abbrev: "WA", state: "Washington" },
        { abbrev: "WV", state: "West Virginia" }, { abbrev: "WI", state: "Wisconsin" },
        { abbrev: "WY", state: "Wyoming" }
    ];

    isDate = date => {
        // function came from 
        // http://jquerybyexample.blogspot.com/2011/12/
        //      validate-date-using-jquery.html
        var currVal = date;
        if (currVal === "")
            return false;

        //Declare Regex 
        var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
        var dtArray = currVal.match(rxDatePattern); // is format OK?
        if (dtArray == null)
            return false;

        //Checks for mm/dd/yyyy format.
        var [, dtMonth,, dtDay,, dtYear] = dtArray;
        if (dtMonth < 1 || dtMonth > 12)
            return false;
        else if (dtDay < 1 || dtDay > 31)
            return false;
        else if ((dtMonth === 4 || dtMonth === 6 || dtMonth === 9 || dtMonth === 11) && dtDay === 31)
            return false;
        else if (dtMonth === 2) {
            var isleap = (dtYear % 4 === 0 &&
            (dtYear % 100 !== 0 ||
                dtYear % 400 === 0));
            if (dtDay > 29 || (dtDay === 29 && !isleap))
                return false;
        }
        return true;
    }

    isValidMonthYear = date => {
        // function came from 
        // http://jquerybyexample.blogspot.com/2011/12/
        //      validate-date-using-jquery.html
        var currVal = date;
        if (currVal == '')
            return false;

        var dtArray = currVal.split(" "); // is format OK?
        if (dtArray == null)
            return false;

        //Checks for mm/dd/yyyy format.
        var [dtMonth, dtYear] = dtArray;
        switch (dtMonth) {
        case "January":
            break;
        case "February":
            break;
        case "March":
            break;
        case "April":
            break;
        case "May":
            break;
        case "June":
            break;
        case "July":
            break;
        case "August":
            break;
        case "September":
            break;
        case "October":
            break;
        case "November":
            break;
        case "December":
            break;
        default:
            return false;
        }
        if (!this.isValidYear(dtYear)) {
            return false;
        }
        return true;
    }

    isValidYear = year => {
        if (isNaN(year) || year.length !== 4) {
            return false;
        }
        return true;
    }

    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    guid = () => {
        return this.s4() +
            this.s4() +
            '-' +
            this.s4() +
            '-' +
            this.s4() +
            '-' +
            this.s4() +
            '-' +
            this.s4() +
            this.s4() +
            this.s4();
    }

    validData = data => {
        if (typeof data !== "undefined" && data) {
            return true;
        }
        return false;
    }

    adjust = () => {
        var wrapperRowHeight = $("#wrapperRow").height(),
            listDisplayRow = $("#listDisplayRow"),
            listDisplay = $("#listDisplay"),
            instructionsDiv = $("#fileInstructions"),
            uploadDiv = $("#uploadDiv").height(),
            listInstructionsHeight = $("#listInstructions").height(),
            listLabelHeight = $("#listLabel").height();


        instructionsDiv.height(wrapperRowHeight);
        listDisplayRow.height(wrapperRowHeight - uploadDiv);
        listDisplay.height(wrapperRowHeight - uploadDiv - listInstructionsHeight - (listLabelHeight * 1.92));
    }
}