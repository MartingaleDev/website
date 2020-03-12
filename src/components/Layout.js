import React, { Component, createRef } from 'react'
import Link from 'next/link'

import {
  Container,
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Input,
  Modal,
  Image,
  List,
  Popup,
  Menu,
  Segment
} from 'semantic-ui-react'

import * as emailValidator from 'email-validator'

export default class Layout extends Component {
  state = { open: false, emailError: false };

  emailRef = createRef()

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  inputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    this.setState({
      [name]: value,
      emailError: false
    })
  }

  submitEmail = () => {
    const { emailInput } = this.state
    if (emailValidator.validate(emailInput)) {
      // Success

      this.emailRef.current.inputRef.current.value = ''
      // ^^^ no idea why that's nested this deep
      this.show()
    } else {
      // Fails
      this.setState({
        emailError: true
      })
    }
  }

  render () {
    const { open, emailError } = this.state

    return (
      <div className='layout'>
        <Menu fixed='top' inverted borderless style={{ fontSize: '1.5em' }}>
          <Container>
            <Link href='/'>
              <Menu.Item as='a' header>
                <Image
                  size='small'
                  src='/static/Martingale-logo/vector/default-monochrome.svg'
                />
              </Menu.Item>
            </Link>
            <Link href='/about'>
              <Menu.Item as='a' position='right'>
                About
              </Menu.Item>
            </Link>

            <Dropdown item simple text='More' position='right'>
              <Dropdown.Menu inverted>
                <Link href='/blog'>
                  <Dropdown.Item as='a'>Blog</Dropdown.Item>
                </Link>
                <Dropdown.Item
                  as='a'
                  onClick={() =>
                    window.open('https://github.com/martingaledev')
                  }
                >
                  GitHub
                </Dropdown.Item>
                <Dropdown.Item>Riot</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign='center'>
            <Grid inverted divided>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='General' />
                <List link inverted>
                  <Link href='/about'>
                    <List.Item as='a'>About</List.Item>
                  </Link>
                  <List.Item as='a' href='mailto:contact@martingale.dev'>Contact</List.Item>
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
                  <Link href='/blog'>
                    <List.Item as='a'>Blog</List.Item>
                  </Link>
                  <a href='https://github.com/martingaledev'>
                    <List.Item as='a'>GitHub</List.Item>
                  </a>
                  <List.Item as='a'>Riot Chat</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7} textAlign='center'>
                <Header inverted as='h4' content='Keep in touch' />
                <Popup content='Invalid email address' open={emailError} position='top center' trigger={
                  <Input
                    name='emailInput'
                    placeholder='Email'
                    onChange={this.inputChange}
                    error={emailError}
                    ref={this.emailRef}
                    action={{
                      content: 'Submit',
                      icon: 'send',
                      color: 'blue',
                      onClick: this.submitEmail
                    }}
                  />
                } />
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <p>© 2020 Martingale Technologies</p>
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='mailto:contact@martingale.dev'>
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

        <Modal dimmer='blurring' open={open} onClose={this.close}>
          <Modal.Header>Thanks for singing up!</Modal.Header>
          <Modal.Content>
            <p>We'll be in contact when we have some news to share.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color='black'
              icon='checkmark'
              content='Close'
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
