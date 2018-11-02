/* eslint-env jest */
/* global shallow:false, React:false */
import sinon from 'sinon';
import App from './app';
import Preview from './preview';
import dummyData from '../dummyData.json';
// import { shallow } from 'enzyme';

const badData = [
  {
    title: 1337,
    pubDate: 42,
    likes: 'I am not a number!',
    body: false
  }
];

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App updates={dummyData} />);
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

  test('It logs a warning for incorrect props', () => {
    const stub = sinon.stub(console, 'error');
    shallow(<App updates={badData} />);
    expect(stub.called).toBe(true);
    console.error.restore();
  });
});
