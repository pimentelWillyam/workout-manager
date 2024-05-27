import React, { useState } from "react";
import { FormControl, Input, Stack } from "native-base";
import { Form, FormItem, submitForm } from "react-native-form-component";
import { HandleMaximumRepetitionsFormSubmission } from "../../../handlers/HandleMaximumRepetitionsFormSubmission";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../../navigation/StackNavigator";

export function PullupsMaximumRepetitionsForm() {
  const [maximumRepetitions, setMaximumRepetitions] = useState("0")
  const navigation = useNavigation<NavigationStackTypes>()

  return (
    <Form buttonText="Registrar" onButtonPress={() => {HandleMaximumRepetitionsFormSubmission.execute('pullups', maximumRepetitions).then( () => navigation.navigate('Barra'))}}>
      <FormItem
    label="Repetições máximas na barra fixa"
    isRequired
    value={maximumRepetitions}
    onChangeText={(change) => setMaximumRepetitions(change)}
  />
    </Form >
  );
}
