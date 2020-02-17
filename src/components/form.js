import React from "react"
import $ from 'jquery'
import { withPrefix } from 'gatsby'


class Form extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault()

    // Test required fields - email and name
    if (this.state.email.length > 0 && this.state.name.length > 0) {
      // Send the data with Ajax and jQuery
      $.ajax({
        data: this.state,
        type: 'POST',
        url: withPrefix('/sendEmail.php'), // use 'withPrefix' module from 'gatsby' to reference 'sendEmail.php' in 'static' folder.
        success: function(data) {
          console.info(data)
        },
        error: function(xhr, status, err) {
          console.error(status, err.toString())
        }
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
                <input type="text" name="fio" id="fio" className="required" />
                  <label htmlFor="fio">Full Name*</label>
                </div>
                <div className="form-div">
                  <input type="text" name="company" id="company" />
                    <label htmlFor="company">Company / Organization</label>
                  </div>
                  <div className="form-div">
                    <input type="text" name="phone" id="phone" />
                      <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-div">
                      <input type="text" name="email" id="email" className="required" />
                        <label htmlFor="email">Email*</label>
                      </div>
                    </div>
                    <div className="form-blocks">
                      <p>Request details</p>
                      <div className="form-div">
                        <textarea name="message" id="message" className="required"></textarea>
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
