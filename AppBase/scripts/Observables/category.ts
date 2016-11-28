///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class category extends kendo.data.ObservableObject{
    appData = new Data();
    load = () => {
        var d = $.Deferred();
        this.appData.categoryDataSource.read().then(function () {
            d.resolve("categories");
        });
        return d.promise();
    }

    fetch = (categoryId)  => {
        return this.appData.categoryDataSource.get(categoryId);
    }

    constructor() {
        super();
        super.init(this);
    }
}