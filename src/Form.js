import React from 'react';

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  submitForm = (e) => {
    e.preventDefault();
    let { form, age, height, weight, gender } = this.refs;
    let data = {
      age,
      height,
      weight,
      gender,
    }
    this.props.calcCal(data);
    form.reset();
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.submitForm}>
          <input ref="age" name="age" placeholder="Enter age" />
          <input ref="height" name="height" placeholder="Enter height in inches" />
          <input ref="weight" name="weight" placeholder="Enter weight in pounds" />
          <select ref="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button name="button" className="btn">Get BMR</button>
        </form>
      </div>
    );
  }
}

export default Form;
