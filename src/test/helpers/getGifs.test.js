import { getGifs } from "../../helpers/getGifs";

describe('pruebas en <getGifs/>', () => { 
    it('debe de retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('one punch')
        expect(gifs.length).toBeGreaterThan(0) // toBeGreaterThan sirve para ver si algo es mayor al valor proporcionado
        expect(gifs[0]).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
 })