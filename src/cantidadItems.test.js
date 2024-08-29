import { getCantidadItems } from "./cantidadItems";


describe("Mostrar", () => {
it("Muestra la cantidad de items de compra", () => {
    expect(getCantidadItems(30)).toEqual(30);
});
});
