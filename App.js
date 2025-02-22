import React, {useEffect, useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {BarChart, LineChart} from './src';
import {MyApp} from "./MyApp";

const App = () => {
  const {height, width} = Dimensions.get("window")
  return <MyApp width={width} height={300}/>

  const [toggle, setToggle] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentData(latestData5);
  //   }, 1100 + 100 + 310);
  //   setTimeout(() => {
  //     setCurrentData(latestData2);
  //   }, 1100 + 300 + 620);

  //   setTimeout(() => {
  //     setCurrentData(latestData5);
  //   }, 1100 + 500 + 930);

  //   setTimeout(() => {
  //     setCurrentData(latestData3);
  //   }, 1100 + 1000 + 1240);

  //   setTimeout(() => {
  //     setCurrentData(latestData4);
  //   }, 1100 + 1500 + 1550);

  //   setTimeout(() => {
  //     setCurrentData(latestData5);
  //   }, 6000);

  //   setTimeout(() => {
  //     setCurrentData(latestData);
  //   }, 7000);
  // }, []);
  const dPoint = () => {
    return (
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: 'white',
          borderWidth: 3,
          borderRadius: 7,
          borderColor: '#07BAD1',
        }}
      />
    );
  };
  const lcomp = val => {
    return (
      <View style={{width: 70, marginLeft: 7}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{val}</Text>
      </View>
    );
  };
  const latestData = [
    {
      value: 600 - 100,
      labelComponent: () => lcomp('22 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 600 - 120,
      hideDataPoint: true,
    },
    {
      value: 600 - 210,
      customDataPoint: dPoint,
    },
    {
      value: 600 - 250,
      hideDataPoint: true,
    },
    {
      value: 600 - 320,
      labelComponent: () => lcomp('24 Nov'),
      customDataPoint: dPoint,
      showStrip: true,
      stripHeight: 190,
      stripColor: 'black',
      dataPointLabelComponent: () => {
        return (
          <View
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 4,
            }}>
            <Text style={{color: 'white'}}>410</Text>
          </View>
        );
      },
      dataPointLabelShiftY: -70,
      dataPointLabelShiftX: -14,
    },
    {
      value: 600 - 310,
      hideDataPoint: true,
    },
    {
      value: 600 - 270,
      customDataPoint: dPoint,
    },
    {
      value: 600 - 240,
      hideDataPoint: true,
    },
    {
      value: 600 - 130,
      labelComponent: () => lcomp('26 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 600 - 120,
      hideDataPoint: true,
    },
    {
      value: 600 - 100,
      customDataPoint: dPoint,
    },
    {
      value: 600 - 210,
      hideDataPoint: true,
    },
    {
      value: 600 - 270,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 600 - 240,
      hideDataPoint: true,
    },
    {
      value: 600 - 120,
      hideDataPoint: true,
    },
    {
      value: 600 - 100,
      customDataPoint: dPoint,
    },
    {
      value: 600 - 210,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 600 - 20,
      hideDataPoint: true,
    },
    {
      value: 600 - 100,
      customDataPoint: dPoint,
    },
  ];

  const latestData2 = [
    {
      value: 400 - 100,
      labelComponent: () => lcomp('22 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 400 - 120,
      hideDataPoint: true,
    },
    {
      value: 400 - 210,
      customDataPoint: dPoint,
    },
    {
      value: 400 - 250,
      hideDataPoint: true,
    },
    {
      value: 400 - 320,
      labelComponent: () => lcomp('24 Nov'),
      customDataPoint: dPoint,
      showStrip: true,
      stripHeight: 190,
      stripColor: 'black',
      dataPointLabelComponent: () => {
        return (
          <View
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 4,
            }}>
            <Text style={{color: 'white'}}>410</Text>
          </View>
        );
      },
      dataPointLabelShiftY: -70,
      dataPointLabelShiftX: -14,
    },
    {
      value: 400 - 310,
      hideDataPoint: true,
    },
    {
      value: 400 - 270,
      customDataPoint: dPoint,
    },
    {
      value: 400 - 240,
      hideDataPoint: true,
    },
    {
      value: 400 - 130,
      labelComponent: () => lcomp('26 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 400 - 120,
      hideDataPoint: true,
    },
    {
      value: 400 - 100,
      customDataPoint: dPoint,
    },
    {
      value: 400 - 210,
      hideDataPoint: true,
    },
    {
      value: 400 - 270,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 400 - 240,
      hideDataPoint: true,
    },
    {
      value: 400 - 120,
      hideDataPoint: true,
    },
    {
      value: 400 - 100,
      customDataPoint: dPoint,
    },
    {
      value: 400 - 210,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 400 - 20,
      hideDataPoint: true,
    },
    {
      value: 400 - 100,
      customDataPoint: dPoint,
    },
  ];

  const latestData3 = [
    {
      value: 600 - 170,
      labelComponent: () => lcomp('22 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 600 - 60,
      hideDataPoint: true,
    },
    {
      value: 600 - 290,
      customDataPoint: dPoint,
    },
    {
      value: 600 - 120,
      hideDataPoint: true,
    },
    {
      value: 600 - 390,
      labelComponent: () => lcomp('24 Nov'),
      customDataPoint: dPoint,
      showStrip: true,
      stripHeight: 190,
      stripColor: 'black',
      dataPointLabelComponent: () => {
        return (
          <View
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 4,
            }}>
            <Text style={{color: 'white'}}>410</Text>
          </View>
        );
      },
      dataPointLabelShiftY: -70,
      dataPointLabelShiftX: -14,
    },
    {
      value: 600 - 210,
      hideDataPoint: true,
    },
    {
      value: 600 - 370,
      customDataPoint: dPoint,
    },
    {
      value: 600 - 140,
      hideDataPoint: true,
    },
    {
      value: 600 - 330,
      labelComponent: () => lcomp('26 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 600 - 50,
      hideDataPoint: true,
    },
    {
      value: 600 - 200,
      customDataPoint: dPoint,
    },
    {
      value: 600 - 110,
      hideDataPoint: true,
    },
    {
      value: 600 - 370,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 600 - 140,
      hideDataPoint: true,
    },
    {
      value: 600 - 320,
      hideDataPoint: true,
    },
    {
      value: 600 - 20,
      customDataPoint: dPoint,
    },
    {
      value: 600 - 310,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 600 - 120,
      hideDataPoint: true,
    },
    {
      value: 600 - 100,
      customDataPoint: dPoint,
    },
  ];

  const latestData4 = [
    {
      value: 300 - 170,
      labelComponent: () => lcomp('22 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 300 - 60,
      hideDataPoint: true,
    },
    {
      value: 300 - 290,
      customDataPoint: dPoint,
    },
    {
      value: 300 - 120,
      hideDataPoint: true,
    },
    {
      value: 300 - 390,
      labelComponent: () => lcomp('24 Nov'),
      customDataPoint: dPoint,
      showStrip: true,
      stripHeight: 190,
      stripColor: 'black',
      dataPointLabelComponent: () => {
        return (
          <View
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 4,
            }}>
            <Text style={{color: 'white'}}>410</Text>
          </View>
        );
      },
      dataPointLabelShiftY: -70,
      dataPointLabelShiftX: -14,
    },
    {
      value: 300 - 210,
      hideDataPoint: true,
    },
    {
      value: 300 - 370,
      customDataPoint: dPoint,
    },
    {
      value: 300 - 140,
      hideDataPoint: true,
    },
    {
      value: 300 - 330,
      labelComponent: () => lcomp('26 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 300 - 50,
      hideDataPoint: true,
    },
    {
      value: 300 - 200,
      customDataPoint: dPoint,
    },
    {
      value: 300 - 110,
      hideDataPoint: true,
    },
    {
      value: 300 - 370,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 300 - 140,
      hideDataPoint: true,
    },
    {
      value: 300 - 320,
      hideDataPoint: true,
    },
    {
      value: 300 - 20,
      customDataPoint: dPoint,
    },
    {
      value: 300 - 310,
      labelComponent: () => lcomp('28 Nov'),
      customDataPoint: dPoint,
    },
    {
      value: 300 - 120,
      hideDataPoint: true,
    },
    {
      value: 300 - 100,
      customDataPoint: dPoint,
    },
  ];
  const latestData5 = [];
  for (let i = 0; i < latestData.length; i++) {
    latestData5[i] = {...latestData, value: 300};
  }

  const [currentData, setCurrentData] = useState(latestData);

  const customLabel = val => {
    return (
      <View
        style={{
          backgroundColor: 'black',
          // padding: 16,
          borderRadius: 8,
          width: 30,
          paddingVertical: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>{val}</Text>
      </View>
    );
  };
  const ndd = [
    {label: 'Jan', value: 30},
    {label: 'Feb', value: 10},
    {label: 'Mar', value: 20},
  ];
  const [data, setData] = useState([
    {value: 15, label: 'Jan'},
    {
      value: 40,
      label: 'Feb',
      verticalLineColor: 'red',
      // showVerticalLine: true,
      verticalLineThickness: StyleSheet.hairlineWidth,
      dataPointLabelComponent: () => customLabel(40),
    },
    {
      value: 10,
      label: 'Mar',
      dataPointLabelComponent: () => customLabel(10),
    },
    {
      value: 30,
      label: 'Apr',
      dataPointLabelComponent: () => customLabel(30),
    },
    {
      value: 20,
      label: 'May',
      dataPointLabelComponent: () => customLabel(20),
    },
    {
      value: 40,
      label: 'Jun',
      focusedDataPointLabelComponent: () => customLabel(40),
    },
    {value: 48, label: 'Jul'},
    {value: 30, label: 'Aug'},
    {value: 20, label: 'Sep'},
    {value: 40, label: 'Oct'},
    {
      value: 48,
      label: 'Nov',
      onPress: () => Alert.alert('Sales in Nov skyrocketed to $48 M'),
    },
    {value: 30, label: 'Dec'},
  ]);

  return (
    <View>
      <View
        style={{
          marginVertical: 100,
          paddingVertical: 50,
          // backgroundColor: '#414141',
        }}>
        <BarChart hideOrigin data={ndd} yAxisLabelTexts={['0', '£10', '£20']} />
        {/* <LineChart
          isAnimated
          thickness={3}
          color="#07BAD1"
          maxValue={600}
          noOfSections={3}
          animateOnDataChange
          animationDuration={1000}
          onDataChangeAnimationDuration={300}
          areaChart
          yAxisTextStyle={{color: 'lightgray'}}
          data={currentData}
          // curved
          hideDataPoints
          startFillColor={'rgb(84,219,234)'}
          endFillColor={'rgb(84,219,234)'}
          startOpacity={0.4}
          endOpacity={0.1}
          spacing={22}
          backgroundColor="#414141"
          rulesColor="gray"
          rulesType="solid"
          initialSpacing={10}
          yAxisColor="lightgray"
          xAxisColor="lightgray"
          dataPointsHeight={20}
          dataPointsWidth={20}
        /> */}
      </View>

      {/* <TouchableOpacity
        onPress={() => setCurrentData(latestData)}
        style={{padding: 12, backgroundColor: 'lightgreen', marginBottom: 15}}>
        <Text>Smooth</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCurrentData(latestData2)}
        style={{padding: 12, backgroundColor: 'lightgreen', marginBottom: 15}}>
        <Text>Smooth Low</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCurrentData(latestData3)}
        style={{padding: 12, backgroundColor: 'lightgreen', marginBottom: 15}}>
        <Text>Edged</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCurrentData(latestData4)}
        style={{padding: 12, backgroundColor: 'lightgreen', marginBottom: 15}}>
        <Text>Edged Low</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCurrentData(latestData5)}
        style={{padding: 12, backgroundColor: 'lightgreen'}}>
        <Text>Straight</Text>
      </TouchableOpacity> */}

      {/* {!toggle ? (
        <BarChart
          isThreeD
          key={'xyz'}
          height={300}
          maxValue={360}
          showLine
          initialSpacing={30}
          // showVerticalLines
          lineConfig={{
            // isAnimated: true,
            delay: 800,
            color: 'green',
            // hideDataPoints: true,
            // showDataPoint: false,
            // dataPointsRadius: 5,
            dataPointsColor: 'purple',
            dataPointsRadius: 4,
            thickness: 2,
            shiftY: 25,
            curved: true,
          }}
          barWidth={32}
          // width={190}
          data={[
            {
              value: 270,
              label: 'Jan',
            },
            {value: 250, label: 'Feb'},
            {value: 200, label: 'Mar'},
            {
              value: 150,
              label: 'Apr',
              showVerticalLine: true,
              verticalLineColor: 'black',
            },
            {value: 200, label: 'May'},
            {value: 250, label: 'Jun'},
            {value: 270, label: 'Jul'},
          ]}
          // horizontal
          // showReferenceLine1
          // referenceLine1Position={120}
          // referenceLine1Config={{
          //   type: 'solid',
          //   color: 'rgba(200,0,0,0.6)',
          //   thickness: 1,
          // }}
          // showReferenceLine2
          // referenceLine2Position={240}
          // referenceLine2Config={{
          //   type: 'solid',
          //   color: 'rgba(0,0,0,0.6)',
          //   thickness: 1,
          // }}
          // showReferenceLine3
          // referenceLine3Position={330}
          // referenceLine3Config={{
          //   type: 'solid',
          //   color: 'rgba(0,0,200,0.6)',
          //   thickness: 1,
          // }}
          // showYAxisIndices
          isAnimated
          showGradient
          // cappedBars
          yAxisColor={'rgb(78, 0, 142)'}
          xAxisColor={'rgb(78, 0, 142)'}
          xAxisThickness={3}
          yAxisThickness={3}
          yAxisTextStyle={{color: 'rgb(78, 0, 142)'}}
          capColor={'rgb(78, 0, 142)'}
          capThickness={4}
          // barWidth={35}
          frontColor={'rgba(200, 100, 244,0.2)'}
          gradientColor={'rgba(78, 0, 142,1)'}
          // rulesType="dashed"
          // rulesColor={'rgba(0,200,0,0.5)'}
          // rulesThickness={1}
          // dashWidth={12}
          // dashGap={2}
        />
      ) : (
        <LineChart
          // width={150}
          // hideDataPoints1
          // spacing={30}
          data={data}
          dataPointLabelWidth={30}
          dataPointLabelShiftY={-30}
          // data2={lineData1}
          areaChart
          initialSpacing={20}
          customDataPoint={() => {
            return (
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: 'red',
                  borderWidth: 2,
                  borderColor: 'blue',
                  borderRadius: 5,
                }}
              />
            );
          }}
          // focusedCustomDataPoint={() => {
          //   return (
          //     <View
          //       style={{
          //         height: 14,
          //         width: 14,
          //         backgroundColor: 'green',
          //         borderWidth: 2,
          //         borderColor: 'yellow',
          //         borderRadius: 7,
          //       }}
          //     />
          //   );
          // }}
          // onPress={(item, index) => {
          //   console.log('index-->', index);
          //   setData(data => {
          //     item.focusedCustomDataPoint = () => {
          //       return (
          //         <View
          //           style={{
          //             height: 14,
          //             width: 14,
          //             backgroundColor: 'green',
          //             borderWidth: 2,
          //             borderColor: 'yellow',
          //             borderRadius: 7,
          //           }}
          //         />
          //       );
          //     };
          //     data[index] = item;
          //     console.log('data------.....', data);
          //     return data;
          //   });
          // }}
          // disableScroll
          pressEnabled
          // showDataPointOnPress
          showStripOnPress
          // showTextOnPress
          // textShiftY={-10}
          // textShiftX={-5}
          // textFontSize={18}
          // textColor={'green'}
          // stripWidth={1}
          // stripHeight={200}
          // stripHeight={200}
          // stripOpacity={1}
          // curved
          // isAnimated
          // animationDuration={2000}
          // animationDuration={2000}
          // dataPointsShape="rectangular"
          // showGradient
          color={'rgb(78, 0, 142)'}
          yAxisColor={'rgb(78, 0, 142)'}
          xAxisColor={'rgb(78, 0, 142)'}
          // dataPointsColor={'yellow'}
          dataPointsWidth={20}
          dataPointsHeight={20}
          xAxisThickness={3}
          yAxisThickness={3}
          // dataPointsRadius={4}
          // focusedDataPointRadius={10}
          yAxisTextStyle={{color: 'rgb(78, 0, 142)'}}
          startFillColor={'rgb(200, 100, 244)'}
          startOpacity={0.9}
          endFillColor={'rgb(255, 255, 255)'}
          endOpacity={0.2}
        />
      )} */}

      {/* <TouchableOpacity
        onPress={() => setToggle(!toggle)}
        style={{marginTop: 100, alignSelf: 'center'}}>
        <Text>Line Chart</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default App;
