import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CadmusCoreModule } from '@myrmidon/cadmus-core';
import { CadmusImgAnnotatorModule } from '@myrmidon/cadmus-img-annotator';
import { CadmusImgGalleryModule } from '@myrmidon/cadmus-img-gallery';
import { CadmusRefsAssertedChronotopeModule } from '@myrmidon/cadmus-refs-asserted-chronotope';
import { CadmusRefsAssertedIdsModule } from '@myrmidon/cadmus-refs-asserted-ids';
import { CadmusRefsAssertionModule } from '@myrmidon/cadmus-refs-assertion';
import { CadmusRefsDocReferencesModule } from '@myrmidon/cadmus-refs-doc-references';
import { CadmusRefsHistoricalDateModule } from '@myrmidon/cadmus-refs-historical-date';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';
import { NgMatToolsModule } from '@myrmidon/ng-mat-tools';
import { NgToolsModule } from '@myrmidon/ng-tools';

import { GalleryImageAnnotationsPartFeatureComponent } from
  './gallery-image-annotations-part-feature/gallery-image-annotations-part-feature.component';
import { GalleryImageAnnotationsPartComponent } from
  './gallery-image-annotations-part/gallery-image-annotations-part.component';

@NgModule({
  declarations: [
    GalleryImageAnnotationsPartComponent,
    GalleryImageAnnotationsPartFeatureComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    // cadmus
    NgToolsModule,
    NgMatToolsModule,
    CadmusCoreModule,
    CadmusUiModule,
    CadmusUiPgModule,
    CadmusImgAnnotatorModule,
    CadmusImgGalleryModule,
    CadmusRefsAssertedIdsModule,
    CadmusRefsDocReferencesModule,
    CadmusRefsHistoricalDateModule,
    CadmusRefsAssertionModule,
    CadmusRefsAssertedChronotopeModule,
  ],
  exports: [
    GalleryImageAnnotationsPartComponent,
    GalleryImageAnnotationsPartFeatureComponent,
  ],
})
export class CadmusPartImgGalleryImageAnnotationsModule {}
