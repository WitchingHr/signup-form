# Sign up form

## Abstract
Mock up sign up page created while learning about forms. This is the first page I've designed using the **Mobile First** philosophy. 

The process started with drawing a basic mobile layout and converting it to HTML using various div's and flex containers. Specific input elements and their respective labels were added to create the form, along with any necessary placeholder or pattern attributes.

After the page skeleton was in place, elements were styled to the point where the page resembled something passable for a sign up form. 

Next, media rules were added to the stylesheet to query the screen size so that a proper desktop layout could be constructed. This was also a first for me. Flex rules were changed to create the desktop orientation.

Once that was done, more media rules were applied to fix any unwanted mobile landscape layouts where content was cut off or overflowing. Then the page was polished with various CSS styles.

When the styling was complete, eventlisteners were implemented with custom validity functions to make sure users can't submit the form without a matching confirmation password.

## Lessons learned

 - "Mobile First" design
 - Creating forms
 - Utilizing input types with placeholders
 - Adding pattern requirements to inputs for validation
 - Styling forms
 - Using JS to add CSS attributes on :invalid inputs after form submission
 - Adding @media rules to CSS to create desktop and various mobile layouts
 - Overriding default browser styles (ie: autofill)
 - Creating custom validity functions to check for password mismatch
 - Utilizing RegEx to create pattern validation on input values

## Image
Picture of Earth is Free to Use under the Creative Commons Zero license and can be found at https://www.pexels.com/photo/planet-earth-220201/
Credit to [@pixabay](https://www.pexels.com/@pixabay/)
