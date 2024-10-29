import { StyleSheet, Text, View,TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link, useRouter } from 'expo-router'
import { useSignUp } from '@clerk/clerk-expo'


const Page = () => {
    const [countryCode,setCountryCode] = useState("+91")
    const [phoneNumber,setPhoneNumber] = useState("")
    const keyboardOffset = Platform.OS=='ios'? 80:10
    const router = useRouter()
    const { signUp } = useSignUp();
    const handleSignup = async ()=>{
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    try {
      await signUp!.create({
        phoneNumber: fullPhoneNumber,
      });
      signUp!.preparePhoneNumberVerification();

      router.push({ pathname: '/verify/[phone]', params: { phone: fullPhoneNumber} });
    } catch (error) {
      console.error('Error signing up:', error);
    }
        
    }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={keyboardOffset} >
    <View style={defaultStyles.container}>
      <Text style = {defaultStyles.header}>Let's get Started!</Text>
      <Text style = {defaultStyles.descriptionText}>Enter your phone number to get the confirmation code.</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='countrycode'
        placeholderTextColor={Colors.gray}
        value={countryCode}
        onChangeText={setCountryCode}
        keyboardType='numeric'

        />
        <TextInput
        style={[styles.input,{flex:1}]}
        placeholder='Phone number'
        keyboardType='numeric'
        placeholderTextColor={Colors.gray}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        />
      </View>
      <Link href={'/login'} replace asChild>
        <Text style={defaultStyles.textLink}>Already have an account? Log in</Text>
        </Link>
      <View style={{flex:1}}/>
       <TouchableOpacity onPress={handleSignup} style={[defaultStyles.pillButton,
        phoneNumber !=""?styles.enabled:styles.disabled,
        {marginBottom:20 }]}>
        <Text style={defaultStyles.buttonText}>Sign up</Text>  
       </TouchableOpacity>
     
    </View>
    </KeyboardAvoidingView>
  )
}

export default Page

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 40,
        flexDirection: 'row',
      },
      input: {
        backgroundColor: Colors.lightGray,
        padding: 20,
        borderRadius: 16,
        fontSize: 20,
        marginRight: 10,
      },
      enabled: {
        backgroundColor: Colors.primary,
      },
      disabled: {
        backgroundColor: Colors.primaryMuted,
      },
})