import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Accordion from '../components/HelpCenterAccordion' // HelpCenterAccordion.js
import THEME from "../constants/theme";


export default class HC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'How can I create an account?', 
          data: 'Please go to the sign up page of our application. If you are a restaurant owner/manager, contact us at contact@latebox.com',
        },
        { 
          title: 'Can I delete my account?', 
          data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        { 
          title: 'How do I pick up my order?', 
          data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        { 
          title: 'Payment Issues', 
          data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderAccordions() }
      </View>
    );
  }

  renderAccordions=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordion 
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingVertical: 32, // top bottom
   backgroundColor: THEME.COLORS.LIGHTGRAY2,
  },
});