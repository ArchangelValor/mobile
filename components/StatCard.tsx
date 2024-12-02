import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from './ui/Card';
import { Text } from './ui/Text';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  isPositive 
}) => {
  return (
    <Card variant="dark" style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={[
        styles.change,
        isPositive ? styles.positive : styles.negative
      ]}>
        {change}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  title: {
    color: '#9CA3AF',
    marginBottom: 8,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  change: {
    fontSize: 12,
  },
  positive: {
    color: '#34D399',
  },
  negative: {
    color: '#EF4444',
  },
});

