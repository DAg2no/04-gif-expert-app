import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("puebas en <GifGrid/>", () => {
  const category = "one punch";

  it("debe de mostrar el loanding inicialmente", () => {
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })

    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  it("debe mostrar los items cuando se cargan las imagenes del fetch", () => {
    
  });
});
