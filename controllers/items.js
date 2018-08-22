var MongoClient = require('mongodb').MongoClient;
var config = require('../config/mongo');


//insert item
module.exports =  function (req, res) {
    MongoClient.connect(config.host, { useNewUrlParser: true }, function(err, client){
        if(err) throw err;
        var db = client.db();
        db.collection('items',function(err, collection) {
            collection.insertOne({ id:1, firstName:'Steve', lastName:'Jobs' });
            collection.insertOne({ id:2, firstName:'Bill', lastName:'Gates' });
            collection.insertOne({ id:3, firstName:'James', lastName:'Bond' });
        });
        client.close();
    });

    res.send([]);
}
