import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { auth } from "@/firebaseConfig";


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/nature-meditate"); // Redirect to home or another screen after login
        } catch (err) {
            setError("Invalid email or password.");
        }
    };

    return (
        <View style={styles.container}>
          
            <Text style={styles.title}>Login</Text>
            {error && <Text style={styles.errorText}>{error}</Text>}
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            
            {/* Navigation to Sign Up */}
            <TouchableOpacity onPress={() => router.push("/signupscreen")}>
                <Text style={styles.linkText}>Don't have an account? Sign up here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
        backgroundColor: "white",
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 16,
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    linkText: {
        color: "#007BFF",
        marginTop: 15,
        textAlign: "center",
    },
});

export default LoginScreen;


