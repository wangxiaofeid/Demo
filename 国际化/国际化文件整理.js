// 生成对象
`
`.split(/\s/).filter(i=>!!i).map(i=>i.replace('.js', '')).join(',');

// 生成导入文件
`
`.split(/\s/).filter(i=>!!i).map(i=>i.replace('.js', '')).map(i=>`import ${i} from './${i}';`).join('');

