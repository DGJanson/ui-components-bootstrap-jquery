Convencience methods for creating html elements using jQuery and bootstrap.

Uses imports for jquery and bootstrap, so make sure these are loaded in package.json or your dependency manager of choice.

Otherwise just copy the create-ui-components.js file to an appropriate src location and you can use the classes and methods exposed.

Usage
-----

Bootstrap uses a nested grid system. See the [bootstrap documentation](https://getbootstrap.com/) for more info. This javascript has some convenience methods for creating bootstrap elements:

container -> row -> column -> content

All methods return themselves, so you can chain methods. Each element allows you to set class and or id for further manipulation. **Keep in mind that the methods return the classes of the javascript file, NOT the jquery elements themselves!** In order to get the corresponding elements, call the getElement() method on the create-ui class.

Examples
--------

Create container and add to body:

'''javascript
let container = new ui\_container();
$("body").append(container.getElement()); // Add the element, NOT the class
'''

Create two columns with some text:

'''javascript
let factory = new ui\_factory(); 
let row = new ui\_container().addRow().addClass("custom-row-class");
// addColumn without parameter defaults to "col" class
row.addColumn().addContent(factory.generateP) // Do not execute function, but pass as callback.
  .setText("Example text") // This sets the text on <p> the content just created.
  .setId("id-p"); // This sets the id of the <p> element

// addColumn can accept a different column class
row.addColumn("col-6").addContent(factory.generateP)
  .setText("More example text)
  .setId("id-another-p");
'''

Factory
-------

The ui\_factory contains some convenience methods for creating html elements. Pass the a method as a callback to ui\_column.addContent to create said element.

The following elements are supported:
- generateDiv
- generateP
- generateH1
- generateH2
- generateH3
- generateImg (creates a div containing an <img>. Call content.setSrc(url) to set img contents.

Once created you can use the following methods to manipulate the created contents:
- setClass(classes) - overrides existing classes!
- setText(text) - actually sets $(element).html
- setValue(value) 
- setSrc(url) - see img above
- addClicklistener(callback) - pass a function that is added on click

Note that you can create custom elements and adding them by calling ui\_container.addJqueryContent(jQueryObject)

Also note that you can always get the underlying jquery object by calling getElement on the ui\_content class, or any ui\_ class for that matter
