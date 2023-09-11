import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/addCategory";

describe("pruebas en <addCategory/>", () => {
  it("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />); // sujeto de pruebas
    const inputElement = screen.getByRole('textbox') // capturando el input del cuatro de texto
    fireEvent.input(inputElement, { target: { value: "saitama" } }) // se utiliza para cambiar el valor del cuatro de texto
    expect(inputElement.value).toBe("saitama"); // aca esta probando si se cambio el valor del cuadro de texto
  });


  it('debe llamar el onNewCategory si el input tiene un valor', () => {
    const inputValue = "saitama"; // aca estamos haciendo una constante con nuevo valor del input   
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory}/>) // sujeto de pruebas

    const inputElement = screen.getByRole('textbox') // capturando el input del cuatro de texto
    const formElement = screen.getByRole('form') // capturando el formulario con un label que fue colocado en el addCategory

    fireEvent.input(inputElement, { target: { value: inputValue } })
    fireEvent.submit(formElement) 

    expect(inputElement.value).toBe('')

    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  });
  
  it('no debe de llamar el onNewCategory si el input esta vacio', () => {

    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory}/>) // sujeto de pruebas
    const formElement = screen.getByRole('form') // capturando el formulario con un label que fue colocado en el addCategory
    fireEvent.submit(formElement) 
    expect(onNewCategory).not.toBeCalled();
  });
});
