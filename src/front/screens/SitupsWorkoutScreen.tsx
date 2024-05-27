import { View } from "native-base"
import React, { useEffect, useState } from "react"
import { GetUserMaximumRepetitions } from "../../back/useCases/GetUserMaximumRepetitions";
import { SitupsBox } from "../components/boxes/SitupsBox";
import { SitupsMaximumRepetitionsForm } from "../components/forms/SitupsMaximumRepetitionsForm";


export const SitupsWorkoutScreen = () => {

  const [hasMaximumRepetitionNumber, setHasMaximumRepetitionNumber] = useState(false)

  useEffect(() => {
    GetUserMaximumRepetitions.execute('pullups').then(value => {
      if (value === 0) setHasMaximumRepetitionNumber(false)
      else setHasMaximumRepetitionNumber(true)
    })
  }, [])
  return(
    <View>
      <SitupsBox />
    </View>
  )

}