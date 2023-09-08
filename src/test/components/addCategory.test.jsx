import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/addCategory";

describe("pruebas en <addCategory/>", () => {
  it("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const inputElement = screen.getByRole("textbox");

    fireEvent.input(inputElement, { target: { value: "saitama" } });

    expect(inputElement.value).toBe("saitama");
    
  });
  it('debe llamar el onNewCategory si el input tiene un valor', () => {
    const inputValue = "saitama";
    // TODO: ???
  });
});
