import React from "react";

// import { theme } from '../theme'

import {
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Option,
} from "@bootstrap-styled/v4";

export const ExampleForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="inline-form-input">Label</Label>
        <Input type="text" defaultValue="with input default value" />
      </FormGroup>
      <FormGroup>
        <Label hidden htmlFor="inline-form-input-group">
          Username
        </Label>
        <InputGroup>
          <InputGroupAddon>Addon</InputGroupAddon>
          <Input
            type="text"
            className="form-control"
            defaultValue="with input default "
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="example-select">Option selection</Label>
        <Input type="select" name="select">
          <Option>1</Option>
          <Option>2</Option>
          <Option>3</Option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label check>
          <Input type="checkbox" /> Checkbox
        </Label>
      </FormGroup>
      
    </Form>
  );
};
