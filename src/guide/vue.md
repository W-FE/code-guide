# Vue

## v-for指令

使用 `v-for` 指令时，不能忘记添加 `key` 属性，

``` html
// no good
<div v-for="item in list">
    {{item.name}}
</div>

// good
<div v-for="(item,index) in list" :key="index">
    {{item.name}}
</div>
```

## 更多

更多vue规范请参考[风格指南](https://cn.vuejs.org/v2/style-guide/)