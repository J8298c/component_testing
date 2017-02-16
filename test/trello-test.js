/**
 * Created by juliomojica on 2/15/17.
 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();
import Card from '../js/components/card';
describe('Card Component', function(){
    it('Renders a div with string inside of it', function(){
        const cname = 'card';
        const description = 'Trello-React';

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card className={cname} />);
        const results = renderer.getRenderOutput();
        results.props.className.should.equal('card');

        const kids = results.props.children[1];
    })
});