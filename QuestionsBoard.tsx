import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Answers} from './App';

interface Props {
  questions: string[];
  onSubmit: (answers: Answers) => void;
}

export const QuestionsBoard = ({questions, onSubmit}: Props) => {
  const [state, setState] = useState<Answers>({});
  return (
    <View>
      <Button title={'Submit'} onPress={() => onSubmit(state)} />
    </View>
  );
};
