import { UpdateUserMaximumRepetitions } from "../back/useCases/UpdateUserMaximumRepetitions"

export class HandleMaximumRepetitionsFormSubmission {
    static async execute(exercise: string, maximumRepeats: string){
        const maximumRepeatsAsInteger = parseInt(maximumRepeats)
        // if (isNaN(maximumRepeatsAsInteger)) throw new Error('Valor inválido para o número máximo de repetições')
        await UpdateUserMaximumRepetitions.execute(exercise, maximumRepeatsAsInteger)
    }
}