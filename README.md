1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:getElementById("id") → grabs one element by ID. Returns the element
use it when i know the ID.
getElementsByClassName("class") → grabs all elements with a class we use it for 
selecting multiple classes
querySelector("selector") → grabs the first element that matches a CSS selector.
querySelectorAll("selector") → grabs all matching elements. use it for css style 
section

2.How do you create and insert a new element into the DOM?
ans: 
const newDiv = document.createElement("div")
newDiv.textContent = "Hello, I’m a new div"
newDiv.classList.add("my-box")
document.body.appendChild(newDiv)

3.What is Event Bubbling and how does it work?

ans: Event bubbling is when an event starts on the element i clicked  and then bubbles up to its parent elements.
for example if i click a button inside a div, the click go to  the button first, then on the div, then on the body.

4.What is Event Delegation in JavaScript? Why is it useful?

ans: Event delegation is something like where i add one event listener to a parent element instead of adding listeners to many child elements. The event bubbles up from the child and the parent catches it.

5.What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault() = block the browsers default behavior.

stopPropagation() = block the event from bubbling to parents.
