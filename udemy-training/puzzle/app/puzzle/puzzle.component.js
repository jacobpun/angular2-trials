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
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1ExpectedValue = Math.round(Math.random());
                    this.switch2ExpectedValue = Math.round(Math.random());
                    this.switch3ExpectedValue = Math.round(Math.random());
                    this.switch4ExpectedValue = Math.round(Math.random());
                    this.switch5ExpectedValue = Math.round(Math.random());
                    console.log(this.switch1ExpectedValue);
                    console.log(this.switch2ExpectedValue);
                    console.log(this.switch3ExpectedValue);
                    console.log(this.switch4ExpectedValue);
                    console.log(this.switch5ExpectedValue);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            Enter your name please:\n            <input type = \"text\" #name (keyup)=\"0\">\n        </section>\n        <section \n        [ngClass] = \"{\n            puzzle: true,\n            solved: switch1.value == switch1ExpectedValue && \n                    switch2.value == switch2ExpectedValue && \n                    switch3.value == switch3ExpectedValue && \n                    switch4.value == switch4ExpectedValue && \n                    switch5.value == switch5ExpectedValue\n        }\" \n        [ngStyle] = \"{display: name.value == '' ? 'none': 'block'}\">\n            <h2>\n                The Puzzle |  \n                {{switch1.value == switch1ExpectedValue && \n                    switch2.value == switch2ExpectedValue && \n                    switch3.value == switch3ExpectedValue && \n                    switch4.value == switch4ExpectedValue && \n                    switch5.value == switch5ExpectedValue ? 'SOLVED' : 'NOT SOLVED'}}\n            </h2>\n            <p>Welcome <span class=\"name\">{{name.value}}</span>!!\n            <br>\n            Switch 1:\n            <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n            Switch 2:\n            <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n            Switch 3:\n            <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n            Switch 4:\n            <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n            Switch 5:\n            <input type=\"text\" #switch5 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden] = \"switch1.value != switch1ExpectedValue || \n                    switch2.value != switch2ExpectedValue || \n                    switch3.value != switch3ExpectedValue || \n                    switch4.value != switch4ExpectedValue || \n                    switch5.value != switch5ExpectedValue\">Congratulations {{name.value}}, you did it!</h2>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUFBO2dCQXVCQSxDQUFDO2dCQWhCRyxrQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFFdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFFM0MsQ0FBQztnQkFsRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsV0FBVzt3QkFDdEIsUUFBUSxFQUFHLDA0REF5Q1Y7cUJBRUosQ0FBQzs7bUNBQUE7Z0JBd0JGLHNCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCw2Q0F1QkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnbXktcHV6emxlJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgW25nQ2xhc3NdID0gXCJ7XG4gICAgICAgICAgICBwdXp6bGU6IHRydWUsXG4gICAgICAgICAgICBzb2x2ZWQ6IHN3aXRjaDEudmFsdWUgPT0gc3dpdGNoMUV4cGVjdGVkVmFsdWUgJiYgXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMkV4cGVjdGVkVmFsdWUgJiYgXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM0V4cGVjdGVkVmFsdWUgJiYgXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNEV4cGVjdGVkVmFsdWUgJiYgXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaDUudmFsdWUgPT0gc3dpdGNoNUV4cGVjdGVkVmFsdWVcbiAgICAgICAgfVwiIFxuICAgICAgICBbbmdTdHlsZV0gPSBcIntkaXNwbGF5OiBuYW1lLnZhbHVlID09ICcnID8gJ25vbmUnOiAnYmxvY2snfVwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIFRoZSBQdXp6bGUgfCAgXG4gICAgICAgICAgICAgICAge3tzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFFeHBlY3RlZFZhbHVlICYmIFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJFeHBlY3RlZFZhbHVlICYmIFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNFeHBlY3RlZFZhbHVlICYmIFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDRFeHBlY3RlZFZhbHVlICYmIFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2g1LnZhbHVlID09IHN3aXRjaDVFeHBlY3RlZFZhbHVlID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCd9fVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPldlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+ISFcbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIFN3aXRjaCAxOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgU3dpdGNoIDM6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIFN3aXRjaCA0OlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBTd2l0Y2ggNTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2g1IChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxoMiBbaGlkZGVuXSA9IFwic3dpdGNoMS52YWx1ZSAhPSBzd2l0Y2gxRXhwZWN0ZWRWYWx1ZSB8fCBcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyRXhwZWN0ZWRWYWx1ZSB8fCBcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSAhPSBzd2l0Y2gzRXhwZWN0ZWRWYWx1ZSB8fCBcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoNC52YWx1ZSAhPSBzd2l0Y2g0RXhwZWN0ZWRWYWx1ZSB8fCBcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoNS52YWx1ZSAhPSBzd2l0Y2g1RXhwZWN0ZWRWYWx1ZVwiPkNvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCE8L2gyPlxuICAgIGAsXG4gICAgXG59KVxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc3dpdGNoMUV4cGVjdGVkVmFsdWU6bnVtYmVyO1xuICAgIHN3aXRjaDJFeHBlY3RlZFZhbHVlOm51bWJlcjtcbiAgICBzd2l0Y2gzRXhwZWN0ZWRWYWx1ZTpudW1iZXI7XG4gICAgc3dpdGNoNEV4cGVjdGVkVmFsdWU6bnVtYmVyO1xuICAgIHN3aXRjaDVFeHBlY3RlZFZhbHVlOm51bWJlcjtcbiAgICBcbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMuc3dpdGNoMUV4cGVjdGVkVmFsdWUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDJFeHBlY3RlZFZhbHVlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gzRXhwZWN0ZWRWYWx1ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoNEV4cGVjdGVkVmFsdWUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDVFeHBlY3RlZFZhbHVlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMUV4cGVjdGVkVmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDJFeHBlY3RlZFZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gzRXhwZWN0ZWRWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoNEV4cGVjdGVkVmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDVFeHBlY3RlZFZhbHVlKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
