  // import React from "react";
  // import { View, ScrollView, Dimensions } from "react-native";
  // import { Text } from "./ui/Text";
  // import { Card } from "./ui/Card";
  // import { LineChart, BarChart, PieChart } from "react-native-chart-kit";

  // const screenWidth = Dimensions.get("window").width;

  // export default function FiDash() {
  //   // Data for Pie Chart
  //   const pieData = [
  //     {
  //       name: "Sales",
  //       amount: 5021.5,
  //       color: "#FF7F6A",
  //       legendFontColor: "#7F7F7F",
  //     },
  //     {
  //       name: "Revenue",
  //       amount: 4021.5,
  //       color: "#20B2AA",
  //       legendFontColor: "#7F7F7F",
  //     },
  //     {
  //       name: "Profit",
  //       amount: 3021.5,
  //       color: "#98FF98",
  //       legendFontColor: "#7F7F7F",
  //     },
  //   ];

  //   // Data for Line Chart
  //   const lineData = {
  //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //     datasets: [
  //       {
  //         data: [4500, 5200, 3800, 2900, 3500, 3200],
  //         color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
  //         strokeWidth: 2,
  //       },
  //     ],
  //   };

  //   // Data for Bar Chart
  //   const barData = {
  //     labels: [
  //       "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        
  //     ],
  //     datasets: [
  //       {
  //         data: Array(6).fill(0).map(() => Math.random() * 2000 + 1000),
  //       },
  //     ],
  //   };

  //   const chartConfig = {
  //     backgroundGradientFrom: "#FFFFFF",
  //     backgroundGradientTo: "#FFFFFF",
  //     color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
  //     strokeWidth: 2,
  //     barPercentage: 0.5,
  //     decimalPlaces: 0,
  //   };

  //   const formatCurrency = ({ value }: { value: number }) => {
  //     return `₱${value.toLocaleString("en-PH", {
  //       minimumFractionDigits: 2,
  //       maximumFractionDigits: 2,
  //     })}`;
  //   };

  //   return (
  //     <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
  //       <View style={{ padding: 16 }}>
  //         {/* Header Section */}
  //         <Text style={{ color: "#6B7280", fontSize: 14, marginBottom: 16 }}>
  //           January 2024
  //         </Text>

  //         {/* Pie Chart Card */}
  //         <Card
  //           style={{
  //             marginBottom: 24,
  //             padding: 16,
  //             backgroundColor: "#FFFFFF",
  //             borderRadius: 16,
  //             shadowColor: "#000",
  //             shadowOffset: { width: 0, height: 2 },
  //             shadowOpacity: 0.1,
  //             shadowRadius: 4,
  //             elevation: 4,
  //           }}
  //         >
  //           <View style={{ marginBottom: 16 }}>
  //             <PieChart
  //               data={pieData}
  //               width={screenWidth - 64}
  //               height={200}
  //               chartConfig={chartConfig}
  //               accessor="amount"
  //               backgroundColor="transparent"
  //               paddingLeft="15"
  //               absolute
  //               hasLegend={false}
  //             />
  //           </View>
  //           <View>
  //             {pieData.map((item, index) => (
  //               <View
  //                 key={index}
  //                 style={{
  //                   flexDirection: "row",
  //                   alignItems: "center",
  //                   justifyContent: "space-between",
  //                   marginBottom: 8,
  //                 }}
  //               >
  //                 <View style={{ flexDirection: "row", alignItems: "center" }}>
  //                   <View
  //                     style={{
  //                       width: 16,
  //                       height: 16,
  //                       backgroundColor: item.color,
  //                       borderRadius: 8,
  //                       marginRight: 8,
  //                     }}
  //                   />
  //                   <Text style={{ color: "#374151" }}>{item.name}</Text>
  //                 </View>
  //                 <Text style={{ fontWeight: "bold", color: "#1F2937" }}>
  //                   {/* {formatCurrency(item.amount)} */}
  //                 </Text>
  //               </View>
  //             ))}
  //           </View>
  //         </Card>

  //         {/* Line Chart Card */}
  //         <Card
  //           style={{
  //             marginBottom: 24,
  //             padding: 16,
  //             backgroundColor: "#FFFFFF",
  //             borderRadius: 16,
  //             shadowColor: "#000",
  //             shadowOffset: { width: 0, height: 2 },
  //             shadowOpacity: 0.1,
  //             shadowRadius: 4,
  //             elevation: 4,
  //           }}
  //         >
  //           <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
  //             SALES
  //           </Text>
  //           <LineChart
  //             data={lineData}
  //             width={screenWidth - 64}
  //             height={220}
  //             chartConfig={chartConfig}
  //             bezier
  //             style={{
  //               marginVertical: 8,
  //               borderRadius: 16,
  //             }}
  //             withDots={true}
  //             withShadow={false}
  //             fromZero
  //           />
  //         </Card>

  //         {/* Bar Chart Card */}
  //         <Card
  //           style={{
  //             marginBottom: 24,
  //             padding: 16,
  //             backgroundColor: "#FFFFFF",
  //             borderRadius: 16,
  //             shadowColor: "#000",
  //             shadowOffset: { width: 0, height: 2 },
  //             shadowOpacity: 0.1,
  //             shadowRadius: 4,
  //             elevation: 4,
  //           }}
  //         >
  //           <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
  //             EXPENSES
  //           </Text>
  //           <BarChart
  //             data={barData}
  //             width={screenWidth - 64}
  //             height={220}
  //             chartConfig={chartConfig}
  //             style={{
  //               marginVertical: 8,
  //               borderRadius: 16,
  //             }}
  //             showBarTops={false}
  //             fromZero
  //             withInnerLines={true}
  //           />
  //         </Card>
  //       </View>
  //     </ScrollView>
  //   );
  // }
