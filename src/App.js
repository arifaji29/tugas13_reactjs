import React from 'react';

import { Grid, Form, Feed, Button,Header,  Comment, Divider, Segment, Input, Search, Container, Icon, Dimmer, Label, Loader, Image, Placeholder, List, Table, Menu } from "semantic-ui-react";

function App() {
  return (
    <>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Container textAlign='center'>
              <Icon name='search' size='huge' />
              <h3>Cari Dokumen</h3>
              <Search placeholder='Search...' />
            </Container>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Container textAlign='center'>
              <Icon name='file pdf' size='huge' />
              <h3>Tambah Document Baru</h3>
              <Button primary>Create Document</Button>
            </Container>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid>

      {/* <Grid columns={2} >
        <Grid.Column> */}
      <br>
      </br>
      <Container textAlign='center'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Grid.Column>
                  <Container textAlign='right'>
                    <Search placeholder='Search...' />
                  </Container>
                </Grid.Column>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Nama Document</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>

            </Table.Row>
          </Table.Header>



          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>pdf</Table.Cell>

            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>pdf</Table.Cell>

            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>pdf</Table.Cell>

            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
      {/* </Grid.Column>
      </Grid> */}



    </>
  );
}

export default App;
