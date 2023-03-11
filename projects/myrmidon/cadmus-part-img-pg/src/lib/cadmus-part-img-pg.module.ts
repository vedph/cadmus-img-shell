import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// cadmus
import { CadmusCoreModule, PendingChangesGuard } from '@myrmidon/cadmus-core';
import { CadmusStateModule } from '@myrmidon/cadmus-state';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';

import {
  GalleryImageAnnotationsPartFeatureComponent,
  GALLERY_IMAGE_ANNOTATIONS_PART_TYPEID,
} from '@myrmidon/cadmus-part-img-gallery-image-annotations';

export const RouterModuleForChild = RouterModule.forChild([
  {
    path: `${GALLERY_IMAGE_ANNOTATIONS_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: GalleryImageAnnotationsPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Cadmus
    RouterModuleForChild,
    CadmusCoreModule,
    CadmusStateModule,
    CadmusUiModule,
    CadmusUiPgModule,
  ],
  exports: [],
})
export class CadmusPartImgPgModule {}
