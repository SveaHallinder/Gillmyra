import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Post = ({ data }) => {
  // Function to handle the like action
  const handleLike = () => {
    console.log('Liked post:', data.id);
    // Here you would update the state to reflect the like action
  };

  // Function to handle comments, share, and save
  const handleComment = () => {
    // Placeholder for comment action
  };

  const handleShare = () => {
    // Placeholder for share action
  };

  const handleSave = () => {
    // Placeholder for save action
  };

  return (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Text>{data.username}</Text>
      </View>

      {/* Post Image */}
      <Image style={styles.postImage} source={{ uri: data.imageUri }} />

      {/* Post Actions */}
      <View style={styles.postActions}>
        <TouchableOpacity onPress={handleLike}>
          <Image source={require('./like-icon.svg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment}>
          <Image source={require('./comment-icon.svg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Image source={require('./share-icon.svg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
          <Image source={require('./save-icon.svg')} />
        </TouchableOpacity>
      </View>

      {/* Post Likes */}
      <Text>{data.likes} likes</Text>

      {/* Post Caption */}
      <Text>{data.caption}</Text>

      {/* Post Comments Section */}
      {/* You can create a separate component for comments if needed */}
      <View style={styles.commentsSection}>
        {/* Display comments here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    // Styles for the post container
  },
  postHeader: {
    // Styles for the post header
  },
  postImage: {
    // Styles for the post image
  },
  postActions: {
    // Styles for the post actions row
  },
  commentsSection: {
    // Styles for the comments section
  },
  // Add other styles as needed
});

export default Post;