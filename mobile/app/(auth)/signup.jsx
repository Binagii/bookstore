import { View,Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import styles from "../../assets/styles/signup.styles"
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import {useState }  from "react"; 
import { useRouter } from "expo-router";
import { useAuthStore } from "../../store/authStore";


export default function Signup() {

  
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {user, isLoading, register} = useAuthStore();

  console.log("user is here:", user);


  const handleSignup = async () => {
    const result = await register(username,email,password);

    if(!result.success) Alert.alert("Error", result.error);
  }


  return (
    <KeyboardAvoidingView
       style={{flex : 1}}
       behavior = {Platform.OS === "ios" ? "padding" : "height"}
    >

      <View style={styles.container}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>BookStore</Text>
            <Text style={styles.subtitle}>Share your favourite reads</Text>
          </View>

          <View style={styles.formContainer}>
            {/* USERNAME INPUT */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                   name = "person-outline"
                   size = {20}
                   color = {COLORS.primary}
                   style = {styles.inputIcon}

                />
                <TextInput
                   style = {styles.input}
                   placeholder = "John Doe"
                   placeholderTextColor = {COLORS.placeholderText}
                   value = {username}
                   onChangeText = {setUsername}
                   autoCapitalize = "none"
                
                />
              </View>
            </View>
                {/* Email */}
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
                    placeholder = "enter your email"
                    placeholderTextColor = {COLORS.placeholderText}
                    onChangeText = {setEmail}
                    value = {email}
                    autoCapitalize  = "none"
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
                    placeholder = "Enter your Password"
                    placeholderTextColor = {COLORS.placeholderText}
                    value = {password}
                    onChangeText = {setPassword}
                    keyboardType = "email-address"
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

            

        <TouchableOpacity style={styles.button} onPress={handleSignup}
        disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#fff"/>
          ) : (
             <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.link}>Login</Text>

          </TouchableOpacity>
        </View>

          </View>
        </View>    
      </View>

    </KeyboardAvoidingView>
    
  );
}