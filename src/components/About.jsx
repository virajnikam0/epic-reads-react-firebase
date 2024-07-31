import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { ABOUT_DEV_WEBSITE, ABOUT_DEV_GITHUB, ABOUT_PROJECT_GITHUB } from "./../utils/app-constants";

const About = () => {
  return (
  <>

          <Card bg='light m-2'>
              <Card.Header>About Project</Card.Header>
              <Card.Body>
                  <Card.Title>Epic Read</Card.Title>
                  <Card.Text>
                      A repository of creatively design arch. with automated tools like Zapier & Firestore DB. Aims to catalogs carefully curated long-length articles, essays on diverse topics
                  </Card.Text>
                  <Button variant="outline-primary m-2"><a className='unstyled-link' target="_blank" href={ABOUT_PROJECT_GITHUB}>Github Repo</a></Button>
              </Card.Body>
              <Card.Footer text="dark">Made in ❤️ from India</Card.Footer>
          </Card>

          <Card bg='light m-2'>
              <Card.Header>About Dev</Card.Header>
              <Card.Body>
                  <Card.Title>Viraj Nikam</Card.Title>
                  <Card.Text>
                      Full-Stack Engineer
                  </Card.Text>
                  <Button variant="outline-primary m-2"><a className='unstyled-link' target="_blank" href={ABOUT_DEV_WEBSITE}>Portfolio</a></Button>
                  <Button variant="outline-success m-2"><a className='unstyled-link' target="_blank" href={ABOUT_DEV_GITHUB}>Github</a></Button>
              </Card.Body>
              <Card.Footer text="dark">Made in ❤️ from India</Card.Footer>
          </Card>
  </>
  )
}

export default About;