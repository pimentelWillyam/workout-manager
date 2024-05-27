import { View } from "native-base"
import React, { useEffect, useState } from "react"
import { GetUserMaximumRepetitions } from "../../back/useCases/GetUserMaximumRepetitions";
import { SquatsBox } from "../components/boxes/SquatsBox";
import { SquatsMaximumRepetitionsForm } from "../components/forms/SquatsMaximumRepetitionsForm";


export const SquatsLevelScreen = () => {

  const [hasMaximumRepetitionNumber, setHasMaximumRepetitionNumber] = useState(false)

  useEffect(() => {
    GetUserMaximumRepetitions.execute('pullups').then(value => {
      if (value === 0) setHasMaximumRepetitionNumber(false)
      else setHasMaximumRepetitionNumber(true)
    })
  }, [])

  return(
    <View>
      <SquatsMaximumRepetitionsForm/>
    </View>
  )

}