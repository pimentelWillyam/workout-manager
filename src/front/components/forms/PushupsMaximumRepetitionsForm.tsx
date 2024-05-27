import React, { useState } from "react";
import { Form, FormItem } from "react-native-form-component";
import { HandleMaximumRepetitionsFormSubmission } from "../../../handlers/HandleMaximumRepetitionsFormSubmission";
import { NavigationStackTypes } from "../../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";

export function PushupsMaximumRepetitionsForm() {
  const [maximumRepetitions, setMaximumRepetitions] = useState("0")
  const navigation = useNavigation<NavigationStackTypes>()
  return (
    <Form buttonText="Registrar" onButtonPress={() => {HandleMaximumRepetitionsFormSubmission.execute('pushups', maximumRepetitions).then( () => navigation.navigate('Flexão'))}}>
      <FormItem
    label="Repetições máximas na flexão"
    isRequired
    value={maximumRepetitions}
    onChangeText={(change) => setMaximumRepetitions(change)}
  />
    </Form>
  );
}
