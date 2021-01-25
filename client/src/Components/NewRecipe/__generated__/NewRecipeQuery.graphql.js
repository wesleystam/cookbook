/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewRecipeQueryVariables = {||};
export type NewRecipeQueryResponse = {|
  +courses: $ReadOnlyArray<{|
    +databaseId: number,
    +name: ?string,
  |}>,
  +seasons: $ReadOnlyArray<{|
    +databaseId: number,
    +name: ?string,
  |}>,
|};
export type NewRecipeQuery = {|
  variables: NewRecipeQueryVariables,
  response: NewRecipeQueryResponse,
|};
*/


/*
query NewRecipeQuery {
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
    "name": "NewRecipeQuery",
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
    "name": "NewRecipeQuery",
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
    "cacheID": "b5c9e89f4619ff22e8a4874cb55e0511",
    "id": null,
    "metadata": {},
    "name": "NewRecipeQuery",
    "operationKind": "query",
    "text": "query NewRecipeQuery {\n  courses {\n    databaseId\n    name\n    id\n  }\n  seasons {\n    databaseId\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '93a7abedcc479d8124349a753f13b0bb';

module.exports = node;
