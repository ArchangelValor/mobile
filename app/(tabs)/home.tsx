import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MetricCard from '@/components/MetricCard';
import ProfitLossCard from '@/components/ProfitLossCard';
import { getUser } from '@/helper/Session';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { removeSession } from '@/helper/Session';
import WelcomeCard from '@/components/WelcomeCard';
import { ActivityIndicator } from 'react-native';

export default function home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      try{
        const user = await getUser();
      }catch(error) {
        await removeSession();
        router.push('/qrscan');
        console.log(error)
      }
    }
    request()
    setIsLoading(false);
  })
  
  return (
    <SafeAreaView style={styles.container}>
      {
        isLoading ? <ActivityIndicator size={"small"}/> : 
        <>
        <WelcomeCard/>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <MetricCard
            title="Monthly Sales"
            amount="₱21,345,213"
            change="↑ 12.45% from last month"
          />
          
          <MetricCard
            title="Monthly Expenses"
            amount="₱40,068,057"
            change="↑ 11.02% from last month"
            isNegative
          />
          
          <MetricCard
            title="Monthly Income"
            amount="-₱18,722,844"
            change="↓ 5.02% from last month"
            isNegative
          />

          <ProfitLossCard
            netIncome="-₱35,974,476"
            changePercentage="↓ 18.27%"
            income="₱20,618,268"
            expenses="₱56,592,744"
            date="November 2024"
          />
        </View>
      </ScrollView>
        </>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});

