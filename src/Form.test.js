import React from 'react';
import {configure, render as enzymeRender} from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Form from "./Form";
import {fireEvent, render as testRender} from "@testing-library/react";

configure({adapter: new Adapter()});

it('form is loaded', () => {
    const form = enzymeRender(<Form/>)
    expect(form).toHaveLength(1)
    const button = form.find('button')
    expect(button).toHaveLength(1)
    const input = form.find('input')
    expect(input).toHaveLength(2)
});

it("form is submitted", () => {
    const onSubmit = jest.fn();
    const { getByRole } = testRender(<Form onSubmit={onSubmit} />);
    fireEvent.submit(getByRole("form"));
    expect(onSubmit).toHaveBeenCalled();
});

