import React, { Component } from 'react'
import $ from 'jquery'


class Form extends React.Component {
  state = {
    inputEmail: '',
    inputCheckBoth: false,
    inputCheckDesign: false,
    inputCheckDev: false,
    inputMessage: '',
    inputName: '',
    isCaptchaValid: false,
    isErrorShown: false,
    isFormValid: false
  }

  handleInput = event => {
    // Test for input and length of the value
    if (event.target.value.length > 0 && event.target.name !== 'inputEmail') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    // If input is for email address validate it with regexp
    if (event.target.name === 'inputEmail') {
      // eslint-disable-next-line
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (reg.test(String(event.target.value).toLowerCase())) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    }
  }


  // Show message in console when reCaptcha plugin is loaded
  onCaptchaLoad = () => {
    console.log('Captcha loaded')
  }



  handleFormSubmit = event => {
    event.preventDefault()

    // Test
    if (this.state.inputEmail.length > 0 && this.state.inputName.length > 0 && this.state.inputMessage.length > 0 && this.state.isCaptchaValid) {
      this.setState({
        isErrorShown: false,
        isFormValid: true
      })

      // Send the form with AJAX
      $.ajax({
        data: this.state,
        type: 'POST',
        url: '../../sendEmail.php',
        success: function(data) {
          console.info(data)
        },
        error: function(xhr, status, err) {
          console.error(status, err.toString())
        }
      })

      // Reset state after sending the form
      this.setState({
        inputEmail: '',
        inputCheckBoth: false,
        inputCheckDesign: false,
        inputCheckDev: false,
        inputMessage: '',
        inputName: '',
        isCaptchaValid: false,
        isErrorShown: false,
        isFormValid: false
      })
    } else {
      // Show error message
      this.setState({
        isErrorShown: true
      })
    }
  }

  render(){
    return (
      <div className="projects-wrapper" id="sendpage">
        <div className="projects">
          <h2>Want to start a project?</h2>
          <p>It's simple!</p>
          <form action="#sendpage" method="post" encType="multipart/form-data">
            <div className="form-blocks">
              <p>Contact details</p>
              <div className="form-div">
                <input type="text" name="fio" onChange={this.handleInput} required={true} id="fio" className="required" />
                  <label htmlFor="fio">Full Name*</label>
                </div>
                <div className="form-div">
                  <input type="text" name="company" onChange={this.handleInput} required={true} id="company" />
                    <label htmlFor="company">Company / Organization</label>
                  </div>
                  <div className="form-div">
                    <input type="text" name="phone" onChange={this.handleInput} required={true} id="phone" />
                      <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-div">
                      <input type="text" name="email" onChange={this.handleInput} required={true} id="email" className="required" />
                        <label htmlFor="email">Email*</label>
                      </div>
                    </div>
                    <div className="form-blocks">
                      <p>Request details</p>
                      <div className="form-div">
                        <textarea name="message" onChange={this.handleInput} required={true} id="message" className="required"></textarea>
                        <label htmlFor="message">Please describe your requirements*</label>
                      </div>
                      <div className="form-div">
                        <input name="filestoupload[]" id="files_to_upload" type="file" multiple="multiple" />
                          <label htmlFor="files_to_upload">Attach file</label>
                        </div>
                        <input type="hidden" id="fsc" value="0" />
                          <input type="hidden" id="fsz" value="0" />
                            <div className="form-div">
                          <div id="filez"></div>
                          <p>Up to 5 attachments. File must be less than 5 MB.</p>
                        </div>
                      <ul id="filelist"></ul>
                    </div>
                  <div className="clear"></div>
                <input type="button" name="submit" onClick={this.handleFormSubmit} value="Submit" id="submit" className="redgrad" />
              <div className="form-mess"></div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form
