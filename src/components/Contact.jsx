import React, { Component } from "react";
import { Link } from "react-router-dom";

//use this in the logbook as well.
export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   these could easily be redone with statehooks

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }
  handleSubmit(ev) {
    alert(`contact form biz:${this.state.value}`);
    ev.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="ContactInfo">
            Contactinfo:
            <input
              type="text"
              name="ContactInfo"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

function About() {
  return (
    <article>
      <h3>A Tool for Understanding Human Habitats</h3>
      <p>
        This fieldguide comes from a love of fieldguides and connecting with the
        world we live in through exploration and food. Though food is not the
        only thing which can be foraged, natural dyes and medicines are two
        other common entry points to foraging. This fieldguide is not a
        replacement for the many other resources. It is just as much an exercise
        in documenting one Rhode Islanders exploration of their home state.
        Source materials are cited & linked to throughout the guide and they are
        collected in <Link to="/resources">Resources</Link>. A particular
        inspiration and source is the regional guide Northeast Foraging by Leda
        Meredith.
        <br /> - Andrew Oesch winter 2021
      </p>
    </article>
  );
}

export default function Contact() {
  return (
    <>
      <h2>Ask a question, send us feedback, or just say Hello.</h2>
      <ContactForm />
      <br />
      <About />
    </>
  );
}
