import { StyleSheet, View, Image, Text } from "react-native";
import ButtonKvImage from "./buttons/ButtonKvImage";
import BackArrow from "../../assets/images/navigationAndSmall/btnTemplateViewBackArrow.svg";
import { useNavigation } from "@react-navigation/native";

export default function TemplateViewWithTopChildren({
  children,
  navigation,
  topChildren,
  screenName,
}) {
  const handleBackPress = async () => {
    // await ScreenOrientation.lockAsync(
    //   ScreenOrientation.OrientationLock.PORTRAIT_UP
    // ); // Force back to portrait
    // setOrientation("portrait");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image
          source={require("../../assets/images/imgBackgroundBottomFade.png")}
        />

        {navigation && (
          <View style={styles.btnBack}>
            <ButtonKvImage
              onPress={() => {
                handleBackPress();
              }}
            >
              <BackArrow style={styles.svgBackArrow} />
            </ButtonKvImage>
          </View>
        )}
        <View style={styles.vwLogoAndTopChildren}>
          <Image
            source={require("../../assets/images/KyberV2Shiny.png")}
            style={styles.imgLogo}
          />
          {screenName && <Text style={{ color: "white" }}>{screenName}</Text>}
          {topChildren}
        </View>
      </View>
      <View style={styles.containerBottom}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "gray",
    // borderWidth: 1,
    // borderStyle: "dashed",
    height: "35%",
  },
  btnBack: {
    position: "absolute",
    top: 50,
    left: 20,
  },

  vwLogoAndTopChildren: {
    position: "absolute",
    bottom: 0,

    alignItems: "center",
  },
  containerBottom: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
