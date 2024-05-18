export class WorkoutListFetcher {
    static execute(): { id: number, name: string }[]{
        return[
            {
                id: 1,
                name: 'pushup'
            },
            {
                id: 2,
                name: 'pullup'
            },
            {
                id: 3,
                name: 'situp'
            },
            {
                id: 4,
                name: 'squat'
            },
        ]
    }
}
