import { Entity, Column, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('shorteners')
class Shortener {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  short: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Shortener;
