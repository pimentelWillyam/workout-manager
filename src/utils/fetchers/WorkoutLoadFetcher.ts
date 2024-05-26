import { WorkoutLoad } from "../types/WorkoutLoad";

export class WorkoutLoadFetcher {
  static execute(maximumRepetitions: number): WorkoutLoad{
    const baseline = Math.ceil(maximumRepetitions/2)
    if (baseline <1 ) return {
        level: 3,
        firstRepetition: 1,
        secondRepetition: 1,
        thirdRepetition: 1,
        fourthRepetition: 1,
        fifthRepetition: 1,
    }
    return {
        level: maximumRepetitions,
        firstRepetition: baseline,
        secondRepetition: baseline + 1,
        thirdRepetition: baseline -1,
        fourthRepetition: baseline -1,
        fifthRepetition: baseline,
      }
  }
}