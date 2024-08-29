import get_producto from "./ventas.js";


describe("Mostrar", () => {
it("Muestra la cantidad de items de compra", () => {
    expect(get_producto(30)).toEqual(30);
});
});
