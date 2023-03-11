# CadmusPartImgGalleryImageAnnotations

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

Gallery image annotations part. This is essentially a wrapper for the [gallery image annotation bricks](https://github.com/vedph/cadmus-bricks-shell/blob/master/projects/myrmidon/cadmus-img-gallery/README.md).

To setup your consumer app:

(1) install packages:

```bash
npm i @recogito/annotorious @myrmidon/cadmus-img-annotator @myrmidon/cadmus-img-gallery @myrmidon/cadmus-part-img-gallery-image-annotator @myrmidon/cadmus-part-img-pg
```

(2) ensure to add Annotorious CSS styles to your `angular.json` like:

```json
"styles": [
  "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  "node_modules/@recogito/annotorious/dist/annotorious.min.css",
  "src/styles.css"
]
```

(3) import modules in your `app.module.ts` and inject the required image service and options:

```ts
import { CadmusImgAnnotatorModule } from '@myrmidon/cadmus-img-annotator';
import { CadmusImgGalleryModule } from '@myrmidon/cadmus-img-gallery';

@NgModule({
  // ...
  imports: [
    // ...
    CadmusImgAnnotatorModule,
    CadmusImgGalleryModule,
  ],
  providers: [
    // image gallery: TODO replace with your own
    {
      provide: IMAGE_GALLERY_SERVICE_KEY,
      useClass: MockGalleryService,
    },
    {
      provide: IMAGE_GALLERY_OPTIONS_KEY,
      useValue: {
        baseUri: '',
        count: 50,
        width: 300,
        height: 400,
      },
    },
  ]
  // ...
})
export class AppModule {}
```

(4) if you want to lookup annotations by their EID, be sure to include the corresponding lookup definition like:

```ts
import { IndexLookupDefinitions } from '@myrmidon/cadmus-core';
import {
  GALLERY_IMAGE_ANNOTATIONS_PART_TYPEID,
} from '@myrmidon/cadmus-part-general-ui';

export const INDEX_LOOKUP_DEFINITIONS: IndexLookupDefinitions = {
  // ...
  // gallery
  img_anno_eid: {
    typeId: GALLERY_IMAGE_ANNOTATIONS_PART_TYPEID,
    name: 'eid',
  },
};
```

(5) in your app's routes, add the `img` module:

```ts
// cadmus - img parts
{
  path: 'items/:iid/img',
  loadChildren: () =>
    import('@myrmidon/cadmus-part-img-pg').then(
      (module) => module.CadmusPartImgPgModule
    ),
  canActivate: [AuthJwtGuardService],
},
```
