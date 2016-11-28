///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>

class contact extends kendo.data.ObservableObject{
    appData = new Data();
    load = () => {
        var d = $.Deferred();
        this.appData.contactDataSource.read().then(function () {
            d.resolve("contacts");
        });
        return d.promise();
    }

    fetch = (contactId) => {
        return this.appData.contactDataSource.get(contactId);
    }

    constructor() {
        super();
        super.init(this);
    }
}