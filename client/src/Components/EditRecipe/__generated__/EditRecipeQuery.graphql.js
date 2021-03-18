/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditRecipeQueryVariables = {|
  id: string
|};
export type EditRecipeQueryResponse = {|
  +courses: $ReadOnlyArray<{|
    +databaseId: number,
    +name: ?string,
  |}>,
  +recipe: {|
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
  +seasons: $ReadOnlyArray<{|
    +databaseId: number,
    +name: ?string,
  |}>,
|};
export type EditRecipeQuery = {|
  variables: EditRecipeQueryVariables,
  response: EditRecipeQueryResponse,
|};
*/


/*
query EditRecipeQuery(
  $id: ID!
) {
  courses {
    databaseId
    name
    id
  }
  recipe(id: $id) {
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
  seasons {
    databaseId
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "databaseId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "characteristic",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "comment",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cookingTime",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseId",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ingredients",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "preparation",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "urlThumb1x",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "urlThumb2x",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seasonId",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vegetarian",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v17 = [
  (v1/*: any*/),
  (v2/*: any*/),
  (v16/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditRecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Course",
        "kind": "LinkedField",
        "name": "courses",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "recipe",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v1/*: any*/),
          (v9/*: any*/),
          (v2/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "RecipePhoto",
            "kind": "LinkedField",
            "name": "recipePhotos",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          (v14/*: any*/),
          (v15/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Season",
        "kind": "LinkedField",
        "name": "seasons",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditRecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Course",
        "kind": "LinkedField",
        "name": "courses",
        "plural": true,
        "selections": (v17/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "recipe",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v1/*: any*/),
          (v9/*: any*/),
          (v2/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "RecipePhoto",
            "kind": "LinkedField",
            "name": "recipePhotos",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Season",
        "kind": "LinkedField",
        "name": "seasons",
        "plural": true,
        "selections": (v17/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5a33c4a1e3ab286615b3b9c8872411da",
    "id": null,
    "metadata": {},
    "name": "EditRecipeQuery",
    "operationKind": "query",
    "text": "query EditRecipeQuery(\n  $id: ID!\n) {\n  courses {\n    databaseId\n    name\n    id\n  }\n  recipe(id: $id) {\n    characteristic\n    comment\n    cookingTime\n    courseId\n    databaseId\n    ingredients\n    name\n    preparation\n    recipePhotos {\n      databaseId\n      position\n      urlThumb1x\n      urlThumb2x\n      id\n    }\n    seasonId\n    vegetarian\n    id\n  }\n  seasons {\n    databaseId\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bf682848b7a107430366cfebbabe4c09';

module.exports = node;
