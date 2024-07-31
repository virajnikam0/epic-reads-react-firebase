import React from 'react'
import { Card, Badge } from "react-bootstrap";

const ArticleList = ({articlesData}) => {
  return (
    <>
        {
          articlesData?.map((article) => {
            return (
              <Card key={article?.id} className="mb-2" bg="light" text='dark'>
                <a className='unstyled-link' href={article?.link} target="_blank">
                  <Card.Body > 
                    <div>
                      {article?.title}
                    </div>
                    <div>
                      <Badge bg="dark" text='light' pill>{article?.description}</Badge>
                    </div>
                  </Card.Body>
                  </a>
              </Card>)
          })
        }
    </>
  )
}

export default ArticleList;
