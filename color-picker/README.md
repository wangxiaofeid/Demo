---
tags:
  - Components
subtitle: ColorPicker
title: ColorPicker 颜色选择器
---

### 代码演示

#### 路由二级页

```jsx live
const Demo = (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <ColorPicker />
    </ConfigProvider>
  )
}

ReactDOM.render(<Demo />, mountNode)
```

### API

#### common

| 属性名称                | 属性说明                                    | 类型           | 默认值  | 是否必须 |
| :---------------------- | :------------------------------------------ | :------------- | :------ | :------- |
| defaultValue            | 自定义头部                                  | ReactNode      | -       | 否       |
| value                   | 自定义头部                                  | ReactNode      | -       | 否       |
| onChange                | 尾部                                        | ReactNode      | -       | 否       |
| allowClear              | 头部右侧操作                                | ReactNode      | -       | 否       |
| placeholder             | 颜色选择框默认文字                          | Function       | -       | 否       |
| mode                    | 模式，`default`为默认, `list`为固定颜色列表 | string         | default | 否       |
| showAlpha                    | 是否支持透明度选择 | boolean         | true | 否       |
| size                    | 选择框大小，可选 `large` `small`            | string         | default | 否       |
| colors                  | 推荐颜色列表                                | array          | []      | 否       |
| open                    | 是否展开下拉菜单                            | boolean        | -       | 否       |
| onDropdownVisibleChange | 展开下拉菜单的回调                          | function(open) | -       | 否       |
| dropdownClassName       | 下拉菜单的 className 属性                   | string         | -       | 否       |

