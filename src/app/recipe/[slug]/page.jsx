import React, { use } from 'react'
import Image from 'next/image'
import { BsClock, BsClockHistory, BsPeople } from 'react-icons/bs'
import slugify from 'slugify'

const RecipePage = async({params}) => {
    const {slug} = params;
    var res = await fetch(`${process.env.APP_URL}/api/recipe/${slug}`);
    if (!res.ok) {
      return <h1>Not Found</h1>
    }
    var recipe = await res.json();
  return (
    <main className="page">
    <div className="recipe-page">
      <section className="recipe-hero">
        <div className=' relative w-full items-center justify-center flex' >

        <img src={recipe?.image} alt="" className=' w-56 rounded-2xl object-contain'/>
        </div>
        <article className="recipe-info">
          <h2>{recipe?.title}</h2>
          <p>{recipe?.description}</p>

          <div className="recipe-icons">
            <article className='flex flex-col' >
              <BsClock className='self-center'/>
              <h5>prep time</h5>
              <p>{recipe?.prepTime} min.</p>
            </article>
            <article className='flex flex-col' >
              <BsClockHistory className='self-center' />
              <h5>cook time</h5>
              <p>{recipe?.cookTime} min.</p>
            </article>
            <article className='flex flex-col' >
              <BsPeople className='self-center'/>
              <h5>serving</h5>
              <p>{recipe?.servings} </p>
            </article>
          </div>

          <p className="recipe-tags">
            Tags :
            {recipe?.tags.sort().map((tag, index) => {
              const slug = slugify(tag, { lower: true })

              return (
                // <Link to={`/tags/${slug}`} key={index}>
                //   {tag}
                // </Link>
                <a href={`/tags/${slug}`}  key={index}>
                  {tag}
                </a>
              )
            })}
          </p>
        </article>
      </section>

      <section className="recipe-content">
        <article>
          <h4>instructions</h4>
          {recipe?.instructions.map((item, index) => {
            return (
              <div key={index} className="single-instruction">
                <header>
                  <p>step {index + 1}</p>
                  <div />
                </header>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
        <article className="second-column">
          <div>
            <h4>ingredients</h4>
            {recipe?.ingredients.map((item, index) => {
              return (
                <p key={index} className="single-ingredient">
                  {item
                    .toLowerCase()
                    .split(' ')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')}
                </p>
              )
            })}
          </div>
          <div>
            <h4>tools</h4>
            {recipe?.tools.sort().map((item, index) => {
              return (
                <p key={index} className="single-tool cursor-pointer">
                  {item?.name}
                </p>
              )
            })}
          </div>
        </article>
      </section>
    </div>
  </main>
  )
}

export default RecipePage