/**
 * Created by Rohail on 4/27/2017.
 */

import React, { Component } from 'react';
import {
  Button,
  Alert,
  Text,
  TextInput,
  ListView,
  AsyncStorage,
  View
} from 'react-native';
import {connect} from "react-redux"
import {bindActionCreators}  from "redux"
import {addNotes,removeNote,updateNote,removeNotes,loadData} from "../actions/actions"
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles/todo";



async function getDataFromStorage(key) {
  try {
    let data = await AsyncStorage.getItem(key);
    return data;
  }catch (ex){
    console.log('ex',ex);
  }
}


class TODO extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : ''
    }
  }

  addNotes() {
    this.props.addNotes(this.state.text);
    this.setState({text:''});
  }

  onTextBoxChange(text){
    this.setState({text});
  }

  removeTodo(id){
    this.props.removeNote(id);
  }

  updateTodo(note){
    this.props.updateNote(note);
  }

  removeTodos(){
    this.props.removeNotes();
  }

  componentWillMount() {
    getDataFromStorage('todos')
      .then((data) => {
        this.props.loadData(data)
    })
  }

  renderToDos(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const {notes} = this.props;
    const dataSource = ds.cloneWithRows(notes);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={
          (rowData) => {
            return (
              <View style={styles.listviewStyles}>
                <TextInput
                  key={rowData.id}
                  style={styles.todoText}
                  editable = {true}
                  value={rowData.note}
                  onChangeText={(text) => this.updateTodo({note : text,id : rowData.id})}
                />
                <View style={styles.iconFlex}>
                  <Icon
                    name="close"
                    size={20}
                    color="#ff1919"
                    style={styles.iconStyle}
                    onPress={() => this.removeTodo(rowData.id)}
                  />
                </View>
              </View>
            )

          }}
        enableEmptySections={true}
      />
    )
  }

  render(){
    return(
      <View>
        <Icon
          name="close"
          size={30}
          color="#ff1919"
          style={styles.clearAllStyle}
          onPress={() => this.removeTodos()}
        />
        <View style={styles.innerFlex}>
          <Text color="#1E90FF" style={styles.textHeader}>Hi, {this.props.name}</Text>
          <TextInput
            onChangeText={text=> this.onTextBoxChange(text)}
            style={{height: 40}}
            placeholder="Enter your To-Dos"
            value={this.state.text}
          />
          <Button
            onPress={() => this.addNotes()}
            title="Tap Here"
            color="#4169E1"
          />
          {this.renderToDos()}
        </View>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addNotes,removeNote,updateNote,removeNotes,loadData},dispatch)
}

function mapStateToProps(state) {
  return {
    notes : state
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TODO)