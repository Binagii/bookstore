import { View, Image, Text, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import styles from "../../assets/styles/login.styles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import { Link } from "expo-router";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    fetch("http://localhost:3000/api/auth/login",{
       

    })
  }


  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior ={Platform.OS === "ios" ? "padding" : "height"}
    >
    <View style={styles.container}>
      {/*  Illustaration */}
      <View style={styles.topIllustration}>
        <Image
          source={require("../../assets/images/code.png")}
          style={styles.illustrationImage}
          resideMode = "contain"
        />
      </View>

      <View style={styles.card}>
      <View style={styles.formContainer}>
        {/* EMAIL */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons
               name = "mail-outline"
               size = {20}
               color = {COLORS.primary}
               style = {styles.inputIcon}
            />
            <TextInput
               style = {styles.input}
               placeholder = "Enter your email"
               placeholderTextColor = {COLORS.placeholderText}
               value = {email}
               onChangeText = {setEmail}
               keyboardType = "email-address"
               autoCapitalize = "none"
            
            />
          </View>
        </View>
        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons
               name = "key"
               size = {20}
               color = {COLORS.primary}
               style = {styles.inputIcon}
            />
            <TextInput

               style = {styles.input}
               placeholder = "Enter your password"
               placeholderTextColor = {COLORS.placeholderText}
               value = {password}
               onChangeText = {setPassword}
               secureTextEntry = {!showPassword}

            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size = {20}
                color = {COLORS.primary}
              />

            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}
        disabled={isLoading}>
          {isLoading ? (
             <ActivityIndicator color="#fff"/>
          ) : (
            <Text style={styles.buttonText}>Login</Text>

          )}
        </TouchableOpacity>
         { /* Footer */ }
         <View style={styles.footer}>
           <Text style={styles.footerText}>Don't have an account?</Text>
           <Link href="/signup" asChild>
             <TouchableOpacity>
                   <Text style={styles.link}>Sign Up</Text>
             </TouchableOpacity>
           </Link>
         </View>
      </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}