import React, { Component, Fragment } from 'react'

import IntroducingOmen from 'posts/introducing-omen.md'

import {
  Button,
  Card,
  Divider,
  Image,
  Grid,
  Segment
} from 'semantic-ui-react'
// import Link from 'next/link'

const { MartingaleBlue } = require('@airwavves/colors')

const Posts = [
  {
    title: 'Introducing Omen',
    image: '/static/eclipse.jpg',
    slug: 'introducing-omen',
    author: 'Logan Saether',
    date: '7 March 2020',
    teaser: 'Omen is a prediction market protocol.'
  }
]

let alert

const renderPosts = () => Posts.map((post) => (
  <Card raised key={post.slug + Math.random().toString()}>
    <Image src={post.image} />
    <Card.Content>
      <Card.Header>
        {post.title}
      </Card.Header>
      <Card.Meta>
        <span style={{ color: '' }}>By</span>
        <span style={{ color: MartingaleBlue + 'AA' }}>{post.author}</span>
      </Card.Meta>
      <Card.Meta>
        {post.date}
      </Card.Meta>
      <Card.Description>
        {post.teaser}
      </Card.Description>
      <Divider />
      {/* <Link href={`/blog/${post.slug}`}> */}
      <Button color='blue' floated='right' onClick={() => alert('Coming soon')}>
            Read
      </Button>
      {/* </Link> */}
    </Card.Content>
  </Card>
))

export default class Blog extends Component {
  render () {
    return (
      <Fragment>
        {
          (() => {
            switch (this.props.router.query.slug) {
              case 'introducing-omen':
                return (
                  <Segment vertical style={{ padding: '8em 0em' }}>
                    <Grid container stackable verticalAlign='middle'>
                      <Grid.Column>
                        <IntroducingOmen />
                      </Grid.Column>
                    </Grid>
                  </Segment>
                )
              default:
                return (
                  <Segment vertical style={{ padding: '8em 0em' }}>
                    <Grid container stackable verticalAlign='middle'>
                      <Grid.Row>
                        <Grid.Column width={16}>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Card.Group centered itemsPerRow={3} style={{ padding: '0em 4em' }}>
                          {renderPosts()}
                        </Card.Group>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                )
            }
          })()
        }
      </Fragment>
    )
  }
}
