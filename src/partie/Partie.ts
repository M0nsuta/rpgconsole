import { Mechant } from './../personnages/Mechant';
import { Arme2 } from './../armes/Arme2';
import { inputReader } from './../scripts/tools';
import { Personnage } from './../personnages/Personnage';
import { Arme1 } from '../armes/Arme1';
import { Gentil } from '../personnages/Gentil';
import { Arme } from '../armes/Arme';
export class Partie {
    _mechant: Personnage;
    _gentil: Personnage;
    _tour: string[];

    constructor(mechant: Personnage, gentil: Personnage) {
        this._mechant = mechant;
        this._gentil = gentil;
        this._tour = []
    }

    get mechant(): Personnage {
        return this._mechant
    }

    get gentil(): Personnage {
        return this._gentil
    }

    get tour(): string[] {
        return this._tour
    }

    set tour(tour: string[]) {
        this._tour = tour
    }

    public static nouvellePartie = async () => {
        let nomDugentil = await inputReader('Nommez votre gentil :')
        let arme = await Partie.choixArme() as Arme
        let gentil = new Gentil(nomDugentil, arme)
        let mechant = new Mechant()
        return new Partie(mechant, gentil)
    }

    public static choixArme = async () => {
        let arme = new Arme();
        let choix = await inputReader(
            'Choissisez une arme : 1 - Arme 1 2 - Arme 2'
        )
        console.log(choix)
        if (choix === JSON.stringify(1)) {
            arme = new Arme1()
        }
        else if (choix === JSON.stringify(2)) {
            arme = new Arme2()
        } else {
            Partie.choixArme()
        }

        return arme;
    }
}