import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from '../../atoms/Button';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form"
import { FormData } from '../../../interfaces/IinputLogin.interface';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useAuthContext } from '../../../state/context/AuthContext';

export const LoginInputItems = () => {

    const navigation = useNavigation();
    const {login} = useAuthContext();
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        login({email: data.email, password: data.password});
    };


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Ingresa tu Email:</Text>
            <Controller
                control={control}
                name="email"
                rules={{ required: 'Email es un campo obligatorio' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{ marginBottom: 18 }}>
                        <TextInput
                            style={[styles.input, errors.email && styles.inputError]}
                            placeholder='Email'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                    </View>
                )}
            />

            <Text style={styles.label}>Ingresa tu Contraseña:</Text>
            <Controller
                control={control}
                name="password"
                rules={{ required: 'Contraseña es un campo obligatorio' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            style={[styles.input, errors.password && styles.inputError]}
                            placeholder='Contraseña'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                    </View>
                )}
            />
            <Button title={'Ingresar'} onPress={handleSubmit(onSubmit)} style={styles.button} textStyle={styles.buttonText} />

            <View style={styles.divider} />

            <TouchableOpacity style={styles.googleButton}>
                <EvilIcons name="sc-google-plus" size={30} color="grey" style={{ paddingBottom: 5 }} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    button: {
        width: '100%',
        paddingVertical: 6,
        marginTop: 20
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 18,
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: '600',
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 0.7,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginBottom: 5,
        height: 50,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    divider: {
        height: 0.7,
        backgroundColor: 'grey',
        marginVertical: 20,
    },
    googleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 12,
        width: 50,
        height: 50,
        marginBottom: 20,
        alignSelf: 'center',
    },
})

