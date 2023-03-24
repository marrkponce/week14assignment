
import HarryPotter from '../Movie-Posters/HarryPotter.jpg' 
import Lord from '../Movie-Posters/Lord.jpg'
import StarWars from '../Movie-Posters/StarWars.jpg'

 export const data = [
  {   
      id: 1,
      img: HarryPotter,
      title: "Harry Potter",
      text: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      reviews: [
        {
           "stars": 4,
           "comment": "Great Movie! Big fan of the books!"
         }
       ]
  },
  {
      id: 2,
      img: Lord,
      title: "Lord of the Rings",
      text: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman",
      reviews: [
        {
           "stars": 4,
           "comment": "Way better than the first one"
         }
       ]
  },
  {
      id: 3,
      img: StarWars,
      title: "Star Wars",
      text: "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
      reviews: [
        {
           "stars": 5,
           "comment": "A heart warming film about a father and son <3"
         }
       ]
  },
]