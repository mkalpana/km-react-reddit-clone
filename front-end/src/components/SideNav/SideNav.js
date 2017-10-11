import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SideNav.css';

class SideNav extends PureComponent {
  render() {
    const { links, selected } = this.props;
    return (
      <div className="SideNav-container">
        {
          links && links.map(link => {
            const linkStyle = `SideNav-Link ${selected === link.name ? 'selected' : ''}`;
            return (
              <div key={link.name} className={linkStyle} >
                <Link to={link.url}>{link.name}</Link>
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
  selected: PropTypes.string,
};
export default SideNav;
