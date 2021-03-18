/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateRecipeInput = {|
  databaseId: number,
  name?: ?string,
  characteristic?: ?string,
  comment?: ?string,
  ingredients?: ?string,
  preparation?: ?string,
  vegetarian?: ?boolean,
  cookingTime?: ?number,
  courseId?: ?string,
  seasonId?: ?string,
  recipePhotos?: ?$ReadOnlyArray<RecipePhotosAttributes>,
  clientMutationId?: ?string,
|};
export type RecipePhotosAttributes = {|
  id?: ?string,
  _destroy?: ?boolean,
  position?: ?number,
  signedId?: ?string,
|};
export type EditRecipeMutationVariables = {|
  input: UpdateRecipeInput
|};
export type EditRecipeMutationResponse = {|
  +updateRecipe: ?{|
    +recipe: ?{|
      +databaseId: number,
      +recipePhotos: $ReadOnlyArray<{|
        +databaseId: number,
        +position: ?number,
        +urlThumb1x: string,
        +urlThumb2x: string,
      |}>,
    |},
    +errors: $ReadOnlyArray<{|
      +field: string,
      +messages: ?$ReadOnlyArray<string>,
    |}>,
  |}
|};
export type EditRecipeMutation = {|
  variables: EditRecipeMutationVariables,
  response: EditRecipeMutationResponse,
|};
*/


/*
mutation EditRecipeMutation(
  $input: UpdateRecipeInput!
) {
  updateRecipe(input: $input) {
    recipe {
      databaseId
      recipePhotos {
        databaseId
        position
        urlThumb1x
        urlThumb2x
        id
      }
      id
    }
    errors {
      field
      messages
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "databaseId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "urlThumb1x",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "urlThumb2x",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "ValidationError",
  "kind": "LinkedField",
  "name": "errors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "messages",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateRecipePayload",
        "kind": "LinkedField",
        "name": "updateRecipe",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Recipe",
            "kind": "LinkedField",
            "name": "recipe",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "RecipePhoto",
                "kind": "LinkedField",
                "name": "recipePhotos",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateRecipePayload",
        "kind": "LinkedField",
        "name": "updateRecipe",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Recipe",
            "kind": "LinkedField",
            "name": "recipe",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "RecipePhoto",
                "kind": "LinkedField",
                "name": "recipePhotos",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "38d4307124515f24e6ffa46c36badbe8",
    "id": null,
    "metadata": {},
    "name": "EditRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation EditRecipeMutation(\n  $input: UpdateRecipeInput!\n) {\n  updateRecipe(input: $input) {\n    recipe {\n      databaseId\n      recipePhotos {\n        databaseId\n        position\n        urlThumb1x\n        urlThumb2x\n        id\n      }\n      id\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ccb7ea5bf7d545d0d611dd7f88f42c23';

module.exports = node;
