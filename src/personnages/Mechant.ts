import { Personnage } from './Personnage';
import { Arme } from '../armes/Arme';

export class Mechant extends Personnage {
    constructor() {
        super()
        this._name = this.genererNom()
        this._arme = new Arme()
    }

    genererNom = () => {
        let name = Math.random().toString(36).replace(/[^a-z]+/g, '')
        return name[0].toUpperCase() + name.substring(1)
    }
}