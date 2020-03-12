import React, { PureComponent, Fragment } from 'react'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'
import Link from 'next/link'

export default class MainContainer extends PureComponent {
  render () {
    return (
      <Fragment>
        <Segment vertical inverted style={{ padding: '8em 0em' }}>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={12}>
                <Header as='h3' inverted style={{ fontSize: '2em' }}>
                  We Build R&D Blockchain Products
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We're betting that decentralization and trust minimization are at
                  the core of the next web revolution.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>

              </Grid.Column>
              <Grid.Column textAlign='center' width={4}>
                <a href='#current-projects'>
                  <Button size='huge'>Check Them Out</Button>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Image centered size='medium' src='/static/undraw_marketing_v0iu.svg' />
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Innovative Products
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We design innovate products from scratch and implement them ourselves.
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Image centered size='medium' src='/static/undraw_predictive_analytics_kf9n.svg' />
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Market Mechanisms Research
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We research new market mechanisms and how they can drive more efficient value transmission.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical id='current-projects'>
          <Container text>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '0em 0em 3em', textTransform: 'uppercase' }}
            >
              <a href='#'>Our Current Project</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Omen
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Omen is a blockchain for prediction markets. It is a decentralized
              platform that allows anyone to permissionlessly create, trade, and
              build markets for forecasted data.
            </p>
            <Link href='/blog'>
              <Button as='a' size='large'>
                Read More
              </Button>
            </Link>
          </Container>
        </Segment>
      </Fragment>
    )
  }
}
