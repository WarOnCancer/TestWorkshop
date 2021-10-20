import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {QuestionsBoard} from '../QuestionsBoard';

describe('Questions Board', () => {
  test('form accepts two questions', () => {
    const allQuestions = ['q1', 'q2'];

    const {getByText} = render(
      <QuestionsBoard questions={allQuestions} onSubmit={() => {}} />,
    );

    expect(getByText('q1')).toBeDefined();
    expect(getByText('q2')).toBeDefined();
  });
});
