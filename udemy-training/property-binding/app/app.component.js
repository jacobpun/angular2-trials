System.register(['angular2/core', './property-binding.component'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <section class='parent'>\n        <h1>This is the parent</h1>\n        <h2>Please enter your name: </h2>\n        <input type = 'text' [(ngModel)] = \"name\">\n        <br><br>\n        <section class = 'child'>\n            <my-property-binding [myName]=\"name\" [myAge]=\"27\" (hobbiesChanged) = \"hobbies = $event\"></my-property-binding>            \n        </section>  \n        <br><br>\n        My Hobbies are : {{hobbies}}  \n    </section>\n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBR0EsQ0FBQztnQkFwQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLCtjQVlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHFEQUF3QixDQUFDO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdUNBR0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gJy4vcHJvcGVydHktYmluZGluZy5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPSdwYXJlbnQnPlxuICAgICAgICA8aDE+VGhpcyBpcyB0aGUgcGFyZW50PC9oMT5cbiAgICAgICAgPGgyPlBsZWFzZSBlbnRlciB5b3VyIG5hbWU6IDwvaDI+XG4gICAgICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnIFsobmdNb2RlbCldID0gXCJuYW1lXCI+XG4gICAgICAgIDxicj48YnI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzID0gJ2NoaWxkJz5cbiAgICAgICAgICAgIDxteS1wcm9wZXJ0eS1iaW5kaW5nIFtteU5hbWVdPVwibmFtZVwiIFtteUFnZV09XCIyN1wiIChob2JiaWVzQ2hhbmdlZCkgPSBcImhvYmJpZXMgPSAkZXZlbnRcIj48L215LXByb3BlcnR5LWJpbmRpbmc+ICAgICAgICAgICAgXG4gICAgICAgIDwvc2VjdGlvbj4gIFxuICAgICAgICA8YnI+PGJyPlxuICAgICAgICBNeSBIb2JiaWVzIGFyZSA6IHt7aG9iYmllc319ICBcbiAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBob2JiaWVzIDogc3RyaW5nO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
