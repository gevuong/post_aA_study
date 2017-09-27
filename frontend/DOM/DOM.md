###What is the DOM?

- DOM stands for Document Object Model, and it is a representation of a webpage that JavaScript can use to navigate and make changes to a web page.

- Just like a city map is a model of a city that helps you get around town, the DOM is a map of a webpage that JavaScript can use to navigate and make changes to a web page. However, unlike a city map, changes that JavaScript makes to the DOM alter the web page. Imagine if drawing a street on a map made that street appear in real life. Well, that's kind of how it works in the browser.

- The document is a global object (which is a property of the window object) representing HTML and content of a web page. With JS, you can select and change different parts of the webpage by interacting with the document object.

- The DOM represents a web page as a family tree-like structure. In a HTML webpage, you have a head and a body. Nested inside those, you have other elements. The head contains a title element, and the body contains heading, paragraph, <ul> elements, etc., and a <ul> element would have <li> elements inside. These nested elements can all be thought of as a tree.

- The document element, or node, would be the root node of the family tree. The head and body nodes sprout like branches leading to other branches. The leaves of a tree, like a heading element or list item nodes, represent the most deeply nested tags of an HTML page.

- The body is the parent of the <h1>, <p> and <ul> nodes. The <li> nodes are all children of the <ul> node. And the <li> nodes are all siblings of each other. JavaScript is going to use these family relationships and this tree-like model to understand and alter the structure of webpages.

###Basic Tasks JS can do with the DOM
1. Selecting elements
2. Read or manipulating elements
3. Respond and listen to user event or actions
