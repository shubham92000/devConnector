import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import { getPost } from '../../actions/post';
import { Link, useParams } from 'react-router-dom';
import CommentForm from './CommentForm';

const Post = ({ getPost, post: { post, loading } }) => {
  let params = useParams();

  useEffect(() => {
    getPost(params.id);
  }, []);

  if (loading || post === null) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
