import {Text, View} from "react-native";
import {LineChart} from "./src";
import React from 'react';

export function rubles(amount: number | string): string {
    return `${amount} ₽`
}

const labels = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

export const MyApp = (props) => {
    const data = [
        0, 220, 20, 520, 1110, 769, 744, 855, 184, 132,
        220, 281, 520, 972, 769, 744, 855, 184, 132, 190, 82, 635, 597, 494, 846, 372, 782, 149, 137, 153, 954, 467, 312, 558, 578, 70,
    ].map(value => value * 10).slice(0, )

    const max = Math.max(...data)

    const lineData = data.map((value, index) => ({
        value,
        dataPointText: value.toString(),
        label: labels[index % 7],
        extraLabel: index % 7 === 0 ? index.toString() : undefined,
        textColor: "#123132",
        textFontSize: 12,
        showFullStrip: index !== 0 && index % 7 === 0,
        stripFullHeight: props.height,
        stripFullColor: "#3F8CFF",
        hideDataPoint: value === 0,
        focusedDataPointLabelComponent: () => {
            return <Text style={{
                backgroundColor: "#3F8CFF",
                color: "#ffffff",
                paddingHorizontal: 4,
                paddingVertical: 2,
                overflow: "hidden",
                borderRadius: 6,
            }}>{rubles(value)}</Text>
        },
        dataPointLabelShiftX: 20,
        dataPointLabelShiftY: -20,
        customDataPoint: () => {
            return (
                <View style={{
                    marginTop: 10 + 8,
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: "#4fb2ed",
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#ffffff"
                }}/>
            )
        }
    }))

    return (
        <View style={{width: props.width, height: props.height, paddingVertical: 16, paddingLeft: 0, marginTop: 64}}>
            <LineChart

                data={lineData}
                height={props.height - 100}
                noOfSections={5}
                spacing={props.width / 8}
                maxValue={max * 1.2}
                // isAnimated
                // animateOnDataChange
                // animationDuration={data.length * 100}
                // onDataChangeAnimationDuration={1000}
                // stepValue,stepHeight

                // Axes
                // showXAxisIndices={false}
                // showYAxisIndices={false}
                // xAxisColor={COLORS.black33}
                // yAxisTextStyle={{color: COLORS.black33}}
                // yAxisColor={"#333333"}
                yAxisLabelPrefix={"₽ "}
                yAxisLabelWidth={4 * 10}
                yAxisLabelTexts={["13k"]}
                yAxisLabelModify={(value) => value.slice(0, 2) + "k"}
                yAxisThickness={0}
                yAxisTextStyle={{
                    fontSize: 8,
                }}
                xAxisThickness={0}
                rulesColor={"#b6e0f455"}
                rulesType={"solid"}
                // rulesColor={"#FFF"}
                // rulesType={"dashed"}
                stripColor={"#FFF"}
                stripOpacity={0.5}

                // Lines
                curved
                thickness={2}
                color={"#4fb2ed"}

                // Area chart
                areaChart
                startFillColor={"#85c8f5"}
                endFillColor={"#0091EA"}
                startOpacity={0.8}
                endOpacity={0.1}
                // backgroundColor={"#b6e0f4"}
                // initialSpacing={-props.width / 8 + 10}
                gradientDirection={"vertical"}

                // Actions
                // disableScroll
                pressEnabled
                showTextOnPress
                // showDataPointOnPress
                showStripOnPress
                delayBeforeUnFocus={0}
            />
            {/*<View style={{*/}
            {/*    position: "absolute",*/}
            {/*    top: 16,*/}
            {/*    height: props.height - 16 * 2,*/}
            {/*    width: 16,*/}
            {/*    backgroundColor: COLORS.background,*/}
            {/*    right: 0*/}
            {/*}}/>*/}
        </View>
    )
}
