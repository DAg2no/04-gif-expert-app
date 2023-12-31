import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem/>', () => { 
    const title = 'Tigre'
    const url = 'https://tigre.com/tigre.jpg'
    it('Probar snapshot', () => {
       const {container} = render(<GifItem title={title} url={url}/>)
        expect(container ).toMatchSnapshot();
    });
    it('debe mostrar la imagen con el URL y el ALT indicado', () => {
      render( <GifItem title={title} url={url} /> );
       /*  expect(screen.getByRole('img').src).toBe(url)
        expect(screen.getByRole('img').alt).toBe(title) */
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);    
    });
    it('debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={title} url={url} /> );
        expect(screen.getAllByText(title)).toBeTruthy();
    });
 });