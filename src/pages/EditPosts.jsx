import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import  'react-quill/dist/quill.snow.css'

const EditPosts = () => {
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('Uncategorized')
  const [description,setDescriptions] = useState('')
  const [thumbnail,setThumbnail] = useState('')

  const modules ={
    toolbar: [
      [{'header': [1,2,3,4,5,6, false]}],
      ['bold', 'italic', 'underline','strike','blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  
  const formats = [
    'header', 
    'bold', 'italic', 'underline','strike','blockquote', 
    'list', 'builet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = ['Agriculture', 'Business', 'Education', 'Entertainment', 'Art', 'Investment', 'Uncategorized', 'Weather']

  return (
  <section className="create-post">
    <div className="container">
      <h2>Edit Post</h2>
      <p className="form__error__message">
        This is an error messege
      </p>
      <form className="form create-post__form">
        <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
        <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
          {
            POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
          }
        </select>
        <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescriptions}/>
        <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg' />
        <button className="btn primary" type='submit'>Update</button>
    </form>
  </div>
</section>  )
}

export default EditPosts