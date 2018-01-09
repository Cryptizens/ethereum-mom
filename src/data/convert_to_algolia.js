var jsonfile = require('jsonfile')
var data = require('./node_snippets')
var file = 'algolia_batch_request.json'

var snippets = data.snippets;
var requests = [];

snippets.forEach(function(snippet, index) {
  requests[index] = {
    action: "addObject",
    body: snippet
  };
});

var obj = {
  requests: requests
}

jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})
