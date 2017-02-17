import React from 'react';

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.jQuery('select').material_select();
  }

  submitForm = (e) => {
    e.preventDefault();
    let { form, age, height, weight, gender } = this.refs;
    let bmr;
    if (age.value && height.value && weight.value) {

      if(gender.value === 'male'){
        bmr = `${Math.round(66 + (6.2 * weight.value) + (12.7 * height.value) - (6.76 * age.value))} calories per day`;
      } else {
        bmr = `${Math.round(655.1 + (4.35 * weight.value) + (4.7 * height.value) - (4.7 * age.value))} calories per day`;
      }
    }else {
      bmr = "Calculating..."
    }
    this.props.addBmr(bmr);

  }
  render() {
    return (
      <div className="row">
        <form ref="form" onSubmit={this.submitForm}>
          <label>Age
            <input type="number" onKeyUp={this.submitForm} ref="age" name="age" placeholder="Enter age" />
          </label>

          <label>Height
            <input type="number" onKeyUp={this.submitForm} ref="height" name="height" placeholder="Enter height in inches" /></label>
          <label>Weight
            <input type="number" onKeyUp={this.submitForm} ref="weight" name="weight" placeholder="Enter weight in pounds" /></label>
          <select onChange={this.submitForm} ref="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {/*  <button name="button" className="btn">Get BMR</button> */}
        </form>
      </div>
    );
  }
}

export default Form;
