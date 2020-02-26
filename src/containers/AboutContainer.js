import React, { PureComponent, Fragment } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

export default class AboutContainer extends PureComponent {
  render () {
    return (
      <Fragment>
        <Segment style={{ padding: '8em 0em' }} basic>
          <Grid container verticalAlign='middle'>
            <Grid.Row>
              <p style={{ fontSize: '1.33em' }}>
                Martingale Technologies is a research and development firm based
                in Berlin, Germany.
              </p>
              <p style={{ fontSize: '1.33em' }}>
                We experiment with new market mechanisms and are especially interested
                in the vertical of prediction market products.
              </p>
              <p style={{ fontSize: '1.33em' }}>
                We're taking a big bet that the web of tomorrow will be based on
                permissionless and trustless value transfers.
              </p>
            </Grid.Row>
          </Grid>
        </Segment>
      </Fragment>
    )
  }
}
