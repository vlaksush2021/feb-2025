# Introduction

## What is CSS ?
CSS stands for Cascading Style Sheets. It’s a language used to style the visual appearance of web pages. CSS allows us to control the layout, colors, fonts, spacing, and much more, making our web pages look polished and visually appealing.


## Why CSS ?
Think of HTML as the structure or skeleton of a web page, like the walls and floors of a house. CSS is the paint, decorations, and furniture that make the house look beautiful. Without CSS, all web pages would look plain and unstyled—just a bunch of text and boxes.


## CSS Versions
CSS has evolved over time. We started with the basic version, CSS1, which was very limited. Then came CSS2, which added more layout options. Most teams today use CSS3, which introduced exciting features like animations, transitions, and flexible layouts.

CSS3 allows us to build modern, responsive websites that work across all devices—phones, tablets, and desktops.

# CSS Styling Approaches

## Introduction to CSS Property and Value
Before diving into CSS approaches, it’s important to understand how CSS works. In CSS, we style elements by using properties and values.

The property is what you want to change (e.g., color, font-size, background-color).
The value is how you want to change it (e.g., red, 16px, blue).

Example : 
```js
h1{
    color:blue; /* property:value */
}
```

## Inline CSS
Inline CSS styles are written directly inside an HTML element using the style attribute. This is useful for applying quick, small changes.

Note: Inline styling is applied directly to elements within HTML tags, which has the highest specificity but is harder to maintain.

### Demo
#### index.html
```js
<h1 style="color: blue;">Hello CSS!</h1>
```


## Internal CSS
Internal CSS is written inside the `<style>` tag within the `<head>` of the HTML file. This is good for styling a single page.

Note: Internal styles are defined within the `<style>` tag in the HTML file, and they apply only to that page.

### Demo
#### index.html
```js
<html>
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
</body>
</html>
```


## External CSS
External CSS is written in a separate `.css` file and linked to the HTML document using the `<link>` tag. This is ideal for styling multiple pages.

Note: External styles are stored in a separate file, making it easier to maintain and apply styles across multiple pages.

### Demo
#### index.html
```js
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```
#### styles.css
```css
h1 {
  color: green;
}

```



# Selectors and Styling

## Basic Selectors
### Element Selectors / Type Selectors
#### Demo
```css
p{
    color:blue;
}
```

### Class Selector
. (dot)


### ID Selector
# (hash)


### Universal Selector
* (star)
