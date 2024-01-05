import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {E, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, Center, HStack, Heading, Image, Link, Text, VStack} from "@chakra-ui/react"
import NextLink from "next/link"
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
<NextLink href="/"
passHref={true}>
<Link>
<HStack>
<Image src="logo.png"
sx={{"height": "3em"}}/>
<Heading size="lg">
{`Python UG BE`}</Heading></HStack></Link></NextLink>
<HStack>
<NextLink href="https://www.meetup.com/python-user-group-belgium/"
passHref={true}>
<Link>
<Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png"
sx={{"height": "3em"}}/></Link></NextLink>
<NextLink href="https://github.com/python-usergroup-belgium"
passHref={true}>
<Link>
<Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
sx={{"height": "3em"}}/></Link></NextLink>
<NextLink href="/events"
passHref={true}>
<Link>
<Image src="https://cdn-icons-png.flaticon.com/512/55/55281.png"
sx={{"height": "3em", "marginX": "0.25em"}}/></Link></NextLink></HStack></HStack></Box>
<VStack>
<Center sx={{"paddingTop": 60, "paddingBottom": 48, "background": "url('blob.jpg')", "backgroundSize": "cover", "width": "100%"}}>
<VStack spacing="1.5em"
sx={{"fontSize": "2em"}}>
<Heading sx={{"fontSize": "2em", "paddingX": 8, "color": "white"}}>
{`Python User Group `}
<Text sx={{"backgroundImage": "linear-gradient(271.68deg, #beee6a 0.75%, #e02b1b 88.52%)", "backgroundClip": "text"}}>
{`Belgium`}</Text></Heading>
<NextLink href="https://www.meetup.com/python-user-group-belgium/events/"
passHref={true}>
<Link sx={{"padding": "0.5em", "boxShadow": "rgba(235, 80, 63, 0.8) 0 15px 30px -10px", "backgroundImage": "linear-gradient(144deg,#d90909,#eb3f3f 50%,#ebb73f)", "borderRadius": "1em", "color": "white", "_hover": {"opacity": 0.85}}}>
{`Check out our events!`}</Link></NextLink></VStack></Center>
<Box src="https://sessionize.com/api/v2/um0003tc/view/Sessions"
element="iframe"
as="iframe"
sx={{"width": "100%", "height": "600px"}}/>
<Center sx={{"fontSize": "1em", "width": "100%", "maxHeight": 12, "paddingY": 2, "zIndex": "500", "background": "gray"}}>
<Text as="b"
sx={{"color": "rgb(237 233 254)", "display": "flex"}}>
{`Made with ❤️, powered by`}
<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/600px-Python_logo_01.svg.png"
sx={{"height": "1.5em"}}/>
{`+`}
<Image src="https://avatars.githubusercontent.com/u/104714959"
sx={{"height": "1.5em", "borderRadius": "0.25rem"}}/></Text></Center></VStack>
<NextHead>
<title>{`Events`}</title>
<meta name="description"
content="A Pynecone app."/>
<meta content="favicon.ico"
property="og:image"/></NextHead></Box>
)
}