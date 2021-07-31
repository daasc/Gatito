import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, StatusBar, Platform} from "react-native";
import stylesGlobal, { cors } from '../../style';
import styleHome from '../../style/home';

export default function Home ({children}) {
  return <> <SafeAreaView >
  <StatusBar  />
  <KeyboardAvoidingView 
  behavior = {Platform.OS == 'ios' ? "padding" : 'height'}
  style={stylesGlobal.preencher}
  >
   {children}
  </KeyboardAvoidingView>
</SafeAreaView>
 <SafeAreaView style={styleHome.ajusteTelaBaixo} />
</>
}