/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListQueryVariables = {|
  page?: ?number,
  query?: ?string,
  sortBy?: ?string,
  sortDirection?: ?string,
  vegetarian?: ?boolean,
  courseId?: ?string,
  seasonId?: ?string,
|};
export type ListQueryResponse = {|
  +recipePagination: {|
    +recipes: $ReadOnlyArray<{|
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
    |}>,
    +totalCount: number,
  |}
|};
export type ListQuery = {|
  variables: ListQueryVariables,
  response: ListQueryResponse,
|};
*/


/*
query ListQuery(
  $page: Int
  $query: String
  $sortBy: String
  $sortDirection: String
  $vegetarian: Boolean
  $courseId: ID
  $seasonId: ID
) {
  recipePagination(page: $page, query: $query, sortBy: $sortBy, sortDirection: $sortDirection, vegetarian: $vegetarian, seasonId: $seasonId, courseId: $courseId) {
    recipes {
      databaseId
      name
      cookingTime
      course {
        name
        id
      }
      recipePhotos {
        urlThumb1x
        urlThumb2x
        id
      }
      id
    }
    totalCount
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "courseId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "seasonId"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortBy"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortDirection"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "vegetarian"
},
v7 = [
  {
    "kind": "Variable",
    "name": "courseId",
    "variableName": "courseId"
  },
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Variable",
    "name": "seasonId",
    "variableName": "seasonId"
  },
  {
    "kind": "Variable",
    "name": "sortBy",
    "variableName": "sortBy"
  },
  {
    "kind": "Variable",
    "name": "sortDirection",
    "variableName": "sortDirection"
  },
  {
    "kind": "Variable",
    "name": "vegetarian",
    "variableName": "vegetarian"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "databaseId",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cookingTime",
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
  "name": "totalCount",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "RecipePagination",
        "kind": "LinkedField",
        "name": "recipePagination",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Recipe",
            "kind": "LinkedField",
            "name": "recipes",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Course",
                "kind": "LinkedField",
                "name": "course",
                "plural": false,
                "selections": [
                  (v9/*: any*/)
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
                  (v11/*: any*/),
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "ListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "RecipePagination",
        "kind": "LinkedField",
        "name": "recipePagination",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Recipe",
            "kind": "LinkedField",
            "name": "recipes",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Course",
                "kind": "LinkedField",
                "name": "course",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v14/*: any*/)
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
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v14/*: any*/)
                ],
                "storageKey": null
              },
              (v14/*: any*/)
            ],
            "storageKey": null
          },
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d293cc915d8267d52ed603f00f734ccc",
    "id": null,
    "metadata": {},
    "name": "ListQuery",
    "operationKind": "query",
    "text": "query ListQuery(\n  $page: Int\n  $query: String\n  $sortBy: String\n  $sortDirection: String\n  $vegetarian: Boolean\n  $courseId: ID\n  $seasonId: ID\n) {\n  recipePagination(page: $page, query: $query, sortBy: $sortBy, sortDirection: $sortDirection, vegetarian: $vegetarian, seasonId: $seasonId, courseId: $courseId) {\n    recipes {\n      databaseId\n      name\n      cookingTime\n      course {\n        name\n        id\n      }\n      recipePhotos {\n        urlThumb1x\n        urlThumb2x\n        id\n      }\n      id\n    }\n    totalCount\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6fac3150c0a68498ee20b4261ff91d1f';

module.exports = node;
