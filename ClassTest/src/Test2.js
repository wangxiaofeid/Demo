import Test1 from './Test1';

class Test2 extends Test1 {
    constructor() {
        this.name = 'Test2';
    }

    funA(name) {
        console.log('Test2 funA', name);
    }

    funB = (name) => {
        console.log('Test2 funB', name);
    };

    /**
     * 奇怪的是箭头函数在子类里面定义了没有用
     */
    funC = (name) => {
        console.log('Test2 funC', name);
    };
}

new Test2().funB('我是funB');
