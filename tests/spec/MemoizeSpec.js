describe("Memoize", function(){

    // @cowboy's test function
    function basicMaths(a, b){
        return a * 10 + b;
    }

    // puts an object's key/value pairs in an array
    function objectModification(obj){
        var key,
            keys = [];

        for (key in obj){
            keys.push(key, obj[key]);
        }

        return keys;
    }

    it("receives and returns a function", function(){
        expect(typeof memoize(function(){})).toEqual("function");
    });

    it("returns a function which behaves exactly as the one you provided it", function(){
        var memoizedFn = memoize(basicMaths);
        expect(memoizedFn(11, 1)).toEqual(basicMaths(11, 1)); // 111
        expect(memoizedFn(1, 11)).toEqual(basicMaths(1, 11)); // 21
    });

    it("can handle simple objects containing primitive values", function(){
        var memoizedFn = memoize(objectModification),
            somebody = {
                name: 'John Doe',
                age: 39,
                country: 'England'
            };

        expect(memoizedFn(somebody)).toEqual(objectModification(somebody)); // ["name", "John Doe", "age", 39, "country", "England"]
    });

});
