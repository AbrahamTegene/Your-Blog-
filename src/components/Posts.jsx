import React, { useState } from 'react'

import thumbnail1 from '../images/blog1.jpg'
import thumbnail2 from '../images/blog2.jpg'
import thumbnail3 from '../images/blog3.jpg'
import thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    { id: '1', thumbnail: thumbnail1, category: 'Agriculture', title: 'Exploring Sustainable Agriculture Practices in Modern Farming', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', authorID: 1 },
    { id: '2', thumbnail: thumbnail2, category: 'Business', title: 'Welcome to Ethiopia', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', authorID: 2 },
    { id: '3', thumbnail: thumbnail3, category: 'Education', title: 'Revolutionizing Education: The Future of Learning and Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', authorID: 3 },
    { id: '4', thumbnail: thumbnail4, category: 'Entertainment', title: 'Unleashing Creativity and Entertainment: A Journey into Arts and Culture', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', authorID: 4 },
    // Add more posts with longer titles
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);
  
    return (
        <section className='posts'>
            <div className="container posts__container">
                {
                    posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
                        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />
                    ))
                }
            </div>
        </section>
    )
}

export default Posts;
