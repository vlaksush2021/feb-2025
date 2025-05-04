import React from 'react';
import renderer  from 'react-test-renderer'
import MyButton from '../MyButton';

describe('button tests', () => {

    test.skip('button test1', () => {
        const tree = renderer.create(<MyButton label="SubmitSubmit Me" />).toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot()
    })
})