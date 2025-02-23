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



<hr />

## Selectors and Styling
Selectors in CSS are like "pointers" that tell the browser which HTML elements to apply styles to. We use different types of selectors to target elements in various ways.


# Selectors
## Basic Selectors


### Element Selector
The element selector targets all elements of a specific type, like all `<p>`, `<h1>`, or `<div>` tags.

Note: This applies styles to all instances of the specified HTML tag.

#### Demo
```css
p{
    color:blue;
}
```


### Class Selector
The class selector targets elements that have a specific class attribute. Classes can be reused across multiple elements.

Note: To target a class, we use a period (.) followed by the class name.

#### Demo
```css
.highlight {
  background-color: yellow;
}
/* This will give all elements with the class "highlight" a yellow background. */
```


### ID Selector
The ID selector targets a specific element with a unique id attribute. IDs should be unique within a page.

Note: To target an ID, we use a hash (#) followed by the ID name.

#### Demo
```css
#main-heading {
  color: green;
}
/* This will make the element with the ID "main-heading" green. */
```

### CSS Priority (Specificity)
When multiple styles are applied to the same element, CSS uses specificity to determine which rule takes priority. Specificity is like the "weight" of a rule—the higher the specificity, the more likely it will be applied.

```bash
    Inline styles (inside the style attribute of an element) have the `highest` priority.  

    ID selectors have a higher specificity than class or element selectors`.

    Class selectors have lower specificity than IDs but higher than element selectors.

    Element selectors have the lowest specificity and are overridden by classes, IDs, and inline styles.

```
**Note:**

Important!
You can use `!important` to force a style to override others. However, this should be used sparingly as it bypasses the natural flow of CSS specificity.
```css
p {
  color: black !important;
}

```


## Advanced Selectors

### Grouping Selector
div,p

### Descendant Selector

div p

### Child Selector
div>p

### Adjacent Sibling Selector
div+p

### General Sibling Selector
div~p


# CSS Properties - I

## Font and Text Properties
```css
            .p1{
                /* font-family: 'Times New Roman', Times, serif;
                font-size: 20px;
                font-weight:600;
                font-style: italic; */

                font:bolder italic 24px 'Mono Type Corsiva','Arial'
            }
            .p2{
                text-align: left;
                text-transform:lowercase;
                letter-spacing: 2;
                line-height: 1;
                text-indent: 15;
               
                text-decoration:dotted;
                text-decoration-line:underline ;
            
            }
```


## Color Properties

## Backgroud Proprtes



# Box Model
Content
padding
border
margin

# Shadow
text
box
