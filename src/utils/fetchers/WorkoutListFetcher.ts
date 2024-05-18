export class WorkoutListFetcher {
    static execute(): { id: number, name: string }[]{
        return[
            {
                id: 1,
                name: 'Flexões'
            },
            {
                id: 2,
                name: 'Flexões na barra fixa'
            },
            {
                id: 3,
                name: 'Abdominais'
            },
            {
                id: 4,
                name: 'Agachamentos'
            },
        ]
    }
}
