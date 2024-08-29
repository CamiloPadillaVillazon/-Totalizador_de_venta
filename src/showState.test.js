import { getState } from "./showState";


describe("Mostrar", () => {
it("Muestra el estado", () => {
    expect(getState("TX")).toEqual("TX");
});
});
