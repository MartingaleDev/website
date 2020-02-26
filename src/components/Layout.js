import React, { PureComponent } from 'react'
import Link from 'next/link'

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Input,
  List,
  Menu,
  Segment
} from 'semantic-ui-react'

export default class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        <Menu fixed='top' inverted borderless style={{ fontSize: '1.5em' }}>
          <Container>
            <Link href='/'>
              <Menu.Item as='a' header>
                {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
                Martingale Technologies
              </Menu.Item>
            </Link>
            <Link href='/about'>
              <Menu.Item as='a' position='right'>About</Menu.Item>
            </Link>

            <Dropdown item simple text='More' position='right'>
              <Dropdown.Menu>
                <Dropdown.Item>Blog</Dropdown.Item>
                <Dropdown.Item>GitHub</Dropdown.Item>
                <Dropdown.Item>Riot</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

        {this.props.children}

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign='center'>
            <Grid inverted divided>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='General' />
                <List link inverted>
                  <List.Item as='a'>About</List.Item>
                  <List.Item as='a'>Contact</List.Item>
                  <List.Item as='a'>Careers</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Technology' />
                <List link inverted>
                  <List.Item as='a'>Documentation</List.Item>
                  <List.Item as='a'>Projects</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Community' />
                <List link inverted>
                  <List.Item as='a'>Blog</List.Item>
                  <List.Item as='a'>GitHub</List.Item>
                  <List.Item as='a'>Riot Chat</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7} textAlign='center'>
                <Header inverted as='h4' content='Keep in touch' />
                <Input
                  placeholder='Email'
                  action={{
                    content: 'Submit',
                    icon: 'send',
                    color: 'blue'
                  }}
                />
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <p>© 2020 Martingale Technologies</p>
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}
