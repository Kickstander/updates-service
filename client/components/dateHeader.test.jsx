/* eslint-env jest */
/* global shallow:false, React:false */

import dummyData from '../dummyData.json';
import DateHeader from './dateHeader';

const side = 'left';
const { pubDate } = dummyData[0];

describe('<DateHeader />', () => {
  test('it renders', () => {
    const wrapper = shallow(<DateHeader side={side} pubDate={pubDate} />);
    expect(wrapper.exists()).toBe(true);
  });
});
