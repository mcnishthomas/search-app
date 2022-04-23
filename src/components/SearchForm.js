import React from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';

const searchForm = () => (

    <Form inline>
        <FormGroup controlId="formInlineEmail">
            <FormControl type="search" placeholder="enter something..." />
        </FormGroup>
        {' '}
        <Button type="submit">
            search
        </Button>
    </Form>

)

export default searchForm;