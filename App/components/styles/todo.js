

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

  textHeader : {
    fontSize : 30,
    color :"#1E90FF",
    textAlign : "center",
    fontWeight: 'bold',
    paddingTop :10,
  },

  todoText : {
    flex : 4,
    paddingTop :10,
    fontSize:20,
    color :"#546e7a",
  },
  innerFlex : {
   width : 300
  },
  listviewStyles : {
    flex : 1,
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems : 'center',
    // paddingLeft :20,
  },
  iconFlex : {
    paddingTop :5,
    flex : 1,
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems : 'center',
  },
  iconStyle : {
    paddingRight : 10,
    paddingTop : 5
  },
  clearAllStyle : {
    textAlign : 'right',
    paddingTop : 10,
  }

});

export default styles;