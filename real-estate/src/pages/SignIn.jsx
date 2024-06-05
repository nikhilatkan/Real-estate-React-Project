function SignIn() {
  return (
    <section className="sign-in-heading">
      <h1>Sign in</h1>
      <div>
        <div className="signin-img-container">
          <img
            className="signin-img"
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
          />
        </div>
        <div>
          <form>
            <input type="text" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
