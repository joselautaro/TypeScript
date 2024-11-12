"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obligatorio = obligatorio;
function obligatorio(target, key) {
    let valor = target[key];
    const getter = () => valor;
    const setter = (nuevoValor) => {
        if (!nuevoValor) {
            throw new Error(`La propiedad '${key}' es obligatoria`);
        }
        valor = nuevoValor;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
//# sourceMappingURL=validadores.js.map