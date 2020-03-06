import React, { PureComponent, Fragment } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

export default class AboutContainer extends PureComponent {
  render () {
    return (
      <Fragment>
        <Segment style={{ padding: '8em 0em' }}>
          <Grid container verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={10} style={{ padding: '0em 2em' }}>
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
                <br /><br /><br />
              </Grid.Column>
              <Grid.Column width={4}>
                <iframe width='425' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://www.openstreetmap.org/export/embed.html?bbox=13.27903747558594%2C52.41289089264018%2C13.61412048339844%2C52.57468079766565&amp;layer=mapnik&amp;marker=52.49387980002842%2C13.446724099999983' style={{ border: '1px solid black' }} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Fragment>
    )
  }
}
