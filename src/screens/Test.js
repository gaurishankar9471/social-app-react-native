import React from 'react';
import {View, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Icon,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  DeckSwiper,
  Fab,
  FooterTab,
  Footer,
  Badge,
  Item,
  Input,
  Tab,
  Tabs,
  TabHeading,
} from 'native-base';

const data = [
  {
    name: 'Gauri',
  },
  {
    name: 'Gauri',
  },
  {
    name: 'Gauri',
  },
  {
    name: 'Gauri',
  },
  {
    name: 'Gauri',
  },
  {
    name: 'Gauri',
  },
];

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: {
      uri:
        'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
    },
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: {
      uri:
        'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
    },
  },
];

const Test = () => {
  return (
    <Container style={{backgroundColor: '#000'}}>
      <Content>
        <Header hasTabs />

        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="camera" />
                <Text>Camera</Text>
              </TabHeading>
            }>
            <Tab />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>No Icon</Text>
              </TabHeading>
            }>
            <Tab />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="apps" />
              </TabHeading>
            }>
            <Tab />
          </Tab>
        </Tabs>
        <Image
          source={{
            uri:
              'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
          }}
          style={{height: 300, width: null, flex: 1}}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 35,
            fontWeight: '500',
            textAlign: 'center',
            margin: 20,
          }}>
          Enterprise team {'\n'}
          collaboration.
        </Text>
        <Text
          style={{
            color: '#758283',
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'center',
            margin: 20,
            lineHeight: 25,
          }}>
          Bring together your files, your tools projects and people including a
          new mobile and desktop application
        </Text>
        <View
          style={{
            marginTop: 100,
            margin: 20,
            flexWrap: 'wrap',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            block
            style={{
              backgroundColor: '#fff',
              flex: 1,
              borderRadius: 20,
              marginRight: 10,
            }}>
            <Text style={{color: '#000'}}>Register</Text>
          </Button>

          <Button
            block
            style={{
              backgroundColor: '#242B2E',
              flex: 1,
              borderRadius: 30,
              marginLeft: 10,
            }}>
            <Text style={{color: '#fff'}}>Sign In</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Test;
