import { View, Text, TextInput, Image, Pressable, StyleSheet, useColorScheme } from 'react-native';
import { useState } from 'react';

export default function Circulo() {
  const [raio, setRaio] = useState('');
  const [resultado, setResultado] = useState('');
  const theme = useColorScheme();

  const isDark = theme === 'dark'; 
  const styles = getStyles(isDark);

  const calcular = () => {
    const r = parseFloat(raio);
    if (!r || r <= 0) {
      setResultado('Valor inválido!');
      return;
    }
    const area = Math.PI * r * r;
    const circunferencia = 2 * Math.PI * r;
    const diametro = 2 * r;
    setResultado(`Área: ${area.toFixed(2)}\nCircunferência: ${circunferencia.toFixed(2)}\nDiâmetro: ${diametro.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Círculo</Text>
      <Image source={require('../../../../assets/images/circle.jpg')}  style={styles.image} />
      <Text style={styles.description}>O círculo é uma figura plana definida por todos os pontos a uma mesma distância do centro.</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o raio"
        placeholderTextColor={isDark ? '#aaa' : '#555'}
        keyboardType="numeric"
        value={raio}
        onChangeText={setRaio}
      />

      <Pressable style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </Pressable>

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}

      <View style={styles.formulas}>
        <Text style={styles.formulaTitle}>Fórmulas:</Text>
        <Text style={styles.formula}>Área = π × Raio²</Text>
        <Text style={styles.formula}>Circunferência = 2 × π × Raio</Text>
        <Text style={styles.formula}>Diâmetro = 2 × Raio</Text>
      </View>
    </View>
  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: isDark ? '#121212' : '#f5f5f5',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      color: isDark ? '#fff' : '#000',
    },
    image: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginVertical: 10,
    },
    description: {
      textAlign: 'center',
      fontSize: 16,
      marginBottom: 20,
      color: isDark ? '#ccc' : '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: isDark ? '#888' : '#ccc',
      padding: 10,
      marginBottom: 10,
      borderRadius: 8,
      color: isDark ? '#fff' : '#000',
    },
    button: {
      backgroundColor: '#2196F3',
      padding: 12,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
    },
    result: {
      marginTop: 15,
      fontSize: 16,
      textAlign: 'center',
      color: isDark ? '#fff' : '#000',
    },
    formulas: {
      marginTop: 20,
    },
    formulaTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
      color: isDark ? '#fff' : '#000',
    },
    formula: {
      color: isDark ? '#ddd' : '#333',
    },
  });
