import { View } from "react-native";
import ProfileDetails from "@/components/ProfileDetails";
import "../global.css"
import MenuDetails from "@/components/MenuDetails";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
    <View className="flex-1 items-center justify-center">
      <ProfileDetails />
    </View>
    <View className="flex-1 items-center justify-center">
    <MenuDetails />
    </View>
  </View>
  );
}
