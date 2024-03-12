function AccountCreation() {
  return (
    <div>
      <form action="http://localhost:4000/api/auth/signup" method="post">
        <div>
          <label htmlFor="yourName">Your Name</label>
          <input
            type="text"
            name="yourName"
            id="yourName"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
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
          <label htmlFor="dateBirth">Date of Birth</label>
          <input type="date" name="dateBirth" id="dateBirth" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            autoComplete="street-address"
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="number"
            name="postalCode"
            id="postalCode"
            autoComplete="postal-code"
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            autoComplete="country-name"
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default AccountCreation
