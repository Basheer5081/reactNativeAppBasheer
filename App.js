import { View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import Navigation from './src/Navigation';
import ReportScreen from './src/Botton/BottomScreen/ReportScreen';
import FloatingAnimationButton from './src/FloatingAnimationButton';
import Header from './src/CustomComponents/redux/Header';
import Product from './src/CustomComponents/redux/Product';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  // const authContext = React.useMemo(() => ({
  //   signIn: () => {
  //     setUserToken('basheer');
  //     setIsLoading(false);
  //   },
  //   signOut: () => {
  //     setUserToken(null);
  //     setIsLoading(false);
  //   },
  //   signUp: () => {
  //     setUserToken('basheer');
  //     setIsLoading(false);
  //   },
  // }))
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#F86F03' />
      </View>
    )
  }
  return (
    // <Navigation />
    <View>
      <Header />
      <Product />
    </View>

    // <FloatingAnimationButton />
    // <ReportScreen />
  )
}

export default App