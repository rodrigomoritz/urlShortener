import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';

import Shortener from '../models/Shortener';

import CreateShortenerSevice from '../services/CreateShortenerService';
import ShortenersRepository from '../repositories/ShortenersRepository';

const shortenerRoutes = Router();

shortenerRoutes.get('/', async (request, response) => {
  const shotenersRepository = getCustomRepository(ShortenersRepository);
  const shoteners = await shotenersRepository.find();

  return response.json(shoteners);
});

shortenerRoutes.post('/', async (request, response) => {
  try {
    const { url } = request.body;

    const shortenersRepository = getCustomRepository(ShortenersRepository);

    const findShortenerUrl = await shortenersRepository.findByUrl(url);

    if (findShortenerUrl) {
      return response.json({ newUrl: findShortenerUrl });
    }

    const createShortener = new CreateShortenerSevice();

    const shortener = await createShortener.execute({
      url,
    });

    return response.json({ newUrl: shortener.short });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default shortenerRoutes;
