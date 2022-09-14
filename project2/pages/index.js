import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MeetupList from '../components/meetups/MeetupList'
// Development-local / staging
// production -production server
const DUMMY_MEETUPS=[
  {
    id:'ml',
    title:'A First Meetup',
    image:'https://www.industrialempathy.com/posts/image-optimizations/'
,
    address:'Some address 5 ,12345 some city',
    discription:' tis is a first meetup!'

  },
  {
    id: 'ml',
    title: 'A First Meetup',
    image: 'https://www.industrialempathy.com/posts/image-optimizations/'
    ,
    address: 'Some address 5 ,12345 some city',
    discription: ' tis is a first meetup!'

  }
]


export default function Home() {
  return (
    <MeetupList meetup={DUMMY_MEETUPS}/>
  )
}
