import { useEffect, useState } from 'react'
import { client } from '@/api/sanity/client'
import type { Flashcard } from '@/types/flashcardType'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

export const SanityFlashcardsPage: React.FC = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([])

  useEffect(() => {
    const fetchFlashcards = async () => {
      const data = await client.fetch<Flashcard[]>(`
        *[_type == "flashcard"]{
          _id,
          question,
          answer,
          frontImage,
          backImage,
        }
      `)
      setFlashcards(data)
    }

    fetchFlashcards()
  }, [])

  return (
    <div>
      <h1>Flashcards</h1>
            {flashcards.map(card => (
                <div key={card._id} style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
                    <p><strong>Q:</strong> {card.question}</p>
                    <p><strong>A:</strong> {card.answer}</p>
                    {card.frontImage && (
                        <div>
                            <strong>Front image:</strong>
                            <img
                                src={urlFor(card.frontImage).width(300).url()}
                                alt="Front"
                                style={{ display: 'block', marginTop: 8 }}
                            />
                        </div>
                    )}
                    {card.backImage && (
                        <div>
                            <strong>back image:</strong>
                            <img
                                src={urlFor(card.backImage).width(300).url()}
                                alt="back"
                                style={{ display: 'block', marginTop: 8 }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}