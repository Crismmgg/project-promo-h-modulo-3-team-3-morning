import React from 'react';
import '../stylesheets/Card.scss';
import Reset from './Reset';
import PropTypes from 'prop-types';
import User from './User';
import Photo from './Photo';
import Icons from './Icons';

function Card(props) {
  return (
    <section className='result'>
      <Reset handleReset={props.handleReset} />
      <div className={`card js-card-palette${props.palette}`}>
        <User
          name={props.name || 'Nombre Apellido'}
          job={props.job || 'Front-end developer'} />
        <Photo photo={props.photo} />
        <Icons phone={props.phone} email={props.email} linkedin={props.linkedin} github={props.github} />
      </div>
    </section>
  );
}

Card.defaultProps = {
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: ''
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

export default Card;
