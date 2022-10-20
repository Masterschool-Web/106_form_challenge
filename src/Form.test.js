import React from 'react';
import {configure, render as enzymeRender} from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Form from "./Form";
import {fireEvent, getByTestId, render as testRender} from "@testing-library/react";

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

it("username change works", () => {
    const onUsernameChange = jest.fn();
    const onPasswordChange = jest.fn();
    const { getByTestId } = testRender(<Form onPasswordChange={onPasswordChange} onUsernameChange={onUsernameChange}/>);
    fireEvent.change(getByTestId("username-field"), {target: {value: 'a'}});
    expect(onUsernameChange).toHaveBeenCalled();
    expect(onPasswordChange).not.toHaveBeenCalled();
});

it("password change works", () => {
    const onUsernameChange = jest.fn();
    const onPasswordChange = jest.fn();
    const { getByTestId } = testRender(<Form onPasswordChange={onPasswordChange} onUsernameChange={onUsernameChange}/>);
    fireEvent.change(getByTestId("password-field"), {target: {value: 'a'}});
    expect(onPasswordChange).toHaveBeenCalled();
    expect(onUsernameChange).not.toHaveBeenCalled()
});