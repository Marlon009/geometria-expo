import { View, Text, TextInput, Image, Pressable, StyleSheet, useColorScheme } from 'react-native';
import { useState } from 'react';

export default function Triangulo() {
    const [lado, setLado] = useState('');
    const [base, setBase] = useState('');
    const [resultado, setResultado] = useState('');
    const theme = useColorScheme();

    const isDark = theme === 'dark';
    const styles = getStyles(isDark);

    const calcular = () => {}
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
        backgroundColor: '#4CAF50',
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
  