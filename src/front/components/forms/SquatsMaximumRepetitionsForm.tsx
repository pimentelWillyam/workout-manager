import React, { useState } from "react";
import { FormControl, Input, Stack } from "native-base";
import { Form, FormItem } from "react-native-form-component";
import { HandleMaximumRepetitionsFormSubmission } from "../../../handlers/HandleMaximumRepetitionsFormSubmission";
import { NavigationStackTypes } from "../../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";

export function SquatsMaximumRepetitionsForm() {
  const [maximumRepetitions, setMaximumRepetitions] = useState("0")
  const navigation = useNavigation<NavigationStackTypes>()

  return (
    <Form buttonText="Registrar" onButtonPress={() => {HandleMaximumRepetitionsFormSubmission.execute('squats', maximumRepetitions).then( () => navigation.navigate('Agachamentos'))}}>
      <FormItem
        label="Repetições máximas nos agachamentos"
        isRequired
        value={maximumRepetitions}
        onChangeText={(change) => setMaximumRepetitions(change)}
      />
    </Form>
  );
}
