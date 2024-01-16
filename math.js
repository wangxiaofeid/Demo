function getRandomInteger(maxNum = 100) {
  // 0-100的随机数，且概率均衡
  return Math.floor(Math.random() * (maxNum + 1))
}
function getRandomInteger2(maxNum = 100) {
  // 0-100的随机数，且概率均衡
  return Math.floor(Math.random() * (maxNum))
}

const CalculationEnum=['add','sub', 'mul','div'];
// const CalculationMap = {
//   'add':'+','sub':'-', 'mul':'×','div':'÷'
// };
const CalculationMap = {
  'add':'+','sub':'-', 'mul':'*','div':'/'
};

function getFactorize(thisNumber) {
  const back = [1];
  for (let i = 2;i <= thisNumber / 2; i++) {
    if (thisNumber % i === 0) {
      back.push(i)
    }
  }
  return back
}

const excludeZero = num=>num>0?(num-1):num;

const createMap = {
  add: (thisNumber, maxNumber) => {
    const firstNum = getRandomInteger(excludeZero(thisNumber));
    return [firstNum, thisNumber - firstNum]
  },
  sub: (thisNumber, maxNumber) => {
    const firstNum = getRandomInteger((maxNumber - thisNumber));
    return [firstNum + thisNumber, firstNum]
  },
  mul: (thisNumber, maxNumber) => {
    if (thisNumber === 0) {
      return [getRandomInteger(maxNumber), 0]
    }
    const factorize = getFactorize(thisNumber);
    const index = factorize[getRandomInteger(factorize.length - 1)]
    return [index, thisNumber / index]
  },
  div: (thisNumber, maxNumber) => {
    if(thisNumber===0){
      return [0, getRandomInteger(maxNumber)]
    }
    let firstNum = getRandomInteger(Math.floor(maxNumber / thisNumber))
    if (firstNum === 0) {
      firstNum = 1
    }
    return [firstNum * thisNumber, firstNum]
  }
}

function getNum(thisNumber, typeList, maxNumber) {
  if (typeList.length === 0) {
    return [thisNumber]
  }
  if (typeList.length === 1) {
    return createMap[typeList[0]](thisNumber, maxNumber)
  }
  let index = -1;
  for (let i = typeList.length-1; i>-1;i--) {
    const it = typeList[i];
    if(it === 'add' || it === 'sub'){
      index=i;
      break;
    }
  }
  if (index !== -1) {
    // 优先处理加减
    const type = typeList[index];
    const [firstNumber, secondNumber] = createMap[type](thisNumber, maxNumber);
    return [
      ...getNum(firstNumber, typeList.slice(0, index), maxNumber),
      ...getNum(secondNumber, typeList.slice(index + 1, typeList.length), maxNumber)
    ]
  } else {
    const [firstNumber, secondNumber] = createMap[typeList[typeList.length-1]](thisNumber, maxNumber);
    return [
      ...getNum(firstNumber, typeList.slice(0, typeList.length - 1), maxNumber),
      secondNumber
    ]
  }
  return []
}

function getTopic(maxNumber, length, types) {
  const resNumber = getRandomInteger(maxNumber);
  const typeList = [];
  for (let i = 0; i < length - 1; i++) {
    typeList.push(types[getRandomInteger2(types.length)])
  }
  const numList =  getNum(resNumber, typeList, maxNumber)

  console.log(typeList, numList, resNumber);

  let str = `${numList[0]}`
  for (let i = 0; i < typeList.length; i++) {
    const type = typeList[i];
    str+=`${CalculationMap[type]}${numList[i+1]}`
  }
  return str+`=${resNumber}  ${resNumber===eval(str)}`
}

 function createTopic(topicNumber, maxNumber, length, types) {
  let back = []
  while (back.length < topicNumber) {
    back.push(getTopic(maxNumber, length, types))
  }
  return back
}

console.log(createTopic(10, 10, 2, ['add','sub','div','mul']))