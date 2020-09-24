const Add = ( string ) => {
    if ( string === "") {
        return  0
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
});