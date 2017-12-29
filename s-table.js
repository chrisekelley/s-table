/* jshint esversion: 6 */

import {Element as PolymerElement} from './node_modules/@polymer/polymer/polymer-element.js'
import './node_modules/@polymer/iron-flex-layout/iron-flex-layout.js'
import './node_modules/@polymer/paper-styles/color.js'
import './node_modules/@polymer/paper-styles/default-theme.js'

/**
 * `s-table`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class STable extends PolymerElement {

  static get template() {
    return `<style>

:host {
  display: block;
  position: relative;
  border-spacing: 0;
  font-size: 13px;
}

:host([fixed-column]) #container {
  margin-left: var(--s-table-fixed-column-width, 192px);
}

:host([fixed-column]) #table ::slotted(tbody) tr td:nth-of-type(1),
:host([fixed-column]) #table ::slotted(tfoot) tr td:nth-of-type(1),
:host([fixed-column]) #table ::slotted(thead) tr th:nth-of-type(1) {
  @apply(--layout);
  @apply(--layout-center-center);
  position: absolute;
  left: 0;
  width: var(--s-table-fixed-column-width, 192px);
}

#container {
  overflow-x: auto;
  padding-bottom: var(--s-table-scrollbar-height, 8px);
}

#container::-webkit-scrollbar {
  height: var(--s-table-scrollbar-height, 8px);
}

#container::-webkit-scrollbar-track {
  border-radius: var(--s-table-scrollbar-border-radius, 2px);
}

#container::-webkit-scrollbar-thumb {
  border-radius: var(--s-table-scrollbar-border-radius, 2px);
  background-color: var(--s-table-scrollbar-color, var(--divider-color));
}

#table {
  display: table;
  width: 100%;
}

#table ::slotted(tbody) td,
#table ::slotted(tfoot) td {
  box-sizing: border-box;
  height: var(--s-table-row-height, 48px);
  padding: 0 var(--s-table-gutter, 24px);
  white-space: nowrap;
  border-bottom: 1px solid var(--s-table-divider-color, var(--divider-color));
}

#table ::slotted(thead) th {
  box-sizing: border-box;
  height: var(--s-table-head-row-height, 56px);
  padding: 0 var(--s-table-gutter, 24px);
  white-space: nowrap;
  color: var(--secondary-text-color);
  border-bottom: 1px solid var(--s-table-divider-color, var(--divider-color));
  font-size: 12px;
  font-weight: normal;
}

#table ::slotted(tbody) tr.iron-selected td {
  background-color: var(--paper-grey-100);
}

#table ::slotted(tbody) tr:hover td {
  background-color: var(--paper-grey-200);
}

</style>

<div id="container">
  <div id="table">
    <slot></slot>
  </div>
</div>`

  }

  static get is() {
    return 's-table';
  }

  static get extends() {
    return 'table';
  }
}
window.customElements.define(STable.is, STable);
