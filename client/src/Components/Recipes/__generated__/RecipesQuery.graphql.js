/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RecipesQueryVariables = {||};
export type RecipesQueryResponse = {|
  +courses: $ReadOnlyArray<{|
    +databaseId: number,
    +name: ?string,
  |}>,
  +seasons: $ReadOnlyArray<{|
    +databaseId: number,
    +name: ?string,
  |}>,
|};
export type RecipesQuery = {|
  variables: RecipesQueryVariables,
  response: RecipesQueryResponse,
|};
*/


/*
query RecipesQuery {
  courses {
    databaseId
    name
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "databaseId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v3 = [
  (v0/*: any*/),
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Course",
        "kind": "LinkedField",
        "name": "courses",
        "plural": true,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Season",
        "kind": "LinkedField",
        "name": "seasons",
        "plural": true,
        "selections": (v2/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecipesQuery",
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
        "args": null,
        "concreteType": "Season",
        "kind": "LinkedField",
        "name": "seasons",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "54276a90147d3579009008c47b8ace74",
    "id": null,
    "metadata": {},
    "name": "RecipesQuery",
    "operationKind": "query",
    "text": "query RecipesQuery {\n  courses {\n    databaseId\n    name\n    id\n  }\n  seasons {\n    databaseId\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f4da8c74b12e572d8f99cbb9b25885f8';

module.exports = node;
