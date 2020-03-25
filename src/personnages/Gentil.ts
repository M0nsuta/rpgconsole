import { Personnage } from './Personnage';
import { Arme } from '../armes/Arme';

export class Gentil extends Personnage {
    constructor(name: string, arme: Arme) {
        super(name, arme)
    }

    soin = (cible: Personnage) => { }

}