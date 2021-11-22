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
  menuItems?: ?$ReadOnlyArray<MenuItemAttributes>,
  recipePhotos?: ?$ReadOnlyArray<RecipePhotosAttributes>,
  clientMutationId?: ?string,
|};
export type MenuItemAttributes = {|
  id?: ?string,
  _destroy?: ?boolean,
  position?: ?number,
  day?: ?string,
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
      +characteristic: ?string,
      +comment: ?string,
      +cookingTime: ?number,
      +courseId: ?string,
      +databaseId: number,
      +ingredients: ?string,
      +name: string,
      +preparation: ?string,
      +recipePhotos: $ReadOnlyArray<{|
        +databaseId: number,
        +position: ?number,
        +urlThumb1x: string,
        +urlThumb2x: string,
      |}>,
      +seasonId: ?string,
      +vegetarian: ?boolean,
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
      characteristic
      comment
      cookingTime
      courseId
      databaseId
      ingredients
      name
      preparation
      recipePhotos {
        databaseId
        position
        urlThumb1x
        urlThumb2x
        id
      }
      seasonId
      vegetarian
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
  "name": "characteristic",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cookingTime",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "databaseId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ingredients",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "preparation",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "urlThumb1x",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "urlThumb2x",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seasonId",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vegetarian",
  "storageKey": null
},
v15 = {
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
v16 = {
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "RecipePhoto",
                "kind": "LinkedField",
                "name": "recipePhotos",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/)
                ],
                "storageKey": null
              },
              (v13/*: any*/),
              (v14/*: any*/)
            ],
            "storageKey": null
          },
          (v15/*: any*/)
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "RecipePhoto",
                "kind": "LinkedField",
                "name": "recipePhotos",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              (v13/*: any*/),
              (v14/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7378e22c4979f960f5847efc7603a4a9",
    "id": null,
    "metadata": {},
    "name": "EditRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation EditRecipeMutation(\n  $input: UpdateRecipeInput!\n) {\n  updateRecipe(input: $input) {\n    recipe {\n      characteristic\n      comment\n      cookingTime\n      courseId\n      databaseId\n      ingredients\n      name\n      preparation\n      recipePhotos {\n        databaseId\n        position\n        urlThumb1x\n        urlThumb2x\n        id\n      }\n      seasonId\n      vegetarian\n      id\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '142476e6652837e6802fe05bd3a3a26d';

module.exports = node;
