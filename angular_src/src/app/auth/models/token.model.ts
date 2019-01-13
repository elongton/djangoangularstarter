//this is returned by Django when registration step 1 succeeds
import { DjangoUser } from './djangoUser.model';

export class Token {
  constructor(
    public token: string,
    public user: DjangoUser,
  ){}
}
