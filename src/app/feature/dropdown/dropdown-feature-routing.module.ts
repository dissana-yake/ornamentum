import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DropdownOverviewComponent,
  DropdownItemSelectionComponent
} from './components';

/**
 * Represent application dropdown feature module routes.
 * @type Routes
 */
const dropdownFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    component: DropdownOverviewComponent,
    path: 'overview'
  },
  {
    // component: DropdownClientSideDataBindingComponent,
    path: 'client-side-data-binding'
  },
  {
    // component: DropdownServerSideDataBindingComponent,
    path: 'server-side-data-binding'
  },
  {
    // component: DropdownRealTimeDataBindingComponent,
    path: 'real-time-data-binding'
  },
  {
    component: DropdownOverviewComponent,
    path: 'editing'
  },
  {
    component: DropdownOverviewComponent,
    path: 'filtering'
  },
  {
    component: DropdownOverviewComponent,
    path: 'grouping'
  },
  {
    component: DropdownItemSelectionComponent,
    path: 'item-selection'
  },
  {
    component: DropdownOverviewComponent,
    path: 'paging'
  },
  {
    component: DropdownOverviewComponent,
    path: 'sorting'
  },
  {
    // component: DropdownTranslationsComponent,
    path: 'translations'
  },
];

/**
 * Application dropdown feature routing module.
 * @class DropdownFeatureRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFeatureRoutes)]
})
export class DropdownFeatureRoutingModule {
}
