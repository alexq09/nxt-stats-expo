import { AuthProdivder, useAuth } from "@/lib/auth-context";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function InnerLayout() {
  const { user, isLoadingUser } = useAuth();

  return (
    <Stack>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!user}>
        <Stack.Screen name="auth" options={{ title: "Authentication" }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProdivder>
      <SafeAreaProvider>
        <StatusBar />
        <InnerLayout />
      </SafeAreaProvider>
    </AuthProdivder>
  );
}
