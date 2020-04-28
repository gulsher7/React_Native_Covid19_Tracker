import React, { Component } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './CaseUpdateCovidStyle';
import { ImagePath } from '../../constants/ImagesPath';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

import AnimateNumber from '@bankify/react-native-animate-number'
import { colors } from '../../styles/colors';
import { fontFamily } from '../../styles/fontFamily';
import strings from '../../constants/LocalizedStrings';
import { ScrollView } from 'react-native-gesture-handler';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            confirmedCases: 0,
            deltaConfirmedCases: 0,
            active: 0,
            recoveredCases: 0,
            deltaRecoveredCases: 0,
            deathCases: 0,
            deltaDeathCases: 0,
            lastUpdate: '',
            animating: true,


        };
    }

    async componentDidMount() {

        try {
            const response = await axios.get('https://api.covid19india.org/data.json');
            this.setState({
                apiData: response.data.statewise[0]
            })
            console.log("response from api ========>>>>>>>>", this.state.apiData);

            let confirmedCases = this.state.apiData.confirmed;
            let deltaConfirmedCases = this.state.apiData.deltaconfirmed;

            let recoveredCases = this.state.apiData.recovered;
            let deltaRecoveredCases = this.state.apiData.deltarecovered;

            let deathCases = this.state.apiData.deaths;
            let deltaDeathCases = this.state.apiData.deltadeaths;

            let lastUpdate = this.state.apiData.lastupdatedtime;
            let active = this.state.apiData.active;
            let timeSet = lastUpdate
            console.log(
                "Confiremd Cases: ", confirmedCases, "\n",
                "Delta Confiremd Cases: ", deltaConfirmedCases, "\n",

                "Recoverd  Cases: ", recoveredCases, "\n",
                "Delta Recoverd Cases: ", deltaRecoveredCases, "\n",

                "Deaths Cases: ", deathCases, "\n",
                "Delta Death Cases: ", deltaDeathCases, "\n",
                "Active Cases: ", active, "\n",
                "Last Update Time: ", lastUpdate, "\n",
            )


            this.setState({
                confirmedCases: confirmedCases,
                deltaConfirmedCases: deltaConfirmedCases,
                recoveredCases: recoveredCases,
                deltaRecoveredCases: deltaRecoveredCases,
                deathCases: deathCases,
                deltaDeathCases: deltaDeathCases,
                lastUpdate: lastUpdate,
                active: active
            })



        } catch (error) {
            console.log(error)
        }
    }

    knowAboutCorona = () => {
        this.props.navigation.navigate("KnowAboutCovid")
    }

    render() {
        const {
            confirmedCases,
            deltaConfirmedCases,
            recoveredCases,
            deltaRecoveredCases,
            deathCases,
            deltaDeathCases,
            lastUpdate,
            active,
            filterApiData,
            animating
        } = this.state;


        return (

            <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>

                <ImageBackground
                    source={ImagePath.bgImage3} style={{ flex: 0.3 }} >
                </ImageBackground>

                <ScrollView style={{ flex: 1 }}>
                    <View style={{ paddingHorizontal: moderateScale(16), paddingTop: moderateScale(8) }}>

                        <View style={{ paddingBottom: moderateScale(16) }}>
                            <Text style={{ fontFamily: fontFamily.IBM_SEMIBOLD_FONT, fontSize: moderateScale(20) }}>{strings.CASE_UPDATE}</Text>
                            <Text style={{ fontFamily: fontFamily.IBM_MEDIUM_FONT, fontSize: moderateScale(14), color: colors.grayColor2 }} >{strings.NEWEST_UPDATE} {lastUpdate}</Text>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                            <View style={styles.casesUpdateViewStyle}>
                                <Text style={styles.headerTextStyle}>{strings.CONFIRMED}</Text>
                                <Text style={styles.deltaTextStyle}>
                                    [+<AnimateNumber value={deltaConfirmedCases} interval={30} countBy={30} />]
                                   </Text>
                                <Text style={styles.casesNumberTextStyle}>
                                    <AnimateNumber value={confirmedCases} interval={5} countBy={80} />
                                </Text>

                            </View>

                            <View style={[styles.casesUpdateViewStyle, { backgroundColor: colors.bgBluecColor }]}>
                                <Text style={[styles.headerTextStyle, { color: colors.blueColor2, marginBottom: moderateScale(40) }]} >{strings.ACTIVE}</Text>

                                <Text style={[styles.headerTextStyle, { color: colors.blueColor2 }]}>
                                    <AnimateNumber value={active} interval={5} countBy={80} /></Text>
                            </View>

                            <View style={[styles.casesUpdateViewStyle, { backgroundColor: colors.bgGreenColor }]}>
                                <Text style={[styles.headerTextStyle, { color: colors.greenColor2 }]} >{strings.RECOVERED}</Text>
                                <Text style={[styles.deltaTextStyle, { color: colors.greenColor1 }]}>
                                    [+<AnimateNumber value={deltaRecoveredCases} interval={30} countBy={5} />]
                                   </Text>
                                <Text style={[styles.casesNumberTextStyle, { color: colors.greenColor2 }]}>
                                    <AnimateNumber value={recoveredCases} interval={40} countBy={30} /></Text>

                            </View>

                            <View style={[styles.casesUpdateViewStyle, { backgroundColor: colors.bgGrayColor }]}>
                                <Text style={[styles.headerTextStyle, { color: colors.grayColor2 }]} >{strings.DECEASED}</Text>
                                <Text style={[styles.deltaTextStyle, { color: colors.grayColor1 }]}>
                                    [+<AnimateNumber value={deltaDeathCases} interval={30} countBy={5} />]
                                   </Text>
                                <Text style={[styles.casesNumberTextStyle, { color: colors.grayColor2 }]}><AnimateNumber value={deathCases} interval={60} countBy={10} /></Text>
                            </View>

                        </View>



                        <View style={{ alignItems: 'center', paddingVertical: moderateScale(20) }}>
                            <Text style={styles.knowAboutCoronaTextStyle}>{strings.TAP_ON_IMAGE} </Text>
                            <Text style={styles.coronavirusTextStyle}>{strings.CORONAVIRUS_CAPITAL}</Text>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={this.knowAboutCorona}
                            >
                                <Image
                                    source={ImagePath.symptomsIcon}
                                />
                            </TouchableOpacity>
                        </View>



                    </View>
                </ScrollView>
            </View>

        );
    }
}

