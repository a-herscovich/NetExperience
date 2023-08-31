import "./EmailInput.scss";

const EmailInput = () => {
    return (
        <div className="freeTrialInput">
              <input className="inputField" placeholder="Enter email" />
            <div className="submit" onClick={() => console.log('send email')}>Start free trial</div>
        </div>
    )
}

export default EmailInput;