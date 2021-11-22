/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RecipeComponent_recipes$ref: FragmentReference;
declare export opaque type RecipeComponent_recipes$fragmentType: RecipeComponent_recipes$ref;
export type RecipeComponent_recipes = {|
  +databaseId: number,
  +name: string,
  +cookingTime: ?number,
  +course: ?{|
    +name: ?string
  |},
  +recipePhotos: $ReadOnlyArray<{|
    +urlThumb1x: string,
    +urlThumb2x: string,
  |}>,
  +$refType: RecipeComponent_recipes$ref,
|};
export type RecipeComponent_recipes$data = RecipeComponent_recipes;
export type RecipeComponent_recipes$key = {
  +$data?: RecipeComponent_recipes$data,
  +$fragmentRefs: RecipeComponent_recipes$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecipeComponent_recipes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "databaseId",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cookingTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Course",
      "kind": "LinkedField",
      "name": "course",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "RecipePhoto",
      "kind": "LinkedField",
      "name": "recipePhotos",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "urlThumb1x",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "urlThumb2x",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Recipe",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '112c149885552ad7d415d515a17fc912';

module.exports = node;
