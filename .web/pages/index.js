import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {E, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import {Box, Center, Code, HStack, Heading, Image, Link, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import {Prism} from "react-syntax-highlighter"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
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
<Heading size="lg">
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
<Center sx={{"paddingTop": 60, "paddingBottom": 48, "background": "url('blob.jpg')", "backgroundSize": "cover", "width": "100%"}}>
<VStack spacing="1.5em"
sx={{"fontSize": "2em"}}>
<Heading sx={{"fontSize": "2em", "paddingX": 8, "color": "white"}}>
{`Python User Group `}
<Text sx={{"backgroundImage": "linear-gradient(271.68deg, #beee6a 0.75%, #e02b1b 88.52%)", "backgroundClip": "text"}}>
{`Belgium`}</Text></Heading>
<NextLink passHref={true}
href="https://www.meetup.com/python-user-group-belgium/events/">
<Link sx={{"padding": "0.5em", "boxShadow": "rgba(235, 80, 63, 0.8) 0 15px 30px -10px", "backgroundImage": "linear-gradient(144deg,#d90909,#eb3f3f 50%,#ebb73f)", "borderRadius": "1em", "color": "white", "_hover": {"opacity": 0.85}}}>
{`Check out our events!`}</Link></NextLink></VStack></Center>
<Box sx={{"whiteSpace": "pre-line", "width": "60%", "paddingY": 32, "fontSize": 24}}>
<ReactMarkdown children="`None`"
components={{"h1": ({node, ...props}) => <Heading size='2xl' {...props} />, "h2": ({node, ...props}) => <Heading size='xl' {...props} />, "h3": ({node, ...props}) => <Heading size='lg' {...props} />, "p": Text, "a": Link, "ul": UnorderedList, "li": ListItem, "code": ({node, inline, className, children, ...props}) =>                     {         const match = (className || '').match(/language-(?<lang>.*)/);         return !inline ? (           <Prism             children={String(children).replace(/ $/, '')}             language={match ? match[1] : ''}             {...props}           />         ) : (           <Code {...props}>             {children}           </Code>         );       }}}
remarkPlugins={[remarkMath, remarkGfm]}
rehypePlugins={[rehypeKatex, rehypeRaw]}
src=""
sx={{"paddingBottom": "0.5rem"}}>
{`# Python User Group Belgium

## What we're about

The Python User Group in Belgium is a community of Python enthusiasts who come together to learn, share, and discuss all things Python. Members of the group range from beginner to advanced levels, and everyone is welcome to join. The group meets on a regular basis to learn from presentations and workshops, share their own experiences and projects, and network with other members. In the future, the group might also host regular events such as hackathons and coding competitions, to promote Python and its uses. Whether you are a seasoned developer or just starting out with Python, the Python User Group in Belgium is the place to be for anyone interested in the language.

The focus is on knowledge sharing and community building, commercial intents are frowned upon. All events are entirely free-of-charge.

<!-- [[[cog
import cog
import utils

cog.out(
  utils.url2eventstr("https://www.meetup.com/python-user-group-belgium/events/rss/")
)
]]] -->
## Upcoming events

<!-- [[[end]]] -->

## Presentations

We welcome everyone from the community to participate! First time speaker of experienced, we're happy to have you!

### Guidelines

We appreciate the time, effort and interest you put in delivering your talk. To ensure we are all aligned in expectations, please be mindful of the following points when preparing/delivering your session:

- Commercial intents are frowned upon (avoid "sales pitches")
- Talks should be around 20 minutes (not including Q&A)
- Be mindful of people's different levels of expertise (expected experience or requirements for a tutorial/workshop is a good idea)
- Abide by the [code of conduct](code-of-conduct)

### Topics

We are interested in all things Python! Would like to share but not sure where to start? Here are some topics/ideas we're always on the lookout for:

- How to get started with a particular library/framework
- Best practices/tips and tricks for new Python developers
- Personal experience/review on a particular library/framework
- How Python is being used for education
- Personal project walk through
- Hardware/infrastructure
- Security tools and securing Python
- Data science, AI, Machine Learning
- Video Games (or game-related tooling) written in Python
- Embedded software (MicroPython, CircuitPython, etc.)
- Tutorials/workshops
- Lightening talks

### Apply

Would you like to give a talk or workshop? Would like to have the next meetup in your city/region? Please do reach out!

- [Murilo Cunha](mailto:murilo.k.s.cunha95@gmail.com)
- [Vitale Sparacello](mailto:vitale.spara@gmail.com)

## Code of conduct

We abide by the code of conduct defined in the Python Software Foundation (PSF). Therefore, **we stand behind being open, considerate and respectful. Gracefully accepting constructive criticism, acknowledging people's time and effort. Always focusing on what's best for the community**.

More information on [python.org/psf/conduct/](https://www.python.org/psf/conduct/).

## Contribute

Our aim is to create a space for the Python community in Belgium. Therefore, we welcome contributions and encourage friendly discussions and feedback!

### Sponsor

Reach out to [Murilo Cunha](mailto:murilo.k.s.cunha95@gmail.com) or [Vitale Sparacello](mailto:vitale.spara@gmail.com) if you'd like to sponsor an event. We're always looking for help with the beers, food or locations.

The contributions made by sponsors play a vital role in creating a vibrant and welcoming atmosphere that encourages community involvement and active participation.

- At a minimum, we expect sponsors to provide a venue that can accommodate approximately 50 seats 🪑
- Although optional, providing food and drinks are welcomed highly and appreciated! 🍕🍻
- Sponsors can place their banner near the presentation area and will be recognized on social media and during the event 👏
- Activities related to recruitment or sales are not permitted during the meetup ⛔️

The success of the event is highly dependent on the collective support and involvement of its members.

- Active participation and promotion of the meetup by all community members are highly encouraged 📣
- Third-party organizations are welcome to share information about the event to help increase awareness and participation 🤝

### Reach out

We'd like to hear from you! Feel free to open an issue or open a pull request at [github.com/python-usergroup-belgium/.github](https://github.com/python-usergroup-belgium/.github).
`}</ReactMarkdown></Box>
<Center sx={{"fontSize": "1em", "width": "100%", "maxHeight": 12, "paddingY": 2, "zIndex": "500", "background": "gray"}}>
<Text as="b"
sx={{"color": "rgb(237 233 254)", "display": "flex"}}>
{`Made with ❤️, powered by`}
<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/600px-Python_logo_01.svg.png"
sx={{"height": "1.5em"}}/>
{`+`}
<Image src="https://pynecone.io/logo.png"
sx={{"height": "1.5em"}}/></Text></Center></VStack>
<NextHead>
<title>{`Python UG BE`}</title>
<meta name="description"
content="A Pynecone app."/>
<meta property="og:image"
content="favicon.ico"/></NextHead></Box>
)
}