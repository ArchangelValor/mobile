import { View, StyleSheet } from 'react-native';
import { Text } from './Text';

interface ProfitLossCardProps {
  netIncome: string;
  changePercentage: string;
  income: string;
  expenses: string;
  date: string;
}

export default function ProfitLossCard({
  netIncome,
  changePercentage,
  income,
  expenses,
  date,
}: ProfitLossCardProps) {
  const isNegative = netIncome.startsWith('-');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PROFIT AND LOSS</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      
      <Text style={[
        styles.netIncome,
        isNegative && styles.negative
      ]}>
        {netIncome}
      </Text>
      <Text style={styles.subtitle}>Net Income for {date}</Text>
      
      <Text style={[
        styles.change,
        isNegative ? styles.redText : styles.greenText
      ]}>
        {changePercentage} from last month
      </Text>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Income</Text>
        <Text style={styles.value}>{income}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Expenses</Text>
        <Text style={styles.value}>{expenses}</Text>
      </View>
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
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  date: {
    fontSize: 14,
    color: '#64748b',
  },
  netIncome: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  change: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#64748b',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
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

