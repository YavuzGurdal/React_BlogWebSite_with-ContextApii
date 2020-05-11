import React from 'react'
import { Link } from 'react-router-dom'

// 1. Yontem
//function PostCard(props) {
//const { title, image, id, author, date } = props

// 2. Yontem
//function PostCard({ title, image, id, author, date }) {

function PostCard({ title, image, id, author, date }) {

    const divStyle = {
        width: '100%',
        height: '200px',
        backgroundImage: `url('${image}')`, // bu sekilde biseyler yazacaksak `` backtick icine yaziyoruz
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        borderTopRightRadius: '2px',
        borderTopLeftRadius: '2px'
    }

    return (
        <div className='card'>
            <Link to={'/' + id}> {/* burasi onemli, Link ile props da gonderebiliriz*/}
                <div className="card-image"
                    style={divStyle}
                >
                </div>
            </Link>

            <div className="card-info">
                <Link to={'/' + id}>
                    <div className="card-title">{title}</div>
                </Link>
                <div className="card-autor-section">
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard
