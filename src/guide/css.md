# CSS

## 缩进和分号

缩进使用tab键（4个空格），每个属性声明末尾都要加分号。

``` css
.element {
    position: absolute;
    top: 10px;
    left: 10px;

    border-radius: 10px;
    width: 50px;
    height: 50px;
}
```

## 空格

以下几种情况不需要空格：

- 属性名后
- 多个规则的分隔符','前
- !important '!'后
- 属性值中'('后和')'前
- 行末不要有多余的空格

以下几种情况需要空格：

- 属性值前
- 属性值中的','后
- 选择器'>', '+', '~'前后
- '{'前
- !important '!'前
- @else 前后
- 注释'/*'后和'*/'前

``` css
/* not good */
.element {
    color :red! important;
    background-color: rgba(0,0,0,.5);
}

/* good */
.element {
    color: red !important;
    background-color: rgba(0, 0, 0, .5);
}

/* not good */
.element ,
.dialog{
    ...
}

/* good */
.element,
.dialog {

}

/* not good */
.element>.dialog{
    ...
}

/* good */
.element > .dialog{
    ...
}

/* not good */
.element{
    ...
}

/* good */
.element {
    ...
}

/* not good */
@if{
    ...
}@else{
    ...
}

/* good */
@if {
    ...
} @else {
    ...
}
```

## 空行

以下几种情况需要空行：

- 文件最后保留一个空行
- '}'后最好跟一个空行

``` css
/* good */
.element {
    ...
}

.dialog {
    color: red;

    &:after {
        ...
    }
}
```

## 换行

以下几种情况不需要换行：

- '{'前

以下几种情况需要换行：

- '{'后和'}'前
- 每个属性独占一行
- 多个规则的分隔符','后

``` css
/* not good */
.element
{color: red; background-color: black;}

/* good */
.element {
    color: red;
    background-color: black;
}

/* not good */
.element, .dialog {
    ...
}

/* good */
.element,
.dialog {
    ...
}
```

## 注释

- 注释统一用'/* */'；
- 缩进与下一行代码保持一致；
- 可位于一个代码行的末尾，与代码间隔一个空格。

``` css
/* Modal header */
.modal-header {
    ...
}

/*
 * Modal header
 */
.modal-header {
    ...
}

.modal-header {
    /* 50px */
    width: 50px;

    color: red; /* color red */
}
```

## 引号

- 最外层统一使用双引号；
- url的内容要用引号；
- 属性选择器中的属性值需要引号。

``` css
.element:after {
    content: "";
    background-image: url("logo.png");
}

li[data-type="single"] {
    ...
}
```

## 命名

- 类名使用小写字母，以中划线分隔
- id采用小驼峰命名
- css预处理器中的变量、函数、混合采用小驼峰命名

``` css
/* class */
.element-content {
    ...
}

/* id */
#myDialog {
    ...
}

/* less变量 */
@colorBlack: #000;

/* sass/scss变量 */
$colorBlack: #000;

/* 函数 */
@function pxToRem($px) {
    ...
}
```

## 颜色

- 颜色16进制用小写字母，并且尽量用简写

``` css
/* not good */
.element {
    color: #ABCDEF;
    background-color: #001122;
}

/* good */
.element {
    color: #abcdef;
    background-color: #012;
}
```

## 属性简写

属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰。


需要属性简写的有：

- margin
- padding
- border

不需要属性简写的有：

- font
- background
- transition
- animation

``` css
/* not good */
.element {
    border-width: 1px;
    border-style: solid;
    border-color: #000;
    transition: opacity 1s linear 2s;
}

/* good */
.element {
    border: 1px solid #000;
    transition-delay: 2s;
    transition-timing-function: linear;
    transition-duration: 1s;
    transition-property: opacity;
}
```

## 媒体查询

尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。

``` css
.element {
    ...
}

.element-avatar{
    ...
}

@media (min-width: 480px) {
    .element {
        ...
    }

    .element-avatar {
        ...
    }
}
```

## LESS/SCSS相关

- `@import` 引入的文件不需要结尾的`.less`或`.scss`
- 嵌套最多不能超过5层

## 杂项

- 不允许有空的规则
- 元素选择器用小写字母
- 去掉小数点前面的`0`
- 去掉数字中不必要的小数点和末尾的`0`
- 属性值`0`后面不要加单位
- 同个属性不同前缀的写法需要在垂直方向保持对齐，具体参照右边的写法
- 无前缀的标准属性应该写在有前缀的属性后面
- 不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系
- 不要在一个文件里出现两个相同的规则
- 用 `border: 0;` 代替 `border: none;`;
- 选择器不要超过4层
- 尽量少用`*`选择器

``` css
/* not good */
.element {
}

/* not good */
LI {
    ...
}

/* good */
li {
    ...
}

/* not good */
.element {
    color: rgba(0, 0, 0, 0.5);
}

/* good */
.element {
    color: rgba(0, 0, 0, .5);
}

/* not good */
.element {
    width: 50.0px;
}

/* good */
.element {
    width: 50px;
}

/* not good */
.element {
    width: 0px;
}

/* good */
.element {
    width: 0;
}

/* not good */
.element {
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;

    background: linear-gradient(to bottom, #fff 0, #eee 100%);
    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background: -moz-linear-gradient(top, #fff 0, #eee 100%);
}

/* good */
.element {
    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
            border-radius: 3px;

    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
    background:         linear-gradient(to bottom, #fff 0, #eee 100%);
}
```