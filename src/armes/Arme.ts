export class Arme {
    _dgtMin: number
    _dgtMAx: number
    _chanceCrit: number

    constructor() {
        this._dgtMin = Math.floor(Math.random() * 10 + 1)
        this._dgtMAx = Math.floor(Math.random() * 10 + 5)
        this._chanceCrit = Math.random() * 25
    }

    degat = () => {
        let degat = Math.floor(Math.random() * (this._dgtMAx - this._dgtMin)) + this._dgtMin
        let rand = Math.random()
        if (rand < this._chanceCrit) {
            degat *= 1.5
        }
        return degat
    }
}