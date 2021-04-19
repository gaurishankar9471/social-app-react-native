import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  const Skip = ({...props}) => <Button title="Skip" color="#fff" {...props} />;
  const Next = ({...props}) => <Button title="Next" color="#fff" {...props} />;
  const Done = ({...props}) => (
    <TouchableOpacity
      style={{
        marginHorizontal: 8,
      }}
      {...props}>
      <Text>Done</Text>
    </TouchableOpacity>
  );

  const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
    return (
      <View
        style={{
          width: 5,
          height: 5,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#BF3325',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#383CC1',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#6A1B4D',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
