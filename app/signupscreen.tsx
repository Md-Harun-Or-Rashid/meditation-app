import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { auth } from "@/firebaseConfig";

const SignupScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/nature-meditate"); // Redirect to the desired screen
        } catch (err) {
            setError("Failed to create an account. Please try again.");
            console.error("Signup error:", err); // Log the actual error for debugging
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
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
            <Button title="Sign Up" onPress={handleSignup} />
            <Text
                style={styles.linkText}
                onPress={() => router.push("/loginscreen")}
            >
                Already have an account? Login here
            </Text>
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

export default SignupScreen;
