import { Arme } from './../armes/Arme';

export class Personnage {
    _name: string;
    _pv: number;
    _pvMax: number
    _arme: Arme
    _cible?: Personnage

    constructor(name: string = "", arme: Arme = new Arme()) {
        this._name = name;
        this._pv = Math.floor(Math.random() * 100 + 50);
        this._pvMax = this._pv;
        this._arme = arme;
        this._cible = undefined
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get pv(): number {
        return this._pv;
    }

    set pv(pv: number) {
        this._pv = pv;
    }

    get arme(): Arme {
        return this._arme;
    }

    set arme(arme: Arme) {
        this._arme = arme;
    }

    get cible(): Personnage | undefined {
        return this._cible;
    }

    set cible(cible: Personnage | undefined) {
        this._cible = cible;
    }

    attaquer = (): string => {
        let result = ""
        if (this.cible) {
            let degat = this.arme.degat()
            this.cible.pv -= degat

            result = `${this.name} attaque ${this.cible.name} et fait ${degat}. Il reste ${this.cible.pv} de vie à ${this.cible.name}`
        }

        return result

    }

}