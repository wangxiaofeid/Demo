/**
函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义 行为的地方。 TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用。
 */
namespace demo9 {
  // Named function  命名函数
  function add(x: number, y: number): number {
    return x + y;
  }

  // Anonymous function  匿名函数
  let myAdd = function (x: number, y: number): number {
    return x + y;
  };
  let myAdd2 = function (x: string, y: number): string {
    return x + y;
  };
  let myAdd3: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };

  // 函数的类型声明
  type FunType = (baseValue: number, increment: number) => number;
  let myAdd4: FunType = function (x, y) {
    return x + y;
  };

  function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
  }
  // let result1 = buildName("Bob"); // error, too few parameters
  // let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
  let result3 = buildName("Bob", "Adams"); // ah, just right

  function buildName2(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
  }
  let result4 = buildName2("Bob"); // works correctly now
  // let result2 = buildName2("Bob", "Adams", "Sr."); // error, too many parameters
  let result5 = buildName2("Bob", "Adams"); // ah, just right

  function buildName3(firstName: string, lastName: string = "Smith") {
    return firstName + " " + lastName;
  }
  let result6 = buildName3("Bob"); // works correctly now, returns "Bob Smith"
  let result7 = buildName3("Bob", undefined); // still works, also returns "Bob Smith"
  // let result8 = buildName3("Bob", "Adams", "Sr."); // error, too many parameters
  let result9 = buildName3("Bob", "Adams"); // ah, just right

  type sn = string | number;
  function buildName4(firstName: string, ...restOfName: sn[]) {
    return firstName + " " + restOfName.join(" ");
  }
  let employeeName = buildName4("Joseph", "Samuel", "Lucas", 1);

  // this
  let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    }
  };
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
  alert("card: " + pickedCard.card + " of " + pickedCard.suit);

  // 重载
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  function pickCard(x: { suit: string; card: number }[]): number;
  function pickCard(x: number): { suit: string; card: number };
  function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }
  let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
  ];
  let pickedCard1 = myDeck[pickCard(myDeck)];
  alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
  let pickedCard2 = pickCard(15);
  alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
