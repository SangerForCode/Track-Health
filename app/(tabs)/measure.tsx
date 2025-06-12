import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';

const MeasureBPScreen: React.FC = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [pulse, setPulse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateBP = () => {
    if (!systolic || !diastolic) {
      Alert.alert('Error', 'Please enter both systolic and diastolic values');
      return false;
    }

    const sys = parseInt(systolic);
    const dia = parseInt(diastolic);

    if (isNaN(sys) || isNaN(dia)) {
      Alert.alert('Error', 'Please enter valid numbers');
      return false;
    }

    if (sys < 70 || sys > 250 || dia < 40 || dia > 150) {
      Alert.alert('Warning', 'Please check your readings. Values seem unusual.');
      return false;
    }

    if (sys <= dia) {
      Alert.alert('Error', 'Systolic pressure should be higher than diastolic');
      return false;
    }

    return true;
  };

  const getBPCategory = (sys: number, dia: number) => {
    if (sys < 120 && dia < 80) return { category: 'Normal', color: '#4ADE80' };
    if (sys < 130 && dia < 80) return { category: 'Elevated', color: '#FCD34D' };
    if (sys < 140 || dia < 90) return { category: 'High Stage 1', color: '#FB923C' };
    if (sys < 180 || dia < 120) return { category: 'High Stage 2', color: '#F87171' };
    return { category: 'Hypertensive Crisis', color: '#DC2626' };
  };

  const handleSave = async () => {
    if (!validateBP()) return;

    setIsLoading(true);
    
    try {
      const sys = parseInt(systolic);
      const dia = parseInt(diastolic);
      const bpCategory = getBPCategory(sys, dia);
      
      // Simulate saving to database
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      Alert.alert(
        'Reading Saved',
        `BP: ${sys}/${dia} mmHg\nCategory: ${bpCategory.category}${pulse ? `\nPulse: ${pulse} bpm` : ''}`,
        [
          {
            text: 'OK',
            onPress: () => {
              setSystolic('');
              setDiastolic('');
              setPulse('');
            }
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to save reading. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Measure Blood Pressure</Text>
        <Text style={styles.subtitle}>Enter your current readings</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.bpContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Systolic</Text>
            <Text style={styles.unit}>mmHg</Text>
            <TextInput
              style={styles.input}
              value={systolic}
              onChangeText={setSystolic}
              placeholder="120"
              placeholderTextColor="#6B7280"
              keyboardType="numeric"
              maxLength={3}
            />
          </View>

          <View style={styles.separator}>
            <Text style={styles.separatorText}>/</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Diastolic</Text>
            <Text style={styles.unit}>mmHg</Text>
            <TextInput
              style={styles.input}
              value={diastolic}
              onChangeText={setDiastolic}
              placeholder="80"
              placeholderTextColor="#6B7280"
              keyboardType="numeric"
              maxLength={3}
            />
          </View>
        </View>

        <View style={styles.pulseContainer}>
          <Text style={styles.label}>Pulse (Optional)</Text>
          <TextInput
            style={[styles.input, styles.pulseInput]}
            value={pulse}
            onChangeText={setPulse}
            placeholder="72"
            placeholderTextColor="#6B7280"
            keyboardType="numeric"
            maxLength={3}
          />
          <Text style={styles.pulseUnit}>bpm</Text>
        </View>

        <TouchableOpacity
          style={[styles.saveButton, isLoading && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={isLoading}
          activeOpacity={0.8}
        >
          <Text style={styles.saveButtonText}>
            {isLoading ? 'Saving...' : 'Save Reading'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Blood Pressure Categories</Text>
        <View style={styles.categoryItem}>
          <View style={[styles.categoryDot, { backgroundColor: '#4ADE80' }]} />
          <Text style={styles.categoryText}>Normal: Less than 120/80</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={[styles.categoryDot, { backgroundColor: '#FCD34D' }]} />
          <Text style={styles.categoryText}>Elevated: 120-129/less than 80</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={[styles.categoryDot, { backgroundColor: '#FB923C' }]} />
          <Text style={styles.categoryText}>High Stage 1: 130-139/80-89</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={[styles.categoryDot, { backgroundColor: '#F87171' }]} />
          <Text style={styles.categoryText}>High Stage 2: 140/90 or higher</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
  },
  
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '400',
  },
  
  formContainer: {
    backgroundColor: '#2A2A2A',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  
  bpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  
  inputGroup: {
    alignItems: 'center',
    flex: 1,
  },
  
  label: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
    marginBottom: 4,
  },
  
  unit: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  
  input: {
    backgroundColor: '#374151',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    minWidth: 80,
  },
  
  separator: {
    marginHorizontal: 16,
    alignItems: 'center',
  },
  
  separatorText: {
    fontSize: 32,
    fontWeight: '300',
    color: '#6B7280',
  },
  
  pulseContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  
  pulseInput: {
    minWidth: 120,
    marginTop: 8,
  },
  
  pulseUnit: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
  },
  
  saveButton: {
    backgroundColor: '#4ADE80',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  
  saveButtonDisabled: {
    backgroundColor: '#374151',
  },
  
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  
  infoContainer: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 20,
  },
  
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  
  categoryText: {
    fontSize: 14,
    color: '#D1D5DB',
  },
});

export default MeasureBPScreen;