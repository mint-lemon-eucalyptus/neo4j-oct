var neo4j = require('neo4j-js');
neo4j.connect('http://localhost:7474/db/data/', function (error, graph) {
    // do something with graph object

    var query = [
        'START n = node(*)',
        'RETURN n'
    ];

    graph.query(query.join('\n'), function (err, results) {
        if (err) {
            console.log(err);
            console.log(err.stack);
        }
        else {
            for (var i = 0; i < results.length; i++) {
                var relationship = results[i].r;
                var node = results[i].m;

                // ... do something with the nodes and relationships we just grabbed
            }

            console.log(JSON.stringify(results, null, 5 )); // printing may help to visualize the returned structure
        }
    });
})

