/* jshint esversion: 6 */

// import {Element as PolymerElement} from '../../node_modules/@polymer/polymer/polymer-element.js'
// import '../node_modules/@polymer/iron-selector/iron-multi-selectable.js'
import { Polymer } from './node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { IronMultiSelectableBehavior } from './node_modules/@polymer/iron-selector/iron-multi-selectable.js'

/**
 * `s-tbody`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
Polymer({

  is: 's-tbody',

  extends: 'tbody',

  behaviors: [
    IronMultiSelectableBehavior
  ]

});