import React, {Component} from 'react';
import { 
    View,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    LayoutAnimation,
    Platform,
    UIManager
} from "react-native";
import THEME from '../constants/theme';
import { questionmark } from '../constants/icons';
const { width, height } = Dimensions.get('window');
const buttonHeight = height / 20;
// HC.js


export default class HelpCenterAccordion extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity ref={this.accordion} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>
                    <Image
                        source={questionmark}
                        resizeMode="contain"
                        style={styles.buttonImage}
                    />
                    {this.props.title}</Text>
                {/* <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'#000000'} /> */}
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight:'bold',
        color: THEME.COLORS.BLACK,
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: THEME.COLORS.WHITE,
    },
    parentHr: {
        height:1,
        color: THEME.COLORS.WHITE,
        width:'100%'
    },
    child: {
        backgroundColor: THEME.COLORS.LIGHTGRAY2,
        padding:16,
    },
    buttonImage: {
        display: 'flex',
        width: width/12,
        height: buttonHeight/2,
        tintColor: THEME.COLORS.ICON,
    },
});