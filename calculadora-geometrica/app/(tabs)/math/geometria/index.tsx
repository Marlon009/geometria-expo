// app/geometria.tsx
import { View, Text, StyleSheet, Pressable, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';

export default function Geometria() {
  const router = useRouter();
  const theme = useColorScheme();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <Text style={styles.title}>Calculadora Geométrica</Text>
      <Text style={styles.subtitle}>Escolha uma forma para começar:</Text>

      <Pressable style={styles.button} onPress={() => router.push('/math/geometria/formas/quadrado')}>
        <Text style={styles.buttonText}>Quadrado</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/math/geometria/formas/circulo')}>
        <Text style={styles.buttonText}>Triângulo</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/math/geometria/formas/circulo')}>
        <Text style={styles.buttonText}>Círculo</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/math/geometria/formas/retangulo')}>
        <Text style={styles.buttonText}>Retângulo</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/math/geometria/formas/trapezio')}>
        <Text style={styles.buttonText}>Trapézio</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('//formas/pararelograma')}>
        <Text style={styles.buttonText}></Text>
      </Pressable>

      {/* Botões para outras formas podem ser adicionados aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dark: {
    backgroundColor: '#121212',
  },
  light: {
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffff',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#ffff',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
