/* eslint-env jest */
/* global shallow:false, React:false */

import App from './app';
import Preview from './preview';
import dummyData from '../dummyData.json';
// import { shallow } from 'enzyme';

describe('<App />', () => {
  test('<App /> Renders', () => {
    const wrapper = shallow(<App updates={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Renders a list of <Preview /> components', () => {
    const wrapper = shallow(<App updates={dummyData} />);
    expect(wrapper.find(Preview).length).toBe(3);
  });
});
