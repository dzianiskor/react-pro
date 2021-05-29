import toCapitalizeFirstLetter from "./stringFunctions";

describe('stringFunctions', () =>{
    test('Function takes "some String" and must return "Some string"', () => {
        const result = toCapitalizeFirstLetter('some String');
        expect(result).toEqual('Some string');
    })

    test('Function takes "Some String" and must return "Some string"', () => {
        const result = toCapitalizeFirstLetter('Some String');
        expect(result).toEqual('Some string');
    })

    test('Function takes "some string" and must return "Some string"', () => {
        const result = toCapitalizeFirstLetter('some string');
        expect(result).toEqual('Some string');
    })

    test('Function takes "SOME STRING" and must return "Some string"', () => {
        const result = toCapitalizeFirstLetter('SOME STRING');
        expect(result).toEqual('Some string');
    })

    test('Function takes empty string and must return empty string', () => {
        const result = toCapitalizeFirstLetter('');
        expect(result).toEqual('');
    })
})
