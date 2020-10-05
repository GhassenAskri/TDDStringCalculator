function parseStringToNumbers(string) {
    const regex = /\n/gi;
    stringToBeSplited = string.replace(regex, ",")
    const numbers = stringToBeSplited.split(",");
    return numbers
        .filter(element => element != "")
        .map(element =>  parseInt(element));
}

const Add = (string) => {

    if (string === "") {
        return 0
    }
    const numbers = parseStringToNumbers(string);

    return  numbers.reduce((acc, val) => acc + val, 0);

}


describe('White test', () => {
    it('should return true', () => {
        expect(true == true).toStrictEqual(true);
    });
});
describe('Handle comas between numbers', () => {
    test('method Add() return zero for un empty string ', () => {
        expect(Add("")).toStrictEqual(0)
    });
    test('method Add() return one for a string = "1', () => {
        expect(Add("1")).toStrictEqual(1)
    })
    test('method Add() return three for a string = "1,2', () => {
        expect(Add("1,2")).toStrictEqual(3)
    })

});
describe('Handle new lines between numbers', () => {
    test('method Add() return 6 for "1\n2,3"', () => {
        expect(Add("1\n2,3")).toStrictEqual(6)
    });
    test('method Add() return 8  for "1\n2,3\n2"', () => {
        expect(Add("1\n2,3\n2")).toStrictEqual(8)
    });
    test('method Add() return 8 for "1\n2\n3\n2"', () => {
        expect(Add("1\n2\n3\n2")).toStrictEqual(8)
    });
    test('method Add() return 7 for "1\n2,3\n2"', () => {
        expect(Add("\n2\n3\n2")).toStrictEqual(7)
    });

});

