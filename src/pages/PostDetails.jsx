import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog3.jpg'

const PostDetails = () => {
  return (
    <section className="post-details">
      <div className="container post-detail__container">
        <div className="post-details__header">
          <PostAuthor/>
          <div className="post-details__button">
            <Link to={`/post/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/post/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in ea aut. Rerum temporibus placeat, exercitationem maxime repellendus, perspiciatis saepe eligendi nulla commodi ullam aliquam natus magnam, vitae ad ab voluptatibus cum modi sapiente. Ad perferendis fugit corrupti consectetur sint.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed doloremque fuga! Enim non nihil excepturi facilis doloribus at quo voluptate, architecto incidunt nobis natus repellendus porro rerum autem qui voluptas dolor labore ipsum harum vitae libero quibusdam recusandae. Eaque, ullam. Repudiandae ipsa sit natus molestiae! Minima magni magnam laborum ut! Accusantium a eum amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, qui optio neque odio quae voluptatibus ullam eaque incidunt autem, molestias quis distinctio velit magni repellat impedit dolor, itaque expedita! Facere magnam provident dolorem optio eaque exercitationem vitae, esse consequatur culpa iusto aliquid nobis quo molestias consectetur aspernatur voluptate nam deleniti aliquam itaque deserunt quam amet atque. Corporis dolor qui obcaecati sunt nesciunt quis. Odit perspiciatis, repudiandae optio at harum labore pariatur dolores temporibus quod voluptatum rem suscipit ut sed atque? Dolor autem molestiae cumque tenetur illum recusandae ipsum inventore similique alias rem itaque, saepe possimus nam libero minus ducimus exercitationem mollitia eveniet repellendus deleniti in et? Numquam praesentium magni exercitationem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur necessitatibus molestiae recusandae impedit, dignissimos porro iure nemo delectus at soluta, ea, dolorem blanditiis reprehenderit accusantium quas est vero eveniet quasi fugit voluptatum corporis similique rerum quod. Nostrum sint praesentium quas magnam, amet cumque nulla. Animi quasi quam sit rerum inventore enim aperiam recusandae minus. Tempore assumenda maiores quis consectetur ratione error est nostrum rem sapiente eum odit tempora, velit inventore repellat consequatur deserunt enim natus atque. Quisquam dolores nisi similique voluptates sunt, itaque repellendus maxime possimus sed corrupti magnam nam, fugiat ut optio repellat earum odit consequatur cum vel harum delectus dolore vero. Natus voluptatum excepturi officia dolores numquam necessitatibus, inventore optio praesentium sint eius iure harum asperiores at. Perspiciatis facilis incidunt veniam numquam, pariatur non possimus alias nostrum accusamus eos nam veritatis, itaque neque ad! Repellat nisi quae eum pariatur officiis dicta saepe, tempora suscipit optio nostrum assumenda facere numquam necessitatibus error praesentium voluptatibus. Nobis placeat distinctio rerum vitae dolorum. Voluptatem repellat nisi ducimus earum fugit optio dignissimos accusantium, exercitationem fugiat. Laborum porro modi autem asperiores accusantium incidunt, adipisci ex illum quidem quis enim dignissimos consequuntur, dolore obcaecati? Tempora neque quod quaerat iure suscipit rerum reprehenderit et nesciunt nihil.</p>
      </div>
    </section>
  )
}

export default PostDetails