import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Button, Card, CardSection, Input} from "./common";

class WorkoutCreate extends Component {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Workout"
                        placeholder="workout name"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Date"
                        placeholder="mm/dd/yyyy"
                    />
                </CardSection>

                <CardSection>
                    <Button>Add Lift</Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect()(WorkoutCreate);