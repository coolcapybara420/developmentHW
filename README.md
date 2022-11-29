# Development

### Link to Deployed Website
https://coolcapybara420.github.io/developmentHW/

### Goal and Value of the Application
For this assignment, I expanded on the React studio to build an e-commerce application for the bakery items from the React studio. Now, in addition to seeing the cart items and price of the cart, users can filter based on the type of bakery good, in addition to filtering goods shown based on cuisine type (e.g. French baked goods).
The items are also sorted by increasing price.
### Usability Principles Considered
For a clean display, a grid is used to show the baked good images and descriptions. The filters are placed on the top of the screen for easy access.
### Organization of Components
The bakery items are displayed using a BakeryItem component. This component displays the baked good's image, price, type, etc.
In the app, components from Material UI are also used to add checkboxes and radio button(s) for front-facing filter and sort functionality respectively. These are placed at the front of the returned stuff from App.js
### How Data is Passed Down Through Components
The checkbox values (the "checked" value) are placed in the Checkbox components. Both the checkboxes and radio button for sorting use the "onChange" prop, where a function is passed thru to handle a change in the checkbox or radio button.
For the BakeryItem component, data is passed down thru props in the <BakeryItem /> components returned in App.js, and this data is handled in the BakeryItem component. There, information about the bakery item is extracted from props, such as the item name, type, etc. I also pass in functions like setTotalPrice() and setCart() so that when a user presses a button to add/remove an item, these functions can modify state variables.
### How the User Triggers State Changes
The checkbox values in the Checkbox components give access for the "Reset" button to reset the filters and checkboxes.
Each filter is a state boolean variable. For example, filtering for "pastry" is true or false. When the filter is applied, the onChange prop calls a function to change the appropriate state variable (I also use regular variables associated with each filter state variable to render changes accurately). When the "Reset" button is pressed, all filter state variables are set to false so that all items are displayed.

State variables are also used to modify the list of items displayed, which is changed by the checkboxes clicked on by the user. 
When a user clicks the add/remove item button, setTotalPrice() is called to change the price state variable. If adding an item, setCart() is called to add an item to the cart state variable, and removeCart() is called to remove an item from the cart.

