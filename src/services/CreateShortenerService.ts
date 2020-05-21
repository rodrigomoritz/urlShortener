import { getCustomRepository } from 'typeorm';
import Shortener from '../models/Shortener';
import ShortenersRepository from '../repositories/ShortenersRepository';

interface Request {
  url: string;
}
class CreateShortenerService {
  public async execute({ url }: Request): Promise<Shortener> {
    const shortenersRepository = getCustomRepository(ShortenersRepository);

    const parsedDate = new Date();

    const date = parsedDate;

    const id = Math.random().toString(36).slice(-10);

    const short = `http://localhost:8081/${id}`;

    const shortener = shortenersRepository.create({
      id,
      url,
      short,
      date,
    });

    await shortenersRepository.save(shortener);

    return shortener;
  }
}

export default CreateShortenerService;
