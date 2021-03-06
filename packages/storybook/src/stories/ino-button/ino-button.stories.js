import { boolean, color, select, text } from '@storybook/addon-knobs';

import componentReadme from '_local-elements/src/components/ino-button/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-button.scss';

export default {
  title: 'Buttons/<ino-button>',
  parameters: {
    actions: {
      handles: [
        'click .customizable-button',
        'reset .reset-form',
        'submit .submit-form',
      ],
    },
  },
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /* html */ `
    <div class="story-button">
      <style>
          ino-button.customizable-button {
            --button-color-primary: ${color(
              '--button-color-primary',
              '#3d40f5',
              'Custom Properties'
            )};
            --button-color-primary-light: ${color(
              '--button-color-primary-light',
              '#5d60f7',
              'Custom Properties'
            )};
            --button-color-primary-dark: ${color(
              '--button-color-primary-dark',
              '#0d10f3',
              'Custom Properties'
            )};
            --button-color-primary-contrast: ${color(
              '--button-color-primary-contrast',
              '#fff',
              'Custom Properties'
            )};
            --button-color-primary-shadow-light: ${color(
              '--button-color-primary-shadow-light',
              'rgba(61, 214, 245, 0.14)',
              'Custom Properties'
            )};
            --button-color-primary-shadow-dark: ${color(
              '--button-color-primary-shadow-light',
              'rgba(61, 64, 245, 0.3)',
              'Custom Properties'
            )};
            --button-color-secondary: ${color(
              '--button-color-secondary',
              '#9ccd00',
              'Custom Properties'
            )};
            --button-color-secondary-light: ${color(
              '--button-color-secondary-light',
              '#bbe962',
              'Custom Properties'
            )};
            --button-color-secondary-dark: ${color(
              '--button-color-secondary-dark',
              '#93bf00',
              'Custom Properties'
            )};
            --button-color-secondary-contrast: ${color(
              '--button-color-secondary-contrast',
              '#fff',
              'Custom Properties'
            )};
            --button-color-secondary-shadow-light: ${color(
              '--button-color-secondary-shadow-light',
              'rgba(156, 205, 0, 0.14)',
              'Custom Properties'
            )};
            --button-color-secondary-shadow-dark: ${color(
              '--button-color-secondary-shadow-light',
              'rgba(181, 230, 23, 0.30)',
              'Custom Properties'
            )};
          }
      </style>
      <ino-button
        class="customizable-button"
        ino-color-scheme="${select(
          'ino-color-scheme',
          ['primary', 'secondary', 'white', 'grey'],
          'primary',
          'General'
        )}"
        ino-fill="${select(
          'ino-fill',
          ['solid', 'outline', 'inverse'],
          'solid',
          'General'
        )}"
        ino-dense="${boolean('ino-dense', false, 'General')}"
        disabled="${boolean('disabled', false, 'General')}"
        ino-loading="${boolean('ino-loading', false, 'General')}"
        ino-edge-mirrored="${boolean('ino-edge-mirrored', false, 'General')}"
      >
        ${text('<slot />', 'Customizable button', 'General')}
      </ino-button>

      <h4>Variations</h4>
      <div class="button-row">
        <ino-button ino-fill="solid">Solid Primary</ino-button>
        <ino-button ino-fill="outline">Outline Primary</ino-button>
        <ino-button ino-fill="inverse">Inverse Primary</ino-button>
      </div>
      <div class="button-row">
        <ino-button ino-fill="solid" ino-color-scheme="secondary">Solid Secondary </ino-button>
        <ino-button ino-fill="outline" ino-color-scheme="secondary">Outline Secondary</ino-button>
        <ino-button ino-fill="inverse" ino-color-scheme="secondary">Inverse Secondary</ino-button>
      </div>
      <div class="button-row">
        <ino-button ino-fill="outline" ino-color-scheme="grey">Outline Grey</ino-button>
        <div class="white-button">
            <ino-button ino-fill="outline" ino-color-scheme="white">Outline White</ino-button>
        </div>
      </div>

      <h4>With icons</h4>
      <ino-button>
        <ino-icon ino-icon="info" slot="ino-icon-leading"></ino-icon>
        Button Icon left
      </ino-button>
      <ino-button>
        <ino-icon ino-icon="info" slot="ino-icon-trailing"></ino-icon>
        Button Icon right
      </ino-button>

      <h4>States</h4>
      <div class="button-row">
        <ino-button disabled>Disabled</ino-button>
        <ino-button disabled ino-fill="outline">Disabled outlined</ino-button>
        <ino-button ino-edge-mirrored="true">With mirrored edge</ino-button>
        <ino-button ino-dense="true">Dense</ino-button>
        <ino-button ino-loading="true">Loading button</ino-button>
        <ino-button ino-loading="true" ino-fill="outline">Loading button</ino-button>
       </div>
    </div>
  `;

export const Forms = () => /*html*/ `
    <script>
      const form = querySelector('form');
      form.addEventListener('submit', e => e.preventDefault());
    </script>

    <div class="story-button">
      <h4>Form submit</h4>
      <form class="submit-form" onsubmit="return false;">
        <ino-button type="submit">Button to submit parent form</ino-button>
        <ino-button type="submit" disabled>Disabled button does not submit form</ino-button>
      </form>

      <h4>Form reset</h4>
      <form class="reset-form">
        <ino-input class="reset-input" placeholder="Input in reset form" value="Value"></ino-input>
        <ino-button type="reset">Reset form values on the left</ino-button>
      </form>

      <h4>Button that submits external form with form attribute</h4>
      <form class="submit-form" id="form1" onsubmit="return false;">
      <ino-button type="submit" form="form1">Button with form attribute</ino-button>
      </form>
    </div>
  `;
