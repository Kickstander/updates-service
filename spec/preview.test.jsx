/* eslint-env jest */
/* global shallow:false, React:false */

import sinon from 'sinon';
import dummyData from './dummyData.json';
import Preview from '../client/components/preview';
import DateHeader from '../client/components/dateHeader';

describe('<Preview />', () => {
  const update = dummyData[0];
  const firstParagraph =
    'Autem quia magni totam natus facilis. Animi voluptatem eius pariatur adipisci ipsam laudantium odit qui est. Expedita dolores est omnis velit vero corrupti. Est quo non quidem.';
  const title = 'Use the auxiliary JSON port, then you can back up the solid state transmitter!';
  let wrapper;

  function callShallowWithBadProps(updatePropReplacements, side = 'left') {
    const copyWithBadProps = Object.keys(update).reduce((acc, key) => {
      acc[key] = update[key];
      return acc;
    }, {});

    Object.keys(updatePropReplacements).forEach(key => {
      copyWithBadProps[key] = updatePropReplacements[key];
    });

    shallow(<Preview update={copyWithBadProps} side={side} />);
  }
  beforeEach(() => {
    wrapper = shallow(<Preview update={update} />);
  });

  test('It exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('It renders one DateHeader component', () => {
    expect(wrapper.find(DateHeader).length).toBe(1);
  });

  test('It renders a "comments" div', () => {
    expect(wrapper.find('.comments').length).toBe(1);
  });

  test('It renders the correct body text', () => {
    expect(wrapper.find('.body').text()).toBe(firstParagraph);
  });

  test('It renders the correct title', () => {
    expect(wrapper.find('.title').text()).toBe(title);
  });

  test('It renders the correct number of Likes', () => {
    expect(
      wrapper
        .find('.footerElement')
        .last()
        .text()
    ).toBe('265 Likes');
  });

  test('It logs or throws an error for incorrect prop types', () => {
    const stub = sinon.stub(console, 'error');

    const badSide = 'NotRightOrLeft';
    const goodUpdateProps = {};

    /* Note that errors are double on some of the below
    because the same "bad" prop is passed to the DateHeader child component, which will
    also throw an error for the bad property type */

    callShallowWithBadProps(goodUpdateProps, badSide);
    expect(stub.callCount).toBe(2); // extra error from DateHeader child

    callShallowWithBadProps({ pubDate: 7 });
    expect(stub.callCount).toBe(4); // extra error from DateHeader child

    callShallowWithBadProps({ title: true });
    expect(stub.callCount).toBe(5);

    expect(() => callShallowWithBadProps({ body: 28 })).toThrow();
    expect(stub.callCount).toBe(6);

    callShallowWithBadProps({ likes: 'hello, I am not a number!' });
    expect(stub.callCount).toBe(7);

    console.error.restore(); // eslint-disable-line
  });

  it('It sets itself to the correct side', () => {
    wrapper = shallow(<Preview side="right" />);
    expect(wrapper.first().hasClass('right')).toBe(true);
    wrapper = shallow(<Preview side="left" />);
    expect(wrapper.first().hasClass('left')).toBe(true);
  });

  it('The title className changes when hovered', () => {
    const highlightColors = ['Sky', 'Teal', 'Apricot'];
    let titleWrapper = wrapper.find('.title');
    highlightColors.forEach(color => {
      expect(titleWrapper.hasClass(`highlight${color}`)).toBe(false);
    });
    titleWrapper = wrapper.setState({ highlight: true }).find('.title');
    const styleMatches = highlightColors.filter(color =>
      titleWrapper.hasClass(`highlight${color}`)
    );
    expect(styleMatches.length).toBe(1);
  });
});
