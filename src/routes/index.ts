import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import shortenerRoutes from './shortener.routes';

import ShortenersRepository from '../repositories/ShortenersRepository';

const routes = Router();

routes.use('/encurtador', shortenerRoutes);

routes.use('/', async (req, res) => {
  const cUrl = `http://localhost:8081${req.path}`;

  const shortenersRepository = getCustomRepository(ShortenersRepository);

  const findShortenerUrl = await shortenersRepository.findByShort(cUrl);

  if (findShortenerUrl) {
    res.redirect(findShortenerUrl);
  } else {
    return res.status(404).json({ error: 'url not found' });
  }
});

export default routes;
