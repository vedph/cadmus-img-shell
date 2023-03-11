import { IndexLookupDefinitions } from '@myrmidon/cadmus-core';
import {
  METADATA_PART_TYPEID,
} from '@myrmidon/cadmus-part-general-ui';

import { GALLERY_IMAGE_ANNOTATIONS_PART_TYPEID } from 'projects/myrmidon/cadmus-part-img-gallery-image-annotations/src/public-api';

export const INDEX_LOOKUP_DEFINITIONS: IndexLookupDefinitions = {
  metadata_eid: {
    typeId: METADATA_PART_TYPEID,
    name: 'eid',
  },
  img_anno_eid: {
    typeId: GALLERY_IMAGE_ANNOTATIONS_PART_TYPEID,
    name: 'eid',
  },
};
