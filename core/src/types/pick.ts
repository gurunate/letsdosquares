import { Owner as TOwner } from './owner';
import { Square as TSquare } from './square';

export interface Pick {
    id: string;
    owner: TOwner;
    square: TSquare;
}
