System.register(['angular2/core', './test-component.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_component_1_1) {
                test_component_component_1 = test_component_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = 'PK';
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "Hi! I am <span [style.color] = \"inputElement.value == 'yes' ? 'red':'blue' \">{{name}}</span>. This is my first angular2 app. <span [class.is-awesome] =\"inputElement.value == 'yes'\">This is awesome!</span>\n    <br/>\n    Is it awesome? <input type='text' #inputElement (keyup)=\"0\"/>\n    <button [disabled] = \"inputElement.value !== 'yes'\">Enabled only for yes</button>\n    <br/>\n    kk\n    <testing></testing>\n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFITyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFBO2dCQUNuQixDQUFDO2dCQWxCVDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxjQUFjO3dCQUN6QixRQUFRLEVBQUcsNmFBT1Y7d0JBQ0QsU0FBUyxFQUFHLENBQUMseUJBQXlCLENBQUM7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLHdDQUFhLENBQUM7cUJBQzlCLENBQUM7O3dDQUFBO2dCQU9GLDJCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1REFNQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gJy4vdGVzdC1jb21wb25lbnQuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdteS1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlIDogYEhpISBJIGFtIDxzcGFuIFtzdHlsZS5jb2xvcl0gPSBcImlucHV0RWxlbWVudC52YWx1ZSA9PSAneWVzJyA/ICdyZWQnOidibHVlJyBcIj57e25hbWV9fTwvc3Bhbj4uIFRoaXMgaXMgbXkgZmlyc3QgYW5ndWxhcjIgYXBwLiA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV0gPVwiaW5wdXRFbGVtZW50LnZhbHVlID09ICd5ZXMnXCI+VGhpcyBpcyBhd2Vzb21lITwvc3Bhbj5cbiAgICA8YnIvPlxuICAgIElzIGl0IGF3ZXNvbWU/IDxpbnB1dCB0eXBlPSd0ZXh0JyAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCIvPlxuICAgIDxidXR0b24gW2Rpc2FibGVkXSA9IFwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiPkVuYWJsZWQgb25seSBmb3IgeWVzPC9idXR0b24+XG4gICAgPGJyLz5cbiAgICBra1xuICAgIDx0ZXN0aW5nPjwvdGVzdGluZz5cbiAgICBgLFxuICAgIHN0eWxlVXJscyA6IFsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbVGVzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgICAgIG5hbWUgOnN0cmluZztcbiAgICAgICAgXG4gICAgICAgIG5nT25Jbml0KCkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0nUEsnXG4gICAgICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
