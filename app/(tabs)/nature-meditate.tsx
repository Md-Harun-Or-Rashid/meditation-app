import { View, Text } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
    FlatList,
    ImageBackground,
    Pressable,
    StyleSheet,
} from "react-native";

import MEDITATION_IMAGES from "@/constants/meditation-images";

const NatureMeditate = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="md-6">
         <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome to practice meditation
         </Text>
         <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
        </Text>

      </View>
      <View>
                    <FlatList
                        data={MEDITATION_DATA}
                        contentContainerStyle={styles.list}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() =>
                                    router.push(`/meditate/${item.id}`)
                                }
                                className="h-48 my-3 rounded-md overflow-hidden"
                            >
                                <ImageBackground
                                    source={MEDITATION_IMAGES[item.id - 1]}
                                    resizeMode="cover"
                                    style={styles.backgroundImage}
                                >
                                    <LinearGradient
                                        // Gradient from transparent to black
                                        colors={[
                                            "transparent",
                                            "rgba(0,0,0,0.8)",
                                        ]}
                                        style={styles.gradient}
                                    >
                                        <Text className="text-gray-100 text-3xl font-bold text-center">
                                            {item.title}
                                        </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </Pressable>
                        )}
                    />
                </View>
      </AppGradient>
      <StatusBar style='light'/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 10,
        justifyContent: "center",
    },
    gradient: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
    },
    list: {
        paddingBottom: 150,
    },
});

export default NatureMeditate;