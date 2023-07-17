import express from 'express';
import knex from 'knex';
import { development } from './knexfile.js';
import cors from 'cors';

const app = express();
app.use(express.json()); //parses JSON
const port = 3001;  //server setup

const knexInstance = knex(development);

app.use(cors()); //cors is stupid

app.get(`/`, (req, res) => {
  res.send(`Hello, this is a useless root page.`);
});

app.get(`/movies_db`, async (req, res, next) => {  // get entire movies table
  try {
    const movies = await knexInstance(`movies`).select(`*`);
    res.json(movies);
  } catch (error) {
    next(error);
  }
});

app.get(`/movies/`, async (req, res, next) => {  // get just the titles
  try {
    const movies = await knexInstance(`movies`).select(`title`);
    res.json(movies);
  } catch (error) {
    next(error);
  }
});

app.get(`/movies/:id`, async (req, res, next) => {  //get a specific movie
  try {
    const { id } = req.params;

    const movies = await knexInstance(`movies`).where(`id`, id).first();
    if (!movies) {
      return res.status(404).json({ error: `Movie ain't here chief` });
    } else {
      res.json(movies);
    }
  } catch (error) {
    next(error);
  }
});

app.post('/movies_db', async (req, res, next) => {  //add a new movie
  try {
    const { title } = req.body;
    const newMovie = { title };

    const insertedMovie = await knexInstance('movies')
      .insert(newMovie)
      .returning(['id', 'title'])
      .then((movies) => movies[0]);

    res.status(201).json(insertedMovie);
  } catch (error) {
    next(error);
  }
});


app.patch(`/movies_db/:id`, async (req, res, next) => {  //update a specific movie
  try {
    const { id } = req.params;

    const existingMovie = await knexInstance(`movies`).where(`id`, id).first();
    if (!existingMovie) {
      return res.status(404).json({ error: `Movie ain't here chief` });
    }

    const patchMovie = { ...existingMovie, ...req.body };
    delete patchMovie.id;

    await knexInstance(`movies`).where(`id`, id).update(patchMovie);

    const updatedMovie = await knexInstance(`movies`).where(`id`, id).first();

    res.json(updatedMovie);
  } catch (error) {
    next(error);
  }
});

app.delete('/movies_db/title/:title', async (req, res, next) => {  //delete a specific movie based on title
  try {
    const { title } = req.params;

    const deletedMovie = await knexInstance('movies').where('title', title).del();
    if (deletedMovie === 0) {
      return res.status(404).json({ error: `Movie "${title}" not found` });
    } else {
      res.json({ message: `Movie "${title}" deleted with extreme prejudice milord` });
    }
  } catch (error) {
    next(error);
  }
});


app.use((err, req, res) => {  //handles authorized methods
  console.error(err);
  res.status(403).json({error: `No no, we don't do that here`});
});

app.use((err, req, res) => {  //handles errors
  console.error(err);
  res.status(500).json({ error: `Internal server error. It's not you, it's me` });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;