import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {E, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import {Box, Center, Code, HStack, Heading, Image, Link, Text, VStack} from "@chakra-ui/react"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import {Prism} from "react-syntax-highlighter"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import NextHead from "next/head"

const EVENT = "http://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"events": [{"name": "state.hydrate"}]})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const Event = events => setState({
  ...state,
  events: [...state.events, ...events],
})
useEffect(() => {
  const update = async () => {
    if (result.state != null) {
      setState({
        ...result.state,
        events: [...state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(state, result, setResult, EVENT, router)
  }
  update()
})
return (
<Box sx={{"position": "relative"}}>
<Box sx={{"position": "fixed", "width": "100%", "top": "0px", "zIndex": "500"}}>
<HStack justify="space-between"
sx={{"borderBottom": "0.2em solid #F0F0F0", "paddingX": "2em", "paddingY": "1em", "bg": "rgba(255,255,255, 0.90)"}}>
<NextLink passHref={true}
href="/">
<Link>
<HStack>
<Image src="logo.png"
sx={{"height": "3em"}}/>
<Heading>
{`Python UG BE`}</Heading></HStack></Link></NextLink>
<HStack>
<NextLink passHref={true}
href="https://www.meetup.com/python-user-group-belgium/">
<Link>
<Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png"
sx={{"height": "3em"}}/></Link></NextLink>
<NextLink passHref={true}
href="https://github.com/python-usergroup-belgium">
<Link>
<Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
sx={{"height": "3em"}}/></Link></NextLink></HStack></HStack></Box>
<VStack>
<Center sx={{"paddingTop": 48, "paddingBottom": 32, "background": ["radial-gradient(circle at 22% 11%,rgba(62, 180, 137,.20),hsla(0,0%,100%,0) 19%),radial-gradient(circle at 82% 25%,rgba(33,150,243,.18),hsla(0,0%,100%,0) 35%),radial-gradient(circle at 25% 61%,rgba(250, 128, 114, .28),hsla(0,0%,100%,0) 55%)"], "width": "100%"}}>
<VStack spacing="1.5em"
sx={{"fontSize": "2em"}}>
<Heading sx={{"fontSize": "2em", "paddingX": 8}}>
{`Python User Group `}
<Text sx={{"backgroundImage": "linear-gradient(271.68deg, #EE756A 0.75%, #756AEE 88.52%)", "backgroundClip": "text"}}>
{`Belgium`}</Text></Heading>
<NextLink passHref={true}
href="#about">
<Link sx={{"padding": "0.5em", "boxShadow": "rgba(151, 65, 252, 0.8) 0 15px 30px -10px", "backgroundImage": "linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)", "borderRadius": "1em", "color": "white", "_hover": {"opacity": 0.85}}}>
{`Check out our events!`}</Link></NextLink></VStack></Center>
<Box sx={{"width": "70%", "paddingY": 32, "fontSize": 32}}>
<ReactMarkdown children="`None`"
components={{"h1": ({node, ...props}) => <Heading size='2xl' {...props} />, "h2": ({node, ...props}) => <Heading size='xl' {...props} />, "h3": ({node, ...props}) => <Heading size='lg' {...props} />, "p": Text, "a": Link, "code": ({node, inline, className, children, ...props}) =>                      {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}}
remarkPlugins={[remarkMath, remarkGfm]}
rehypePlugins={[rehypeKatex]}
src=""
sx={{"id": "about"}}>
{`## What we're about

The Python User Group in Belgium is a community of Python enthusiasts who come together to learn, share, and discuss all things Python. Members of the group range from beginner to advanced levels, and everyone is welcome to join. The group meets on a regular basis to learn from presentations and workshops, share their own experiences and projects, and network with other members. In the future, the group might also host regular events such as hackathons and coding competitions, to promote Python and its uses. Whether you are a seasoned developer or just starting out with Python, the Python User Group in Belgium is the place to be for anyone interested in the language.

The focus is on knowledge sharing and community building, commercial intents are frowned upon. All events are entirely free-of-charge.`}</ReactMarkdown></Box>
<Center sx={{"fontSize": "1.5em", "width": "100%", "maxHeight": 12, "paddingY": 2, "zIndex": "500", "background": "gray"}}>
<Text as="b"
sx={{"color": "rgb(237 233 254)", "display": "flex"}}>
{`Built with ❤️, powered by`}
<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/600px-Python_logo_01.svg.png"
sx={{"height": "1.5em"}}/>
{`+`}
<Image src="https://pynecone.io/logo.png"
sx={{"height": "1.5em"}}/></Text></Center></VStack>
<NextHead>
<title>{`Python UG BE`}</title>
<meta content="A Pynecone app."
name="description"/>
<meta property="og:image"
content="favicon.ico"/></NextHead></Box>
)
}