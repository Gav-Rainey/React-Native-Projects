import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="customer" options={{headerShown:false}}/>
      <Stack.Screen name="merchant" options={{headerShown:false}}/>
      <Stack.Screen name="corporate" options={{headerShown:false}}/>
    </Stack>
  );
};