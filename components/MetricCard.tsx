import { View, StyleSheet } from 'react-native';
import { Text } from './Text';

interface MetricCardProps {
  title: string;
  amount: string;
  change: string;
  isNegative?: boolean;
}

export default function MetricCard({ 
  title, 
  amount, 
  change, 
  isNegative = false 
}: MetricCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={[
        styles.amount,
        isNegative && styles.negative
      ]}>
        {amount}
      </Text>
      <Text style={[
        styles.change,
        isNegative ? styles.redText : styles.greenText
      ]}>
        {change}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    color: '#64748b',
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  change: {
    fontSize: 12,
  },
  negative: {
    color: '#ef4444',
  },
  redText: {
    color: '#ef4444',
  },
  greenText: {
    color: '#22c55e',
  },
});

