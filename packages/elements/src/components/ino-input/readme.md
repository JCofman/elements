# ino-input

An input component with styles. It functions as a wrapper around the material [textfield](https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield) component.

Use this element for **simple types** like `text`, `password`, `number` or `email`. For more complex types, there are elements like a [Radio Button](../ino-radio), a [Checkbox](../ino-checkbox), a [Datepicker](../ino-datepicker) and many more.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-input')
  .addEventListener('valueChange', e =>
    alert(`The new input value is: ${e.detail}`)
  );
```

```html
<ino-input
  autocomplete="<string>"
  autofocus
  disabled
  min="<string>"
  max="<string>"
  step="<number> | 'any'"
  name="<string>"
  pattern="<string>"
  placeholder="<string>"
  required
  size="<number>"
  type="<string>"
  value="<string>"
  ino-outline
  ino-label="<string>"
  ino-icon="<string>"
  ino-icon-trailing
  ino-icon-clickable
  ino-helper="<string>"
  ino-helper-persistent
  ino-helper-validation
  ino-data-list="<string>"
>
    <datalist id="<string>">
        <option>...</option>
    </datalist>
</ino-input>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoInput } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  onValueChange(e: any) {
    alert(`The new value is ${e.detail}`);
  }

  render() {
    return (
      <InoInput
        placeholder="You can insert some text..."
        onValueChange={onValueChange}
      />
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoInput } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const Input: React.FunctionComponent<Components.InoInputAttributes> = props => {
  const { inoPlaceholder } = props;

  const onValueChange = (e: any) => {
    alert(`The new value is ${e.detail}`);
  };

  return (
    <InoInput
      placeholder="You can insert some text..."
      onValueChange={onValueChange}
    />
  );
};

class MyComponent extends Component {
  render() {
    return <Input inoPlaceholder="You can insert some text..." />;
  }
}
```

## Additional Hints

**Outlined**: The component is by default a box component with ripple underline. Provide `ino-outline` to use the material outline design.

**Labels**: The component shows a floating label containing the value of `ino-label`.

**Helper Text**: The component shows an optional helper text underneath the input field (`ino-helper`). By default, the helper text will be visible as soon as the user focuses on the input field. Set `ino-helper-persistent` to show it all the time. Furthermore, use `ino-helper-validation` to style the helper text as validation message.

**Icons**: Provide a string identifier in `ino-icon` to display a leading icon. Set `ino-icon-trailing` to position the icon after the input field. Make the icon interactive and clickable by adding `ino-icon-clickable` and listen to the `inoIconClicked` event emitted by the icon component.

**Datalist**: Provide the id of the datalist child and a list with possible selectable values will be displayed and filtered with every keystroke. See [datalist](https://developer.mozilla.org/de/docs/Web/HTML/Element/datalist) for more information.
### Control flow

The input has a controlled (unmanaged) attribute `value`. For this reason, the value doesn't change on user interaction but on updates of `value`. Listen to `valueChange`, sync it with your local state and pass the new value to the component again to change value of input.

```js
document.querySelector('ino-input').addEventListener('valueChange', e => {
  // ...
});
```

```html
<ino-input value="Here's some text"></ino-input>
```

### Event Behaviour

The component is based on a native input with additional features. Thus, the component bubbles events triggered by the native [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) like `keyup`. The native `input` and `change` event is not bubbled because the value will only change when the value attribute changes.

<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute                      | Description                                                                                                             | Type              | Default     |
| --------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------- |
| `autocomplete`              | `autocomplete`                 | The autocomplete property of this element.                                                                              | `string`          | `undefined` |
| `autofocus`                 | `autofocus`                    | The autofocus of this element.                                                                                          | `boolean`         | `undefined` |
| `disabled`                  | `disabled`                     | Disables this element.                                                                                                  | `boolean`         | `undefined` |
| `inoDataList`               | `ino-data-list`                | The id of the datalist child                                                                                            | `string`          | `undefined` |
| `inoHelper`                 | `ino-helper`                   | The optional helper text.                                                                                               | `string`          | `undefined` |
| `inoHelperCharacterCounter` | `ino-helper-character-counter` | Displays the number of characters. The maxlength-property must be set. This helper text will be displayed persistently. | `boolean`         | `undefined` |
| `inoHelperPersistent`       | `ino-helper-persistent`        | Displays the helper permanently.                                                                                        | `boolean`         | `undefined` |
| `inoHelperValidation`       | `ino-helper-validation`        | Styles the helper text as a validation message.                                                                         | `boolean`         | `undefined` |
| `inoIconLeading`            | `ino-icon-leading`             | Positions the icon at the beginning of the input field.                                                                 | `boolean`         | `false`     |
| `inoIconTrailing`           | `ino-icon-trailing`            | Positions the icon trailing after the input field.                                                                      | `boolean`         | `false`     |
| `inoLabel`                  | `ino-label`                    | The optional floating label of this input field.                                                                        | `string`          | `undefined` |
| `inoOutline`                | `ino-outline`                  | Styles the input field as outlined element.                                                                             | `boolean`         | `undefined` |
| `max`                       | `max`                          | The max value of this element.                                                                                          | `string`          | `undefined` |
| `maxlength`                 | `maxlength`                    | Limits the number of possible characters to the given number                                                            | `number`          | `undefined` |
| `min`                       | `min`                          | The min value of this element.                                                                                          | `string`          | `undefined` |
| `name`                      | `name`                         | The name of this element.                                                                                               | `string`          | `undefined` |
| `pattern`                   | `pattern`                      | The validation pattern of this element.                                                                                 | `string`          | `undefined` |
| `placeholder`               | `placeholder`                  | The placeholder of this element.                                                                                        | `string`          | `undefined` |
| `required`                  | `required`                     | Marks this element as required.                                                                                         | `boolean`         | `undefined` |
| `size`                      | `size`                         | The size of this element.                                                                                               | `number`          | `undefined` |
| `step`                      | `step`                         | The step value of this element. Use `any` for decimal numbers                                                           | `"any" \| number` | `1`         |
| `type`                      | `type`                         | The type of this element (default = text).                                                                              | `string`          | `'text'`    |
| `value`                     | `value`                        | The value of this element. (**unmanaged**)                                                                              | `string`          | `''`        |


## Events

| Event         | Description                                                                    | Type                  |
| ------------- | ------------------------------------------------------------------------------ | --------------------- |
| `inoBlur`     | Emits when the input field is blurred                                          | `CustomEvent<void>`   |
| `inoFocus`    | Emits when the input field is focused                                          | `CustomEvent<void>`   |
| `valueChange` | Emits when the user types something in. Contains typed input in `event.detail` | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ino-datepicker](../ino-datepicker)

### Depends on

- [ino-label](../ino-label)

### Graph
```mermaid
graph TD;
  ino-input --> ino-label
  ino-datepicker --> ino-input
  style ino-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*