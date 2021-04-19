import React from 'react';
import {View, Text} from 'react-native';

import {
  Card,
  Container,
  PostTime,
  UserImage,
  UserInfo,
  UserInfoText,
  UserName,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const PostCard = ({item}) => {
  const likeIcon = item.liked ? 'heart' : 'heart-outline';
  const likeIconColor = item.liked ? '#2e64e5' : '#333';

  return (
    <Card>
      <UserInfo>
        <UserImage source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg === 'none' ? (
        <Divider />
      ) : (
        <PostImg source={item.postImg} />
      )}
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText active={item.liked}>
            {item.likes > 0 ? item.likes : ''} Like
          </InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>
            {item.comments > 0 ? item.comments : ''} Comment
          </InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
