import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './schema';
import path from 'path';

const app = express();

// Allow cros origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.use(express.static('public'));

app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
