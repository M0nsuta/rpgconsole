import { Partie } from './Partie';
class Combat {
    cibler = (p: Partie) => {
        p.gentil.cible = p.mechant
        p.mechant.cible = p.gentil
    }

    tour = (p: Partie) => {
        this.cibler(p)
        let tour: string[] = []
        let rand = Math.random()
        if (rand <= 0.5) {
            tour.push(p.gentil.attaquer())
            tour.push(p.mechant.attaquer())
        } else {
            tour.push(p.mechant.attaquer())
            tour.push(p.gentil.attaquer())
        }

        p.tour = tour
    }

    jeu = async () => {
        let p = await Partie.nouvellePartie()
        console.log(p)
        while (true) {
            this.tour(p)
            for (let action of p.tour) {
                console.log(action)
            }
            if (p.mechant.pv <= 0) {
                console.log('gentil a gagné')
                break
            } else if (p.gentil.pv <= 0) {
                console.log('mechant a gagné')
                break
            }
        }
    }

}

export default Object.freeze(new Combat())