const filter = { _id: new ObjectId("648667332602506496") };
const update = { $set: { name: "new name" } };
const options = { upsert: true };
collection.updateOne(filter, update, options);
