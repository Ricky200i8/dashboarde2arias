import { Text, View } from "react-native";
import ProfileDetails from "@/components/ProfileDetails";
import "../global.css"

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-800">
      <ProfileDetails></ProfileDetails>
      
      </Text>
    </View>
  );
}
