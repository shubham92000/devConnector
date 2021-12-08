import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { useParams } from 'react-router';
import ProfileTop from './ProfileTop';
import { Link } from 'react-router-dom';
import ProfileAbout from './ProfileAbout';

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  let params = useParams();

  useEffect(() => {
    getProfileById(params.id);
  }, []);

  return (
    <div className="container">
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          profile
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === params.id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
