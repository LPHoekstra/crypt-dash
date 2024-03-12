import styled from "styled-components"
import colors from "../../styles/colors"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 45px;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label {
      margin-bottom: 9px;
      font-weight: 400;
      font-size: 13px;
    }

    input {
      border-radius: 10px;
      border: 1px solid ${colors.inputBorder};
      padding: 13px;
    }
  }

  button {
    font-size: 15px;
    font-weight: 500;
    padding: 11px;
    margin-top: 4px;
    text-align: center;
    background-color: #1814f3;
    border: none;
    border-radius: 9px;
    color: ${colors.cardsText1};
  }
`

function AccountCreation() {
  return (
    <div>
      <Form action="http://localhost:4000/AccountCreation" method="post">
        <div>
          <label htmlFor="YourName">Your Name</label>
          <input
            type="text"
            name="YourName"
            id="YourName"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            name="UserName"
            id="UserName"
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
          />
        </div>
        <div>
          <label htmlFor="DateBirth">Date of Birth</label>
          <input type="date" name="DateBirth" id="DateBirth" />
        </div>
        <div>
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            name="Address"
            id="Address"
            autoComplete="street-address"
          />
        </div>
        <div>
          <label htmlFor="City">City</label>
          <input type="text" name="City" id="City" />
        </div>
        <div>
          <label htmlFor="PostalCode">Postal Code</label>
          <input
            type="number"
            name="PostalCode"
            id="PostalCode"
            autoComplete="postal-code"
          />
        </div>
        <div>
          <label htmlFor="Country">Country</label>
          <input
            type="text"
            name="Country"
            id="Country"
            autoComplete="country-name"
          />
        </div>
        <button type="submit">Create Account</button>
      </Form>
    </div>
  )
}

export default AccountCreation
