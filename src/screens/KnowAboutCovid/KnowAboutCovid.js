import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ImagePath } from '../../constants/ImagesPath';
import { moderateScale } from 'react-native-size-matters';

export default class KnowAboutCovid extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
       
        <View style={{paddingHorizontal: moderateScale(24)}}>
        <Text> Symptomps </Text>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <View style={styles.cardView}>
          <Image source = {ImagePath.headache} />
          <Text style={{paddingTop: moderateScale(8)}} >Headache</Text>
        </View>

        <View style={styles.cardView}>
          <Image source = {ImagePath.cough} />
          <Text style={{paddingTop: moderateScale(8)}}>Cough</Text>
        </View>

        <View style={styles.cardView}>
          <Image source = {ImagePath.fever} />
          <Text style={{paddingTop: moderateScale(8)}} >Fever</Text>
        </View>

        </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  cardView: {
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(100),
    borderRadius: moderateScale(4),
    height: moderateScale(100),
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    
  }

});
