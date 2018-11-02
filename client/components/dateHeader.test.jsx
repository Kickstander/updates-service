/* eslint-env jest */
/* global shallow:false, React:false */
import moment from 'moment';
import DateHeader from './dateHeader';

let wrapper;
const date = '2015-02-16T08:00:00.000Z';

describe('<DateHeader />', () => {
  beforeEach(() => {
    wrapper = shallow(<DateHeader pubDate={date} />);
  });

  test('it exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('it renders the date in the correct format', () => {
    expect(wrapper.text()).toBe('February 16, 2015');
  });

  test('The date defaults to today', () => {
    const noDate = shallow(<DateHeader />);
    expect(noDate.text()).toBe(moment().format('LL'));
  });

  test('It has two children', () => {
    expect(wrapper.children().length).toBe(2);
  });

  test('spacer renders on the correct side', () => {
    const leftChildren = shallow(<DateHeader side="left" />).children();
    const rightChildren = shallow(<DateHeader side="right" />).children();

    expect(leftChildren.first().hasClass('date')).toBe(true);
    expect(leftChildren.last().hasClass('spacerContainer')).toBe(true);
    expect(rightChildren.first().hasClass('spacerContainer')).toBe(true);
    expect(rightChildren.last().hasClass('date')).toBe(true);
  });
});
