import { SafeAreaView, ScrollView, useColorScheme } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";


const LayOut = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
      </ScrollView>
    </SafeAreaView>
  )
}
