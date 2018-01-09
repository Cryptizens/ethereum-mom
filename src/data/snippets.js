export const snippets = [
  {
    "title": "How to mark a function as private in Solidity",
    "slug": "how-to-mark-a-function-as-private-in-solidity",
    "author": "thomasvds",
    "favorite": false,
    "updated_at": "Jan 05, 2018",
    "language": "solidity",
    "code": [
      "function _addToArray(uint _number) private {",
      "   numbers.push(_number);",
      "}"
    ],
    "advice": "use the <span class=\"code-token\">private</span> modifier, and a starting underscore <span class=\"code-token\">_</span> as a convention to emphasize the private nature of your function."
  },
  {
    "title": "How to listen to a contract event in JavaScript",
    "slug": "how-to-listen-to-a-contract-event-in-javascript",
    "author": "thomasvds",
    "favorite": true,
    "updated_at": "Jan 05, 2018",
    "language": "javascript",
    "code": [
      "Contract.MyEvent(function(error, result) {",
      "  if (error) return;",
      "  console.log(result.args);",
      "});"
    ],
    "advice": "the <span class='code-token'>result</span> object contains both the event data as defined in the contract event code, under the <span class='code-token'>args</span> object, as well as event metadata."
  },
  {
    "title": "How to load a contract in JavaScript",
    "slug": "how-to-load-a-contract-in-javascript",
    "author": "thomasvds",
    "favorite": true,
    "updated_at": "Jan 05, 2018",
    "language": "javascript",
    "code": [
      "const MyContract = web3.eth.contract(abi);",
      "const Contract = MyContract.at(address);"
    ],
    "advice": "the <span class='code-token'>abi</span> is the Application Binary Interface of the contract. If you compile with Remix for example, you'll find it in the details of the contract. <span class='code-token'>address</span> is the address of your contract once it has been deployed on the Blockchain."
  },
  {
    "title": "How to declare a Struct in Solidity",
    "slug": "how-to-declare-a-struct-in-solidity",
    "author": "thomasvds",
    "favorite": false,
    "updated_at": "Jan 05, 2018",
    "language": "solidity",
    "code": [
      "struct Person {",
      "  string name;",
      "  uint age;",
      "}"
    ],
    "advice": "Don't forget the uppercase in your struct name. After declaration, your struct can be used like other types."
  },
  {
    "title": "How to declare a dynamic array in Solidity",
    "slug": "how-to-declare-a-dynamic-array-in-solidity",
    "author": "thomasvds",
    "favorite": true,
    "updated_at": "Jan 05, 2018",
    "language": "solidity",
    "code": [
      "string[] public names;"
    ],
    "advice": "the first token indicates the type of the objects the array will store. Using the empty brackets indicates this array can size indefinitely."
  },
  {
    "title": "How to create a new contract in Solidity",
    "slug": "how-to-create-a-new-contract-in-solidity",
    "author": "thomasvds",
    "favorite": true,
    "updated_at": "Jan 05, 2018",
    "language": "solidity",
    "code": [
      "pragma solidity ^0.4.19;",
      "",
      "contract MyContract {",
      " // contract functions and variables go here",
      "}"
    ],
    "advice": "the <span class='code-token'>pragma</span> statement tells the compiler which version of the Solidity language you are using. Find the latest on the <a href='https://github.com/ethereum/solidity/releases'>GitHub repo</a> of Solidity."
  },
  {
    "title": "How to declare a mapping in Solidity",
    "slug": "how-to-declare-a-mapping-in-solidity",
    "author": "thomasvds",
    "favorite": true,
    "updated_at": "Jan 05, 2018",
    "language": "solidity",
    "code": [
      "mapping (address => uint) balances;"
    ],
    "advice": "be advised that mappings cannot be iterated on. Their data can only be retrieved if you know the corresponding index."
  },
  {
    "title": "How to create and emit an event in Solidity",
    "slug": "how-to-create-and-emit-an-event-in-solidity",
    "author": "thomasvds",
    "favorite": false,
    "updated_at": "Jan 05, 2018",
    "language": "solidity",
    "code": [
      "event MyEvent(string myMessage);",
      "",
      "function myFunction(string _message) public {",
      "  MyEvent(_message);",
      "}"
    ],
    "advice": "listening to your contract events will let you know when certain transactions have actually occured, giving you a feedback after you've called one of your contract functions."
  },
  {
    "title": "How to convert Ether to Wei in JavaScript",
    "slug": "how-to-convert-ether-to-wei-in-javascript",
    "author": "thomasvds",
    "favorite": true,
    "updated_at": "Jan 08, 2018",
    "language": "JavaScript",
    "code": [
      "web3.utils.toWei('1', 'ether');"
    ],
    "advice": "<span class='code-token'>wei</span> are the smallest unit, and you should always make calculations in wei and convert only for display reasons."
  }
]
