import MainView from '../main';
import { add_event_to_product_form_buttons } from './publish_helper'

export default class View extends MainView {
  mount() {
    super.mount();

    // Specific logic here

    add_event_to_product_form_buttons();
  }

  unmount() {
    super.unmount();

    // Specific logic here
  }
}