import { useState } from "react";

import {View,Text,TextInput,KeyboardAvoidingView,Platform,}
from "react-native";

export default function Index() {

  const [idade, setIdade] = useState("");

  const today = new Date(); // ← como o professor pediu

  const anoAtual = today.getFullYear();

  const anoNascimento = anoAtual - Number(idade || 0);

  return (
<KeyboardAvoidingView

      style={{ flex: 1 }}

      behavior={Platform.OS === "ios" ? "padding" : "height"}
>
<View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
<Text style={{ fontSize: 22, fontWeight: "bold" }}>

          Calculadora de Ano de Nascimento
</Text>
<Text style={{ marginTop: 10 }}>Digite sua idade:</Text>
<TextInput

          value={idade}

          onChangeText={setIdade}

          keyboardType="numeric"

          placeholder="Ex: 16"

          style={{

            borderWidth: 1,

            padding: 10,

            marginTop: 8,

            borderRadius: 8,

          }}

        />
<Text style={{ marginTop: 20 }}>

          Seu ano de nascimento é: {idade ? anoNascimento : "-"}
</Text>
</View>
</KeyboardAvoidingView>

  );

}
 