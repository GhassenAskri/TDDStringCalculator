const Add = ( string ) => {
    if ( string === "") {
        return  0
    }
    const numbers  = string.split(",");

    return parseInt(numbers.reduce( (number,val) => number + val  ,""))

}



describe('white test', () => {
    it('should return true', () => {
        expect(true == true ).toStrictEqual(true);
    });
});

describe('String Calculator', () => {
    test('method Add() return zero for un empty string ', () => {
        expect(Add("")).toStrictEqual(0)
    });
    test('method Add() return one for a string = "1',()=>{
        expect(Add("1")).toStrictEqual(1)
    })
    test('method Add() return one for a string = "1',()=>{
        expect(Add("1,2")).toStrictEqual(12)
    })
});