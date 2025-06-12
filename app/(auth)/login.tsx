import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors';

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between', // This will push content to top and bottom
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  brandSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
    padding: 12,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  brandText: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.primary,
    marginLeft: 8,
  },
  mainImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  mainImage: {
    width: '80%',
    height: 280,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 'auto', // This will push the buttons to the bottom
  },
  baseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 25, // More rounded
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 48, // Fixed height for consistency
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(219, 68, 55, 0.2)',
    borderWidth: 1,
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  phoneButton: {
    backgroundColor: COLORS.primary,
  },
  buttonIcon: {
    marginRight: 8,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleText: {
    color: '#DB4437',
    fontWeight: '700',
    fontSize: 16,
  },
  facebookText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  phoneText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(160, 160, 160, 0.3)',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#A0A0A0',
    fontSize: 14,
  },
  footerText: {
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 12,
  },
  linkText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

// Import your app logo image here
// import AppLogo from '../assets/logo.png';

const AuthScreen: React.FC = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log('Google login pressed');
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic
    console.log('Facebook login pressed');
  };

  const handlePhoneLogin = () => {
    // Implement phone login logic
    console.log('Phone login pressed');
  };

  return (
    <SafeAreaView style={authStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      
      {/* Brand Section */}
      <View style={authStyles.brandSection}>
        <Ionicons name="heart" size={24} color={COLORS.primary} />
        <Text style={authStyles.brandText}>Track Health</Text>
      </View>

      {/* Main Image Section */}
      <View style={[authStyles.mainImageContainer, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        <Image
          source={require('../../assets/images/Login page/Asian family-bro.png')}
          style={[authStyles.mainImage, { width: '90%', height: 300 }]}
          resizeMode="contain"
        />
      </View>

      {/* Buttons Container */}
      <View style={authStyles.buttonContainer}>
        {/* Google Login Button */}
        <TouchableOpacity
          style={[authStyles.baseButton, authStyles.googleButton]}
          onPress={handleGoogleLogin}
          activeOpacity={0.8}
        >
          <View style={authStyles.buttonIcon}>
            <FontAwesome name="google" size={16} color="#DB4437" />
          </View>
          <Text style={authStyles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Facebook Login Button */}
        <TouchableOpacity
          style={[authStyles.baseButton, authStyles.facebookButton]}
          onPress={handleFacebookLogin}
          activeOpacity={0.8}
        >
          <View style={authStyles.buttonIcon}>
            <FontAwesome name="facebook" size={16} color="#FFFFFF" />
          </View>
          <Text style={authStyles.facebookText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <View style={authStyles.divider}>
          <View style={authStyles.dividerLine} />
          <Text style={authStyles.dividerText}>or</Text>
          <View style={authStyles.dividerLine} />
        </View>

        {/* Phone Login Button */}
        <TouchableOpacity
          style={[authStyles.baseButton, authStyles.phoneButton]}
          onPress={handlePhoneLogin}
          activeOpacity={0.8}
        >
          <View style={authStyles.buttonIcon}>
            <Ionicons name="call" size={16} color="#FFFFFF" />
          </View>
          <Text style={authStyles.phoneText}>Continue with Phone</Text>
        </TouchableOpacity>
      </View>

      <Text style={authStyles.footerText}>
        By continuing, you agree to our{' '}
        <Text style={authStyles.linkText}>Terms of Service</Text>
        {' '}and{' '}
        <Text style={authStyles.linkText}>Privacy Policy</Text>
      </Text>
    </SafeAreaView>
  );
};

export default AuthScreen;