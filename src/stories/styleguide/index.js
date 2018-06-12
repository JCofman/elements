import { storiesOf } from '@storybook/vue'
import { doc } from 'storybook-readme'

import colors from './colors.md'
import typography from './typography.md'

export default {
  addStory: () => storiesOf('Styleguide', module)
    .add('Colors', doc(colors))
    .add('Typography', doc(typography))
}
