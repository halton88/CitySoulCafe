import React from "react"

class Contact extends React.Component {

  generateForm(){
    return (
      <form id="contact_form">
        <input type="text" placeholder="Name"required/>
        <input type="email" placeholder="Email Address" required/>
        <textarea required></textarea>
        <div id="contact_form-actions">
          <button className="submitButton">Submit</button>
          <button type="reset" className="clearButton">Clear</button>
        </div>
      </form>
    )
  }

  selectForm(option){
    const buttons = [...document.querySelectorAll('#contact button')];
    buttons.map(button => button.classList.remove('activeForm'))
    if(option === 'A'){
      buttons[0].classList.add('activeForm')

    } else if(option === 'B'){
      buttons[1].classList.add('activeForm')

    } else if(option === 'C'){
      buttons[2].classList.add('activeForm')
    }
  }
  render(){
    return (
      <div id="contact">
        <h2 className="contact-title"> Contact Us </h2>
        <nav className="contact_nav">
          <button className="activeForm" onClick={this.selectForm.bind(this, 'A')} id="optionA">General</button>
          <button onClick={this.selectForm.bind(this, 'B')} id="optionB">Vendor</button>
          <button onClick={this.selectForm.bind(this, 'C')} id="optionC">Touring Poet</button>
        </nav>
        {this.generateForm()}
  </div>
    )
  }
}

export default Contact
