/* eslint-env jest */
/* global shallow:false, React:false */
import moment from 'moment';
import DateHeader from '../client/components/dateHeader';

describe('<DateHeader />', () => {
  let wrapper;
  const date = '2015-02-16T08:00:00.000Z';
  beforeEach(() => {
    wrapper = shallow(<DateHeader pubDate={date} />);
  });

  test('DateHeader exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('DateHeader renders the date in the correct format', () => {
    expect(wrapper.text()).toBe('February 16, 2015');
  });

  test('The date defaults to today', () => {
    const noDate = shallow(<DateHeader />);
    expect(noDate.text()).toBe(moment().format('LL'));
  });

  test('DateHeader has two children', () => {
    expect(wrapper.children().length).toBe(2);
  });

  test('Spacer renders on the correct side', () => {
    const leftChildren = shallow(<DateHeader side="left" />).children();
    const rightChildren = shallow(<DateHeader side="right" />).children();

    expect(leftChildren.first().hasClass('date')).toBe(true);
    expect(leftChildren.last().hasClass('spacerContainer')).toBe(true);
    expect(rightChildren.first().hasClass('spacerContainer')).toBe(true);
    expect(rightChildren.last().hasClass('date')).toBe(true);
  });

  test('Spacer defaults to left side', () => {
    expect(
      wrapper
        .children()
        .first()
        .hasClass('date')
    ).toBe(true);
  });
});
