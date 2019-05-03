import React, { Component } from 'react';
import Loader from '../loader/Loader';

class FetchApiGitHub extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount = () => {
    fetch('https://api.github.com/repos/be-codified/personal-presentation-site')
      .then(res => res.json())
      .then(
        () => {
          // console.log(result.pushed_at);
          /*
          this.setState({
            isLoaded: true,
            items: result.items
          });
          */
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        () => {
          /*
          this.setState({
            isLoaded: true,
            error
          });
          */
        },
      );
  }

  render() {
    return (
      <Loader />
    );
  //   const { error, isLoaded, items } = this.state;
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       <ul>
  //         {items.map(item => (
  //           <li key={item.name}>
  //             {item.name} {item.price}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  }
}

export default FetchApiGitHub;
