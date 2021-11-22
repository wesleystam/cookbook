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
export type CalendarButtonMutationVariables = {|
  input: UpdateRecipeInput
|};
export type CalendarButtonMutationResponse = {|
  +updateRecipe: ?{|
    +recipe: ?{|
      +menuItems: $ReadOnlyArray<{|
        +day: ?any
      |}>
    |},
    +errors: $ReadOnlyArray<{|
      +field: string,
      +messages: ?$ReadOnlyArray<string>,
    |}>,
  |}
|};
export type CalendarButtonMutation = {|
  variables: CalendarButtonMutationVariables,
  response: CalendarButtonMutationResponse,
|};
*/


/*
mutation CalendarButtonMutation(
  $input: UpdateRecipeInput!
) {
  updateRecipe(input: $input) {
    recipe {
      menuItems {
        day
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
  "name": "day",
  "storageKey": null
},
v3 = {
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
v4 = {
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
    "name": "CalendarButtonMutation",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "MenuItem",
                "kind": "LinkedField",
                "name": "menuItems",
                "plural": true,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
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
    "name": "CalendarButtonMutation",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "MenuItem",
                "kind": "LinkedField",
                "name": "menuItems",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "416940fb02dd39a9e8be3bda7782e6fd",
    "id": null,
    "metadata": {},
    "name": "CalendarButtonMutation",
    "operationKind": "mutation",
    "text": "mutation CalendarButtonMutation(\n  $input: UpdateRecipeInput!\n) {\n  updateRecipe(input: $input) {\n    recipe {\n      menuItems {\n        day\n        id\n      }\n      id\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fdaf949c336d9f4316ba5c0b7a3e490c';

module.exports = node;
