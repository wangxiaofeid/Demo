class Test1 {
    constructor() {
        this.name = 'Test1';
    }

    funA(name) {
        console.log('funA', name);
    }

    funB = (name) => {
        console.log('funB', name);
    };

    funC = function (name) {
        console.log('funB', name);
    };
}
