var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animais = /** @class */ (function () {
    function animais() {
    }
    animais.prototype.latir = function () {
        console.log("auaua");
    };
    animais.prototype.correr = function () {
        console.log("o animal  esta correndo ");
    };
    return animais;
}());
var cachorros = /** @class */ (function (_super) {
    __extends(cachorros, _super);
    function cachorros() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cachorros;
}(animais));
var cachorro = new cachorros();
cachorro.latir();
