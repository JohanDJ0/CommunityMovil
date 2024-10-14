import { View } from "react-native";
import { Slot } from "expo-router";
import { Auth0Provider } from "react-native-auth0"; // Asegúrate de importar Auth0Provider

const DOMAIN = "dev-zu324xu4xeuw1wo7.us.auth0.com";
const CLIENT_ID = "Rbkrp0AsRV2djN8qgUIetn7lTl4rMrVb";

function _layout() {
  return (
    <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID}>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </Auth0Provider>
  );
}

export default _layout;
