import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class ExpenseCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  handleSave() {
    console.log('handle save');
  }

  handleRemove() {
    console.log('handle remove');
  }

  renderListOfPeople() {
    if (!this.state.people.length) return null;
  }

  renderAdjustments() {
    if (!this.state.people.length) return null;
  }

  renderPersonForm() {
    return (
      <div>
        <TextField
          label="Friend Name"
        />
        <TextField
          id="number"
          label="$ Contributed Amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <Button onClick={this.handleSave.bind(this)} label="Primary" primary={true}>Add</Button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderPersonForm()}
        {this.renderListOfPeople()}
        {this.renderAdjustments()}
      </div>
    )
  }
}