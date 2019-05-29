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

- 类名使用小写字母，以`-`分隔
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

## class常用关键词

- 布局类：header, footer, container, main, content, aside, page, section
- 包裹类：wrap, inner
- 区块类：region, block, box
- 结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span
- 列表类：list, item, field
- 主次类：primary, secondary, sub, minor
- 大小类：s, m, l, xl, large, small
- 状态类：active, current, checked, hover, fail, success, warn, error, on, off
- 导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
- 交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay
- 星级类：rate, star
- 分割类：group, seperate, divider
- 等分类：full, half, third, quarter
- 表格类：table, tr, td, cell, row
- 图片类：img, thumbnail, original, album, gallery
- 语言类：cn, en
- 论坛类：forum, bbs, topic, post
- 方向类：up, down, left, right
- 语义类：btn, close, ok, cancel, switch, link, title, info, intro, more, icon, form, label, search, contact, phone, date, email, user; view, loading
- 容器: container/wrap
- 整体宽度：wrapper
- 页头：header
- 内容：content
- 页面主体：main
- 页尾：footer
- 侧栏：sidebar
- 栏目：column
- 中间内容：center
- 导航：nav
- 子导航：subnav
- 顶导航：topnav
- 边导航：sidebar
- 左导航：leftsidebar
- 右导航：rightsidebar
- 边导航图标：sidebarIcon
- 菜单：menu
- 子菜单：submenu
- 标题: title
- 标志：logo
- 登录：login
- 登录条：loginbar
- 注册：regsiter
- 产品：products
- 产品价格：productsPrices
- 产品评论：productsReview
- 编辑评论：editor-review
- 最新产品：news-release
- 广告/标语：banner
- 摘要:summary
- 生产商：publisher
- 缩略图：screenshot
- 常见问题：faqs
- 关键词：keyword
- 博客：blog
- 论坛：forum
- 搜索：search
- 搜索输入框：search-input
- 搜索输出：search-output
- 搜索结果：search-results
- 加入我们：joinus
- 状态：status
- 按钮：btn
- 滚动：scroll
- 标签页：tab
- 文章列表：list
- 提示信息：msg/message
- 当前的: current
- 小技巧：tips
- 皮肤：skin
- 充值：pay
- 活动：activities
- 推广：promotion
- 公告：announcement
- 排行：ranking
- 公司简介：companyProfile
- 公司设备：equipment
- 公司荣誉：glories
- 企业文化：culture
- 企业规模：scaleScale
- 营销网络：salesNetwork
- 组织机构：organization
- 技术力量：technology
- 分支机构：branches
- 企业资质：EnterpriseQualification
- 公司实力：strengthStrength
- 经营理念：operationPrinciple
- 经理致辞：manager_oration
- 发展历程：developmentHistory
- 工程案例：EngineeringProjects
- 分类浏览：browseByCategory
- 应用领域：applicationFields
- 人力资源：humanResourceHr
- 领导致辞： leader_oration
- 客户留言：customerMessage
- 客户服务：customerService
- 您的要求：yourRequirements
- 销售信息：salesInformation
- 招商：EnterpriseEstablishing
- 教育培训：EducationTraining
- 在线交流：onlineCommunication
- 质量认证：qualityCertification
- 合作加盟：joinInCooperation
- 产品描述：productsDescription
- 业务范围：businessScope
- 产品销售：salesSales
- 联系我们：contactUs
- 信息发布：Information
- 返回首页：homepage
- 产品定购：order
- 电子商务：E-business
- 版权所有：copy Right
- 友情连结：hot Link
- 行业新闻：tradeNews
- 行业动态：trends
- 邮编：postalCodeZipcode
- 新闻动态：newsTrends
- 公司名称：companyName
- 销售热线：salesHot_Line
- 联系人：contactPerson
- 建设中：InConstruction
- 证书：certificate
- 地址：ADD/Add
- 电话：TEL/Tel
- 传真：FAX/Fax
- 产品名称：productName
- 产品说明：description
- 价格：price
- 品牌：brand
- 规格：specification
- 尺寸：size
- 生产厂家：manufacuturer
- 型号：model
- 产品标号：Item No
- 技术指标：techniqueData
- 产品描述：description
- 产地：productionPlace
- 用途：application
- 在线订购：on_lineOrder
- 招标：bidInviting
- 综述：general
- 业绩：achievements
- 大事：greatEvent
- 动态：trends
- 服务：service
- 投资：Investment
- 行业：Industry
- 规划：programming
- 环境：environment
- 发送：delivery
- 提交：submit
- 重写：reset
- 社区：community
- 业务：business
- 在线调查：onlineInquiry
- 下载中心：download
- 意见反馈：feedback
- 常见问题：FAQ
- 中心概况：generalProfile
- 游乐园：amusementPark
- 专题报道：specialReport
- 图标: icon
- 注释：note
- 指南：guide
- 服务：service
- 热点：hot
- 新闻：news
- 下载：download
- 投票：vote
- 商标：label/branding
- 当前位置：breadcrumb/loc
- 购物车：shop
- 标签：tag
- 信誉：siteinfo-credits
- 网站信息：siteinfo
- 法律声明：siteinfo-legal
- 合作伙伴：partner
- 友情链接：friendlink
- 版权：copyright