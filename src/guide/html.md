# HTML

## 语法

 - 缩进使用tab键（4个空格）
 - 嵌套的节点应该缩进
 - 在属性上，使用双引号，不要使用单引号
 - 属性名全小写，用中划线做分隔符
 - 双标签不可忽略结束标签
 - 单标签严格采用斜线闭合
 - html5页面要有`<!DOCTYPE html>`声明

 ``` html
<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <img src="images/company_logo.png" alt="Company" />

        <h1 class="hello-world">Hello, world!</h1>
    </body>
</html>
 ```

## lang属性

应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。常用的语言列表如下：

|  lang  |  说明   |
|:------:|:------:|
|   en   |  英文   |
|  zh-cn | 中文简体 |
|  zh-hk | 中文繁体 |

``` html
<!DOCTYPE html>
<html lang="zh-cn">
	...
</html>
```

## 字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为`UTF-8`。

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    ...
</html>
```

## 属性顺序

属性应该按照特定的顺序出现以保证易读性。
- id
- class
- name
- src,for,type,href,value,max-length
- data-*
- placeholder,title,alt
- readonly,disabled

## 实用高于完美

尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；
任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

