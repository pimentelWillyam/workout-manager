import { View } from "native-base"
import React, { useEffect, useState } from "react"
import { GetUserMaximumRepetitions } from "../../back/useCases/GetUserMaximumRepetitions";
import { PullupsMaximumRepetitionsForm } from "../components/forms/PullupsMaximumRepetitionsForm";
import { PullupsBox } from "../components/boxes/PullupsBox";


export const PullupsLevelScreen = () => {

  const [hasMaximumRepetitionNumber, setHasMaximumRepetitionNumber] = useState(false)

  useEffect(() => {
    GetUserMaximumRepetitions.execute('pullups').then(value => {
      if (value === 0) setHasMaximumRepetitionNumber(false)
      else setHasMaximumRepetitionNumber(true)
    })
  }, [])

  return(
    <View>
      <PullupsMaximumRepetitionsForm/>
    </View>
  )

}