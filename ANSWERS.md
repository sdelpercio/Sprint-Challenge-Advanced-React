- [ ] Why would you use class component over function components (removing hooks from the question)?
      Class components allow you to set state and control your application’s lifecycle through the use of methods like componentDidMount(), componentDidUpdate(), and componentWillUnmount().

- [ ] Name three lifecycle methods and their purposes.
      Three lifecycle methods are componentDidMount(), componentDidUpdate(), and componentWillUnmount(). Mounting is for getting initial data from a server or api call, which occurs after the first render happens. Updating is for doing something whenever your component updates, and you can compare previous props to current props. Unmounting is for when you want to do something right before a component is unmounted and destroyed.

- [ ] What is the purpose of a custom hook?
      Custom hooks allow us to create more individualized hooks for our component’s specific needs. This allows us to combine hooks together, which lets us abstract away a lot of the logic from our components file.

- [ ] Why is it important to test our apps?
      We need to test our applications in order to have confidence that it will lead to a good user experience and eliminate bugs.
