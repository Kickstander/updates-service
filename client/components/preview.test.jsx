/* eslint-env jest */
/* global shallow:false, React:false */

import dummyData from '../dummyData.json';
import Preview from './preview';
import DateHeader from './dateHeader';

const update = dummyData[0];
const firstParagraph =
  'Autem quia magni totam natus facilis. Animi voluptatem eius pariatur adipisci ipsam laudantium odit qui est. Expedita dolores est omnis velit vero corrupti. Est quo non quidem.';
let wrapper;

describe('<Preview />', () => {
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

  // test('It renders the correct body text', () => {
  //   expect(wrapper.find('.body').text).toBe(1);
  // });

  // add for correct title
});

/*
-Should render a DateHeader
Renders the correct title
Renders the right number of likes
Throws an error for the wrong prop types
Sets itself to the correct side
Check that the highlight state changes the className on the title
Check that the first paragraph of the body is rendered
More tests?
 */
