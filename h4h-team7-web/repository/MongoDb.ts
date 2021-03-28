import mongoose from 'mongoose';

const uri = "mongodb+srv://superuser:testing123@cluster0.d7wka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export default mongoose.connect(
  uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => console.log('woooof')
)

export const test = 'adsd'


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

