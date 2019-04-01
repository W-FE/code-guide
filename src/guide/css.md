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