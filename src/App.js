import React from "react";
import { connect } from "react-redux";
import changeText from "./actions";
import { Field, reduxForm } from "redux-form";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>The input text is : {this.props.state.inputText}</div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="textInput"
            component={this.renderInput}
            label="Enter Text"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }

  renderInput = ({ input }) => {
    return <input {...input} />;
  };

  onSubmit = formValues => {
    this.props.changeText(formValues.textInput);
  };
}

const mapStateToProps = state => {
  return { state: state };
};

const formWrapped = reduxForm({
  form: "inputForm"
})(App);

export default connect(mapStateToProps, { changeText })(formWrapped);
