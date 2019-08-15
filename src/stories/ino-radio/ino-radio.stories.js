import { storiesOf } from '@storybook/html';
import CoreEvents from '@storybook/core-events';
import addons from '@storybook/addons';

import { withActions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';
import componentReadme from '../../components/ino-radio/readme.md';
import './ino-radio.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-radio') {
      return;
    }

    el.setAttribute('checked', e.detail);
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

storiesOf('<ino-radio>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions('checkedChange ino-radio'))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })

  .add(
    'Default usage',
    () => /*html*/ `
    <div class="story-radio">
      <ino-radio
        checked="${boolean('checked', false)}"
        disabled="${boolean('disabled', false)}"
        name="radio-custom"
      >
        ${text('<slot />', 'Customizable Radio Button')}
      </ino-radio>
    </div>
    
    <h4>Radio Group</h4>
    <div class="story-radio">
      <ino-radio ino-id="11" name="group">Option 1</ino-radio>
      <ino-radio ino-id="22" name="group">Option 2</ino-radio>
      <ino-radio ino-id="33" name="group">Option 3</ino-radio>
      <ino-radio ino-id="44" name="group">Option 4</ino-radio>
    </div>
    
    <h4>States</h4>
    <div class="story-radio">
      <ino-radio name="radio-0">
        ${text('<slot />', 'Unchecked')}
      </ino-radio>
      <ino-radio checked name="radio-1">Checked</ino-radio>
      <ino-radio disabled name="radio-2">Disabled</ino-radio>
      <ino-radio checked disabled name="radio-3">Checked and Disabled</ino-radio>
    </div>
  `
  );
