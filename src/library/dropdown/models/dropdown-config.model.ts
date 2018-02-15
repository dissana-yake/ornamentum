import { MenuPosition } from './menu-position.enum';
import { DropdownTranslations } from './dropdown-translations.model';

/**
 * Dropdown configuration.
 */
export class DropdownConfig {
  /**
   * Display text translations.
   * @type {DropdownTranslations}
   */
  translations?: DropdownTranslations;

  /**
   * Name of the attribute used for selection tracking.
   * @type {string}
   */
  selectTrackBy?: string;

  /**
   * Name of the attribute used to show the selected item's display text.
   * @type {string}
   */
  displayTrackBy?: string;

  /**
   * Additional data attribute track by field name.
   * @type {string}
   */
  dataTrackBy?: string;

  /**
   * Name of the attribute used to disable the selection of dropdown item.
   * @type {string}
   */
  disabledTrackBy?: string;

  /**
   * Menu position.
   * @type {MenuPosition}
   */
  menuPosition?: MenuPosition;

  /**
   * Multi selectable if true.
   * @type {boolean}
   */
  multiSelectable?: boolean;

  /**
   * Filterable if true.
   * Show dropdown search input.
   * @type {boolean}
   */
  flterable?: boolean;

  /**
   * Enable filter debounce with provided SearchDebounceTime if true.
   * @type {boolean}
   */
  filterDebounce?: boolean;

  /**
   * Filter debounce time in milliseconds.
   * Applicable only when SearchDebounce is true.
   * @type {number}
   */
  filterDebounceTime?: number;

  /**
   * Show select all checkbox if true.
   * @type {boolean}
   */
  showSelectAll?: boolean;

  /**
   * Group by field name in item schema.
   * @type {string}
   */
  groupByField?: string;

  /**
   * Wrap display selected limit.
   * Wrap selected items when limit exceeded.
   * @type {number}
   */
  wrapDisplaySelectLimit?: number;

  /**
   * Trigger select change on init if true.
   * @type {boolean}
   */
  triggerSelectChangeOnInit?: boolean;

  /**
   * Trigger change once per select all if true.
   * @type {boolean}
   */
  triggerChangeOncePerSelectAll?: boolean;

  /**
   * Show selected option remove button if true.
   * @type {boolean}
   */
  showSelectedOptionRemoveButton?: boolean;

  /**
   * Show all select options clear button if true.
   * @type {boolean}
   */
  showClearSelectionButton?: boolean;

  /**
   * Menu width in pixels.
   * @type {number}
   */
  menuWidth?: number;

  /**
   * Menu height in pixels.
   * @type {number}
   */
  menuHeight?: number;

  /**
   * Dropdown data loading on scrolling (on demand data fetch) if true.
   * @type {boolean}
   */
  loadOnScroll?: boolean;

  /**
   * Distance in pixels from bottom which needs to trigger additional data loading functionality on scroll.
   * @type {number}
   */
  loadViewDistance?: number;

  /**
   * Dropdown items to fetch on a single load when loadOnScroll is true.
   * @type {number}
   */
  limit?: number;

  /**
   * Load data on component initialize.
   * @type {boolean}
   */
  loadDataOnInit?: boolean;
}
