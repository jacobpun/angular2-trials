System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChange = function (hobbies) {
                    this.hobbiesChanged.emit(hobbies);
                };
                __decorate([
                    core_2.Input('myAge'), 
                    __metadata('design:type', Number)
                ], PropertyBindingComponent.prototype, "age", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n        <h2>This is the child component</h2>\n        Hi, I am {{name}}. I am {{age}} years old\n        <h3>Enter your hobbies</h3>\n        <input type = 'text' #hobbies (keyup) = 'onHobbiesChange(hobbies.value)' />\n    ",
                        inputs: ['name:myName'],
                        outputs: ['hobbiesChanged']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUFBO29CQUdJLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBSWhELENBQUM7Z0JBSEcsa0RBQWUsR0FBZixVQUFnQixPQUFnQjtvQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBSkQ7b0JBQUMsWUFBSyxDQUFFLE9BQU8sQ0FBQzs7cUVBQUE7Z0JBYnBCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLG1PQUtUO3dCQUNELE1BQU0sRUFBQyxDQUFDLGFBQWEsQ0FBQzt3QkFDdEIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBQzlCLENBQUM7OzRDQUFBO2dCQVFGLCtCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCwrREFPQyxDQUFBIiwiZmlsZSI6InByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wcm9wZXJ0eS1iaW5kaW5nJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+VGhpcyBpcyB0aGUgY2hpbGQgY29tcG9uZW50PC9oMj5cbiAgICAgICAgSGksIEkgYW0ge3tuYW1lfX0uIEkgYW0ge3thZ2V9fSB5ZWFycyBvbGRcbiAgICAgICAgPGgzPkVudGVyIHlvdXIgaG9iYmllczwvaDM+XG4gICAgICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnICNob2JiaWVzIChrZXl1cCkgPSAnb25Ib2JiaWVzQ2hhbmdlKGhvYmJpZXMudmFsdWUpJyAvPlxuICAgIGAsXG4gICAgaW5wdXRzOlsnbmFtZTpteU5hbWUnXSxcbiAgICBvdXRwdXRzOiBbJ2hvYmJpZXNDaGFuZ2VkJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50IHtcbiAgICBuYW1lIDogc3RyaW5nOyAgXG4gICAgQElucHV0ICgnbXlBZ2UnKSBhZ2UgOiBudW1iZXI7IFxuICAgIGhvYmJpZXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgb25Ib2JiaWVzQ2hhbmdlKGhvYmJpZXMgOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ob2JiaWVzQ2hhbmdlZC5lbWl0KGhvYmJpZXMpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
