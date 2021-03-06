import {
  Component,
  ComponentInterface,
  Element,
  Prop,
  Host,
  h,
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-nav-item',
  styleUrl: 'ino-nav-item.scss',
  shadow: false,
})
export class NavItem implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * The text of this list item.
   */
  @Prop() inoText?: string;

  /**
   * The secondary text of this list item used in a two-lined list.
   */
  @Prop() inoSubText?: string;

  /**
   * Styles the row in an activated style.
   *
   * Use this for only one item
   * and to mark it as permanently activated.
   */
  @Prop() inoActivated?: boolean = false;

  /**
   * Styles the row in a disabled style.
   */
  @Prop() inoDisabled?: boolean = false;

  render() {
    const slotPosition = this.el.children.length > 0 ? 'ino-leading' : '';

    const slotContainerClasses = classNames({
      'ino-nav-item--leading-slot': slotPosition === 'ino-leading',
    });
    return (
      <Host>
        <ino-list-item
          inoText={this.inoText}
          inoSecondaryText={this.inoSubText}
          inoActivated={this.inoActivated}
          inoDisabled={this.inoDisabled}
        >
          <span class={slotContainerClasses} slot={slotPosition}>
            <slot></slot>
          </span>
        </ino-list-item>
      </Host>
    );
  }
}
