import React, { Component } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, Image, StyleSheet } from 'react-native';
import axios from 'axios';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            confirmedCases: 0,
            recoveredCases: 0,
            deathCases: 0,
            lastUpdate: '',
            animating: true

        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://covid19.mathdro.id/api/countries/india');
            this.setState({
                apiData: response.data
            })
            console.log("response from api ========>>>>>>>>", this.state.apiData);

            let str = JSON.stringify(this.state.apiData, null, 1);
            let obj = JSON.parse(str);


            let confirmedCases = obj.confirmed.value;
            let recoveredCases = obj.recovered.value;
            let deathCases = obj.deaths.value;

            let date = new Date().toString().split(" ").slice(0, 4).join(" ");
            setTimeout(() => {
                this.setState({
                    confirmedCases: confirmedCases,
                    recoveredCases: recoveredCases,
                    deathCases: deathCases,
                    lastUpdate: date
                })
            }, 2500)


        } catch (error) {
            console.log(error)
        }
    }

    renderView = () => {
        const { confirmedCases, recoveredCases, deathCases, lastUpdate, apiData, animating } = this.state;
        return (
            <View>
                {
                    this.state.confirmedCases !== 0 ? <View>
                        <Text>{confirmedCases}</Text>
                        <Text>{recoveredCases}</Text>
                        <Text>{deathCases}</Text>
                        <Text>{lastUpdate}</Text>
                    </View>
                        : <View>
                            <ActivityIndicator
                                animating={animating}
                                color="#bc2b78"
                                size='large'
                                style = {{marginTop: 150}}

                            />

                        </View>
                }

            </View>
        )
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'pink' }}>
                <View style={{ flex: 1, padding: 24 }}>
                    <Image source={{ uri: "https://i.ibb.co/7QpKsCX/image.png" }} style={{ width: "100%", height: '10%' }} />

                    {this.renderView()}

                </View>


            </SafeAreaView>
        );
    }
}


