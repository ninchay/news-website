import React from 'react'
import './Article.css'
import parse from 'html-react-parser'

function Article(props) {
    const data=props.data

return (
<div className='article'>
    <div className='text'>
        <div className='publicationDate'>
            {data.webPublicationDate}
        </div>

        <div className='webTitle'>
            {data.webTitle}
        </div>

        <div className='headline'>
            {data.fields.headline}
        </div>

        <div className='bodyText'>
            {parse(data.fields.body)}
        </div>
    </div>

    <div className='thumbnail'>
        {data.fields.thumbnail}
    </div>
</div>
  )
}

export default Article