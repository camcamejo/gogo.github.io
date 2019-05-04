import { async, TestBed } from '@angular/core/testing';
import { NucleoiconsComponent } from './nucleoicons.component';
describe('NucleoiconsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NucleoiconsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NucleoiconsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nucleoicons.component.spec.js.map