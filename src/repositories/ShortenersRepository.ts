import { EntityRepository, Repository } from 'typeorm';

import Shortener from '../models/Shortener';

@EntityRepository(Shortener)
class ShortenersRepository extends Repository<Shortener> {
  public async findByDate(date: Date): Promise<Shortener | null> {
    const findShortener = await this.findOne({
      where: { date },
    });

    return findShortener || null;
  }

  public async findByUrl(url: string): Promise<Shortener | null> {
    const findShortener = await this.findOne({
      where: { url },
    });

    return findShortener?.short || null;
  }

  public async findByShort(short: string): Promise<Shortener | null> {
    const findShortener = await this.findOne({
      where: { short },
    });

    return findShortener?.url || null;
  }
}

export default ShortenersRepository;
