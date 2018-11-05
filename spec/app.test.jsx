/* eslint-env jest */
/* global shallow:false, React:false */
import sinon from 'sinon';
import axios from 'axios';
import App from '../client/components/app';
import Preview from '../client/components/preview';
import dummyData from './dummyData.json';

describe('<App />', () => {
  let wrapper;

  beforeAll(() => {
    sinon.stub(axios, 'get').returns(Promise.resolve({ data: dummyData }));
    wrapper = shallow(<App />);
  });

  afterAll(() => {
    axios.get.restore();
  });

  test('<App /> Renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Renders a list of <Preview /> components', () => {
    expect(wrapper.find(Preview).length).toBe(3);
  });

  test('The <Preview /> components alternate sides', () => {
    const previews = wrapper.find(Preview);
    const firstPreview = previews.first();
    const secondPreview = previews.at(1);
    expect(firstPreview.prop('side')).toBe('right');
    expect(secondPreview.prop('side')).toBe('left');
  });
});
