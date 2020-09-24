const Add = ( string ) => {
    if ( string === "") {
        return  0
    }
    if ( string === "1") {
        return 1
    }
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
});