const {MongoClient} = require("mongodb");

const url =
"mongodb+srv://niteshprajapati:plvOeyvI7oZioy2S@namastenode.4iasx.mongodb.net/";

const client = new MongoClient(url);
const dbName ='Helloworld';

 async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    //insert a data
    const data = {
        firstname:"Virat",
        lastname:"Kohli",
        city:"Mumbai",
        phoneNumber:"8632648763"
    };

    // const insertResult = await collection.insertMany([data]);
    //  console.log("Inserted documents=>",insertResult);
    // // the following code examples can be posted here
    // //Read 
    // const findResult = await collection.find({}).toArray();
    // console.log("Found documents =>" ,findResult);
  
      
    // const countResult = await collection.countDocuments({})
    // console.log("Count of documents in the collection=>",countResult);
    // return 'done.';


    //Find all documets with a filter of firstname: virat
    const result = await collection.find({firstname:"Virat"}).toArray()
    console.log("result=>",result);
    return "done."

}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());

//Notes:-
//Go to mongodb website
//Create a free MB cluster
//Create a user
//Get the connection string
//Install Mongo DB compass
//Instal mongodb package
//Create a connection from code
//CRUD - Create Read Updata Delete






