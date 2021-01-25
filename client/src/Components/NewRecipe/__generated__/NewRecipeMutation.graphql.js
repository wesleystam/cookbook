/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateRecipeInput = {|
  name?: ?string,
  characteristic?: ?string,
  comment?: ?string,
  ingredients?: ?string,
  preparation?: ?string,
  vegetarian?: ?boolean,
  cookingTime?: ?number,
  courseId?: ?number,
  seasonId?: ?number,
  recipePhotos?: ?$ReadOnlyArray<RecipePhotosAttributes>,
  clientMutationId?: ?string,
|};
export type RecipePhotosAttributes = {|
  id?: ?string,
  _destroy?: ?boolean,
  position?: ?number,
  signedId?: ?number,
|};
export type NewRecipeMutationVariables = {|
  input: CreateRecipeInput
|};
export type NewRecipeMutationResponse = {|
  +createRecipe: ?{|
    +recipe: ?{|
      +databaseId: number
    |},
    +errors: $ReadOnlyArray<{|
      +field: string,
      +messages: ?$ReadOnlyArray<string>,
    |}>,
  |}
|};
export type NewRecipeMutation = {|
  variables: NewRecipeMutationVariables,
  response: NewRecipeMutationResponse,
|};
*/


/*
mutation NewRecipeMutation(
  $input: CreateRecipeInput!
) {
  createRecipe(input: $input) {
    recipe {
      databaseId
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateRecipePayload",
        "kind": "LinkedField",
        "name": "createRecipe",
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
              (v2/*: any*/)
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
    "name": "NewRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateRecipePayload",
        "kind": "LinkedField",
        "name": "createRecipe",
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
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
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
    "cacheID": "2902f6b26f3e656a6ff1af2c157d76d6",
    "id": null,
    "metadata": {},
    "name": "NewRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation NewRecipeMutation(\n  $input: CreateRecipeInput!\n) {\n  createRecipe(input: $input) {\n    recipe {\n      databaseId\n      id\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '921527d2e458eb21d93db02f455191f9';

module.exports = node;
