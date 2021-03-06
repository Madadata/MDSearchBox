/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import { shallow } from 'enzyme';
import { createRenderer } from 'react-addons-test-utils';
import MDSearchBox from '../src/MDSearchBox';

expect.extend(expectJSX);

describe('MDSearchBox', () => {
  describe('default case', () => {
    let wrapper;
    
    before(() => {
      wrapper = shallow(<MDSearchBox />);
    });

    it('should have no input value', () => {
        const input = wrapper.find('input');
        expect(input.props().value).toBe(undefined);
    });

  });

  describe('with text', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(
        <MDSearchBox
          text="haha"
        />
      );
    });

    it('should have corresponding text', () => {
      const input = wrapper.find('input');
      expect(input.props().value).toBe('haha');

    });
  })

  // describe('with onChange method', () => {
  //   let wrapper;
  //
  //   before(() => {
  //     wrapper = shallow(
  //       <MDSearchBox
  //         onChange={() => {
  //           return 'xixi';
  //         }}
  //       />
  //     );
  //   });
  //
  //   it('should trigger the onChange', () => {
  //     const input = wrapper.find('input');
  //     // const event = { preventDefault: () => 'a' }
  //     input.simulate('change');
  //     expect(input.props().onChange()).toBe('xixi');
  //   })
  // })

  describe('with size changed', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(
        <MDSearchBox
          width={500}
          height={300}
        /> );
    });

    it('size should change', () => {
      expect(wrapper.props().style).toEqual({width:500, height:300});

    });
  })
});
