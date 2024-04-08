import React from 'react'
import Image from 'next/image'
import { BsClock, BsClockHistory, BsPeople } from 'react-icons/bs'
import slugify from 'slugify'

const RecipePage = () => {
    const recipe = {
        title: 'Pancakes',
        description: 'Delicious pancakes',
        prepTime: 10,
        cookTime: 20,
        servings: 4,
        tags: ['breakfast', 'pancakes'],
        instructions: ['Mix the ingredients', 'Cook the pancakes'],
        ingredients: ['flour', 'milk', 'eggs'],
        tools: ['bowl', 'pan'],
        image: 'pancakes.jpg'
    }
    const { title, description, prepTime, cookTime, servings, tags, instructions, ingredients, tools, image } = recipe

  return (
    <main className="page">
    <div className="recipe-page">
      <section className="recipe-hero">
        <div className=' relative' >

        <img src="/food_img.jpg" alt="" className=' w-56 rounded-2xl object-contain'/>
        </div>
        <article className="recipe-info">
          <h2>{title}</h2>
          <p>{description}</p>

          <div className="recipe-icons">
            <article className='flex flex-col' >
              <BsClock className='self-center'/>
              <h5>prep time</h5>
              <p>{prepTime} min.</p>
            </article>
            <article className='flex flex-col' >
              <BsClockHistory className='self-center' />
              <h5>cook time</h5>
              <p>{cookTime} min.</p>
            </article>
            <article className='flex flex-col' >
              <BsPeople className='self-center'/>
              <h5>serving</h5>
              <p>{servings} </p>
            </article>
          </div>

          <p className="recipe-tags">
            Tags :
            {tags.sort().map((tag, index) => {
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
          {instructions.map((item, index) => {
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
            {ingredients.map((item, index) => {
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
            {tools.sort().map((item, index) => {
              return (
                <p key={index} className="single-tool cursor-pointer">
                  {item}
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