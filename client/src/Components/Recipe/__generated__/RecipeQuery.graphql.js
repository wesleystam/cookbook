/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RecipeQueryVariables = {|
  id: string
|};
export type RecipeQueryResponse = {|
  +recipe: {|
    +name: string,
    +characteristic: ?string,
    +vegetarian: ?boolean,
    +cookingTime: ?number,
    +comment: ?string,
    +bookNumber: ?number,
    +pageNumber: ?number,
    +ingredients: ?string,
    +preparation: ?string,
    +course: ?{|
      +name: ?string
    |},
    +season: ?{|
      +name: ?string
    |},
    +recipePhotos: $ReadOnlyArray<{|
      +id: string,
      +url: string,
    |}>,
  |}
|};
export type RecipeQuery = {|
  variables: RecipeQueryVariables,
  response: RecipeQueryResponse,
|};
*/


/*
query RecipeQuery(
  $id: ID!
) {
  recipe(id: $id) {
    name
    characteristic
    vegetarian
    cookingTime
    comment
    bookNumber
    pageNumber
    ingredients
    preparation
    course {
      name
      id
    }
    season {
      name
      id
    }
    recipePhotos {
      id
      url
    }
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
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "characteristic",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vegetarian",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cookingTime",
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
  "name": "bookNumber",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pageNumber",
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
v11 = [
  (v2/*: any*/)
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "RecipePhoto",
  "kind": "LinkedField",
  "name": "recipePhotos",
  "plural": true,
  "selections": [
    (v12/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = [
  (v2/*: any*/),
  (v12/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
            "kind": "LinkedField",
            "name": "course",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Season",
            "kind": "LinkedField",
            "name": "season",
            "plural": false,
            "selections": (v11/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
            "kind": "LinkedField",
            "name": "course",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Season",
            "kind": "LinkedField",
            "name": "season",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          (v13/*: any*/),
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ffde02a437c0836dbdb433254dc5aa59",
    "id": null,
    "metadata": {},
    "name": "RecipeQuery",
    "operationKind": "query",
    "text": "query RecipeQuery(\n  $id: ID!\n) {\n  recipe(id: $id) {\n    name\n    characteristic\n    vegetarian\n    cookingTime\n    comment\n    bookNumber\n    pageNumber\n    ingredients\n    preparation\n    course {\n      name\n      id\n    }\n    season {\n      name\n      id\n    }\n    recipePhotos {\n      id\n      url\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6838e6ace381be0900ab1b2476c84b6b';

module.exports = node;
