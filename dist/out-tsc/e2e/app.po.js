import { browser, by, element } from 'protractor';
var Pk2AngularCliFreePage = /** @class */ (function () {
    function Pk2AngularCliFreePage() {
    }
    Pk2AngularCliFreePage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    Pk2AngularCliFreePage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return Pk2AngularCliFreePage;
}());
export { Pk2AngularCliFreePage };
//# sourceMappingURL=app.po.js.map