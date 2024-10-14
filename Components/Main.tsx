import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

const Main = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido a la Pantalla Principal</Text>
      <LoginButton />
    </View>
  );
};

const LoginButton = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ marginTop: 20 }}>
      <Text style={{ color: 'white', backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        Log in
      </Text>
    </TouchableOpacity>
  );
};

export default Main;
