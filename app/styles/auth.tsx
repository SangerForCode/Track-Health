import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  
  logoImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 24,
  },
  
  appName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '400',
    textAlign: 'center',
  },
  
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    gap: 16,
  },
  
  baseButton: {
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
  },
  
  facebookButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
  },
  
  phoneButton: {
    backgroundColor: '#2A2A2A',
    borderColor: '#4ADE80',
  },
  
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  
  googleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  
  facebookText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1877F2',
  },
  
  phoneText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4ADE80',
  },
  
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
    width: '100%',
    maxWidth: 320,
  },
  
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#374151',
  },
  
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  
  footerText: {
    marginTop: 40,
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
  
  linkText: {
    color: '#4ADE80',
    fontWeight: '600',
  },
});