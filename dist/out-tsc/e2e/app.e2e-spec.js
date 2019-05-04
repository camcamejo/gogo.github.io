import { Pk2AngularCliFreePage } from './app.po';
describe('pk2-angular-cli-free App', function () {
    var page;
    beforeEach(function () {
        page = new Pk2AngularCliFreePage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map