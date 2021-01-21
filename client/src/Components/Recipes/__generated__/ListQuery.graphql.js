/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListQueryVariables = {|
  cursor?: ?string,
  query?: ?string,
  sortBy?: ?string,
  sortDirection?: ?string,
  vegetarian?: ?boolean,
  courseId?: ?string,
  seasonId?: ?string,
|};
export type ListQueryResponse = {|
  +recipes: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
      +node: ?{|
        +databaseId: number,
        +name: string,
        +cookingTime: ?number,
        +course: ?{|
          +name: ?string
        |},
        +recipePhotos: $ReadOnlyArray<{|
          +url: string
        |}>,
      |},
    |}>
  |}
|};
export type ListQuery = {|
  variables: ListQueryVariables,
  response: ListQueryResponse,
|};
*/


/*
query ListQuery(
  $cursor: String
  $query: String
  $sortBy: String
  $sortDirection: String
  $vegetarian: Boolean
  $courseId: ID
  $seasonId: ID
) {
  recipes(after: $cursor, first: 52, query: $query, sortBy: $sortBy, sortDirection: $sortDirection, vegetarian: $vegetarian, seasonId: $seasonId, courseId: $courseId) {
    edges {
      node {
        databaseId
        name
        cookingTime
        course {
          name
          id
        }
        recipePhotos {
          url
          id
        }
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
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
  "name": "cursor"
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
v7 = {
  "kind": "Variable",
  "name": "courseId",
  "variableName": "courseId"
},
v8 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v9 = {
  "kind": "Variable",
  "name": "seasonId",
  "variableName": "seasonId"
},
v10 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v11 = {
  "kind": "Variable",
  "name": "sortDirection",
  "variableName": "sortDirection"
},
v12 = {
  "kind": "Variable",
  "name": "vegetarian",
  "variableName": "vegetarian"
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "databaseId",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cookingTime",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v19 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v21 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v7/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 52
  },
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v12/*: any*/)
],
v22 = {
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
        "alias": "recipes",
        "args": [
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/)
        ],
        "concreteType": "RecipeConnection",
        "kind": "LinkedField",
        "name": "__Recipies_recipes_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RecipeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Recipe",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Course",
                    "kind": "LinkedField",
                    "name": "course",
                    "plural": false,
                    "selections": [
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
                      (v16/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v17/*: any*/)
                ],
                "storageKey": null
              },
              (v18/*: any*/),
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          (v20/*: any*/)
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
        "args": (v21/*: any*/),
        "concreteType": "RecipeConnection",
        "kind": "LinkedField",
        "name": "recipes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RecipeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Recipe",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Course",
                    "kind": "LinkedField",
                    "name": "course",
                    "plural": false,
                    "selections": [
                      (v14/*: any*/),
                      (v22/*: any*/)
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
                      (v16/*: any*/),
                      (v22/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/),
                  (v17/*: any*/)
                ],
                "storageKey": null
              },
              (v18/*: any*/),
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          (v20/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v21/*: any*/),
        "filters": [
          "query",
          "sortBy",
          "sortDirection",
          "vegetarian",
          "seasonId",
          "courseId"
        ],
        "handle": "connection",
        "key": "Recipies_recipes",
        "kind": "LinkedHandle",
        "name": "recipes"
      }
    ]
  },
  "params": {
    "cacheID": "a16c24ffc4a6b153f274439659acfb0e",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": "cursor",
          "direction": "forward",
          "path": [
            "recipes"
          ]
        }
      ]
    },
    "name": "ListQuery",
    "operationKind": "query",
    "text": "query ListQuery(\n  $cursor: String\n  $query: String\n  $sortBy: String\n  $sortDirection: String\n  $vegetarian: Boolean\n  $courseId: ID\n  $seasonId: ID\n) {\n  recipes(after: $cursor, first: 52, query: $query, sortBy: $sortBy, sortDirection: $sortDirection, vegetarian: $vegetarian, seasonId: $seasonId, courseId: $courseId) {\n    edges {\n      node {\n        databaseId\n        name\n        cookingTime\n        course {\n          name\n          id\n        }\n        recipePhotos {\n          url\n          id\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6dc44c2f7056d120c09b07703f036792';

module.exports = node;
