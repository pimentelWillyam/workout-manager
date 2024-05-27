import { View } from "native-base"
import React, { useEffect, useState } from "react"
import { GetUserMaximumRepetitions } from "../../back/useCases/GetUserMaximumRepetitions";
import { PushupsMaximumRepetitionsForm } from "../components/forms/PushupsMaximumRepetitionsForm";
import { PushupsBox } from "../components/boxes/PushupsBox";


export const PushupsLevelScreen = () => {


  const [repetitions, setRepetitions] = useState(-1)

  useEffect(() => {
    GetUserMaximumRepetitions.execute('pullups').then(value => {
      setRepetitions(value)
      console.log('valor:', repetitions)
    })
  }, [repetitions])

  if (repetitions === 0) return(
    <View>
      <PushupsMaximumRepetitionsForm/>
    </View>
  )

}