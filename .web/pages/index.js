import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {E, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Code, HStack, Heading, Image, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack} from "@chakra-ui/react"
import NextLink from "next/link"
import {HamburgerIcon} from "@chakra-ui/icons"
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
<Image src="favicon.ico"/>
<Heading>
{`PUG BE`}</Heading></HStack></Link></NextLink>
<Box sx={{"display": ["none", "none", "none", "block"]}}>
<Breadcrumb separator="|"
sx={{"color": "rgb(107,99,246)"}}>
<BreadcrumbItem>
<BreadcrumbLink sx={{"href": "#"}}>
<Heading size="md">
{`Home`}</Heading></BreadcrumbLink></BreadcrumbItem>
<BreadcrumbItem>
<BreadcrumbLink sx={{"href": "#"}}>
<Heading size="md">
{`Docs`}</Heading></BreadcrumbLink></BreadcrumbItem>
<BreadcrumbItem>
<BreadcrumbLink sx={{"href": "#"}}>
<Heading size="md">
{`Link`}</Heading></BreadcrumbLink></BreadcrumbItem></Breadcrumb></Box>
<Box sx={{"display": ["block", "block", "block", "none"]}}>
<Menu>
<MenuButton>
<HamburgerIcon/></MenuButton>
<MenuList>
<NextLink passHref={true}
href="https://openai.com/api/">
<Link>
<MenuItem>
{`About GPT`}</MenuItem></Link></NextLink>
<NextLink passHref={true}
href="https://openai.com/api/">
<Link>
<MenuItem>
{`Sign Out`}</MenuItem></Link></NextLink>
<MenuDivider/>
<NextLink passHref={true}
href="https://openai.com/api/">
<Link>
<MenuItem>
{`About GPT`}</MenuItem></Link></NextLink>
<NextLink passHref={true}
href="https://openai.com/api/">
<Link>
<MenuItem>
{`Sign Out`}</MenuItem></Link></NextLink></MenuList></Menu></Box></HStack></Box>
<VStack>
<Center sx={{"paddingTop": 48, "paddingBottom": 32, "background": ["radial-gradient(circle at 22% 11%,rgba(62, 180, 137,.20),hsla(0,0%,100%,0) 19%),radial-gradient(circle at 82% 25%,rgba(33,150,243,.18),hsla(0,0%,100%,0) 35%),radial-gradient(circle at 25% 61%,rgba(250, 128, 114, .28),hsla(0,0%,100%,0) 55%)"], "width": "100%"}}>
<VStack spacing="1.5em"
sx={{"fontSize": "2em"}}>
<Heading sx={{"fontSize": "2em", "paddingX": 8}}>
{`Python User Group `}
<Text sx={{"backgroundImage": "linear-gradient(271.68deg, #EE756A 0.75%, #756AEE 88.52%)", "backgroundClip": "text"}}>
{`Belgium`}</Text></Heading>
<NextLink passHref={true}
href="https://www.meetup.com/python-user-group-belgium/events/">
<Link sx={{"padding": "0.5em", "boxShadow": "rgba(151, 65, 252, 0.8) 0 15px 30px -10px", "backgroundImage": "linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)", "borderRadius": "1em", "color": "white", "_hover": {"opacity": 0.85}}}>
{`Check out our events!`}</Link></NextLink></VStack></Center>
<Box sx={{"width": "70%", "paddingY": 32, "fontSize": 32}}>
<ReactMarkdown children="`None`"
components={{"h1": ({node, ...props}) => <Heading size='2xl' {...props} />, "h2": ({node, ...props}) => <Heading size='xl' {...props} />, "h3": ({node, ...props}) => <Heading size='lg' {...props} />, "p": Text, "a": Link, "code": ({node, inline, className, children, ...props}) =>                      {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}}
remarkPlugins={[remarkMath, remarkGfm]}
rehypePlugins={[rehypeKatex]}
src="">
{`## What we're about

The Python User Group in Belgium is a community of Python enthusiasts who come together to learn, share, and discuss all things Python. Members of the group range from beginner to advanced levels, and everyone is welcome to join. The group meets on a regular basis to learn from presentations and workshops, share their own experiences and projects, and network with other members. In the future, the group might also host regular events such as hackathons and coding competitions, to promote Python and its uses. Whether you are a seasoned developer or just starting out with Python, the Python User Group in Belgium is the place to be for anyone interested in the language.

The focus is on knowledge sharing and community building, commercial intents are frowned upon. All events are entirely free-of-charge.`}</ReactMarkdown></Box>
<Center sx={{"width": "100%", "paddingY": 6, "zIndex": "500", "background": "gray"}}>
<Text as="b"
sx={{"fontSize": "1.5em"}}>
{`Python User Group Belgium`}</Text></Center></VStack>
<NextHead>
<title>{`Pynecone App`}</title>
<meta content="A Pynecone app."
name="description"/>
<meta content="favicon.ico"
property="og:image"/></NextHead></Box>
)
}