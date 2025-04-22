# HtaTable

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

Compatible with Angular versions 17 and above.

Uses **Bootstrap** CSS and **Font Awesome**, but it is up to you to choose how you will provide them, as there are many ways to provide them.

## Installation

```
npm install --save hta-table
```

Remember to provide the Bootstrap and Font Awesome CSS!

## Basic Usage

`*.component.html`:

```html
<lib-hta-table [listofObject]="objectKeys" [tableHeaderList]="tableHeaders" [tableBodyList]="tableData" [isEditable]="true" [isDeleteble]="true" (callbackEdit)="onEdit($event)" (callbackDelete)="onDelete($event)" />
```

`*.component.ts`:

```ts
export class TableComponent {
  objectKeys = [{ key: "foo" }, { key: "bar" }];
  tableHeaders = [{ ar: "قائمة 1" }, { ar: "قائمة 2" }];
  tableData = [
    { foo: "تجربة 1", bar: "تجربة 2" },
    { foo: "تجربة 3", bar: "تجربة 4" },
  ];

  onEdit(event: any) {
    // YOUR CODE HERE
  }

  onDelete(event: any) {
    // YOUR CODE HERE
  }
}
```

This shows only the bare table with its data and Edit and Delete callbacks, but you can customise further beyond the defaults.

## Inputs

The library provides multiple inputs for customising how it works and looks:

- `tableHeaderList`: **Required.** The array of headers to show in the table. You need to set each header as an `ar` parameter in an object, akin to the example above.
- `listofObject`: **Required.** The array of keys the table will reference to be able to show the data. You need to set each key as a `key` parameter in an object.
- `tableBodyList`: **Required.** The data that will be shown in the table. You can format this as you need, but adjust `tableHeaderList` and `listofObject` for the table to cooperate with your `tableBodyList`.
- `isHidden`: Boolean to choose whether to show the row ID or not. Note, if this boolean is `true`, the row ID will be **shown**.
- `tableStyle`: A string of CSS classes to add to the table. This allows you to customise how the table looks, but you may need `::ng-deep`.
- `isEditable`: Boolean to select whether the rows can be edited or not. If `true`, a yellow Edit icon will be available to click to edit the corresponding row.
- `isDeleteble`: Boolean to select whether the rows can be deleted or not. If `true`, a red Trash icon will be available to click to delete the corresponding row.
- `isAdding`: Boolean to select whether the rows can be filled with details added or not. If `true`, a green Add icon will be available to click to add the corresponding row's details.
- `isShowing`: Boolean to select whether the rows' details can be shown or not. If `true`, a blue Show icon will be available to click to show the corresponding row's details.

## Outputs

The library provides four outputs corresponding to row events:

- `callbackEdit`: Event fired when the user clicks on a row's Edit button. It also provides the row's data, including the details, in the `$event`.
- `callbackDelete`: Event fired when the user clicks on a row's Trash button. It also provides the row's data, including the details, in the `$event`.
- `callbackAdded`: Event fired when the user clicks on a row's Add button. It also provides the row's data, including the details, in the `$event`.
- `callbackShow`: Event fired when the user clicks on a row's Show button. It also provides the row's data, including the details, in the `$event`.
