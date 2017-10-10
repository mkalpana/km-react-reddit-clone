import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SideNav.css';

class SideNav extends Component{
  render() {
    const { links } = this.props;
    return (
      <div className="SideNav-container">
        <h2>Categories</h2>
        {
          links && links.map(link => {
            return (
              <div>
                <Link key={link.name} to={link.url}>{link.name}</Link>
              </div>
            )
          })
        }
      </div>
    );
  }
}
SideNav.propTypes = {
  links: PropTypes.array,
};
export default SideNav;
