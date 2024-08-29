import { getPrice } from "./showPrice";


describe("Mostrar", () => {
it("Muestra la cantidad del precio del item", () => {
    expect(getPrice(25)).toEqual(25);
});
});
