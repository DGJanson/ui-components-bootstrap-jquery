import $ from 'jquery';
import 'bootstrap';

// Module that contains functions for generating ui elements.
// To make generating ui in other modules less verbose
// All functions should be callable from other modules, so are exported

export class ui_content {
  constructor (aFunction) {
    if (typeof aFunction === "function") {
      this.element = aFunction();
    } else {
      console.error("Did not receive a function in create ui_content constructor");
    }
  }

  getElement () {
    return(this.element);
  }

  /**
   * setId - Set the id of the passed element
   *
   * @param  {type} value   the id
   * @return {type}         the element passed
   */
  setId (value) {
    this.element.attr("id", value);
    return(this);
  }


  /**
   * setClass - set the class of the passed element
   *
   * @param  {type} value   the id
   * @return {type}         the element passed
   */
  setClass (value) {
    this.element.attr("class", value);
    return(this);
  }

  /**
   * setText - set the text of the passed element
   *
   * @param  {type} value   the text
   * @return {type}         the element passed
   */
  setText (value) {
    this.element.html(value);
    return(this);
  }

  /**
   * setValue - set the value of the passed element
   *
   * @param  {type} value   the value
   * @return {type}         the element passed
   */
  setValue (value) {
    this.element.val(value);
    return(this);
  }


  /**
   * setSrc - Set the source of an image. Needs to contain an image element obviously.
   * If does not contain an image, this function will do nothing.
   *
   * @param  {type} value src Value
   * @return {type}       the element passed
   */
  setSrc (value) {
    let img = this.element.find("img");
    if(img) {
      img.attr("src", value);
    }
    return(this);
  }

  addClickListener (aFunction) {
    this.element.click(aFunction);
    return(this);
  }
}

export class ui_column {
  constructor (type) {
    this.element = $("<div>", {
      class: type
    });
    this.content = [];
  }

  getElement () {
    return(this.element);
  }

  addClass (aClass) {
    this.element.addClass(aClass); // This should call the jQuery method
    return(this);
  }

  setId (id) {
    this.element.attr("id", id);
    return(this);
  }

  addContent (aFunction) {
    let newContent = new ui_content(aFunction);
    this.content.push(newContent);
    this.element.append(newContent.getElement());
    return(newContent);
  }

  // The jquery object is made elsewhere
  addJqueryContent (jqueryObject) {
    let newContent = new ui_content(function () { // Create quick callback that simply returns the jqueryobject
      return(jqueryObject);
    });
    this.content.push(newContent);
    this.element.append(jqueryObject);
    return(newContent);
  }

  getContent (index) {
    if (!index || index < 0 || index >= this.content.length) { // invalid index
      console.error("Asked for invalid index!");
      return(null);
    } else {
      return(this.content[index]);
    }
  }
}

export class ui_row {
  constructor () {
    this.element = $("<div>", {
      class: "row"
    });
    this.cols = [];
  }

  getElement () {
    return(this.element);
  }

  addClass (aClass) {
    this.element.addClass(aClass); // This should call the jQuery method
    return(this);
  }

  setId (id) {
    this.element.attr("id", id);
    return(this);
  }

  addColumn (type) {
    if (!type) { // if not defined, simply use the default col
      type = "col";
    }
    let newCol = new ui_column(type);
    this.cols.push(newCol);
    this.element.append(newCol.getElement());
    return(newCol);
  }

  getColumn (index) {
    if (!index || index < 0 || index >= this.cols.length) { // invalid index
      console.error("Asked for invalid index!");
      return(null);
    } else {
      return(this.cols[index]);
    }
  }
}

export class ui_container {
  constructor () {
    this.element = $("<div>", {
      class: "container-sm"
    });
    this.rows = [];
  }

  getElement () {
    return(this.element);
  }

  addClass (aClass) {
    this.element.addClass(aClass); // This should call the jQuery method
    return(this);
  }

  setId (id) {
    this.element.attr("id", id);
    return(this);
  }

  addRow () {
    let newRow = new ui_row();
    this.rows.push(newRow);
    this.element.append(newRow.getElement());
    return newRow;
  }

  getRow (index) {
    if (!index || index < 0 || index >= this.rows.length) { // invalid index
      console.error("Asked for invalid index!");
      return(null);
    } else {
      return(this.rows[index]);
    }
  }
}

export class ui_factory {
  /**
   * generateDiv - Create a div element. Use the settings functions to set
   * attributes like class, id, etc.
   *
   * @return {jQueryObject}         The element that was created
   */
  generateDiv () {
    let newDiv = $("<div>");
    return(newDiv);
  }

  /**
   * generateP - Create a <p> element. Use the settings functions to set
   * attributes like class, id, etc.

   * @return {jQueryObject}       The element that was created
   */
  generateP () {
    let newP = $("<p>");
    return(newP);
  }

  /**
   * generateH1 - Create a <h1> element. Use the settings functions to set
   * attributes like class, id, etc.
   *
   * @return {jQueryObject}       The element that was created
   */
  generateH1() {
    let newElement = $("<h1>");
    return(newElement);
  }

  /**
   * generateH2 - Create a <h2> element. Use the settings functions to set
   * attributes like class, id, etc.
   *
   * @return {jQueryObject}       The element that was created
   */
  generateH2() {
    let newElement = $("<h2>");
    return(newElement);
  }

  /**
   * generateH3 - Create a <h3> element. Use the settings functions to set
   * attributes like class, id, etc.
   *
   * @return {jQueryObject}       The element that was created
   */
  generateH3() {
    let newElement = $("<h3>");
    return(newElement);
  }

  generateImg() {
    let newElement = $("<div>");
    newElement.append($("<img>", {
      class: "defaultUI"
    }));
    return(newElement);
  }
}
