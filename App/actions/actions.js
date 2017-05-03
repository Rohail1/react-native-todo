/**
 * Created by Rohail on 4/27/2017.
 */


import {ADD_NOTES,DELETE_NOTE,UPDATE_NOTE,DELETE_NOTES,LOAD_DATA} from "../common/constants"


export const addNotes = (text) => {
  return {
    type : ADD_NOTES,
    note : text
  };

};

export const removeNote = (id) => {
  return {
    type : DELETE_NOTE,
    id
  };
};

export const removeNotes = (id) => {
  return {
    type : DELETE_NOTES,
    id
  };
};

export const updateNote = (notes) => {
  const {id,note} = notes;
  return {
    type : UPDATE_NOTE,
    id,
    note
  };
};

export const loadData = (data) => {

  return {
    type : LOAD_DATA,
    data,
  };
};

