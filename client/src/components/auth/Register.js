// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
// import { connect } from 'react-redux';
// import { registerUser } from '../../actions/authActions';
// import { Navigate } from 'react-router-dom';

// class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       password2: '',
//       errors: ''
//     };

//     // this.onChange = this.onChange.bind(this);
//   }

//   UNSAFE_componentWillReceiveProps(nextProps) {
//     if (nextProps.errors && nextProps.errors !== this.state.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2,
//     };

//     this.props.registerUser(newUser, this.props.history);

//   }

//   render() {
//     const { errors } = this.state;
//     // const { errors } = this.props;

//     const { user } = this.props.auth;

//     return (
//       <div>
//         {/* {user && (
//           <Navigate to="/login" />
//         )} */}
//         <div classpassword2="register">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 m-auto">
//                 <h1 className="display-4 text-center">Sign Up</h1>
//                 <p className="lead text-center">Create your DevConnector account</p>
//                 <form noValidate onSubmit={this.onSubmit}>
//                   <div className="form-group">
//                     <input type="text" className={classnames('form-control form-control-lg', {
//                       'is-invalid': errors.name
//                     })} placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} />
//                     {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
//                   </div>
//                   <div className="form-group">
//                     <input type="email" className={classnames('form-control form-control-lg', {
//                       'is-invalid': errors.email
//                     })} placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
//                     {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
//                     <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
//                   </div>
//                   <div className="form-group">
//                     <input type="password" className={classnames('form-control form-control-lg', {
//                       'is-invalid': errors.password
//                     })} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
//                     {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
//                   </div>
//                   <div className="form-group">
//                     <input type="password" className={classnames('form-control form-control-lg', {
//                       'is-invalid': errors.password2
//                     })} placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
//                     {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
//                   </div>
//                   <input type="submit" className="btn btn-info btn-block mt-4" />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(mapStateToProps, { registerUser })(Register);

import React, { useState, Fragment } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      const newUser = {
        name,
        email,
        password,
        password2,
      };
      console.log(newUser);
      setFormData({
        name: '',
        email: '',
        password: '',
        password2: ''
      })
    }
  }


  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={onSubmit}>

        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
        </div>

        <div className="form-group">
          <input type="email" placeholder="Email Address" value={email} onChange={onChange} name="email" />
          <small className="form-text"
          >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Register" />

      </form>

      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  )
}

export default Register;
