import readline from 'readline'

/**
 * fonction qui renvoie la réponse à la question tapé dans la console
 * @param question 
 */
export const inputReader = async (question: string) => {
    // réponse de la question
    let response = "";

    // création de l'outil pour gérer les entrées et sorties consoles
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    // je génère la question en asynchrone que je await
    await new Promise((resolve, reject) => {
        rl.question(`${question}`, (answer: string) => {
            resolve(answer)
        })
    }).then(onfull => {
        response = JSON.stringify(onfull);
        rl.close()
    })

    return response
}